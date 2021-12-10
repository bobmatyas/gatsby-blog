
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
            <a className="menu-item" href="/about">
        About
      </a>
      </li>
      <li>
            <a className="menu-item" href="/portfolio">
        Portfolio
      </a>
      </li>
      <li>
            <a className="menu-item" href="/blog">
        Blog
      </a>
      </li>
      <li><a className="menu-item" href="/contact">
        Contact
      </a>
      </li>
      </ul>
    </Menu>
  )
}

export default BurgerMenu;