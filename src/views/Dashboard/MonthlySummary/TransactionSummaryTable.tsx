import { useMemo, useState } from "react"
import styled, { css } from "styled-components"
import TransactionTable from "@/components/TransactionTable"
import { Transaction } from "@/state/dashboard/types"

interface TransactionSummaryTableProps {
  theme: string;
  header: string;
  transactions: Transaction[];
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
  transactions
}: TransactionSummaryTableProps) {
  const tabs = ['Bank', 'Category'];
  const tabData = useMemo(() => ([
    getTransactionSummaryDataByCategory(transactions, 'bankName'),
    getTransactionSummaryDataByCategory(transactions, 'categoryName')
  ]), [transactions]);
  
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  const onTabChange = (tabName: string) => () => setCurrentTab(tabName);
  
  return (
    <>
      <Header>
        <ItemHeader colorTheme={theme}>{header}</ItemHeader>
        <Tab>
          <TabItemsWrapper>
            {tabs.map((tab: string) => {
              if (tab === currentTab)
                return <ActiveTab key={tab} bgTheme={theme} onClick={onTabChange(tab)}>{tab}</ActiveTab>

              return <TabItem key={tab} onClick={onTabChange(tab)}>{tab}</TabItem>
            })}
          </TabItemsWrapper>
        </Tab>
      </Header>
      <Content scrollTheme={theme}>
        {tabData.map((data: TransactionSummaryData, index: number) => (
          <AnimatedWrapper key={tabs[index]} index={index} visible={currentTab === tabs[index]}>
            <TransactionTable
              header={tabs[index]}
              data={data}
            />
          </AnimatedWrapper>
        ))}
      </Content>
    </>
  )
}


/* styles */
const Header = styled.div`
  position: relative;
  padding: 16px;
`

const ItemHeader = styled.div<{colorTheme?: string}>`
  font-weight: 500;
  color: ${p => p.theme.colors[p.colorTheme ? p.colorTheme : 'text_grey_dark']};
`

const Content = styled.div<{scrollTheme?: string}>`
  display: flex;
  max-height: 300px;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0 16px 16px;

  &::-webkit-scrollbar {
    border-radius: 16px;
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 16px;
    background-color: ${p => p.theme.colors[p.scrollTheme ? p.scrollTheme : 'text-grey']}30;
    margin-bottom: 8px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 16px;
    background-color: ${p => p.theme.colors[p.scrollTheme ? p.scrollTheme : 'text-grey']}90;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: ${p => p.theme.colors[p.scrollTheme ? p.scrollTheme : 'text-grey']}d0;
  }
`

const AnimatedWrapper = styled.div<{index: number; visible: boolean}>`
  min-width: 100%;
  opacity: ${p => p.visible ? 1 : 0};
  margin-left: ${p => {
    if (p.index === 0)
      return p.visible ? 0 : '100%';
    else
      return p.visible ? `${p.index * -100 - 100}%` : 0;
  }};
  transition: opacity, margin-left, 0.3s ease-out;
`

/* tabs */
const Tab = styled.div`
  position: absolute;
  top: 18px;
  right: 16px;
`

const TabItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  border-radius: 16px;
  background-color: ${p => p.theme.colors.sky_purple};
`

const TabItemStyle = css`
  z-index: 100;
  border-radius: 16px;
  padding: 2px 4px;
  font-size: 0.7rem;
`

const ActiveTab = styled.span<{bgTheme?: string}>`
  ${TabItemStyle}
  background-color: ${p => p.theme.colors[p.bgTheme ? p.bgTheme : 'text_grey']};
  color: white;
`

const TabItem = styled.span`
  ${TabItemStyle}
  cursor: pointer;
  color: ${p => p.theme.colors.text_grey};
`