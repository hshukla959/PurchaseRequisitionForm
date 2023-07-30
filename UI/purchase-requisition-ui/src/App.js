import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import ItemForm from './components/ItemForm';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // const handleLogin = (loggedIn) => {
  //   console.log("in logged in")
  //   setIsLoggedIn(loggedIn);
  // };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <h5 className="navbar-brand">
              Purchase Requisition App
            </h5>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                {isLoggedIn ? <button onClick={handleLogout}>Logout</button> : <Link to="/" className="nav-link">
                Login
              </Link>}
                
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link">
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
