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
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-brand-500 font-bold text-lg">GP</span>
              </div>
              <div>
                <span className="text-white font-bold text-xl">ग्रामपंचायत सोनुर्ली</span>
                <p className="text-white/70 text-sm">Gram Panchayat Sonurli</p>
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

          {/* Map */}
          <div>
            <h3 className="text-white font-semibold mb-4">नकाशा</h3>
            <div className="rounded-xl overflow-hidden h-48 bg-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3727.3665274707896!2d79.00450975075648!3d20.89756842579915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4986e3751cc7b%3A0xebd4b670727120ae!2sSonurli%2C%20Maharashtra%20441108!5e0!3m2!1sen!2sin!4v1768320844386!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
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