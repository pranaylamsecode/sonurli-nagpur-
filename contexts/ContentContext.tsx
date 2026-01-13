import React, { createContext, useContext, useState, useEffect } from 'react';
import { HERO_DATA, PROJECTS, SERVICES, CONTACT_INFO } from '../constants';
import { Project, Service } from '../types';

export interface Notification {
    id: string;
    text: string;
    type: 'info' | 'warning' | 'success';
    active: boolean;
}

interface ContentContextType {
    heroData: typeof HERO_DATA;
    updateHeroData: (data: typeof HERO_DATA) => void;
    projects: Project[];
    updateProjects: (projects: Project[]) => void;
    services: Service[];
    updateServices: (services: Service[]) => void;
    contactInfo: typeof CONTACT_INFO;
    updateContactInfo: (info: typeof CONTACT_INFO) => void;
    notifications: Notification[];
    updateNotifications: (notifications: Notification[]) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [heroData, setHeroData] = useState(HERO_DATA);
    const [projects, setProjects] = useState(PROJECTS);
    const [services, setServices] = useState(SERVICES);
    const [contactInfo, setContactInfo] = useState(CONTACT_INFO);
    const [notifications, setNotifications] = useState<Notification[]>([]);

    // Load from LocalStorage on mount
    useEffect(() => {
        const savedHero = localStorage.getItem('heroData');
        if (savedHero) setHeroData(JSON.parse(savedHero));

        const savedProjects = localStorage.getItem('projects');
        if (savedProjects) setProjects(JSON.parse(savedProjects));

        const savedServices = localStorage.getItem('services');
        if (savedServices) setServices(JSON.parse(savedServices));

        const savedContact = localStorage.getItem('contactInfo');
        if (savedContact) setContactInfo(JSON.parse(savedContact));

        const savedNotifications = localStorage.getItem('notifications');
        if (savedNotifications) setNotifications(JSON.parse(savedNotifications));
    }, []);

    const updateHeroData = (data: typeof HERO_DATA) => {
        setHeroData(data);
        localStorage.setItem('heroData', JSON.stringify(data));
    };

    const updateProjects = (data: Project[]) => {
        setProjects(data);
        localStorage.setItem('projects', JSON.stringify(data));
    };

    const updateServices = (data: Service[]) => {
        setServices(data);
        localStorage.setItem('services', JSON.stringify(data));
    };

    const updateContactInfo = (data: typeof CONTACT_INFO) => {
        setContactInfo(data);
        localStorage.setItem('contactInfo', JSON.stringify(data));
    };

    const updateNotifications = (data: Notification[]) => {
        setNotifications(data);
        localStorage.setItem('notifications', JSON.stringify(data));
    };

    return (
        <ContentContext.Provider value={{
            heroData, updateHeroData,
            projects, updateProjects,
            services, updateServices,
            contactInfo, updateContactInfo,
            notifications, updateNotifications
        }}>
            {children}
        </ContentContext.Provider>
    );
};

export const useContent = () => {
    const context = useContext(ContentContext);
    if (context === undefined) {
        throw new Error('useContent must be used within a ContentProvider');
    }
    return context;
};
