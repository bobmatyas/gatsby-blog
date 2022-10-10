import React from "react"
import styled from "styled-components"
import RSSIcon from "../images/icons/rss.svg"
import HcardSocial from "./hcard-social"

const RSSLink = styled.a`
  color: var(--body-text-color);
  background: url(${RSSIcon}) no-repeat left center;
  background-size: 15px 15px;
  font-size: 90%;
  padding-left: 19px;
  text-decoration: underline;

  :hover,
  :active {
    text-decoration: none;
  }
`

const Footer = () => (
  <footer className="pt-10 pb-10">
    <div className="container m-auto text-center">
      <hr className="text-gray-200 bg-gray-100 my-5 w-2/3 m-auto h-1" />
      <div className="h-card">
        <p className="font-sans text-sm text-gray-600 font-bold">
          <span className="p-name">Bob Matyas</span> is{" "}
          <span className="p-note">
            a web developer in Grand Rapids, Michigan.{" "}
          </span>
        </p>
        <HcardSocial />
      </div>
      <p className="font-sans">
        <RSSLink href="https://www.bobmatyas.com/rss.xml">RSS Feed </RSSLink>
        <br />
        <a
          href="https://aboutfeeds.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs underline hover:no-underline"
        >
          Learn More About RSS Feeds
        </a>
      </p>
    </div>
  </footer>
)

export default Footer
