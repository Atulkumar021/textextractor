import React from 'react'
import './Navbar.css'
import Imgs from '../../img/core-img/logo.jpg'
import Secondlogo from '../../img/core-img/sec logo.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Navbar = () => {
 
  return (
    <>
    <div id="mainNavigation">
      <nav role="navigation">
        <div class=" text-center border-bottom">
          <img src={Imgs} alt="logo" class="invert"/>
          <a href="https://play.google.com/store/apps/details?id=com.imagetotextextractor"><img src={Secondlogo} alt="logo" class="invert" style={{height:'32.2px',width:'40px',marginLeft:'2rem'}}/></a>
              <a href="https://play.google.com/store/apps/details?id=com.imagetotextextractor" target='blank'><p style={{color:'white', cursor:'pointer'}}>Download Text Extractor App</p></a>
        </div>
       
      </nav>
      <div class="navbar-expand-md">
        <div class="navbar-dark text-center my-2">
          <button class="navbar-toggler w-75" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span> <span class="align-middle">Menu</span>
          </button>
        </div>
        <div class="text-center mt-3 collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav mx-auto ">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Product</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Policy</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link " href="#">Company</a>
             
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar