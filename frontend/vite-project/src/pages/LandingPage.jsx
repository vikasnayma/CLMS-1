import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import About from './About';
import Institutes from './Institutes';
import Header from '../components/Header';
import Home from './Home';

const LandingPage = () => {
  return (
    <>
    <Router>
      <Header/>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="Login" element={<Login />} />
        <Route path="Institutes" element={<Institutes />} />
        <Route path="About" element={<About />} />
        </Routes>
    </Router>
    </>
  )
}

export default LandingPage
