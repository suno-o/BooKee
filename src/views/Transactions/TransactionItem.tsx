import { Transaction } from "@/state/transactions/types"
import styled, { css } from "styled-components"
import { formatCash } from "@/utils/numbers"
import { prettifyDateConcise } from "@/utils/date"

/* TransactionItem Component */
const TransactionItem = ({
  amount,
  description,
  created,
  categoryName,
  bankName,
}: Transaction) => (
  <Container>
    <AccountInfo>
      <Date>{prettifyDateConcise(created)}</Date>
      <Bank>{bankName}</Bank>
      <Category>{categoryName}</Category>
    </AccountInfo>
    <Description>{description}</Description>
    <Amount gain={amount > 0}>{formatCash(amount)}</Amount>
  </Container>
)
export default TransactionItem;


/* TransactionHeader Component */
export const TransactionHeader = () => (
  <HeaderContainer>
    <AccountInfo>
      <Date>Date</Date>
      <Bank>Bank</Bank>
      <Category>Category</Category>
    </AccountInfo>
    <Description>Description</Description>
    <Amount>Amount</Amount>
  </HeaderContainer>
)


/* styles */
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: ${p => p.theme.shadows.grey};
  border-radius: 24px;
  margin: 16px 0;
  padding: 16px 32px;
  font-size: 0.8rem;

  ${p => p.theme.mediaQueries.md} {
    gap: 16px;
    border-radius: 0;
    border-bottom: 1px solid ${p => p.theme.colors.text_grey_lighter};
    box-shadow: none;
    margin: 0;
    padding: 12px 0;
  }
`

const HeaderContainer = styled(Container)`
  display: none;

  ${p => p.theme.mediaQueries.md} {
    display: flex;
    font-weight: bold;
  }
`

/* For a larger screen, it will render table-like Transaction list */
const largeScreenColumntStyle = css`
  ${p => p.theme.mediaQueries.md} {
    font-weight: inherit;
    font-size: inherit;
    color: inherit;
  }

  ${p => p.theme.mediaQueries.lg} {
    font-size: 0.9rem;
  }
`

/* AccountInfo Container */
const AccountInfo = styled.div`
  flex: 1.5;

  ${p => p.theme.mediaQueries.md} {
    flex: 3 0 0;
    align-items: center;
    display: flex;
    gap: 16px;
  }
`

/* AccountInfo child items */
const AccountIntoItemStyle = css`
  ${p => p.theme.mediaQueries.md} {
    flex: 1;
    display: inherit;
  }
`
const Date = styled.div`
  display: none;
  color: ${p => p.theme.colors.text_grey};
  ${AccountIntoItemStyle}
  ${largeScreenColumntStyle}
`
const Bank = styled.div`
  font-weight: 600;
  font-size: 1rem;

  ${AccountIntoItemStyle}
  ${largeScreenColumntStyle}
`
const Category = styled.div`
  ${AccountIntoItemStyle}
  ${largeScreenColumntStyle}
`

/* Description */
const Description = styled.div`
  flex: 3;
  color: ${p => p.theme.colors.text_grey};

  ${largeScreenColumntStyle}
`

/* Amount */
const Amount = styled.div<{gain?: boolean}>`
  flex: 1;
  text-align: right;
  font-weight: bold !important;
  font-size: 1.3rem;
  ${p => p.gain !== undefined && `color: ${p.theme.colors[p.gain ? 'secondary' : 'failure']} !important;`}

  ${largeScreenColumntStyle}
`