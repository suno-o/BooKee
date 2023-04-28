import type { ReactElement } from "react"
import CreditBillPayment from "@/views/CreditBillPayment"
import ServiceLayout from "@/components/Layout/ServiceLayout"

export default function creditBillPayment() {
  return (
    <CreditBillPayment />
  )
}

creditBillPayment.getLayout = function getLayout(page: ReactElement) {
  return (
    <ServiceLayout>{page}</ServiceLayout>
  )
}