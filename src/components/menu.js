import React, { useState } from "react"
import { Link } from "gatsby"
import BurgerMenu from '../components/BurgerMenu.js'
import styled from "styled-components";

const DesktopHolder = styled.nav`
  display: none;

  @media screen and (min-width: 800px) {
    display: block;
    padding: 15px 0 0 0;
  }
`;

const DesktopMenu = styled.ul`        
    display: flex;
    font-size: unset;
    font-weight: 500;
    justify-content: flex-end;
    list-style-type: none;
    margin: 0;
    padding: 0 3% 0 0;
    text-transform: uppercase;

  a {
    display: inline-block;
        padding: 0 0 0.5em 0;
        color: rgba(255, 255, 255, 0.8);
        font-size: 0.9rem;
        position: relative;
        letter-spacing: 1px;
        text-decoration: none;
  }

  a:before,
  a:after {
    position: absolute;
        -webkit-transition: all 0.07s ease;
        transition: all 0.07s ease;
  }

  a:before {
    bottom: 0;
        display: block;
        height: 3px;
        width: 0%;
        content: "";
        background-color: var(--pink-color);
  }
  a:after {
    left: 0;
        top: 0;
        padding: 0 0 0.5em 0;
        position: absolute;
        content: attr(data-hover);
        color: #ffffff;
        white-space: nowrap;
        max-width: 0%;
        overflow: hidden;
  }

  a:hover:before {
    opacity: 1;
        width: 100%;    
  }
  a:hover:after {
    max-width: 100%;
  }

  li {
    font-family: var(--system-fonts);
    margin: 0 5px;
    padding: 10px;
  }
`;

const BurgerHolder = styled.div`
  @media screen and (min-width: 799px) {
    display: none;
  }
`;

const Menu = () => {

  const [open, setOpen] = useState(false);

  React.useEffect(() => {
    const menuWrap = document.querySelector(".bm-menu-wrap");
    if (menuWrap) {
      menuWrap.setAttribute("aria-hidden", true);
    }
  }, []);

  return (
    <>
      <DesktopHolder>
        <DesktopMenu>
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
        </DesktopMenu>
      </DesktopHolder>

      <BurgerHolder>
        <BurgerMenu />
      </BurgerHolder>
    </>
  )
}

export default Menu; 