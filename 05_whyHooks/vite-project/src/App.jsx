import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);
  let add=()=>{
    if(counter<20){

      counter=counter+1
      setCounter(counter)
    }
  }
  let remove=()=>{
    if(counter>0){
      counter=counter-1  
      setCounter(counter)
    }
  }
  return (
    <>
    <h1>chai aur code</h1>
    <h2>{counter}</h2>
    <button onClick={add} >click to add</button>
    <button onClick={remove} >click to remove</button>
      
    </>
  )
}

export default App
