import React from "react"
import Logo from "../components/logo"
import Menu from "../components/menu"

export default ({ children }) => (
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