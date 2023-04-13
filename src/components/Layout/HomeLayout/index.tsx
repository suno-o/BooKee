import React from "react"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

interface Props {
  children: React.ReactNode;
}

export default function HomeLayout({children}: Props) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  )
}