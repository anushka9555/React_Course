//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/cards'

function App() {
  //const [count, setCount] = useState(0)
 let myObj = {
  name: "hitesh",
  age: 21
 }
  return (
    <>
      <h1 className='bg-green-400 text-black-p4 rounded-xl padding-10px mb-4'> Tailwind Tutorials </h1>
      <Card userName = "Anushka's Busy World" btnText = "Click me"/>
      <Card userName="My life" />

    </>
  )
}

export default App
