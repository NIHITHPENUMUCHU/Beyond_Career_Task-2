import React from 'react';
import { LogOut, User } from 'lucide-react';

interface SuccessPageProps {
  user: {
    name: string;
    email: string;
  };
  onLogout: () => void;
}

export function SuccessPage({ user, onLogout }: SuccessPageProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-900">Beyond Career</h1>
            <button
              onClick={onLogout}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <User className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
            Welcome, {user.name}!
          </h2>
          
          <p className="text-center text-gray-600 mb-8">
            You have successfully logged in to your account.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Account Details</h3>
            <div className="space-y-2">
              <p className="text-gray-600">
                <span className="font-medium">Name:</span> {user.name}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Email:</span> {user.email}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}