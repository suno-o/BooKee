import { PrismaClient } from "@prisma/client"
import { banks, userBalanceSnapshot, categories, accounts, transactions } from './seedData'

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      username: 'testuser1',
      password: 'testuser1',
      fname: 'test',
      lname: 'user',
    }
  })

  await prisma.bank.createMany({
    data: banks,
  })

  await prisma.userBalanceSnapshot.createMany({
    data: userBalanceSnapshot,
  })

  await prisma.category.createMany({
    data: categories,
  })

  await prisma.account.createMany({
    data: accounts,
  })

  await prisma.transaction.createMany({
    data: transactions,
  })
}

main()
  .catch(e => {
    console.log(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })