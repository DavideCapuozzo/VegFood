import './App.css'
import Home from './page/Home'
import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


const App: React.FC = () => {

  return (
    <>
      <ToastContainer></ToastContainer>
      <Home></Home>

    </>
  )
}

export default App
