import React, {useEffect} from 'react'
import './scrollAnim.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

function ScrollAnim() {
  useEffect(()=> {
     AOS.init({duration: 2000});
  }, []);
  return (
    <div className='top'>
        <h1>Hello</h1>
        <div className='space'></div>
        <div className='animation' data-aos="fade-up"></div>
        <div className='animation' data-aos="fade-down"></div>
        <div className='animation' data-aos="fade-left"></div>
        <div className='animation' data-aos="fade-right"></div>
    </div>
  )
}

export default ScrollAnim