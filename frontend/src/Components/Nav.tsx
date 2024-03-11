import Home from './Home'
import './Nav.css'

function Nav () {
    

  
    const routeChange = () =>{ 
     return(<Home/>)
    }
    return (
        <div className='nav__logo-container' onClick={() => routeChange}>
        <img src="src/assets/logo.png" alt="src/assets/logo.png" width="400"/>
        </div>
    )
}

export default Nav