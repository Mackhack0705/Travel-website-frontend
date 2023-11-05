import React from 'react'
import Styled from 'styled-components';
import "../style/header.css"

const Header = () => {
  const StyleHeaderContainer = Styled.div`
    max-width: 1536px !important;
    margin-left: auto;
    margin-right: auto;
    padding-left: 0.5rem;
    padding-right: 0.5rem;

    /* 2xl */
    @media (max-width: 1536px) {
        max-width: 1280px;
    
    /* xl */
    @media (max-width: 1280px) {
      .container {
        max-width: 1024px;
    }
    
    /* lg */
    @media (max-width: 1024px) {
        max-width: 768px;
    }
    
    /* md */
    @media (max-width: 768px) {
        max-width: 640px;
    }
    
    /* sm */
    @media (max-width: 640px) {
        max-width: 475px;
    }
    
    /* xs */
    @media (max-width: 475px) {
        width: 100%;
    }
  `;
  return (
    <StyleHeaderContainer className='header'>
    </StyleHeaderContainer>
  )
}

export default Header;
