import { useState } from "react"
import { useFetchMonthlyTransactions, useAllTransactions } from "@/state/transactionsV2/hooks"
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
  const {} = useFetchMonthlyTransactions();
  const { data, transactionsLoaded } = useAllTransactions();
  
  const [filters, setFilters] = useState(initialFilter);

  /* filter transactions */
  let filteredTransactions = data;
  if (filters.transactionType)
    filteredTransactions = filteredTransactions.filter(transaction => transaction.transactionType === filters.transactionType);
  if (filters.bank)
    filteredTransactions = filteredTransactions.filter(transaction => transaction.bankName === filters.bank);
  if (filters.category)
    filteredTransactions = filteredTransactions.filter(transaction => transaction.categoryName === filters.category);

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
        transactionsLoaded={transactionsLoaded}
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