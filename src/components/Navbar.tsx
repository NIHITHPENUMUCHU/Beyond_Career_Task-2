import React, { useState } from 'react';
import { Menu, X, LogIn, UserPlus, User } from 'lucide-react';

interface NavbarProps {
  isLoggedIn: boolean;
  onLoginClick: () => void;
  onSignUpClick: () => void;
  userEmail?: string;
  onLogout?: () => void;
  onPageChange: (page: string) => void;
  currentPage: string;
}

export function Navbar({ 
  isLoggedIn, 
  onLoginClick, 
  onSignUpClick, 
  userEmail, 
  onLogout,
  onPageChange,
  currentPage 
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Career Roadmap', href: 'roadmap' },
    { name: 'Mentorship', href: 'mentorship' },
    { name: 'Job Portal', href: 'jobs' },
    { name: 'Resources', href: 'resources' },
    { name: 'Contact', href: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    onPageChange(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button 
              onClick={() => handleNavClick('home')}
              className="text-xl font-bold text-sky-dark-600 hover:text-sky-dark-800 transition-colors"
            >
              Beyond Career
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`nav-link text-sky-dark-600 hover:text-sky-dark-800 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === item.href ? 'active text-sky-dark-800' : ''
                }`}
              >
                {item.name}
              </button>
            ))}
            {isLoggedIn ? (
              <div className="flex items-center ml-4">
                <span className="text-sky-dark-600 mr-4">{userEmail}</span>
                <button
                  onClick={onLogout}
                  className="flex items-center gap-2 px-4 py-2 text-sky-dark-600 hover:text-sky-dark-800 transition-colors"
                >
                  <User className="w-4 h-4" />
                  Profile
                </button>
              </div>
            ) : (
              <div className="flex items-center ml-4 space-x-4">
                <button
                  onClick={onLoginClick}
                  className="flex items-center gap-2 px-4 py-2 text-sky-dark-600 hover:text-sky-dark-800 transition-colors"
                >
                  <LogIn className="w-4 h-4" />
                  Login
                </button>
                <button
                  onClick={onSignUpClick}
                  className="flex items-center gap-2 px-4 py-2 bg-sky-dark-600 text-white rounded-lg hover:bg-sky-dark-700 transition-colors"
                >
                  <UserPlus className="w-4 h-4" />
                  Sign Up
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-sky-dark-600 hover:text-sky-dark-800 p-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`w-full text-left text-sky-dark-600 hover:text-sky-dark-800 block px-3 py-2 rounded-md text-base font-medium ${
                  currentPage === item.href ? 'bg-sky-dark-50 text-sky-dark-800' : ''
                }`}
              >
                {item.name}
              </button>
            ))}
            {isLoggedIn ? (
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="px-3 py-2 text-sky-dark-600">{userEmail}</div>
                <button
                  onClick={() => {
                    onLogout?.();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 px-3 py-2 text-sky-dark-600 hover:text-sky-dark-800 w-full"
                >
                  <User className="w-4 h-4" />
                  Profile
                </button>
              </div>
            ) : (
              <div className="border-t border-gray-200 pt-4 mt-4 space-y-2">
                <button
                  onClick={() => {
                    onLoginClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 px-3 py-2 text-sky-dark-600 hover:text-sky-dark-800 w-full"
                >
                  <LogIn className="w-4 h-4" />
                  Login
                </button>
                <button
                  onClick={() => {
                    onSignUpClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 px-3 py-2 bg-sky-dark-600 text-white rounded-lg hover:bg-sky-dark-700 w-full"
                >
                  <UserPlus className="w-4 h-4" />
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}