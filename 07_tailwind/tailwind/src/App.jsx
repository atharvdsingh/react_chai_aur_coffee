import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card.jsx'

function App() {
  
  const [count, setCount] = useState(0)

   let a =['ram','syam,','shiv','shivank']

  return (
    <>
     <h1 className='text-red-500 mb-100 ' >my name is atharv </h1>
      <div className=' grid [grid-template-columns:repeat(auto-fit,minmax(150px,1fr))] gap-4 ' >

     <Card username="chai aur code" btn="chai" />
     <Card username="ram singh" btn ="ram " />
     <Card username="syam bharty" / >
     {
      a.map((key,n) => {
        return <Card  username={key} />
      })
     }
      
      </div>
    </>
  )
}

export default App
