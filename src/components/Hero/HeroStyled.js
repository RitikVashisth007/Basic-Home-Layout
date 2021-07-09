import styled from 'styled-components'

export const MainContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 80%;
    margin: auto;
    @media only screen and (max-width: 1000px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }

`


export const TextContainer = styled.div`
    margin-top: 45px;
    p{
        font-size: 48px;
        font-weight: 500;
        font-family: 'Josefin Sans', sans-serif;
        margin-top: 35px;
    }
    h4{
        font-weight: 700;
        font-size: 18px;
        font-family: 'Josefin Sans', sans-serif;
    }

`

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    img{
        max-width: 100%;
        
    }

`