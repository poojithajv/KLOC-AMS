// import pacakages like react, react-icons, reactjs-popup, react-router-dom and index.css file to render the Home component
import React from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {useNavigate} from 'react-router-dom'
import './index.css'

function Home() {
  // navigate variable used to naviagating to different routes
  const navigate=useNavigate()
  return (
    <>
    {/* header for desktop  with Logo and components Home, Student and Admin */}
    <div className="headerContainer">
      <div className="headerLogoContainer">
        {/* logo */}
        <img src="https://res.cloudinary.com/dufx8zalt/image/upload/v1687419355/logoimage1_krvkbq.png" alt="logo" style={{height:'50px', width:'100px', borderRadius:'10px'}}/>
      </div>
      <div className="desktopHeaderNavbarContainer">
        {/* when clicking this Home text, it'll navigates to Home route */}
        <p onClick={()=>navigate('/')} className='headerDesktopNavbarLink'>Home</p>
        {/* when clicking this Student text, it'll navigates to Student route */}
        <p onClick={()=>navigate('/studentLogin')} className='headerDesktopNavbarLink'>Student</p>
        {/* when clicking this Admin text, it'll navigates to Admin route */}
        <p onClick={()=>navigate('/adminLogin')} className='headerDesktopNavbarLink'>Admin</p>
      </div>
      {/* nav header for mobile  with Logo and components Home, Student and Admin */}
      <div className="admin-mobile-header-navbar-container">
        <Popup contentStyle={{ width: '50%',backgroundColor:"white" }} trigger={<button  className="admin-hamburger-btn"><GiHamburgerMenu /></button>} position="bottom right" >
          <ul className="admin-mobile-hamburger-menu">
            {/* when clicking this Home text, it'll navigates to Home route */}
            <li onClick={()=>navigate('/')} className='headerNavbarLink'>Home</li>
            {/* when clicking this Student text, it'll navigates to Student route */}
            <li onClick={()=>navigate('/studentLogin')} className='headerNavbarLink'>Student</li>
            {/* when clicking this Admin text, it'll navigates to Admin route */}
            <li onClick={()=>navigate('/adminLogin')} className='headerNavbarLink'>Admin</li>
          </ul>
        </Popup>
      </div>
    </div>
    {/* Text Container */}
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'300px'}}>
        KLOC HIREME
    </div>
  </>
  )
}

export default Home