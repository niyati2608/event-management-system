import './App.css'; 
import Signin from './Home';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import './assets/css/style.css';
import './assets/vendor/animate.css/animate.min.css'
import "./assets/vendor/aos/aos.css"
import "./assets/vendor/bootstrap/css/bootstrap.min.css"
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "./assets/vendor/boxicons/css/boxicons.min.css"
import "./assets/vendor/glightbox/css/glightbox.min.css"
import "./assets/vendor/swiper/swiper-bundle.min.css"
import Navbar from './navbar';
import HomePage from './Home';
import Contact from './contact';
import Footer from './Footer';
import Login from './Login';
import Signup from './Signup';
import Events from './Events';
import Registration from './registration';
import Admin from './admin';
import Addevent from './addevent';
import UpdateeventForm from './updateeventForm';
import Updateevent from './updateevent';
import Deleteevent from './deleteevent';
import ForgotPassword from './ForgotPassword';
import Start from './start';
import Viewdetails from './viewdetails';



function App() {
  return (
    
    <>
    
    <Routes>
    <Route path="/" element={<Start/>} />
    <Route path="/home" element={<HomePage />} />
    

    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/events" element={<Events/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/registration" element={<Registration/>}/>
    <Route path="/admin" element={<Admin/>}/>
    <Route path="/addevent" element={<Addevent/>}/>
    <Route path="/updateeventForm" element={<UpdateeventForm/>}/>
    <Route path="/updateevent" element={<Updateevent/>}/>
    <Route path="/deleteevent" element={<Deleteevent/>}/>
    <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
    <Route path="/viewdetails" element={<Viewdetails/>}/>
    
    </Routes>
    </>
  );
}

export default App;
