
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Product from './pages/Product';
import ShopCategory from './pages/ShopCategory';
import Shops from './pages/Shops';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shops/>}/>
        <Route path="/mens" element={<ShopCategory category="men"/>}/>
        <Route path="/womens" element={<ShopCategory category="women"/>}/>
        <Route path="/kids" element={<ShopCategory category="kid"/>}/>
        <Route path="product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/login" element={<LoginSignup/>}/>
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
