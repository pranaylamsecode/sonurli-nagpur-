import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import { CONTACT_INFO } from '../constants';
import { PageTransition } from '../components/PageTransition';

export const ContactPage: React.FC = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormState({ name: '', email: '', subject: '', message: '' });

        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <PageTransition>
            <div className="pt-24 pb-16 bg-white min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Reveal>
                        <div className="text-center mb-16">
                            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
                                सहायता कक्षा
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
                                संपर्क <span className="text-brand-500">साधा</span>
                            </h1>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                कोणत्याही प्रश्न किंवा तक्रारीसाठी आमच्याशी संपर्क साधा. आम्ही तुमच्या सेवेसाठी सदैव तत्पर आहोत.
                            </p>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <Reveal delay={200}>
                            <div className="space-y-8">
                                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-6">संपर्क माहिती</h3>
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 flex-shrink-0">
                                                <Mail className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500 mb-1">ईमेल</p>
                                                <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-800 hover:text-brand-500 transition-colors font-medium">
                                                    {CONTACT_INFO.email}
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center text-brand-600 flex-shrink-0">
                                                <Phone className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500 mb-1">फोन</p>
                                                <a href={`tel:${CONTACT_INFO.phone}`} className="text-gray-800 hover:text-brand-500 transition-colors font-medium">
                                                    {CONTACT_INFO.phone}
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center text-accent-600 flex-shrink-0">
                                                <MapPin className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500 mb-1">पत्ता</p>
                                                <p className="text-gray-800 font-medium">
                                                    {CONTACT_INFO.address}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Google Map */}
                                <div className="bg-gray-50 p-2 rounded-2xl border border-gray-100 h-64 relative overflow-hidden group">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3727.3665274707896!2d79.00450975075648!3d20.89756842579915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4986e3751cc7b%3A0xebd4b670727120ae!2sSonurli%2C%20Maharashtra%20441108!5e0!3m2!1sen!2sin!4v1768320844386!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
                                    ></iframe>
                                </div>
                            </div>
                        </Reveal>

                        {/* Contact Form */}
                        <Reveal delay={400}>
                            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                                    <MessageSquare className="w-6 h-6 text-brand-500" />
                                    संदेश पाठवा
                                </h3>

                                {isSubmitted ? (
                                    <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center animate-fade-in">
                                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                                            <Send className="w-8 h-8" />
                                        </div>
                                        <h4 className="text-xl font-bold text-gray-800 mb-2">संदेश पाठविला!</h4>
                                        <p className="text-gray-600">
                                            आमच्याशी संपर्क साधल्याबद्दल धन्यवाद. आम्ही लवकरच आपल्याशी संपर्क साधू.
                                        </p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label htmlFor="name" className="text-sm font-medium text-gray-600">नाव</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    required
                                                    value={formState.name}
                                                    onChange={e => setFormState({ ...formState, name: e.target.value })}
                                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none text-gray-800 placeholder-gray-400 transition-all"
                                                    placeholder="पूर्ण नाव"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="email" className="text-sm font-medium text-gray-600">ईमेल</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    required
                                                    value={formState.email}
                                                    onChange={e => setFormState({ ...formState, email: e.target.value })}
                                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none text-gray-800 placeholder-gray-400 transition-all"
                                                    placeholder="example@gmail.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="subject" className="text-sm font-medium text-gray-600">विषय</label>
                                            <input
                                                type="text"
                                                id="subject"
                                                required
                                                value={formState.subject}
                                                onChange={e => setFormState({ ...formState, subject: e.target.value })}
                                                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none text-gray-800 placeholder-gray-400 transition-all"
                                                placeholder="विषय"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="message" className="text-sm font-medium text-gray-600">संदेश</label>
                                            <textarea
                                                id="message"
                                                required
                                                rows={5}
                                                value={formState.message}
                                                onChange={e => setFormState({ ...formState, message: e.target.value })}
                                                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none text-gray-800 placeholder-gray-400 transition-all resize-none"
                                                placeholder="तुमचा संदेश..."
                                            ></textarea>
                                        </div>

                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full bg-brand-500 hover:bg-brand-600 text-white"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center gap-2">
                                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                    पाठवत आहे...
                                                </span>
                                            ) : (
                                                <span className="flex items-center gap-2">
                                                    संदेश पाठवा
                                                    <Send className="w-5 h-5" />
                                                </span>
                                            )}
                                        </Button>
                                    </form>
                                )}
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};
