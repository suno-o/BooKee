import { useMemo } from "react"
import AnimatedTabView from "@/components/AnimatedTabView"
import TransactionTable from "@/components/BooKeeTable/TransactionTable"
import { Transaction } from "@/state/transactions/types"

interface TransactionSummaryTableProps {
  theme: string;
  header: string;
  transactions: Transaction[];
  dataLoaded: boolean;
}

interface TransactionGroupByCategory {
  bankId: string;
  bankName: string;
  categoryId: string;
  categoryName: string;
}

interface TransactionSummaryData {
  [key: string]: {label: string | number; amount: number};
}

/* 
 * helper: Calculate transactions total amount by provided idKey
 * 
 * ex. Provided groupSumBy='categoryId' and labelForGroup='categoryName', it will return the object in the following format:
 * {
 *   [categoryId-1]: { 
 *     name: {categoryName for categoryId-1},
 *     amount: {sum of transactions in categoryId-1}
 *   }, 
 *   ...
 * }
 */
const getTransactionsTotalAmount = (transactions: Transaction[], groupSumBy: keyof TransactionGroupByCategory, labelForGroup: keyof TransactionGroupByCategory) => {
  return transactions.reduce((summaryData: TransactionSummaryData, transaction: Transaction) => {
    const id = transaction[groupSumBy];
    const label = transaction[labelForGroup];
    
    if (summaryData[id]) {
      summaryData[id].amount += transaction.amount;
    } else {
      summaryData[id] = {
        label,
        amount: transaction.amount
      }
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
    getTransactionsTotalAmount(transactions, 'bankId', 'bankName'),
    getTransactionsTotalAmount(transactions, 'categoryId', 'categoryName')
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