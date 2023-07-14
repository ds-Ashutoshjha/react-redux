import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Food from "../Pages/Food";
import Contact from "../component/Contact";
import FoodDetail from "../Pages/FoodDetail";

const Router = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/food" element={<Food />} />
        <Route path ="/Contact" element={<Contact/>}/>
        <Route path="/FoodDetail" element={<FoodDetail/>}/>

      </Routes>
    </>
  );
};

export default Router;
