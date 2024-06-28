import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import UseState from './Pages/UseState';
import UseEffect from './Pages/UseEffect';
import UseContext from './Pages/UseContext';//BrowserRouter: for the web
import UseRef from './Pages/UseRef';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>{/* Navbar will appear in every page   */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path = '/use-state' element = {<UseState/>}></Route>
          <Route path = '/use-effect' element = {<UseEffect/>}></Route>
          <Route path = '/use-context' element = {<UseContext/>}></Route>
          <Route path = '/use-ref' element = {<UseRef/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

