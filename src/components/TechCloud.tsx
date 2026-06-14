import React from 'react';
import { motion } from 'framer-motion';

const techStack = [
  "React.js", "TypeScript", "Node.js", "Django", "Spring Boot", 
  "MySQL", "PostgreSQL", "Docker", "AWS", "Tailwind CSS",
  "REST APIs", "GraphQL", "Git", "Linux", "JWT"
];

const TechCloud = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 py-12 max-w-4xl mx-auto">
      {techStack.map((tech, index) => {
        // Generate consistent random values based on index to avoid hydration mismatch
        const duration = 3 + (index % 3);
        const yOffset = -5 - (index % 10);
        
        return (
          <motion.div
            key={tech}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: [0, yOffset, 0] 
            }}
            transition={{
              opacity: { duration: 0.5, delay: index * 0.05 },
              y: {
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.1
              }
            }}
            whileHover={{ scale: 1.1, backgroundColor: "#16a34a", color: "#ffffff" }}
            className="px-6 py-3 bg-white dark:bg-slate-800 rounded-full shadow-lg border border-gray-100 dark:border-slate-700 font-semibold text-slate-700 dark:text-gray-200 cursor-pointer"
          >
            {tech}
          </motion.div>
        );
      })}
    </div>
  );
};

export default TechCloud;
