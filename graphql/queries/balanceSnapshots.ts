import prisma from "../../lib/prisma"

export const getBalanceSnapshots = () => {
  return prisma.userBalanceSnapshot.findMany({
    take: 12, // last 12 months
    orderBy: [
      { year: 'desc' },
      { month: 'desc' },
    ]
  })
}