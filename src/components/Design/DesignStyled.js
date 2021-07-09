import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    margin-top: 72px;
    

`


export const SideMenu = styled.div`
    margin-left: 20px;
    width: 100px;
    display: flex;
    flex-direction: column;
    button{
        
        
        width: 40px;
        height: 120px;
        background: transparent;
        margin-bottom: 30px;
        cursor: pointer;
        :hover{
            background: black;
            color: white;
            a{
                color: white;
            }
        }

    }
    p{
        writing-mode: vertical-rl;
        text-orientation: mixed;
        font-size: 18px;
        font-family: 'Josefin Sans', sans-serif;
        padding-left: 5px;
    }
    a{
        text-decoration: none;
        color: black;
        :hover{
            color: white;
        }
    }
    

`

export const MainContent = styled.div`
    padding: 20px;
    @media only screen and (max-width: 700px){
        padding: 0;
    }
    h2{
        font-size: 40px;
        margin-left: 30px;
    }
    p{
        font-size: 22px;
    }
    
    .p-text{
        font-size: 20px;
        margin-left: 30px;
        margin-top: 20px;
        margin-bottom: 80px;
        color: #030303;
    }
    

`


export const FirstSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    margin: 60px 40px;
    @media only screen and (max-width: 1000px){
        display: flex;
        flex-direction: column;

    }
   
    
    

    .left-side{
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid black;
        height: 280px;
        border-right:none;
        
        justify-content: center;
        @media only screen and (max-width: 1000px){
            border: none;

        }
        img{
            max-width: 70px;
            height: 70px;
            margin-top: 50px;
        }
        h5{
            font-size: 18px;
            font-weight: 700;
            font-family: 'Josefin Sans', sans-serif;
            margin-top: 30px;
            
        }
    }
    .right-side{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1px solid black;
        height: 280px;
        border-left: none;
        @media only screen and (max-width: 1000px){
            border: none;

        }
        img{
            max-width: 70px;
            height: 70px;
            margin-top: 50px;
        }
        h5{
            font-size: 18px;
            font-weight: 700;
            font-family: 'Josefin Sans', sans-serif;
            margin-top: 20px; 
            
        }
    }

`

export const DetailContainer = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 320px;
    margin-top: -15px;
    @media only screen and (max-width: 600px){
        display: flex;
        flex-direction: column;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        
    }
    

    
    .side-text{
        background: black;
        color: white;
        padding: 15px;

        p{
            line-height: 1.7rem;
            font-size: 16px;
            font-family: 'Josefin Sans', sans-serif;
            
        }
        
        button{
            margin-top: 35px;
            padding: 11px 25px;
            border-radius: 2px;
            background: white;
            border: none;
            outline: none;
            font-size: 16px;
            font-weight: 600;
        }
    }


`


export const GridSection = styled.div`
    width: 92%;
    margin:30px auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-gap: 80px;

    @media only screen and (max-width: 1190px){
        grid-gap: 20px;

    }
    @media only screen and (max-width: 700){
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0;
        padding: 0;

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
    @media only screen and (max-width: 700){
        padding: 0 ;
    }
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


