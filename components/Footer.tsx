import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { CONTACT_INFO, NAV_ITEMS } from "../constants";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-500 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-brand-500 font-bold text-lg">GP</span>
              </div>
              <div>
                <span className="text-white font-bold text-xl">ग्रामपंचायत सोनुर्ली</span>
                <p className="text-white/70 text-sm">Gram Panchayat Rama</p>
              </div>
            </div>
            <p className="text-white/80 max-w-sm mb-4">
              विश्वास, गुणवत्ता आणि अनुभव. ग्रामविकासासाठी कटिबद्ध.
            </p>
            <div className="flex gap-4 text-sm text-white/70">
              <span>प्रशासक: {CONTACT_INFO.administrator}</span>
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">महत्वाचे दुवे</h3>
            <ul className="space-y-3 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">संपर्क</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-accent-500" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-accent-500" />
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-accent-500" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-white transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 mt-12 text-center">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} ग्रामपंचायत सोनुर्ली. सर्व हक्क राखीव.
          </p>
        </div>
      </div>
    </footer>
  );
};