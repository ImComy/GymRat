"use client";

import { useEffect, useState, useRef, RefObject } from "react";
import './globals.css';
import Card from '../components/homecard';
import ReactDOM from 'react-dom/client';

export default function Home() {
  const [animateHeader, setAnimateHeader] = useState<boolean>(false);
  const [animateSection, setAnimateSection] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [animateSection2, setAnimateSection2] = useState<boolean>(false);
  const sectionRef2 = useRef<HTMLDivElement | null>(null);
  const [animateSection3, setAnimateSection3] = useState<boolean>(false);
  const sectionRef3 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const createObserver = (
      ref: React.RefObject<HTMLDivElement | null>,
      setAnimateState: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
      const observer = new IntersectionObserver(
        (entries: IntersectionObserverEntry[]) => {
          entries.forEach((entry: IntersectionObserverEntry) => {
            if (entry.isIntersecting) {
              setAnimateState(true);
              observer.disconnect();
            }
          });
        },
        { threshold: 0.2 }
      );
      if (ref.current) {
        observer.observe(ref.current);
      }
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    };

    setAnimateHeader(true);
    const sectionObserver = createObserver(sectionRef, setAnimateSection);
    const sectionObserver2 = createObserver(sectionRef2, setAnimateSection2);
    const sectionObserver3 = createObserver(sectionRef3, setAnimateSection3);

    return () => {
      sectionObserver();
      sectionObserver2();
      sectionObserver3();
    };
  }, []);

  interface SectionProps {
    itemCount: number;
    withMarginLeft: boolean;
  }

  const Section: React.FC<SectionProps> = ({ itemCount, withMarginLeft }) => (
    <div className={`w-[1675.30px] z-[-1] flex items-center justify-center ${withMarginLeft ? 'ml-[220px]' : ''}`}>
      {Array(itemCount).fill(null).map((_, index) => (
        <div
          key={index}
          className="w-[875.30px] h-20 origin-top-left rotate-[-46.14deg] bg-[#ccff00]/10 rounded-[40px]"
        />
      ))}
    </div>
  );


  return (
    <main className="w-screen min-h-screen relative">
      <header
        className={`relative w-screen h-screen bg-cover bg-center invisible ${
          animateHeader ? "fade-in" : ""
        }`}
        style={{
          backgroundImage: `url('daniel-apodaca-WdoQio6HPVA-unsplash.jpg')`,
        }}
      >
        <div
          className={`pl-8 pt-20 md:pl-[88px] md:pt-[100px] text-left ${
            animateHeader ? "slide-up" : ""
          }`}
        >
          <h1 className="text-white text-5xl md:text-8xl font-black font-['Inter'] leading-tight md:leading-[6rem] lg:leading-[86.40px]">
            UNLEASH<br />YOUR<br />POTENTIAL
          </h1>
          <div className="text-white text-sm md:text-[15px] sm:text-[15px] font-medium font-['Inter'] mt-4">
            <p className="leading-5 md:leading-[16.5px]">
              with <strong>GymRat!</strong> Track your sets, monitor your food nutrition, and upload<br />
              photos of yourself to visually track your progress. Whether you're just starting out or looking<br />
              to push your limits, GymRat is designed to help you achieve your fitness goals.<br />
              Our tools make it easy to manage your workouts and stay on top of your nutrition, ensuring<br />
              you stay motivated and on track for success. Join us and start transforming your fitness journey today!
            </p>
          </div>
        </div>
      </header>

      <section
        ref={sectionRef}
        className={`bg-white w-screen h-auto relative flex flex-col md:flex-row center overflow-hidden items-center sm:items-center`}
      >
        <div
          className={`flex flex-col items-center gap-6 p-10 md:p-20 invisible z-[2] ${
            animateSection ? "slide-up" : ""
          }`}
        >
          <div className="lg:ml-[-130px] md:ml-[-130px]">
            <span className="text-black text-[50px] sm:text-6xl font-black leading-tight md:leading-[72px] ">
              Track your <br/>
            </span>
            <span className="text-[#ccff00] text-[50px] sm:text-7xl font-black leading-tight md:leading-[72px]">
              Workouts
            </span>
          </div>

          <div className="mr-[-20px] sm:mr-[0px]">
            <span className="text-[#515151] text-lg sm:text-xl md:text-[22px] font-medium leading-relaxed tracking-wide">
              At the press of a button, you can get your
            </span>
            <span className="text-[#515151] text-lg sm:text-xl md:text-[22px] font-extrabold leading-relaxed ">
              &nbsp;entire workout history
            </span>
            <span className="text-[#515151] text-lg sm:text-xl md:text-[22px] font-medium leading-relaxed tracking-wide">
              &nbsp;including <br/>Weights, Sets and Reps
            </span>
          </div>

          <a href="./workouts">
            <div className="transition duration-300 ease-in-out hover:scale-105 mt-20 invisible md:visible">
              <button
                className={`w-full sm:w-[350px] md:w-[439px] h-[55px] sm:h-[75px] md:h-[83px] px-[35px] sm:px-[45px] md:px-[58px] py-4 sm:py-5 md:py-6 bg-[#ccff00] rounded-[22px] sm:rounded-[26px] md:rounded-[28.13px] justify-between items-center inline-flex text-[24px] sm:text-[32px] md:text-[37.51px] text-black font-extrabold hover:bg-black hover:text-white ${animateSection ? "slide-in-left" : ""}`}>
                START NOW <span className="nf nf-fa-angle_right"></span>
              </button>
           </div>
         </a>


        </div>

        <div className="z-[1] w-screen ">
          <div className="absolute top-[-40%] right-[120%] sm:top-[-30%] sm:right-[58.5%] md:right-[58.5%] lg:right-[50%] xl:right-[40%] 2xl:right-[30%]">

            <svg width="850" height="710" viewBox="0 0 979 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-[-20px] left-[-50px]">
            <path d="M1138 21.0454C1081.45 6.36947 943.178 -11.4813 842.475 34.5234C716.595 92.0292 615.308 347.661 471.505 351.255C423.015 410.258 296.941 528.894 180.565 531.41C35.0951 534.555 64.2725 652.262 3 690" stroke="#CCFF00" strokeWidth="9"/>
            </svg>

            <svg width="800" height="650" viewBox="0 0 935 548" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-10">
            <path d="M1138 21.0454C1081.45 6.36947 943.178 -11.4813 842.475 34.5234C716.595 92.0292 615.308 347.661 471.505 351.255C423.015 410.258 296.941 528.894 180.565 531.41C35.0951 534.555 64.2725 652.262 3 690" stroke="#CCFF00" strokeWidth="9"/>
            </svg>

            <svg width="800" height="650" viewBox="0 0 907 486" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-20">
            <path d="M1138 21.0454C1081.45 6.36947 943.178 -11.4813 842.475 34.5234C716.595 92.0292 615.308 347.661 471.505 351.255C423.015 410.258 296.941 528.894 180.565 531.41C35.0951 534.555 64.2725 652.262 3 690" stroke="#CCFF00" strokeWidth="9"/>
            </svg>
          </div>

          <picture className="hidden sm:hidden md:hidden lg:block">
            <div className={`bottom-5 right-[20%] md:right-[30%] absolute invisible ${animateSection ? "slide-in-right-1" : ""}`}>
              <img
                src="maxresdefault.png"
                alt="leg"
                className={`rounded-[13.87px] w-40 md:w-auto ansition-all duration-300 ease-in-out hover-slide`}
              />
            </div>
            <div className={`bottom-20 right-[10%] md:right-[20%] absolute invisible ${animateSection ? "slide-in-right-1" : ""}`}>
              <img
                src="bodybuilders-back-barbend.com-1.png"
                alt="back"
                className={` rounded-[13.87px] w-40 md:w-auto ansition-all duration-300 ease-in-out hover-slide`}
              />
            </div>
            <div className={` top-20 right-[5%] md:right-[10%] absolute invisible ${animateSection ? "slide-in-right-1" : ""}`}>
              <img
                src="man-in-sportswear-lies-on-the-gym-bench-and-workout-royalty-free-image-1678124106.png"
                alt="chest"
                className={` rounded-[13.87px] w-40 md:w-auto ansition-all duration-300 ease-in-out hover-slide`}
              />
            </div>
         </picture>
        </div>
      </section>

      <section ref={sectionRef2} className="relative z-2 p-10 bg-black/30 flex flex-col flex-no-wrap items-center gap-20 overflow-hidden w-screen h-full">
        <div className="absolute top-20 z-[-1] flex flex-col gap-[200px] flex-no-wrap mr-[200px]">
          <Section itemCount={4} withMarginLeft={true} />
          <Section itemCount={5} withMarginLeft={false} />
          <Section itemCount={5} withMarginLeft={false} />
          <Section itemCount={4} withMarginLeft={true} />
          <Section itemCount={5} withMarginLeft={false} />
          <Section itemCount={5} withMarginLeft={false} />
          <Section itemCount={4} withMarginLeft={true} />
          <Section itemCount={5} withMarginLeft={false} />
        </div>

        <div className={`flex flex-col items-center gap-4 invisible invisible ${animateSection2 ? "fade-in" : ""}`}>
          <p className="text-center text-[#ccff00] text-4xl md:text-[64px] font-bold font-['Inter'] leading-tight md:leading-[57.60px]">
            Nutritional Insights
          </p>
          <p className="w-full md:w-[634px] text-white text-lg md:text-xl font-medium font-['Roboto'] leading-5 text-center">
            Nourish your body with whole foods every day, avoiding processed snacks that drain your energy. Make mindful choices to fuel your well-being naturally, and cultivate a healthier relationship with food.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-20">
          <div className={`inner-content invisible ${animateSection2 ? "slide-in-left-1" : ""}`}>
            <Card
              imageSrc="toppng.com-6-best-supplements-for-gaining-muscles-supplements-for-gym-workout-601x314 1.png"
              title="Best Gym Supplements"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut odio orci, vulputate in metus id, euismod congue arcu. Quisque hendrerit facilisis."
              viewMoreLink="/"
            />
            </div>
            <div className={`inner-content invisible ${animateSection2 ? "slide-in-left-3" : ""}`}>
            <Card
              imageSrc="https://via.placeholder.com/258x135"
              title="Your Stats"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut odio orci, vulputate in metus id, euismod congue arcu. Quisque hendrerit facilisis."
              viewMoreLink="/"
            />
            </div>
            <div className={`inner-content invisible ${animateSection2 ? "slide-in-left-3" : ""}`}>
              <Card
                imageSrc="pngwing.com 1.png"
                title="Best Food"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut odio orci, vulputate in metus id, euismod congue arcu. Quisque hendrerit facilisis."
                viewMoreLink="/"
              />
           </div>
        </div>
      </section>

     <section
        ref={sectionRef3}
        className={`bg-white w-screen h-[550px] relative flex flex-col md:flex-row center overflow-hidden`}
      >
        <div
          className={`flex flex-col items-center gap-2 p-10 md:p-20 z-[4] invisible mt-10 ${animateSection3 ? "slide-up" : ""}`}>
          <div>
            <h1 className="text-center lg:text-left text-black text-[80px] font-bold font-['Roboto'] leading-[90px]">
              Your Gallery
            </h1>
          </div>
          <div className=" text-[#3a3a3a] text-sm sm:text-xl font-medium font-['Roboto'] leading-[18px] whitespace-nowrap mt-3 sm-mt-0">
            Track your true progress by taking progress photos <br/> and inputing your body weight.
          </div>
          <div className="transition duration-300 ease-in-out hover:scale-105 mt-20 invisible md:visible">
            <button
              className={`w-full sm:w-[350px] md:w-[439px] h-[60px] sm:h-[70px] md:h-[83px] px-[30px] sm:px-[45px] md:px-[58px] py-4 sm:py-5 md:py-6 bg-black rounded-[20px] sm:rounded-[25px] md:rounded-[28.13px] justify-between items-center inline-flex text-[22px] sm:text-[30px] md:text-[37.51px] font-extrabold text-white hover:bg-[#ccff00] hover:text-black transition duration-300 ease-in-out hover:scale-105 invisible mt-10 p-5 sm:p-0 ${animateSection3 ? "slide-in-left" : ""}`}>
              Upload NOW <span className="nf nf-fa-angle_right"></span>
            </button>
          </div>
        </div>

        <div className="z-1 w-screen ">
          <div className="absolute top-0 right-20 sm:top-0 sm:right-20 md:top-auto md:right-auto">
            <svg width="1305" height="584" viewBox="0 0 1005 584" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute sm:block right-[-800px]">
              <path d="M1003 -1.31488C933.398 -17.4906 763.206 -37.1655 639.257 13.5404C484.319 76.9227 359.651 358.677 182.654 362.638C122.97 427.671 -32.2062 558.43 -175.446 561.203C-354.496 564.67 -318.584 694.405 -394 736" stroke="#CCFF00" strokeWidth="9"/>
            </svg>
            <svg width="1191" height="584" viewBox="0 0 1191 584" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-[-900px]">
              <path d="M1212.28 1000.58C1222.72 928.375 1221.69 756.118 1134.12 644.769C1024.66 505.582 628.495 443.633 594.827 269.785C498.431 224.978 298.972 100.167 272.303 -40.6178C238.966 -216.599 71.5127 -153.015 3.88693 -218.435" stroke="#CCFF00" strokeWidth="9" />
            </svg>
            <svg width="415" height="784" viewBox="0 0 415 584" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-[400px]">
              <path d="M853.013 1359.16C881.934 1292.17 925.908 1125.62 870.434 995.276C801.091 832.344 434.829 669.143 447.702 492.533C366.342 424.12 206.372 251.576 217.372 108.71C231.123 -69.8725 52.8778 -52.1973 4.67066 -133" stroke="#CCFF00" strokeWidth="9"/>
            </svg>
          </div>
          <picture className="hidden sm:hidden md:hidden lg:block">
            <div className={`bottom-[100px] right-[30%] absolute z-[1] invisible ${animateSection3 ? "slide-in-right-1" : ""}`}>
              <img
                src="um60gfh0 1.png"
                alt="pfp"
                className={`max-w-60 rounded-[13.87px] transition-all duration-300 ease-in-out hover-slide`}
              />
            </div>
            <div className={` top-20 right-[10%] md:right-[20%] absolute z-[2] invisible ${animateSection3 ? "slide-in-right-2" : ""}`}>
              <img
                src="um60gfh0 1.png"
                alt="pfp"
                className={`max-w-60 rounded-[13.87px] transition-all duration-300 ease-in-out hover-slide`}
              />
            </div>
            <div className={` bottom-[100px] right-[10%] absolute z-[1]  invisible ${animateSection3 ? "slide-in-right-3" : ""}`}>
              <img
                src="um60gfh0 1.png"
                alt="pfp"
                className={`max-w-60 rounded-[13.87px]  transition-all duration-300 ease-in-out hover-slide `}
              />
            </div>
          </picture>
        </div>
      </section>

      <style jsx>{`
        .slide-in-right-1 {
          animation: slideInRight 1s ease-in-out forwards;
          animation-delay: 0.6s;
        }
        .slide-in-right-2 {
          animation: slideInRight 1s ease-in-out forwards;
          animation-delay: 0.6s;
        }
        .slide-in-right-3 {
          animation: slideInRight 1s ease-in-out forwards;
          animation-delay: 0.6s;
        }
        .slide-in-left-1 {
          animation: slideInLeft 1s ease-in-out forwards;
          animation-delay: 0.6s;
        }
        .slide-in-left-2 {
          animation: slideInLeft 1s ease-in-out forwards;
          animation-delay: 0.6s;
        }
        .slide-in-left-3 {
          animation: slideInLeft 1s ease-in-out forwards;
          animation-delay: 0.6s;
        }
        .hover-effect {
          transition: transform 0.3s ease-in-out;
        }
        .hover-effect:hover {
          transform: scale(1.05) rotate(3deg) translateY(-10px);
        }
        .fade-in {
          animation: fadeIn 1s ease-in-out forwards;
        }
        .slide-up {
          animation: slideUp 1s ease-out forwards;
        }
        .slide-in-right {
          animation: slideInRight 1s ease-in-out forwards;
        }
        .slide-in-left {
          animation: slideInLeft 1s ease-in-out forwards;
          animation-delay: 0.6s;
        }
        @keyframes hover-slide-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-10px);
          }
        }
        @keyframes hover-slide-back {
          0% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .hover-slide {
          animation: hover-slide-back 0.3s forwards;
        }
        .hover-slide:hover {
          animation: hover-slide-up 0.3s forwards;
        }
        .fade-in, .slide-up, .slide-in-left, .slide-in-right-1, .slide-in-right-2, .slide-in-right-3, .slide-in-left-1, .slide-in-left-2, .slide-in-left-3 {
          visibility: hidden;
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
            visibility: hidden;
          }
          100% {
            opacity: 1;
            visibility: visible;
          }
        }
        @keyframes slideUp {
          0% {
            transform: translateY(50px);
            opacity: 0;
            visibility: hidden;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }
        }
        @keyframes slideInLeft {
          0% {
            transform: translateX(-100px);
            opacity: 0;
            visibility: hidden;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
            visibility: visible;
          }
        }
        @keyframes slideInRight {
          0% {
            transform: translateX(100px);
            opacity: 0;
            visibility: hidden;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
            visibility: visible;
          }
        }
      `}</style>
    </main>
  );
}
