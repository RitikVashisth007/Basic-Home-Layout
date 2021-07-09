import React from 'react'
import { ImageContainer, MainContainer, TextContainer } from './HeroStyled'
import HeroImage from '../../assets/hero.png'

function Hero() {
    return (
        <MainContainer>
            <TextContainer>
                <h4>SERVICE</h4>
                <p>From proof of concepts (PoC) and minimum viable products (MVP) to complex systems of an enterprise-level we’ve got everything covered.</p>

            </TextContainer>
            <ImageContainer>
                <img src={HeroImage} alt="" />
            </ImageContainer>
            
        </MainContainer>
    )
}

export default Hero
