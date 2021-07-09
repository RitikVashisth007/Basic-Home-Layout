import React from 'react'
import { LogoContainer, MainContainer, MenuContainer } from './HeaderStyled'
import {BiMenuAltRight} from 'react-icons/bi'
function Header() {
    return (
        <MainContainer>
            <LogoContainer>
                <h2>Logo Here</h2>
            </LogoContainer>
            <MenuContainer>
                <p>Say Hello ! </p>
                <button><BiMenuAltRight/></button>

            </MenuContainer>
        </MainContainer>
    )
}

export default Header
