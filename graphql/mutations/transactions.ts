import { TransactionType } from "@prisma/client"
import prisma from "../../lib/prisma"
import { updateAccountBalance } from "../mutations/accounts"
import { TransactionInput } from "../types"

/* Transactions */
interface Args {
  input: TransactionInput;
}

const parseIdsToInt = ({ userId, categoryId, accountId, ...rest }: TransactionInput) => ({
  ...rest,
  userId: parseInt(userId),
  categoryId: parseInt(categoryId),
  accountId: parseInt(accountId),
})

interface ParsedTransactionInput {
  transactionType: TransactionType;
  userId: number;
  accountId: number;
  categoryId: number;
  description: string;
  amount: number;
}

export const addTransaction = async (input: ParsedTransactionInput) => {
  // update account balance
  const transactionType = input.transactionType;

  if (transactionType === TransactionType.CASH_EARNING  || transactionType === TransactionType.CASH_SPENDING  || transactionType === TransactionType.CREDIT_BILL_PAYMENT) {
    await updateAccountBalance(input.accountId, input.amount);
  }

  // create transaction
  return prisma.transaction.create({ data: input });
}

export const addTransactionMutation = (_: TransactionInput, args: Args) => {
  // validate
  // ...

  // convert ids to int
  const input = parseIdsToInt(args.input);

  return addTransaction(input);
}