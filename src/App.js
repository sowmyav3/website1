
import './App.css';
import { Footer } from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Product from './pages/Product';
import ShopCategory from './pages/ShopCategory';
import Shops from './pages/Shops';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shops/>}/>
        <Route path="/mens" element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path="/womens" element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/login" element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
