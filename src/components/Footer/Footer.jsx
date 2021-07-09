import React from 'react'
import { BottomSection, ContactDetials, MainContainer, SingleDetails } from './FooterStyled'
import {BiPhoneCall} from 'react-icons/bi'
import {AiOutlineMail} from 'react-icons/ai'
import {IoLocationOutline} from 'react-icons/io5'

function Footer() {
    return (
        <MainContainer>
            <ContactDetials>
                <SingleDetails>
                    <div>
                        <p><BiPhoneCall/> <span>Call</span></p>
                        
                        <p>+91XXXXXXXXX</p>
                    </div>
                </SingleDetails>
                <SingleDetails>
                    <div>
                        <p><AiOutlineMail/> <span>Write us at</span></p>
                        
                        <p>XXXXXXXXX</p>
                    </div>
                </SingleDetails>
                <SingleDetails>
                    <div>
                        <p><IoLocationOutline/> <span style={{fontWeight:700, fontSize:16}} >Office</span></p>
                        
                        <p>XXXXXXXXX</p>
                    </div>
                </SingleDetails>
            </ContactDetials>
            <BottomSection>
                <p>©2020</p>
                <p style={{textDecoration:'underline'}}>Privacy Policy</p>
            </BottomSection>
            
        </MainContainer>
    )
}

export default Footer
