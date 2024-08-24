import React, { useEffect, useState } from 'react';
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
  // useEffect(()=>{
  //     sessionStorage.clear();
  // },[]);
  const handleSubmit = async (e) => {
      e.preventDefault();
      // let email = formData.email;
      // let password = formData.password;
      // console.log('form-body', user);
      // const response = await fetch('http://localhost:8000/user', {
      //     method: 'POST',
      //     headers: {
      //         'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify({ email, password }),
      // });
      // localStorage.setItem('username', username);

      try {
          const response = await fetch('http://localhost:8000/user');
          
          if (!response.ok) {
              // Handle HTTP errors
              throw new Error('Network response was not ok');
          }
          
          const res = await response.json();
          console.log(res)
          const user = res.find(user => user.email === formData.email && user.password === formData.password);
          
          if (user) {
            localStorage.setItem('userId', user.id);
             setCurrentUser(user.id);
              // Login successful
              alert("Login Successful");
              navigate('/'); // Redirect to homepage
          } else {
              // Login failed
              alert("Login Failed: Incorrect email or password");
          }
      } catch (error) {
          // Handle errors
          console.error('Error:', error.message);
      }
  }
  return (
      <div>
          <form onSubmit={handleSubmit}>
              <div className='row'>
                  <div className="col-6 mb-3">
                      <label htmlFor="email" className="form-label">email</label>
                      <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Enter email"
                          value={formData.email}
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
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
              <span>
          Already have an account? <Link to={"/signup"}>Signup</Link>
        </span>
          </form>
      </div>
  );
};

export default Login;