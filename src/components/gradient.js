import React from "react"


export default (props) => (
  <div className={`gradient gradient--${ props.color || 'dark' }` } />
)