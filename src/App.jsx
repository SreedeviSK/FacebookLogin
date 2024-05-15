import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import {createBrowserRouter,RouterProvider,createRoutesFromElements,Route} from "react-router-dom"
import './App.css'
//import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'
import LoginPage from './Pages/LoginPage'

function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='/'element={<LoginPage/>}>
        <Route path=' ' element={<LoginPage/>}/>
        <Route path='signuppage' element={<SignupPage/>}/>
      </Route>
      </>
    )
  )
  return (
    <>
      <LoginPage/>
    </>
  )
}

export default App
