
import { Outlet, Link } from "react-router-dom";
import './Nav.css'

function Nav () {
    

    return (
        <>
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-box">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" 
        fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" 
        strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to="/addvolunteer">Add Volunteer</Link></li>
        <li><Link to="/volunteers">Available Volunteers</Link></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center text-xl">VolunPair</div>
  <div className="navbar-end">
  <Link to="/" className="menu menu-horizontal rounded-box">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1
         1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
  </Link>
  </div>
  </div>
      <Outlet /> 
        </>

    )
}

export default Nav