import React from 'react';
import { Target, Eye, Briefcase, Users, BookOpen } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-sky-dark-800 mb-4">
            About Beyond Career
          </h1>
          <p className="text-xl text-sky-dark-600">
            Empowering Your Professional Journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Target className="w-12 h-12 text-sky-dark-600 mb-4" />
              <h2 className="text-2xl font-semibold text-sky-dark-800 mb-4">Our Mission</h2>
              <p className="text-sky-dark-600">
                At Beyond Career, we're dedicated to helping professionals navigate their career paths 
                with confidence. Our platform connects ambitious individuals with experienced mentors, 
                valuable resources, and exciting opportunities.
              </p>
            </div>
          </div>
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Eye className="w-12 h-12 text-sky-dark-600 mb-4" />
              <h2 className="text-2xl font-semibold text-sky-dark-800 mb-4">Our Vision</h2>
              <p className="text-sky-dark-600">
                We envision a world where every professional has access to the guidance and resources 
                they need to achieve their career goals. Through our platform, we're building bridges 
                between experience and aspiration.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-semibold text-sky-dark-800 mb-6">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Briefcase className="w-8 h-8 text-sky-dark-600 mb-2" />
              <h3 className="text-lg font-semibold text-sky-dark-800 mb-2">Career Guidance</h3>
              <p className="text-sky-dark-600">Expert advice and personalized career planning support</p>
            </div>
            <div>
              <Users className="w-8 h-8 text-sky-dark-600 mb-2" />
              <h3 className="text-lg font-semibold text-sky-dark-800 mb-2">Mentorship</h3>
              <p className="text-sky-dark-600">Connect with industry leaders and experienced professionals</p>
            </div>
            <div>
              <BookOpen className="w-8 h-8 text-sky-dark-600 mb-2" />
              <h3 className="text-lg font-semibold text-sky-dark-800 mb-2">Resources</h3>
              <p className="text-sky-dark-600">Comprehensive tools and materials for career development</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold text-sky-dark-800 mb-4">Beyond Career</h2>
          <p className="text-sky-dark-600 max-w-3xl mx-auto">
            Empowering professionals to reach their full potential through mentorship, 
            resources, and opportunities.
          </p>
        </div>
      </div>
    </div>
  );
}