
import { Outlet, Link } from "react-router-dom";
import './Nav.css'

function Nav () {
    

    return (
        <>
        <div className='nav__logo-container'>
        <img src="src/assets/logo.png" alt="src/assets/logo.png" width="400"/>
        </div>
        <nav>
        <ul className="nav__link-list">
          <li className="nav__link-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav__link-item">
            <Link to="/addvolunteer">Add Volunteer</Link>
          </li>
          <li className="nav__link-item">
            <Link to="/volunteers">Available Volunteers</Link>
          </li>
        </ul>
        </nav>
      <Outlet />
        </>
    )
}

export default Nav