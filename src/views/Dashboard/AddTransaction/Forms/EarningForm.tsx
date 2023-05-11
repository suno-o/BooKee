import { useState } from "react"
import { useAppSelector } from "@/state"
import { selectAccountsByType } from "@/state/dashboard/selector"
import DropDown from "@/components/DropDown"
import { Wrapper, Label, TextInput, StyledButton } from './styles'
import { Option } from "@/components/DropDown"

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

const EarningForm = () => {
  
  /* dropdown data */
  const { cashAccounts } = useAppSelector(selectAccountsByType);
  const { categories } = useAppSelector(state => state.dashboard);

  const accountOptions: Option[] = [];
  cashAccounts.forEach(account => {
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
    <form onSubmit={submit}>
      <Wrapper>
        <Label>
          Account: 
          <DropDown
            label='Select account'
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
      <StyledButton onClick={submit} disabled={!allFormDataProvided()} br={24}>Submit</StyledButton>
    </form>
  )
}

export default EarningForm;