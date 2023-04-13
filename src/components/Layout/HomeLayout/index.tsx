import React from "react"
import NavBar from "../components/NavBar"
import HomeFooter from "../components/Footer"

interface Props {
  children: React.ReactNode;
}

export default function HomeMain({children}: Props) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <HomeFooter />
    </>
  )
}