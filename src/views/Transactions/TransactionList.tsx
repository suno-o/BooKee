import { Transaction } from "@/state/transactions/types";
import styled from "styled-components"
import Separator from "@/components/Separator"
import TransactionItem, { TransactionHeader } from "./TransactionItem"
import { prettifyDate } from "@/utils/date"

interface Props {
  transactions: Transaction[];
}

const TransactionList = ({
  transactions
}: Props) => {
  const transactionList = [<TransactionHeader key='header' />]; // header will only show on window width >= md

  /* generate transaction list with date separators */
  let i=0, prevDate: string;
  while (i < transactions.length) {
    prevDate = transactions[i].created;
    
    /* group all transactions made on the same day */
    const sameDayTransactions = [];

    // push date separator
    sameDayTransactions.push(
      <DateSeparator key={transactions[i].created}>{prettifyDate(transactions[i].created)}</DateSeparator>
    );

    // push all transactions made on the same date
    while (i < transactions.length && prevDate === transactions[i].created) {
      sameDayTransactions.push(
        <TransactionItem
          key={transactions[i].id}
          {...transactions[i]}
        />
      );
      i++;
    }

    transactionList.push(<SameDayTransactions key={prevDate}>{sameDayTransactions}</SameDayTransactions>);
  }

  return <div>{transactionList}</div>;
}

export default TransactionList;

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