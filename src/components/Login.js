import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PersonFill } from "react-bootstrap-icons";
const Login = (props) => {
  let navigate = useNavigate();
  const [Credentials, setCredentials] = useState({ email: "", password: "" });
  const handlesubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
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
      alert("Invalid Credentials");
    }
  };
  const onchange = (e) => {
    setCredentials({ ...Credentials, [e.target.name]: e.target.value });
  };
  return (
    <div
      className="container my-5"
      style={{
        backgroundColor: props.mode === "dark" ? "white" : "black",

        border: props.mode === "dark" ? "1px solid white" : "1px solid black",
        width: "40%",
        height: "70%",
        margin: "auto",
        borderRadius: "10px",
        paddingBottom: "15px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <PersonFill
          style={{
            color: props.mode === "dark" ? "black" : "white",
            width: "70px",
            height: "70px",
            paddingTop: "5px",
          }}
        />
      </div>
      <div className="signup-heading">
        <h1
          className="my-5"
          style={{
            color: props.mode === "dark" ? "black" : "white",
          }}
        >
          Login or Singup to Continue
        </h1>
      </div>

      <form onSubmit={handlesubmit}>
        <div className="mb-3">
          <label
            htmlFor="email"
            className="form-label"
            style={{
              color: props.mode === "dark" ? "black" : "white",
            }}
          >
            Email address
          </label>
          <input
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            type="text"
            className="form-control"
            id="email"
            name="email"
            value={Credentials.email}
            aria-describedby="emailHelp"
            onChange={onchange}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="password"
            className="form-label"
            style={{
              color: props.mode === "dark" ? "black" : "white",
            }}
          >
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
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
