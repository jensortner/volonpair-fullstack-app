import { useEffect, useState } from "react";
import "./AddVolunteer.css";

type VolunteerType = {
  name: string;
  age: number | undefined;
  occupation: string;
  email: string;
  city: string;
};

function AddVolunteer() {
  const [showErrorMsg, setShowErrorMsg] = useState<boolean>();
  const [showSuccessMsg, setShowSuccessMsg] = useState<boolean>();
  const imgUrl = "https://avatar.iran.liara.run/public";

  const [inputFields, setInputFields] = useState({
    name: "",
    age: undefined,
    occupation: "",
    email: "",
    city: "",
  });

  const [errors, setErrors] = useState("");

  const validateValues = () => {
    if (
      inputFields.occupation === "" ||
      inputFields.name === "" ||
      inputFields.city === ""
    ) {
      return "All fields are reqired";
    }
    if (inputFields.email.length < 15) {
      return "Email is too short";
    }
    if (inputFields.age === undefined) {
      return "Age required";
    }
    if (inputFields.age <= 0 || inputFields.age === null) {
      return "Age must be greater than 0";
    }
    return "";
  };

  const handleChange = (name: string, value: string | number) => {
    setErrors("");
    setInputFields({ ...inputFields, [name]: value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const errorVal = validateValues();
    setErrors(errorVal);

    if (!errorVal) {
      handleFetch(inputFields);
    }
    event.currentTarget.reset();
  };

  async function handleFetch(inputFields: any) {
    await fetch("http://localhost:3000/api/volunteer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: inputFields.name,
        age: inputFields.age,
        occupation: inputFields.occupation,
        email: inputFields.email,
        city: inputFields.city,
        imgUrl: imgUrl,
      }),
    })
      .then((data) => {
        data.json();
        setShowSuccessMsg(true);
      })
      .catch(() => {
        setShowErrorMsg(true);
      });

    setInputFields({
      name: "",
      age: undefined,
      occupation: "",
      email: "",
      city: "",
    });
  }
  useEffect(() => {
    setTimeout(() => {
      setShowSuccessMsg(false);
    }, 3000);
  }, [showSuccessMsg]);

  useEffect(() => {
    setTimeout(() => {
      setShowErrorMsg(false);
    }, 3000);
  }, [showErrorMsg]);

  return (
    <div className="addvolunteer__form-container">
      <form className="addvolunteer__form" onSubmit={handleSubmit}>
        <input
          type="name"
          value={inputFields.name}
          placeholder="Full name"
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => handleChange("name", e.target.value)}
        />
        <input
          type="number"
          min={1}
          value={inputFields.age}
          placeholder="Age"
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => handleChange("age", e.target.value)}
        />
        <input
          type="text"
          value={inputFields.email}
          placeholder="Email"
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => handleChange("email", e.target.value)}
        />

        <input
          type="text"
          value={inputFields.occupation}
          placeholder="Occupation"
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => handleChange("occupation", e.target.value)}
        />

        <input
          type="text"
          value={inputFields.city}
          placeholder="City"
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => handleChange("city", e.target.value)}
        />
        <div className="addvolunteer__form-button">
          <button className="btn btn-wide" type="submit">
            {" "}
            Add{" "}
          </button>
        </div>
      </form>

      {showSuccessMsg && (
        <div className="addvolunteer__form-messsage">
          <div role="alert" className="alert alert-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Your profile was sucessfully added!</span>
          </div>
        </div>
      )}

      {showErrorMsg && (
        <div className="addvolunteer__form-messsage">
          <div role="alert" className="alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Error! Failed to add.</span>
          </div>
        </div>
      )}

      {errors && (
        <div className="addvolunteer__form-messsage">
          <div role="alert" className="alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{errors}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddVolunteer;
