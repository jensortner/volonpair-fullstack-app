
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {

  

  return (
    <div className='home__container'>
    <div className='home__container-img'>
        <figure className="px-10 pt-10">
            <img src="src/assets/Home.jpg" alt="src/assets/Home.jpg" className="rounded-" />
        </figure>
    </div>
    <div className='home__container-buttons'>
    <div className='home__container-buttons-nav'>
    <Link className="btn btn-wide" to="/addvolunteer">Add Volunteer</Link>
    </div>
    <div className='home__container-buttons-nav'>
    <Link className="btn btn-wide" to="/volunteers">Available Volunteers</Link>
    </div>
    </div>
    </div>
  ) 
}

export default Home
