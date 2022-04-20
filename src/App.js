import { useReducer } from "react";

// function reducer(state, action) {
//   console.log(action.type)
//   switch (action.type) {
    
//     case 'increment':
//       return {count: state.count + state.step, step: state.step}
//     case 'decrement':
//       return {count: state.count - state.step, step: state.step}
//     case 'reset':
//       return {count: state.count = 0, step: state.step}
//     case 'updateStep':
//       return {count: state.count, step: action.step}
//       default:
//         return state
//   }

// }

function reducer (state, action) {
  if (action.type === "increment") {
    return {count: parseInt(state.count) + parseInt(state.step), step: state.step}
  } else if (action.type === "decrement") {
    return {count: state.count - state.step, step: state.step}
  } else if (action.type === "updateStep") {
    return {count: state.count, step: action.step}
  } else if (action.type === "reset") {
    return {count: state.count = 0, step: state.step}
  } else {
    throw new Error()
  }
}

function App() {

  const [state, dispatch] = useReducer(
    reducer,
    {count: 0, step: 1}
  )

  console.log('count', state.count)
  console.log('step', state.step)
  return (
    <div >
      <input 
       type="range" 
       min="1" 
       max="10"
       onChange={(e) => dispatch({type: 'updateStep', step: e.target.value})}/>

      <p>{state.count} </p>

      <button onClick={() => dispatch({type: 'increment'})}>Add </button>
      <button onClick={() => dispatch({type: 'decrement'})}>Subtract</button>
      <button onClick={() => dispatch({type: 'reset'})}>reset</button>
      <p>{state.step}</p>
    </div>
  );
}

export default App;
