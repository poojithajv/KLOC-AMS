import React from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {useNavigate} from 'react-router-dom'
import './index.css'

function Home() {
  const navigate=useNavigate()
  return (
    <>
        <div className="headerContainer">
              <div className="headerLogoContainer">
              <img src="https://res.cloudinary.com/dufx8zalt/image/upload/v1687419355/logoimage1_krvkbq.png" alt="logo" style={{height:'50px', width:'100px', borderRadius:'10px'}}/>
              </div>
              <div className="desktopHeaderNavbarContainer">
              <p onClick={()=>navigate('/')} className='headerNavbarLink'>Home</p>
              <p onClick={()=>navigate('/studentLogin')} className='headerNavbarLink'>Student</p>
              <p onClick={()=>navigate('/adminLogin')} className='headerNavbarLink'>Admin</p>
              </div>
              <div className="mobileHeaderNavbarContainer">
              
              <Popup  style = {{background:"yellow"}} trigger={<button  className="hamburger-btn"><GiHamburgerMenu /></button>} position="bottom" className="mobile-hamburger-menu-container">
              <div className="mobile-hamburger-menu-container">
              <ul className="mobile-hamburger-menu">
                <li onClick={()=>navigate('/')} className='headerNavbarLink'>Home</li>
                <li onClick={()=>navigate('/studentLogin')} className='headerNavbarLink'>Student</li>
                <li onClick={()=>navigate('/adminLogin')} className='headerNavbarLink'>Admin</li>
                </ul>
                </div>
  </Popup>
              </div>
              </div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'300px'}}>
            KLOC HIREME
        </div>
        </>
  )
}

export default Home