const ResetButton = (props) => {
  const reset = () => {
    props.reset();
  };

  return (
    <div className="counter">
      <button className="plusButton" id="reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default ResetButton;
