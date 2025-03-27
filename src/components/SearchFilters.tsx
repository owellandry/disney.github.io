import React from 'react';
import { Search } from 'lucide-react';
import type { Category, SearchFilters } from '../types';

const categories: Category[] = ['All', 'Frontend', 'Backend', 'Mobile', 'Tools', 'Libraries'];
const languages = ['All', 'JavaScript', 'Python', 'Java', 'Swift', 'Go', 'Rust'];

interface SearchFiltersProps {
  filters: SearchFilters;
  onFilterChange: (filters: SearchFilters) => void;
}

export function SearchFilters({ filters, onFilterChange }: SearchFiltersProps) {
  return (
    <div className="space-y-4 md:space-y-0 md:flex md:items-center md:space-x-4">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search projects..."
          value={filters.query}
          onChange={(e) => onFilterChange({ ...filters, query: e.target.value })}
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      
      <select
        value={filters.category}
        onChange={(e) => onFilterChange({ ...filters, category: e.target.value as Category })}
        className="w-full md:w-auto px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        {categories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      
      <select
        value={filters.language}
        onChange={(e) => onFilterChange({ ...filters, language: e.target.value })}
        className="w-full md:w-auto px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        {languages.map((language) => (
          <option key={language} value={language}>{language}</option>
        ))}
      </select>
    </div>
  );
}