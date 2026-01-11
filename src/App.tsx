import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import './App.scss'
import DesignPage from './DesignPage'
import NewPage from './NewPage'

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Welcome to Bursary Application Portal</h1>
      <p>Apply for bursaries here.</p>
    </motion.div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="app">
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          Bursary Application Portal
        </motion.h1>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <br/>
          <br/>
          
          <p>
            Welcome to the BAP
          </p>
        </div>
         <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <DesignPage />
          <NewPage />
      </div>
    </Router>
  )
}

export default App