import prisma from "../../lib/prisma"
import { Transaction } from "../types"

interface Args {
  month: number;
  year: number;
}

export const getTransactions = (_: Transaction, args: Args) => {
  const startDate = new Date(args.year, args.month, 1);
  const endDate = new Date(args.year, args.month+1, 1); // less than first day of next month

  return prisma.transaction.findMany({
    where: {
      created: {
        gte: startDate,
        lt: endDate
      },
    },
    include: {
      account: {
        include: {
          bank: true
        }
      }
    }
  });
}