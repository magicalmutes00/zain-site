import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiClock, FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      {/* Main Footer */}
      <div className="section-padding bg-pattern">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src=""
                  alt="Logo"
                  className="w-12 h-12 rounded-full bg-white/20 border-2 border-primary"
                />
                <div>
                  <span className="text-primary font-bold text-xl">ZAIN</span>
                  <p className="text-xs text-gray-300">Technical & Integrated Services LLC</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Your trusted partner for professional technical services in Oman.
                Quality workmanship, safety first, on-time delivery.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-white hover:text-primary transition-colors">
                  <FiFacebook size={20} />
                </a>
                <a href="#" className="text-white hover:text-primary transition-colors">
                  <FiInstagram size={20} />
                </a>
                <a href="#" className="text-white hover:text-primary transition-colors">
                  <FiLinkedin size={20} />
                </a>
                <a href="#" className="text-white hover:text-primary transition-colors">
                  <FiTwitter size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-primary">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Our Services', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link
                      to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                      className="text-gray-300 hover:text-primary transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-primary">Our Services</h4>
              <ul className="space-y-2">
                <li><span className="text-gray-300">Fire Safety Installation</span></li>
                <li><span className="text-gray-300">Plumbing & Water Systems</span></li>
                <li><span className="text-gray-300">Electrical Works</span></li>
                <li><span className="text-gray-300">General Contracting</span></li>
                <li><span className="text-gray-300">Home Automation</span></li>
                <li><span className="text-gray-300">Maintenance Services</span></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-primary">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FiPhone className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">+968 - 92144367</p>
                    <p className="text-gray-300 text-sm">+968 - 71744429</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FiMail className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm">info@zaintechoman.com</p>
                    <p className="text-gray-300 text-sm">zainprojectsoman@gmail.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FiMapPin className="text-primary mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">
                    Barka, South Al Batinah,<br />
                    Sultanate of Oman (near ROP Barka)<br />
                    PO Box NO : 124, Postal Code : 122
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <FiClock className="text-primary mt-1 flex-shrink-0" />
                  <div className="text-gray-300 text-sm">
                    <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                    <p>Sat: 9:00 AM - 2:00 PM</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-primary text-white py-4">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} ZAIN Technical & Integrated Services LLC. All Rights Reserved.
            </p>
            <div className="flex gap-4 text-sm">
              <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}