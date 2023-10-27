import React from 'react'
import '../style/nbar.css'
import { Link } from 'react-router-dom'
import logo from '../images/Company-logo.png'
import { FaUser } from 'react-icons/fa'



const Nbar = ({ isLoggedIn }) => {
  return (
    <div className="container main-nav fl">
      <a href="#logo" className="company-logo">
        <img src={logo} alt="" style={{ height: 80, width: 125 }} />
      </a>
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
        {
          isLoggedIn ? (
            <a href="#profile"><FaUser size={25} style={{ marginLeft: 30, color: "#ffff"} }/></a>
          ) : (
            <>
              <Link to={"/signup-form"}><button className='primary-button'>Sign up</button></Link>
              <Link to={"/login-form"}><button className="secondary-button">Login</button></Link>
            </>
          )
        }
      </div>
    </div>
  )
}

export default Nbar
