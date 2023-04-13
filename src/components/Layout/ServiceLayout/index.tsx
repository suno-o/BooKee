import React from "react"
import NavBar from "../components/NavBar"

interface Props {
  children: React.ReactNode;
}

export default function ServiceLayout({children}: Props) {
  return (
    <>
      <NavBar />
      <main>
        {/* add transaction button */}
        {children}
      </main>
    </>
  )
}