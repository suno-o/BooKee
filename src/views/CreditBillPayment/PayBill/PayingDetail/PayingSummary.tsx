import { useState } from "react"
import styled from "styled-components"
import DropDown from "@/components/DropDown"
import Button from "@/components/Button"
import { formatCash } from "@/utils/numbers"
import { Transaction } from "@/state/creditBillPayment/types"
import { CarryOverTransactionIDs } from "."

interface Props {
  transactions: Transaction[];
  carryoverTransactionIds: CarryOverTransactionIDs;
}

export default function PayingDetail({
  transactions,
  carryoverTransactionIds
}: Props) {
  const [payingBank, setPayingBank] = useState('');
  const bankSelectHandler = (selected: string) => setPayingBank(selected);
  
  // focusing on UI for now, optimize these later
  const totalBalance = transactions.reduce((sum: number, transaction: Transaction) => (sum + transaction.amount), 0);
  const totalCarryover = Object.keys(carryoverTransactionIds).reduce((sum: number, id: string) => {
    if (carryoverTransactionIds[id] === true) {
      const trans = transactions.find((transaction: Transaction) => transaction.id === id);
      return sum + (trans ? trans.amount : 0);
    }
    
    return sum;
  }, 0);

  /* record transaction after credit bill payment */
  const onSubmit = () => {
    alert('submit');
  }
  
  return (
    <PayingDetailContainer>
      <AmountWrapper>
        <p>Total balance</p>
        <p>{formatCash(totalBalance)}</p>
      </AmountWrapper>
      <AmountWrapper>
        <p>Amount carrying over to May</p>
        <p>{formatCash(totalCarryover)}</p>
      </AmountWrapper>
      <TotalAmountWrapper>
        <p>Total amount paying this month</p>
        <p>{formatCash(totalBalance - totalCarryover)}</p>
      </TotalAmountWrapper>
      
      <Note>
      {
        (totalBalance - totalCarryover < 0) ?
          'Please make the payment, then select the account you used to make the payment below to record the transaction on BooKee.' :
          'Please click complete to carry over full balance.'
      }
      </Note>

      {(totalBalance - totalCarryover < 0) && (
        <PayingBank>
          <p>Bank:</p>
          <BankDropDown
            selected={payingBank}
            onChange={bankSelectHandler}
            label={'Bank'}
            listItems={['TD', 'CIBC', 'BMO', 'RBC', 'Scotia', 'Tangerine']}
          />  
        </PayingBank>
      )}

      <Button onClick={onSubmit}>Complete</Button>
    </PayingDetailContainer>
  )
}


/* styles */
const PayingDetailContainer = styled.div`
  flex: 2;
`

const AmountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
  font-size: 0.8rem;
  color: ${p => p.theme.colors.text_grey};

  ${p => p.theme.mediaQueries.sm} {
    font-size: 0.9rem;
  }
`

const TotalAmountWrapper = styled(AmountWrapper)`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${p => p.theme.colors.text_grey};
  padding-top: 4px;
  font-weight: 700;
  color: inherit;
`

const Note = styled.p`
  margin: 8px 0 16px;
  font-size: 0.7rem;
  color: ${p => p.theme.colors.text_grey};
`

const PayingBank = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 8px 0;
`

const BankDropDown = styled(DropDown)`
  display: inline-block;
`