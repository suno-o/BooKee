import type { ReactElement } from 'react'
import HomeLayout from '@/components/Layout/HomeLayout'
import ChoosingBankingProducts from '@/views/Learn/ChoosingBankingProducts'

export default function ChoosingBankingProductsPage() {
  return <ChoosingBankingProducts />
}

ChoosingBankingProductsPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <HomeLayout>{page}</HomeLayout>
  )
}