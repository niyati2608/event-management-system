import React from "react";
import {Link, NavLink} from "react-router-dom";
import Footer from "./Footer";
// import "./Login";
import Navbar from "./navbar";
// import'./Signup'


export default function Home(){
            return (
            <>
            <Navbar/>
            <section id="hero" className="d-flex align-items-center">
    <div className="container position-relative text-center text-lg-start">
      <div className="row">
        <div className="col-lg-8">
          <h1>Welcome to <span>DigiMail</span></h1>
          <h2>Lets break the routine!</h2>

        </div>
        

      </div>
    </div>
  </section>

  <main id="main">
   
    <Footer/>
  </main>
            </>
        );
}