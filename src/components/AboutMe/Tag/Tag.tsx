import React from 'react'
type TagProps = {
  label: string;
};

export default function Tag({ label }: TagProps) {
  return (
      <p className="flex gap-1 w-auto tag-item hover:bg-white/10 hover:text-white-900">
        {label}
      </p>
  );
}
