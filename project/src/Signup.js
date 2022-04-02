import React, { useState } from "react";
import "./Signup.css";
import { Link, Navigate, NavLink,useNavigate } from "react-router-dom";
import "./Login.js";
import {db, auth} from "./firebase"
import validator from 'validator'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [fname, setfname] = useState("")
  const [lname, setlname] = useState("")
  const [eid, seteid] = useState("")
  const [mno, setmno] = useState("")
  const [dept, setdept] = useState("")
  // const [alert,setAlert]=useState(null);

  const navigate=useNavigate();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
     auth.createUserWithEmailAndPassword(email, password)
    .then(()=>{
    db.collection("User").add({
        email:email, 
        // password: password,
        fname: fname,
        lname: lname,
        eid:eid,
        mno: mno,
        dept: dept
      })
      
      .then((doc)=>{
        db.collection('User').doc(doc.id).update({id:doc.id})
      })
      .then(()=>{
        alert("Signed up sucessfully");
        navigate("/home")})

    })
  }


  return (
    <>
      <div className="bg">
        {/* <Navbar /> */}
        <form method="POST" onSubmit={handleSubmit}>
          <div className="container1">
            <h1 className="h1Style">Sign up</h1>
            <div className="horizontal rule">
              <label>
                <b style={{color:"#d9ba85"}}>First Name</b>
              </label>
              <input
                className="input1"
                type="text"
                placeholder="Enter First Name"                
                name="fname"
                id="fname"
                onChange={(e) => setfname(e.target.value)}
                required
              />

              <label>
                <b style={{color:"#d9ba85"}}>Last Name</b>
              </label>
              <input
                className="input1"
                type="text"
                placeholder="Enter Last Name"
                name="lname"
                id="lname"
                onChange={(e) => setlname(e.target.value)}
                required
              />

              <label>
                <b style={{color:"#d9ba85"}}>Email</b>
              </label>
              <input
                className="input1"
                type="email"
                placeholder="Enter Email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              
              <label>
                <b style={{color:"#d9ba85"}}>Employee Id</b>
              </label>
              <input
                className="input1"
                type="text"
                placeholder="Enter Employee Id"
                name="eid"
                id="eid"
                pattern="[0-9]{2}[A-Z]{5}[0-9]{3}"
                onChange={(e) => seteid(e.target.value)}
                required
              />

              <label>
                <b style={{color:"#d9ba85"}}>Department</b>
              </label>
              <select className='input1' id="dept" name="dept" onChange={(e) => setdept(e.target.value)} required>
            <option value="IT Department" >IT Department</option>
            <option value="none" disabled="true" selected="false" hidden="true">Select Department</option>  
            <option value="HR Department">HR Department</option>
            <option value="General Management">General Management</option>
            <option value="Marketing Department">Marketing Department</option>
            <option value="Financial Department">Financial Department</option>
            </select>
              
              <label>
                <b style={{color:"#d9ba85"}}>Mobile Number</b>
              </label>
              <input
                className="input1"
                type="tel"
                placeholder="Enter Mobile no. of 10 digits"
                name="mno"
                id="mno"
                pattern="[1-9]{1}[0-9]{9}"
                onChange={(e) => setmno(e.target.value)}
                required
              />

              <label>
                <b style={{color:"#d9ba85"}}>Password</b>
              </label>
              <input
                className="input1"
                type="password"
                placeholder="Enter Password"
                name="psw"
                id="psw"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" onClick='save(); this.disabled = true;'className="registerbtn">
              Submit
            </button>
            <div className="signin">
              <p>
                Already have an account? <Link to="/login">Sign in</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
      {/* <Footer /> */}
    </>
  );
  };

export default Signup;