import type { ReactElement } from "react"
import Transactions from "@/views/Transactions"
import ServiceLayout from "@/components/Layout/ServiceLayout"

export default function transactions() {
  return (
    <Transactions />
  )
}

transactions.getLayout = function getLayout(page: ReactElement) {
  return (
    <ServiceLayout>{page}</ServiceLayout>
  )
}