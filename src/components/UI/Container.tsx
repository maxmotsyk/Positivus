import styled from "styled-components";

interface containerProps{
    type?: 'fluid'
    padding?: string;
    margin?: string;
    diraction?: 'flex' | 'colum';
    justify?: 'center' | 'end' | 'start';
    align?:  'center' | 'flex-end' | 'flex-start';
    className?: string;
}

const StyledContainer = styled.div<containerProps>`
    display:flex;
    width:100%;
    max-width:${({type}) => type == 'fluid' ? '100%' : '1240px'};
    height:auto;
    margin: ${({margin}) => margin || '0px'};
    align-items: ${({align}) => align || 'flex-start'};
    padding: ${({padding}) => padding || '0px'};
    justify-content: ${({justify}) => justify || 'start'};
`

export default StyledContainer;
