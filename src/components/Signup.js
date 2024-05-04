import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  let navigate = useNavigate();
  const [Credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handlesubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: Credentials.name,
        email: Credentials.email,
        password: Credentials.password,
      }),
    });
    const json = await response.json();
    //   console.log(json);
    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      navigate("/");
    } else {
      alert("Some Error Occured");
    }
  };
  const onchange = (e) => {
    setCredentials({ ...Credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="container my-5">
      <form onSubmit={handlesubmit}>
        <h1 className="my-5">Sign up</h1>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Name
          </label>
          <input
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={Credentials.name}
            aria-describedby="emailHelp"
            onChange={onchange}
          />
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={Credentials.email}
            aria-describedby="emailHelp"
            onChange={onchange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={Credentials.password}
            onChange={onchange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register and Login
        </button>
      </form>
    </div>
  );
};

export default Signup;
