import styled from 'styled-components'


export const MainContainer = styled.div`
   padding-top: 80px;
   

`


export const UpparText = styled.div`
    margin-left: 70px;
    
    font-family: 'Josefin Sans', sans-serif;

    h4{
        font-size: 20px;
    }
    h5{
        font-size: 35px;
        font-weight: 800;
        margin: 30px 0;
    }
    p{
        font-size: 19px;
    }
`

export const GridContainer = styled.div`
    display: flex;
    
    width: 80%;
    margin: auto;
    justify-content: space-between;
    padding: 45px 20px;
    @media only screen and (max-width: 700px){
        flex-direction: column;
    }
    
`


export const SingleGrid = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    

    img{
        width: 90px;
        height: 90px;
        margin-left: 20px;
        
    }
    
    h4{
        color: black;
        font-size: 25px;
        margin-top: 30px;
    }
    p{
        
        margin-top: 15px;
        font-size: 16px;
        font-weight: 500;
        color: grey;
        max-width: 150px;
        text-align:center;
        
    }
    
`


