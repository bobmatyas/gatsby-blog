import React from "react"
import Logo from "../components/logo"
import Menu from "../components/menu"

const Layout = ({ children }) => (
  <div>
    <header className="header">
      <Logo /> 
      <Menu />
    </header>
    <main>
      {children}
    </main>
    <footer></footer>
  </div>
)

export default Layout;