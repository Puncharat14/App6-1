import React from 'react'
import { BrowserRouter, NavLink,Routes,Route } from 'react-router-dom'
import Home from './home'
import Product from './product'
import Member from './member'
import { Navbar } from './footer'
import { Header } from './footer'

export default function NavlinkRoute() {
  return (
    <div>
    <BrowserRouter>

    <nav className="navbar navbar-expand-sm navbar-dark bg-info">
  <div className="container-fluid">
    <a className="navbar-brand" href="javascript:void(0)">Kitty Cats FOOD!</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
        <NavLink to="/" className="nav-link" aria-current="page" href="#">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/Member" className="nav-link" href="#">Member</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/Product" className="nav-link" href="#">Product</NavLink>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="text" placeholder="Search For Cats" />
        <button className="btn btn-primary" type="button">Search</button>
      </form>
    </div>
  </div>
</nav>



  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/Product' element={<Product />}/>
    <Route path='/Member' element={<Member />}/>
    <Route path='/Navbar' element={<Navbar />}/>
    <Route path='/Header' element={<Header />}/>
  
  </Routes>
  </BrowserRouter>
  </div>
  )
}