import type { ReactElement } from 'react'
import HomeLayout from '@/components/Layout/HomeLayout'
import PayingBills from '@/views/Learn/PayingBills'

export default function PayingBillsPage() {
  return <PayingBills />
}

PayingBillsPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <HomeLayout>{page}</HomeLayout>
  )
}