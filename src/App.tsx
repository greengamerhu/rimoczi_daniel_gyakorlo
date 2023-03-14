import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Container from "react-bootstrap/esm/Container";
import FooterCustom from './components/FooterCustom';
import 'react-router-dom'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Fooldal from './components/Fooldal';
import Navbar from './components/Navbar';
import Bemutatkozas from './components/Bemutatkozas';
import Kapcsolat from './components/kapcsolat';



 class App extends React.Component {
  render() {
    return <div>
       <Navbar/>
        <Routes>
          <Route path='/'  element={<Fooldal/>} />
          <Route path='bemutatkozas' element={<Bemutatkozas/>}  />
          <Route path='kapcsolat' element={<Kapcsolat/>}  />
        </Routes>
      
        <FooterCustom/>
    </div>
  }
 }

export default App;
