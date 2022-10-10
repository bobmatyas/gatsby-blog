import React from "react"
import { Link } from "gatsby"
import BurgerMenu from "./BurgerMenu"
import styled from "styled-components"

const BurgerHolder = styled.div`
  @media screen and (min-width: 799px) {
    display: none;
  }
`

const Menu = () => {
  React.useEffect(() => {
    const menuWrap = document.querySelector(".bm-menu-wrap")
    if (menuWrap) {
      menuWrap.setAttribute("aria-hidden", "true")
    }
  }, [])

  return (
    <>
      <nav className="header__nav">
        <ul className="flex flex-row gap-4 py-5">
          <li className="header__nav__item">
            <Link to={`/`} className="block p-2">
              Home
            </Link>
          </li>
          <li className="header__nav__item">
            <Link to={`/about/`} className="block p-2">
              About
            </Link>
          </li>
          <li className="header__nav__item">
            <Link to={`/blog/`} className="block py-2 px-4">
              Blog
            </Link>
          </li>
        </ul>
      </nav>

      <BurgerHolder>
        <BurgerMenu />
      </BurgerHolder>
    </>
  )
}

export default Menu
