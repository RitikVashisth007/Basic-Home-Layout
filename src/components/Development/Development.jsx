import React from 'react'
import { MainContainer , SingleGrid , GridSection } from './DevelopmentStyled'
import WebImage from '../../assets/web.png'
import NativeImage from '../../assets/native.png'
import App from '../../assets/app.svg'

function Development() {
    return (
        <MainContainer>
            <div className='uppar-text' id='develop' >
                <h2>DEVELOPMENT</h2>
                <p>Let’s bring the ideas to life.</p>
            </div>
            <GridSection>
                    <SingleGrid>
                        <img src={App} alt="" />
                        <h5>WEB SERVICES</h5>
                    </SingleGrid>
                    <SingleGrid>
                        <img src={NativeImage} alt="" />
                        <h5>NATIVE MOBILE DEVELOPMENT</h5>
                    </SingleGrid>
                    <SingleGrid>
                        <img src={WebImage} alt="" />
                        <h5>HYBRID MOBILE DEVELOPMENT</h5>
                    </SingleGrid>
                </GridSection>


                <div className='uppar-text' style={{marginTop:'100px'}} id='maintain' >
                <h2>MAINTAIN</h2>
                <p>If the health of your website is depleting, our tech <br /> doctors can fix it in a jiffy.</p>
            </div>
            <GridSection  >
                    <SingleGrid>
                        <img src={App} alt="" />
                        <h5>WEB SERVICES</h5>
                    </SingleGrid>
                    <SingleGrid>
                        <img src={NativeImage} alt="" />
                        <h5>NATIVE MOBILE DEVELOPMENT</h5>
                    </SingleGrid>
                    <SingleGrid>
                        <img src={WebImage} alt="" />
                        <h5>HYBRID MOBILE DEVELOPMENT</h5>
                    </SingleGrid>
                </GridSection>


            
        </MainContainer>
    )
}

export default Development
