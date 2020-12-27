import React from 'react'
import styled from 'styled-components';
import { Left } from './Left';


const Main = styled.div`
display: flex;
height: 100vh;
`;

const LeftContainer = styled.div`
width: 20vw;
background-color: #998FC7;
`;

const MiddleContainer = styled.div`
width:55vw;
background-color: #F9F5FF;
display: flex;

`

const RightContainer = styled.div`
width: 25vw;
height: 100vh;
border-left: 1px solid black;
background-color: azure;
border-left: 2px soldi black;
`;

export const Bottom = () => {
    return (
        <Main>
            <LeftContainer>
                <Left 
                />
            </LeftContainer>
            <MiddleContainer/>
            <RightContainer/>
        </Main>
    )
}
