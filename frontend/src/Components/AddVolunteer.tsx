
import './AddVolunteer.css'


function AddVolunteer() {

   async function handleSubmit(event: any) {
        event.preventDefault();


      await fetch('http://localhost:3000/api/volunteer', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({

            name: event.target.name.value,
            age: event.target.age.value,
            occupation: event.target.occupation.value,
            email: event.target.email.value,
            about: event.target.about.value,
        }),
      })
        .then((data) => data.json())
        .then(data => alert("Volunteer added!"))
        .catch(e => alert("Failed to add"))
    }



    return (
    <>
    <form className="addvolunteer__form" onSubmit={handleSubmit}>

      <input 
        type="text" 
        name="name"
        placeholder="Full name" 
         
      />
        <input 
          type="number" 
          name="age"
          placeholder="Age" 
        />

        <input 
          type="text" 
          name="email" 
            placeholder="Email"
        />


        <input 
          type="text" 
          name="occupation"
            placeholder="occupation"

        />
    
        <input 
          type="text" 
          name="about"
          placeholder="Tell us about yourself" 
        />

        <input  className="addvolunteer__form-button" type="submit" />
        </form>
        
    
    </>)
}

export default AddVolunteer