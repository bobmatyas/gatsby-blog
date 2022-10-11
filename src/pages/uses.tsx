import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

function Uses(): JSX.Element {
  return (
    <Layout>
      <Seo
        title="Uses"
        description="A list of things I use for web development."
      />

      <div className="main">
        <h2 className="main__header">Uses</h2>

        <p className="text-lg">
          Inspired by the interesting lists of uses in Wes Bos&apos;
          <a href="https://uses.tech/">uses.tech</a>, I am sharing a list of
          devices and tools I use.
        </p>

        <h3>Software</h3>

        <h4>Communication</h4>

        <ul>
          <li>
            <a href="https://protonmail.com">ProtonMail</a>
          </li>
          <li>
            <a href="https://signal.org">Signal</a>
          </li>
        </ul>

        <h4>Browser</h4>
        <ul>
          <li>
            <a href="https://www.mozilla.org/en-US/firefox/developer/">
              Firefox Developer Edition
            </a>
          </li>
        </ul>

        <h4>Browser Extensions</h4>
        <ul>
          <li>
            <a href="https://www.mozilla.org/en-US/firefox/developer/">
              UBlock Origin
            </a>
          </li>
          <li>
            <a href="https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/">
              Firefox Multi-Account Containers
            </a>
          </li>
          <li>
            <a href="https://addons.mozilla.org/en-US/firefox/addon/facebook-container/">
              Facebook Container
            </a>
          </li>
          <li>
            <a href="https://addons.mozilla.org/en-US/firefox/addon/clearurls/">
              CleanerURLS
            </a>
          </li>
          <li>
            <a href="https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/">
              axe DevTools
            </a>
          </li>
          <li>
            <a href="https://addons.mozilla.org/en-US/firefox/addon/wave-accessibility-tool/">
              WAVE Evaluation Tool
            </a>
          </li>
          <li>
            <a href="https://addons.mozilla.org/en-US/firefox/addon/react-devtools/">
              React Developer Tools
            </a>
          </li>
        </ul>

        <h4>Visual Studio Code</h4>
        <ul>
          <li>
            <a href="https://marketplace.visualstudio.com/items?itemName=sdras.night-owl">
              Nightowl theme
            </a>
          </li>
          <li>
            <a href="https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag">
              Extension: Auto Close Tag
            </a>
          </li>
          <li>
            <a href="https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag">
              Extension: Auto Rename Tag
            </a>
          </li>
          <li>
            <a href="https://marketplace.visualstudio.com/items?itemName=PolymerMallard.css-alphabetize">
              Extension: CSS Alphabtize
            </a>
          </li>
          <li>
            <a href="https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets">
              Extension: ES7 React/Redux/React-Native/JS snippets
            </a>
          </li>
          <li>
            <a href="https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens">
              Extension: Error Lens
            </a>
          </li>
          <li>
            <a href="https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost">
              Extension: Import Cost
            </a>
          </li>
          <li>
            <a href="https://marketplace.visualstudio.com/items?itemName=Tyriar.sort-lines">
              Extension: Sort Lines
            </a>
          </li>
          <li>
            <a href="https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components">
              Extension: vscode-styled-components
            </a>
          </li>
          <li>
            <a href="https://marketplace.visualstudio.com/items?itemName=webhint.vscode-webhint">
              Extension: Webhint
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Uses
