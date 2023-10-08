import styled from 'styled-components';
import React from 'react';

interface titleProps{
    text:string;
    description: string;
    className?:string;
}

interface styleTitleProps {
    maxWidth?: string
}

const StyledTitle = styled.div<styleTitleProps>`
    display: flex;
    align-items: center;
    max-width: ${({maxWidth}) => maxWidth|| 'none'};

    h2{
        width:fit-content;
        background-color: #B9FF66;
        padding:0 7px;
        border-radius: 7px;
        white-space:nowrap
    }

    p{ 
        max-width:580px;
        margin: 0 0 0 40px;
        color: #000;
    }

`

const Title:React.FC<titleProps & styleTitleProps> = ({text, description, className, maxWidth}) => {

    return(
        <StyledTitle maxWidth={maxWidth} className = {className}>
            <h2>{text}</h2>
            <p>{description}</p>
        </StyledTitle>
    )

}

export default Title;