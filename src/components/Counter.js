import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
const Counter = () => {
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {};
const counter = useSelector(state => state.counter);
const increment = () => {
  dispatch({type : 'increment'});
}
const decrement = () => {
  dispatch({type : 'decrement'});
}
const increment5 = () => {
  dispatch({type : 'increase', number : 5})
}
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={increment5}>Increment By 5</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
