import React from "react"
import { Link } from "gatsby"


export default ({ children }) => (
  <div
  >
    <Link to={`/`}>
      <h3
      >
        Page Title
      </h3>
    </Link>
    <Link
      to={`/about/`}
    >
      About
    </Link>
    {children}
  </div>
)