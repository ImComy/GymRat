import React, { useState } from 'react';

const AddItemButton: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleButtonClick = () => {
    setShowPopup(true);
    setIsClosing(false);
  };

  const handleClosePopup = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 300);
  };

  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const popup = document.querySelector('.popup');
    if (popup && event.target instanceof Element && !popup.contains(event.target)) {
      handleClosePopup();
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
      <>
    <button
      className="rounded-lg relative w-[170px] h-10 cursor-pointer flex items-center border border-[#a0cc00] bg-[#a0cc00] group hover:bg-[#ccff00] active:bg-[#ccff00] active:border-[#a0cc00] transition-all duration-300"
      onClick={handleButtonClick}>
      <span
        className="text-gray-800 font-semibold ml-5 transform group-hover:translate-x-10 group-hover:opacity-0 transition-all duration-300">
        Add a Picture
      </span>
      <span
        className="absolute right-0 h-full w-10 rounded-lg bg-[#a0cc00] flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
        <svg
          className="w-6 text-black"
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <line x1="12" x2="12" y1="5" y2="19" />
          <line x1="5" x2="19" y1="12" y2="12" />
        </svg>
      </span>
    </button>


      {showPopup && (
            <div
      className={`fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center z-10 ${
        isClosing ? 'animate-fade-out' : 'animate-fade-in'
      }`}
      onClick={handleOutsideClick}
    >
      <div
        className={`relative w-[350px] h-[445px] bg-white rounded-lg shadow-lg p-6 popup transition-all duration-300 ease-out mt-14 ${
          isClosing ? 'animate-popup-close' : 'animate-popup-open'
        }`}
      >
            <button
              className="absolute top-0 right-[-10px] text-2xl text-gray-500 hover:text-gray-800 transition duration-200 bg-white rounded-[100%] px-2 hover:bg-red-500"
              onClick={handleClosePopup}
            >
              &times;
            </button>
            <div className="w-full h-[60px] bg-gradient-to-r from-[#ccff00] to-[#bfff00] rounded-t-lg flex items-center justify-center relative mb-5">
              <span className="text-center text-black text-2xl font-extrabold">Add a New Picture</span>
            </div>
            <label
              className="w-full h-[150px] bg-gradient-to-tr from-gray-200 to-gray-200 rounded-lg flex justify-center items-center mb-4 flex-col gap-3 transition-bg duration-500 ease-in-out cursor-pointer relative overflow-hidden hover:scale-105 z-[1]"
              style={{
                backgroundImage: imagePreview ? `url(${imagePreview})` : '',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <input
                type="file"
                className="absolute inset-0 opacity-0 cursor-pointer"
                accept="image/*"
                onChange={handleImageChange}
              />
              {!imagePreview && (
                <>
                  <span className="nf nf-fa-picture_o text-gray-500 text-2xl z-[2]"></span>
                  <span className="text-sm text-gray-500 z-[2]">Click to Add Image</span>
                </>
              )}
            </label>

            <div className="mb-4 flex flex-col gap-3">
              <input
                type="text"
                placeholder="Height..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-600"
              />
              <input
                type="text"
                placeholder="Weight..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-600"
              />
            </div>

            <div className="flex justify-center">
              <button
                className="px-20 py-2 bg-[#ccff00] text-black rounded-[10px] hover:bg-[#b5e600] transition duration-300 ease-in-out  hover:scale-105"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
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

        @keyframes popupOpen {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes popupClose {
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

        .animate-popup-open {
          animation: popupOpen 0.3s ease-out forwards;
        }

        .animate-popup-close {
          animation: popupClose 0.3s ease-out forwards;
        }
      `}</style>
      </>
  );
};

export default AddItemButton;
