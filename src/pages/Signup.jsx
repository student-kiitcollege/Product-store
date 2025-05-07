import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const isDisabled =
    name.trim() === '' ||
    email.trim() === '' ||
    phone.trim() === '' ||
    password.trim() === '';

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-80 text-black"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Seller Signup</h2>
        <input
          type="text"
          placeholder="Name"
          className="w-full mb-4 p-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          className="w-full mb-4 p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone"
          className="w-full mb-4 p-2 border rounded"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          disabled={isDisabled}
          className={`w-full py-2 rounded ${
            isDisabled
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-green-500 hover:bg-green-600 text-white'
          }`}
        >
          Sign Up
        </button>
        <p className="mt-4 text-center text-sm">
          Already have an account?{' '}
          <Link to="/" className="text-green-600 font-semibold">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
