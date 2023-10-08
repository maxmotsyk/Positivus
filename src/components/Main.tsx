import React from 'react';
import styled from 'styled-components';
import MainBaner from './MainBaner';
import Services from './Services';
import CaseStudies from './CaseStudies';
import WorkingProcess from './WorkingProcess';
import Team from './Team';
import ContactUs from './ContactUs';
import Testimonials from './Testimonials';

const StyledMain = styled.main`
    margin: 70px 0 0 0;
    width: 100%;
    max-width: 1240px;
    display: flex;
    flex: 1;
    flex-direction:column;
`
const Main: React.FC = ()=> {

    return (
        <StyledMain>
            <MainBaner/>
            <Services/>
            <CaseStudies/>
            <WorkingProcess/>
            <Team/>
            <Testimonials/>
            <ContactUs/>
        </StyledMain>
    )

}

export default Main;