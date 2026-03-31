
import React from 'react';

interface SkillBarProps {
  name: string;
  percentage: number;
  description?: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, percentage, description }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium text-gray-700">{name}</span>
        <span className="text-sm text-portfolio-burgundy font-medium">{percentage}%</span>
      </div>
      {description && (
        <p className="text-sm text-gray-500 mb-2">{description}</p>
      )}
      <div className="skill-progress">
        <div 
          className="skill-progress-bar transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
