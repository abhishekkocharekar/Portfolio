import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend',
    icon: frontend,
  },
  {
    title: 'Backend',
    icon: backend,
  },
  {
    title: 'Dev Ops/Cloud',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Software Engineer (Web)',
    company_name: 'Equity Data Science',
    icon: coverhunt,
    iconBg: 'white',
    date: 'Jan 2022 - Jun 2022',
  },
  {
    title: 'Software Engineer (Web)',
    company_name: 'Digitus Labs',
    icon: microverse,
    iconBg: 'black',
    date: 'June 2023 - Aug 2023',
  },
  {
    title: 'Teaching Assistant (Web Programming 2)',
    company_name: 'Stevens Institute of Technology',
    icon: dcc,
    iconBg: 'black',
    date: 'Sep 2023 - May 2024',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Real Estate Radar',
    description: 'A website for property lessors and tenants, enabling property listing creation, search by locality, and application submission with enhanced documents.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/abhishekkocharekar/RealEstateRadar',
    demo: 'https://github.com/abhishekkocharekar/RealEstateRadar',
  },
  {
    id: 'project-2',
    name: 'Subsplit',
    description:
      'Purchase subscriptions together for different platforms such as Netflix, Hulu, Verizon, AT&T etc. Contains a group chat feature for users to communicate with each other and use stripe.js for payment.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/abhishekkocharekar/Subsplit-Subscriptions',
    demo: 'https://github.com/abhishekkocharekar/Subsplit-Subscriptions',
  },
  {
    id: 'project-3',
    name: 'Mario SQL',
    description: 'An interactive educational platform designed for students to learn SQL, while playing as Mario and querying a database filled with tables. ',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/abhishekkocharekar/Mario-SQL',
    demo: 'https://github.com/abhishekkocharekar/Mario-SQL',
  },
];

export { services, technologies, experiences, projects };
