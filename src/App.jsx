import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/navbar'
import Body from './components/body'
import Menu from './pages/Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Menu/>
    </>
  )
}

export default App
