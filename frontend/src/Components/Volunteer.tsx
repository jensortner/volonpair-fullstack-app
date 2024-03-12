import './Volunteer.css'
type volunteer = {
    id: number,
    name: string,
    age:  number,
    occupation: string,
    email: string,
    about: string
}

function Volunteer(volunteerData: volunteer) {

    const { id, name, age, occupation, email, about } = volunteerData;

    return (
        <div className="volunteer__container">
        <div key={id} className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
            <img src="src/assets/avatar.png" alt="src/assets/avatar.png" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>
            <p>age: {age}</p>
            <p>occupation: {occupation}</p>
            <p>email: {email}</p>
            <p>about: {about}</p>

            <div className="card-actions">
            <button className="btn btn-primary">Contact</button>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Volunteer