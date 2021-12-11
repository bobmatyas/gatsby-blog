import React from "react"
import Header from "../components/header"

const Layout = ({ children }) => (
  <>
    <Header />
    <main>
      {children}
    </main>
    <footer></footer>
  </>
)

export default Layout;