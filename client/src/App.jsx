import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./customer/page/Home";
import About from "./customer/page/About";
import Service from "./customer/page/Service";
import Contact from "./customer/page/Contact";
import Footer from "./component/Footer";
import Layout from "./component/Layout";
import Login from "./customer/page/Login";
import Registration from "./customer/page/Registration";

const App = () => {

  useEffect(()=>{
    AOS.init({
      duration: 1800,
      offset: 100,
    });
  })
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/service"
          element={
            <Layout>
              <Service />
              <Footer />
            </Layout>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Registration />} />
      </Routes>
    </>
  );
};

export default App;
