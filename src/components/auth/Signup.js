import React, { useState, useEffect } from 'react';
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
  // const handleChange = (e) => {
  //     const { name, value, checked } = e.target;
  //     if (name === 'gender') {
  //         setFormData(prevFormData => ({
  //             ...prevFormData,
  //             gender: {
  //                 ...prevFormData.gender,
  //                 [value]: checked
  //             }
  //         }));
  //     } else {
  //         setFormData({
  //             ...formData,
  //             [name]: value
  //         });
  //     }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    let body = JSON.stringify(formData);
    console.log('form-body', body);
    fetch("http://localhost:8000/user", {
      method: "POST",
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(formData)
    }).then((res) => {
      console.log('Success:', res);
      // localStorage.setItem('userId', res.id);
      // setCurrentUser(res.id);
      // window.location.href = '/';
      navigate('./login');
    }).catch((error) => {
      console.log(error);
    })
  }
  return (
    <div>
      <h1>Register User then login with same credential!</h1>
      <form onSubmit={handleSubmit}>
        <div className='row'>
          <div className="col-6 mb-3">
            <label htmlFor="username" className="form-label">username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              id="username"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="col-6 mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="text"
              className="form-control"
              name="password"
              id="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="col-6 mb-3">
            <label htmlFor="Full name" className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              name="full_name"
              id="full_name"
              placeholder="Enter First Name"
              value={formData.full_name}
              onChange={handleChange}
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
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="col-6 mb-3">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input
              type="number"
              className="form-control"
              name="phone"
              id="phone"
              placeholder="Enter phone"
              value={formData.phone}
              onChange={handleChange}
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
            />
          </div>
          <div className="col-6 mb-3">
            <label htmlFor="address" className="form-label">address</label>
            <input
              type="text"
              className="form-control"
              name="address"
              id="address"
              placeholder="Enter address"
              value={formData.address}
              onChange={handleChange}
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
          {/* <div className="col-6 mb-3">
<label htmlFor="gender" className="form-label">Gender</label>
<div className="form-check form-check-inline">
  <input
      className="form-check-input"
      type="checkbox"
      id="male"
      name="gender"
      value="Male"
      checked={formData.gender['Male'] || false}
      onChange={handleChange}
  />
  <label className="form-check-label" htmlFor="male">Male</label>
</div>
<div className="form-check form-check-inline">
  <input
      className="form-check-input"
      type="checkbox"
      id="female"
      name="gender"
      value="Female"
      checked={formData.gender['Female'] || false}
      onChange={handleChange}
  />
  <label className="form-check-label" htmlFor="female">Female</label>
</div>
</div> */}

        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <span>
          Already have an account? <Link to={"/login"}>Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Signup;