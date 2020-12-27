import React from "react";
import styles from "./Card.module.css";
import styled from 'styled-components';

import { IoIosArrowDroprightCircle } from "react-icons/io";

const CardBackground = styled.div` 
  display:flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.backgroundColor || "red"};
  color: ${props => props.fontColor || "white"};
  font-family: 'Times New Roman', Times, serif;
  `;

const CardInner = styled.div` 
  height: 80%;
  width: 80%;
`;

const CardContainer = styled.div`
display: flex;
align-items: flex-start;
justify-content: space-around;
flex-direction: column;
`;


const StyledNumber = styled.div`
  font-size: 45;
  font-weight: 900;

h2 {
  font-size: 45px;
}
`;


const FlexStart = styled.div`
  align-self: flex-start;
`;



export const Card = (props) => {
  return (
    <CardBackground 
    backgroundColor={props.backgroundColor}
    fontColor={props.fontColor}
    >
      <CardInner>
        <CardContainer>
          <StyledNumber>
            <h2>01</h2>
          </StyledNumber>
          <FlexStart>
            <h3>Schematic Design</h3>
          </FlexStart>
          <div>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accucantium doloremque laudantium
            </p>
          </div>

          <div className="styles.icon">
            <IoIosArrowDroprightCircle size={"5em"} />
          </div>
        </CardContainer>
        </CardInner>
    </CardBackground>
  );
};
