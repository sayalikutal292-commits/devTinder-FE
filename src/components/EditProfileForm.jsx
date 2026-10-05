import { useState } from "react";
import UserCard from "./UserCard";
import { useDispatch } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../utils/userSlice";
const EditProfileForm = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [skills, setSkills] = useState(user.skills.join(","));
  const [about, setAbout] = useState(user.about);
  const dispatch = useDispatch();

  const handleSave = async () => {
    const updatedSkills = skills
      .split(",")
      .map((skill) => skill.trim())
      .filter(Boolean);
    try {
      await axios
        .patch(
          BASE_URL + "/profile/edit",
          { firstName, lastName, age, gender, about, skills: updatedSkills },
          { withCredentials: true },
        )
        .then((res) => {
          dispatch(addUser(res.data.data));
        });
    } catch (error) {
      console.log("ERROR:", error);
      console.log("MESSAGE:", error.message);
      console.log("RESPONSE:", error.response);
    }
  };
  return (
    <div className="flex justify-center mt-10">
      <div className="card card-border bg-base-200 w-100 mr-10">
        <div className="card-body">
          <h2 className="card-title">Profile Edit</h2>
          <div>
            <fieldset className="fieldset">
              <label className="label" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="input"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="input"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label" htmlFor="age">
                Age
              </label>
              <input
                type="text"
                id="age"
                className="input"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label" htmlFor="gender">
                Gender
              </label>
              <input
                type="text"
                id="gender"
                className="input"
                placeholder="Gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label" htmlFor="about">
                About
              </label>
              <textarea
                className="textarea h-24"
                placeholder="About"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              ></textarea>
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Skills</legend>
              <textarea
                className="textarea h-24"
                placeholder="Skills"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              ></textarea>
            </fieldset>
            <div className="card-actions justify-center mt-5">
              <button className="btn btn-primary" onClick={handleSave}>
                Save Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      {user && (
        <div>
          <UserCard
            person={{ firstName, lastName, age, gender, about, skills }}
          />
        </div>
      )}
    </div>
  );
};
export default EditProfileForm;
