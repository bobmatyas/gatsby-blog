import React, { useState, useEffect } from "react"
import { Link } from "gatsby"




export default () => {


  const [open, setOpen] = useState(open);

  const [width, setWidth] = useState(window.innerWidth);  
  
  let [styles, setStyles] = useState('main__menu__overlay');

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
      console.log(width);
      if (width > 700) {
        setStyles = 'main__menu__overlay';
      } else if (width < 699) {
        setStyles = 'main__menu__overlay--open';
      }
    };

    window.addEventListener('resize', handleResize);
    console.log(width);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className="main__menu__right">
    <nav className="main__menu__holder">
      <div className="main__menu__toggle" onClick={() => setOpen(!open)}>
        <div className="main__menu__icon">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" className="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>    
          <span className="main__menu__text">menu</span>
        </div>
        
      </div>

      <div className={open ? "main__menu__overlay--open" : "main__menu__overlay" }>
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
    </nav>
    </div>
  )
}