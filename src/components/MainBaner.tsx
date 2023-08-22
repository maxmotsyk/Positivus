import React from 'react';
import styled from 'styled-components';
import StyledContainer from './UI/Container';
import Button from './UI/Button';

import BanerImg from '../assets/img/Illustration_main_baner.svg';

const StyledSection = styled.section`
    display:flex;
    flex-direction:column;

    .mainBaner___content{
        display:flex;
        justify-content:space-between;

        .mainBaner___content__text_col{
        max-width:531px;

            p{
                margin: 35px 0 35px 0 ;
            }

        }

        .mainBaner___content__img_baner{
            max-width: 100%;
            height: auto;
        }
    }

`

const MainBaner: React.FC = ():JSX.Element => {
    return (
        <StyledSection>
            <StyledContainer className='mainBaner___content'>
                <div className="mainBaner___content__text_col">
                    <h1>
                        Navigating the digital landscape for success
                    </h1>

                    <p>
                        Our digital marketing agency 
                        helps businesses grow and succeed 
                        online through a range of services 
                        including SEO, PPC, social media 
                        marketing, and content creation.
                    </p>

                    <Button width='264px' 
                            height='68px' 
                            type='mainBt' 
                            children='Book a consultation'
                    />
                </div>

                <img src={BanerImg} alt="" className='mainBaner___content__img_baner'/>
            </StyledContainer>

            <StyledContainer>
                <ul>
                    
                </ul>
            </StyledContainer>

        </StyledSection>
    )
}

export default MainBaner