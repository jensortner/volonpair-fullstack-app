import { useEffect, useState } from "react"
import Volunteer from "./Volunteer"

type VolunteerToBeAdded = {
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


    
    return (<>
   
    {volunteers.map(volunteer => (
        <Volunteer name={volunteer.name} age={volunteer.age} 
        occupation={volunteer.occupation} 
        email={volunteer.email} about={volunteer.about}/>
    ))}</>
    )
}
export default VolunteerGallery