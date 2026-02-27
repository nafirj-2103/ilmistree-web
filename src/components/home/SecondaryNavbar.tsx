import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function SecondaryNavbar() {
  const [isNotesOpen, setIsNotesOpen] = useState(false);

  const notesDropdownItems = [
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biology',
    'English',
  ];

  return (
    <nav className="w-full bg-gray-700 border-b border-gray-600 sticky top-[73px] z-40">
      <div className="max-w-7xl mx-auto px-20 h-[20px] flex items-center gap-8">
        
        {/* Notes with Dropdown */}
        <div className="relative group">
          <button
            onClick={() => setIsNotesOpen(!isNotesOpen)}
            className="flex items-center gap-2 text-white hover:text-[#D32F2F] transition-colors  py-4 mt-[-0px]"
          >
            NOTES
            <ChevronDown 
              className={`w-4 h-4 transition-transform duration-300 ${isNotesOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {/* Dropdown Menu 
          {isNotesOpen && (
            <ul className="absolute top-full left-0 mt-0 bg-gray-800 border border-gray-600 rounded-sm shadow-lg min-w-[200px] py-2 z-50 mt-[-17px] ">
              {notesDropdownItems.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => setIsNotesOpen(false)}
                    className="w-full text-left px-4 py-2 text-white hover:bg-[#D32F2F] hover:text-white transition-colors font-medium"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div> 
        */}







  {/* Dropdown for Notes */}
  <ul className="absolute top-full left-0 mt-0 hidden group-hover:block bg-gray-800 border border-gray-600 rounded-sm shadow-lg min-w-[200px] py-2 z-50 mt-[-17px]">
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
      

    





        {/* Text Books */}
        <button className="text-white hover:text-[#D32F2F] transition-colors mt-[-0px]">
          TEXT BOOKS
        </button>

        {/* Past Papers */}
        <div className="relative group">
          <button className="flex items-center gap-2 text-white hover:text-[#D32F2F] transition-colors  mt-[-0px]">
            PAST PAPERS
            <ChevronDown className="w-4 h-4" />
          </button>
          
          {/* Dropdown for Past Papers */}
          <ul className="absolute top-full left-0 mt-0 hidden group-hover:block bg-gray-800 border border-gray-600 rounded-sm shadow-lg min-w-[200px] py-2 z-50 mt-[-2px] ">
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
          <ul className="absolute top-full left-0 mt-0 hidden group-hover:block bg-gray-800 border border-gray-600 rounded-sm shadow-lg min-w-[200px] py-2 z-50 mt-[-2px] ">
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
          <ul className="absolute top-full left-0 mt-0 hidden group-hover:block bg-gray-800 border border-gray-600 rounded-sm shadow-lg min-w-[200px] py-2 z-50 mt-[-2px] ">
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
          <ul className="absolute top-full left-0 mt-0 hidden group-hover:block bg-gray-800 border border-gray-600 rounded-sm shadow-lg min-w-[200px] py-2 z-50 mt-[-2px] ">
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
          <ul className="absolute top-full left-0 mt-0 hidden group-hover:block bg-gray-800 border border-gray-600 rounded-sm shadow-lg min-w-[200px] py-2 z-50 mt-[-2px] ">
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
          <ul className="absolute top-full left-0 mt-0 hidden group-hover:block bg-gray-800 border border-gray-600 rounded-sm shadow-lg min-w-[200px] py-2 z-50 mt-[-2px] ">
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
