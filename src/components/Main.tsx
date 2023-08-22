import React from 'react';
import styled from 'styled-components';
import MainBaner from './MainBaner';

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
        </StyledMain>
    )

}

export default Main;