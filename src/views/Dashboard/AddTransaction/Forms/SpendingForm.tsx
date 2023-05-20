import { useState, useEffect, useContext } from "react"
import { ModalContext, ModalContextType } from "../.."
import { useAppDispatch } from "@/state"
import { useAccountsByType, useCategories } from "@/state/user/hooks"
import { addTransaction } from "@/state/transactionsV2"
import { refetchUserData } from "@/state/user"
import styled from "styled-components"
import DropDown from "@/components/DropDown"
import { Wrapper, Label, TextInput, StyledButton } from './styles'
import { Option } from "@/components/DropDown"
import { Account } from "@/state/user/types"
import { TransactionType } from "@prisma/client"

const FORM_ANIMATION_DURATION_MS = 800;

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

const SpendingForm = () => {
  const dispatch = useAppDispatch();
  const { closeModal } = useContext(ModalContext) as ModalContextType;

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
  const { cashAccounts, creditAccounts } = useAccountsByType();
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
    setData(data => ({...data, [key]: e.target.value}));
  }

  const onSpendingTypeChange = (value: string) => {
    setSpendingType(value);
    setData(data => ({...data, accountId: initialTransactionData.accountId})); // reset accountId on changing spending type
  }

  const validateInput = () => {
    if (data.amount !== 0 && data.description.length <= 50 && data.accountId !== '' && data.categoryId !== '')
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
        ...data,
        transactionType: (spendingType === 'Cash') ? TransactionType.CASH_SPENDING : TransactionType.CREDIT_SPENDING,
        userId: '1', // hard code for now fix later
        amount: Math.abs(data.amount) * -1,
      }
    }))
      .then(() => {
        setPostReqLoading(false);
        dispatch(refetchUserData());
        closeModal();
      })
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
            Amount: <TextInput type='number' onChange={inputChangeHandler('amount')} />
          </Label>
        </Wrapper>
      </Form>
      
      <StyledButton loading={postReqLoading} disabled={postReqLoading} bgTheme='secondary' onClick={submit} customStyles={{ br: 24 }}>Submit</StyledButton>
    </div>
  )
}

export default SpendingForm;


const Form = styled.form<{show: boolean; ds: boolean}>`
  overflow: ${p => p.ds ? 'visible' : 'hidden'};
  max-height: ${p => p.show ? 500 : 0}px;
  transition: max-height ${FORM_ANIMATION_DURATION_MS}ms;
`