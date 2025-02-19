import React from 'react';
import { ArrowRight, Compass, Users, BookOpen } from 'lucide-react';

export function HomePage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-sky-dark-800 mb-6">
              Welcome to Beyond Career
            </h1>
            <p className="text-xl text-sky-dark-600 mb-8 max-w-3xl mx-auto">
              Your journey to professional success starts here. Explore career opportunities, 
              connect with mentors, and build your future.
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-sky-dark-600 text-white rounded-lg hover:bg-sky-dark-700 transition-colors">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <Compass className="w-12 h-12 text-sky-dark-600 mb-4" />
            <h3 className="text-xl font-semibold text-sky-dark-800 mb-2">Career Guidance</h3>
            <p className="text-sky-dark-600">
              Get personalized career planning and expert advice to navigate your professional journey.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <Users className="w-12 h-12 text-sky-dark-600 mb-4" />
            <h3 className="text-xl font-semibold text-sky-dark-800 mb-2">Mentorship</h3>
            <p className="text-sky-dark-600">
              Connect with industry leaders and experienced professionals who can guide your path.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <BookOpen className="w-12 h-12 text-sky-dark-600 mb-4" />
            <h3 className="text-xl font-semibold text-sky-dark-800 mb-2">Resources</h3>
            <p className="text-sky-dark-600">
              Access comprehensive tools and materials for your career development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}