import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/Pages/HomePage/HomePage'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import Cart from '../customer/components/Cart/Cart'
import Checkout from '../customer/components/CheckOut/Checkout'
import Order from '../customer/components/Order/Order'
import OrderDetails from '../customer/components/Order/OrderDetails'
import Navigation from '../customer/components/navigation/Navigation';
import Footer from '../customer/components/Footer/Footer';
import Product from '../customer/components/Product/Product'
const CustomerRouters = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>

        <Route path='/LoginForm' element={<HomePage />}> </Route>
        <Route path='/register' element={<HomePage />}> </Route>
        <Route path='/' element={<HomePage />}> </Route>
        <Route path='/cart' element={<Cart />}> </Route>
        <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product />}> </Route>
        <Route path='/product/:productId' element={<ProductDetails />}> </Route>
        <Route path='/checkout' element={<Checkout />}> </Route>
        <Route path='/account/order' element={<Order />}> </Route>
        <Route path='/account/order/:orderID' element={<OrderDetails />}> </Route>

      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default CustomerRouters