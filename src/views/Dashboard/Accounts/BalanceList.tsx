import { useContext, useMemo } from "react"
import styled, { ThemeContext } from "styled-components"
import Skeleton from "@/components/Skeleton"
import { useHorizontalPaddleScroll } from "@/hooks/useHorizontalPaddleScroll"
import { formatCash } from "@/utils/numbers"
import { getListItemLightBgColor } from "@/utils/colors"
import { Account } from "@/state/user/types"

interface Props {
  data: Account[];
  dataLoaded?: boolean;
}

export default function BalanceList({
  data,
  dataLoaded
}: Props) {
  const theme = useContext(ThemeContext);
  const { scrollViewRef, leftPaddleVisible, rightPaddleVisible, onScroll } = useHorizontalPaddleScroll(data);

  /* generate bank balance views */
  const bankBalanceViews = useMemo(() => data.map((item: Account, index) => {
    const [bgTheme, opacity] = getListItemLightBgColor(index);
    return (
      <BankBalance key={item.bankName} bgColor={`${theme.colors[bgTheme]+opacity}`}>
        <Bank>{item.bankName}</Bank>
        <Amount>{formatCash(item.balance)}</Amount>
      </BankBalance>
    )
  }), [data]);

  return (
    <Container>
      <Wrapper>
        <Paddle visible={leftPaddleVisible} onClick={onScroll(false)}>&#10094;</Paddle>
        <BankBalances ref={scrollViewRef} lVisible={leftPaddleVisible} rVisible={rightPaddleVisible}>
          {dataLoaded ? (
            bankBalanceViews
          ) : (
            <Wrapper>
              <Skeleton height={60} width={80} mr={8} br={20} />
              <Skeleton height={60} width={80} mr={8} br={20} />
            </Wrapper>
          )}
        </BankBalances>
        <Paddle visible={rightPaddleVisible} onClick={onScroll(true)}>&#10095;</Paddle>
      </Wrapper>
    </Container>
  )
}


/* styles */
const Container = styled.div`
  border-radius: 16px;
  padding: 16px 8px;
  text-align: center;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const Paddle = styled.div<{visible: boolean}>`
  cursor: pointer;
  font-weight: bold;
  font-size: 1.1rem;
  color: ${p => p.visible ? `${p.theme.colors.text_grey}` : 'white'};
  ${p => !p.visible && 'pointer-events: none;'}
`

const BankBalances = styled.div<{lVisible: boolean; rVisible: boolean;}>`
  flex: 1;
  overflow-x: hidden;
  white-space: nowrap;
  scroll-behavior: smooth;
  ${p => p.lVisible && `border-left: 1px solid ${p.theme.colors.text_grey_lighter};`}
  ${p => p.rVisible && `border-right: 1px solid ${p.theme.colors.text_grey_lighter};`}
  margin: 0 8px;
  padding: 4px 0;
`

const BankBalance = styled.div<{bgColor: string}>`
  display: inline-block;
  border-radius: 20px;
  background-color: ${p => p.bgColor};
  margin-right: 8px;
  padding: 8px 12px;
  text-align: center;
  color: ${p => p.theme.colors.text_grey_dark};

  &:last-child {
    margin-right: 0;
  }
`

const Bank = styled.div`
  font-weight: 400;
  font-size: 0.9rem;
`

const Amount = styled.div`
  font-weight: 700;
`