import React from "react";
import styled from "styled-components";
import Title from "./UI/Title";
import StyledContainer from "./UI/Container";

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import { testiMonials } from "../assets/data";
import Slide from "./UI/Slide";

import NextBtImg from '../assets/img/slider_navigation/arrow_right.svg';
import PrevBtImg from '../assets/img/slider_navigation/arrow_left.svg';
import PaginationBullet from '../assets/img/slider_navigation/pagination_bullet.svg';
import PaginationBulletA from '../assets/img/slider_navigation/pagination_bullet_active.svg'
import 'swiper/css/pagination';


const StyledSection = styled.section`
    margin:100px 0 0 0;

    .testimonials_container{
        display: flex;
        flex-direction:column;
        align-items: center;
        padding:84px 0 68px 0;
        margin: 80px 0 0 0;
        border-radius: 45px;
        background-color: #191A23;

        .slider{
            width:100%;
        }

        .slider_navigation{
            margin: 125px 0 0 0 ;
            display: flex;
            justify-content: space-between;
            align-items:center;
            max-width: 564px;
            width: 100%;

            .navigation_prevEl_bt,.navigation_nextEl_bt{
                width: 26px;
                height: 27px;
                border: none;
                transition: 0.3s all;
                cursor: pointer;

                &.swiper-button-disabled{
                    opacity: 0.5;
                }
                
            }

            .navigation_prevEl_bt{
                background: transparent url(${PrevBtImg}) no-repeat center;
            }

            .navigation_nextEl_bt{
                background: transparent url(${NextBtImg}) no-repeat center;
            }

            .slide_pagination{
                display: flex;
                justify-content: center;

                .swiper-pagination-bullet{
                    width:14px;
                    height:27px;
                    background: transparent url(${PaginationBullet}) no-repeat center;
                    background-size:contain;
                    transition: 0.3s all;
                    opacity: 1;

                    &:not(:last-of-type){
                        margin: 0 18px 0 0;
                    }

                    &.swiper-pagination-bullet-active{
                        background: transparent url(${PaginationBulletA}) no-repeat center;
                    }
                }

            }
            
        }

    }

`

const Testimonials: React.FC = () => {

    return (
        <StyledSection>
            <Title
                text="Testimonials"
                description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services" />

            <StyledContainer className="testimonials_container">

                <div className="slider">

                    <Swiper
                        initialSlide={2}
                        spaceBetween={50}
                        slidesPerView={1.96}
                        centeredSlides ={true}
                        pagination={{
                            el:'.slide_pagination',
                            clickable: true,
                            
                        }}
                        navigation={{
                            prevEl: '.navigation_prevEl_bt',
                            nextEl: '.navigation_nextEl_bt'
                        }}
                        modules={[Pagination,Navigation]}
                        >
                    
                    {
                        testiMonials.map((data,i) => <SwiperSlide key={i}><Slide {...data} /></SwiperSlide> )
                    }

                    </Swiper>

                </div>
                
                <div className="slider_navigation">
                    <button className="navigation_prevEl_bt"></button>

                    <div className="slide_pagination"></div>

                    <button className="navigation_nextEl_bt"></button>
                </div>


            </StyledContainer>

        </StyledSection>
    )

}

export default Testimonials;