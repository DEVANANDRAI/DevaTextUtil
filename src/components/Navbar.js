import React from 'react'

export default function Navbar(props) {
  return (
     <>
     <nav className={`navbar navbar-expand-lg navbar-${props.mode.backgroundColor!="dark"?"dark":"dark"} text-${props.mode.color!="dark"?'white':'dark'}`} style={props.mode}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Welcome</a>
        </li>
         
        
      </ul>
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" onClick={props.changeMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label " htmlFor="flexSwitchCheckDefault">{props.mode.backgroundColor==="#454647"?"Enable Dark Mode":"Enable Light Mode"}</label>
</div>
    </div>
  </div>
</nav>
     </>
  )
}
