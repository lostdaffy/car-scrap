import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layout/Layout";
import Contact from "../pages/Contact";
import WhoWeAre from "../pages/WhoWeAre";
import HowItWorks from "../pages/HowItWorks";
import OurServices from "../pages/OurServices";

const MainRouting = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="about" element={<WhoWeAre />} />
          <Route path="our-services" element={<OurServices />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
};

export default MainRouting;
