import React, { useState, useEffect } from 'react'
import ROSLIB from 'roslib'
import Navbar from '../components/Navbar'

function Home() {
    const [isConnected, setIsConnected] = useState(false)

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
        <div>
            {!isConnected && <p>Please connect to the robot's hotspot.</p>}
            <Navbar />
            {/* Rest of the Home page */}
        </div>
    )
}

export default Home
