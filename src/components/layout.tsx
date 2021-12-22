import React from "react"
import Header from "./header"
import Footer from "./footer"

interface Props {
  readonly children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout
