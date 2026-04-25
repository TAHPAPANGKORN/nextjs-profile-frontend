"use client";
import React from 'react';

interface StatusToggleProps {
  isActive: boolean;
  onToggle: () => void;
  loading?: boolean;
}

const StatusToggle: React.FC<StatusToggleProps> = ({ isActive, onToggle, loading }) => {
  return (
    <button
      onClick={onToggle}
      disabled={loading}
      className={`relative inline-flex h-5 w-10 items-center rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
        isActive ? 'bg-blue-600' : 'bg-zinc-200'
      } ${loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:scale-105 active:scale-95'}`}
    >
      <span
        className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow-sm transition-all duration-300 ease-spring ${
          isActive ? 'translate-x-5.5' : 'translate-x-1'
        }`}
      />
    </button>
  );
};

export default StatusToggle;
