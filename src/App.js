import React from 'react';
// import components

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import MainLayout from './components/main';

import Form from './components/form';

import SingleProduct from './components/SingleProduct';
import About from './components/About';
import ProductsP from './components/productspage';
import Aboupt from './components/Aboutp';

const App = () => {
  return (
    <div className='h-full bg-pattern bg-repeat max-w-[1800px] overflow-hidden'>
  <BrowserRouter>
				<Routes>
					<Route path='/' element={<MainLayout/>}>
						<Route index element={<Home/>} />
            <Route path='about' element={<Aboupt/>} />
            <Route path='productsP' element={<ProductsP/>} />
          <Route path='Form' element={<Form/>}></Route>
          <Route path='products/:productId' element={<SingleProduct/>} />

					</Route>
				</Routes>
			</BrowserRouter>
    </div>
  );
};

export default App;
