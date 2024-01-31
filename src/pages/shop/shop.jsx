import React from 'react'
import {PRODUCTS} from '../../products';
import {Product} from './product';

export const Shop = () => {
  return (
    <div className="shop">
        <div className="shopTitle">
            <h1>Flipkart Shop</h1>
        </div>
        <div className="products">
            {PRODUCTS.map((pro)=>
                
             <Product data={pro}/>)}
        </div>
    </div>
  )
}
