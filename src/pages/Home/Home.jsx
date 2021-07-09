import React from 'react'
import Benifits from '../../components/Benifits/Benifits'
import Design from '../../components/Design/Design'
import Development from '../../components/Development/Development'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import Service from '../../components/Service/Service'
import { MainContainer } from './HomeStyled'

function Home() {
    return (
        <MainContainer>
            <Hero/>
            <Design/>
            <Development/>
            <Benifits/>
            <Service/>
            <div className='line' ></div>
            <Footer/>
        </MainContainer>
    )
}

export default Home
