import React from 'react';

import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import  Navbar  from './Components/Navbar/Navbar';
import { Contact } from './Components/Contact/Contact';
import { Cart } from './Components/Cart/Cart';
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { Checkout } from './Components/Checkout/Checkout'; 
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer";

import { CartProvider } from './Context/CartContext';

//import { loadDB } from './Firebase/Firebase';
//import { getProduct, getProducts } from './Firebase/Firebase';

function App() {

  //loadDB()

  //getProducts()

  return (
    <>

      <CartProvider>

        <BrowserRouter>

            <Navbar/>

            <Routes>
              
              <Route path='/' element={<ItemListContainer/>}/>     
              <Route path='/item/:id' element={<ItemDetailContainer/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
              <Route path='/contact' element={<Contact/>}/>  

            </Routes>

            <ToastContainer/>
          
        </BrowserRouter>

      </CartProvider>
           
    </>
  )
}

export default App;
