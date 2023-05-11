import { useState, useEffect, useMemo } from "react"
import { useAppDispatch, useAppSelector } from "@/state"
import { fetchDashboardData, updateMonthyear } from "@/state/dashboard"
import Image from "next/image"
import addIcon from "@/assets/icons/add.png"
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

export default function Dashboard() {
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState(false);
  const { selectedMonthyear } = useAppSelector(state => state.dashboard);
  const { labels, labelValueMap } = useMemo(() => getLastNMonthLabelsAndMap(6), []);
  
  useEffect(() => {
    /* fetch accounts, monthly balances and transactions data on initial page load */
    dispatch(fetchDashboardData(labelValueMap[selectedMonthyear]));
  }, [])

  const handleChange = (newMonthname: string) => {
    dispatch(updateMonthyear(newMonthname));
  }

  return (
    <>
      <AddTransactionButton onClick={() => setShowModal(true)} width={50} height={50} br={25}>
        <Image src={addIcon} width={28} height={28} alt='Record transaction' />
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
        close={() => setShowModal(false)}
        maxWidth={500}
      ><AddTransaction /></Modal>
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
`