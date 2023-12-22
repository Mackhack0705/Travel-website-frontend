import React from 'react'
import '../style/nbar.css'
import { Link } from 'react-router-dom'
import logo from '../images/Company-logo.png'
import { FaUser } from 'react-icons/fa'
import { BiSearch } from 'react-icons/bi'
import Styled from 'styled-components';

const Nbar = ({ isLoggedIn }) => {
  const StyleNbarContainer = Styled.div`
    max-width: 1536px !important;
    margin-inline: auto;
    padding-inline: 0.5rem;

    /* 2xl */
@media (max-width: 1536px) {
    max-width: 1280px !important;
    .company-logo {
        width: 9%;
    }
}

/* xl */
@media (max-width: 1280px) {
    max-width: 1024px !important;
    .main-nav {
        gap: 4rem !important;
    }

    .menu ul {
        gap: 1.7rem;
    }
    .bt {
        width: 40%;
    }

    .search-input {
        width: 8rem;
        height: 2.3rem;
    }
    .search-icon {
        top: 1.5rem;
        right: 17.5rem;
    }

    .btn-1 {
        margin-inline: 8px;
        padding-inline: 18px;
    }

    .btn-2 {
        margin-inline: 8px;
        padding-inline: 18px;
    }
}

/* lg */
@media (max-width: 1024px) {
    max-width: 768px !important;
    .company-logo {
        width: 12%;
    }
    .search-input {
        width: 1.8rem;
        border: none;
    }

    .search-icon {
        right: 16rem;
    }

    .menu ul {
        gap: 1rem;
    }

    .menu ul li {
        font-size: 1rem;
    }

    .main-nav {
        gap: 2.5rem !important;
    }

    ul {
        padding-left: 1rem !important;
    }
    .drop-down {
        gap: 1rem;
    }
}

/* md */
@media (max-width: 768px) {
    max-width: 640px !important;
    .menu {
        display: none;
    }
    .search-icon {
      right: 15rem;
    }
    .drop-down {
        width: 45%;
    }
    .bt {
        width: 100%;
    }
    .main-nav {
        gap: 15rem !important;
    }
    .company-logo {
        width: 15%;
    }
}

/* sm */
@media (max-width: 640px) {
    max-width: 475px !important;
    .company-logo {
        width: 18%;
    }
    .drop-down {
        width: 60%;
        gap: 0rem;
    }
    .search-icon {
        top: 1.3rem;
        right: 14.5rem;
    }

    .menu-icon {
        display: block;
        color: #eab032;
    
    }

}

/* xs */
@media (max-width: 475px) {
    width: 100% !important;
    .company-logo {
        width: 65px;
        height: 50px
    }
    .search-input {
        display: none;
    }
    .search-icon {
        display: none;
    }
    .bt {
        display: flex;
        justify-content: center;
    }
    .drop-down {
        width: 70%;
        gap: 0rem;
    }
    .btn-1 {
        margin-inline: 8px;
        padding-inline: 15px;
    }

    .btn-2 {
        margin-inline: 8px;
        padding-inline: 20px;
    }

}
  `;
  
  return (
    <StyleNbarContainer className="main-nav fl">
      <a href="#logo" className="company-logo">
        <img src={logo} alt="" />
      </a>
      <div className='drop-down fl'>
        <div className="menu">
          <ul className='fl'>
            <li><Link to={"/Home"}>Home</Link></li>
            <li><Link to={"/About"}>About</Link></li>
            <li><Link to={"/Services"}>Services</Link></li>
            <li><Link to={"/Contact us"}>Contact Us</Link></li>
          </ul>
        </div>
        <div className="bt">
          <input type="text" className='search-input' placeholder='Search' />
          <BiSearch style={{ color: "#eab032" }} size={25} className='search-icon' />
          {
            isLoggedIn ? (
              <a href="#profile"><FaUser size={25} style={{ marginLeft: 30, color: "#ffff" }} /></a>
            ) : (
              <>
                <Link to={"/signup-form"}><button className='primary-button btn-1'>Sign up</button></Link>
                <Link to={"/login-form"}><button className="secondary-button btn-2">Login</button></Link>
              </>
            )
          }
        </div>
      </div>
    </StyleNbarContainer>
  )
}

export default Nbar
