'use client';

import React, { useState, useEffect } from 'react';

const SignupPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    height: '',
    weight: '',
    bmi: '',
    location: '',
    age: '',
    profilePic: '',
  });
  const [bmiCalculated, setBmiCalculated] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  useEffect(() => {
    if (formData.height && formData.weight) {
      const heightInMeters = parseFloat(formData.height) / 100;
      const weight = parseFloat(formData.weight);
      const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setFormData((prevData) => ({ ...prevData, bmi }));
      setBmiCalculated(true);
    }
  }, [formData.height, formData.weight]);

  const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData((prevData) => ({ ...prevData, profilePic: reader.result as string }));
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const previousStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted', formData);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6 w-screen">
      <div className="bg-gray-800 shadow-xl rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-4xl font-bold text-center text-[#ccff00] mb-6">
          {step === 1 ? 'Join GymRat' : step === 4 ? 'Complete Your Profile' : 'Next Step'}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {step === 1 && (
            <>
              <div>
                <label htmlFor="name" className="block text-gray-300 font-semibold">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-gray-700 border border-[#ccff00] text-gray-300 focus:ring-2 focus:ring-[#ccff00] focus:outline-none"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 font-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-gray-700 border border-[#ccff00] text-gray-300 focus:ring-2 focus:ring-[#ccff00] focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-gray-300 font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-gray-700 border border-[#ccff00] text-gray-300 focus:ring-2 focus:ring-[#ccff00] focus:outline-none"
                  placeholder="Create a password"
                />
              </div>
              <button
                type="button"
                onClick={nextStep}
                className="w-full p-3 mt-6 bg-[#ccff00] hover:bg-gray-600 text-gray-900 font-semibold rounded-md transition-all duration-300 transform hover:-translate-y-1"
              >
                Next
              </button>
              <div className="text-center mt-6">
                <p className="text-gray-400">Already a member?</p>
                <a href="login" className="text-[#ccff00] hover:underline">
                  Sign In here
                </a>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div>
                <label htmlFor="height" className="block text-gray-300 font-semibold">
                  Height (cm)
                </label>
                <input
                  type="text"
                  id="height"
                  value={formData.height}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-gray-700 border border-[#ccff00] text-gray-300 focus:ring-2 focus:ring-[#ccff00] focus:outline-none"
                  placeholder="Enter your height in cm"
                />
              </div>
              <div>
                <label htmlFor="weight" className="block text-gray-300 font-semibold">
                  Weight (kg)
                </label>
                <input
                  type="text"
                  id="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-gray-700 border border-[#ccff00] text-gray-300 focus:ring-2 focus:ring-[#ccff00] focus:outline-none"
                  placeholder="Enter your weight in kg"
                />
              </div>

              {bmiCalculated && (
                <div className="mt-6 p-4 rounded-md bg-gray-700 text-gray-200">
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-lg">Your BMI: {formData.bmi}</p>
                    <div className="relative group">
                      <button className="text-[#ccff00]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 18.75a6.75 6.75 0 110-13.5 6.75 6.75 0 010 13.5z" />
                        </svg>
                      </button>
                      <div className="absolute hidden group-hover:block w-64 p-3 bg-gray-800 text-gray-300 rounded-md shadow-lg z-20">
                        <p className="text-sm">BMI (Body Mass Index) is a measurement of body fat based on your height and weight.</p>
                        <a
                          href="https://www.cdc.gov/healthyweight/assessing/bmi/adult_bmi/index.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#ccff00] mt-2 block text-sm underline"
                        >
                          Learn more about BMI
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={previousStep}
                  className="p-3 bg-gray-600 hover:bg-gray-700 text-gray-300 font-semibold rounded-md transition-all duration-300 transform hover:-translate-y-1"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="p-3 bg-[#ccff00] hover:bg-gray-600 text-gray-900 font-semibold rounded-md transition-all duration-300 transform hover:-translate-y-1"
                >
                  Next
                </button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div className="text-gray-300 font-semibold mb-4">Choose your profile picture</div>
              {formData.profilePic ? (
                <div className="flex flex-col items-center">
                  <img src={formData.profilePic} alt="Profile Pic" className="w-[150px] h-[150px] rounded-full object-cover border-4 border-[#ccff00]" />
                  <button
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, profilePic: '' }))}
                    className="mt-4 text-lg text-[#ccff00] underline"
                  >
                    Change Picture
                  </button>
                </div>
              ) : (
                <div className="w-full p-3 rounded-md bg-gray-700 border border-[#ccff00] text-gray-300 flex items-center justify-center">
                  <label htmlFor="profilePic" className="cursor-pointer text-center">
                    <span className="nf nf-fa-user_circle_o text-[80px] text-[#ccff00]"></span>
                    <span className="block mt-2 text-lg">Upload Profile Picture</span>
                  </label>
                  <input
                    type="file"
                    id="profilePic"
                    accept="image/*"
                    onChange={handleProfilePicChange}
                    className="hidden"
                  />
                </div>
              )}
              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={previousStep}
                  className="p-3 bg-gray-600 hover:bg-gray-700 text-gray-300 font-semibold rounded-md transition-all duration-300 transform hover:-translate-y-1"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="p-3 bg-[#ccff00] hover:bg-gray-600 text-gray-900 font-semibold rounded-md transition-all duration-300 transform hover:-translate-y-1"
                >
                  Next
                </button>
              </div>
            </>
          )}

          {step === 4 && (
            <>
              <div>
                <label htmlFor="age" className="block text-gray-300 font-semibold">
                  Age
                </label>
                <input
                  type="text"
                  id="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-gray-700 border border-[#ccff00] text-gray-300 focus:ring-2 focus:ring-[#ccff00] focus:outline-none"
                  placeholder="Enter your age"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="location" className="block text-gray-300 font-semibold">
                  Location
                </label>
                <select
                  id="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-gray-700 border border-[#ccff00] text-gray-300 focus:ring-2 focus:ring-[#ccff00] focus:outline-none"
                >
                  <option value="">Select your location</option>
                  <option value="New York">Ismailia</option>
                  <option value="Los Angeles">Alexandria</option>
                  <option value="Chicago">Cairo</option>
                  <option value="Miami">suez</option>
                  <option value="Houston">Portsex</option>
                </select>
              </div>
              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={previousStep}
                  className="p-3 bg-gray-600 hover:bg-gray-700 text-gray-300 font-semibold rounded-md transition-all duration-300 transform hover:-translate-y-1"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="p-3 bg-[#ccff00] hover:bg-gray-600 text-gray-900 font-semibold rounded-md transition-all duration-300 transform hover:-translate-y-1"
                >
                  Complete Signup
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
