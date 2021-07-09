import styled from 'styled-components'



export const MainContainer = styled.div`
    width: 90%;
    margin: 20px auto;
    

`



export const ContactDetials = styled.div`

    display: flex;
    justify-content: space-between;
    font-size: 18px;
    padding: 5px 50px;
    @media only screen and (max-width: 700px){
        flex-direction: column;
    }

    svg{
        width: 20px;
        height: 20px;
        margin-right: 5px;
    }

`
export const SingleDetails = styled.div`

`

export const BottomSection = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px 50px;
    margin-top: 50px;

    p{
        font-size: 15px;
    }
`