import React from "react";
import { Landingpage } from "./Pages/Landingpage";
import { Route, Routes } from "react-router-dom";
import Jobpages from "./Pages/Jobpages";
import { Jobdetail } from "./Pages/Jobdetail";
import Header from "./Pages/Header";

const App = () => {

  return (
    <>
   
   <Routes>
          <Route exact path="/"element ={<Landingpage/>}/>

          <Route path ="/home" element ={<Header/>}>
            <Route path="" element = {<Jobpages/>}/>
            <Route path=":id" element = {<Jobdetail/>}/>

          </Route>
   </Routes>
     
    </>
  );
};

export default App;
