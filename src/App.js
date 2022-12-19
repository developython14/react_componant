import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Free,FREEONE} from './login';
import { Route, Link, Routes } from 'react-router-dom'


function App() {
  return (
    < Routes >
         <Route path="/" element={<Free/>} />
         <Route path="/aboutus" element={<FREEONE/>} />
   </ Routes >
  );
}



export default App;