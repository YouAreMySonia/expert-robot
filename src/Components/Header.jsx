import React from 'react'
import {Link} from "react-router-dom"
export default function Header() {
  return (
    <div >
      <style jsx>{`
        .navbar-expand-lg {
          background-image: linear-gradient(to left, #ffc8c8, #ff5858);
          z-index: 5;
          color: white;
        }
      `}</style>
      <nav class="navbar navbar-expand-lg navbar-light " >
  <div class="container-fluid">
    <img src="https://img1.pnghut.com/15/22/4/05MKk3WscW/bag-yellow-istock-shopping-luggage-and-bags.jpg" height={"50px"}></img>
    <a class="navbar-brand"><b>SHOPPEE</b></a>
    <button
      data-mdb-collapse-init
      class="navbar-toggler"
      type="button"
      data-mdb-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link path to="/" class="nav-link"><b>Home</b></Link>
        <Link path to="/cat" class="nav-link"><b>Category</b></Link>
        <Link path to="/prod" class="nav-link"><b>Products</b></Link>
        <a class="nav-link"><b>About</b></a>
        <a class="nav-link"><b>Contact</b></a>
        <Link path to="/reg"class="nav-link"><b>Registration</b></Link>
        <Link path to="/login"class="nav-link"><b>Login</b></Link>
        <Link path to="/logo"class="nav-link"><b>Logout</b></Link>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
