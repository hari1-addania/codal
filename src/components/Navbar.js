import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <a className="navbar-brand" href="#">CODAL</a>
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Employer</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Job seeker</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact Us</a>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar
