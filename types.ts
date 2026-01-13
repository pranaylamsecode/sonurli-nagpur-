import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  tags: string[];
  featured?: boolean;
}

export interface Service {
  id: string;
   link: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  headerImage?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];  // ← Optional submenu items
}