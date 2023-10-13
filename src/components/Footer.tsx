import React from "react";
import styled from "styled-components";
import StyledContainer from "./UI/Container";
import StyledIcon from "./UI/Icon";
import Button from "./UI/Button";
import * as Yup from 'yup';
import {
    Formik,
    Form,
    Field,
    ErrorMessage
} from 'formik';

const StyledFooter = styled.footer`
    margin: 70px 0 0 0;
    width: 100%;
    max-width: 1240px;
    display: flex;
    flex-direction: column;

    .footer_container{
        display:flex;
        flex-direction: column;
        padding:55px 60px;
        border-radius:45px 45px 0 0 ;
        background-color: #191A23;

        .footer_nav_content{
            width:100%;
            display:flex;
            justify-content:space-between;
            align-items: center;

            .logo{
                display:flex;
                align-items:center;

                .logo_icon{
                    filter:invert(1)
                }

                h3{
                    margin: 0 0 0 10px;
                    color:#ffff;
                }

            }

            .footer_nav{
                display:flex;
                align-items:center;

                li{
                    a{
                        color:#ffff;
                        text-decoration: underline;
                        text-underline-offset: 3px;
                    }

                    &:not(:last-of-type){
                        margin: 0 40px 0 0;
                    }
                }

            }

            .socials{
                max-width: 130px;
                width:100%;
                display:flex;
                justify-content:space-between;
                align-items: center;
            }

        }

        .contact_info{
            width:100%;
            margin:66px 0 0 0;
            padding: 0 0 50px 0;
            border-bottom: 1px solid #fff;
            display:flex;
            justify-content: space-between;
            align-items: center;

            .contact_us{

                h4{
                    padding:2px 5px;
                    width:fit-content;
                    border-radius: 7px;
                    background-color:#B9FF66;
                    color:#000;
                }

                ul{
                    margin: 27px 0 0 0;

                    li{
                        max-width:330px;

                        a{
                            font-size:18px;
                            color:#fff;
                            cursor:pointer;
                        }

                        &:not(:last-of-type){
                            margin:0 0 20px 0;
                        }

                    }

                }

            }

            .contactForm{
                padding:58px 40px;
                display: flex;
                border-radius:14px;
                background-color:#292A32;

                [type='email']{  
                    margin: 0 20px 0 0;
                    width: 285px;
                    padding: 22px 35px;
                    border-radius: 14px;
                    border: 1px solid #FFF;
                    background-color:transparent;
                    font-size:18px;
                }

                .error{
                    margin: 10px 0 0 0;
                    font-size: 14px;
                    color: #ff00006e;
                }

            }

        }

        .ownership_text{
            display:flex;
            align-items: center;
            margin:50px 0 0 0;

            p,a{
                color: #fff;
            }

            a{
                margin:0 0 0 40px;
                text-decoration: underline;
                text-underline-offset: 3px;
            }
        }

    }

`
const Footer: React.FC = () => {
    return (
        <StyledFooter>
            <StyledContainer className="footer_container">

                <div className="footer_nav_content">

                    <div className="logo">
                        <StyledIcon
                            className="logo_icon"
                            icon="logo"
                            as='div'
                            width={'29px'}
                            height={'29px'} />
                        <h3>
                            Positivus
                        </h3>
                    </div>

                    <nav className='footer_nav'>
                        <li>
                            <a href="">About us</a>
                        </li>
                        <li>
                            <a href="">Services</a>
                        </li>
                        <li>
                            <a href="">Use Cases</a>
                        </li>
                        <li>
                            <a href="">Pricing</a>
                        </li>
                        <li>
                            <a href="">Blog</a>
                        </li>
                    </nav>

                    <div className="socials">
                        <StyledIcon icon="linkedinW" width={'30px'} height={'30px'} as='a' />
                        <StyledIcon icon="facebook" width={'30px'} height={'30px'} as='a' />
                        <StyledIcon icon="twitter" width={'30px'} height={'30px'} as='a' />
                    </div>
                </div>

                <div className="contact_info">

                    <div className="contact_us">

                        <h4>Contact us:</h4>

                        <ul>
                            <li>
                                <a href="mailto:">Email: info@positivus.com</a>
                            </li>

                            <li>
                                <a href="tel:+">Phone: 555-567-8901</a>
                            </li>

                            <li>
                                <a href="http://">
                                    Address: 1234 Main St
                                    Moonstone City, Stardust State 12345
                                </a>
                            </li>
                        </ul>

                    </div>

                    <Formik
                        initialValues={{
                            email: '',
                        }}
                        validationSchema={
                            Yup.object({
                                email: Yup.string()
                                    .email('Not corect email')
                                    .required('Impotent aria!'),
                            })}
                        onSubmit={() => { console.log('send') }}
                    >

                        <Form className="contactForm">
                            <label>
                                <Field
                                    placeholder="Email"
                                    type='email'
                                    name='email'
                                />
                                <ErrorMessage className='error' name="email" component="p" />
                            </label>

                            <Button 
                                width="250px"
                                height="68px"
                                padding="20px 35px"
                                type={"greenBt"} 
                                text={"Subscribe to news"} />

                        </Form>

                    </Formik>

                </div>

                <div className="ownership_text">
                    <p>© 2023 Positivus. All Rights Reserved.</p>
                    <a href="#">Privacy Policy</a>
                </div>

            </StyledContainer>

        </StyledFooter>
    )
}

export default Footer;