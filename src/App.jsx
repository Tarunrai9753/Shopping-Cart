import React, { useState } from "react";
import data from "./COMP/Data/data";
import Products from "./COMP/Product/Product";
import Navb from "./COMP/Nav/nav";
import "./App.css";
import CartList from "./COMP/Carts/Cartlist.jsx";
import Signin from "./COMP/Signin/signin.jsx";
import SignUp from "./COMP/Signin/SignUp.jsx";
import Profile from "./COMP/Profle/Profile.jsx";
import ContactUs from "./COMP/Contactus/Contactus.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [Images, setImages] = useState(data);
  const [cart, setCart] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Router>
        <Navb cart={cart} />
        <Routes>
          <Route path="/" element={<Products cart={cart} setCart={setCart} Images={Images} />}></Route>
          <Route path="/cart" element={<CartList cart={cart} setCart={setCart} />}></Route>
          <Route path="/Signin" element={<Signin email={email} setEmail={setEmail} setPassword={setPassword} />}></Route>
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
