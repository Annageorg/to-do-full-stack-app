import React, { Component } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import "./Counter.css";

const Counter = () => {
  const [count, setCounter] = useState(0);

  return (
    <>
      <div className="counter">
        <button
          className="plusButton"
          id="plusOne"
          onClick={() => setCounter(count + 1)}
        >
          +1
        </button>
        <button
          className="plusButton"
          id="plusOne"
          onClick={() => setCounter(count - 1)}
        >
          -1
        </button>
      </div>
      <div className="counter">
        <button
          className="plusButton"
          id="plusOne"
          onClick={() => setCounter(count + 5)}
        >
          +5
        </button>
        <button
          className="plusButton"
          id="plusOne"
          onClick={() => setCounter(count - 5)}
        >
          -5
        </button>
      </div>
      <div className="counter">
        <button
          className="plusButton"
          id="plusOne"
          onClick={() => setCounter(count + 10)}
        >
          +10
        </button>
        <button
          className="plusButton"
          id="plusOne"
          onClick={() => setCounter(count - 10)}
        >
          -10
        </button>
      </div>
      <h3 className="result">{count}</h3>
      <div className="counter">
        <button
          className="plusButton"
          id="reset"
          onClick={() => setCounter(0)}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default Counter;
