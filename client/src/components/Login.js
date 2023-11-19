/* import React, { useState } from "react";
import axios from "axios";



const Login = () => {
  const [inputs, setInputs] = useState({
    empid: "",
    empPwd: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (inputs.empid === "") {
      alert("User ID should not be empty");
    } else if (inputs.empPwd === "") {
      alert("Password should not be empty");
    } else {
      axios
        .get(`http://localhost:3000/${inputs.empid}`)
        .then((res) => {
          if (res.data === 1) {
            axios
              .post("http://localhost:3000/login", inputs)
              .then((res) => {
                alert("Log In Success!");
                var logID = inputs.empid;
                localStorage.setItem("logID", logID);
                window.location.href = "/employees";
              })
              .catch(function (error) {
                alert("Email or Password is Incorrect!");
              });
          } else {
            alert("User Does not Exists!");
          }
        });
    }
  };

  return (
    <div>
      <div className="login_container">
        <div className="login_form_container">
          <div className="left">
            <form className="form_container">
              <h1>Log In To Your Account</h1>
              <input
                type="text"
                name="empid"
                placeholder="Employee ID"
                onChange={handleChange}
                value={inputs.empid || ""}
                required
                className="input"
              />
              <input
                type="password"
                name="empPwd"
                placeholder="Password"
                onChange={handleChange}
                value={inputs.empPwd || ""}
                required
                className="input"
              />
            </form>

            <button
              type="button"
              className="signin_btn"
              onClick={(e) => {
                onSubmit(e);
              }}
            >
              Log In
            </button>

            <a href="/reset">
              <h4 style={{ fontSize: "15px" }}> Forget Password</h4>
            </a>
          </div>
          <div className="right">
            <h1>Hobbies App</h1>
            <div className="logo">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

 */







// import React, { useState } from "react"
// import 'bootstrap/dist/css/bootstrap.min.css';

// function Login() {
//     const[email, setEmail] = useState('')
//     const[password, setPassword] = useState('')
//     function handleSubmit(event){
//       event.preventDefault();
//     }

  

//   return (
//     <div className="d-flex vh-100 justify-content-center align-items-center bg-primary">
//       <div className="p-3 bg-white w-25">
//         <form onSubmit={handleSubmit}>

//           <div className="mb-3">
//             <label htmlFor="email">Email</label>
//             <input type="email" placeholder="Enter Email" className="form-control"
//             onChange={e => setEmail(e.target.value)}/>
//           </div>

//           <div className="mb-3">
//             <label htmlFor="password">Password</label>
//             <input type="password" placeholder="Enter Password" className="form-control"
//                onChange={e => setPassword(e.target.value)}/>
//           </div>
//           <button className="btn btn-success">Login</button>

//         </form>
//       </div>
//     </div>

//   )
// }

// export default Login





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
          <button type="submit" className="btn btn-success">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;

