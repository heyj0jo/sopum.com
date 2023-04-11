import React, {useEffect, useState} from 'react'
import {Hero, Footer, Product, Navbar} from '../../components'
import './products.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Products = () => {
  const bgcolor = "#e7b100"
  useEffect(()=>{
    AOS.init({duration:1000})
  }, []);
  
  const top = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className='products-page' style={{backgroundColor: bgcolor}}>
      <Navbar 
        bgcolor = {bgcolor}
      />
      <button className='toTop'onClick={top} >
        <i className='fa-sharp fa-solid fa-arrow-up'></i> 
      </button>  
      <Hero 
        cName = "products-hero"
        yesImg = {false}  // see the css file
        title = "Products"
        textCName = "products-text"
        text = "Check our bestsellers"
      />
      
      <Product
        imgurl = "https://www.creativeboom.com/uploads/articles/70/7075bd1c7f4c11229c9fb21970a591896d940e54_1620.jpg"
        productNum = "1"
        type = {true}
      />
      <Product
        imgurl = "https://www.creativeboom.com/uploads/articles/d8/d8ad53eb5b40da7ced4a44cc77529dbc0e6553ce_1620.jpg"
        productNum = "2"
        type = {false}
      />
      <Product
        imgurl = "https://www.creativeboom.com/uploads/articles/b9/b9a24ea3968dc9ed6308078ed01809e2640d17d9_1620.jpg"
        productNum = "3"
        type = {true}
      />

      <Footer/>
    </div>
  )
}

export default Products