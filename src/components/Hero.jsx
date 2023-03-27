import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Hero(props) {
  useEffect(()=>{
    AOS.init({duration: 1000})
  },[]);
  
  return (
    <div className={props.cName}>
        {props.yesImg &&
          <img src={props.heroImg} alt=""/>
        }
        <div className={props.textCName}>
          <h1 data-aos="fade-up">{props.title}</h1>
          <p data-aos="fade-up">
            {props.text}
          </p>
        </div>
        
    </div>
  )
}
export default Hero