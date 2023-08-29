import styled from 'styled-components';
import React from 'react';

interface titleProps{
    text:string;
    description: string;
    className?:string;
}

const StyledTitle = styled.div`
    display: flex;
    align-items: center;

    h2{
        width:fit-content;
        background-color: #B9FF66;
        padding:0 7px;
        border-radius: 7px;
    }

    p{ 
        max-width:580px;
        margin: 0 0 0 40px;
        color: #000;
    }

`

const Title:React.FC<titleProps> = ({text, description, className}) => {

    return(
        <StyledTitle className = {className}>
            <h2>{text}</h2>
            <p>{description}</p>
        </StyledTitle>
    )

}

export default Title;