export const site = {
  name: 'Avik Kumar',
  description:
    'Computer Science student at Georgia Tech working on humanoid robotics research, learning-guided SMT solving, and data systems for Georgia Tech Solar Racing.',
  location: 'Atlanta, GA',
  email: 'akumar3076@gatech.edu',
  github: 'https://github.com/avik-kumar',
  linkedin: 'https://www.linkedin.com/in/avik-kumar/',
  resume: 'resume.pdf',
} as const;

export interface NavItem {
  label: string;
  href: string;
  /** Opens in a new tab; used for files such as the résumé PDF. */
  newTab?: boolean;
}

export const nav: NavItem[] = [
  { label: 'Work', href: '/work/' },
  { label: 'About', href: '/about/' },
  { label: 'Résumé', href: site.resume, newTab: true },
];
