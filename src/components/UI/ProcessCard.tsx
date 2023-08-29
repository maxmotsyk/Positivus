import React from 'react';
import styled, {css} from 'styled-components';
import {motion, AnimatePresence} from 'framer-motion'

interface propsProcessCard {
    title: string;
    description:string;
    cardNum: number;
    className?:string;
    onClick: () => void;
    activeCardNum: number | null;
}

const StyledProcessCard = styled.div<{openTriger:boolean}>`
    display:flex;
    flex-direction:column;
    width:100%;
    padding: 50px  57px;
    border-radius:45px;
    background-color:#F3F3F3;
    border: 1px solid #191A23;
    box-shadow: 0px 5px 0px 0px #191A23;
    transition: 0.3s all;

    .title_col{
        display:flex;
        align-items:center;

        h2{
            font-size:60px;
        }

        h3{
            margin: 0 0 0 25px;
        }

        .cardBt{
            position:relative;
            width:58px;
            height:58px;
            border-radius: 50%;
            border: 1px solid black;
            margin: 0 0 0 auto;
            transition: 0.3s all;
            background-color:#F3F3F3;

            &:after,&:before{
                content: '';
                position:absolute;
                display:block;
                width:25px;
                height: 6px;
                background-color:black;
                left:50%;
                top: 50%;
                transform: translate(-50%, -50%);
                transition: 0.3s all;
            }

            &:before{
                transform: translate(-50%, -50%) rotateZ(-90deg);
            }

        }

    }
    

    .description_col{
        border-top: 1px solid black;
        overflow: hidden;
        
        p{
            padding:30px 0 0 0;
        }
        
    }

    ${({openTriger}) => openTriger && css`
        background-color:#B9FF66;

        .title_col{

            .cardBt{

                &:before{
                    transform: translate(-50%, -50%) rotateZ(0deg);
                }

            }
        }

    `}

`

const ProcessCard: React.FC<propsProcessCard> = ({title, className, description, cardNum, activeCardNum, onClick}) => {
    const openAnswear = cardNum === activeCardNum;

    return(
        <StyledProcessCard onClick={onClick} className={className} openTriger={openAnswear}>
            <div className="title_col">
                <h2>{`0${cardNum + 1}`}</h2>

                <h3>{title}</h3>

                <div className="cardBt"></div>
            </div>

            <AnimatePresence>
                {
                    openAnswear && (

                        <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="description_col">
                            <p>
                                {description}
                            </p>
                        </motion.div>
                    )
                }
                
            </AnimatePresence>

        </StyledProcessCard>
    )
}

export default ProcessCard;