import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  isScrolled: boolean;
}

export default function Header({ isScrolled }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Catering', href: '#catering' },
    { label: 'Our Food', href: '#gallery' },
    { label: 'Book Venue', href: '#venue' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 isolate transition-all duration-300 ${
        isScrolled ? 'bg-amber-950/95 backdrop-blur-sm shadow-lg' : 'bg-amber-950/50 backdrop-blur-sm'
      }`}
    >
      <div className="hidden md:block bg-amber-900 text-white text-center py-2 text-sm md:text-base font-semibold">
        THE MANOR RESTAURANT LLC
      </div>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl md:text-2xl font-bold">
            <span className="text-amber-400">The Manor</span>
            <span className="text-white"> Restaurant</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-amber-100 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:973-388-0650"
              className="bg-amber-600 hover:bg-amber-500 text-white px-6 py-2 rounded-full transition-colors duration-200 flex items-center space-x-2"
            >
              <Phone size={16} />
              <span>Call Now</span>
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 bg-amber-950/95 backdrop-blur-sm rounded-xl p-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-amber-100 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:973-388-0650"
              className="block w-full text-center bg-amber-600 hover:bg-amber-500 text-white px-6 py-2 rounded-full transition-colors duration-200"
            >
              Call Now
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
