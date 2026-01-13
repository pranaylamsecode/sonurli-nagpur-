import React from "react";
import { motion } from "framer-motion";
import { SERVICES } from "../constants";

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-emerald-600 font-semibold text-sm uppercase tracking-wider"
          >
            आमची कार्ये
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-800 mt-2 mb-4"
          >
            ग्रामपंचायतीच्या प्रमुख उपलब्धी व कार्य
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            ग्रामपंचायत सोनुर्ली ही सुशासन, आर्थिक सहभाग, महिला सक्षमीकरण, स्वच्छता आणि पर्यावरण संवर्धन या क्षेत्रात आदर्शरूप आहे.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-brand-500 to-brand-600 rounded-xl flex items-center justify-center mb-5 text-white group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Future Goals Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-brand-500 to-brand-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">भविष्यातील दिशा</h3>
          <p className="text-white/90 max-w-2xl mx-auto">
            स्मार्ट ग्राम प्रकल्प, डिजिटल प्रशासन, कचरा प्रक्रिया केंद्र, स्मार्ट वॉटर मीटरिंग
          </p>
        </motion.div>
      </div>
    </section>
  );
};