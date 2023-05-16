import { useState, useMemo } from "react"
import { useAppDispatch } from "@/state"
import { useCashAccounts } from "@/state/user/hooks"
import { payBill } from "@/state/creditBillPayment"
import styled from "styled-components"
import DropDown from "@/components/DropDown"
import Button from "@/components/Button"
import { formatCash } from "@/utils/numbers"
import { Transaction } from "@/state/creditBillPayment/types"
import { CarryOverTransactions } from "."
import { Option } from "@/components/DropDown"

interface Props {
  transactions: Transaction[];
  carryoverTransactions: CarryOverTransactions;
}

export default function PayingDetail({
  transactions,
  carryoverTransactions
}: Props) {
  const dispatch = useAppDispatch();

  /* payable accounts */
  const accounts = useCashAccounts();

  const accountOptions: Option[] = [];
  accounts.forEach(account => {
    accountOptions.push({
      label: `${account.bankName} ${account.accountName}`,
      value: account.id,
    })
  })

  /* selected paying account */
  const [payingAccountId, setPayingAccountId] = useState('');
  const accountSelectHandler = (selected: string) => setPayingAccountId(selected);

  /* balances */
  const totalBalance = useMemo(() => transactions.reduce((sum: number, transaction: Transaction) => (sum + transaction.amount), 0), [transactions]); // cache total
  const totalCarryover = Object.keys(carryoverTransactions).reduce((sum: number, id: string) => {
    if (carryoverTransactions[id] === true) {
      const trans = transactions.find((transaction: Transaction) => transaction.id === id);
      return sum + (trans ? trans.amount : 0);
    }
    
    return sum;
  }, 0);

  /* record transaction after credit bill payment */
  const onSubmit = () => {
    if (payingAccountId === '') {
      alert('select account');
      return;
    }

    const userId = '1'; // hardcode for testing fix later
    const accountId = payingAccountId;
    const payTransactionIds = transactions
                                .filter(({id}) => (carryoverTransactions[id] === undefined || carryoverTransactions[id] === false))
                                .map(transaction => transaction.id);
    const carryoverTransactionIds = Object.keys(carryoverTransactions).filter(id => carryoverTransactions[id] === true);
    
    dispatch(payBill({ userId, accountId, payTransactionIds, carryoverTransactionIds }));
  }
  
  return (
    <PayingDetailContainer>
      <AmountWrapper>
        <p>Total balance</p>
        <p>{formatCash(totalBalance)}</p>
      </AmountWrapper>
      <AmountWrapper>
        <p>Amount carrying over to next month</p>
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
        <PayingAccount>
          <p>Account:</p>
          <AccountDropDown
            selected={payingAccountId}
            onChange={accountSelectHandler}
            label={'Choose account'}
            options={accountOptions}
          />  
        </PayingAccount>
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

const PayingAccount = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 8px 0;
`

const AccountDropDown = styled(DropDown)`
  display: inline-block;
`