import { useEffect, useState } from "react"
import Volunteer from "./Volunteer"
import './VolunteerGallery.css'

type VolunteerToBeAdded = {
    id: number,
    name: string,
    age:  number,
    occupation: string,
    email: string,
    city: string,
    imgUrl: string
}

function VolunteerGallery() {

    const [volunteers, setVolunteers] = useState<VolunteerToBeAdded[]>([]);
    const [searchInput, setSearchInput] = useState<String>('');
    const [removeMgs,setRemoveMsg] = useState<string>('')

    useEffect(() => {
       
        fetch('http://localhost:3000/api/volunteer?input=' + searchInput, {
            method: 'get'
          })
            .then((response) => response.json())
            .then((data) => {
                setVolunteers(data.volunteerlist)
            })     

    },[searchInput])

    function searchOccupation(input: string) {
        setSearchInput(input)
    }

    function removeVolunteer(id: number){ 

        fetch('http://localhost:3000/api/volunteer?id=' + id, {
            method: 'delete'
        })
        .then((response) => response.json())
        .then((data) => {
            setVolunteers(data.volunteerlist)
        })
    }

    useEffect(() =>{
        
        setTimeout(() => {
            setRemoveMsg('')
          }, 2000);

    },[removeMgs])

    
    return (
        <>


        <div className="volunteer__gallery-searchbar">
        <label className="input input-bordered flex items-center gap-2">
        <input onChange={(e) => searchOccupation(e.target.value)} type="text" className="grow" 
        placeholder="Search by occupation or city" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
         className="w-4 h-4 opacity-70"><path fillRule="evenodd" 
         d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 
         7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
        </label>
         </div>
        
  
        <div className="volunteer__gallery-container">
        <div className="volunteer__gallery-msg-container">
        {removeMgs && <div className='addvolunteer__form-messsage'><div role="alert" className="alert alert-error">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" 
          fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" 
          strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>{removeMgs} deleted! </span>
          </div></div>}
          </div>
        {volunteers.map(volunteer => (
            <div key={volunteer.id} className="volunteer__gallery-container-card">
            <Volunteer id={volunteer.id} name={volunteer.name} age={volunteer.age} 
            occupation={volunteer.occupation} 
            email={volunteer.email} city={volunteer.city} imgUrl={volunteer.imgUrl} 
            setRemoveVolunteer={removeVolunteer} setRemoveMsg={setRemoveMsg}/>
            </div>
            ))}
        </div>
        </>
        
        
   
    )
}
export default VolunteerGallery