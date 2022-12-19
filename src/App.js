import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Free,FREEONE} from './login';
import { Route, Link, BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <div>
    < BrowserRouter >
      <div>
         <Route path="/" component={Free} />
         <Route path="/aboutus" component={ FREEONE } />
      </div>
   </ BrowserRouter >
    </div>
  );
}



export default App;