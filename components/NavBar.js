import React from 'react'
import styled from 'styled-components';


const StyledNav = styled.ul`
height: 5vh;
background-color: darkkhaki;
display: flex;
justify-content: space-around;
text-align: center;
border-radius: 5px;
padding-inline-start: 0;


li{
    text-decoration: none;
    list-style-type: none;
}
`

const Logo = styled.div`
border-radius: 10px solid 998FC7;
width: 20vw;
background-color: #998FC7;
`;

const SearchBar = styled.div`
width:65vw;
background-color: #F9F5FF;
display: flex;



input {
    text-align: center;
    border: none;
    border-radius: 3px;
    width:90%;
    height: 50%;
    margin: auto;
    background-color: #998FC7;}
`;

const UserPanel = styled.div`
width: 15vw;
border-left: 1px solid black;
background-color: azure;
`;

export const NavBar = () => {
    return (
            <StyledNav>
                <Logo>
           
                </Logo>
                <SearchBar>
                <input />
                </SearchBar>
              
              <UserPanel>
              <li>c</li>
                  </UserPanel>  
              
            </StyledNav>
    )
}
