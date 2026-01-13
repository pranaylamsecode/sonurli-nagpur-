import React from 'react';
import { HoverEffect } from './ui/CardHoverEffect';
import { Code, Database, Globe, Server, Smartphone } from 'lucide-react';

export const TechStack: React.FC = () => {
    const projects = [
        {
            title: "Laravel",
            description:
                "A robust PHP framework for building modern, secure, and scalable web applications.",
            icon: <Code className="w-6 h-6 text-red-500" />,
        },
        {
            title: "PHP",
            description:
                "The backbone of the web, powering dynamic content and server-side logic.",
            icon: <Server className="w-6 h-6 text-indigo-400" />,
        },
        {
            title: "Next.js",
            description:
                "The React framework for production, enabling fast, SEO-friendly web experiences.",
            icon: <Globe className="w-6 h-6 text-white" />,
        },
        {
            title: "React",
            description:
                "A JavaScript library for building interactive user interfaces with reusable components.",
            icon: <Code className="w-6 h-6 text-blue-400" />,
        },
        {
            title: "Node.js",
            description:
                "JavaScript runtime built on Chrome's V8 engine for scalable network applications.",
            icon: <Database className="w-6 h-6 text-green-500" />,
        },
        {
            title: "Mobile Apps",
            description:
                "Cross-platform mobile development using React Native and Flutter.",
            icon: <Smartphone className="w-6 h-6 text-purple-400" />,
        },
    ];

    return (
        <section className="py-24 bg-slate-950">
            <div className="max-w-5xl mx-auto px-8">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Tech Stack</h2>
                    <p className="text-lg text-slate-400">
                        The cutting-edge technologies we use to build robust and scalable solutions.
                    </p>
                </div>
                <HoverEffect items={projects} />
            </div>
        </section>
    );
};
