import { useState } from 'react'

import './App.css'
import './style/dashboard.css'
import Dashboard from './components/dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    
      <Dashboard/>
    
  )
}

export default App
