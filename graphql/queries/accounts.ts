
import prisma from "../../lib/prisma"

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