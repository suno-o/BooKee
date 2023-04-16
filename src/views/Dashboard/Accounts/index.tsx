import { DashboardHeading } from "../styles"
import styled from "styled-components"
import Card from "@/components/Card"
import BalanceList from "./BalanceList"
import { accountData } from "@/state/mockAccountData"
import { formatCash } from "@/utils/numbers"

export default function Accounts() {

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
          <BalanceList data={accountData.balanceByBank}/>
        </Account>
        <GraphContainer>
          Graph Here
        </GraphContainer>
      </Content>
    </>
  )
}

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
`

const BalanceCard = styled(Card)`
  flex: 1;
  padding-left: 8px;
  padding-right: 8px;
`

const BalanceCardContent= styled(Card.Content)`
  font-weight: bold;
  font-size: 2rem;
`

const GraphContainer = styled.div`
  flex: 2;
  box-shadow: ${p => p.theme.shadows.grey_blurry};
  border-radius: 16px;
`