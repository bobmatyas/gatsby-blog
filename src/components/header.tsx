import React from "react"
import Logo from "./logo"
import Menu from "./menu"

const Header = () => {
  const headerBg = {
    background:
      "linear-gradient(180deg, rgba(204,204,204,1) 7%, rgba(255,255,255,1) 67%)",
    height: "200px",
  }

  return (
    <header className="border-t-green-700 border-t-8" style={headerBg}>
      <div>
        <Logo />
        <Menu />
      </div>
    </header>
  )
}

export default Header
