import React, {  useState } from "react";
import ItemForm from "./ItemForm";
//import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  const handleLogin = async (e) => {
    e.preventDefault();

    await fetch("https://localhost:7049/api/User/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          console.log(response);
        } else {
          setIsLoggedIn(true);  
          //navigate("/items");
          //return response.json();
        }
      })
      .catch((error) => {
        console.error(error.message); // Handle any errors
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          
          {isLoggedIn ? (
            <ItemForm />
          ) : (
            <div>
            <h4>Login</h4>
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Log In
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
