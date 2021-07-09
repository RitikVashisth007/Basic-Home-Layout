import React from 'react'
import {DetailContainer, FirstSection, GridSection, MainContainer, MainContent, SideMenu, SingleGrid} from './DesignStyled'
import DesignImage from '../../assets/design.png'
import BrandImage from '../../assets/brand.svg'
import MobileImage from '../../assets/mobile.svg'
import PackageImage from '../../assets/package.png'
import IllustrationImage from '../../assets/illu.png'
import TShirt from '../../assets/t-shirt.png'


function Design() {
    const handleClick = (e) => {
        e.preventDefault()
        const target = e.target.getAttribute('href')
        const location = document.querySelector(target).offsetTop
    
        window.scrollTo({
          left: 0,
          top: location - 64,
        })
        
      }

    return (
        <MainContainer>
            <SideMenu>
                <button  >  <p> <a href="#design" onClick={handleClick}>  DESIGN</a> </p>   </button>
                <button > <p> <a href="#develop" onClick={handleClick}  > DEVELOP </a> </p> </button>
                <button > <p > <a href="#maintain" onClick={handleClick} >  MAINTAIN </a></p> </button>
            </SideMenu>
            <MainContent >
                <h2>DESIGN</h2>
                <p className='p-text' >Design is the silent ambassador of your brand.</p>
                <FirstSection id='design'>
                    <div className='left-side'>
                        <img src={MobileImage} alt="" />
                        <h5>MOBILE APP DESIGN</h5>
                        
                    </div>
                    <DetailContainer>
                        <div className='side-text' >
                            <p> We Design Projects of Different Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam reiciendis modi cupiditate hic minus nesciunt fugiat, officia dolorem quaerat vero.</p>
                            <button>See More</button>
                        </div>
                        <img src={DesignImage} alt="" />
                    </DetailContainer>
                    <div className='right-side'>
                        <img src={BrandImage} alt="" />
                        <h5>BRAND IDENTITY</h5>
                        
                    </div>


                </FirstSection>
                <GridSection>
                    <SingleGrid>
                        <img src={PackageImage} alt="" />
                        <h5>PACKAGE DESIGN</h5>
                    </SingleGrid>
                    <SingleGrid>
                        <img src={IllustrationImage} alt="" />
                        <h5>ILLUSTRATIONS</h5>
                    </SingleGrid>
                    <SingleGrid>
                        <img src={TShirt} alt="" />
                        <h5>3D - MOCKUPS</h5>
                    </SingleGrid>
                </GridSection>


            </MainContent>
        </MainContainer>
    )
}

export default Design
