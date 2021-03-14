import React from "react"


const Gradient = (props) => (
  <div className={`gradient gradient--${ props.color || 'dark' }` } />
)

export default Gradient; 