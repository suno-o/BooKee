import { TransactionType } from "@prisma/client"
import prisma from "../../lib/prisma"
import { updateAccountBalance } from "../queries/accounts"
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

export const addTransaction = async (_: TransactionInput, args: Args) => {
  // validate


  // convert ids to int
  const data = parseIdsToInt(args.input);

  // update account balance
  const transactionType = args.input.transactionType;

  if (transactionType === TransactionType.CASH_EARNING  || transactionType === TransactionType.CASH_SPENDING) {
    await updateAccountBalance(data.accountId, data.amount);
  }

  // create transaction
  return prisma.transaction.create({ data });
}