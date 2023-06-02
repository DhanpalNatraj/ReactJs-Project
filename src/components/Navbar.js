import React from 'react'
import prototypes from 'prop-types'
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
      </ul>
      <div className={`form-check form-switch text-${props.mode ==='light'?'dark':'light'}`}>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
         <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Light/Dark Mode</label>
    </div>
    </div>
  </div>
</nav>
  );
}

Navbar.prototypes = {
    title:prototypes.string,
   aboutText:prototypes.string
}
