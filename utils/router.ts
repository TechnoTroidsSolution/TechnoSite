'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

/**
 * Custom hook for enhanced navigation functionality
 * Provides programmatic routing with additional features
 */
export const useAppRouter = () => {
  const router = useRouter();

  const navigateTo = useCallback((path: string, options?: { replace?: boolean; scroll?: boolean }) => {
    if (options?.replace) {
      router.replace(path);
    } else {
      router.push(path);
    }
    
    if (options?.scroll !== false) {
      // Scroll to top after navigation
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  }, [router]);

  const goBack = useCallback(() => {
    router.back();
  }, [router]);

  const goForward = useCallback(() => {
    router.forward();
  }, [router]);

  const refresh = useCallback(() => {
    router.refresh();
  }, [router]);

  return {
    navigateTo,
    goBack,
    goForward,
    refresh,
    router
  };
};

/**
 * Navigation routes configuration
 */
export const routes = {
  home: '/',
  about: '/about',
  services: '/services',
  contact: '/contact',
  blog: '/blog',
  careers: '/careers',
  privacy: '/privacy',
  terms: '/terms',
  cookies: '/cookies',
  
  // Service specific routes
  webDevelopment: '/services/web-development',
  mobileApps: '/services/mobile-apps',
  cloudSolutions: '/services/cloud-solutions',
  aiMl: '/services/ai-ml',
  consulting: '/services/consulting',
  maintenance: '/services/maintenance',
  

} as const;

/**
 * Type for route keys
 */
export type RouteKey = keyof typeof routes;

/**
 * Get route path by key
 */
export const getRoute = (key: RouteKey): string => {
  return routes[key];
};

/**
 * Check if current path matches route
 */
export const isActiveRoute = (currentPath: string, routePath: string): boolean => {
  if (routePath === '/') {
    return currentPath === '/';
  }
  return currentPath.startsWith(routePath);
};