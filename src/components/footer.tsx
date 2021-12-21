import React from "react"
import styled from "styled-components"

const RSSIcon = require("../images/icons/rss.svg") as string;

console.log(RSSIcon);

const FooterContainer = styled.footer`
    background-color: #eee;
    margin: 0;
    padding: 0;
    width: 100%;
`

const FooterInner = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding-top: 15px;
    padding-bottom: 15px;

    p { 
        font-family: var(--system-fonts);
        margin: 25px 0;
        text-align: center;
    }
`;

const RSSLink = styled.a`
    color: var(--body-text-color);
    background: url(${RSSIcon}) no-repeat left center;
    background-size: 15px 15px;
    font-size: 90%;
    padding-left: 19px;
    text-decoration: underline;

    :hover, :active {
        text-decoration: none;
    }

`;

const AboutRSS = styled.a`
    color: var(--body-text-color);
    font-size: 75%;
    text-decoration: underline;

    :hover, :active {
        border-bottom: 1px dashed var(--body-text-color);;
        text-decoration: none;
    }
`;

const Footer = () => (
    <FooterContainer>
       <FooterInner>
           <p>
                <RSSLink href="https://www.bobmatyas.com/rss.xml">RSS Feed </RSSLink>
                <br />
                <AboutRSS href="https://aboutfeeds.com/" target="_blank" rel="noopener noreferrer">Learn More About RSS Feeds</AboutRSS>
            </p>
        </FooterInner> 
    </FooterContainer>
)

export default Footer;