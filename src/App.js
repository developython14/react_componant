import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Free,FREEONE} from './login';
import { Route, Link, Routes ,Switch ,Redirect  } from 'react-router-dom'


function App() {
  return (
    <div>
    < Switch >
         <Route path="/" component={Free} />
         <Route path="/aboutus" component={ FREEONE } />
         <Redirect to="/home" />
   </ Switch >
    </div>
  );
}



export default App;