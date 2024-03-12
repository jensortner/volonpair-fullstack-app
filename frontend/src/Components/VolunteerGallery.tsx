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


    
    return (
        <div className="volunteer__gallery-container">
        {volunteers.map(volunteer => (
            <Volunteer id={volunteer.id} name={volunteer.name} age={volunteer.age} 
            occupation={volunteer.occupation} 
            email={volunteer.email} about={volunteer.about}/>
        ))}
        </div>
   
    )
}
export default VolunteerGallery