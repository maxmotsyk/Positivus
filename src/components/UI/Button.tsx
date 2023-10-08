import React from 'react';
import styled, {css} from 'styled-components';
import ButtonTypes from '../../types/buttonTypes';

interface buttonProps {
    type: ButtonTypes,
    className?: string,
    as?: 'button' | 'a',
    width?: string,
    height?: string,
    textColor?: string,
    backgroundColor?: string,
    disabled?: boolean,
    href?: string,
    text:string,
    padding?: string
    onClick?: () => void
}

const StyledButton = styled.button<buttonProps>`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: ${({height}) => height || '50px'};
    max-width: ${({width})=>  width || '250px'};
    padding:${({padding}) => padding || '0 0 0 0'};
    border-radius: 14px;
    border: none;
    background-color: ${({backgroundColor}) => backgroundColor || '#ffff'};
    color: ${({textColor}) => textColor || '#ffff'};
    font-size:20px;
    cursor:pointer;

    ${({type}):ReturnType<typeof css> =>{
        
        const btstyle: Record< ButtonTypes, ReturnType<typeof css>> = {
            mainBt: css`
                background-color: #191A23;
                color: #fff;
            `,
            greenBt: css`
                background-color: #B9FF66;
                color: black;
            `,
            skeletonBt: css`
                border: 2px solid #191A23;
                color: black;
            `
        }

        return btstyle[type]
    }}
`

const Button: React.FC<buttonProps> = (props) =>{

    return <StyledButton {...props}>
                {props.text}
            </StyledButton>

}

export default Button