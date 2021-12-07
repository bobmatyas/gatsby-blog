import React from "react"
import Logo from "../components/logo"
import Menu from "../components/menu"
import styled from "styled-components"

const HeaderStyled = styled.header`
    align-items: center;
    background: #030507;
    border-top: 4px solid #845EC2;
    display: flex;
    justify-content: space-between;
    padding-top: 15px;
    padding-bottom: 15px;
`;

const Header = () => (
  <HeaderStyled>
        <Logo /> 
        <Menu />
  </HeaderStyled>
)

export default Header;