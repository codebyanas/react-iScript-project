import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {

  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              <Link className="nav-link active" to="/about">About</Link>
            </div>
          </div>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.buttonText}</label>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired
}