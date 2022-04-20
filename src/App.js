import { useReducer } from "react";

function reducer(state, action) {
  switch (action) {
    case 'increment':
      return state += 1
    case 'decrement':
      return state -= 1
    case 'reset':
      return state = 0
      default:
        return state
  }

}

function App() {
  const [state, dispatch] = useReducer(
    reducer,
    0
  )
  return (
    <div >
      <input 
       type="range" 
       min="1" 
       max="10"
       onChange={(e) => console.log(e.target.value)}/>

      <p>{state}</p>

      <button onClick={() => {dispatch('increment')}}>Add 1</button>
      <button onClick={() => dispatch('decrement')}>Subtract 1</button>
      <button onClick={() => dispatch('reset')}>reset</button>
    </div>
  );
}

export default App;
