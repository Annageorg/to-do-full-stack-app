const CounterButtonClassComponent = (props) => {
  const increment = () => {
    props.incrementMethod(props.byValue);
  };

  const decrement = () => {
    props.decrementMethod(props.byValue);
  };

  return (
    <div className="counter">
      <button className="plusButton" id="plusOne" onClick={increment}>
        +{props.byValue}
      </button>
      <button className="plusButton" id="plusOne" onClick={decrement}>
        -{props.byValue}
      </button>
    </div>
  );
};

CounterButtonClassComponent.defaultProps = {
  byValue: 1,
};

export default CounterButtonClassComponent;
