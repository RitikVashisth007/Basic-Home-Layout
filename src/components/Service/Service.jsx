import React from 'react'

import App from '../../assets/app.svg'
import Brading from '../../assets/branding.svg'
import Animation from '../../assets/animation.svg'
import Webdev from '../../assets/webdev.png'

import { GridContainer, MainContainer , UpparText , SingleGrid } from './ServiceStyled'

function Service() {
    return (
        <MainContainer>
            <UpparText>
                <h4>SERVICE</h4>
                <h5>We solve problems with <br /> buttons and experiences.</h5>
                <p>We can help your ideas become alive by converting them <br /> into amazing designs and awesome experiences.</p>
            </UpparText>
            <GridContainer>
                <SingleGrid>
                    <img src={Webdev} alt="" />
                    <h4>Web</h4>
                    <p> UI / UI Design Prototyping </p>

                </SingleGrid>
                <SingleGrid>
                    <img src={App} alt="" />
                    <h4>Mobile Apps</h4>
                    <p> UI / UX Design Development Prototyping</p>

                </SingleGrid>
                <SingleGrid>
                    <img src={Brading} alt="" />
                    <h4>Branding</h4>
                    <p>Brand Identity Brand Positioning Styleguide Marketing material </p>

                </SingleGrid>
                <SingleGrid>
                    <img src={Animation} alt="" />
                    <h4>Animation</h4>
                    <p> Motion Graphics </p>

                </SingleGrid>
            </GridContainer>
            
        </MainContainer>
    )
}

export default Service
