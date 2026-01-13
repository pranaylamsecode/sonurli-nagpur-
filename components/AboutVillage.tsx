import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Building2 } from "lucide-react";
import { VILLAGE_INFO, INFRASTRUCTURE } from "../constants";

export const AboutVillage: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
                            आमच्याबद्दल
                        </span>
                        <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-6">
                            आमचा गाव – {VILLAGE_INFO.name}
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6 whitespace-pre-line">
                            {VILLAGE_INFO.description}
                        </p>

                        {/* Quick Info */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                <MapPin className="w-5 h-5 text-brand-500" />
                                <div>
                                    <p className="text-xs text-gray-500">जिल्हा</p>
                                    <p className="font-semibold text-gray-800">{VILLAGE_INFO.district}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                <Building2 className="w-5 h-5 text-brand-500" />
                                <div>
                                    <p className="text-xs text-gray-500">तालुका</p>
                                    <p className="font-semibold text-gray-800">{VILLAGE_INFO.taluka}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                <Calendar className="w-5 h-5 text-brand-500" />
                                <div>
                                    <p className="text-xs text-gray-500">स्थापना</p>
                                    <p className="font-semibold text-gray-800">सन १९६२</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                <MapPin className="w-5 h-5 text-brand-500" />
                                <div>
                                    <p className="text-xs text-gray-500">पिनकोड</p>
                                    <p className="font-semibold text-gray-800">{VILLAGE_INFO.pincode}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image & Infrastructure */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Village Image */}
                        <div className="relative mb-8">
                            <img
                                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800"
                                alt="सोनुर्ली गाव"
                                className="w-full h-64 object-cover rounded-2xl shadow-lg"
                            />
                            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                                <p className="text-sm font-semibold text-gray-800">नागपूर पासून {VILLAGE_INFO.distanceFromHQ}</p>
                            </div>
                        </div>

                        {/* Infrastructure Stats */}
                        <div className="bg-gradient-to-br from-brand-500 to-brand-600 rounded-2xl p-6 text-white">
                            <h3 className="text-lg font-bold mb-4">पायाभूत सुविधा स्थिती</h3>
                            <div className="grid grid-cols-3 gap-4">
                                {INFRASTRUCTURE.map((item) => (
                                    <div key={item.label} className="text-center">
                                        <div className="text-2xl font-bold">{item.count}</div>
                                        <div className="text-sm text-white/80">{item.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
