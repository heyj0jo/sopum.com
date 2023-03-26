import React, {useState, useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './products.css'

function Product(prop) {
  const [isHover, setHover] = useState(false);
  const handleMouseOver = () => {
    setHover(true);
  }
  const handleMouseOut = () => {
    setHover(false);
  }

  useEffect(()=>{
    AOS.init({duration: 1500});
  }, []);

  return (
    <div>
        {prop.type && 
            <div className="products-content">
                <img src={prop.imgurl} alt="" data-aos="fade-up"/>
        
                <div className="products-content-description">
                    <h2 
                        data-aos="fade-up" 
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                    >
                        Product {prop.productNum}
                    </h2>
                    {isHover && 
                        <p className='hidden-text'>Description for {prop.productNum}</p>
                    }
                </div>
            </div>
        }

        {!prop.type &&
            <div className="products-content">        
                <div className="products-content-description">
                    <h2 
                        data-aos="fade-up" 
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                    >
                        Product {prop.productNum}
                    </h2>
                    {isHover && 
                        <p className='hidden-text'>Description for {prop.productNum}</p>
                    }
                </div>
                <img src={prop.imgurl} alt="" data-aos="fade-up"/>
            </div>
        }
      </div>
    
  )
}

export default Product