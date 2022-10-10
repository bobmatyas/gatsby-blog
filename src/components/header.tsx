import React from "react"
import Menu from "./menu"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
  const headerBg = {
    background:
      "linear-gradient(180deg, rgba(204,204,204,1) 7%, rgba(255,255,255,1) 67%)",
    height: "200px",
  }

  return (
    <header className="border-t-purple-400 border-t-8" style={headerBg}>
      <div className="container m-auto flex flex-col items-center justify-center">
        <StaticImage
          src="../images/flower-logo.jpg"
          alt="Flower"
          imgClassName="u-photo"
          className=" hcard__photo m-auto header__logo mx-10 py-6 px-5 rounded-full bg-white mt-10 border-gray-100 border-4"
          style={{ width: "100px" }}
        />
        <h2 className="text-4xl font-extrabold mt-2 italic lowercase">
          Bob Matyas
        </h2>
        <Menu />
      </div>
    </header>
  )
}

export default Header
