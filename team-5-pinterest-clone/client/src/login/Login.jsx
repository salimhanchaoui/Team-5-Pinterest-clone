// import React, { useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import bcrypt from "bcryptjs";
// import "../login/login.css";

// function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post(
//         "http://localhost:8800/api/users/login",
//         {
//           username,
//           password,
//         }
//       );

//       console.log(response.data);

//       const userData = response.data;

//       if (userData) {
//         console.log("User exists!");
//         toast.dark("Login successful! Redirecting you to the home page!", {
//           position: "bottom-center",
//           autoClose: 3000,
//           hideProgressBar: true,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           style: {
//             backgroundColor: "#1E1E1E",
//             color: "#FFFFFF",
//             fontFamily: "Arial, sans-serif",
//             fontWeight: "bold",
//           },
//         });

//         setTimeout(() => {
//           window.location.href = "/all-posts";
//         }, 2000);
//       } else {
//         console.log("User not found.");
//         toast.error("Invalid username or password!", {
//           position: "bottom-center",
//           autoClose: 3000,
//           hideProgressBar: true,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           style: {
//             backgroundColor: "#1E1E1E",
//             color: "#FFFFFF",
//             fontFamily: "Arial, sans-serif",
//             fontWeight: "bold",
//           },
//         });
//       }
//     } catch (error) {
//       console.error(error);

//       toast.error("Invalid username or password!", {
//         position: "bottom-center",
//         autoClose: 3000,
//         hideProgressBar: true,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         style: {
//           backgroundColor: "#1E1E1E",
//           color: "#FFFFFF",
//           fontFamily: "Arial, sans-serif",
//           fontWeight: "bold",
//         },
//       });
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="login-form">
//       <h1>Login to your account!</h1>
//       <label htmlFor="username-input">Your Username:</label>
//       <input
//         type="text"
//         id="username-input"
//         value={username}
//         onChange={(event) => setUsername(event.target.value)}
//         className="login-input"
//       />

//       <label htmlFor="password-input">Your Password:</label>
//       <input
//         type="password"
//         id="password-input"
//         value={password}
//         onChange={(event) => setPassword(event.target.value)}
//         className="login-input"
//       />

//       <button type="submit" className="login-button">
//         Login
//       </button>
//       <p className="create-account">Don't have an account?</p>
//       <Link to="/register" className="create-account-link">
//         Create Account
//       </Link>
//       <ToastContainer />
//     </form>
//   );
// }

// export default Login;
