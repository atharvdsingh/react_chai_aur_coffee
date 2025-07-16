import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {  
  const [color,setcolor]=useState("green")
  console.log(color)
  return (
    <>
    <div className="w-full h-screen flex justify-center items-end"
    style={{backgroundColor:color
    }}
    >
      <div className=' w-[80vw] h-20 bg-black p-1 m-10 rounded-[10px] flex  justify-evenly items-center '  >
    <button onClick={()=>{setcolor("red")}} className=' rounded-[10px] w-20 h-10 bg-red-700 p-5 flex  justify-center items-center' style={{background:"red"}} >Red</button>
    <button onClick={()=>{setcolor("black")}} className=' rounded-[10px] w-20 h-10 bg-black p-5 flex  justify-center items-center' style={{background:"black", color:"white"}} >black</button>
    <button onClick={()=>{setcolor("green")}} className=' rounded-[10px] w-20 h-10 bg-green-700 p-5 flex  justify-center items-center' style={{background:"green"}} >green</button>
    <button onClick={()=>{setcolor("pink")}} className=' rounded-[10px] w-20 h-10 bg-pink-700 p-5 flex  justify-center items-center' style={{background:"pink"}} >pink</button>
    <button onClick={()=>{setcolor("grey")}} className=' rounded-[10px] w-20 h-10 bg-grey-700 p-5 flex  justify-center items-center' style={{background:"grey"}} >grey</button>
    <button onClick={()=>{setcolor("yellow")}} className=' rounded-[10px] w-20 h-10 bg-yellow-700 p-5 flex  justify-center items-center' style={{background:"yellow"}} >yellow</button>
    <button onClick={()=>{setcolor("red")}} className=' rounded-[10px] w-20 h-10 bg-red-700 p-5 flex  justify-center items-center' style={{background:"red"}} >Red</button>
      </div>
    </div>
    </>
  )
}

export default App
