import React from 'react';
import styled from 'styled-components';
import StyledIcon from './UI/Icon';
import Title from './UI/Title';
import StyledContainer from './UI/Container';

const StyledCaseStudies = styled.section`
    margin:140px 0 0 0 ;
    display:flex;
    flex-direction:column;

    .case_studies___cases_col{
        margin:80px 0 0 0;
        padding: 70px 60px;
        display:flex;
        justify-content:space-between;
        background-color:#191A23;
        border-radius:45px;

        .case:nth-child(2n){
            position:relative;

            &::before,&::after{
                position:absolute;
                top: 50%;
                transform: translate(-50%, -50%);
                content:'';
                display:block;
                width:1px;
                height:100%;
                background-color:#fff;
            }

            &:before{
                left:-64px;
            }

            &:after{
                right:-64px;
            }

        }

    }

`
const CaseStudies:React.FC = () => {
    return(
        <StyledCaseStudies>

            <Title 
                text='Case Studies' 
                description='Explore Real-Life Examples of Our 
                Proven Digital Marketing Success 
                hrough Our Case Studies'
            />

            <StyledContainer className='case_studies___cases_col'>
                <Case
                    className='case'
                    description='For a local restaurant, we implemented a 
                    targeted PPC campaign that resulted in a 50% increase 
                    in website traffic and a 25% increase in sales.'
                    

                    hrefLink='#'
                />

                <Case
                    className='case'
                    description='For a local restaurant, we implemented a 
                    targeted PPC campaign that resulted in a 50% increase 
                    in website traffic and a 25% increase in sales.'

                    hrefLink='#'
                />

                <Case
                    className='case'
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
    className?:string
}

const StyledCase = styled.div`
    height: 100%;

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

const Case: React.FC<caseProps> = (props) => {

    return(
        <StyledCase {...props}>
            <p>{props.description}</p>
            <a href={props.hrefLink}>
                Learn more 

                <StyledIcon width='18px' icon='arrowG' className='link_ico'/>
            </a>
        </StyledCase>
    )

}

export default CaseStudies;