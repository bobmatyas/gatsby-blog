import React from "react"
import Logo from "../components/logo"
import Menu from "../components/menu"

export default ({ children }) => (
  <div id="page">
          <Menu pageWrapId={"page-wrap"} outerContainerId={"page"}/>
    <header className="header">
      <Logo /> 
    </header>
    <main id="page-wrap">
      {children}
    </main>
    <footer></footer>
  </div>
)