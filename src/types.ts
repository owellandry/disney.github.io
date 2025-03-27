export interface Project {
  name: string;
  owner: string;
  repo: string;
  description: string;
  url: string;
  language: string;
  stars: number;
  forks: number;
  category: string;
  logo?: string;
  moreInfoUrl?: string;
  featured?: boolean;
}

export type Category = 'All' | 'Frontend' | 'Backend' | 'Mobile' | 'Tools' | 'Libraries' | 'Graphics' | 'Testing';

export interface SearchFilters {
  query: string;
  category: Category;
  language: string;
}