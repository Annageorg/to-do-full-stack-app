import "./Counter.css";
import { Component } from "react";
// import CounterButtonClassComponent from "./CounterButtonClassComponent";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <>
        <CounterButton byValue={1} incrementMethod={this.increment}/>
        <CounterButton byValue={5} />
        <CounterButton byValue={10} />
      </>
    );
  }

  increment = () => {

    console.log("increment from parent")
    // this.setState = {
    //   counter: this.state.counter //+ this.props.byValue,
    // };
  };
}

class CounterButton extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    }
  }

  render() {
    return(
      <div className="counter">
        <button
          className="plusButton"
          id="plusOne"
          onClick={this.increment}
        >
          +{this.props.byValue}
        </button>
        <button
          className="plusButton"
          id="plusOne"
          onClick={this.increment}
        >
          -{this.props.byValue}
        </button>

        <h3 className="result">Total: {this.state.total}</h3>
        <h3 className="result">Total increments: {this.state.increments}</h3>
        <h3 className="result">Total decrements: {this.state.decrements}</h3>
        </div>
    )
  }
}

export default Counter;
