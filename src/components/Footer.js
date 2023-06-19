import React from "react";
// import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className="footer">
      

      <div className="container m-5">
        <div className="row ">
          <h4 className="col-md-3  ">CODAL</h4>
          <div className="col-md-9">
            <h5>Let's craft brilliant together!</h5>
            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your email address"
                  style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" }}
                />
              </div>
              <div className="col-md-6">
                <button className="btn btn-primary"  >Get in Touch</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2  " style={{marginTop:"9px"}}>
            <h5 style={{ borderBottom: "1px solid black" }}>Contact</h5>
            <div>
              Telephone: +91 928282828
              
            </div>
            <div>Email: hello.codal@gmail.com</div>
          </div>
        </div>


        <div className="row "style={{ marginTop: "100px",marginBottom:"30px" }}>
          <div className="col-md-3" >
          2023 Codal. All rights reserved
          </div>
          <div className="col-md-6 " >
          Terms and conditions
          </div>
          <div className="col-md-3  ">
          <img src="images/fb.png" alt="" className="m-2" style={{width:'1vw'}} />
          <img src="images/twitter.png" alt="" className="m-2" style={{width:"2vw"}}/>
          <img src="images/insta.png" alt="" className="m-2" style={{width:"2vw"}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
