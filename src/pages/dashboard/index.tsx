import type { ReactElement } from "react"
import Dashboard from "@/views/Dashboard"
import ServiceLayout from "@/components/Layout/ServiceLayout"

export default function dashboard() {
  return (
    <Dashboard />
  )
}

dashboard.getLayout = function getLayout(page: ReactElement) {
  return (
    <ServiceLayout>{page}</ServiceLayout>
  )
}