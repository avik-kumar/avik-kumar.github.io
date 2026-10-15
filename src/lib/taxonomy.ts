export const PROJECT_CATEGORIES = {
  robotics: 'Robotics',
  'machine-learning': 'Machine Learning',
  'formal-methods': 'Formal Methods',
  'software-engineering': 'Software Engineering',
  'simulation-data': 'Simulation & Data Systems',
  independent: 'Independent Projects',
} as const;

export const PROJECT_STATUSES = {
  active: 'Active',
  completed: 'Completed',
  archived: 'Archived',
} as const;

export type ProjectCategory = keyof typeof PROJECT_CATEGORIES;
export type ProjectStatus = keyof typeof PROJECT_STATUSES;
