import { BrowserRouter as Router } from 'react-router-dom'
import ROSBridgeConnection from './components/RosBridgeConnection'
import AppRoutes from './components/AppRoutes'

function App() {

  return (
    <>
      <Router>
        <ROSBridgeConnection />
        <AppRoutes />
      </Router>
    </>
  )
}

export default App
