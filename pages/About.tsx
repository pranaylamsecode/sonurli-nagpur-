import React from "react";
import { motion } from "framer-motion";
import { PageTransition } from "../components/PageTransition";
import { AboutVillage } from "../components/AboutVillage";
import { VILLAGE_INFO, ACHIEVEMENTS } from "../constants";
import { MapPin, Award, Target, Heart } from "lucide-react";

export const About: React.FC = () => {
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
            आमच्याबद्दल
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mt-2 mb-6"
          >
            आमचा गाव – {VILLAGE_INFO.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {VILLAGE_INFO.district} जिल्ह्यातील एक आदर्श ग्रामपंचायत
          </motion.p>
        </div>
      </section>

      {/* Village Description */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800"
                alt="सोनुर्ली गाव"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                गाव परिचय
              </h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line mb-8">
                {VILLAGE_INFO.description}
              </p>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2 bg-brand-50 text-brand-600 px-4 py-2 rounded-full">
                  <MapPin className="w-4 h-4" />
                  <span>{VILLAGE_INFO.state}</span>
                </div>
                <div className="bg-emerald-50 text-emerald-600 px-4 py-2 rounded-full">
                  पिनकोड: {VILLAGE_INFO.pincode}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              अभियानातील ग्रामपंचायतीची ताकद
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              विविध क्षेत्रात मिळवलेले गुण आणि मानांकन
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ACHIEVEMENTS.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center"
              >
                <div className="w-16 h-16 bg-brand-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {achievement.points}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-brand-500 to-brand-600 rounded-2xl p-8 text-white"
            >
              <Award className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-4">आमची दृष्टी</h3>
              <p className="text-white/90">
                सोनुर्ली गाव एक स्वयंपूर्ण, स्वच्छ आणि डिजिटल सक्षम ग्राम बनवणे.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-8 text-white"
            >
              <Target className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-4">आमचे ध्येय</h3>
              <p className="text-white/90">
                प्रत्येक नागरिकास मूलभूत सुविधा, शिक्षण, आरोग्य आणि रोजगाराच्या संधी उपलब्ध करणे.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl p-8 text-white"
            >
              <Heart className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-4">आमची मूल्ये</h3>
              <p className="text-white/90">
                पारदर्शकता, जबाबदारी, लोकसहभाग आणि सर्वसमावेशक विकास.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
