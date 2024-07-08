import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
 //let counter = 25;
 const addValue = () => {
  counter+=1;
  console.log("Value added", counter);
  setCounter(counter+1)
 }
 const removeValue = () => {
  setCounter(counter-1)
 }
  return (
    <>
      
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}> Add Value {counter} </button>
      <br/>
      <button onClick={removeValue}> remove value {counter} </button>
    </>
  )
}

export default App
