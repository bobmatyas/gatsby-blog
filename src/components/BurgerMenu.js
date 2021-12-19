
import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import './BurgerMenu.css'
import { Link } from "gatsby"

const BurgerMenu = () => {

    const toggleMenu = ({ isOpen }) => {
        const menuWrap = document.querySelector(".bm-menu-wrap");
        isOpen
          ? menuWrap.setAttribute("aria-hidden", false)
          : menuWrap.setAttribute("aria-hidden", true);
      };

  return (
    <Menu 
        right 
        width={ '100%' }
        onStateChange={toggleMenu}
    >
    <ul>
        <li>
            <a className="menu-item" href="/">
                Home
            </a></li>
        <li>
            <Link to={`/about/`}> 
                About
            </Link>
        </li>
        <li>
            <Link to={`/blog/`}> 
                Blog
            </Link>
        </li>
      </ul>
    </Menu>
  )
}

export default BurgerMenu;