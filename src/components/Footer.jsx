import React, {useEffect} from 'react'
import './footer.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Footer() {
  useEffect(()=>{
    AOS.init({duration: 1000})
  }, []);
  return (
    <div className='footer'>
        <div className='footer-content' data-aos="fade-up">
            <h1>Want to hear about our latest update?!</h1>
            <h3>Write down your email!</h3>
            <input type={'email'} placeholder="email"/>    
        </div>
        <p className='copy'>&copy;2023 by Sopum</p>
    </div>
  )
}

export default Footer