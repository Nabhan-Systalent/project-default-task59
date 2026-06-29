'use client';

import React, { useState } from 'react';
import { BoardColumn, Task } from './Board.types';

const INITIAL_TASKS: Task[] = [
  { id: '1', title: 'Setup project repo', status: 'done', priority: 'high' },
  { id: '2', title: 'Implement auth', status: 'in-progress', priority: 'high' },
  { id: '3', title: 'Design board UI', status: 'todo', priority: 'medium' },
];

const COLUMNS: BoardColumn[] = [
  { id: 'col-1', title: 'To Do', status: 'todo' },
  { id: 'col-2', title: 'In Progress', status: 'in-progress' },
  { id: 'col-3', title: 'Done', status: 'done' },
];

export const ProjectBoard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);

  return (
    <div className="flex gap-6 p-6 h-full overflow-x-auto bg-[var(--color-bg-secondary)]">
      {COLUMNS.map((col) => (
        <div key={col.id} className="w-80 flex flex-col gap-4">
          <h3 className="font-semibold text-lg text-[var(--color-text-primary)]">{col.title}</h3>
          <div className="flex flex-col gap-3 min-h-[500px] bg-[var(--color-bg-tertiary)] p-3 rounded-lg">
            {tasks
              .filter((t) => t.status === col.status)
              .map((task) => (
                <div 
                  key={task.id} 
                  className="bg-[var(--color-bg-primary)] p-4 rounded-md shadow-sm border border-[var(--color-border-primary)] cursor-pointer hover:border-[var(--color-primary)] transition-colors"
                >
                  <p className="text-[var(--color-text-primary)] font-medium">{task.title}</p>
                  <span className={`text-xs px-2 py-1 rounded-full mt-2 inline-block ${
                    task.priority === 'high' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {task.priority}
                  </span>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};
