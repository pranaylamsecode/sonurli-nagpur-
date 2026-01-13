import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useContent } from '../../contexts/ContentContext';
import { Button } from '../../components/ui/Button';
import { LogOut, LayoutDashboard, FileText, Briefcase, Plus, Bell, Trash2 } from 'lucide-react';
import { VisitorChart } from '../../components/admin/VisitorChart';
import { ProjectList } from '../../components/admin/ProjectList';
import { ProjectForm } from '../../components/admin/ProjectForm';
import { Project } from '../../types';

export const AdminDashboard: React.FC = () => {
    const { logout } = useAuth();
    const { heroData, updateHeroData, projects, updateProjects, notifications, updateNotifications } = useContent();
    const [activeTab, setActiveTab] = useState('overview');
    const [editingProject, setEditingProject] = useState<Project | undefined>(undefined);
    const [isCreatingProject, setIsCreatingProject] = useState(false);

    const handleHeroUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        updateHeroData({
            ...heroData,
            title: formData.get('title') as string,
            subtitle: formData.get('subtitle') as string,
        });
        alert('Hero section updated!');
    };

    const handleProjectSubmit = (project: Project) => {
        if (editingProject) {
            updateProjects(projects.map(p => p.id === project.id ? project : p));
            setEditingProject(undefined);
        } else {
            updateProjects([...projects, project]);
            setIsCreatingProject(false);
        }
    };

    const handleDeleteProject = (id: string) => {
        if (window.confirm('Are you sure you want to delete this project?')) {
            updateProjects(projects.filter(p => p.id !== id));
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white flex">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-900 border-r border-slate-800 p-6 flex flex-col">
                <div className="mb-8">
                    <h1 className="text-xl font-bold text-brand-400">VeerIT Admin</h1>
                </div>

                <nav className="flex-1 space-y-2">
                    <button
                        onClick={() => setActiveTab('overview')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'overview' ? 'bg-brand-500/10 text-brand-400' : 'text-slate-400 hover:bg-slate-800'}`}
                    >
                        <LayoutDashboard className="w-5 h-5" /> Overview
                    </button>
                    <button
                        onClick={() => setActiveTab('projects')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'projects' ? 'bg-brand-500/10 text-brand-400' : 'text-slate-400 hover:bg-slate-800'}`}
                    >
                        <Briefcase className="w-5 h-5" /> Projects
                    </button>
                    <button
                        onClick={() => setActiveTab('offers')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'offers' ? 'bg-brand-500/10 text-brand-400' : 'text-slate-400 hover:bg-slate-800'}`}
                    >
                        <Bell className="w-5 h-5" /> Offers
                    </button>
                    <button
                        onClick={() => setActiveTab('content')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'content' ? 'bg-brand-500/10 text-brand-400' : 'text-slate-400 hover:bg-slate-800'}`}
                    >
                        <FileText className="w-5 h-5" /> Content
                    </button>
                </nav>

                <Button variant="outline" onClick={logout} className="mt-auto w-full justify-center">
                    <LogOut className="w-4 h-4 mr-2" /> Logout
                </Button>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto">
                {activeTab === 'overview' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                                <h3 className="text-slate-400 text-sm mb-2">Total Visitors (Today)</h3>
                                <p className="text-3xl font-bold text-white">1,234</p>
                                <p className="text-green-400 text-sm mt-2 flex items-center">
                                    +12% <span className="text-slate-500 ml-1">from yesterday</span>
                                </p>
                            </div>
                            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                                <h3 className="text-slate-400 text-sm mb-2">Active Projects</h3>
                                <p className="text-3xl font-bold text-brand-400">{projects.length}</p>
                            </div>
                            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                                <h3 className="text-slate-400 text-sm mb-2">New Inquiries</h3>
                                <p className="text-3xl font-bold text-green-400">5</p>
                            </div>
                        </div>

                        {/* Visitor Chart */}
                        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                            <h3 className="text-xl font-semibold mb-6">Visitor Traffic</h3>
                            <VisitorChart />
                        </div>
                    </div>
                )}

                {activeTab === 'projects' && (
                    <div>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold">Project Management</h2>
                            {!isCreatingProject && !editingProject && (
                                <Button onClick={() => setIsCreatingProject(true)}>
                                    <Plus className="w-4 h-4 mr-2" /> Add Project
                                </Button>
                            )}
                        </div>

                        {isCreatingProject || editingProject ? (
                            <ProjectForm
                                project={editingProject}
                                onSubmit={handleProjectSubmit}
                                onCancel={() => {
                                    setIsCreatingProject(false);
                                    setEditingProject(undefined);
                                }}
                            />
                        ) : (
                            <ProjectList
                                projects={projects}
                                onEdit={setEditingProject}
                                onDelete={handleDeleteProject}
                            />
                        )}
                    </div>
                )}

                {activeTab === 'offers' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Offers & Notifications</h2>

                        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 mb-8">
                            <h3 className="text-xl font-semibold mb-4">Create New Offer</h3>
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                const formData = new FormData(e.target as HTMLFormElement);
                                const text = formData.get('text') as string;
                                if (text) {
                                    updateNotifications([
                                        { id: Date.now().toString(), text, type: 'info', active: true },
                                        ...notifications
                                    ]);
                                    (e.target as HTMLFormElement).reset();
                                }
                            }} className="flex gap-4">
                                <input
                                    name="text"
                                    placeholder="Enter offer text (e.g., 'Get 20% off on Web Development services!')"
                                    className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-white"
                                    required
                                />
                                <Button type="submit">Add Offer</Button>
                            </form>
                        </div>

                        <div className="space-y-4">
                            {notifications.map(notification => (
                                <div key={notification.id} className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-2 h-2 rounded-full ${notification.active ? 'bg-green-500' : 'bg-slate-500'}`} />
                                        <p className="text-white">{notification.text}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => {
                                                updateNotifications(notifications.map(n =>
                                                    n.id === notification.id ? { ...n, active: !n.active } : n
                                                ));
                                            }}
                                        >
                                            {notification.active ? 'Deactivate' : 'Activate'}
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="text-red-400 hover:text-red-300 border-red-500/20 hover:bg-red-500/10"
                                            onClick={() => {
                                                if (window.confirm('Delete this notification?')) {
                                                    updateNotifications(notifications.filter(n => n.id !== notification.id));
                                                }
                                            }}
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                            {notifications.length === 0 && (
                                <p className="text-slate-400 text-center py-8">No notifications created yet.</p>
                            )}
                        </div>
                    </div>
                )}

                {activeTab === 'content' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Content Management</h2>

                        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 mb-8">
                            <h3 className="text-xl font-semibold mb-4">Hero Section</h3>
                            <form onSubmit={handleHeroUpdate} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-1">Title</label>
                                    <input
                                        name="title"
                                        defaultValue={heroData.title}
                                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-white"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-1">Subtitle</label>
                                    <textarea
                                        name="subtitle"
                                        defaultValue={heroData.subtitle}
                                        rows={3}
                                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-white"
                                    />
                                </div>
                                <Button type="submit">Save Changes</Button>
                            </form>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};
