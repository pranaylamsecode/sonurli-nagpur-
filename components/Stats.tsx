import React from "react";
import { motion } from "framer-motion";
import { VILLAGE_STATS } from "../constants";

export const Stats: React.FC = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        ग्राम पंचायतची मूलभूत माहिती
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        सोनुर्ली गावाची महत्त्वाची आकडेवारी आणि माहिती
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {VILLAGE_STATS.map((stat, index) => {
                        const IconComponent = stat.icon;
                        return (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center"
                            >
                                <div className="w-14 h-14 bg-brand-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <IconComponent className="w-7 h-7 text-brand-500" />
                                </div>
                                <div className="text-3xl font-bold text-brand-500 mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
