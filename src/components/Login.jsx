import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("akshay@gmail.com");
  const [password, setPassword] = useState("marcosR@291");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      await axios
        .post(
          BASE_URL + "/login",
          {
            emailId: emailId,
            password: password,
          },
          {
            withCredentials: true,
          },
        )
        .then((res) => {
          if (res.data) {
            dispatch(addUser(res.data.data));
            return navigate("/");
          }
        });
    } catch (error) {
      setError("Error: Invalid Credentials");
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center my-10">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-10">
        <legend className="fieldset-legend text-2xl mx-5">Login</legend>

        <label className="label">Email</label>
        <input
          type="email"
          value={emailId}
          className="input"
          placeholder="Email"
          onChange={(e) => setEmailId(e.target.value)}
        />

        <label className="label">Password</label>
        <input
          type="password"
          value={password}
          className="input"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="text-red-600">{error}</p>
        <button className="btn btn-primary mt-4" onClick={handleLogin}>
          Login
        </button>
      </fieldset>
    </div>
  );
};
export default Login;
