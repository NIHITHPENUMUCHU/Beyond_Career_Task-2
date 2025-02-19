import React from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-sky-dark-800 mb-4">Contact Us</h1>
          <p className="text-xl text-sky-dark-600">
            We're here to help! Reach out to us with any questions or concerns
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold text-sky-dark-800 mb-6">Get in Touch</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-sky-dark-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-sky-dark-500 focus:border-sky-dark-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-sky-dark-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-sky-dark-500 focus:border-sky-dark-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-sky-dark-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-sky-dark-500 focus:border-sky-dark-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-sky-dark-600 text-white rounded-lg hover:bg-sky-dark-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold text-sky-dark-800 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-sky-dark-600 mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-medium text-sky-dark-800">Email</h3>
                    <p className="text-sky-dark-600">contact@beyondcareer.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-sky-dark-600 mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-medium text-sky-dark-800">Phone</h3>
                    <p className="text-sky-dark-600">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MessageSquare className="w-6 h-6 text-sky-dark-600 mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-medium text-sky-dark-800">Live Chat</h3>
                    <p className="text-sky-dark-600">Available Monday to Friday, 9am - 5pm EST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}