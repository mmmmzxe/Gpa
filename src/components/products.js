
import React

 from "react";
import {fadeIn} from '../variants'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'
import '../slider.css';



import {PRODUCTS} from '../data.js'
import Header from "./Header.js";
const Products=()=> {
	
	

	

	
	return (
<>

		<div className="App Products m-16">
			
			<div className="flex justify-center items-center">
				<div>
					<h2 className="h2 text-orange-600">Products</h2>
				</div>
				
					
					
			
			</div>
			<main>
				
				<motion.div variants={fadeIn('up','tween' , 0.3 , 1.5)}
    initial='hidden'
    whileInView={'show'}  className="  justify-center items-center mx-0 p-10 container grid grid-cols gap-x-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-[20px]">
					{PRODUCTS.map((product) => {
						return(
<motion.div variants={fadeIn('down','tween' , 0.1 , 1)}
						initial='hidden'
						whileInView={'show'}
							className="product "
							key={product.id} >
							<img
								className="product-image"
								src={
									product.image
								}
							
							/>
							<h4 className="product-name text-orange-600 font-bold">
								{product.name}
							</h4>
							
							<h5 className="text-bold text-stone-500 ">
								{
									product.detils1
								}
							</h5>
							<div className="flex-row lg:flex-row flex justify-between">
							<span className="text-orange-600 px-5">
								{product.price} $
							</span>
							<Link to={`/products/${product.id}`}><button className="btn-sm">see</button></Link>
							</div>
							
							
						</motion.div>
						)
					}
						
					)}
				</motion.div>
			</main>
		</div></>
	);
}

export default Products;