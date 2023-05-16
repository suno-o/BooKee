import { request, gql } from "graphql-request"
import { mapAccount } from "./helper"
import { Category, AccountResponse } from "./types"

interface CategoriesResponse {
  categories: Category[];
}

export const getUserCategories = async () => {
  const res = await request<CategoriesResponse>(
    'api/graphql',
    gql`
      {
        categories {
          id,
          name
        }
      }
    `
  )
  
  const { categories } = res;
  return categories;
}

interface AccountsResponse {
  accounts: AccountResponse[];
}

export const getUserAccounts = async () => {
  const res = await request<AccountsResponse>(
    'api/graphql',
    gql`
      {
        accounts {
          id,
          accountType,
          name,
          balance,
          bank {
            id
            name
          }
        }
      }
    `
  )
  
  const { accounts } = res;
  return accounts.map(mapAccount);
}