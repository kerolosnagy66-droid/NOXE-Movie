import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Register() {

  let navigate = useNavigate()
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(null)
  const [user, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
    phone: '',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix' 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    let validationResult = validateRegisterForm(user);
    if (validationResult.error) {
      setError(validationResult.error.details.map(err => err.message).join(', '));
      setIsLoading(false);
      return;
    }

    try {
      let { data } = await axios.post(
        'https://api.escuelajs.co/api/v1/users/',
        {
          name: user.name,
          email: user.email,
          password: user.password,
          avatar: user.avatar
        }
      );
      
      if (data) {
        setSuccess('Registration completed successfully! Redirecting to login...');
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }
    
  function validateRegisterForm(user) {
    const schema = Joi.object({
      name: Joi.string().min(3).max(30).required(),
      email: Joi.string().email({ tlds: { allow: false } }).required(),
      phone: Joi.string().min(11).max(11).required(),
      password: Joi.string().min(4).required(),
      confirm_password: Joi.string().valid(Joi.ref('password')).required(),
      avatar: Joi.string().required()
    });

    return schema.validate(user, { abortEarly: false });
  }

  return (
    <div className='container mt-5 py-5'>
      <form onSubmit={onSubmit} className='row justify-content-center'>
        <div className='col-md-6 border p-4 shadow-sm text-white rounded bg-dark bg-opacity-25'>
          <h1 className="text-center text-info my-3">Register Now</h1>

          {success && <div className='alert alert-success text-center'>{success}</div>}
          {error && <div className='alert alert-danger text-center'>{error}</div>}

          <div className="mb-3">
            <label className='form-label' htmlFor='name'>Full Name</label>
            <input value={user.name} onChange={handleChange} type='text' className='form-control' id='name' name='name' placeholder='Enter your full name' />
          </div>

          <div className="mb-3">
            <label className='form-label' htmlFor='email'>Email Address</label>
            <input value={user.email} onChange={handleChange} type='email' className='form-control' id='email' name='email' placeholder='Enter your email' />
          </div>
        <div className="mb-3">
            <label className='form-label' htmlFor='phone'>Phone Number</label>
            <input value={user.phone} onChange={handleChange} type='text' className='form-control' id='phone' name='phone' placeholder='Enter your phone number' />
          </div>
          <div className="mb-3">
            <label className='form-label' htmlFor='password'>Password</label>
            <input value={user.password} onChange={handleChange} type='password' className='form-control' id='password' name='password' placeholder='Enter password' />
          </div>

          <div className="mb-3">
            <label className='form-label' htmlFor='confirm_password'>Confirm Password</label>
            <input value={user.confirm_password} onChange={handleChange} type='password' className='form-control' id='confirm_password' name='confirm_password' placeholder='Confirm your password' />
          </div>

          <button
            type='submit'
            className='btn btn-info w-100 fw-bold mt-3'
            disabled={isLoading}
          >
            {isLoading ? <i className='fas fa-spinner fa-spin'></i> : 'Register'}
          </button>
          
          <p className='text-center mt-3 mb-0'>
            Already have an account? <span className='text-info' style={{cursor:'pointer'}} onClick={() => navigate('/login')}>Login</span>
          </p>
        </div>
      </form>
    </div>
  );
}
