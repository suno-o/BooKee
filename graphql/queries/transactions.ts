import prisma from "../../lib/prisma"
import { TransactionType } from "@prisma/client";
import { Transaction } from "../types"

/* Helper */
const getDateRange = (month: number, year: number) => {
  const startDate = new Date(year, month, 1);
  const endDate = new Date(year, month+1, 1); // use less than operator to compare with "endDate"

  return [startDate, endDate];
}

/* Transactions */
interface TransactionQueryArgs {
  month: number;
  year: number;
  type?: TransactionType;
}

export const getTransactions = (_: Transaction, args: TransactionQueryArgs) => {
  const [startDate, endDate] = getDateRange(args.month, args.year);

  let typeComparision = {};
  if (args.type) {
    typeComparision = { transactionType: { equals: args.type } }
  }

  return prisma.transaction.findMany({
    where: {
      created: {
        gte: startDate,
        lt: endDate
      },
      ...typeComparision,
    },
    orderBy: {
      created: 'desc',
    },
    include: {
      account: {
        include: {
          bank: true
        }
      },
      category: true,
      creditPurchase: {
        select: {
          paymentTransactionId: true,
        }
      },
    }
  });
}

/* Transactions sum by Type */
interface TransactionSumQueryArgs {
  month: number;
  year: number;
}

export const getTransactionsTotal = async (_: number, args: TransactionSumQueryArgs) => {
  const [startDate, endDate] = getDateRange(args.month, args.year);

  const results = await prisma.transaction.groupBy({
    by: ['transactionType'],
    where: {
      created: {
        gte: startDate,
        lt: endDate
      },
    },
    _sum: {
      amount: true
    }
  })

  return results.map(result => ({
    type: result.transactionType,
    total: result._sum.amount
  }));
}