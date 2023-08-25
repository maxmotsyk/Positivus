import React from 'react';
import styled from 'styled-components';
import StyledContainer from './UI/Container';
import StyledTitle from './UI/Title';
import ServicesCard from './UI/ServicesCard';
import {Card1, Card2, Card3, Card4, Card5, Card6} from '../assets/img/services_card_img';

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
        grid-template-columns: repeat(2, 580px);
        gap:50px;
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

        </StyledSection>
    )

}

export default Services;
