import React from 'react'
import Styled from 'styled-components';
import "../style/header.css"

const Header = () => {
  const StyleHeaderContainer = Styled.div`
    height: 44rem;
    width: 100%;
    content: "";
    padding-top: 2rem;
    background: url(https://cdn.pixabay.com/photo/2018/01/31/12/16/architecture-3121009_1280.jpg);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    max-width: 1536px;
    margin-inline: auto;
    padding-inline: 0.5rem;

    /* 2xl */
    @media (max-width: 1536px) {
    
    /* xl */
    @media (max-width: 1280px) {
        height: 38rem;
    }
    
    /* lg */
    @media (max-width: 1024px) {
      height: 36rem;
    }
    
    /* md */
    @media (max-width: 768px) {
      height: 32rem;
    }
    
    /* sm */
    @media (max-width: 640px) {
      height: 28rem;
    }
    
    /* xs */
    @media (max-width: 475px) {
        width: 100%;
        height: 22rem;
    }
  `;
  return (
    <StyleHeaderContainer className='header'>
    </StyleHeaderContainer>
  )
}

export default Header
