import React from "react";
import { motion } from "framer-motion";
import { GALLERY_IMAGES } from "../constants";

export const GallerySection: React.FC = () => {
    return (
        <section id="gallery" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-emerald-600 font-semibold text-sm uppercase tracking-wider"
                    >
                        फोटो गॅलरी
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-gray-800 mt-2 mb-4"
                    >
                        गॅलरी
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600 max-w-2xl mx-auto"
                    >
                        आमच्या गावातील विविध उपक्रम आणि विकास कार्यांचे छायाचित्रे
                    </motion.p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {GALLERY_IMAGES.map((image, index) => (
                        <motion.div
                            key={image.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="relative group overflow-hidden rounded-xl aspect-square"
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
    );
};
