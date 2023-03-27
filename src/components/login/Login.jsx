import React, {useState, useEffect} from 'react'
import './signup.css'
import {Navbar, Bulletin} from '../'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function Login() {
  useEffect(()=>{
    AOS.init({duration: 1000})
  }, [])

  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const guanlijaid = "hahaha"
  const guanlijapw = "000000"

  const [approved, setApproved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent from losing state
    if(id == guanlijaid && password == guanlijapw) {
      setApproved(true);
    } else {
      alert("ID and/or Password Not Found")
    }
  }

  useEffect(()=>{

  })

  return (
    <div className='signup'>
      <Navbar
        bgcolor = "rgb(142, 27, 27)"
      />
      <form onSubmit={handleSubmit} data-aos="fade-up">
        <h1>Login</h1>
        <label>ID:
          <input type="text" name="id" id="id" value={id} onChange={e=>setId(e.target.value)} />
        </label>
        <label>Password:
          <input type="password" name='pw' id='pw' value={password} onChange={e=>setPassword(e.target.value)}/>
        </label>
        <input type="submit" value="Login" className='button'/>
      </form>

      {/* <div className='otherButtons'>
        <input className='button' value="Forgot password?"/>
      </div> */}
      {approved &&
        <div>
          <Link to='/bulletin' className='hidden'>Let's go</Link>
        </div>
      }
      <p className='copy specificCopy'>&copy;2023 by Sopum</p>
    </div>
  )
}

export default Login