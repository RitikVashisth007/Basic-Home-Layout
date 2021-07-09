import styled from 'styled-components'


export const MainContainer = styled.div`

`


export const UpparText = styled.div`
    h2{
        font-size: 40px;
        font-family: 'Josefin Sans', sans-serif;
        margin-left:90px;
        margin-top: 60px ;
        margin-bottom: 60px ;
        
    }
    
`


export const DetailsConatiner = styled.div`
    display: flex;
    color: white;
    background: black;
    width: 90%;
    margin-left: auto;
    justify-content: space-between;
    padding: 45px 25px;
    @media only screen and (max-width: 700px){
            flex-direction: column;
            align-items: center;
            margin: 0;
            width: 100%;
            padding:0;

        }
    
    
`

export const SingleItem = styled.div`
    display: flex;
    flex-direction: column;
    

    img{
        width: 90px;
        height: 90px;
        margin-left: 20px;
    }
    
    h4{
        margin-top: 20px;
        font-size: 23px;
    }
    p{
        max-width: 300px;
        margin-top: 40px;
        font-size: 20px;
        color: grey;
        
    }
    
`

