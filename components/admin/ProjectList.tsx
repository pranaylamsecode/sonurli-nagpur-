import React from 'react';
import { Project } from '../../types';
import { Button } from '../ui/Button';
import { Edit, Trash2, ExternalLink } from 'lucide-react';

interface ProjectListProps {
    projects: Project[];
    onEdit: (project: Project) => void;
    onDelete: (id: string) => void;
}

export const ProjectList: React.FC<ProjectListProps> = ({ projects, onEdit, onDelete }) => {
    return (
        <div className="grid grid-cols-1 gap-4">
            {projects.map((project) => (
                <div key={project.id} className="bg-slate-900 border border-slate-800 rounded-lg p-4 flex flex-col md:flex-row items-center gap-4">
                    <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full md:w-32 h-20 object-cover rounded-md"
                    />
                    <div className="flex-1 w-full">
                        <h3 className="text-lg font-bold text-white">{project.title}</h3>
                        <p className="text-slate-400 text-sm line-clamp-1">{project.description}</p>
                        <div className="flex gap-2 mt-2">
                            {project.tags.slice(0, 3).map(tag => (
                                <span key={tag} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="flex gap-2 w-full md:w-auto">
                        <Button variant="outline" size="sm" onClick={() => onEdit(project)}>
                            <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-400 hover:text-red-300 border-red-500/20 hover:bg-red-500/10" onClick={() => onDelete(project.id)}>
                            <Trash2 className="w-4 h-4" />
                        </Button>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="sm">
                                <ExternalLink className="w-4 h-4" />
                            </Button>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};
