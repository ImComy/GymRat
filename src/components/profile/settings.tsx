import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5"; // Close icon

interface SettingsProps {
  onClose: () => void;
}

const Settings: React.FC<SettingsProps> = ({ onClose }) => {
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [username, setUsername] = useState("Ahmed El-Shazly");
  const [email, setEmail] = useState("ahmed@example.com");
  const [password, setPassword] = useState("");

  const handleSave = () => {
    console.log("Updated User Info:", { username, email, password });
    onClose();
  };

  const handleClose = () => {
    setIsAnimatingOut(true); // Trigger the fade-out animation
    setTimeout(() => {
      onClose(); // Close the modal after the animation finishes
    }, 300); // Duration of the animation in ms
  };

  return (
    <div
      id="modal-bg"
      className={`fixed inset-0 bg-black/30  flex items-center justify-center z-50 ${
        isAnimatingOut ? "animate-fade-out" : "animate-fade-in"
      }`}
      onClick={handleClose}
    >
      <div
        className={`bg-white rounded-lg p-6 shadow-lg w-[90%] max-w-lg relative ${
          isAnimatingOut ? "animate-fade-out" : "animate-fade-in"
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent closing on click inside the modal
      >
        {/* Close button */}
        <IoClose
          onClick={handleClose}
          className="absolute top-4 right-4 text-3xl cursor-pointer hover:text-red-600 transition-colors duration-300"
        />

        <h2 className="text-2xl font-bold mb-6">Settings</h2>
        <div>
          <label className="block mb-2 text-gray-700">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full text-black"
          />

          <label className="block mt-4 mb-2 text-gray-700">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full text-black"
          />

          <label className="block mt-4 mb-2 text-gray-700">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="border border-gray-300 rounded p-2 w-full text-black"
          />
        </div>

        <div className="flex justify-center mt-6">
          <button
            className="w-[180px] h-[45px] bg-gradient-to-r from-[#ccff00] to-[#bfff00] rounded-full text-black font-bold transition-transform hover:scale-105"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(20px);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .animate-fade-out {
          animation: fadeOut 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Settings;
