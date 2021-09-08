import React from "react"

const styleObj = {
    display: 'none'
}

const Hcard = () => (
  <section style={styleObj} className="h-card">

    <span className="p-name">Bob Matyas</span>   
    <a className="u-url u-uid" href="https://www.bobmatyas.com"></a>
    <a className="u-url" rel="me" href="https://github.com/bobmatyas"></a>
    <a className="u-url" rel="me" href="https://codepen.io/bobmatyas"></a>
    <a className="u-url" rel="me" href="https://twitter.com/bobmatyas"></a>
    <a className="u-url" rel="me" href="https://mastodon.social/@bobmatyas"></a>
    <a className="u-url" rel="me" href="https://www.linkedin.com/in/bob-matyas"></a>
  </section>
)

export default Hcard;