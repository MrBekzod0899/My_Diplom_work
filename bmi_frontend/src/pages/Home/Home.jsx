import React, { useState } from 'react';
import { useEffect } from 'react';
import Content from '../../Components/Content/Content';
import Products from '../../Components/Product/Products';
import Slider from '../../Components/Slider';
import './home.scss'

const Home = () => {

  let [products,setProducts]=useState([])

  useEffect(()=>{
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
     });
      fetch(`http://localhost:5000/api/getproducts/`)
      .then(res=>res.json())
      .then(data=>{
          setProducts(data)
      })  
  },[])
    return (
      <div className='home container-fluid'>
          <div className="row splider-react">
            <div className="col-lg-12 splider-react">
                <Slider/>
            </div>
          </div>
        <Content/>
        <Products title={'Our Products'} products={products}/>
      </div>
    );
}

export default Home;
