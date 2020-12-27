import Head from "next/head";

import { NavBar } from 'components/NavBar'
import { Bottom } from 'components/Bottom'

import {createGlobalStyle} from 'styled-components';

import styled from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;

}
`;



export default function Home() {


  return (



<>
         <GlobalStyle/>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto"
          rel="stylesheet"
          key="google-font-roboto"
        />
      </Head>
      <NavBar/>
      <Bottom/>
    </>


  );
}
