import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../assets/images/bg_3.jpg'; // Adjust the path based on your directory structure

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log('Form submitted', form);
  };

  const containerStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const formStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '20px',
    borderRadius: '10px',
    width: '100%',
    maxWidth: '400px',
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h2 className="text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
        <div className="mt-3">
          <Link to="/register"> Dont have an account? Register</Link>
          <br />
          <Link to="/forget-password">Forgot Password?</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
