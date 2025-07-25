import React , { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const [login,setLogin]=useState("")
    const [password,setPassword]=useState("")
    const {setuser}=useContext(UserContext)

    const handleSubmit=(e)=>{
        e.preventDefault()
        setuser({login,password})
    }
    return (
        <>

        <h1>Login</h1>

        <input value={login} 

        onChange={(e)=> setLogin(e.target.value)}
        
        type="text" placeholder='enter id' />


        <input type="text" 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}        placeholder='password' />

        <button onClick={handleSubmit} >submit</button>
        </>
    )
}

export default Login
