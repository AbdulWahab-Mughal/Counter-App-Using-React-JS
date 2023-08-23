import React, { useState } from "react";
import "./CounterFun.css";

const CounterFun = () => {
  let [Count, setCount] = useState(0);
  const incrementHandler = () => {
    setCount(++Count);
  };
  const decrementHandler = () => {
    if (Count > 0) {
      setCount(--Count);
    }
  };
  const [toggle, setToggle] = useState(false);
  const onClickHandler = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="center">
        <input type="checkbox" onClick={onClickHandler} />
      </div>
      <div className="container New" id={`${toggle ? "Dark1" : "Light1"}`}>
        <h1 className="head">{Count}</h1>
        <div className="Btn">
          <button className="btn btn-primary" onClick={incrementHandler}>
            +
          </button>
          <button className="btn btn-warning " onClick={decrementHandler}>
            -
          </button>
        </div>
      </div>
    </>
  );
};

export default CounterFun;
