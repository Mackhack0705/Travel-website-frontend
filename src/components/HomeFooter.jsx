import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import logo from '../images/Company-logo.png'
import '../style/homefooter.css'

const HomeFooter = () => {
  return (
    <div className='footer-section'>
      <table className='footer-table'> 
        <tr>
            <th><img src={logo} alt="" style={{height: 50, width: 80}} /></th>
            <th>Company</th>
            <th>Contact</th>
            <th>More</th>
            <th><FaFacebook className='contact-logo' size={25}/>
            <FaInstagram className='contact-logo' size={25}/>
            <FaTwitter className='contact-logo' size={25}/> </th>
            
        </tr>
        <tr>
            <td rowSpan={3}>Book your trip in minute, get full control for much longer.</td>
            <td><a href="#About">About</a></td>
            <td><a href="#FAQ">Help/FAQ</a></td>
            <td><a href="#AirlineFees">Airlinefees</a></td>
            <td>Discover our app</td>
        </tr>
        <tr>
            <td><a href="#Career">Careers</a></td>
            <td><a href="#Press">Press</a></td>
            <td><a href="#Airline">Airline</a></td>
            <td rowSpan={2} >
              <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="" />
              <img src="https://w7.pngwing.com/pngs/1015/380/png-transparent-app-store-logo-iphone-app-store-google-play-apple-app-store-electronics-text-logo.png" alt="" />
            </td>
        </tr>
        <tr>
            <td><a href="#Mobile">Mobile</a></td>
            <td><a href="#Affiliate">Affiliate</a></td>
            <td><a href="#tips">Low far tips</a></td>
        </tr>
      </table>
    </div>
  )
}

export default HomeFooter
