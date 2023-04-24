import styled from "styled-components"
import TransactionItem, {TransactionHeader} from "./TransactionItem"
import Separator from "@/components/Separator"
import { PageSection } from "@/components/Layout/Page"
import { prettifyDate } from "@/utils/date"
import { aprilTransactionData } from "@/state/mockData"
import { Transaction } from "@/state/mockTypes"

export default function Transactions() {
  const { transactions } = aprilTransactionData;

  /* render transaction list with date separator */
  const renderDatedTransactionList = () => {
    let prevDate: string;
    const renderArr = [<TransactionHeader key='header' />]; // header will only show on window width >= md

    transactions.forEach((item: Transaction) => {
      if (prevDate !== item.date) {
        prevDate = item.date;
        renderArr.push(<DateSeparator key={item.date}>{prettifyDate(item.date)}</DateSeparator>);
      }
      renderArr.push(<TransactionItem key={item.id} {...item} />);
    })

    return renderArr;
  }

  /* render */
  return (
    <>
      <Section>
        {renderDatedTransactionList()}
      </Section>
    </>
  )
}

const Section = styled(PageSection)`
  padding: 0 24px;

  ${p => p.theme.mediaQueries.sm} {
    padding: 0 64px;
  }

  ${p => p.theme.mediaQueries.md} {
    padding: 0 32px;
  }
`

const DateSeparator = styled(Separator)`
  margin-top: 64px;
  font-size: 0.8rem;

  /* only show date separators for screen width < md */
  ${p => p.theme.mediaQueries.md} {
    display: none;
  }
`