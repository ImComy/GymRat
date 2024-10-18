const EventCard = () => {
  return (
    <div className="w-[291.20px] h-[294.40px] bg-white relative flex flex-col rounded-[20px] overflow-hidden group hover:scale-105 transition-transform duration-300 ease-in-out">
      <img
        className="w-full h-full object-cover rounded-[20px] absolute top-0 z-1"
        src="/flex.png" // Ensure the path to the image is correct
        alt="Event"
      />
      {/* Semi-transparent gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-[#5b5757]/50 rounded-[20px]" />

      {/* Content */}
      <div className="absolute bottom-3 left-[25%] flex flex-col items-center justify-center transition-all duration-500 ease-in-out  group-hover:translate-y-[-150px] group-hover:translate-x-[-50px] group-hover:flex-row group-hover:items-start group-hover:justify-start">
        <div className="text-white text-[39.71px] font-medium font-[Inter] transition-transform duration-500 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0">
          Nov. 1st
        </div>

        <div className="text-white/70 text-[38.40px] font-semibold font-[Inter] ml-0 group-hover:ml-2 transition-all duration-500 ease-in-out">
          2024
        </div>
      </div>
    </div>
  );
};

export default EventCard;
