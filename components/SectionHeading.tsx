
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white mb-4">
        {title}
      </h2>
      {subtitle && <p className="text-zinc-400 text-lg max-w-2xl">{subtitle}</p>}
      <div className="h-1 w-20 bg-[#8B5CF6] mt-4 rounded-full" />
    </div>
  );
};
