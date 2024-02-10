import { BrowserRouter as Router, Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/control">Contol</Link></li>
                        <li><Link to="/surveillance">Surveillance</Link></li>
                        <li><Link to="/analysis">Analysis</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
                <Link to="/home" role="button" className='btn btn-ghost text-xl'>Daisy and Milo</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl">
                    <li><Link to="/control">Contol</Link></li>
                    <li><Link to="/surveillance">Surveillance</Link></li>
                    <li><Link to="/analysis">Analysis</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <img src="src\assets\images\logo.png" className='w-16' />
            </div>
        </div>
    )
}

export default Navbar