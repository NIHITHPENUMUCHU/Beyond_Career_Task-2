import React from 'react';
import { LogIn, UserPlus } from 'lucide-react';

interface AuthButtonsProps {
  onLoginClick: () => void;
  onSignUpClick: () => void;
}

export function AuthButtons({ onLoginClick, onSignUpClick }: AuthButtonsProps) {
  return (
    <div className="flex gap-4">
      <button
        onClick={onLoginClick}
        className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
      >
        <LogIn className="w-4 h-4" />
        Login
      </button>
      <button
        onClick={onSignUpClick}
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        <UserPlus className="w-4 h-4" />
        Sign Up
      </button>
    </div>
  );
}