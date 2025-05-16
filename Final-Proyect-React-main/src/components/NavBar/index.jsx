import { Link } from 'react-router';
import logo from '../../assets/img/log-e-commerce.svg'
import CartWidget from "./CartWidget";
import './NavBar.css'
import { useState } from 'react';

let NavBar = ()=>{
  const [name, setname] = useState("");
  return(   
      <header className="">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
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
             <Link className="nav-link" to="/products">Productos</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categoria
              </a>
              <ul className="dropdown-menu">
                <li><Link className="nav-link" to="category/android">Android</Link></li>
                <li><Link className="nav-link" to="category/apple">Apple</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
      </ul>
      
      <CartWidget/>
    </div>
  </div>
</nav>
      </header>
    )
}

export default NavBar

    