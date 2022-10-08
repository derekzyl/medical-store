import logo from './logo.svg';
import './App.css';
import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import MainComponents from './components/main-components';

class App extends React.Component{
  render(){
    return(
      <div>

      <Routes>

        <Route exact path="/"  element= {<Login/>}/>
        <Route exact path="/home"  element= {<MainComponents/>}/>
        

      </Routes>
    
      </div>
    )
  }
}



export default App;
