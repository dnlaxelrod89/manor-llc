import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-amber-950 border-t border-amber-900 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold mb-4">
              <span className="text-amber-400">The Manor</span>
              <span className="text-white"> Restaurant LLC</span>
            </div>
            <p className="text-amber-100 mb-6 max-w-sm">
              Premium Caribbean-style catering and event venue services in Newark, New Jersey. Making your special occasions unforgettable since 2008.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-amber-900 hover:bg-amber-800 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook size={18} className="text-amber-200" />
              </a>
              <a
                href="#"
                className="bg-amber-900 hover:bg-amber-800 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram size={18} className="text-amber-200" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.querySelector('#catering')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  Catering Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  Food Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.querySelector('#venue')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  Book Venue
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-amber-200">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>795 Sanford Avenue<br />Newark, NJ</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-amber-400" />
                <a href="tel:973-388-0650" className="text-amber-200 hover:text-white transition-colors">
                  (973) 388-0650
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-amber-400" />
                <a href="sms:973-381-6097" className="text-amber-200 hover:text-white transition-colors">
                  (973) 381-6097
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-900 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-amber-300 text-sm mb-4 md:mb-0">
              © 2026 The Manor Restaurant LLC. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-amber-300">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
