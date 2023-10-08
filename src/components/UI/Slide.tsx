import React from "react";
import styled from "styled-components";
import { ITestimonials } from "../../assets/data";

const StyleSlide = styled.div`
    max-width: 600px;
    width:100%;
    display:flex;
    flex-direction: column;
    align-items: center;

    .review{
        position: relative;
        padding: 48px 50px;
        border: 1px solid #B9FF66;
        border-radius: 45px;

        p{
            font-size: 18px;
            color: #FFFFFF;
        }

        &:after{
            position:absolute;
            bottom: -21.2px;
            left: 68px;
            width:40px;
            height:40px;
            border: 1px solid #B9FF66;
            background-color:#191A23;
            border-left:none;
            border-top:none;
            transform:rotate(45deg);
            content: '';
            display:block;
        
        }

    }

    .autor_data{
        margin:48px 0 0 0 ;
        padding: 0 0 0 80px;
        width: 100%;
        display:flex;
        flex-direction: column;

        h2{
            font-size: 20px;
            color:#B9FF66;
        }

        p{
            font-size: 18px;
            color: #ffff;
        }
    }
    
`

const Slide: React.FC<ITestimonials> = ({review, autor, jobPost}) => {

    return(
        <StyleSlide>
            <div className="review">
                <p>{review}</p>
            </div>

            <div className="autor_data">
                <h2>{autor}</h2>
                <p>{jobPost}</p>
            </div>
        </StyleSlide>
    )

}

export default Slide