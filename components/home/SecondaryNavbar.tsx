'use client'

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export function SecondaryNavbar() {
  const [isVisible, setIsVisible] = useState(false);
  const navSections = [
    {
      label: "TextBooks",
      items: [
        { label: "Mathematics" },
        { label: "Physics" },
        { label: "Chemistry" },
        { label: "Biology" },
        { label: "English" },
      ],
    },
    {
      label: "Past Papers",
      items: [
        { label: "2024" },
        { label: "2023" },
        { label: "2022" },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsVisible(false);
        return;
      }

      const heroElement = document.getElementById("hero");
      if (heroElement) {
        const heroMidpoint = heroElement.offsetHeight / 2;
        setIsVisible(window.scrollY > heroMidpoint);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full bg-gray-700/95 backdrop-blur-sm border-b border-gray-600 fixed top-[73px] z-40 shadow-md transition-transform duration-300 ${
        isVisible ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-full opacity-0 pointer-events-none"
      }`}
      suppressHydrationWarning
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 h-5 flex items-center gap-8">
        {navSections.map((section) => (
          <div key={section.label} className="relative group">
            <span
              className="flex items-center gap-2 text-xs sm:text-sm text-white hover:text-[#D32F2F] transition-colors whitespace-nowrap cursor-default select-none"
              title={section.label}
            >
              {section.label}
              <ChevronDown className="w-4 h-4" />
            </span>

            <ul className="absolute top-full left-0 hidden group-hover:block bg-gray-800 border border-gray-600 rounded-sm shadow-lg min-w-[200px] py-2 z-50 mt-[-2px]">
              {section.items.map((item) => (
                <li key={item.label}>
                  <span className="w-full text-left px-4 py-2 text-white hover:bg-[#D32F2F] hover:text-white transition-colors font-medium block cursor-default">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}

