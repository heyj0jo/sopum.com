import React, {useState, useEffect, useRef} from 'react'
import './footer.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Footer() {
  const inputRef = useRef(null);

  useEffect(()=>{
    AOS.init({duration: 1000})
  }, []);

  const onSubmit = () => {
    console.log(inputRef.current.value);
    inputRef.current.value = "";
  }
  
  return (
    <div className='footer'>
        <div className='footer-content' data-aos="fade-up">
            <h1>Want to hear about our latest update?!</h1>
            <h3>Write down your email!</h3>
            <input type={'email'} placeholder="email" ref={inputRef}/>
            <input type="submit" value="Subscribe" className='button' onClick={onSubmit}/>
        </div>

        <p className='copy'>&copy;2023 by Sopum</p>
    </div>
  )
}

export default Footer