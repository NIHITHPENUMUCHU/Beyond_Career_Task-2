import React from 'react';
import { Briefcase, Search, Building2, MapPin } from 'lucide-react';

export function JobPortalPage() {
  const jobs = [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Corp',
      location: 'San Francisco, CA',
      type: 'Full-time',
    },
    {
      title: 'Product Manager',
      company: 'Innovation Labs',
      location: 'New York, NY',
      type: 'Full-time',
    },
    {
      title: 'UX Designer',
      company: 'Creative Solutions',
      location: 'Remote',
      type: 'Contract',
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-sky-dark-800 mb-4">Job Portal</h1>
          <p className="text-xl text-sky-dark-600">
            Explore career opportunities and find your next role
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-sky-dark-400" />
              <input
                type="text"
                placeholder="Job title or keyword"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-sky-dark-500 focus:border-sky-dark-500"
              />
            </div>
            <div className="relative">
              <Building2 className="absolute left-3 top-3 w-5 h-5 text-sky-dark-400" />
              <input
                type="text"
                placeholder="Company"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-sky-dark-500 focus:border-sky-dark-500"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 w-5 h-5 text-sky-dark-400" />
              <input
                type="text"
                placeholder="Location"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-sky-dark-500 focus:border-sky-dark-500"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {jobs.map((job, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-sky-dark-800 mb-2">{job.title}</h2>
                  <div className="flex items-center space-x-4 text-sky-dark-600">
                    <div className="flex items-center">
                      <Building2 className="w-4 h-4 mr-1" />
                      {job.company}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="w-4 h-4 mr-1" />
                      {job.type}
                    </div>
                  </div>
                </div>
                <button className="px-4 py-2 bg-sky-dark-600 text-white rounded-lg hover:bg-sky-dark-700 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}