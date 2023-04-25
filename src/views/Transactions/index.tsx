import styled from "styled-components"
import Filter from "./Filter"
import TransactionItem, {TransactionHeader} from "./TransactionItem"
import Separator from "@/components/Separator"
import { PageSection } from "@/components/Layout/Page"
import { prettifyDate } from "@/utils/date"
import { aprilTransactionData } from "@/state/mockData"

export default function Transactions() {
  const { transactions } = aprilTransactionData;
  
  /* render transaction list with date separators */
  const renderDatedTransactionList = () => {
    // check if transactions are empty
    if (transactions.length === 0) return [];

    const renderArr = [<TransactionHeader key='header' />]; // header will only show on window width >= md
    let i=0, prevDate: string;
    while (i < transactions.length) {
      prevDate = transactions[i].date;
      
      // group all transactions made on the same day
      const sameDayTransactions = [<DateSeparator key={transactions[i].date}>{prettifyDate(transactions[i].date)}</DateSeparator>];
      while (i < transactions.length && prevDate === transactions[i].date) {
        sameDayTransactions.push(<TransactionItem key={transactions[i].id} {...transactions[i]} />)
        i++;
      }
      renderArr.push(<SameDayTransactions key={prevDate}>{sameDayTransactions}</SameDayTransactions>);
    }
    return renderArr;
  }

  /* render */
  return (
    <>
      <Section>
        <Filter />
        {renderDatedTransactionList()}
      </Section>
    </>
  )
}


/* styles */
const Section = styled(PageSection)`
  padding: 0 24px;
  ${p => p.theme.mediaQueries.sm} { padding: 0 64px; }
  ${p => p.theme.mediaQueries.md} { padding: 0 32px; }
`

const SameDayTransactions = styled.div`
  margin: 64px 0;
  ${p => p.theme.mediaQueries.md} { margin: 0; }
`

const DateSeparator = styled(Separator)`
  margin: 32px;
  font-size: 0.8rem;

  /* only show date separators for screen width < md */
  ${p => p.theme.mediaQueries.md} {
    display: none;
  }
`