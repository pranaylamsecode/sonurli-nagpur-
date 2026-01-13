import React from "react";
import { motion } from "framer-motion";
import { PageTransition } from "../components/PageTransition";
import { SERVICES, ACHIEVEMENTS } from "../constants";

export const ServicesPage: React.FC = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-white via-blue-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-emerald-600 font-semibold text-sm uppercase tracking-wider"
          >
            आमच्या सेवा
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mt-2 mb-6"
          >
            ग्रामपंचायतीच्या प्रमुख उपलब्धी व कार्य
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            ग्रामपंचायत सोनुर्ली सुशासन, आर्थिक सहभाग, महिला सक्षमीकरण, स्वच्छता आणि पर्यावरण संवर्धन या क्षेत्रात आदर्शरूप आहे.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.headerImage}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-500 to-brand-600 rounded-xl flex items-center justify-center mb-4 text-white -mt-12 relative z-10 shadow-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Points Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              मूल्यांकन गुण
            </h2>
            <p className="text-gray-600">
              विविध विभागांमध्ये मिळवलेले गुण
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ACHIEVEMENTS.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm"
              >
                <div className="w-20 h-20 bg-brand-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                  {item.points}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-20 bg-gradient-to-r from-brand-500 to-brand-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">भविष्यातील दिशा</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="font-semibold mb-2">स्मार्ट ग्राम प्रकल्प</h3>
              <p className="text-white/80 text-sm">डिजिटल प्रशासन आणि स्मार्ट सेवा</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="font-semibold mb-2">कचरा प्रक्रिया केंद्र</h3>
              <p className="text-white/80 text-sm">पर्यावरण संवर्धन उपक्रम</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="font-semibold mb-2">स्मार्ट वॉटर मीटरिंग</h3>
              <p className="text-white/80 text-sm">जल व्यवस्थापन प्रणाली</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="font-semibold mb-2">सौर ऊर्जा प्रकल्प</h3>
              <p className="text-white/80 text-sm">स्वच्छ ऊर्जा निर्मिती</p>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
