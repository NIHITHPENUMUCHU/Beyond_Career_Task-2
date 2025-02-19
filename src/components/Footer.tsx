import React from 'react';
import { Mail, Phone, Facebook, Twitter, Linkedin as LinkedIn, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-bold text-sky-dark-800 mb-4">Beyond Career</h2>
            <p className="text-sky-dark-600 mb-4">
              Empowering professionals to reach their full potential through mentorship,
              resources, and opportunities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-sky-dark-600 hover:text-sky-dark-800 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-sky-dark-600 hover:text-sky-dark-800 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-sky-dark-600 hover:text-sky-dark-800 transition-colors">
                <LinkedIn className="w-5 h-5" />
              </a>
              <a href="#" className="text-sky-dark-600 hover:text-sky-dark-800 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-sky-dark-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sky-dark-600 hover:text-sky-dark-800 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-sky-dark-600 hover:text-sky-dark-800 transition-colors">Career Roadmap</a>
              </li>
              <li>
                <a href="#" className="text-sky-dark-600 hover:text-sky-dark-800 transition-colors">Mentorship</a>
              </li>
              <li>
                <a href="#" className="text-sky-dark-600 hover:text-sky-dark-800 transition-colors">Resources</a>
              </li>
              <li>
                <a href="#" className="text-sky-dark-600 hover:text-sky-dark-800 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-sky-dark-800 mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-sky-dark-600 mr-2" />
                <span className="text-sky-dark-600">contact@beyondcareer.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-sky-dark-600 mr-2" />
                <span className="text-sky-dark-600">(555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sky-dark-600 text-sm">
              © 2025 Beyond Career. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-sky-dark-600 hover:text-sky-dark-800 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sky-dark-600 hover:text-sky-dark-800 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}