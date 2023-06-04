import { useRouter } from "next/router"
import Image from "next/image"
import Link from "next/link"
import Button from "@/components/Button"
import {
  NavBarContainer,
  Logo,
  Links,
  StyledLink,
} from "./styles"
import bookeeIcon from "@/assets/icons/bookee.png"

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
  const isHomePath = homePaths.includes(currentPath);
  
  return (
    <NavBarContainer>
      <Logo href={isHomePath ? '/' : '/dashboard'}>
        <Image src={bookeeIcon} alt='logo' width={80} height={20} />
      </Logo>

      {!homePaths.includes(currentPath) && (
        <Links>
          {navLinks.map(({path, name}) => (
            <StyledLink
              key={path}
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