import React from 'react';
import { Map, Milestone, Target, Award } from 'lucide-react';

export function CareerRoadmapPage() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-sky-dark-800 mb-4">Career Roadmap</h1>
          <p className="text-xl text-sky-dark-600">
            Plan and navigate your career path with our comprehensive roadmap tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Map className="w-10 h-10 text-sky-dark-600 mb-4" />
            <h3 className="text-lg font-semibold text-sky-dark-800 mb-2">Career Planning</h3>
            <p className="text-sky-dark-600">
              Define your career goals and create a detailed plan to achieve them
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Milestone className="w-10 h-10 text-sky-dark-600 mb-4" />
            <h3 className="text-lg font-semibold text-sky-dark-800 mb-2">Skill Development</h3>
            <p className="text-sky-dark-600">
              Identify and develop key skills needed for your desired career path
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Target className="w-10 h-10 text-sky-dark-600 mb-4" />
            <h3 className="text-lg font-semibold text-sky-dark-800 mb-2">Goal Tracking</h3>
            <p className="text-sky-dark-600">
              Track your progress and adjust your goals as you grow professionally
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Award className="w-10 h-10 text-sky-dark-600 mb-4" />
            <h3 className="text-lg font-semibold text-sky-dark-800 mb-2">Achievement Milestones</h3>
            <p className="text-sky-dark-600">
              Celebrate your career achievements and plan for future success
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}