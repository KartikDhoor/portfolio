import { useState } from 'react'

import './App.css'
import Home from './component/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}>
    </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
