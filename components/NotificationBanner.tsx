import React, { useState, useEffect } from 'react';
import { useContent } from '../contexts/ContentContext';
import { X, Bell, Info, AlertTriangle, CheckCircle } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export const NotificationBanner: React.FC = () => {
    const { notifications } = useContent();
    const [activeNotification, setActiveNotification] = useState<string | null>(null);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Find the first active notification
        const active = notifications.find(n => n.active);
        if (active) {
            // Check if user has dismissed this specific notification in this session
            const dismissed = sessionStorage.getItem(`dismissed_notification_${active.id}`);
            if (!dismissed) {
                setActiveNotification(active.id);
                setIsVisible(true);
            } else {
                setActiveNotification(null);
            }
        } else {
            setActiveNotification(null);
        }
    }, [notifications]);

    const handleDismiss = () => {
        setIsVisible(false);
        if (activeNotification) {
            sessionStorage.setItem(`dismissed_notification_${activeNotification}`, 'true');
        }
    };

    const currentNotification = notifications.find(n => n.id === activeNotification);

    if (!currentNotification || !isVisible) return null;

    const getIcon = () => {
        switch (currentNotification.type) {
            case 'warning': return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
            case 'success': return <CheckCircle className="w-5 h-5 text-green-400" />;
            default: return <Info className="w-5 h-5 text-blue-400" />;
        }
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="bg-slate-900 border-b border-slate-800 relative z-50"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        {getIcon()}
                        <p className="text-sm font-medium text-white">
                            <span className="font-bold text-brand-400 mr-2">New Offer:</span>
                            {currentNotification.text}
                        </p>
                    </div>
                    <button
                        onClick={handleDismiss}
                        className="text-slate-400 hover:text-white transition-colors p-1 hover:bg-slate-800 rounded-full"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};
