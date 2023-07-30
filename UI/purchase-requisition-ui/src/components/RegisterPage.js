import React, { useState } from 'react';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    // Replace this with actual registration logic in a real-world application

    await fetch("https://localhost:7049/api/User/register", {
      method: "POST",
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        email:email,
        password: password
      }),
    })
    .then((response) => {
        if (!response.ok) {
            console.log(response);
        }
        else{
            setIsRegistered(true);
            return response.json();
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
        <h4>Register</h4>
          {isRegistered ? (
            <div className="alert alert-success" role="alert">
              Registration successful! You can now log in.
            </div>
          ) : (
            <form onSubmit={handleRegister}>
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
                Register
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
