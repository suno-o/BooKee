import { useState, useContext } from "react"
import { ModalContext, ModalContextType } from "../.."
import { useAppDispatch } from "@/state"
import { useCashAccounts, useCategories } from "@/state/user/hooks"
import { addTransaction } from "@/state/transactionsV2"
import { refetchUserData } from "@/state/user"
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
  const cashAccounts = useCashAccounts();
  const accountOptions: Option[] = [];
  cashAccounts.forEach(account => {
    accountOptions.push({
      label: `${account.bankName} ${account.accountName}`,
      value: account.id,
    })
  })
  
  const categories = useCategories();
  const categoryOptions: Option[] = [];
  categories.forEach(cat => {
    categoryOptions.push({
      label: cat.name,
      value: cat.id,
    })
  })
  
  /* form data */
  const [data, setData] = useState<TransactionData>(initialTransactionData);
  const [postReqLoading, setPostReqLoading] = useState(false);

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

    setPostReqLoading(true);
    dispatch(addTransaction({
      transactionInput: {
        transactionType: TransactionType.CASH_EARNING,
        userId: '1', // hard code for now fix later
        ...data,
      }
    }))
      .then(() => {
        setPostReqLoading(false);
        dispatch(refetchUserData());
        closeModal();
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
            customStyles={{ align: 'left', p: '8px 16px', maxHeight: 160 }}
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
            customStyles={{ align: 'left', p: '8px 16px', maxHeight: 160 }}
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
          Amount: <TextInput type='number' step="0.01" onChange={inputChangeHandler('amount')} />
        </Label>
      </Wrapper>
      <StyledButton loading={postReqLoading} disabled={postReqLoading} customStyles={{ br: 24 }} onClick={submit}>Submit</StyledButton>
    </form>
  )
}

export default EarningForm;