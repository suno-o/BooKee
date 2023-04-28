import { useState, useEffect } from "react"
import Link from "next/link"
import Button from "@/components/Button"
import {
  NavBarContainer,
  Links,
} from "./styles"

/* ===== DUMMY: remove later ===== */
const login = () => {
  localStorage.setItem('dummy-bookee-user', 'something');
}
const logout = () => {
  localStorage.removeItem('dummy-bookee-user');
}
/* ================================= */

const NavBar = () => {
  /* ===== REMOVE later: just temporarily mimicking login and logout ===== */
  const [user, setUser] = useState('');

  useEffect(() => {
    const u = localStorage.getItem('dummy-bookee-user') || '';
    if (u) setUser(u);
  }, [])
  /* ===================================================================== */

  return (
    <NavBarContainer>
      <h2>Logo</h2>
      {user && (
        <Links>
          Style these later:
          <Link href='/dashboard'>Dashboard</Link>
          <Link href='/transactions'>Transactions</Link>
          <Link href='/credit-bill-payment'>Credit bill payment</Link>
        </Links>
      )}
        <p style={{textAlign: 'center', fontWeight: 'bold'}}>BooKee is currently under development</p>
      <Links>
      {!user ? (
        <Link href='/login' onClick={login}><Button bgTheme='primary'>Log in</Button></Link>
      ) : (
        <Link href='/' onClick={logout}><Button bgTheme='primary'>Log out</Button></Link>
      )}
      </Links>
    </NavBarContainer>
  )
}

export default NavBar;