import { ReactNode } from 'react';
import Index from '@/pages/Index';
import Services from '@/pages/Services';
import NotFound from '@/pages/NotFound';

export interface RouteConfig {
  path: string;
  element: ReactNode;
  label?: string;
  isPublished?: boolean; // Whether to show in navbar
}

export const appRoutes: RouteConfig[] = [
  {
    path: '/',
    element: <Index />,
    label: 'Home',
    isPublished: true,
  },
  {
    path: '/services',
    element: <Services />,
    label: 'Services',
    isPublished: false, // Hidden from navbar, but accessible
  },
  {
    path: '*',
    element: <NotFound />,
    isPublished: false,
  },
];

// Helper to get published routes (for navbar)
export const getPublishedRoutes = () => appRoutes.filter(route => route.isPublished);

// Helper to get all accessible routes (for routing)
export const getAllRoutes = () => appRoutes;
