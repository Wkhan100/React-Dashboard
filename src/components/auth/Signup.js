import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    full_name: '',
    email: '',
    phone: '',
    country: '',
    address: '',
    gender: ''
  });
  const { setCurrentUser } = useAuth();
  const navigate = useNavigate();

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
      const response = await fetch("http://localhost:8000/user", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      localStorage.setItem('userId', result.id);
      setCurrentUser(result.id);
      navigate('/login');
    } catch (error) {
      console.error('Error:', error.message);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <h1>Register User then login with same credentials!</h1>
      <form onSubmit={handleSubmit}>
        <div className='row'>
          <div className="col-6 mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              id="username"
              placeholder="Enter username"
              value={formData.username}
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
          <div className="col-6 mb-3">
            <label htmlFor="full_name" className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              name="full_name"
              id="full_name"
              placeholder="Enter full name"
              value={formData.full_name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
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
            <label htmlFor="phone" className="form-label">Phone</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              id="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-6 mb-3">
            <label htmlFor="country" className="form-label">Country</label>
            <input
              type="text"
              className="form-control"
              name="country"
              id="country"
              placeholder="Enter country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-6 mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              name="address"
              id="address"
              placeholder="Enter address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-6 mb-3">
            <label htmlFor="gender" className="form-label">Gender</label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="male"
                name="gender"
                value="Male"
                checked={formData.gender === 'Male'}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="male">Male</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="female"
                name="gender"
                value="Female"
                checked={formData.gender === 'Female'}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="female">Female</label>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <span>
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Signup;
