import React from "react";
import { motion } from "framer-motion";
import { PageTransition } from "../components/PageTransition";
import { GALLERY_IMAGES } from "../constants";

export const GalleryPage: React.FC = () => {
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
                        फोटो गॅलरी
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-gray-800 mt-2 mb-6"
                    >
                        गॅलरी
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        आमच्या गावातील विविध उपक्रम आणि विकास कार्यांचे छायाचित्रे
                    </motion.p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {GALLERY_IMAGES.map((image, index) => (
                            <motion.div
                                key={image.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="relative group overflow-hidden rounded-xl aspect-square cursor-pointer"
                            >
                                <img
                                    src={image.image}
                                    alt={image.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-4 left-4">
                                        <p className="text-white font-semibold">{image.title}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </PageTransition>
    );
};
