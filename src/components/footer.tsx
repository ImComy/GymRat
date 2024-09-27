'use client';

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-10 w-screen">
      <div className="flex justify-center sm:justify-start sm:ml-8 lg:ml-[70px]">
        <div className="flex flex-col items-center sm:items-start">
          <div className="flex items-center space-x-3 mb-4 border-b-2 border-gray-500">
            <Image src="/172677766315641523.png" alt="Gym Rat Logo" width={250} height={80} className="pb-5 px-3"/>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:flex-wrap mb-8 lg:mt-8 lg:ml-10">
          <div className="flex flex-col md:flex-row justify-between lg:gap-[150px] md:gap-20 w-full lg:w-auto items-center sm:items-start text-center sm:text-left">
            <div className="flex flex-col mb-6 lg:mb-0">
              <h3 className="text-[#92989e] text-[20.89px] font-extrabold font-['Cairo'] leading-[25.07px] tracking-tight">Company</h3>
              <ul className="mt-4 space-y-1 text-sm">
                {["About Us", "Our Services", "Social Responsibility", "Find Us", "News", "Gallery"].map((link, index) => (
                  <li key={index} className="text-white text-base font-normal font-['Cairo'] lg:leading-[38.78px] tracking-tight cursor-pointer hover:underline active:text-[#ccff00]">
                    <Link href="#">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col mb-6 lg:mb-0">
              <h3 className="text-[#92989e] text-[20.89px] font-extrabold font-['Cairo'] leading-[25.07px] tracking-tight">Hot Links</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {["Sell Your Vehicle", "Our Fleet", "Request Plate", "Request Package", "Request #Tag"].map((link, index) => (
                  <li key={index + 6} className="text-white text-base font-normal font-['Cairo'] lg:leading-[38.78px] tracking-tight cursor-pointer hover:underline active:text-[#ccff00]">
                    <Link href="#">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col mb-6 lg:mb-0">
              <h3 className="text-[#92989e] text-[20.89px] font-extrabold font-['Cairo'] leading-[25.07px] tracking-tight">Help</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {["Help", "FAQ", "Contact Us", "Help Articles"].map((link, index) => (
                  <li key={index + 12} className="text-white text-base font-normal font-['Cairo'] lg:leading-[38.78px] tracking-tight cursor-pointer hover:underline active:text-[#ccff00]">
                    <Link href="#">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex-1 md:ml-0 lg:ml-[20%] flex justify-center lg:justify-start">
            <div className="text-center md:text-left">
              <h3 className="text-[#92989e] text-[20.89px] font-extrabold font-['Cairo'] leading-[25.07px] tracking-tight">Download our App</h3>
              <div className="flex items-center">
                <Image src="/An-example-of-QR-code.png" alt="QR Code" width={150} height={200} className="py-5"/>
                <div className="ml-2 flex flex-col space-y-1">
                  {["/Google Play Black.svg", "/App Store Black.svg", "/App Gallery Black.svg"].map((src, index) => (
                    <Link key={index} href="#">
                      <Image src={src} alt={`Store ${index}`} width={120} height={40} className="cursor-pointer"/>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center flex-wrap">
            <div className="flex space-x-4 mb-4 md:mb-0 justify-center">
              <div className="text-center text-[#92989f] text-[20.89px] font-bold font-['Cairo'] tracking-tight">Contact us :</div>
              <Link href="#" className="text-gray-400 hover:text-white text-[20px]"><i className="nf nf-fa-facebook_f"></i></Link>
              <Link href="#" className="text-gray-400 hover:text-white text-[20px]"><i className="fab fa-instagram"></i></Link>
              <Link href="#" className="text-gray-400 hover:text-white text-[20px]"><i className="fab fa-whatsapp"></i></Link>
              <Link href="#" className="text-gray-400 hover:text-white text-[20px]"><i>𝕏</i></Link>
            </div>
            <p className="text-gray-400 text-sm text-center md:text-left">© 2023-2024 Gym Rat Fitness All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
