import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 40px auto 40px;

  margin-left: 15px;
  margin-right: 20px;
  width: 80%;
  font-size: 16px;

  li {
    list-style-type: none;
    text-align: left;
    margin: auto;
    margin-top: 10px;
    font-family: 'Roboto-Black';
    font-weight: 500;
    width: 70%;


  }

  li:nth-child(2){
    margin-left: 0;
  }
  li:nth-child(3){
    font-size: small;
    text-align: center;
    background-color: blue;
    border-radius: 50%;
  }

`;

export const MenuElement = (props) => {
  return (
    <Container>
      <li>{props.children}</li>
      <li>{props.title}</li>
      <li>{props.notificiationsNumber}</li>
    </Container>
  );
};
