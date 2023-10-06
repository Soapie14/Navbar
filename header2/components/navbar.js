import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-black p-4">
            <div className="container mx-auto flex items-center justify-between">
                {/* Left Side Links */}
                <div className="flex space-x-4">
                    <a href="#" className="text-white text-sm">Why Velosaty?</a>
                    <a href="#" className="text-white text-sm">About Us</a>
                </div>

                {/* Center Logo */}
                <div className="text-white font-bold text-xl">
                    Velosaty Logo
                </div>

                {/* Right Side Dropdown and Button Icon */}
                <div className="flex items-center space-x-4">
                    {/* Dropdown Link */}
                    <div className="relative group">
                        <a href="#" className="text-white group-hover:text-gray-300">
                            Rescources
                        </a>
                        {/* Dropdown Content */}
                        <div className="hidden absolute bg-green-900 text-white group-hover:block mt-2 space-y-2">
                            <a href="#" className="block px-4 py-2">Dropdown Item 1</a>
                            <a href="#" className="block px-4 py-2">Dropdown Item 2</a>
                        </div>
                    </div>

                    {/* Button Icon */}
                    <button className="text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;