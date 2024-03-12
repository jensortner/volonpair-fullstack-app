import { useState } from "react"
import Volunteer from "./Volunteer"

type volunteer = {
    name: string,
    age:  number,
    occupation: string,
    email: string,
    about: string
}

function VolunteerGallery() {

    const [volunteers, setVounteers] = useState<[volunteer]>();

    fetch('http://localhost:3000/api/volunteer', {
        method: 'GET'
      })
        .then((data) => data.json())
        .then((data) => setVounteers(data))   
        
    return (<>
    
    {volunteers?.map(volunteer => (
        <Volunteer name={volunteer.name} age={volunteer.age} 
        occupation={volunteer.occupation} 
        email={volunteer.email} about={volunteer.about}/>
    ))}</>
    )
}
export default VolunteerGallery