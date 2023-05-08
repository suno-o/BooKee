import { useRouter } from "next/router"
import Link from "next/link"
import Button from "@/components/Button"
import {
  NavBarContainer,
  Links,
} from "./styles"

const NavBar = () => {
  const router = useRouter();
  const currentPath = router.pathname;
  const homePaths = ['/', '/article/choosing-banking-products', '/articles/paying-bills', '/privacy-policy'];
  
  return (
    <NavBarContainer>
      <h2>Logo</h2>

      {homePaths.includes(currentPath) ? (
        <p style={{textAlign: 'center', fontWeight: 'bold'}}>BooKee is currently under development</p>
      ) : (
        <>
          <Links>
            <Link href='/dashboard'>Dashboard</Link>
            <Link href='/transactions'>Transactions</Link>
            <Link href='/credit-bill-payment'>Credit bill payment</Link>
          </Links>
          <p>&#47;&#47; style these soon</p>
        </>
      )}

      <Links>
        {homePaths.includes(currentPath) ? (
          <Link href='/dashboard'><Button bgTheme='primary'>Log in</Button></Link>
        ) : (
          <Link href='/'><Button bgTheme='primary'>Log out</Button></Link>
        )}
      </Links>
    </NavBarContainer>
  )
}

export default NavBar;