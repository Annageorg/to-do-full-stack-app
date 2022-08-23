import React from "react";
import { useReducer } from "react";
import "./Counter.css";

const CounterCopy = () => {
  
  const initialState = {
    total: 0,
    increment: 0,
    decrement: 0,
  };
  
  const reducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case "INCREMENT1":
        return {
          ...state,
          total: state.total + 1,
          increment: state.increment + 1,
        };
      case "DECREMENT1":
        return {
          ...state,
          total: state.total - 1,
          decrement: state.decrement + 1,
        };
        case "INCREMENT5":
        return {
          ...state,
          total: state.total + 5,
          increment: state.increment + 1,
        };
      case "DECREMENT5":
        return {
          ...state,
          total: state.total - 5,
          decrement: state.decrement + 1,
        };
        case "INCREMENT10":
        return {
          ...state,
          total: state.total + 10,
          increment: state.increment + 1,
        };
      case "DECREMENT10":
        return {
          ...state,
          total: state.total - 10,
          decrement: state.decrement + 1,
        };
        case "RESET":
        return {
          ...state,
          total: 0,
          increment: 0,
          decrement: 0,
        };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div className="counter">
        <button
          className="plusButton"
          id="plusOne"
          onClick={() => dispatch({ type: "INCREMENT1" })}
        >
          +1
        </button>
        <button
          className="plusButton"
          id="plusOne"
          onClick={() => dispatch({ type: "DECREMENT1" })}
        >
          -1
        </button>
      </div>
      <div className="counter">
        <button
          className="plusButton"
          id="plusOne"
          onClick={() => dispatch({ type: "INCREMENT5" })}
        >
          +5
        </button>
        <button
          className="plusButton"
          id="plusOne"
          onClick={() => dispatch({ type: "DECREMENT5" })}
        >
          -5
        </button>
      </div>
      <div className="counter">
        <button
          className="plusButton"
          id="plusOne"
          onClick={() => dispatch({ type: "INCREMENT10" })}
        >
          +10
        </button>
        <button
          className="plusButton"
          id="plusOne"
          onClick={() => dispatch({ type: "DECREMENT10" })}
        >
          -10
        </button>
      </div>

      <h3 className="result">Total: {state.total}</h3>
      <h3 className="result">Total increments: {state.increment}</h3>
      <h3 className="result">Total decrements: {state.decrement}</h3>
      
      <div className="counter">
        <button className="plusButton" id="reset" onClick={() => dispatch({ type: "RESET" })}>
          Reset
        </button>
      </div>
    </>
  );
};

export default CounterCopy;
