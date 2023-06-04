import React, { useState } from "react"
import styled from "styled-components"
import PayingSummary from "./PayingSummary"
import PayingTransactionSelect from "./PayingTransactionSelect"
import { Transaction } from "@/state/transactions/types"

export type CarryOverTransactions = {[key: string]: boolean};

interface Props {
  transactions: Transaction[];
}

export default function PayingDetail({
  transactions
}: Props) {
  const [carryoverTransactions, setCarryoverTransactions] = useState<CarryOverTransactions>({});
  
  const transactionSelectHandler = (id: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setCarryoverTransactions(state => ({...state, [id]: !e.target.checked}))
  }
  
  return (
    <PayingDetailContainer>
      <PayingTransactionSelect
        transactions={transactions}
        transactionSelectHandler={transactionSelectHandler}
      />
      <PayingSummary
        transactions={transactions}
        carryoverTransactions={carryoverTransactions}
      />
    </PayingDetailContainer>
  )
}

/* styles */
const PayingDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  ${p => p.theme.mediaQueries.md} {
    flex-direction: row;
  }
`