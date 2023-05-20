import { request, gql } from "graphql-request"
import { mapAccount, reformYearlyBalances } from "./helper"
import { Category, AccountResponse, YearlyBalanceResponse } from "./types"

/* queries */
const categoriesQuery = gql`
  categories {
    id,
    name
  }
`

const accountsQuery = gql`
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
`

const yearlyBalancesQuery = gql`
  yearlyBalances: balance_snapshots {
    month,
    balance
  }
`

/* fetch all user data */
export const getAllUserData = async () => {
  const res = await request<AllResponse>(
    'api/graphql',
    gql`
      {
        ${categoriesQuery}
        ${accountsQuery}
        ${yearlyBalancesQuery}
      }
    `
  )
  
  const { categories, accounts, yearlyBalances } = res;
  return {
    categories,
    accounts: accounts.map(mapAccount),
    yearlyBalances: reformYearlyBalances(yearlyBalances),
  };
}

/* fetch accounts */
export const getUserAccounts = async () => {
  const res = await request<AccountsResponse>(
    'api/graphql',
    gql`
      { 
        ${accountsQuery}
      }
    `
  )
  
  const { accounts } = res;
  return accounts.map(mapAccount);
}

/* types */
type AllResponse = CategoriesResponse & AccountsResponse & YearlyBalancesResponse;

interface CategoriesResponse {
  categories: Category[];
}

interface AccountsResponse {
  accounts: AccountResponse[];
}

interface YearlyBalancesResponse {
  yearlyBalances: YearlyBalanceResponse[];
}