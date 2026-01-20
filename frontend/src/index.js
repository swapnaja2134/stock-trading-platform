import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import "./index.css";


import HomePage from './landing_page/home/Homepage';
import Navbar from './landing_page/Navbar';
import SignUp from "./landing_page/signup/Singup";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProjectPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import Support from "./landing_page/support/Support";
import Footer from './landing_page/Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
  <Route path="/" element={< HomePage/>}/>
  <Route path="/signup" element={<SignUp/>}/>
  <Route path="/about" element={<AboutPage />}/>
  <Route path="/products" element={<ProductPage />}/>
  <Route path="/pricing" element={<PricingPage />}/>
  <Route path="/support" element={<Support />}/>
    </Routes>
       <Footer/>
  </BrowserRouter>
);


