import React from 'react'
import Menu from 'react-burger-menu/lib/menus/slide'
import { Link } from 'gatsby'
import './BurgerMenu.css'

const BurgerMenu = () => {
    return (
      <Menu isOpen={ false } right>
        <ul style={{color: 'white'}}> 
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
      </Menu>
    )
  }
  
  export default BurgerMenu