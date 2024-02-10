import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './pages/Hero'
import Home from './pages/Home'
import About from './pages/About'
import Analysis from './pages/Analysis'
import Control from './pages/Control'
import Surveillance from './pages/Surveillance'
import ROSLIB from 'roslib' // Import ROSLIB

function App() {
  const [isConnected, setIsConnected] = useState(false);

  // Function to check the connection status with the robot
  const checkConnection = async () => {
    try {
      const ros = new ROSLIB.Ros({ url: 'ws://robot-ip-address:port' })

      await new Promise((resolve, reject) => {
        ros.on('connection', resolve)
        ros.on('error', reject)
      })

      setIsConnected(true)
    } catch (error) {
      setIsConnected(false)
      console.error('Error connecting to ROS bridge:', error)
    }
  }

  // Check the connection status at regular intervals
  useEffect(() => {
    const intervalId = setInterval(checkConnection, 5000) // Check every 5 seconds

    // Clean up the interval on unmount
    return () => clearInterval(intervalId)
  }, [])

  return (
    <Router>
      {!isConnected && <p>Please connect to the robot's hotspot.</p>}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Home />} />
        <Route path="/control" element={<Control />} />
        <Route path="/surveillance" element={<Surveillance />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
