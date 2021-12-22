import React from "react"
import Logo from "./logo"
import Menu from "./menu"
import styled from "styled-components"

const HeaderStyled = styled.header`
  background: #030507;
  border-top: 4px solid #845ec2;
  box-shadow: 3px -5px 10px 9px rgba(204, 204, 204, 0.51);
  padding: 0 5%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
`

const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 15px;
  padding-bottom: 15px;
  width: 100%;
`

const Header = () => (
  <HeaderStyled>
    <HeaderContainer>
      <Logo />
      <Menu />
    </HeaderContainer>
  </HeaderStyled>
)

export default Header
