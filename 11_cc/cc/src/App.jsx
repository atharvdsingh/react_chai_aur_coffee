import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { InputBox } from './component'
import useCrInfo from './hooks/useCrInfo'
import './App.css'

export default function App() {
  const [amout,setAmount]=useState(0)
  const [from,setFrom]=useState('usd')
  const [to,setTo]=useState('inr')
  const [convertedAmount,setConvertedAmount]=useState(0)
  const crInfo=useCrInfo(from)
  const option =Object.keys(crInfo)
  const swap=()=>{
    setTo(from)
    setFrom(to)
    setConvertedAmount(amout)
    setAmount(convertedAmount)
  }
  const convert=()=>{
    setConvertedAmount(amout*crInfo[to])

  }  
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/31167771/pexels-photo-31167771/free-photo-of-silhouetted-figure-holding-sun-at-tropical-beach-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert 
                    </button>
                </form>
            </div>
        </div>
    </div>
)

