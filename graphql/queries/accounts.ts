import { Decimal } from "@prisma/client/runtime";
import prisma from "../../lib/prisma"

const getAccountBalance = (id: number) => {
  return prisma.account.findUnique({
    where: { id },
    select: { balance: true }
  })
}

export const updateAccountBalance = async (id: number, transactionAmount: number) => {
  const queryResult = await getAccountBalance(id);
  
  const balance = queryResult?.balance ? queryResult.balance : new Decimal(0);
  const newBalance = balance.plus(transactionAmount);
  newBalance.toDP(2);

  return prisma.account.update({
    where: { id },
    data: {
      balance: newBalance
    }
  })
}

export const getAccounts = () => {
  return prisma.account.findMany({
    include: {
      bank: true
    },
    orderBy: {
      balance: 'desc'
    }
  });
}