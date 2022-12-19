import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Free,FREEONE} from './login';
import { Route, Link, Routes } from 'react-router-dom'


function App() {
  return (
    <div>
    < Routes >
         <Route path="/" component={Free} />
         <Route path="/aboutus" component={ FREEONE } />
   </ Routes >
    </div>
  );
}



export default App;