import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import Home from "./Containers/Home";
import "./App.css"
import Products from "./Containers/Products";
import Contact from "./Containers/Contact";
import Login from "./Containers/Login";
import Signup from "./Containers/Signup";
import ProductDetails from "./Containers/ProductDetails";
import SuccessPage from "./Containers/Success";
import { ShoppingCartProvider } from "./shoppingCartContext";
import Cart from "./Containers/Cart";
import Admin from "./Containers/Admin";

function App() {
  return (
    <ShoppingCartProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/productdetails/:productId' element={<ProductDetails />} />
        <Route path='/success' element={<SuccessPage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/admin' element={<Admin />} />

      </Routes>
    </BrowserRouter>

    </ShoppingCartProvider>
  );
}

export default App;
