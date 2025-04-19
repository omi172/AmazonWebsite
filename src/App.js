import React from 'react';
import './App.css';
import Header from './Header.js'
import Home from './Home.js'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './Checkout.js';
import Login from './Login.js';
import YourOrders from './YourOrders.js';
import ToolBar from './ToolBar.js'
import Footer from './Footer.js';
import Mxplayer from './Mxplayer/Mxplayer.js';
function App() {
  return (
       <div className="App">
         <Router>
              <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/Mxplayer" element={<Mxplayer />}></Route>
                <Route path="/YourOrders" element={<YourOrders />}></Route>
                <Route path="/Checkout" element={<Checkout />}></Route>
                <Route path="/" element={
                <>
                  <Header />
                  <ToolBar />
                  <Home />
                  <Footer />
                </>
                }/>
              </Routes>
        </Router>  
      </div>
  );
}

export default App;
