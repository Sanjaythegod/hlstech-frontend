import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import Home from "./Containers/Home";
import "./App.css"
import Products from "./Containers/Products";
import Contact from "./Containers/Contact";
import Login from "./Containers/Login";
import Signup from "./Containers/Signup";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
