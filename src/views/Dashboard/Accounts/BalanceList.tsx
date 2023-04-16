import styled from "styled-components"
import { formatCash } from "@/utils/numbers"
import { Balance } from "@/state/mockTypes"

interface Props {
  data: Balance[];
}

export default function BalanceList({data}: Props) {

  return (
    <Container>
      <Wrapper>
      {data.map((item: Balance) => (
        <BankBalance key={item.bankName}>
          <Bank>{item.bankName}</Bank>
          <Amount>{formatCash(item.balance)}</Amount>
        </BankBalance>
      ))}
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  border-radius: 16px;
  padding: 12px 0;
`

const Wrapper = styled.div`
  overflow-x: auto;
  white-space: nowrap;
  padding-bottom: 10px;

  ${p => p.theme.mediaQueries.md} {
    max-width: 300px;
  }
  
  &::-webkit-scrollbar {
    border-radius: 16px;
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 16px;
    background-color: ${p => p.theme.colors.sky_purple};
    margin-left: 8px;
    margin-right: 8px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 16px;
    background-color: ${p => p.theme.colors.primary}40;
  }
`

const BankBalance = styled.div`
  display: inline-block;
  border-radius: 20px;
  background-color: ${p => p.theme.colors.sky_purple};
  margin: 0 8px;
  padding: 8px 12px;
  text-align: center;
  color: ${p => p.theme.colors.text_grey_dark};
`

const Bank = styled.div`
  font-weight: 400;
  font-size: 0.9rem;
`

const Amount = styled.div`
  font-weight: 700;
`