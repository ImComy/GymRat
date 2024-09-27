import React from 'react';

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  viewMoreLink?: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description, viewMoreLink }) => {
  return (
    <div className={`inner-content`}>
      <div className="card-container relative w-[272px] h-[317px] rounded-[20px] overflow-hidden group bg-black">
        <div className="w-full h-[220px] absolute top-0 bg-[#ccff00] transition-transform duration-500 ease-in-out group-hover:translate-y-[-250px] z-1"></div>
        <div className="card-content absolute inset-0 flex flex-col justify-center items-center transition-transform duration-500 ease-in-out group-hover:translate-y-[-200px]">
          <img
            className="w-[258px] h-[135px] absolute left-[8px] top-[51px] transition-transform duration-500 ease-in-out group-hover:translate-y-[-100px] z-2"
            src={imageSrc}
            alt={title}
          />
          <div className="text-center text-white text-xl font-bold font-['Inter'] leading-[18px] absolute top-[260px] transition-transform duration-500 ease-in-out group-hover:translate-y-[8px]">
            {title}
          </div>
        </div>
        <div className="hover-content absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <div className="w-[177px] h-[158px] left-[56px] top-[107px] absolute text-[#b5b5b5] text-[15px] font-medium font-['Inter'] leading-[13.50px] translate-y-[100px] group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
            {description}
          </div>
          {viewMoreLink && (
            <div className="transition duration-300 ease-in-out hover:scale-105 ">
            <div className="cursor-pointer w-[182px] h-[34.41px] px-[24.05px] py-[9.95px] mt-[200px] bg-[#ccff00] rounded-xl justify-between items-center translate-y-[100px] group-hover:translate-y-0 transition-transform duration-500 ease-in-out ">
              <div className="text-black text-base font-extrabold font-['Inter'] leading-[13.99px] ">
                View More <span className="nf nf-fa-angle_right ml-[20px]"></span>
              </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
