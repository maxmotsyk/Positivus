import React from 'react';
import styled from 'styled-components';
import BackgroundFormImg from '../assets/img/contact_us_from_img.svg'
import {
    Formik,
    Form,
    Field,
    ErrorMessage
} from 'formik';
import * as Yup from 'yup';
import StyledContainer from './UI/Container';
import Button from './UI/Button';
import Title from './UI/Title';

const StyledSection = styled.section`
    margin:140px 0 0 0;
    display:flex;
    flex-direction:column;

    .contact_us_container{
        margin: 80px 0 0 0;
        padding:60px 100px;
        border-radius:45px;
        background: #F3F3F3 url(${BackgroundFormImg}) no-repeat;
        background-position: right -60%  center;
        background-size: 640px 620px;
        
        .contactForm{
            width: 100%;
            max-width: 556px;
            display: flex;
            flex-direction: column;

            label{
                cursor:pointer;
                display: flex;
                flex-direction: column;

                &:not(:last-of-type){
                    margin: 0 0 25px 0;
                }

                textarea,input:not([type="radio"]){
                    padding: 18px 30px;
                    border-radius: 14px;
                    border: 1px solid #000;
                    background: #FFF;
                }

                textarea {
                    min-height: 190px;
                }

                .error{
                    margin: 10px 0 0 0;
                    font-size: 14px;
                    color: red;
                }
            }

            .radio_group{
                display:flex;
                align-items:center;
                margin: 0 0 40px 0;

                .custom_radioBt{

                    & + .custom_radioBt{
                        margin: 0 0 0 30px
                    }

                    [type="radio"]{
                        position:absolute;
                        margin: 0 14px 0 0;
                        opacity:0;
                        width:28px;
                        height: 28px;     
                    }

                    [type="radio"]:checked + label:after{
                        background: #B9FF66;
                    }

                    label{
                        position:relative;
                        display: flex;
                        width:fit-content;
                        justify-content:center;
                        height:28px;
                        padding: 0 0 0 42px;

                        &:before,&:after{
                            top:0;
                            position:absolute;
                            content:'';
                            border-radius:50%;
                        }

                        &:after{
                            left:6px;
                            top:6px;
                            width:16px;
                            height:16px;
                        }

                        &:before{
                            left:0;
                            border: 1px solid black;
                            width:28px;
                            height:28px;
                        }
                    }

                }

                p{
                    display: flex;
                    align-items: center;

                    label{
                        margin: 0 0 0 28px;
                        position:relative;

                        &:not(:last-of-type){
                            margin: 0 35px 0 0
                        }

                        &:before,&:after{
                            top:0;
                            position:absolute;
                            content:'';
                            border-radius:50%;
                        }

                        &:after{
                            width:16px;
                            height:16px;
                        }

                        &:before{
                            left:0;
                            border: 1px solid black;
                            width:28px;
                            height:28px;
                        }

                    }

                    [type="radio"]{
                        position:absolute;
                        margin: 0 14px 0 0;
                        opacity:0;
                        width:28px;
                        height: 28px;     
                    }

                    [type="radio"]:checked + label:after{
                        background: #B9FF66;
                    }

                }
                
            }

            .sendBt{
                margin: 40px 0 0 0;
            }

        }

    }   
`

interface InitialValues {
    name: string,
    email: string,
    message: string,
    radio: 'say hi' | 'get a Quote'
}

const initialV: InitialValues = {
    name: '',
    email: '',
    message: '',
    radio: 'say hi'
}

const validationSchema = Yup.object(
    {
        name: Yup.string()
            .min(2, "Min 2 chars!")
            .required('Impotent aria!'),
        email: Yup.string()
            .email('Not corect email')
            .required('Impotent aria!'),
        message: Yup.string()
            .max(500, 'too many characters')
            .notRequired(),
        radio: Yup.string()
            .required("A radio option is required")
    }
)

const ContactUs: React.FC = () => {

    return (
        <StyledSection>
            <Title maxWidth='600px' text={'Contact Us'} description={"Connect with Us: Let's Discuss Your Digital Marketing Needs"} />

            <StyledContainer className='contact_us_container'>
                <Formik
                    initialValues={initialV}
                    validationSchema={validationSchema}
                    onSubmit={() => { console.log('send') }}
                >
                    <Form className='contactForm'>

                        <div className="radio_group">


                            <div className="custom_radioBt">
                                <Field
                                        type='radio'
                                        name='radio'
                                        value='say hi'
                                        id="radio1"
                                    />
                                <label htmlFor="radio1">Say hi</label>
                            </div>

                            <div className="custom_radioBt">
                                <Field
                                        type='radio'
                                        name='radio'
                                        value='say hi'
                                        id="radio2"
                                    />
                                <label htmlFor="radio2">Get a Quote</label>
                            </div>

                        </div>

                        <label>
                            Name*
                            <Field
                                type='text'
                                name='name'
                            />
                            <ErrorMessage className='error' name="name" component="p"/>
                        </label>

                        <label>
                            Email*
                            <Field
                                type='email'
                                name='email'
                            />
                            <ErrorMessage className='error' name="email" component="p"/>
                        </label>

                        <label>
                            Message*
                            <Field
                                name='message'
                                as='textarea'
                            />
                            <ErrorMessage className='error' name="message" component="p"/>
                        </label>

                        <Button
                            className='sendBt'
                            width='556px'
                            height='68px'
                            type={'mainBt'}
                            text={'Send Message'} />

                    </Form>

                </Formik>

            </StyledContainer>

        </StyledSection>
    )

}

export default ContactUs;