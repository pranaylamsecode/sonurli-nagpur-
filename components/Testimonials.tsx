import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Reveal } from './ui/Reveal';
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';

export const Testimonials: React.FC = () => {
    return (
        <section className="py-24 bg-slate-900/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                            Don't just take our word for it. Here's what our partners have to say about working with VeerIT.
                        </p>
                    </div>
                </Reveal>

                <div className="h-[20rem] rounded-md flex flex-col antialiased bg-slate-950 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                    <InfiniteMovingCards
                        items={TESTIMONIALS.map(t => ({
                            quote: t.content,
                            name: t.name,
                            role: t.role,
                            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" // Placeholder as original didn't have images
                        }))}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </section>
    );
};
