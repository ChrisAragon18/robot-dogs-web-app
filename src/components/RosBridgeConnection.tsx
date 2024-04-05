import { useState, useEffect } from 'react'
import ROSLIB from 'roslib'

export default function ROSBridgeConnection() {
    const [isConnected, setIsConnected] = useState(false)

    // Function to check the connection status with the robot
    const checkConnection = async () => {
        try {
            //const ros = new ROSLIB.Ros({ url: 'ws://192.168.123.15:9090' })
            const ros = new ROSLIB.Ros({ url: 'ws://10.12.42.22:9090' })  // Daisy

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
        const intervalId = setInterval(checkConnection, 1000) // Check every 1 second

        // Clean up the interval on unmount
        return () => clearInterval(intervalId)
    }, [])

    return (
        <>
            <div>
                {!isConnected && <p>Please connect to the robot's hotspot.</p>}
            </div>
        </>
    )
}