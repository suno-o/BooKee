import prisma from "../../lib/prisma"

export const getBanks = () => {
  return prisma.bank.findMany();
}