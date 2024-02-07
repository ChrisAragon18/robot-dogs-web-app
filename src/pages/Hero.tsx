import { BrowserRouter as Router, Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src="src\assets\images\logo.png" className="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 className="text-5xl font-bold">Daisy and Milo</h1>
          <p className="py-6">info</p>
          <Link to="/home" role="button" className="btn btn-accent text-black">START</Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
