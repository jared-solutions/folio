
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
      <div className="h-32 sm:h-48 overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-2 right-2 flex flex-col gap-1">
          <div className="bg-black/70 backdrop-blur-sm text-white text-[8px] sm:text-[10px] font-bold px-1 sm:px-2 py-0.5 sm:py-1 rounded flex items-center shadow">
            <Zap size={10} className="text-yellow-400 mr-1 sm:w-3 sm:h-3" /> <span className="hidden sm:inline">{performance}% Perf</span><span className="sm:hidden">{performance}%</span>
          </div>
          <div className="bg-black/70 backdrop-blur-sm text-white text-[8px] sm:text-[10px] font-bold px-1 sm:px-2 py-0.5 sm:py-1 rounded flex items-center shadow">
            <Search size={10} className="text-green-400 mr-1 sm:w-3 sm:h-3" /> <span className="hidden sm:inline">{seo}% SEO</span><span className="sm:hidden">{seo}%</span>
          </div>
        </div>
      </div>
      <div className="p-3 sm:p-6">
        <div className="flex overflow-x-auto sm:flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3 pb-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="whitespace-nowrap text-[8px] sm:text-xs font-medium px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-sm sm:text-xl font-bold mb-1 sm:mb-2 text-gray-800 dark:text-white line-clamp-1">{title}</h3>
        <p className="text-xs sm:text-base text-gray-600 dark:text-gray-300 mb-2 sm:mb-4 line-clamp-2">{description}</p>
        <Link 
          to={`/projects/${id}`} 
          className="inline-flex items-center text-[10px] sm:text-base text-green-600 font-medium hover:underline"
        >
          View Project <ArrowRight size={14} className="ml-1 sm:w-4 sm:h-4" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
