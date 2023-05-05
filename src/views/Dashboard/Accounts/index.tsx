import { useContext } from "react"
import { useAppSelector } from "@/state"
import { accountsAndBalancesSelector } from "@/state/dashboard/selector"
import styled, { ThemeContext } from "styled-components"
import Card from "@/components/Card"
import Skeleton from "@/components/Skeleton"
import LoadingIndicator from "@/components/LoadingIndicator"
import BalanceList from "./BalanceList"
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { formatCash } from "@/utils/numbers"

export default function Accounts() {
  const theme = useContext(ThemeContext);
  const { accounts, total, balanceSnapshots, accountDataLoaded } = useAppSelector(accountsAndBalancesSelector);

  return (
    <Container>
      <Account>
        {/* account balance total */}
        <BalanceCard styles={{bgTheme:'primary', colorTheme:'white'}}>
          <Card.Header>Total Balance</Card.Header>
          {accountDataLoaded ? (
            <BalanceCardContent>{formatCash(total)}</BalanceCardContent>
          ) : (
            <Skeleton width={120} height={36} />
          )}
        </BalanceCard>
        {/* account balance by bank */}
        <BalanceList data={accounts} dataLoaded={accountDataLoaded} />
      </Account>
      <GraphContainer>
        {accountDataLoaded ? (
          <GraphWrapper>
            <ResponsiveContainer width='99%' height={220}>
              <LineChart
                data={balanceSnapshots}
              >
                <CartesianGrid strokeWidth={0.3} />
                <XAxis dataKey="month" stroke={theme.colors.text_grey_light} strokeWidth={0.7} tickSize={5} tick={{fontSize: 10}} />
                <YAxis stroke={theme.colors.text_grey_light} strokeWidth={0.7} tickSize={5} tick={{fontSize: 12}} />
                <Line
                  type="monotone"
                  dataKey="balance"
                  stroke={theme.colors.primary}
                  strokeWidth={3}
                  isAnimationActive={process.env.NODE_ENV === 'production' ? true : false} // animation issue when strict mode is on
                />
              </LineChart>
            </ResponsiveContainer>
          </GraphWrapper>
        ) : (
          <LoadingWrapper>
            <LoadingIndicator height={32} width={32} />
          </LoadingWrapper>
        )}
      </GraphContainer>
    </Container>
  )
}

/* styles */
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  ${p => p.theme.mediaQueries.md} {
    flex-direction: row;
  }
`

const Account = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  box-shadow: ${p => p.theme.shadows.grey_blurry};

  ${p => p.theme.mediaQueries.md} {
    width: calc(50% - 16px);
  }
`

const BalanceCard = styled(Card)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 8px;
`

const BalanceCardContent= styled(Card.Content)`
  font-weight: bold;
  font-size: 2rem;
`

const GraphContainer = styled.div`
  box-shadow: ${p => p.theme.shadows.grey_blurry};
  border-radius: 16px;

  ${p => p.theme.mediaQueries.md} {
    width: calc(50% - 16px);
  }
`

const GraphWrapper = styled.div`
  padding: 16px 16px 0 0;
`

const LoadingWrapper = styled.div`
  width: 99%;
  height: calc(220px + 16px);
  display: flex;
  align-items: center;
  justify-content: center;
`