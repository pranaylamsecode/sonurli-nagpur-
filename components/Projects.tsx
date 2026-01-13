import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/Button';
import { Link } from 'react-router-dom';
import { useContent } from '../contexts/ContentContext';

export const Projects: React.FC = () => {
  const { projects } = useContent();
  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => p.id !== featuredProject?.id);

  // Duplicate projects for seamless scrolling
  const scrollProjects = [...otherProjects, ...otherProjects];

  return (
    <section id="projects" className="py-24 bg-slate-900/30 overflow-hidden">
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
              <span className="px-3 py-1 rounded-full bg-brand-500/20 text-brand-400 text-sm font-bold border border-brand-500/30">
                500+ Delivered
              </span>
            </div>
            <p className="text-lg text-slate-400 max-w-xl">
              Showcasing a few of our 500+ successful projects in SaaS, web applications, and digital experiences.
            </p>
          </div>
          <Link to="/projects" className="hidden md:inline-flex relative h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 focus:ring-offset-slate-950 group">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ef4444_0%,#f97316_50%,#ef4444_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-colors group-hover:bg-slate-950/80">
              View All Projects
            </span>
          </Link>
        </div>

        {/* Featured Project (GroupBook) */}
        {featuredProject && (
          <div className="mb-20 rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 grid grid-cols-1 lg:grid-cols-2 shadow-2xl shadow-black/50">
            <div className="p-8 md:p-12 flex flex-col justify-center order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 text-xs font-semibold uppercase tracking-wider">
                  Featured Case Study
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {featuredProject.title}
              </h3>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                {featuredProject.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-10">
                {featuredProject.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={featuredProject.link} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full sm:w-auto">
                    Visit Live Site
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative h-64 lg:h-auto bg-slate-800 overflow-hidden order-1 lg:order-2 group">
              {/* Decorative Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 opacity-60"></div>
              <img
                src={featuredProject.imageUrl}
                alt={featuredProject.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
              />
            </div>
          </div>
        )}

        {/* Horizontal Scrolling Projects */}
        <div className="relative w-full -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="flex gap-8 animate-scroll w-max px-4">
            {scrollProjects.map((project, index) => (
              <div key={`${project.id}-${index}`} className="w-[350px] md:w-[400px] flex-shrink-0 group rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden hover:border-slate-700 transition-all duration-300 flex flex-col">
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
                  <p className="text-slate-400 text-sm mb-6 flex-1 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-xs font-medium text-slate-500 border border-slate-800 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};