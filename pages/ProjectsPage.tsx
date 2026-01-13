import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';

export const ProjectsPage: React.FC = () => {
    return (
        <div className="pt-24 pb-16 bg-slate-950 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Our <span className="text-brand-500">Work</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                            Explore our portfolio of successful projects and digital transformations.
                        </p>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <Reveal key={project.id} delay={index * 100}>
                            <div className="group rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden hover:border-brand-500/50 transition-all duration-300 flex flex-col h-full">
                                <div className="relative h-48 overflow-hidden bg-slate-800">
                                    <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors z-10"></div>
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold text-white group-hover:text-brand-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    </div>
                                    <p className="text-slate-400 text-sm mb-6 flex-1">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs font-medium text-slate-500 border border-slate-800 px-2 py-1 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-auto">
                                        <Button variant="outline" className="w-full group">
                                            Visit Site <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    );
};
