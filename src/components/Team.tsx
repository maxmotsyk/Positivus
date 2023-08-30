import React from 'react';
import styled from 'styled-components';
import StyledIcon from './UI/Icon';
import Title from './UI/Title';
import Button from './UI/Button';
import StyledContainer from './UI/Container';

const StyledSection = styled.section`
    margin:140px 0 0 0;

    .card_col{
        margin:80px 0 0 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(340px, 380px));
        gap:40px;
    }

`

const Team: React.FC = () => {

    return(
        <StyledSection>
            <Title text={'Team'} 
                    description={'Meet the skilled and experienced team behind our successful digital marketing strategies'}/>
            <StyledContainer className='card_col'>
                <TeamCard/>
            </StyledContainer>
        </StyledSection>
    )
    
}

const StyledCard = styled.div`
    padding:40px 35px;
    width: 100%;
    min-height:354px;
    display:flex;
    flex-direction:column;
    border-radius: 45px;
    border: 1px solid #191A23;
    box-shadow: 0px 5px 0px 0px #191A23;

    .head_contetn{
        position: relative;
        display:flex;
        align-items: end;

        img{
            width: 105px;
            height: 105px;
            object-fit: contain;
        }

        .info_text{
            margin: 0 0 0 18px;
        }

        .card_icon{
            position:absolute;
            top: 0;
            right: 0;
        }
        
    }

    .description_col{
        margin:28px 0 0 0;
        padding:28px 0 0 0 ;
        border-top: 1px solid #000;
    }

`

const TeamCard: React.FC = () => {

    return( 
        <StyledCard>
            <div className="head_contetn">
                <img src="" alt="" />

                <div className="info_text">
                    <h4>Sarah Kim</h4>
                    <p>Content Creator</p>
                </div>

                <StyledIcon
                    as="a" 
                    icon='linkedinG' 
                    width='34px' 
                    height='34px'
                    className='card_icon'
                />
            </div>

            <div className="description_col">
                <p>
                    4+ years of experience in 
                    social media marketing. 
                    Proficient in creating 
                    and scheduling content, 
                    analyzing metrics, and 
                    building engagement
                </p>
            </div>
        </StyledCard>
    )

}


export default Team;


