import React from "react"

const styleObj = {
    display: 'none'
}

const Hcard = () => (
  <section style={styleObj} className="h-card">

    <span className="p-name">Bob Matyas</span>   
    <a className="u-url u-uid" href="https://www.bobmatyas.com">BobMatyas.com</a>
    <a className="u-url" rel="me" href="https://github.com/bobmatyas">Bobmatyas on GitHub</a>
    <a className="u-url" rel="me" href="https://codepen.io/bobmatyas">Bobmatyas on CodePen</a>
    <a className="u-url" rel="me" href="https://twitter.com/bobmatyas">Bobmatyas on Twitter</a>
    <a className="u-url" rel="me" href="https://mastodon.social/@bobmatyas">Bobmatyas on Mastodon</a>
    <a className="u-url" rel="me" href="https://www.linkedin.com/in/bob-matyas">Bobmatyas on Linkedin</a>
  </section>
)

export default Hcard;