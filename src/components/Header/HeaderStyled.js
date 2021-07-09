import styled from 'styled-components'


export const MainContainer = styled.div`
    display: flex;
    padding: 25px 30px;
    display: flex;
    justify-content: space-between;
    
`


export const LogoContainer = styled.div`
    color: #5f5f5f;
    
`

export const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    
    button{
        background: transparent;
        border: 1px solid #000000;
        padding: 5px;
        display: flex;
        justify-content: center;
    }
    p{
        padding-right: 50px;
        font-size:22px;
        color: #030303;
    }
    svg{
        width: 30px;
        height: 30px;
        color: #5f5f5f;
    }
`