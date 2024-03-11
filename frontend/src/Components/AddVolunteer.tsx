
import { useEffect, useState } from 'react';
import './AddVolunteer.css'


function AddVolunteer() {
    const [showErrorMsg, setShowErrorMsg] = useState<boolean>();
    const [showSuccessMsg, setShowSuccessMsg] = useState<boolean>();
    const [name, setName ] = useState ('')
    const [age, setAge ] = useState (0)
    const [occupation, setOccupation ] = useState ('')
    const [email, setEmail ] = useState ('')
    const [about, setAbout ] = useState ('')

   async function handleSubmit(event: any) {
        event.preventDefault();


      await fetch('http://localhost:3000/api/volunteer', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            age,
            occupation,
            email,
            about}),
      })
        .then((data) => data.json())
        .then(data => setShowSuccessMsg(true))
        .catch(e => setShowErrorMsg(true))

      setName('')
      setAge(0)
      setEmail('')
      setOccupation('')
      setAbout('')  
    }
    useEffect(() =>{
        
        setTimeout(() => {
            setShowSuccessMsg(false)
          }, 3000);

    },[showSuccessMsg])

    useEffect(() =>{
        
        setTimeout(() => {
            setShowErrorMsg(false)
          }, 3000); 
          
    },[showErrorMsg])


    return (

    <div className="addvolunteer__form-container">
    <form className="addvolunteer__form" onSubmit={handleSubmit}>

      <input 
        type="text" 
        value={name}
        placeholder="Full name"
        className="input input-bordered w-full max-w-xs" 
        onChange={(e) => setName(e.target.value)}
         
      />
        <input 
          type="number" 
          value={age}
          placeholder="Age"
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => setAge(e.target.valueAsNumber)} 
        />

        <input 
          type="text" 
          value={email} 
            placeholder="Email"
            className="input input-bordered w-full max-w-xs" 
            onChange={(e) => setEmail(e.target.value)} 
        />

        <input 
          type="text" 
          value={occupation}
            placeholder="occupation"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setOccupation(e.target.value)}  

        />

        <input 
          type="text" 
          value={about}
          placeholder="Tell us about yourself"
          className="input input-bordered input-lg w-full max-w-xs"
          onChange={(e) => setAbout(e.target.value)}  
        />
        <div className='addvolunteer__form-button'>
        <input  className="btn btn-wide" type="submit" />
        </div>
    </form>

        {showSuccessMsg && <div className='addvolunteer__form-messsage'><div role="alert" className="alert alert-success">
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" 
        fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" 
        strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>Your profile was sucessfully added!</span>
        </div></div>}
        
        {showErrorMsg && <div className='addvolunteer__form-messsage'><div role="alert" className="alert alert-error">
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" 
        fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" 
        strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>Error! Failed to add.</span>
        </div></div>}
    
    </div>
        )
}

export default AddVolunteer