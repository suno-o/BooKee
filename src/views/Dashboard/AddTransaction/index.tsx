import { useState } from "react"
import styled, { css } from "styled-components"
import EarningForm from "./Forms/EarningForm"
import SpendingForm from "./Forms/SpendingForm"

const AddTransaction = () => {
  const [currentTab, setCurrentTab] = useState('earning');
  const onTabChange = (tab: string) => () => setCurrentTab(tab);

  return (
    <Container>
      <Tab>
        <TabItemsWrapper>
          {['earning', 'spending'].map((tab: string) => {
            const bgTheme = tab === 'earning' ? 'primary' : 'secondary';

            if (tab === currentTab)
              return <ActiveTab key={tab} bgTheme={bgTheme} onClick={onTabChange(tab)}>{tab}</ActiveTab>

            return <TabItem key={tab} onClick={onTabChange(tab)}>{tab}</TabItem>
          })}
        </TabItemsWrapper>
      </Tab>

      {currentTab === 'earning' ? <EarningForm /> : <SpendingForm />}
    </Container>
  )
}

export default AddTransaction;

const Container = styled.div`
  padding: 32px;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
`

/* tabs */
const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const TabItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-radius: 20px;
  background-color: ${p => p.theme.colors.sky_purple};
  padding: 4px 4px;
`

const TabItemStyle = css`
  z-index: 100;
  border-radius: 16px;
  padding: 8px 16px;
  text-transform: capitalize;
  font-size: 0.9rem;
`

const ActiveTab = styled.div<{bgTheme?: string}>`
  ${TabItemStyle}
  background-color: ${p => p.theme.colors[p.bgTheme ? p.bgTheme : 'text_grey']};
  color: white;
`

const TabItem = styled.div`
  ${TabItemStyle}
  cursor: pointer;
  color: ${p => p.theme.colors.text_grey};
`