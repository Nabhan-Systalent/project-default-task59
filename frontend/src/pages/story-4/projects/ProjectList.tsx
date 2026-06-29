'use client';

import React from 'react';
import { ProjectListProps } from './ProjectList.types';

export const ProjectList: React.FC<ProjectListProps> = ({ 
  projects = [], 
  isLoading = false, 
  error = null,
  onDelete,
  onEdit
}) => {
  if (isLoading) {
    return (
      <div className="w-full p-8 flex justify-center items-center">
        <div className="animate-pulse text-var(--color-text-secondary)">Loading projects...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full p-8 text-center text-[var(--color-error)] border border-[var(--color-error)] rounded-lg">
        {error}
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="w-full p-12 text-center border-2 border-dashed border-[var(--color-border)] rounded-xl">
        <p className="text-[var(--color-text-secondary)]">No projects found. Create your first project to get started.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {projects.map((project) => (
        <div 
          key={project.id}
          className="flex items-center justify-between p-6 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg hover:border-[var(--color-primary)] transition-colors"
        >
          <div>
            <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">{project.name}</h3>
            <p className="text-sm text-[var(--color-text-secondary)] mt-1">{project.description}</p>
            <div className="flex gap-4 mt-3 text-xs text-[var(--color-text-tertiary)]">
              <span>{project.memberCount} members</span>
              <span>Updated {project.lastUpdated}</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => onEdit?.(project.id)}
              className="px-4 py-2 text-sm font-medium text-[var(--color-primary)] hover:bg-[var(--color-surface-hover)] rounded-md transition-colors"
            >
              Edit
            </button>
            <button 
              onClick={() => onDelete?.(project.id)}
              className="px-4 py-2 text-sm font-medium text-[var(--color-error)] hover:bg-red-50 rounded-md transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
