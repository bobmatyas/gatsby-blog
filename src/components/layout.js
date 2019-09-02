import React from "react"
import { Link } from "gatsby"
import Menu from "../components/menu"

export default ({ children }) => (
  <div>
    <header>
      <Link to={`/`}>
        <h3>Bob Matyas</h3>
      </Link>
    
      <Menu />
    </header>
    <main>
      {children}
    </main>
    <footer></footer>
  </div>
)