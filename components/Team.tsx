import React from "react";
import { motion } from "framer-motion";
import { TEAM_MEMBERS } from "../constants";

export const Team: React.FC = () => {
    return (
        <section id="team" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-emerald-600 font-semibold text-sm uppercase tracking-wider"
                    >
                        आमची टीम
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-gray-800 mt-2 mb-4"
                    >
                        आमची ग्रामपंचायत टीम
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600 max-w-2xl mx-auto"
                    >
                        गावाच्या प्रगतीसाठी एकत्र काम करणारी जबाबदार नेतृत्व टीम
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {TEAM_MEMBERS.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm hover:shadow-lg transition-shadow"
                        >
                            <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-brand-100">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-1">
                                {member.name}
                            </h3>
                            <p className="text-brand-500 font-medium">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
