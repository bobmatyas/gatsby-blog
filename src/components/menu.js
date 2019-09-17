import React, { useState } from "react"
import { Link } from "gatsby"



export default () => {

  const [open, setOpen] = useState(false);

  return (
    <nav className="main__menu__holder">
      <p className="main__menu__toggle" onClick={() => setOpen(!open)}>menu</p>

      <div className={open ? "main__menu__overlay--open" : ""}>
        <ul className="main__menu">
          <li>
            <Link
              to={`/about/`}
            >
              About
        </Link>
          </li>
          <li>
            <Link
              to={`/portfolio/`}
            >
              Portfolio
        </Link>
          </li>
          <li>
            <Link
              to={`/blog/`}
            >
              Blog
        </Link>
          </li>
          <li>
            <Link
              to={`/contact/`}
            >
              Contact
        </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}