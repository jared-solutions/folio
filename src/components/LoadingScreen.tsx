import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [color, setColor] = useState("#00FF00");

  const colors = [
    "#00FF00", "#FF6347", "#FF1493", "#1E90FF", "#FFD700", "#32CD32", "#8A2BE2", "#FF4500", "#00BFFF", "#FF8C00"
  ];

  const getLoadingMessage = () => {
    if (progress <= 25) return "Initializing...";
    if (progress <= 50) return "Loading assets...";
    if (progress <= 75) return "Preparing resources...";
    return "Finalizing setup...";
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.floor(Math.random() * 5) + 1;
        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onLoadingComplete();
          }, 1000); // Wait 1s after reaching 100% before completing
          return 100;
        }
        return newProgress;
      });
    }, 200);

    // Change color every 0.5 seconds
    const colorTimer = setInterval(() => {
      setColor(colors[Math.floor(Math.random() * colors.length)]);
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(colorTimer);
    };
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-3">
          <span className="text-white">Jared</span>
          <span className="text-green-600">Mogonchi</span>
        </h1>
        <p className="text-gray-400 mb-8 text-lg">{getLoadingMessage()}</p>

        {/* Circular Loader */}
        <div className="relative w-64 h-64 flex items-center justify-center">
          <svg
            className="absolute"
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="150"
          >
            <circle
              cx="18"
              cy="18"
              r="15"
              stroke="#333"
              strokeWidth="3"
              fill="none"
            />
            {/* Animated circle */}
            <motion.circle
              cx="18"
              cy="18"
              r="15"
              stroke={color}
              strokeWidth="3"
              fill="none"
              strokeDasharray="94"
              strokeDashoffset={(94 * (100 - progress)) / 100}
              initial={{ strokeDashoffset: 94 }}
              animate={{ strokeDashoffset: (94 * (100 - progress)) / 100 }}
              transition={{ duration: 0.2 }}
            />
          </svg>

          {/* Percentage Text Inside Circle */}
          <div className="absolute text-center text-white font-bold text-2xl">
            {progress}%
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 w-full px-4">
          <p className="text-gray-400">Loading assets</p>
        </div>

        {/* Animated Text */}
        <div className="mt-6 overflow-hidden h-8">
          <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.div
              animate={{
                opacity: [0, 1, 1, 0],
                y: [10, 0, 0, -10]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 0.5
              }}
              className="text-gray-300"
            >
              Building something amazing for you...
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
