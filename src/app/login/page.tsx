'use client';
import React, { useState } from 'react';

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Logging in with:', formData);
    setIsLoggedIn(true);
    setFormData({ email: '', password: '' });
    setTimeout(() => {
      console.log('Redirecting...');
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 w-screen">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl text-[#ccff00] font-bold text-center mb-6">
          Welcome Back!
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-700 border border-[#ccff00] text-gray-300 focus:ring-2 focus:ring-[#ccff00] focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-300 font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-700 border border-[#ccff00] text-gray-300 focus:ring-2 focus:ring-[#ccff00] focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="hidden"
              />
              <label
                htmlFor="remember"
                className={`relative w-6 h-6 rounded-md border-2 border-[#ccff00] transition-all duration-300 cursor-pointer ${isChecked ? 'bg-[#ccff00]' : 'bg-transparent'}`}
              >
                <span className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${isChecked ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
              </label>
              <label htmlFor="remember" className="ml-2 text-gray-300">Remember Me</label>
            </div>
            <a href="#" className="text-[#ccff00] hover:underline">Forgot Password?</a>
          </div>
          <button
            type="submit"
            className="w-full mt-6 p-3 bg-[#ccff00] hover:bg-gray-600 text-gray-900 font-semibold rounded-md transition-all duration-300 transform hover:-translate-y-1"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-gray-400 text-center">
          Don’t have an account?
          <a href="/signup" className="text-[#ccff00] hover:underline"> Sign Up</a>
        </p>
        {isLoggedIn && (
          <div className="flex justify-center mt-4">
            <span className="nf nf-oct-check_circle text-[80px] animate-bounce mt-4 text-[#ccff00]"></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
