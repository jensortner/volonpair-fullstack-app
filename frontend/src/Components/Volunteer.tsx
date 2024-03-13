import './Volunteer.css'
type volunteerProps = {
    id: number,
    name: string,
    age:  number,
    occupation: string,
    email: string,
    about: string,
    setRemoveVolunteer: any

}

function Volunteer(volunteerData: volunteerProps) {

    const { id, name, age, occupation, email, about, setRemoveVolunteer} = volunteerData;

    return (
        <div className="volunteer__container">
        <div key={id} className="card w-96 bg-base-100 shadow-xl">
        <div className="dropdown dropdown-bottom">
        <div tabIndex={0} role="button" className="btn btn-lg btn-ghost">...</div>
        <ul tabIndex={0} className="dropdown-content z-[1] menu bg-base-100 rounded-box w-52">
            <li onClick={() => setRemoveVolunteer(id)}><a>Remove</a></li>
            <li><a>Update</a></li>
        </ul>
        </div>
        <figure className="px-10 pt-10">
            <img src="src/assets/avatar.png" alt="src/assets/avatar.png" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>
            <p>age: {age}</p>
            <p>occupation: {occupation}</p>
            <p>email: {email}</p>
            <p>about: {about}</p>
        </div>
        </div>
        </div>
    )
}

export default Volunteer