import React from 'react';
import { Star, GitFork, ExternalLink, Sparkles } from 'lucide-react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700 magic-border">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
          {project.name}
          {project.featured && <Sparkles className="h-4 w-4 text-yellow-400" />}
        </h3>
        <span className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          {project.language}
        </span>
      </div>
      
      {project.logo && (
        <div className="mb-4 flex justify-center">
          <img
            src={project.logo}
            alt={project.name}
            className="h-24 w-auto object-contain"
          />
        </div>
      )}
      
      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
        {project.description}
      </p>
      
      <div className="flex items-center justify-between">
        <div className="flex space-x-4">
          <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-300">
            <Star className="h-4 w-4" />
            <span>{project.stars}</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-300">
            <GitFork className="h-4 w-4" />
            <span>{project.forks}</span>
          </div>
        </div>
        
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:underline group"
        >
          <span>View Project</span>
          <ExternalLink className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}