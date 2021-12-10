import React, { useState } from "react"
import { Link } from "gatsby"
import BurgerMenu from '../components/BurgerMenu.js'
import styled from "styled-components";

const BurgerHolder = styled.div`
  @media screen and (min-width: 920px) {
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
    <div className="main__menu__right">
        <ul className={open ? "main__menu" : "main__menu main__menu--hidden"}>
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
      <BurgerHolder>
        <BurgerMenu />
      </BurgerHolder>
    </>
  )
}

export default Menu; 