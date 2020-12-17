import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { Card } from "@components/Card";

import styled from "styled-components";

export default function Home() {
  const Cards = styled.div`
    width: 100%;
    display: flex;
  `;

  const CardContainer = styled.div`
 height:300px;
    width:25%;
  `;

  return (
    <div>
      <Cards>
       <CardContainer>
       <Card />
       </CardContainer>
       <CardContainer>
       <Card />
       </CardContainer>
       <CardContainer>
       <Card />
       </CardContainer>
       <CardContainer>
       <Card />
       </CardContainer>
       
      </Cards>
      <Footer />
      <p>Last update: 18:13 17.12</p>

    </div>
  );
}
