import React, { useRef } from "react";
import { connect } from "react-redux";
import {
  incrementBy1,
  decrementBy1,
  incrementByX,
  decrementByX,
  set,
} from "./slices/counterSlice";

export const App = ({
  counter,
  increment,
  decrement,
  incrementBy,
  decrementBy,
  set,
}) => {
  const incRef = useRef();
  const decRef = useRef();
  const setRef = useRef();

  return (
    <div>
      <h1>Control the Counter</h1>
      <button
        className="main-btn"
        onClick={() => {
          increment();
        }}
      >
        Click Me To Increment By 1
      </button>
      <button
        className="main-btn"
        onClick={() => {
          decrement();
        }}
      >
        Click Me To Decrement By 1
      </button>
      <br />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const val = parseInt(incRef.current.value);
          incrementBy(val);
          incRef.current.value = null;
        }}
      >
        <input
          ref={incRef}
          type="number"
          name="inc"
          id="inc"
          placeholder="Increment By"
        />
        <button className="extra-btn" type="submit">
          Enter
        </button>
      </form>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const val = parseInt(decRef.current.value);
          decrementBy(val);
          decRef.current.value = null;
        }}
      >
        <input
          ref={decRef}
          type="number"
          name="inc"
          id="inc"
          placeholder="Decrement By"
        />
        <button className="extra-btn" type="submit">
          Enter
        </button>
      </form>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const val = parseInt(setRef.current.value);
          set(val);
          setRef.current.value = null;
        }}
      >
        <input
          ref={setRef}
          type="number"
          name="inc"
          id="inc"
          placeholder="Set to"
        />
        <button className="extra-btn" type="submit">
          Enter
        </button>
      </form>
      <button
        className="main-btn"
        onClick={() => {
          set(0);
        }}
      >
        Reset Back to 0
      </button>
      <h2>Counter: {counter}</h2>
    </div>
  );
};

const mapStateToProps = (state) => ({
  counter: state.counter,
});

const mapDispatchToProps = {
  increment: incrementBy1,
  decrement: decrementBy1,
  incrementBy: incrementByX,
  decrementBy: decrementByX,
  set,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
