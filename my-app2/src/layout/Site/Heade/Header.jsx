import React from 'react'
import { Link } from 'react-router-dom'
import '../Heade/Header.scss'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Header = () => {
  return (
    <div>
    <div className='common'> 
    <div className="common__navbar1">
      <div className="div__icon">
           <TwitterIcon id='ocn'/>
           <FacebookIcon id='ocn'/>
           <InstagramIcon id='ocn'/>
           <LinkedInIcon id='ocn'/>
        </div>
        <div className="common__navbar1__left">
          <button id='btn1'>Suponsor</button>
          <button id='btn2'>Login</button>
        </div>
    </div>

        <div className="common__navbar2">
          <div className="common__navbar2__logo">
            <h2>A D O P T E D</h2>
          </div>

           <ul>
            <li><Link id='link' to='/'>Home</Link></li>
            <li><Link id='link' to='add'>Add</Link></li>
            <li><Link id='link' to="wishlist" >Wishlist</Link></li>
         <li><Link id='link' to="detail">Detail</Link></li>
        </ul>
        </div>
       
        <div>
        </div>
    </div>

    
    
    </div>
  )
}

export default Header
