import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Project } from '../types';

interface FeaturedProjectsProps {
  projects: Project[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <div className="relative">
      <h3 className="text-2xl font-bold mb-6">Featured Projects</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center justify-center h-32 mb-6">
              {project.logo ? (
                <img
                  src={project.logo}
                  alt={project.name}
                  className="max-h-full max-w-full object-contain"
                />
              ) : (
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  {project.name}
                </span>
              )}
            </div>
            
            <h4 className="text-xl font-semibold mb-2">{project.name}</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
              {project.description}
            </p>
            
            <div className="flex justify-between items-center">
              <span className="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                {project.language}
              </span>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 hidden lg:block">
        <button
          className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
          aria-label="Previous project"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      </div>
      
      <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 hidden lg:block">
        <button
          className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
          aria-label="Next project"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}