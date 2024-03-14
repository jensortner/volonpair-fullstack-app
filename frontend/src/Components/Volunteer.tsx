type VolunteerProps = {
  id: number;
  name: string;
  age: number;
  occupation: string;
  email: string;
  city: string;
  imgUrl: string;
  setRemoveVolunteer: any;
  setRemoveMsg: any;
};

function Volunteer(volunteerData: VolunteerProps) {
  const {
    id,
    name,
    age,
    occupation,
    email,
    city,
    imgUrl,
    setRemoveVolunteer,
    setRemoveMsg,
  } = volunteerData;

  function removeConfimation(id: number, name: string) {
    setRemoveMsg(name);
    setRemoveVolunteer(id);
  }

  return (
    <div key={id} className="card w-96 bg-base-100 shadow-xl">
      <div className="dropdown dropdown-bottom">
        <div tabIndex={0} role="button" className="btn btn-lg btn-ghost">
          ...
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu bg-base-100 rounded-box w-52"
        >
          <li onClick={() => removeConfimation(id, name)}>
            <button className=" btn btn-error">Remove</button>
          </li>
        </ul>
      </div>
      <figure className="px-10 pt-10">
        <img src={imgUrl} alt="src/assets/avatar.png" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{occupation}</h2>
        <p>{name}</p>
        <p>{age} years old</p>
        <p>{email}</p>
        <p>{city}</p>
      </div>
    </div>
  );
}

export default Volunteer;
