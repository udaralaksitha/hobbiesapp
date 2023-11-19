
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Handle successful login, you might redirect or do something else
        console.log("Login successful");
      } else {
        // Handle login error, you might show an error message
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-primary">
      <div className="p-3 bg-white w-25">
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="email">User Id</label>
            <input
              type="email"
              placeholder="Enter User Id "
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>


          <div className="mb-3">
            <label htmlFor="email">Username</label>
            <input
              type="email"
              placeholder="Enter Username"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success">Sign up</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
