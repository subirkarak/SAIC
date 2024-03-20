import React from 'react';

const Tooltip = ({ text, children }) => {
  return (
    <div className="relative inline-block">
      {children}
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white rounded p-2 text-sm opacity-0 transition-opacity duration-200 ease-in-out pointer-events-none">
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
