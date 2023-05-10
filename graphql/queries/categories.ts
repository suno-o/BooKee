import prisma from "../../lib/prisma"

export const getCategories = () => {
  return prisma.category.findMany();
}