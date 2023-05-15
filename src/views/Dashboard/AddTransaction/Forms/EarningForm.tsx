import { useState, useContext } from "react"
import { ModalContext, ModalContextType } from "../.."
import { useAppDispatch, useAppSelector } from "@/state"
import { addTransaction } from "@/state/dashboard"
import { selectAccountsByType } from "@/state/dashboard/selector"
import DropDown from "@/components/DropDown"
import { Wrapper, Label, TextInput, StyledButton } from './styles'
import { Option } from "@/components/DropDown"
import { TransactionType } from "@prisma/client"

interface TransactionData {
  accountId: string;
  categoryId: string;
  description: string;
  amount: number;
}

const initialTransactionData = {
  accountId: '',
  categoryId: '',
  description: '',
  amount: 0,
}

const EarningForm = () => {
  const dispatch = useAppDispatch();
  const { closeModal } = useContext(ModalContext) as ModalContextType;
  
  /* dropdown data */
  const { cashAccounts } = useAppSelector(selectAccountsByType);
  const { categories, postTransactionLoading } = useAppSelector(state => state.dashboard);

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
    const value = e.target.type === 'number' ? parseFloat(e.target.value) : e.target.value;
    setData(data => ({...data, [key]: value}));
  }

  const validateInput = () => {
    if (data.amount > 0 && data.description.length <= 50 && data.accountId !== '' && data.categoryId !== '')
      return true;
    return false;
  }

  const submit = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if (!validateInput()) {
      alert('Please provide ...');
      return;
    }

    dispatch(addTransaction({
      transactionInput: {
        transactionType: TransactionType.CASH_EARNING,
        userId: '1', // hard code for now fix later
        ...data,
      }
    }))
      // close modal on post complete
      .then(res => {
        const status = res?.meta?.requestStatus;
        if (status === 'fulfilled') closeModal();
      })
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
          Description: <TextInput type='text' maxLength={50} onChange={inputChangeHandler('description')} />
        </Label>
      </Wrapper>
      <Wrapper>
        <Label>
          Amount: <TextInput type='number' placeholder="10.50" step="0.01" onChange={inputChangeHandler('amount')} />
        </Label>
      </Wrapper>
      <StyledButton loading={postTransactionLoading} br={24} onClick={submit}>Submit</StyledButton>
    </form>
  )
}

export default EarningForm;