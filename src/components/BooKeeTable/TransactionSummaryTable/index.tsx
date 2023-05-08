import { useMemo } from "react"
import AnimatedTabView from "@/components/AnimatedTabView"
import TransactionTable from "@/components/BooKeeTable/TransactionTable"
import { Transaction } from "@/state/dashboard/types"

interface TransactionSummaryTableProps {
  theme: string;
  header: string;
  transactions: Transaction[];
  dataLoaded: boolean;
}

interface TransactionSummaryData {
  [key: string]: number;
}

/* 
 * helper: calculate transaction amount total by category
 * (ex. if the category is 'bank_name', it will calculate total transaction amounts by each bank - TD: $1000, RBC: $2000, etc..)
 */
const getTransactionSummaryDataByCategory = (transactions: Transaction[], category: string) => {
  const categoryKey = category as keyof Transaction;

  return transactions.reduce((summaryData: TransactionSummaryData, transaction: Transaction) => {
    const categoryValue = transaction[categoryKey];
    
    if (summaryData[categoryValue]) {
      summaryData[categoryValue] += transaction.amount;
    } else {
      summaryData[categoryValue] = transaction.amount;
    }
    
    return summaryData;
  }, Object.create(null))
}

/**
 * TransactionSummaryTable Component
 */
export default function TransactionSummaryTable({
  header,
  theme,
  transactions,
  dataLoaded
}: TransactionSummaryTableProps) {
  const tabHeaders = ['Bank', 'Category'];
  const tabData = useMemo(() => ([
    getTransactionSummaryDataByCategory(transactions, 'bankName'),
    getTransactionSummaryDataByCategory(transactions, 'categoryName')
  ]), [transactions]);

  const renderTab = (currentTab: string, tabData: TransactionSummaryData) => (
    <TransactionTable
      header={currentTab}
      data={tabData}
      dataLoaded={dataLoaded}
    />
  )
  
  return (
    <AnimatedTabView
      theme={theme}
      title={header}
      tabHeaders={tabHeaders}
      tabData={tabData}
      renderTab={renderTab}
    />
  )
}