import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bestsellers from './Components/Bestsellers/Bestsellers';
import Fiction from './Components/Fiction/Fiction';
import Nonfiction from './Components/Nonfiction/Nonfiction';
import { Breadcrumbs } from '@mui/material';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* <Breadcrumbs aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/b/fiction" element={<Fiction />} />
          <Route path="/b/nonfiction" element={<Nonfiction />}/>
          <Route path="/b/bestsellers" element={<Bestsellers />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
