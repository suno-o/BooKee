import { useRouter } from "next/router"
import Link from "next/link"
import Button from "@/components/Button"
import {
  NavBarContainer,
  Links,
  StyledLink,
} from "./styles"

const NavBar = () => {
  const router = useRouter();
  const currentPath = router.pathname;
  const navLinks = [
    { path: '/dashboard', name: 'Dashboard' },
    { path: '/transactions', name: 'Transactions' },
    { path: '/credit-bill-payment', name: 'Credit Payment' },
  ];

  /* Note: update when the auth service is implemented */
  const homePaths = ['/', '/article/choosing-banking-products', '/articles/paying-bills', '/privacy-policy'];
  
  return (
    <NavBarContainer>
      <h2>Logo</h2>

      {homePaths.includes(currentPath) ? (
        <p style={{textAlign: 'center', fontWeight: 'bold'}}>BooKee is currently under development</p>
      ) : (
        <Links>
          {navLinks.map(({path, name}) => (
            <StyledLink
              href={path}
              selected={currentPath === path}
            >{name}</StyledLink>
          ))}
        </Links>
      )}

      {homePaths.includes(currentPath) ? (
        <Link href='/dashboard'><Button bgTheme='primary'>Log in</Button></Link>
      ) : (
        <Link href='/'><Button bgTheme='primary'>Log out</Button></Link>
      )}
    </NavBarContainer>
  )
}

export default NavBar;