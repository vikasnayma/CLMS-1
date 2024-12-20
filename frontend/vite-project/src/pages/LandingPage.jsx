import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import About from './About';
import Institutes from './Institutes';
import Header from '../components/Header';
import Home from './Home';
import Cookies from 'js-cookie';
import StudentHeader from '../Student/components/StudentHeader'
import StudentHome from '../Student/pages/StudentHome';

const LandingPage = () => {

  const token = Cookies.get("token");


  // will use contional statement in routing based on the token if there is any token exist then that loggd in users header routes will be shown otherwise the  normal routes of the project will be shown.so then i will not need the differenet landing pages for routing.


  return (
    <>
      <Router>
        { token ? <StudentHeader/> : <Header /> }
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Institutes" element={<Institutes />} />
          <Route path="/category/:name" element={<h1>Category Page</h1>} />
          <Route path="/wishlist" element={<h1>Wishlist Page</h1>} />
          <Route path="/profile/*" element={<h1>Profile Page</h1>} />
          <Route path="/logout" element={<h1>Logged Out</h1>} />
          <Route path='/StudentHome' element={<StudentHome />} />
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
