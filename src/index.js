import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';


ReactDOM.render(
  <React.StrictMode>
    
   <Router>
   <Navbar/>
     <Routes>
       <Route path="/" element={<HomePage/>}/>
       <Route path="/cards" element={<Cards/>}/>
     </Routes>
   </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
