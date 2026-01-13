import React from "react";
import { motion } from "framer-motion";
import { PageTransition } from "../components/PageTransition";
import { Team } from "../components/Team";
import { TEAM_MEMBERS } from "../constants";

export const TeamPage: React.FC = () => {
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
                        आमची टीम
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-gray-800 mt-2 mb-6"
                    >
                        आमची ग्रामपंचायत टीम
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        गावाच्या प्रगतीसाठी एकत्र काम करणारी जबाबदार नेतृत्व टीम
                    </motion.p>
                </div>
            </section>

            {/* Team Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {TEAM_MEMBERS.map((member, index) => (
                            <motion.div
                                key={member.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm hover:shadow-lg transition-shadow"
                            >
                                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-brand-100">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                    {member.name}
                                </h3>
                                <p className="text-brand-500 font-medium text-lg">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Info Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        ग्रामपंचायत कार्यालय
                    </h2>
                    <p className="text-gray-600">
                        ग्रामपंचायत सोनुर्ली ही सुशासन, आर्थिक सहभाग, महिला सक्षमीकरण, स्वच्छता आणि पर्यावरण संवर्धन या क्षेत्रात आदर्शरूप आहे.
                        आमची टीम गावाच्या सर्वांगीण विकासासाठी कटिबद्ध आहे.
                    </p>
                </div>
            </section>
        </PageTransition>
    );
};
