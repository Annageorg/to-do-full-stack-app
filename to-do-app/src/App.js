// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Counter from './Modules/Learning/CounterUseStateHook';
// import CounterCopy from './Modules/Learning/CounterUseReducerHook';
// import CounterButtonWithProps from './Modules/Learning/CounterWithProps';
import Counter from './Modules/Learning/Counter';

function App() {
  return (
    <div className="App">
      {/* <h2>useState hook</h2>
      <Counter />
      <h2>useReducer hook</h2>
      <CounterCopy /> */}
      
      <h2>Components with Props</h2>
      <Counter />
    </div>
  );
}

export default App;