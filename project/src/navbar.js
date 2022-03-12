import React,{useEffect} from "react";
import './Events';
import './Home';
import {Link, NavLink,useNavigate} from "react-router-dom";
import './contact'
// import './Profile'
import './Login.js'
import './start'

import {db, auth} from "./firebase"



export default function Navbar(){
            return (
            <>
            <header id="header" className="fixed-top d-flex align-items-cente">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">

      <h1 className="logo me-auto me-lg-0"><a>DigiMail Events</a></h1>
      <a href="index.html" className="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" className="img-fluid"/></a>

      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li><Link className="nav-link scrollto " to="/home">Home</Link></li>
          <li><Link className="nav-link scrollto" to="/events">Events</Link></li>
          <li><Link className="nav-link scrollto" to="/contact">Contact</Link></li>
          
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

      <Link className="book-a-table-btn scrollto d-none d-lg-flex" to="/login">Sign out</Link>

    </div>
  </header>
  </>
            );
}
