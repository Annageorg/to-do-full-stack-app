import "./Counter.css";
import { Component } from "react";
import CounterButtonClassComponent from "./CounterButtonClassComponent";
import ResetButton from "./ResetButton";

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      total: 0,
      totalIncrements: 0,
      totalDecrements: 0,
    };
  }

  render() {
    return (
      <>
        <CounterButtonClassComponent
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <CounterButtonClassComponent
          byValue={5}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <CounterButtonClassComponent
          byValue={10}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />

        <h3 className="result">Total: {this.state.total}</h3>
        <h3 className="result">
          Total increments: {this.state.totalIncrements}
        </h3>
        <h3 className="result">
          Total decrements: {this.state.totalDecrements}
        </h3>
        <ResetButton reset={this.reset} />
      </>
    );
  }

  increment = (byValue) => {
    this.setState((previousState) => {
      return {
        total: previousState.total + byValue,
        totalIncrements: previousState.totalIncrements + 1,
      };
    });
  };

  decrement = (byValue) => {
    this.setState({
      total: this.state.total - byValue,
      totalDecrements: this.state.totalDecrements + 1,
    });
  };

  reset = () => {
    this.setState({
      total: 0,
      totalIncrements: 0,
      totalDecrements: 0,
    });
  };
}

// class CounterButton extends Component {

//   render() {
//     return (
//       <div className="counter">
//         <button className="plusButton" id="plusOne" onClick={this.increment}>
//           +{this.props.byValue}
//         </button>
//         <button className="plusButton" id="plusOne" onClick={this.decrement}>
//           -{this.props.byValue}
//         </button>
//       </div>
//     );
//   }

//   increment = () => {
//     this.props.incrementMethod(this.props.byValue);
//   };

//   decrement = () => {
//     this.props.decrementMethod(this.props.byValue);
//   };
// }
// CounterButton.defaultProps = {
//   byValue: 1,
// };

export default Counter;
