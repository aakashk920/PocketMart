import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import HomePage from './customer/Pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Product/Product';
import { BrowserRouter, Routes } from 'react-router-dom';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/CheckOut/Checkout';
import Order from './customer/components/Order/Order';
import OrderDetails from './customer/components/Order/OrderDetails';
import CustomerRouters from './Routes/CustomerRouters';
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/*' element = {<CustomerRouters/>}>

      </Route>
    </Routes>
     

      {/* <div> */}
      
        {/* <HomePage /> */}
        {/* <Product/> */}
        {/* <ProductDetails/> */}
        {/* <Cart/> */}
        {/* <Checkout/> */}
        {/* <Order/> */}
        {/* <OrderDetails/> */}
        {/* </div> */}
           
        </div>
  );
}

export default App;
