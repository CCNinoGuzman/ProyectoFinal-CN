import { Link } from 'react-router';
import logo from '../../assets/img/log-e-commerce.svg'
import CartWidget from "./CartWidget";
import './NavBar.css'
import { useState } from 'react';

let NavBar = ()=>{
  const [name, setname] = useState("");
  return(   
      <header className="p-2">
        <nav className="navbar navbar-expand-lg bg-body-tertiary rounded rounded-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center w-75">
            <li className="nav-item">
             <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="text" 
          onChange={(event)=>{
            setname(event.target.value)
          }} 
          placeholder="Search" aria-label="Search"/>
        <span>Name={name}</span>
      </form>
      <CartWidget/>
    </div>
  </div>
</nav>
      </header>
    )
}

export default NavBar