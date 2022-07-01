import { useReducer } from "react";

type counterState = {
  counter: number;
};

const initalState: counterState = {
  counter: 100,
};

type ACTIONTYPES =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number };

const counterReducer = (state: counterState, action: ACTIONTYPES) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + action.payload,
      };

    case "decrement":
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    default:
      throw new Error("Bad action");
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(counterReducer, initalState);

  return (
    <div>
      Counter: {state.counter}
      <div>
        <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
          Increment by 5
        </button>
        <button onClick={() => dispatch({ type: "decrement", payload: 5 })}>
          Decrement by 5
        </button>
      </div>
    </div>
  );
};

export default UseReducer;
