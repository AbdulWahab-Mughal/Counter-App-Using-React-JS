import React from "react";

const Heading = (props) => {
  return (
    <nav className="bg-warning d-flex justify-content-center align-center pt-2" style={{height:"10vh"}}>
      <h1>{props.title}</h1>
    </nav>
  );
};

export default Heading;
