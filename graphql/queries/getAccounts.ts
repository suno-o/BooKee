import prisma from "../../lib/prisma"
import { AccountType } from "@prisma/client"

export const getAccounts = () => {
  return prisma.account.findMany({
    where: {
      NOT: {
        accountType: {
          equals: AccountType.CREDIT
        }
      }
    },
    include: {
      bank: true
    }
  });
}