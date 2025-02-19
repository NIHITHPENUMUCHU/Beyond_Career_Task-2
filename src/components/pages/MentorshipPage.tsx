import React from 'react';
import { Users, MessageSquare, Calendar, Star, ArrowRight } from 'lucide-react';

export function MentorshipPage() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-sky-dark-800 mb-4">Mentorship</h1>
          <p className="text-xl text-sky-dark-600">
            Connect with experienced mentors who can guide you on your career journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-sky-dark-800 mb-6">Find Your Mentor</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <Users className="w-6 h-6 text-sky-dark-600 mt-1 mr-4" />
                <div>
                  <h3 className="text-lg font-medium text-sky-dark-800">Expert Guidance</h3>
                  <p className="text-sky-dark-600">
                    Connect with industry professionals who have walked the path you aspire to follow
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <MessageSquare className="w-6 h-6 text-sky-dark-600 mt-1 mr-4" />
                <div>
                  <h3 className="text-lg font-medium text-sky-dark-800">Direct Communication</h3>
                  <p className="text-sky-dark-600">
                    Regular one-on-one sessions with your mentor via chat or video calls
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Calendar className="w-6 h-6 text-sky-dark-600 mt-1 mr-4" />
                <div>
                  <h3 className="text-lg font-medium text-sky-dark-800">Flexible Scheduling</h3>
                  <p className="text-sky-dark-600">
                    Book sessions at times that work best for you and your mentor
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-sky-dark-800 mb-6">Featured Mentors</h2>
            <div className="space-y-6">
              {[
                { name: 'Sarah Johnson', role: 'Senior Software Engineer' },
                { name: 'Michael Chen', role: 'Product Manager' },
                { name: 'Emily Williams', role: 'UX Design Lead' }
              ].map((mentor, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-sky-dark-100 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-sky-dark-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-sky-dark-800">{mentor.name}</h3>
                    <p className="text-sky-dark-600">{mentor.role}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="inline-flex items-center px-6 py-3 bg-sky-dark-600 text-white rounded-lg hover:bg-sky-dark-700 transition-colors">
            Find Your Mentor
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}