import styled from 'styled-components';
import React, {useState} from 'react';
import Title from './UI/Title';
import StyledContainer from './UI/Container';
import ProcessCard from './UI/ProcessCard';

import processData from '../assets/data/processData';

const StyledWorkingProcess = styled.section`
    margin:140px 0 0 0 ;

    .cards_col{
        margin:85px 0 0 0 ;
        padding: 0 0 30px 0;
        display:flex;
        flex-direction: column;

        .card:not(:last-of-type){
            margin: 0 0 30px 0;
        }
    }

`

const WorkingProcess:React.FC = () => {
    const [activeCard, setActiveCard] = useState<number | null>(null);

    const changeActiveCard = (num: number) => {
        console.log(num);
        setActiveCard(num !== activeCard ? num : null);
    }
    return(
        <StyledWorkingProcess>
            <Title 
                text='Our Working Process' 
                description='Step-by-Step Guide to 
                Achieving Your Business Goals'
            />
        
            <StyledContainer className='cards_col'>
                {
                    processData.map(({title, description}, i) => (
                        <ProcessCard 
                        key={i}
                        title={title} 
                        description={description} 
                        cardNum={i} 
                        onClick={() => changeActiveCard(i)}
                        activeCardNum = {activeCard}
                        className='card'
                    />
                    ))
                }
            
            </StyledContainer>

        </StyledWorkingProcess>
    )
}

export default WorkingProcess;
