import React from 'react';
import styled from 'styled-components';
import StyledIcon from './UI/Icon';
import StyledTitle from './UI/Title';
import StyledContainer from './UI/Container';

const StyledCaseStudies = styled.section`
    margin:140px 0 0 0 ;
    display:flex;
    flex-direction:column;

    .case_studies___title_col{
        display:flex;
        align-items:center;
        
        p{
            margin:0 0 0 40px;
            max-width:580px;
        }
    }

    .case_studies___cases_col{
        margin:80px 0 0 0;
        padding: 70px 60px;
        display:flex;
        justify-content:space-between;
        background-color:#191A23;
        border-radius:45px;


    }

`
const CaseStudies:React.FC = () => {
    return(
        <StyledCaseStudies>

            <StyledContainer className='case_studies___title_col'>
                <StyledTitle>
                    Case Studies
                </StyledTitle>

                <p>
                    Explore Real-Life Examples of Our 
                    Proven Digital Marketing Success 
                    hrough Our Case Studies
                </p>

            </StyledContainer>

            <StyledContainer className='case_studies___cases_col'>
                <Case
                    description='For a local restaurant, we implemented a 
                    targeted PPC campaign that resulted in a 50% increase 
                    in website traffic and a 25% increase in sales.'

                    hrefLink='#'
                />

                <Case
                    description='For a local restaurant, we implemented a 
                    targeted PPC campaign that resulted in a 50% increase 
                    in website traffic and a 25% increase in sales.'

                    hrefLink='#'
                />

                <Case
                    description='For a local restaurant, we implemented a 
                    targeted PPC campaign that resulted in a 50% increase 
                    in website traffic and a 25% increase in sales.'

                    hrefLink='#'
                />
            </StyledContainer>

        </StyledCaseStudies>
    )
}

interface caseProps {
    description:string,
    hrefLink: string,
}

const StyledCase = styled.div`
    p{
        max-width: 286px;
        margin: 0 0 20px 0;
        color:#fff;
    }

    a{
        display:flex;
        color:#B9FF66;

        .link_ico{
            margin: 0 0 0 12px;
        }

    }
`

const Case: React.FC<caseProps> = ({description,hrefLink}) => {

    return(
        <StyledCase>
            <p>{description}</p>
            <a href={hrefLink}>
                Learn more 

                <StyledIcon width='18px' icon='arrowG' className='link_ico'/>
            </a>
        </StyledCase>
    )

}

export default CaseStudies;