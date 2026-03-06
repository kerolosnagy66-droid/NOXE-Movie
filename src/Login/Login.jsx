import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ getUserData }) {
  let navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [user, setUser] = useState({
    email: '',
    password: '',
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  async function onSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    let validationResult = validateLoginForm(user);
    if (validationResult.error) {
      setError(validationResult.error.details.map((err) => err.message).join(' | '));
      setIsLoading(false);
      return;
    }

    try {
      let { data } = await axios.post('https://api.escuelajs.co/api/v1/auth/login', {
        email: user.email, //john@mail.com
        password: user.password //changeme
      });

      if (data.access_token) {
        localStorage.setItem('userToken', data.access_token);

        if (typeof getUserData === 'function') {
          getUserData();
        }

        setSuccess('Login successful! Redirecting...');
        
        setTimeout(() => {
          navigate('/home');
        }, 1000);
      } else {
        setError('Authentication failed: No token received.');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Connection error. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }

  function validateLoginForm(user) {
    const schema = Joi.object({
      email: Joi.string().email({ tlds: false }).required(),
      password: Joi.string()
        .min(4)
        .required(),
      remember: Joi.boolean(),
    });

    return schema.validate(user, { abortEarly: false });
  }

  return (
    <div className="container mt-5">
      <form onSubmit={onSubmit} className="row justify-content-center">
        <div className="col-md-6 border p-4 shadow-sm text-white rounded">
          <h1 className="text-center text-info my-3">Login Now</h1>
          
          {success && <div className="alert alert-success text-center">{success}</div>}
          {error && <div className="alert alert-danger text-center">{error}</div>}

          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              value={user.email}
              onChange={handleChange}
              type="email"
              className="form-control"
              name="email"
              placeholder="john@mail.com"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              value={user.password}
              onChange={handleChange}
              type="password"
              className="form-control"
              name="password"
              placeholder="changeme"
            />
          </div>

          <div className="form-check mb-3">
            <input
              checked={user.remember}
              onChange={handleChange}
              type="checkbox"
              className="form-check-input"
              id="remember"
              name="remember"
            />
            <label className="form-check-label" htmlFor="remember">Remember Me</label>
          </div>

          <button type="submit" className="btn btn-info mt-2 w-100 fw-bold" disabled={isLoading}>
            {isLoading ? <i className="fas fa-spinner fa-spin"></i> : 'Login'}
          </button>
        </div>
      </form>
    </div>
  );
}