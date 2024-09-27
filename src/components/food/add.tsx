import React, { useState } from 'react';
import { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { createMeal } from '../../app/mealSlice';

interface Meal {
  _id: string;
  title: string;
  image: string;
  protein: string;
  fats: string;
  calories: string;
  carbs: string;
  isAdded: boolean;
  src: string;
}


const Addcard = () => {
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [protein, setProtein] = useState<number | ''>('');
  const [fats, setFats] = useState<number | ''>('');
  const [calories, setCalories] = useState<number | ''>('');
  const [carbs, setCarbs] = useState<number | ''>('');

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

  const handleOutsideClick = (event: MouseEvent) => {
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

  const handleAddMeal = () => {
    if (!name || protein === '' || fats === '' || calories === '' || carbs === '') {
      alert('Please fill in all fields.');
      return;
    }

  const newMeal: Meal = {
    _id: Date.now().toString(),
    title: name,
    image: imagePreview || '',
    src: imagePreview || '',
    protein: protein.toString(),
    fats: fats.toString(),
    calories: calories.toString(),
    carbs: carbs.toString(),
    isAdded: false,
  };

    dispatch(createMeal(newMeal));
    handleClosePopup();
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setImagePreview(null);
    setProtein('');
    setFats('');
    setCalories('');
    setCarbs('');
  };

  return (
    <main>
      <button
        className="w-[276px] h-[321px] bg-white rounded-[5px] shadow flex flex-col justify-center items-center transition duration-300 ease-in-out hover:scale-105 group"
        onClick={handleButtonClick}
      >
        <div className="w-[143px] h-[143px] bg-white rounded-full mb-4 flex justify-center items-center">
          <span className="nf nf-md-plus_outline text-5xl text-black/50 group-hover:text-[#ccff00] transition duration-300 ease-in-out" />
        </div>
        <div className="text-center text-black/50 text-3xl font-medium font-['Inter'] leading-7 group-hover:text-[#ccff00] transition duration-300 ease-in-out">
          Add
        </div>
      </button>

      {showPopup && (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center z-10 ${
            isClosing ? 'animate-fade-out' : 'animate-fade-in'
          }`}
          onClick={handleOutsideClick}
        >
          <div className={`relative w-[350px] bg-white rounded-lg shadow-lg p-6 popup transition-all duration-300 ease-out mt-14 ${isClosing ? 'animate-popup-close' : 'animate-popup-open'}`}>
            <button
              className="absolute top-0 right-[-10px] text-2xl text-gray-500 hover:text-gray-800 transition duration-200 bg-white rounded-[100%] px-2 hover:bg-red-500"
              onClick={handleClosePopup}
            >
              &times;
            </button>
            <div className="w-full h-[60px] bg-gradient-to-r from-[#ccff00] to-[#bfff00] rounded-t-lg flex items-center justify-center relative mb-5">
              <span className="text-center text-black text-2xl font-extrabold">Add a New Meal</span>
            </div>
            <label
              className="w-full h-[120px] bg-gradient-to-tr from-gray-200 to-gray-200 rounded-lg flex justify-center items-center mb-4 flex-col gap-3 transition-bg duration-500 ease-in-out cursor-pointer relative overflow-hidden hover:scale-105 z-[1]"
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

            <div className="mb-4">
              <input
                type="text"
                placeholder="Name..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-600"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-6">
              <div className="flex flex-col">
                <label>Protein (g)</label>
                <input
                  type="number"
                  className="w-full px-2 py-1 border border-gray-300 rounded-md"
                  value={protein}
                  onChange={(e) => setProtein(Number(e.target.value))}
                />
              </div>
              <div className="flex flex-col">
                <label>Fats (g)</label>
                <input
                  type="number"
                  className="w-full px-2 py-1 border border-gray-300 rounded-md"
                  value={fats}
                  onChange={(e) => setFats(Number(e.target.value))}
                />
              </div>
              <div className="flex flex-col">
                <label>Calories (kcal)</label>
                <input
                  type="number"
                  className="w-full px-2 py-1 border border-gray-300 rounded-md"
                  value={calories}
                  onChange={(e) => setCalories(Number(e.target.value))}
                />
              </div>
              <div className="flex flex-col">
                <label>Carbs (g)</label>
                <input
                  type="number"
                  className="w-full px-2 py-1 border border-gray-300 rounded-md"
                  value={carbs}
                  onChange={(e) => setCarbs(Number(e.target.value))}
                />
              </div>
            </div>

            <div className="flex justify-center">
              <button
                onClick={handleAddMeal}
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
    </main>
  );
};

export default Addcard;
