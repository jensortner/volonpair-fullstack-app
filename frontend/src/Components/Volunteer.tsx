

type volunteer = {
    name: string,
    age:  number,
    occupation: string,
    email: string,
    about: string
}

function Volunteer(volunteerData: volunteer) {
    
    const { name, age, occupation, email, about } = volunteerData;

    return (
        <div className="volunteer__container">
            <ul>
            <li>{name}</li>
            <li>{age}</li>
            <li>{occupation}</li>
            <li>{email}</li>
            <li>{about}</li>
            </ul>
        </div>
    )
}

export default Volunteer