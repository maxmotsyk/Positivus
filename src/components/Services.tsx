import React from 'react';
import styled from 'styled-components';
import StyledContainer from './UI/Container';
import StyledTitle from './UI/Title';
import ServicesCard from './UI/ServicesCard';
import Button from './UI/Button';

import {Card1, Card2, Card3, Card4, Card5, Card6} from '../assets/img/services_card_img';
import ContactImg from '../assets/img/conection_block_img.svg';


const StyledSection  = styled.section`
    margin:200px 0 0 0;
    display:flex;
    flex-direction:column;

    .services___title_col{
        display:flex;
        align-items:center;
        p{
            max-width:580px;
            margin: 0 0 0 40px;
        }

    }

    .services___cards_col{
        margin:90px 0 0 0;
        display:grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 580px));
        gap:50px;
    }

    .services___contact_col{
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin:113px 0 0 0;
        border-radius:45px;
        background-color:#F3F3F3;
        padding:60px;

        &__text{
            max-width:500px;

            h3,p{
                margin:0 0 26px 0;
            }
        }

        &__img{
            position:relative;
            width:359px;
            margin:0 135px 0 0;

            img{
                position:absolute;
                top: 50%; 
                left: 50%; 
                transform: translate(-50%, -50%);
            }
        }

    }

`

const Services: React.FC = () => {

    return(
        <StyledSection>
            <StyledContainer className='services___title_col'>
                <StyledTitle>
                    Services
                </StyledTitle>

                <p>
                    At our digital marketing agency, 
                    we offer a range of services to help 
                    businesses grow and succeed online. These services include:
                </p>

            </StyledContainer>

            <StyledContainer className='services___cards_col'>
                <ServicesCard 
                    variant={'whiteCard'} 
                    titleTxt={"Search engine optimization"} 
                    img={Card1} 
                    href={''}/>
                <ServicesCard 
                    variant={'greenCard'} 
                    titleTxt={"Pay-per-click advertising"} 
                    img={Card2} 
                    href={''}/>
                <ServicesCard 
                    variant={'blackCard'} 
                    titleTxt={"Social Media Marketing"} 
                    img={Card3} 
                    href={''}/>
                <ServicesCard 
                    variant={'whiteCard'} 
                    titleTxt={"Email Marketing"} 
                    img={Card4} 
                    href={''}/>
                <ServicesCard 
                    variant={'greenCard'} 
                    titleTxt={"Content Creation"} 
                    img={Card5} 
                    href={''}/>
                <ServicesCard 
                    variant={'blackCard'} 
                    titleTxt={"Analytics and Tracking"} 
                    img={Card6} 
                    href={''}/>
            </StyledContainer>

            <StyledContainer className='services___contact_col'>
                <div className="services___contact_col__text">
                    <h3>
                        Let’s make things happen
                    </h3>

                    <p>
                        Contact us today to learn more about 
                        how our digital marketing services 
                        can help your business grow and succeed online.
                    </p>

                    <Button 
                        width='288px'
                        height='68px'
                        type={'mainBt'} 
                        children={'Get your free proposal'}/>
                </div>

                <div className="services___contact_col__img">
                    <img src={ContactImg} alt="" />
                </div>
            </StyledContainer>

        </StyledSection>

    )

}

export default Services;
