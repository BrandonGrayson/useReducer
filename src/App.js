import { useReducer } from "react";

function reducer(state, action) {
  return state += action
}

function App() {
  const [state, dispatch] = useReducer(
    reducer,
    0
  )
  return (
    <div >
      <p>{state}</p>

      <button onClick={() => {dispatch(1)}}>Add 1</button>
      <button onClick={() => dispatch(-1)}>Subtract 1</button>
    </div>
  );
}

export default App;
