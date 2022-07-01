import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/index.jsx'
import { Success } from './pages/Success/index.jsx'

function App() {
  //const [count, setCount] = useState(0)

  return( <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="success" element={<Success />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
