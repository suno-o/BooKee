import { useState, createContext } from "react"
import { useFetchUserData } from "@/state/user/hooks"
import styled from "styled-components"
import { DashboardHeading } from "./styles"
import { PageSection } from "@/components/Layout/Page"
import Accounts from "./Accounts"
import AddTransaction from "./AddTransaction"
import MonthlySummary from "./MonthlySummary"
import Modal from "@/components/Modal"
import Button from "@/components/Button"

/* Add Transaction Modal context */
export type ModalContextType = { closeModal: () => void }
export const ModalContext = createContext<ModalContextType | null>(null);

/* Dashboard */
export default function Dashboard() {
  useFetchUserData();

  const [showModal, setShowModal] = useState(false);
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
        <MonthlySummary />
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