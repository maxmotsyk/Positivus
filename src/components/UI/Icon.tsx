import React from "react";
import IconType from "../../types/iconTypes";
import styled, {css} from 'styled-components';

import {
    arrowGreen, arrowLeft,
    arrowRight, arrowRoundGreen,
    arrowRoundWhite, facebookRoundWhite,
    linkedinRoundWhite, linkedinRoundGreen,
    twitterRoundWhite, logoPositivus
} from '../../assets/icons';

interface iconProps {
    icon: IconType,
    width: number | string,
    height?: number | string,
    as?: 'a' | 'div' | 'button',
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
    href?: string,
    className?: string
}

const iconsImg: Record<IconType, string> = {
    'logo' : logoPositivus,
    'twitter': twitterRoundWhite, 
    'facebook': facebookRoundWhite,
    'linkedinW':linkedinRoundWhite ,
    'linkedinG': linkedinRoundGreen ,
    'arrowL': arrowLeft,
    'arrowR' : arrowRight,
    'arrowG' : arrowGreen, 
    'arrowRoundG': arrowRoundGreen,
    'arrowRoundW': arrowRoundWhite
}

const StyledIcon = styled.div<iconProps>`
    display:block;
    width: ${({width}) => width};
    height: ${({height}) => height || 'auto'};
    background: url(${({icon}) => iconsImg[icon]}) no-repeat center;
    background-size:contain;

    ${({as}) => (as == 'button'|| as == 'a' ) && css`
        cursor: pointer;
        transition: 0.3s all;

        &:hover{
            opacity:0.9;
        }
    `}
`;

export default StyledIcon;