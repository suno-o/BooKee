import { useContext } from "react"
import { DashboardHeading } from "../styles"
import styled, { ThemeContext } from "styled-components"
import Card from "@/components/Card"
import BalanceList from "./BalanceList"
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { formatCash } from "@/utils/numbers"
import { accountData, yearlyBalanceData } from "@/state/mockData"

export default function Accounts() {
  const theme = useContext(ThemeContext);

  return (
    <>
      <DashboardHeading>Accounts</DashboardHeading>
      <Content>
        <Account>
          {/* account balance total */}
          <BalanceCard styles={{bgTheme:'primary', colorTheme:'white'}}>
            <Card.Header>Total Balance</Card.Header>
            <BalanceCardContent>{formatCash(accountData.total)}</BalanceCardContent>
          </BalanceCard>
          {/* account balance by bank */}
          <BalanceList data={accountData.balances}/>
        </Account>
        <GraphContainer>
          <ResponsiveContainer width='99%' height={220}>
            <LineChart
              data={yearlyBalanceData}
            >
              <CartesianGrid strokeWidth={0.3} />
              <XAxis dataKey="month" stroke={theme.colors.text_grey_light} strokeWidth={0.7} tickSize={5} tick={{fontSize: 10}} />
              <YAxis stroke={theme.colors.text_grey_light} strokeWidth={0.7} tickSize={5} tick={{fontSize: 12}} />
              <Line
                type="monotone"
                dataKey="balance"
                stroke={theme.colors.primary}
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </GraphContainer>
      </Content>
    </>
  )
}

/* styles */
const Content = styled.div`
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
  padding: 16px 16px 0 0;

  ${p => p.theme.mediaQueries.md} {
    width: calc(50% - 16px);
  }
`