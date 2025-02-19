import React from 'react';
import { BookOpen, Video, FileText, Download } from 'lucide-react';

export function ResourcesPage() {
  const resources = [
    {
      title: 'Resume Writing Guide',
      type: 'Guide',
      icon: FileText,
      description: 'Learn how to create a compelling resume that stands out',
    },
    {
      title: 'Interview Preparation',
      type: 'Video Course',
      icon: Video,
      description: 'Master the art of interviewing with our comprehensive course',
    },
    {
      title: 'Career Development eBook',
      type: 'eBook',
      icon: BookOpen,
      description: 'A complete guide to planning and advancing your career',
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-sky-dark-800 mb-4">Resources</h1>
          <p className="text-xl text-sky-dark-600">
            Access our comprehensive collection of career development resources
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-sky-dark-100 rounded-lg mb-4">
                <resource.icon className="w-6 h-6 text-sky-dark-600" />
              </div>
              <h2 className="text-xl font-semibold text-sky-dark-800 mb-2">{resource.title}</h2>
              <p className="text-sky-dark-600 mb-4">{resource.description}</p>
              <button className="inline-flex items-center text-sky-dark-600 hover:text-sky-dark-800 transition-colors">
                <Download className="w-4 h-4 mr-2" />
                Download {resource.type}
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-sky-dark-800 mb-6">Resource Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {['Career Guides', 'Video Tutorials', 'Templates', 'Worksheets'].map((category, index) => (
              <button
                key={index}
                className="p-4 text-center border border-sky-dark-200 rounded-lg hover:bg-sky-dark-50 transition-colors"
              >
                <span className="text-sky-dark-700 font-medium">{category}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}