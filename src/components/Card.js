import React from "react";

const Card = (props) => {
  return (
    <>
      <div
        className="container"
        style={{
          borderRadius: "10px",
          backgroundColor: "white",
          marginBottom: "25px",
        }}
      >
        <p>{props.desc}</p>

        <div className="row">
          <div className="col-md-3">
            <img src="images/profile.png" alt="" style={{ width: "3vw" }} />
          </div>
          <div>
            <p>{props.name}</p>
            <p>{props.details}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
