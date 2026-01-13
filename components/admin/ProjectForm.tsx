import React, { useState, useEffect } from 'react';
import { Project } from '../../types';
import { Button } from '../ui/Button';
import { X } from 'lucide-react';

interface ProjectFormProps {
    project?: Project;
    onSubmit: (project: Project) => void;
    onCancel: () => void;
}

export const ProjectForm: React.FC<ProjectFormProps> = ({ project, onSubmit, onCancel }) => {
    const [formData, setFormData] = useState<Partial<Project>>({
        title: '',
        description: '',
        imageUrl: '',
        link: '',
        tags: [],
        featured: false
    });
    const [tagInput, setTagInput] = useState('');

    useEffect(() => {
        if (project) {
            setFormData(project);
        }
    }, [project]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({
            id: project?.id || Date.now().toString(),
            ...formData as Omit<Project, 'id'>
        });
    };

    const addTag = () => {
        if (tagInput.trim()) {
            setFormData(prev => ({
                ...prev,
                tags: [...(prev.tags || []), tagInput.trim()]
            }));
            setTagInput('');
        }
    };

    const removeTag = (tagToRemove: string) => {
        setFormData(prev => ({
            ...prev,
            tags: prev.tags?.filter(tag => tag !== tagToRemove)
        }));
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 bg-slate-900 p-6 rounded-xl border border-slate-800">
            <h3 className="text-xl font-bold text-white mb-4">{project ? 'Edit Project' : 'Add New Project'}</h3>

            <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Title</label>
                <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={e => setFormData({ ...formData, title: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-white"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Description</label>
                <textarea
                    required
                    rows={3}
                    value={formData.description}
                    onChange={e => setFormData({ ...formData, description: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-white"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Image URL</label>
                <input
                    type="url"
                    required
                    value={formData.imageUrl}
                    onChange={e => setFormData({ ...formData, imageUrl: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-white"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Project Link</label>
                <input
                    type="url"
                    required
                    value={formData.link}
                    onChange={e => setFormData({ ...formData, link: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-white"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Tags</label>
                <div className="flex gap-2 mb-2">
                    <input
                        type="text"
                        value={tagInput}
                        onChange={e => setTagInput(e.target.value)}
                        className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-white"
                        placeholder="Add a tag..."
                        onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addTag())}
                    />
                    <Button type="button" onClick={addTag} variant="outline">Add</Button>
                </div>
                <div className="flex flex-wrap gap-2">
                    {formData.tags?.map(tag => (
                        <span key={tag} className="flex items-center gap-1 bg-slate-800 text-slate-300 px-2 py-1 rounded text-sm">
                            {tag}
                            <button type="button" onClick={() => removeTag(tag)} className="hover:text-red-400">
                                <X className="w-3 h-3" />
                            </button>
                        </span>
                    ))}
                </div>
            </div>

            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    id="featured"
                    checked={formData.featured}
                    onChange={e => setFormData({ ...formData, featured: e.target.checked })}
                    className="rounded border-slate-800 bg-slate-950 text-brand-500 focus:ring-brand-500"
                />
                <label htmlFor="featured" className="text-sm font-medium text-slate-300">Featured Project</label>
            </div>

            <div className="flex justify-end gap-3 mt-6">
                <Button type="button" variant="outline" onClick={onCancel}>Cancel</Button>
                <Button type="submit">{project ? 'Update Project' : 'Create Project'}</Button>
            </div>
        </form>
    );
};
