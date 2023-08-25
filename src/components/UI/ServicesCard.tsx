import React from "react";
import styled,{css}from 'styled-components';
import StyledIcon from "./Icon";
import ServicesCardTypes from "../../types/servicesCardTypes";
import IconType from "../../types/iconTypes";

interface cardProps {
    variant: ServicesCardTypes;
    className?: string;
    titleTxt: string;
    img: string;
    href:string;
}

const StyledServicesCard = styled.div<cardProps>`
    padding:50px;
    max-width:600px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    border-radius:45px;
    border: 1px solid #191A23;
    box-shadow: 0px 5px 0px 0px #191A23;

    .card___text_col{
        h3{
            max-width:225px;
            margin: 0 0 93px 0;
            color:#000;
            background-color:${({variant}) => variant == 'whiteCard' ?'#B9FF66' :'#ffff' };
            padding: 0 7px;
            border-radius: 7px;
        }

        a{
            display: flex;
            align-items:center;
            cursor:pointer;

            .icon{
                margin: 0 15px 0 0%;
            }
        }
    }

    ${({variant}):ReturnType<typeof css> => {
        switch(variant){
            case 'greenCard': 
                return css`
                    background-color:#B9FF66;

                    .card___text_col{
                        a{
                            color:#000;
                        }
                    }

                `;
            case 'whiteCard':
                return css`
                    background-color:#F3F3F3;

                    .card___text_col{
                        a{
                            color:#000;
                        }
                    }

                `
            case 'blackCard':
                return css`
                    background-color:#191A23;

                    .card___text_col{
                        a{
                            color:#fff;
                        }
                    }
                `
        }
    }}

`

const ServicesCard: React.FC<cardProps> = (props) => {

    const variantIcon:Record<ServicesCardTypes, IconType> = {
        greenCard: 'arrowRoundG',
        blackCard: 'arrowRoundW',
        whiteCard: 'arrowRoundG',
    }

    return(
        <StyledServicesCard {...props}>
            <div className="card___text_col">
                    <h3>
                        {props.titleTxt}
                    </h3>

                    <a href={props.href}>
                        <StyledIcon 
                            icon={variantIcon[props.variant]} 
                            as='div' 
                            width='41px' 
                            height='41px'
                            className="icon"
                            />

                        Learn more
                    </a>
            </div>

            <img src={props.img} alt="cardImg" />

        </StyledServicesCard>
    )
    
}

export default ServicesCard;