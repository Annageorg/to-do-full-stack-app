import React from "react";
import { useReducer } from "react";
import "./Counter.css";
import PropTypes from 'prop-types';

const CounterButtonWithProps = (props) => {
  const initialState = {
    total: 0,
    increments: 0,
    decrements: 0,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {
          ...state,
          total: state.total + props.byValue,
          increments: state.increments + 1,
        };
      case "DECREMENT":
        return {
          ...state,
          total: state.total - props.byValue,
          decrements: state.decrements + 1,
        };
      default:
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
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          +{props.byValue}
        </button>
        <button
          className="plusButton"
          id="plusOne"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          -{props.byValue}
        </button>

        <h3 className="result">Total: {state.total}</h3>
        <h3 className="result">Total increments: {state.increments}</h3>
        <h3 className="result">Total decrements: {state.decrements}</h3>
      </div>
    </>
  );
};

CounterButtonWithProps.defaultProps = {
  byValue: 1
};

CounterButtonWithProps.propTypes = {
  byValue: PropTypes.number
};

export default CounterButtonWithProps;
