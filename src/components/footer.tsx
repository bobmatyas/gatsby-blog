import React from "react"
import HcardSocial from "./hcard-social"

const Footer = () => (
  <footer className="mt-10 pt-10 pb-10">
    <div className="container m-auto text-center">
      <hr className="bg-gray-600 my-5 w-2/3 m-auto h-2" />
      <div className="h-card">
        <p className="font-sans mt-5 mb-2 text-sm text-slate-600 text--small--caps">
          <span className="p-name">Bob Matyas</span> is{" "}
          <span className="p-note">
            a web developer in Grand Rapids, Michigan.{" "}
          </span>
        </p>
        <HcardSocial />
      </div>
      <p className="font-sans mt-5">
        <a
          className="text-xs underline hover:no-underline"
          href="https://www.bobmatyas.com/rss.xml"
        >
          RSS Feed{" "}
        </a>
        <br />
        <a
          href="https://aboutfeeds.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs underline hover:no-underline"
        >
          {" "}
          Learn More About RSS Feeds
        </a>
      </p>
      <p className="font-sans mt-5">
        <a href="https://xn--sr8hvo.ws/%E2%A4%B4%EF%B8%8F%C2%AE%EF%B8%8F%F0%9F%98%83/previous">
          ←
        </a>
        An <a href="https://xn--sr8hvo.ws">IndieWeb Webring</a> 🕸💍
        <a href="https://xn--sr8hvo.ws/%E2%A4%B4%EF%B8%8F%C2%AE%EF%B8%8F%F0%9F%98%83/next">
          →
        </a>
      </p>
    </div>
  </footer>
)

export default Footer
