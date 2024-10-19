import { useState, useEffect, useRef } from 'react';

const EventCard = () => {
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
          src="/flex.png"
          alt="Event"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-[#5b5757]/50 rounded-[20px] transition-all duration-500 ease-in-out group-hover:bg-black" />
        <div className="absolute bottom-3 left-[25%] flex flex-col items-center justify-center transition-all duration-500 ease-in-out group-hover:translate-y-[-225px] group-hover:translate-x-[-60px] group-hover:flex-row-reverse group-hover:items-end group-hover:justify-start group-hover:gap-3">
          <div className="text-white text-[39.71px] font-medium font-[Inter] transition-transform duration-500 ease-in-out group-hover:text-[30px]">
            Nov. 1st
          </div>
          <div className="text-white/70 text-[38.40px] font-semibold font-[Inter] ml-0 group-hover:ml-2 transition-all duration-500 ease-in-out">
            2024
          </div>
        </div>
        <table className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-in-out w-[250px] h-[170px] top-[53px] text-[#d8dee9] text-lg font-medium font-['Inter'] display-block mx-4">
          <tbody>
            <tr>
              <td className="border-b border-[#b6b6b6]">Weight</td>
              <td className="border-b border-[#b6b6b6]">60 KG</td>
            </tr>
            <tr>
              <td className="border-b border-[#b6b6b6]">Height</td>
              <td className="border-b border-[#b6b6b6]">60 cm</td>
            </tr>
            <tr>
              <td className="border-b border-[#b6b6b6]">BMI</td>
              <td className="border-b border-[#b6b6b6]">60</td>
            </tr>
            <tr>
              <td className="border-b border-[#b6b6b6]">BMR</td>
              <td className="border-b border-[#b6b6b6]">60</td>
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

      {isPopupOpen && <Popup popupRef={popupRef} onClose={togglePopup} />}
    </>
  );
};

interface PopupProps {
  onClose: () => void;
  popupRef: React.RefObject<HTMLDivElement>;
}

const Popup: React.FC<PopupProps> = ({ onClose, popupRef }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div ref={popupRef} className="bg-white rounded-xl shadow-2xl flex w-[90%] max-w-4xl md:w-[80%] lg:w-[60%] max-h-[80vh] relative">
        <div className="w-1/2 bg-gray-100 relative group rounded-tl-xl rounded-bl-xl border-r-[10px] border-dashed border-[#ccff00]">
          <a href="/flex.png" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
            <img
              src="/flex.png"
              alt="Expanded Event"
              className="object-cover w-full h-full rounded-tl-xl rounded-bl-xl"
            />
          </a>

          <a href="/flex.png" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center text-white text-lg font-bold rounded-tl-xl rounded-bl-xl">
              Click to view full size
            </div>
          </a>
        </div>

        <button
          className="absolute top-0 right-[-8px] text-2xl text-gray-500 hover:text-gray-800 transition duration-200 bg-white rounded-full px-2 hover:bg-red-500 z-10"
          onClick={onClose}
        >
          &times;
        </button>

        <div className="w-1/2 p-6 relative flex flex-col overflow-y-auto">
          <h2 className="text-2xl font-bold text-[#ccff00] mb-4">
            Event Details
          </h2>

          <table className="w-full text-left text-gray-700">
            <tbody>
              {[
                { label: "Weight", value: "60 KG" },
                { label: "Height", value: "60 cm" },
                { label: "BMI", value: "60" },
                { label: "BMR", value: "60" },
              ].map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-100 transition-colors">
                  <td className="border-b border-gray-300 py-3 font-bold text-lg text-gray-800">
                    {item.label}
                  </td>
                  <td className="border-b border-gray-300 py-3 text-lg text-gray-500">
                    {item.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
