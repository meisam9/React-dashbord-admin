import React from 'react'
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import ProductList from './pages/productList/ProductList'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './app.css'
import NewUSer from './pages/newUser/NewUSer';
import Product from './pages/product/Product';
import Newproduct from './pages/newProduct/Newproduct';



function App() {
  return (

      <BrowserRouter> 
        <Topbar/>
        <div className='container'>
          <Sidebar/>
          <Routes>
            <Route  path='/' element={<Home/>}/>
            <Route  path='/users' element={<UserList/>}/>
            <Route  path='/user/:userId' element={<User/>}/>
            <Route  path='/newUser' element={<NewUSer/>}/>
            <Route  path='/products' element={<ProductList/>}/>
            <Route  path='/product/:productId' element={<Product/>}/>
            <Route  path='/newproduct' element={<Newproduct/>}/>
          </Routes>
        </div>
      </BrowserRouter>

  );
}

export default App;
