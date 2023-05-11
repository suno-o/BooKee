import { useState, useEffect, FormEventHandler } from "react"
import { useAppSelector } from "@/state"
import { selectAccountsByType } from "@/state/dashboard/selector"
import styled from "styled-components"
import DropDown from "@/components/DropDown"
import { Wrapper, Label, TextInput, StyledButton } from './styles'
import { Option } from "@/components/DropDown"
import { Account } from "@/state/dashboard/types"

const FORM_ANIMATION_DURATION_MS = 800;

interface TransactionData {
  accountId: string;
  categoryId: string;
  amount: number;
}

const initialTransactionData = {
  accountId: '',
  categoryId: '',
  amount: 0,
}

const SpendingForm = () => {
  const [spendingType, setSpendingType] = useState('');
  const [showForm, setShowForm] = useState(spendingType !== '');
  const [delayedShow, setDS] = useState(showForm);

  /* delayedShow is used to change some style after animation is completed */
  useEffect(() => {
    const show = spendingType !== '';
    setShowForm(show);
    setTimeout(() => setDS(show), FORM_ANIMATION_DURATION_MS);
  }, [spendingType])
  
  /* dropdown data */
  const { cashAccounts, creditAccounts } = useAppSelector(selectAccountsByType);
  const { categories } = useAppSelector(state => state.dashboard);

  let accountsToUse: Account[] = [];
  if (spendingType === 'Cash')
    accountsToUse = cashAccounts;
  else if (spendingType === 'Credit')
    accountsToUse = creditAccounts;
  
  const accountOptions: Option[] = [];
  accountsToUse.forEach(account => {
    accountOptions.push({
      label: `${account.bankName} ${account.accountName}`,
      value: account.id,
    })
  })

  const categoryOptions: Option[] = [];
  categories.forEach(cat => {
    categoryOptions.push({
      label: cat.name,
      value: cat.id,
    })
  })
  
  /* form data */
  const [data, setData] = useState<TransactionData>(initialTransactionData);

  const dataChangeHandler = (key: string) => (value: string) => setData(data => ({...data, [key]: value}));
  const inputChangeHandler = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(data => ({...data, [key]: e.target.value}));
  }

  const onSpendingTypeChange = (value: string) => {
    setSpendingType(value);
    setData(data => ({...data, accountId: initialTransactionData.accountId})); // reset accountId on changing spending type
  }

  /* check if any empty fields */
  const allFormDataProvided = () => {
    if (data.amount !== 0 && data.accountId !== '' && data.categoryId !== '')
      return true;
    return false;
  }

  const submit = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if (allFormDataProvided()) {
      alert('submit')
    }
  }
  
  return (
    <div>
      <Wrapper>
        <Label>
          Spending type: 
          <DropDown
            label='Select spending type'
            selected={spendingType}
            onChange={onSpendingTypeChange}
            listItems={['Cash', 'Credit']}
            customStyles={{ align: 'left', p: '8px 16px' }}
          />
        </Label>
      </Wrapper>

      <Form show={showForm} ds={delayedShow} onSubmit={submit}>
        <Wrapper style={{margin: 0}}>
          <Label>
            Account: 
            <DropDown
              label={`Select ${spendingType === 'Cash' ? 'account' : 'credit card'}`}
              selected={data.accountId}
              onChange={dataChangeHandler('accountId')}
              options={accountOptions}
              customStyles={{ align: 'left', p: '8px 16px', maxWidth: 160 }}
            />
          </Label>
        </Wrapper>
        <Wrapper>
          <Label>
            Category:
            <DropDown
              label='Select category'
              selected={data.categoryId}
              onChange={dataChangeHandler('categoryId')}
              options={categoryOptions}
              customStyles={{ align: 'left', p: '8px 16px', maxWidth: 160 }}
            />
          </Label>
        </Wrapper>
        <Wrapper>
          <Label>
            Amount: <TextInput type='number' placeholder="100" onChange={inputChangeHandler('amount')} />
          </Label>
        </Wrapper>
      </Form>
      
      <StyledButton onClick={submit} bgTheme='secondary' disabled={!allFormDataProvided()} br={24}>Submit</StyledButton>
    </div>
  )
}

export default SpendingForm;


const Form = styled.form<{show: boolean; ds: boolean}>`
  overflow: ${p => p.ds ? 'visible' : 'hidden'};
  max-height: ${p => p.show ? 500 : 0}px;
  transition: max-height ${FORM_ANIMATION_DURATION_MS}ms;
`