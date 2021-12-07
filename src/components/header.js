import React from "react"
import Logo from "../components/logo"
import Menu from "../components/menu"
import styled from "styled-components"

const HeaderStyled = styled.header`
    background: #030507;
    border-top: 4px solid #845EC2;

`;

const HeaderContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 15px;
    padding-bottom: 15px;
    width: 100%;
`;

const Header = () => (
    <HeaderStyled>
        <HeaderContainer>
            <Logo /> 
            <Menu />
        </HeaderContainer>
    </HeaderStyled>
)

export default Header;