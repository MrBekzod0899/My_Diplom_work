import React,{ useEffect, useState }  from 'react'
import Products from '../../Components/Product/Products'

export default function AllProducts() {
    let [products,setProducts]=useState([])
        useEffect(()=>{
            fetch(`http://localhost:5000/api/getproducts/`)
            .then(res=>res.json())
            .then(data=>{
                setProducts(data)
            })  
        },[])
    return (
    <div>
        <Products title={'Our Products'} products={products}/>
    </div>
  )
}
