import { Link, useParams } from 'react-router-dom'
import {PRODUCTS} from '../data.js'
import React from 'react';
import Header from './Header'
const SingleProduct = () => {


  const { productId } = useParams();


  // get product
  const singleProduct = PRODUCTS.find(product => product.id === parseInt(productId))
  // use == instead of === if useParams fails to get the id
  // or just check data type or use parseInt(id)

  // console.log(typeof(productId))

  const { id, name, price, image, description ,detils1 , detils2 , detils3 , detils4 , detils5 , detils6 , detils7 , detils8, detils9 , detils10} = singleProduct

  // console.log("product id ", productId)
  // console.log("product ", singleProduct)

  return (
    <main>
      
    <Header/>
      <div className="container content h-[1000px] p-10">
        <div className="row">
          <div className="col-lg-5">
            <img src={image} alt="" className="rowi" />
          </div>
          <div className="col-lg-7">
            <h2>{name}</h2>
            <p className="price"><strong>{price}$</strong></p>
            <p className='text-gray-500'> <br/>{detils1} <br></br>{detils2}<br></br>{detils3} <br></br>{detils4} <br></br>{detils5} <br></br>{detils6} <br></br>{detils7} <br></br>{detils8} <br></br>{detils9} <br></br>{detils10}  </p>

            <br />
            <Link to="/ProductsP" className="btn-sm">PRODUCTS</Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SingleProduct