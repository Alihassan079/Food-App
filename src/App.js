import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Signup from "./components/SignUp/SignUp";
import LoginForm from "./components/SignIn/SignIn";
import Section2 from "./pages/Home/Section2";
import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";
import Section1 from "./pages/Home/Section1";
import Section3 from "./pages/Home/Section3";
import Section4 from "./pages/Home/Section4";
import Section5 from "./pages/Home/Section5";
import Section6 from "./pages/Home/Section6";
import Section7 from "./pages/Home/Section7";


function App() {
  return (
   <Router>
 <Header/>
 <Section1/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path= "signup" element={<Signup/>} />
    <Route path= "login" element={<LoginForm/>  } />
    <Route path="about" element={<Section2 />} />
    <Route path="menu" element={<Section3 />} />
    <Route path="promotion" element={<Section4 />} />
    <Route path="shop" element={<Section5 />} />
    <Route path="blog" element={<Section6 />} />
    <Route path="contact" element={<Section7 />} />

    
   </Routes> 
   <Footer/>
   </Router>
  );
}

export default App;
