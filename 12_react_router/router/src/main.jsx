import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/home/home'
import About from './components/About/About'
import Contact from './Contact/Contact'
import User from './components/User/User'
// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[{
//       path:'',
//       element:<Home/>
//     },
//   {
//     path:'about',
//     element:<About/>
//   },{
//     path:'contact',
//     element:<Contact/>
//   },]
//   },
// ])

// layout is father 
// about contact and User.id is childred of layout
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >

      <Route path='' element={<Home/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='contact' element={<Contact/>}></Route>
      <Route path='user/:id' element={<User/>}></Route>
      
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)