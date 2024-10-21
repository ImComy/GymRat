import { useState, useEffect, useRef } from 'react';


interface EventCardProps {
  date?: string;
  year?: string;
  weight?: string;
  height?: string;
  bmi?: string;
  img?:string;
}

const EventCard: React.FC<EventCardProps> = ({
  date = "Nov. 1st",
  year = "2024",
  weight = "60",
  height = "60",
  bmi = "60",
  img = "/flex.png",
}) => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const togglePopup = () => setPopupOpen(!isPopupOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setPopupOpen(false);
      }
    };

    if (isPopupOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPopupOpen]);

  return (
    <>
      <div className="w-[291.20px] h-[294.40px] bg-white relative flex flex-col rounded-[20px] overflow-hidden group hover:scale-105 transition-transform duration-300 ease-in-out">
        <img
          className="w-full h-full object-cover rounded-[20px] absolute top-0 z-1"
          src={img}
          alt="Event"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-[#5b5757]/50 rounded-[20px] transition-all duration-500 ease-in-out group-hover:bg-black" />
        <div className="absolute bottom-3 left-[25%] flex flex-col items-center justify-center transition-all duration-500 ease-in-out group-hover:translate-y-[-210px] group-hover:translate-x-[-60px] group-hover:flex-row-reverse group-hover:items-end group-hover:justify-start group-hover:gap-3">
          <div className="text-white text-[39.71px] font-medium font-[Inter] transition-transform duration-500 ease-in-out group-hover:text-[25px]">
            {date}
          </div>
          <div className="text-white/70 text-[38.40px] font-semibold font-[Inter] ml-0 group-hover:ml-2 transition-all duration-500 ease-in-out">
          {year}
          </div>
        </div>
        <table className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-in-out w-[250px] h-[150px] top-[70px] text-[#d8dee9] text-lg font-medium font-['Inter'] display-block mx-4">
          <tbody>
            <tr>
              <td className="border-b border-[#b6b6b6]">Weight</td>
              <td className="border-b border-[#b6b6b6]">{weight} KG</td>
            </tr>
            <tr>
              <td className="border-b border-[#b6b6b6]">Height</td>
              <td className="border-b border-[#b6b6b6]">{height} cm</td>
            </tr>
            <tr>
              <td className="border-b border-[#b6b6b6]">BMI</td>
              <td className="border-b border-[#b6b6b6]">{bmi}</td>
            </tr>
          </tbody>
        </table>
        <div className="group-hover:opacity-100 opacity-0 transition-opacity duration-300 ease-in-out flex items-center justify-center mt-6 absolute bottom-3 left-0 right-0">
          <button
            onClick={togglePopup}
            className="w-auto px-6 py-2 bg-black rounded-lg hover:bg-gray-800 transition-all duration-500 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
          >
            <span className="text-white text-sm font-medium">Expand Photo</span>
          </button>
        </div>
      </div>

      {isPopupOpen && <Popup popupRef={popupRef} onClose={togglePopup} date={date} year={year} weight={weight} height={height} bmi={bmi} img={img}/>}
    </>
  );
};

interface PopupProps {
  onClose: () => void;
  popupRef: React.RefObject<HTMLDivElement>;
  date?: string;
  year?: string;
  weight?: string;
  height?: string;
  bmi?: string;
  img?: string;
}

const Popup: React.FC<PopupProps> = ({
  onClose,
  popupRef,
  date,
  year,
  weight,
  height,
  bmi,
  img,
}) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  useEffect(() => {
    setIsClosing(false);
  }, []);

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 ${isClosing ? "animate-fade-out" : "animate-fade-in"}`}>
      <div
        ref={popupRef}
        className={`bg-white rounded-xl shadow-2xl flex flex-col sm:flex-col md:flex-row lg:flex-row w-[90%] sm:w-[100%] max-w-4xl md:w-[80%] lg:w-[60%] max-h-[80vh] relative ${isClosing ? "animate-popup-close" : "animate-popup-open"}`}>
        <div className="w-full md:w-1/2 h-[150px] sm:h-[200px] md:h-auto lg:h-auto bg-gray-100 relative group rounded-tl-xl rounded-bl-xl border-r-0 md:border-r-[10px] border-dashed border-[#ccff00]">
          <a href={img} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
            <img
              src={img}
              alt="Expanded Event"
              className="object-cover w-full h-full rounded-t-xl md:rounded-tl-xl md:rounded-bl-xl md:rounded-tr-none"/>
          </a>

          <a href="/flex.png" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center text-white text-lg font-bold rounded-tl-xl rounded-bl-xl">
              Click to view full size
            </div>
          </a>

          <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white text-sm px-4 py-1 rounded-full">
          {date}, {year}
          </div>
        </div>

        <button
          className="absolute top-0 right-[-8px] text-2xl text-gray-500 hover:text-gray-800 transition duration-200 bg-white rounded-full px-2 hover:bg-red-500 z-10"
          onClick={handleClose}
        >
          &times;
        </button>

        <div className="w-full md:w-1/2 p-6 relative flex flex-col overflow-y-auto">
          <h2 className="text-2xl font-bold text-[#ccff00] mb-4">
            Event Details
          </h2>

          <table className="w-full text-left text-gray-700 mb-4">
            <tbody>
              <tr className="hover:bg-gray-100 transition-colors">
                <td className="border-b border-gray-300 py-3 font-bold text-lg text-gray-800">
                  Weight
                </td>
                <td className="border-b border-gray-300 py-3 text-lg text-gray-500">
                  {weight} KG
                </td>
              </tr>
              <tr className="hover:bg-gray-100 transition-colors">
                <td className="border-b border-gray-300 py-3 font-bold text-lg text-gray-800">
                  Height
                </td>
                <td className="border-b border-gray-300 py-3 text-lg text-gray-500">
                  {height} CM
                </td>
              </tr>
              <tr className="hover:bg-gray-100 transition-colors">
                <td className="border-b border-gray-300 py-3 font-bold text-lg text-gray-800">
                  BMI
                </td>
                <td className="border-b border-gray-300 py-3 text-lg text-gray-500">
                  {bmi}
                </td>
              </tr>
            </tbody>
          </table>

          <div className="mt-4">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Notes</h3>
            <textarea
              className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ccff00] resize-none"
              placeholder="Write your notes here..."
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
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
    </div>
  );
};



export default EventCard;
