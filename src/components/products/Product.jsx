import React, {useState, useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './products.css'

function Product(prop) {
//   const [isHover, setHover] = useState(false);
//   const handleMouseOver = () => {
//     setHover(true);
//   }
//   const handleMouseOut = () => {
//     setHover(false);
//   }

  useEffect(()=>{
    AOS.init({duration: 2000});
  }, []);

  return (
    <div>
        {prop.type && 
            <div className="products-content">
                <img src={prop.imgurl} alt=""/>
        
                <div className="products-content-description">
                    <h2 
                        // onMouseOver={handleMouseOver}
                        // onMouseOut={handleMouseOut}
                    >
                        Product {prop.productNum}
                    </h2>
                    <p>Description for {prop.productNum}</p>
                    
                </div>
            </div>
        }

        {!prop.type &&
            <div className="products-content">        
                <div className="products-content-description">
                    <h2 
                        // onMouseOver={handleMouseOver}
                        // onMouseOut={handleMouseOut}
                    >
                        Product {prop.productNum}
                    </h2>
                    <p>Description for {prop.productNum}</p>
                </div>
                <img src={prop.imgurl} alt="" />
            </div>
        }
      </div>
    
  )
}

export default Product