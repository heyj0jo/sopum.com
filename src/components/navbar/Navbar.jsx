import React, {useState} from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

function Navbar(props) {
  const [click, setClick] = useState(false);
  // state = {clicked: false};

  const handleClick = () => {
    if (click) {
      setClick(false);
    } else { 
      setClick(true);
      //this.setState({clicked: !this.state.clicked});
    }
  }

  const [bgcolor, setBgColor] = useState("");
  const changeColor = () => {
    if (window.scrollY >= 500) {
      setBgColor(props.bgcolor);
    } else {
      setBgColor("transparent");
    }
  }

  window.addEventListener("scroll", changeColor);

  const refresh = () => {
    setClick(false);
    window.scrollTo(0,0);
  }

  return (
    <div className='navbar-container' style={{backgroundColor: bgcolor}}>
        <div className='navbar-logo'>
          <Link to='/' className='navbar-logo-title' onClick={refresh}>
            <i class="fa-solid fa-brush"></i> SoPum
          </Link>
        </div>

        <ul className={click ? 'navbar-links active' : 'navbar-links'} style={{backgroundColor:props.bgcolor}}>
          <Link to='/about' className='navbar-link navAbout' onClick={refresh}>ABOUT</Link>
          <Link to='/products' className='navbar-link navProducts' onClick={refresh}>PRODUCTS</Link>
          <Link to='/contact' className='navbar-link navContact' onClick={refresh}>CONTACT</Link>
          <Link to='/login' className='navbar-link navLogin' onClick={refresh}>LOGIN</Link>
          {/* <Button>Sign Up</Button> */}
          <a href='#' className='navbar-social'>
            <i class="fa-solid fa-hashtag"></i>
          </a>
        </ul>  

        <button className='navbar-button' onClick={handleClick}>
          <i className={!click ? "fa-solid fa-crop-simple" : "fa-solid fa-crop"}></i>
        </button>      
    </div>
  )
  
  
}

export default Navbar
