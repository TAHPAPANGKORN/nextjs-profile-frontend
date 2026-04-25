"use client";
import React from "react";

const ProjectSkeleton = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mx-2 md:gap-6 w-full max-w-6xl animate-pulse">
      {/* Image Skeleton */}
      <div className="bg-gray-300 rounded-xl shadow-xl h-[200px] w-full md:h-[300px] md:w-[500px]" />
      
      <div className="flex flex-col gap-3 w-full">
        {/* Title Skeleton */}
        <div className="h-8 bg-gray-300 rounded-md w-3/4 md:w-1/2" />
        
        {/* Description Skeleton */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded-md w-full" />
          <div className="h-4 bg-gray-200 rounded-md w-full md:w-5/6" />
          <div className="h-4 bg-gray-200 rounded-md w-2/3" />
        </div>

        {/* Tech Stack Skeleton */}
        <div className="flex flex-wrap items-center gap-3 mt-1 mb-1">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-8 w-20 bg-gray-200 rounded-xl" />
          ))}
        </div>

        {/* Links Skeleton */}
        <div className="flex gap-4 items-center">
          <div className="h-4 bg-blue-200 rounded-md w-24" />
          <div className="h-4 bg-blue-200 rounded-md w-24" />
        </div>
      </div>
    </div>
  );
};

export default ProjectSkeleton;
