import React from 'react'
import { DetailsConatiner, MainContainer, SingleItem, UpparText } from './BenifitsStyled'
import Flex from '../../assets/flex.png'
import Trophy from '../../assets/trophy.svg'
import Support from '../../assets/support.png'

function Benifits() {
    return (
        <MainContainer>
            <UpparText>
                <h2>Key benefits of <br /> working with us</h2>
            </UpparText>
            <DetailsConatiner>
                <SingleItem style={{paddingLeft:"50px"}}>
                    <img src={Flex} alt="" />
                    <h4>FLEXIBILITY</h4>
                    <p>The terms we agree upon will be according to your project needs and goals. From fixed budget basis, Time and Materials framework to weekly </p>
                </SingleItem>
                <SingleItem>
                    <img src={Support} alt="" />
                    <h4>EXTENSIVE SUPPORT</h4>
                    <p> From Scratch to success, we won’t let you struggle at any point. From creating a quick logo design concept to a complex development project,</p>
                </SingleItem>
                <SingleItem>
                    <img src={Trophy} alt="" />
                    <h4>WE MAKE IT POSSIBLE</h4>
                    <p>We won’t let your ideas go in vain. We are here to help you reach the goals that some might think are ‘un-achievable’.</p>
                </SingleItem>

            </DetailsConatiner>
            
        </MainContainer>
    )
}

export default Benifits
