import { useEffect, useState } from "react"
import Volunteer from "./Volunteer"
import './VolunteerGallery.css'

type VolunteerToBeAdded = {
    id: number,
    name: string,
    age:  number,
    occupation: string,
    email: string,
    about: string
}

function VolunteerGallery() {

    const [volunteers, setVolunteers] = useState<VolunteerToBeAdded[]>([]);

    useEffect(() => {

        fetch('http://localhost:3000/api/volunteer', {
            method: 'get'
          })
            .then((response) => response.json())
            .then((data) => {
                setVolunteers(data.volunteerlist)
                console.log(data)
            })     

    },[])

    function searchOccupation(searchInput: string) {
        console.log(searchInput)
    }

    
    return (
    
        <div className="volunteer__gallery">
        <div className="volunteer__gallery-searchbar">
        <label className="input input-bordered flex items-center gap-2">
        <input onChange={(e) => searchOccupation(e.target.value)}type="text" className="grow" placeholder="Search volunteers by occupation" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
         className="w-4 h-4 opacity-70"><path fillRule="evenodd" 
         d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 
         7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
        </label>
         </div>
        <div className="volunteer__gallery-container">
        {volunteers.map(volunteer => (
            <Volunteer id={volunteer.id} name={volunteer.name} age={volunteer.age} 
            occupation={volunteer.occupation} 
            email={volunteer.email} about={volunteer.about}/>
            ))}
        </div>
        </div>
        
   
    )
}
export default VolunteerGallery