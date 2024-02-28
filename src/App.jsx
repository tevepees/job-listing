import React from "react";
import { Landingpage } from "./Pages/Landingpage";
import { Route, RouterProvider, Routes, Router, useNavigate, Navigate, Outlet } from "react-router-dom";
import Jobpages from "./Pages/Jobpages";
import { Jobdetail } from "./Pages/Jobdetail";
import Header from "./Pages/Header";
import { useState,useEffect } from "react";
import PrivateRoute from "./components/PrivateRoute";



function App() {
const isLogin = localStorage.getItem('isLogin');
const [isAllowed, setIsAllowed] = useState(true);
const navigate = useNavigate('');

useEffect (() => {
  if (isLogin) {
    setIsAllowed(true);
} else {
  setIsAllowed(false);
}
const intervalId = setInterval(() =>{
  const newIsLogin = localStorage.getItem("isLogin");
  if (newIsLogin) {
    setIsAllowed(true);
  } else {
    setIsAllowed(false);
  }
}, 1000);
return () => clearInterval(intervalId);
}, [isLogin]);
  return (
    <>
   
   <Routes>
          <Route exact path="/"element ={<Landingpage />}/>

          <Route path ="/home" element ={<Header />}>
            <Route path="" element = {<PrivateRoute isAllowed={isAllowed}><Jobpages  /></PrivateRoute>}/>
            <Route path=":id" element = { <PrivateRoute isAllowed={isAllowed}> <Jobdetail  /></PrivateRoute>  }/>
            
          </Route>
          
   </Routes>
     
    </>
    
  );
  
};

export default App;
