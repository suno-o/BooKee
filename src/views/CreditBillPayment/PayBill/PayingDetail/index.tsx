import React, { useState } from "react"
import styled from "styled-components"
import PayingSummary from "./PayingSummary"
import PayingTransactionSelect from "./PayingTransactionSelect"
import { Transaction } from "@/state/creditBillPayment/types"

export type CarryOverTransactionIDs = {[key: string]: boolean};

interface Props {
  transactions: Transaction[];
}

export default function PayingDetail({
  transactions
}: Props) {
  const [carryoverTransactionIds, setCarryoverTransactionIds] = useState<CarryOverTransactionIDs>({});
  
  const transactionSelectHandler = (id: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setCarryoverTransactionIds(state => ({...state, [id]: !e.target.checked}))
  }
  
  return (
    <PayingDetailContainer>
      <PayingTransactionSelect
        transactions={transactions}
        transactionSelectHandler={transactionSelectHandler}
      />
      <PayingSummary
        transactions={transactions}
        carryoverTransactionIds={carryoverTransactionIds}
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