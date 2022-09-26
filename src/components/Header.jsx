import React from 'react'
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import Navbar from './Navbar';

const Header = () => {
  return (
    <>
      <MainHeader>
        <NavLink to="/">
          <img src="./images/Ajinkya3.png" height={80} width={88} className="logo" alt="logo" />
        </NavLink>
        <Navbar />
      </MainHeader>
      
    </>
  )
};

const MainHeader = styled.header`
padding: 0 1.8rem;
height: 10rem;
background-color: ${({ theme }) => theme.colors.bg};
display: flex;
justify-content: space-between;
align-items: center;

.logo {
  height: auto;
  max-width: 85%;
  border-radius: 15px;
}
`;

export default Header;

