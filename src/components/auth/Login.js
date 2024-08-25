import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";

const Login = () => {
  const { setCurrentUser } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/user');

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const users = await response.json();
      const user = users.find(user => user.email === formData.email && user.password === formData.password);

      if (user) {
        localStorage.setItem('userId', user.id);
        setCurrentUser(user.id);
        alert("Login Successful");
        navigate('/dashboard'); // Redirect to dashboard
      } else {
        alert("Login Failed: Incorrect email or password");
      }
    } catch (error) {
      console.error('Error:', error.message);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='row'>
          <div className="col-6 mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-6 mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <span>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
