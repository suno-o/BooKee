import { useContext } from "react"
import styled, { ThemeContext } from "styled-components"
import { formatCash } from "@/utils/numbers"
import { getListItemLightBgColor } from "@/utils/colors"
import { Balance } from "@/state/mockTypes"

interface Props {
  data: Balance[];
}

export default function BalanceList({data}: Props) {
  const theme = useContext(ThemeContext);

  return (
    <Container>
      <Wrapper>
      {data.map((item: Balance, index) => {
        const [bgTheme, opacity] = getListItemLightBgColor(index);
        return (
          <BankBalance key={item.bankName} bgColor={`${theme.colors[bgTheme]+opacity}`}>
            <Bank>{item.bankName}</Bank>
            <Amount>{formatCash(item.balance)}</Amount>
          </BankBalance>
        )
      })}
      </Wrapper>
    </Container>
  )
}


/* styles */
const Container = styled.div`
  border-radius: 16px;
  padding: 8px 0;
  text-align: center;
`

const Wrapper = styled.div`
  overflow-x: auto;
  white-space: nowrap;
  padding-bottom: 12px;
  
  &::-webkit-scrollbar {
    border-radius: 16px;
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 16px;
    background-color: ${p => p.theme.colors.text_grey}20;
    margin-left: 16px;
    margin-right: 16px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 16px;
    background-color: ${p => p.theme.colors.text_grey}30;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: ${p => p.theme.colors.text_grey}50;
  }
`

const BankBalance = styled.div<{bgColor: string}>`
  display: inline-block;
  border-radius: 20px;
  background-color: ${p => p.bgColor};
  margin: 0 8px;
  padding: 8px 12px;
  text-align: center;
  color: ${p => p.theme.colors.text_grey_dark};

  &:first-child {
    margin-left: 16px;
  }
`

const Bank = styled.div`
  font-weight: 400;
  font-size: 0.9rem;
`

const Amount = styled.div`
  font-weight: 700;
`