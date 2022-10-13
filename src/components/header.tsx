import React from "react"
import Menu from "./menu"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
  return (
    <header className="border-t-purple-400 border-t-8 header">
      <div className="container m-auto flex flex-col items-center justify-center mt-10">
        <StaticImage
          src="../images/flower-logo.jpg"
          alt="Flower"
          imgClassName="u-photo"
          className=" hcard__photo m-auto header__logo py-6 px-5 rounded-full bg-white mt-2  border-gray-100 border-4"
          style={{ width: "100px" }}
        />
        <h2 className="font-bold text-2xl md:text-4xl text-slate-800 header__text mt-4">
          Bob Matyas
        </h2>
        <Menu />
      </div>
    </header>
  )
}

export default Header
