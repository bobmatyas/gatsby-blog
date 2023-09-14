import React from "react"
import { slide as Menu } from "react-burger-menu"
import "./BurgerMenu.css"
import { Link } from "gatsby"

interface ToggleProps {
  isOpen: boolean
}

const BurgerMenu = () => {
  const toggleMenu = ({ isOpen }: ToggleProps) => {
    const menuWrap: any = document.querySelector(".bm-menu-wrap")
    isOpen
      ? menuWrap.setAttribute("aria-hidden", false)
      : menuWrap.setAttribute("aria-hidden", true)
  }

  return (
    <Menu
      right
      width={"100%"}
      onStateChange={toggleMenu}
      className="bg-slate-600"
    >
      <ul className="flex flex-col items-center justify-center gap-5 pt-10">
        <li>
          <Link className="burger__menu__item" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to={`/about/`} className="burger__menu__item">
            About
          </Link>
        </li>
        <li>
          <Link to={`/projects/`} className="burger__menu__item">
            Projects
          </Link>
        </li>
        <li>
          <Link to={`/blog/`} className="burger__menu__item">
            Blog
          </Link>
        </li>
      </ul>
    </Menu>
  )
}

export default BurgerMenu
