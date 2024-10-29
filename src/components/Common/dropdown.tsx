import { useState, useEffect, useRef } from "react";

interface DropdownOption {
  label: string;
  href?: string;
}

interface DropdownProps {
  options: DropdownOption[];
  text: string;
}

function Dropdown({ options, text }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative inline-block text-left w-full" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="inline-flex text-left gap-1 w-full items-center px-2 py-1 bg-white text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {text}
          <svg
            className="-mr-1 mt-1 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06-.02L10 10.84l3.71-3.66a.75.75 0 011.08 1.04l-4.25 4.19a.75.75 0 01-1.06 0L5.23 8.25a.75.75 0 01-.02-1.04z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div
          className="origin-top-right absolute top-10 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-[1000]"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            {options.map((option, index) => (
              <div
                key={index}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-[#FF6F1E52] cursor-pointer flex items-center"
              >
                {option.href ? (
                  <a
                    href={option.href}
                    className="block w-full"
                    role="menuitem"
                    tabIndex={-1}
                  >
                    {option.label}
                  </a>
                ) : (
                  <span role="menuitem" tabIndex={-1} className="block w-full">
                    {option.label}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
