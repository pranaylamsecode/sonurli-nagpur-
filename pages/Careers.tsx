import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, Upload, CheckCircle, Loader2, ArrowRight } from 'lucide-react';
import { Modal } from '../components/ui/Modal';
import { Button } from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';

interface Job {
    id: string;
    title: string;
    location: string;
    type: string;
    experience: string;
    description: string;
}

const JOBS: Job[] = [
    {
        id: 'php-dev',
        title: 'Senior PHP Developer',
        location: 'Nagpur, India (On-site)',
        type: 'Full-time',
        experience: '3+ years',
        description: 'We are looking for an experienced PHP developer to lead our backend team. You will be responsible for developing robust web applications and APIs.'
    },
    {
        id: 'react-dev',
        title: 'React Frontend Developer',
        location: 'Nagpur, India (On-site)',
        type: 'Full-time',
        experience: '1-3 years',
        description: 'Join our frontend team to build modern, responsive user interfaces. Experience with React, TypeScript, and Tailwind CSS is required.'
    },
    {
        id: 'ui-ux',
        title: 'UI/UX Designer',
        location: 'Remote / Hybrid',
        type: 'Full-time',
        experience: '2+ years',
        description: 'Create beautiful and intuitive digital experiences. Proficiency in Figma and a strong portfolio are must-haves.'
    },
    {
        id: 'bde',
        title: 'Business Development Executive',
        location: 'Nagpur, India',
        type: 'Full-time',
        experience: '1+ years',
        description: 'Drive growth by identifying new business opportunities and building strong client relationships.'
    }
];

export const Careers: React.FC = () => {
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleApply = (job: Job) => {
        setSelectedJob(job);
        setSuccess(false);
        setIsModalOpen(true);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            // Optional: Close modal after a few seconds
            // setTimeout(() => setIsModalOpen(false), 3000);
        }, 2000);
    };

    return (
        <div className="pt-24 pb-16 bg-slate-950 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Join Our <span className="text-brand-500">Team</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                            We are always looking for talented individuals to help us build the future of digital experiences.
                        </p>
                    </div>
                </Reveal>

                <div className="grid gap-6">
                    {JOBS.map((job, index) => (
                        <Reveal key={job.id} delay={index * 100}>
                            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 hover:border-brand-500/50 transition-all group">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-400 transition-colors">
                                            {job.title}
                                        </h3>
                                        <div className="flex flex-wrap gap-4 text-slate-400 text-sm mb-4">
                                            <span className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" /> {job.location}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Briefcase className="w-4 h-4" /> {job.type}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" /> {job.experience}
                                            </span>
                                        </div>
                                        <p className="text-slate-400 max-w-3xl">
                                            {job.description}
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <Button onClick={() => handleApply(job)} className="w-full md:w-auto">
                                            Apply Now
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={selectedJob ? `Apply for ${selectedJob.title}` : 'Apply Now'}
            >
                {success ? (
                    <div className="text-center py-8">
                        <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Application Sent!</h3>
                        <p className="text-slate-400 mb-6">
                            Thank you for your interest. Our team will review your application and get back to you shortly.
                        </p>
                        <Button onClick={() => setIsModalOpen(false)} variant="outline" className="w-full">
                            Close
                        </Button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                required
                                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                                placeholder="John Doe"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    required
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                                    placeholder="+91 98765 43210"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-1">Resume / CV</label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-800 border-dashed rounded-lg hover:border-brand-500/50 transition-colors cursor-pointer bg-slate-950/50">
                                <div className="space-y-1 text-center">
                                    <Upload className="mx-auto h-12 w-12 text-slate-500" />
                                    <div className="flex text-sm text-slate-400">
                                        <label
                                            htmlFor="file-upload"
                                            className="relative cursor-pointer rounded-md font-medium text-brand-400 hover:text-brand-300 focus-within:outline-none"
                                        >
                                            <span>Upload a file</span>
                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" required accept=".pdf,.doc,.docx" />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-slate-500">
                                        PDF, DOC up to 10MB
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <Button type="submit" className="w-full justify-center" disabled={loading}>
                                {loading ? (
                                    <span className="flex items-center gap-2">
                                        <Loader2 className="w-4 h-4 animate-spin" /> Sending Application...
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-2">
                                        Submit Application <ArrowRight className="w-4 h-4" />
                                    </span>
                                )}
                            </Button>
                        </div>
                    </form>
                )}
            </Modal>
        </div>
    );
};
