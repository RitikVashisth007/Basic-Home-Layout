import styled from 'styled-components'

export const MainContainer = styled.div`
    width: 92%;
    margin:40px auto;
    .uppar-text{
        p{
            font-size: 18px;
            margin-left: 35px;
            margin-top: 10px;
            font-weight: 500;
            margin-bottom: 30px;
            
        }
        h2{
            font-size: 40px;
            margin-left: 35px;
        }
    }

`



export const GridSection = styled.div`
    width: 92%;
    margin:50px auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-gap: 80px;

    @media only screen and (max-width: 1190px){
        grid-gap: 20px;

    }
    

`


export const SingleGrid = styled.div`
    border:1px solid black;
    
    height: 250px;
    max-width: 240px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;
    img{
        width: 60px;
        height: 60px;
    }
    h5{
            font-size: 18px;
            font-weight: 700;
            font-family: 'Josefin Sans', sans-serif;
            margin-top: 30px;
            
        }
    

    

`

