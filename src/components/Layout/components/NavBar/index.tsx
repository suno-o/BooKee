import Link from "next/link"
import Button from "@/components/Button";
import {
  NavBarContainer,
  Links,
} from "./styles"

const NavBar = () => (
  <NavBarContainer>
    <h2>Logo</h2>
    <p style={{textAlign: 'center', fontWeight: 'bold'}}>BooKee is currently under development</p>
    <Links>
    <Link href='/login'><Button bgTheme='primary'>Log in</Button></Link></Links>
  </NavBarContainer>
)

export default NavBar;