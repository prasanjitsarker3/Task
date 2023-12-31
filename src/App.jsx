import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=' max-w-6xl mx-auto'>
        <Header></Header>
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default App
