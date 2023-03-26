import React, {Component} from 'react'
import './navbar.css'
import { Link, NavLink } from 'react-router-dom'
import {useRef} from 'react'
import {Button} from '../button/Button.jsx'

class Navbar extends Component {
  state = {clicked: false};

  handleClick = () => {
    this.setState({clicked: !this.state.clicked});
  }

  refresh = () => {
    this.setState({clicked: false});
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div className='navbar-container'>
          <div className='navbar-logo'>
            <Link to='/' className='navbar-logo-title' onClick={this.refresh}>
              <i class="fa-solid fa-brush"></i> SoPum
            </Link>
          </div>

          <ul className={this.state.clicked ? 'navbar-links active' : 'navbar-links'}>
            <Link to='/about' className='navbar-link' onClick={this.refresh}>ABOUT</Link>
            <Link to='/products' className='navbar-link' onClick={this.refresh}>PRODUCTS</Link>
            <Link to='/contact' className='navbar-link' onClick={this.refresh}>CONTACT</Link>
            <Link to='/signup' className='navbar-link' onClick={this.refresh}>SIGN UP</Link>
            {/* <Button>Sign Up</Button> */}
            <a href='#' className='navbar-social'>
              <i class="fa-solid fa-hashtag"></i>
            </a>
          </ul>  

          <button className='navbar-button' onClick={this.handleClick}>
            <i className={!this.state.clicked ? "fa-solid fa-crop-simple" : "fa-solid fa-crop"}></i>
          </button>      
      </div>
    )
  }
  
}

export default Navbar
