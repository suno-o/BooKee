import { useState, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "@/state"
import { fetchTransactions } from "@/state/transactions"
import { TransactionType } from "@prisma/client"
import styled from "styled-components"
import { PageSection } from "@/components/Layout/Page"
import Filter from "./Filter"
import TransactionList from "./TransactionList"

export type TransactionTypeFilter = TransactionType | string;

export interface Filters {
  transactionType: TransactionTypeFilter;
  bank: string;
  category: string;
}

const initialFilter = {
  transactionType: '',
  bank: '',
  category: ''
}

/* Transactions Component */
export default function Transactions() {
  const dispatch = useAppDispatch();
  const { transactions } = useAppSelector(state => state.transactions);
  const [filters, setFilters] = useState(initialFilter);

  /* filter transactions */
  let filteredTransactions = transactions;
  if (filters.transactionType)
    filteredTransactions = filteredTransactions.filter(transaction => transaction.transactionType === filters.transactionType);
  if (filters.bank)
    filteredTransactions = filteredTransactions.filter(transaction => transaction.bankName === filters.bank);
  if (filters.category)
    filteredTransactions = filteredTransactions.filter(transaction => transaction.categoryName === filters.category);
  
  useEffect(() => {
    dispatch(fetchTransactions({month: 3, year: 2023})); // hard code for now - change later
  }, [])

  const handleFilterChange = (key: string) => (value: TransactionTypeFilter) => {
    setFilters(state => ({ ...state, [key]: value }));
  }

  const resetCategoryFilter = () => {
    setFilters(state => ({ ...initialFilter, transactionType: state.transactionType }));
  }

  /* render */
  return (
    <Section>
      <Filter
        filters={filters}
        handleFilterChange={handleFilterChange}
        resetCategoryFilter={resetCategoryFilter}
      />
      <TransactionList
        transactions={filteredTransactions}
      />
    </Section>
  )
}


/* styles */
const Section = styled(PageSection)`
  padding: 0 24px;
  ${p => p.theme.mediaQueries.sm} { padding: 0 64px; }
  ${p => p.theme.mediaQueries.md} { padding: 0 32px; }
`