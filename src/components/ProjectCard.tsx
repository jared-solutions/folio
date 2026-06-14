
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import { Zap, Search } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  performance?: number;
  seo?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  id, 
  title, 
  description, 
  image, 
  tags,
  performance = 99,
  seo = 100
}) => {
  return (
    <div className="project-card bg-white dark:bg-slate-800 border border-transparent dark:border-slate-700">
      <div className="h-48 overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-2 right-2 flex flex-col gap-1">
          <div className="bg-black/70 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded flex items-center shadow">
            <Zap size={12} className="text-yellow-400 mr-1" /> {performance}% Perf
          </div>
          <div className="bg-black/70 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded flex items-center shadow">
            <Search size={12} className="text-green-400 mr-1" /> {seo}% SEO
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-700"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{description}</p>
        <Link 
          to={`/projects/${id}`} 
          className="inline-flex items-center text-green-600 font-medium hover:underline"
        >
          View Project <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
