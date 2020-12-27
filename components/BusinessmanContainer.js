import React from 'react'
import styled from 'styled-components';

const StyledSection = styled.section`
height: 80vh;
background-color: orange;
display: flex;
flex-direction: row;
font-family: 'Times New Roman', Times, serif;

@media (max-width: 768px){
background: url("/static/images/businessman-medium.png") bottom;
background-repeat: no-repeat;
flex-direction: column;
background-color: orange;
}

`;

const CenteredContainer = styled.div`
width:80%;
display: flex;
align-items: center;
justify-content: center;

`;

const TextContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-evenly;
font-size: 1,5rem;
width: 60%;

h1 {
    font-size: 45px;
}

p {
    font-size: 25px;
}


`;

const HumanContainer = styled.div`
width: 40%;
background: url("/static/images/businessman.png") center;
background-repeat: no-repeat;
background-size: cover;
@media (max-width: 768px){
background: url("/static/images/businessman-medium.png") bottom;
background-repeat: no-repeat;
} `;

export const BusinessmanContainer = () => {
    return (
        <StyledSection>
        <CenteredContainer>
        <TextContainer>
            <h1>About harness multimeda based collaboration</h1>
        <p>Quickly incentivize impactful action items before tactical collaboration and idea-sharing. Monotically engage market-driver intellectual capital through wireless opportunities. Progressively network performance based services for functionalized testing procedures.</p>
          </TextContainer>
        </CenteredContainer>
          <HumanContainer>
          </HumanContainer>
        </StyledSection>
    )
}
