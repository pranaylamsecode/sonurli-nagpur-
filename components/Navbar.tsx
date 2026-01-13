import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { NAV_ITEMS } from "../constants";
import { Button } from "./ui/Button";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${isScrolled || location.pathname !== "/"
        ? "bg-white/95 backdrop-blur-md border-gray-200 shadow-sm"
        : "bg-white/80 backdrop-blur-sm border-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer"
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="w-12 h-12 bg-brand-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">GP</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-brand-500 font-bold text-xl">ग्रामपंचायत सोनुर्ली</span>
              <p className="text-xs text-gray-500">Gram Panchayat Sonurli</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === item.href
                    ? "text-brand-500 bg-brand-50"
                    : "text-gray-700 hover:text-brand-500 hover:bg-gray-50"
                    }`}
                >
                  {item.label}
                </Link>
              ))}

              <a href="tel:+918830056484">
                <Button variant="primary" size="sm" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  संपर्क करा
                </Button>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-brand-500 hover:bg-gray-100 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="block w-6 h-6" />
              ) : (
                <Menu className="block w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === item.href
                  ? "text-brand-500 bg-brand-50"
                  : "text-gray-700 hover:text-brand-500 hover:bg-gray-50"
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              <a href="tel:+917120000000" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  संपर्क करा
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
