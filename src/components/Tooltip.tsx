import React from 'react';

interface TooltipProps {
  message: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ message, children }) => {
  return (
    <div className="group relative flex">
      {children}
      <span
        className="absolute top-10 scale-0 transition-all rounded tooltip-arrow bg-white p-2 text-xs text-teal-600 group-hover:scale-100 z-50 shadow-md"
        style={{ borderColor: 'rgba(0, 0, 0, 0.1)' }}
      >
        {message}

      </span>
    </div>
  );
};

export default Tooltip;
