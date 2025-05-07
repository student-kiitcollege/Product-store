import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isDisabled = email.trim() === '' || password.trim() === '';

  const handleSubmit = () => {
    navigate('/dashboard');
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-gray-100 p-8 rounded shadow-md w-80 text-black">
        <h2 className="text-2xl font-bold mb-6 text-center">Seller Login</h2>
        <input
          type="text"
          placeholder="Email"
          className="w-full mb-4 p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          disabled={isDisabled}
          className={`w-full py-2 rounded ${
            isDisabled
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-green-500 hover:bg-green-600 text-white'
          }`}
        >
          Login
        </button>
        <p className="mt-4 text-center text-sm">
          Don't have an account?{' '}
          <Link to="/signup" className="text-green-600 font-semibold">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
