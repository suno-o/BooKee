import prisma from "../../lib/prisma"
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

export const addTransaction = (_: TransactionInput, args: Args) => {
  // validate
  
  return prisma.transaction.create({
    data: parseIdsToInt(args.input)
  });
}