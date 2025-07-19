import { cvData } from "../../data/cvData";
import React from "react";

export default function ProjectsPage() {
  return (
    <main className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Projects</h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {cvData.projects.map((project, idx) => (
          <div key={idx} className="bg-white/80 dark:bg-black/60 rounded-xl shadow p-6 flex flex-col gap-4 border border-gray-100 dark:border-gray-800">
            <h2 className="text-xl font-semibold flex items-center gap-2 text-gray-900 dark:text-white">
              {project.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {/* If tech stack is added to cvData.projects, render here */}
            </div>
            {/* Placeholder for GitHub / Demo link */}
          </div>
        ))}
      </div>
    </main>
  );
} 