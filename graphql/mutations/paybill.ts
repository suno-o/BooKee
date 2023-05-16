import { Prisma } from "@prisma/client";
import { addTransaction } from "./transactions"
import { PayBillInput } from "../types"
import { TransactionType } from "@prisma/client"

/* Pay Bill */
interface PayBillArgs {
  input: PayBillInput;
}

const parseIdsToInt = ({ userId, accountId, payTransactionIds, carryoverTransactionIds }: PayBillInput) => ({
  userId: parseInt(userId),
  accountId: parseInt(accountId),
  payTransactionIds: payTransactionIds.map(id => parseInt(id)),
  carryoverTransactionIds: carryoverTransactionIds.map(id => parseInt(id)),
})

export const payBill = async (_: PayBillInput[], args: PayBillArgs) => {
  // validate - all transactions should be payable/active credit transactions
  // ...

  const { userId, accountId, payTransactionIds, carryoverTransactionIds } = parseIdsToInt(args.input);

  try {
    await prisma.$transaction(async (tx) => {

      /* Handle credit bill payment */
      if (payTransactionIds.length > 0) {
        // calculate paying transactions total amount
        const calculateResult = await tx.transaction.aggregate({
          where: {
            id: {
              in: payTransactionIds
            }
          },
          _sum: {
            amount: true
          }
        })

        const total = calculateResult._sum.amount;
        if (!total || total.equals(0)) throw Error();

        // create bill payment transaction (type=CASH_SPENDING)
        const billPaymentTransaction = await addTransaction({
          userId,
          transactionType: TransactionType.CREDIT_BILL_PAYMENT,
          accountId,
          categoryId: 1,
          description: 'Credit Bill Payment',
          amount: total.toNumber(),
        })
        
        // record payment
        await tx.creditPayment.createMany({
          data: payTransactionIds.map(id => ({
            purchaseTransactionId: id,
            paymentTransactionId: billPaymentTransaction.id,
          }))
        })
      }

      /* Handle credit bill carryover */
      if (carryoverTransactionIds.length > 0) {
        const today = new Date();
        const nextMonth = new Date(today.getFullYear(), today.getMonth()+1, 1);

        // create new transactions
        await tx.$executeRaw`
          INSERT INTO "Transaction" ("userId", "transactionType", "accountId", "categoryId", "description", "amount", "created")
            SELECT "userId", "transactionType", "accountId", "categoryId", description, amount,
                   -- if paying in the same month, carry over date is the first date of next month, else (paying late) carry over date is now
                   CASE WHEN EXTRACT('month' FROM created) = ${today.getMonth()+1} THEN date_trunc('month', ${nextMonth})::date
                        ELSE ${today}
                   END as newDate
            FROM "Transaction"
            WHERE id in (${Prisma.join(carryoverTransactionIds)})
        `
        
        // update carried over transactions (keeping for record)
        await tx.transaction.updateMany({
          where: {
            id: {
              in: carryoverTransactionIds
            }
          },
          data: {
            transactionType: TransactionType.CREDIT_CARRYOVER
          }
        })
      }
      
    })
  } catch (err) {
    console.log(err)
  }
}