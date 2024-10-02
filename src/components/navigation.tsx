"use client";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const currentPath: string = usePathname();
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  const toggleDropdown = (): void => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = (): void => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeDropdown = (): void => {
    setDropdownOpen(false);
  };

  const closeMobileMenu = (): void => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClickOutside = (event: MouseEvent): void => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      closeDropdown();
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      window.addEventListener('mousedown', handleClickOutside);
    } else {
      window.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const getLinkStyle = (path: string): string => {
    if (path === '/' && currentPath !== '/') {
      return "text-black font-semibold text-[1.25rem]";
    }
    return currentPath.startsWith(path)
      ? "text-black font-bold underline text-[1.25rem]"
      : "text-black font-semibold text-[1.25rem]";
  };

  return (
    <nav
      className={`${
        scrolled ? "bg-[#ccff00]" : "bg-[#ccff00]"
      } px-4 py-2 w-screen flex justify-between items-center transition-colors duration-300 sticky top-0 z-50`}
    >
      <a href="/">
        <div className="flex items-center space-x-2">
          <img src="/image-4.png" alt="Gym Rat Logo" className="w-40 h-15" />
        </div>
      </a>

      <button
        className="block lg:hidden text-black relative w-10 h-10"
        onClick={toggleMobileMenu}
      >
        <span
          className={`block absolute h-[4px] w-8 bg-black transition-transform duration-600 ease-in-out rounded-md ${
            isMobileMenuOpen ? "rotate-45 top-5" : "top-3"
          }`}
        />
        <span
          className={`block absolute h-[4px] w-8 bg-black transition-opacity duration-600 ease-in-out rounded-md ${
            isMobileMenuOpen ? "opacity-0" : "opacity-100 top-5"
          }`}
        />
        <span
          className={`block absolute h-[4px] w-8 bg-black transition-transform duration-600 ease-in-out rounded-md ${
            isMobileMenuOpen ? "-rotate-45 top-5" : "top-7"
          }`}
        />
      </button>

      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } lg:flex flex-col lg:flex-row lg:space-x-8 lg:items-center w-full lg:w-auto absolute lg:static left-0 top-full bg-[#ccff00] lg:bg-transparent lg:space-y-0 space-y-4 lg:p-0 p-6 transition-all duration-300 ease-in-out`}
      >
        <div className="flex flex-col lg:flex-row lg:space-x-8 lg:items-center justify-center lg:justify-between w-full">
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 justify-center items-center lg:items-start">
            <li className="text-center text-black text-[1.25rem] font-bold font-['Inter'] leading-snug">
              <Link href="/" className={getLinkStyle('/')} onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="relative group" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="text-black font-semibold hover:text-black flex items-center space-x-1 text-[1.25rem]"
              >
                Nutrition
                <span
                  className={`fas fa-angle-down ml-2 transition-transform duration-300 ${
                    isDropdownOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                ></span>
              </button>

              <ul
                className={`absolute left-0 bg-[#ccff00] text-black font-semibold space-y-1 transition-all duration-300 ease-in-out transform ${
                  isDropdownOpen
                    ? 'opacity-100 translate-y-0 visible'
                    : 'opacity-0 -translate-y-3 invisible'
                }`}
              >
                <li>
                  <Link
                    href="/nutritional-Insights/food"
                    className="block px-4 py-1 hover:bg-black hover:text-[#ccff00]"
                    onClick={() => {
                      closeDropdown();
                      closeMobileMenu();
                    }}
                  >
                    Food
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-1 hover:bg-black hover:text-[#ccff00]"
                    onClick={() => {
                      closeDropdown();
                      closeMobileMenu();
                    }}
                  >
                    Option 2
                  </Link>
                </li>
              </ul>
            </li>
            <li className="text-center text-black text-[1.25rem] font-bold font-['Inter'] leading-snug">
              <Link href="/gallery" className={getLinkStyle('/gallery')} onClick={closeMobileMenu}>
                Gallery
              </Link>
            </li>
            <li className="text-center text-black text-[1.25rem] font-bold font-['Inter'] leading-snug">
              <Link href="/workouts" className={getLinkStyle('/workouts')} onClick={closeMobileMenu}>
                Workouts
              </Link>
            </li>
          </ul>

          <div className="mt-4 lg:mt-0 flex justify-center items-center lg:justify-start">
            <Link
              href="/login"
              className="w-[5.5rem] h-[2.5rem] px-[1rem] py-[0.5rem] bg-black rounded-[0.625rem] justify-center items-center inline-flex hover:bg-gray-800 hover:scale-105 transition duration-300"
              onClick={closeMobileMenu}
            >
              <span className="text-center text-white text-lg font-bold leading-[1.5rem]">
                Join
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
