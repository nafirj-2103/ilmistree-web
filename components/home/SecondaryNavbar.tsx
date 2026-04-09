'use client'

import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export function SecondaryNavbar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsVisible(false);
        return;
      }

      const heroElement = document.getElementById('hero');
      if (heroElement) {
        const heroMidpoint = heroElement.offsetHeight / 2;
        setIsVisible(window.scrollY > heroMidpoint);
      }
    };

    // initialize visibility on mount
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [isNotesOpen, setIsNotesOpen] = useState(false);

  return (
    <nav className={`w-full bg-gray-700 border-b border-gray-600 fixed top-[73px] z-40 transition-transform duration-300 ${isVisible ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'}`} suppressHydrationWarning>
      <div className="max-w-7xl mx-auto px-20 h-[20px] flex items-center gap-8">
             
      {/* Past Papers */}
        <div className="relative group">
          <button className="flex items-center gap-2 text-white hover:text-[#D32F2F] transition-colors  mt-[-0px]">
            TextBooks
            <ChevronDown className="w-4 h-4" />
          </button>
          
          {/* Dropdown for Past Papers */}
          <ul className="absolute top-full left-0 hidden group-hover:block bg-gray-800 border border-gray-600 rounded-sm shadow-lg min-w-[200px] py-2 z-50 mt-[-2px] ">
          <li>
              <button className="w-full text-left px-4 py-2 text-white hover:bg-[#D32F2F] hover:text-white transition-colors font-medium">
                Mathematics
              </button>
            </li>
            <li>
              <button className="w-full text-left px-4 py-2 text-white hover:bg-[#D32F2F] hover:text-white transition-colors font-medium">
                Physics
              </button>
            </li>
            <li>
              <button className="w-full text-left px-4 py-2 text-white hover:bg-[#D32F2F] hover:text-white transition-colors font-medium">
                Chemistry
              </button>
            </li>
            <li>
              <button className="w-full text-left px-4 py-2 text-white hover:bg-[#D32F2F] hover:text-white transition-colors font-medium">
                Biology
              </button>
            </li>
            <li>
              <button className="w-full text-left px-4 py-2 text-white hover:bg-[#D32F2F] hover:text-white transition-colors font-medium">
                English
              </button>
            </li>
          </ul>
        </div>




        {/* Past Papers */}
        <div className="relative group">
          <button className="flex items-center gap-2 text-white hover:text-[#D32F2F] transition-colors  mt-[-0px]">
            PAST PAPERS
            <ChevronDown className="w-4 h-4" />
          </button>
          
          {/* Dropdown for Past Papers */}
          <ul className="absolute top-full left-0 hidden group-hover:block bg-gray-800 border border-gray-600 rounded-sm shadow-lg min-w-[200px] py-2 z-50 mt-[-2px] ">
            <li>
              <button className="w-full text-left px-4 py-2 text-white hover:bg-[#D32F2F] hover:text-white transition-colors font-medium">
                2024
              </button>
            </li>
            <li>
              <button className="w-full text-left px-4 py-2 text-white hover:bg-[#D32F2F] hover:text-white transition-colors font-medium">
                2023
              </button>
            </li>
            <li>
              <button className="w-full text-left px-4 py-2 text-white hover:bg-[#D32F2F] hover:text-white transition-colors font-medium">
                2022
              </button>
            </li>
          </ul>
        </div>





        {/* Past Papers */}
        <div className="relative group">
          <button className="flex items-center gap-2 text-white hover:text-[#D32F2F] transition-colors  mt-[-0px]">
            PAST PAPERS
            <ChevronDown className="w-4 h-4" />
          </button>
          
          {/* Dropdown for Past Papers */}
          <ul className="absolute top-full left-0 hidden group-hover:block bg-gray-800 border border-gray-600 rounded-sm shadow-lg min-w-[200px] py-2 z-50 mt-[-2px] ">
            <li>
              <button className="w-full text-left px-4 py-2 text-white hover:bg-[#D32F2F] hover:text-white transition-colors font-medium">
                2024
              </button>
            </li>
            <li>
              <button className="w-full text-left px-4 py-2 text-white hover:bg-[#D32F2F] hover:text-white transition-colors font-medium">
                2023
              </button>
            </li>
            <li>
              <button className="w-full text-left px-4 py-2 text-white hover:bg-[#D32F2F] hover:text-white transition-colors font-medium">
                2022
              </button>
            </li>
          </ul>
        </div>


    



        {/* Past Papers */}
        <div className="relative group">
          <button className="flex items-center gap-2 text-white hover:text-[#D32F2F] transition-colors  mt-[-0px]">
            PAST PAPERS
            <ChevronDown className="w-4 h-4" />
          </button>
          
          {/* Dropdown for Past Papers */}
          <ul className="absolute top-full left-0 hidden group-hover:block bg-gray-800 border border-gray-600 rounded-sm shadow-lg min-w-[200px] py-2 z-50 mt-[-2px] ">
            <li>
              <button className="w-full text-left px-4 py-2 text-white hover:bg-[#D32F2F] hover:text-white transition-colors font-medium">
                2024
              </button>
            </li>
            <li>
              <button className="w-full text-left px-4 py-2 text-white hover:bg-[#D32F2F] hover:text-white transition-colors font-medium">
                2023
              </button>
            </li>
            <li>
              <button className="w-full text-left px-4 py-2 text-white hover:bg-[#D32F2F] hover:text-white transition-colors font-medium">
                2022
              </button>
            </li>
          </ul>
        </div>






        {/* Past Papers */}
        <div className="relative group">
          <button className="flex items-center gap-2 text-white hover:text-[#D32F2F] transition-colors  mt-[-0px]">
            PAST PAPERS
            <ChevronDown className="w-4 h-4" />
          </button>
          
          {/* Dropdown for Past Papers */}
          <ul className="absolute top-full left-0 hidden group-hover:block bg-gray-800 border border-gray-600 rounded-sm shadow-lg min-w-[200px] py-2 z-50 mt-[-2px] ">
            <li>
              <button className="w-full text-left px-4 py-2 text-white hover:bg-[#D32F2F] hover:text-white transition-colors font-medium">
                2024
              </button>
            </li>
            <li>
              <button className="w-full text-left px-4 py-2 text-white hover:bg-[#D32F2F] hover:text-white transition-colors font-medium">
                2023
              </button>
            </li>
            <li>
              <button className="w-full text-left px-4 py-2 text-white hover:bg-[#D32F2F] hover:text-white transition-colors font-medium">
                2022
              </button>
            </li>
          </ul>
        </div>





        {/* Past Papers */}
        <div className="relative group">
          <button className="flex items-center gap-2 text-white hover:text-[#D32F2F] transition-colors  mt-[-0px]">
            PAST PAPERS
            <ChevronDown className="w-4 h-4" />
          </button>
          
          {/* Dropdown for Past Papers */}
          <ul className="absolute top-full left-0 hidden group-hover:block bg-gray-800 border border-gray-600 rounded-sm shadow-lg min-w-[200px] py-2 z-50 mt-[-2px] ">
            <li>
              <button className="w-full text-left px-4 py-2 text-white hover:bg-[#D32F2F] hover:text-white transition-colors font-medium">
                2024
              </button>
            </li>
            <li>
              <button className="w-full text-left px-4 py-2 text-white hover:bg-[#D32F2F] hover:text-white transition-colors font-medium">
                2023
              </button>
            </li>
            <li>
              <button className="w-full text-left px-4 py-2 text-white hover:bg-[#D32F2F] hover:text-white transition-colors font-medium">
                2022
              </button>
            </li>
          </ul>
        </div>








      </div>
    </nav>
  );
}
