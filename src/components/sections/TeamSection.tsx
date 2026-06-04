import React from 'react';
import { projects } from '../../data/team';

const TeamSection: React.FC = () => {
  return (
    <section id="projects" className="bg-white dark:bg-[#0a0a0a] py-[clamp(3.5rem,8vw,6rem)]">
      <div className="mx-[clamp(1rem,calc(-2.394rem+13.93vw),8.75rem)]">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="w-full mx-auto font-bold text-[clamp(1.75rem,calc(0.975rem+3.175vw),2.5rem)] leading-tight tracking-[-0.02em] text-center text-gray-900 dark:text-[#FDFDFD] flex-none order-0 self-stretch grow-0 mb-4">
            From Vision to Launch! Projects We're Proud Of
          </h2>
          <p className="font-medium text-[clamp(0.875rem,1.8vw,1.125rem)] leading-7 sm:leading-8 text-center text-[#A4A7AE] flex-none order-1 self-stretch grow-0">
            Take a closer look at our recent work powering startups, enterprises, and everything in between.
          </p>
        </div>

        {/* 3-column equal grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Image preview card */}
              <div className="relative w-full aspect-square md:aspect-auto md:h-93.25 rounded-2xl overflow-hidden bg-gray-50 dark:bg-white/6 border border-gray-200 dark:border-white/8 group-hover:border-gray-300 dark:group-hover:border-white/20 group-hover:shadow-lg transition-all duration-300 mb-4">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <div className="h-full flex items-center justify-center text-[#717680] dark:text-white/20 text-sm">
                    No preview
                  </div>
                )}
              </div>

              {/* Label + title */}
              <p className="w-full font-medium text-base leading-7.5 text-[#FF623E] flex-none order-0 self-stretch grow-0">
                {project.label}
              </p>
              <h3 className="w-full font-bold text-[clamp(1rem,1.5vw,1.25rem)] leading-tight text-gray-900 dark:text-[#FDFDFD] flex-none order-1 self-stretch grow-0">
                {project.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;
