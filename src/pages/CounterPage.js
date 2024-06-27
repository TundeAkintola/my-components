import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

//USE CONSTANT TYPE👇 TO AVOID TYPOS👇
const INCREMENT_COUNT = "increment";
const SET_VALUE_TO_ADD = "set_value_to_add";
const DECREMENT_COUNT = "decrement";
const ADD_VALUE_TO_COUNT = "add_value_to_count";

//REDUCER FUNCTION USING SWITCH STAEMENT👇
const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };

    case ADD_VALUE_TO_COUNT:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        ValueToAdd: 0,
      };
    case SET_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload,
      };

    default:
      return state;
  }
};

function CounterPage({ initialCount }) {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);

  //in useReducer👇 we store all our state into single object instead of variables
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });
  console.log(state);
  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT,
    });
  };

  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };

  //TO FORM ELEMENT👇
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_VALUE_TO_COUNT,
    });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg bg-gray-200 inline p-1 m-2">
        {" "}
        Count is {state.count}
      </h1>
      <div className="flex flex-row">
        <Button className="m-2" danger onClick={decrement}>
          Decrement
        </Button>
        <Button className="m-2" primary onClick={increment}>
          Increment
        </Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label className="m-2">Add a lot</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button className="m-2" success rounded>
          Add it
        </Button>
      </form>
    </Panel>
  );
}
export default CounterPage;
