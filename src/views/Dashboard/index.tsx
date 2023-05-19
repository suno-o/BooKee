import { useState, useEffect, useMemo, createContext } from "react"
import { useAppDispatch, useAppSelector } from "@/state"
import { fetchDashboardData, updateMonthyear } from "@/state/dashboard"
import styled from "styled-components"
import { DashboardHeading, DropDownWrapper } from "./styles"
import { PageSection } from "@/components/Layout/Page"
import Accounts from "./Accounts"
import AddTransaction from "./AddTransaction"
import MonthlySummary from "./MonthlySummary"
import DropDown from "@/components/DropDown"
import Modal from "@/components/Modal"
import { getLastNMonthLabelsAndMap } from "@/utils/date"
import Button from "@/components/Button"

/* Add Transaction Modal context */
export type ModalContextType = { closeModal: () => void }
export const ModalContext = createContext<ModalContextType | null>(null);

/* Dashboard */
export default function Dashboard() {
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState(false);
  const { dashboardDataFetchNeeded, selectedMonthyear } = useAppSelector(state => state.dashboard);
  const { labels, labelValueMap } = useMemo(() => getLastNMonthLabelsAndMap(6), []);
  
  useEffect(() => {
    /* fetch accounts, monthly balances and transactions data on initial page load */
    if (dashboardDataFetchNeeded === true) {
      dispatch(fetchDashboardData(labelValueMap[selectedMonthyear]));
    }
  }, [dashboardDataFetchNeeded])

  const handleChange = (newMonthname: string) => {
    dispatch(updateMonthyear(newMonthname));
  }

  const closeModal = () => setShowModal(false);

  return (
    <>
      {/* Move this later */}
      <AddTransactionButton onClick={() => setShowModal(true)} bgTheme='secondary' customStyles={{ width: 'auto', br: 8 }}>
        + Add Transaction
      </AddTransactionButton>

      <PageSection>
        <DashboardHeading>Accounts</DashboardHeading>
        <Accounts />
      </PageSection>

      <PageSection>
        <DashboardHeading>Monthly Summary</DashboardHeading>
        <DropDownWrapper>
          <DropDown
            selected={selectedMonthyear}
            onChange={handleChange}
            listItems={labels}
            customStyles={{ width: '150px' }}
          />
        </DropDownWrapper>
        <MonthlySummary
          monthValue={labelValueMap[selectedMonthyear]}
        />
      </PageSection>

      <Modal
        isShowing={showModal}
        close={closeModal}
        maxWidth={500}
      >
        <ModalContext.Provider value={{ closeModal }}>
          <AddTransaction />
        </ModalContext.Provider>
      </Modal>
    </>
  )
}

const AddTransactionButton = styled(Button)`
  position: absolute;
  top: calc(80px + 16px);
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${p => p.theme.mediaQueries.lg} {
    right: 32px;
  }
`