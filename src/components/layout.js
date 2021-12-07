import React from "react"
import Logo from "../components/logo"
import Menu from "../components/menu"

const Layout = ({ children }) => (
  <>
    <header className="header">
      <Logo /> 
      <Menu />
    </header>
    <main>
      {children}
    </main>
    <footer></footer>
  </>
)

export default Layout;