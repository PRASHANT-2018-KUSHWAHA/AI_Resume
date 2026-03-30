import { Project, LogEntry, Experience, SkillGroup } from './types';

export const PERSONAL_INFO = {
  name: 'PRASHANT SINGH KUSHWAHA',
  title: 'Technical Architect',
  email: 'prashantkushwaha000@gmail.com',
  phone: '+91 75974 19907',
  linkedin: 'https://www.linkedin.com/in/prashant-kushwaha-96a230142',
  github: 'https://github.com/PRASHANT-2018-KUSHWAHA',
  location: 'Bengaluru, Karnataka, India',
  summary: 'Strategic Technical Architect with 7+ years of progressive experience designing and implementing scalable SaaS architectures. Expert in Micro Frontend (MFE) patterns, Nx Monorepos, and cloud-native AWS solutions. Proven ability to lead cross-functional engineering teams and deliver enterprise-grade solutions in fintech and analytics. Specialized in digital transformation initiatives, migrating legacy systems to modern, modular architectures while maintaining 100% code quality standards through SOLID principles and test-driven development.'
};

export const EXPERIENCES: Experience[] = [
  {
    id: 'ces',
    role: 'Technical Architect',
    company: 'Continental Engineering Services (CES)',
    period: '10/2022 – Present',
    location: 'Bengaluru, India',
    highlights: [
      'Spearheaded transition to Micro Frontend architecture using Nx and Module Federation, enabling independent module scaling and reducing cross-team dependencies by 40%',
      'Leveraged Module Federation patterns to reduce long-term frontend maintenance overhead by ~30% while improving build efficiency',
      'Architected secure, scalable workflows on AWS (Lambda, S3, RDS), managed mission-critical integrations with Stripe and Razorpay, and improved deployment turnaround by ~25%',
      'Authored comprehensive internal architectural blueprints and shared library standards, reducing technical debt and regression issues by ~20%',
      'Directed 3–5 senior and junior developers through deep-dive code reviews and architectural workshops, achieving 100% adherence to SOLID principles and TDD',
      'Overhauled CI/CD pipelines and automated complex build processes, reducing release effort and production defects by ~40%'
    ],
    tech: ['Nx', 'Module Federation', 'MFE', 'AWS', 'Stripe', 'Razorpay', 'CI/CD', 'SOLID', 'TDD']
  },
  {
    id: 'xelpmoc',
    role: 'Senior Software Engineer / Lead',
    company: 'Xelpmoc Design & Tech Limited',
    period: '11/2019 – 10/2022',
    location: 'Bengaluru, India',
    highlights: [
      'Led architectural migration from legacy components to modern Angular/Node.js frameworks, significantly improving system reliability and maintainability',
      'Optimized high-concurrency backend services using GraphQL and MongoDB, achieving 20–25% faster query response times for data-heavy SaaS modules',
      'Engineered WebSocket-based real-time onboarding engine for FoodDarzee, streamlining user journeys and CRUD operations, reducing manual friction by ~25%',
      'Refined database schemas and RESTful API logic, resulting in ~20% improvement in end-to-end data processing speed'
    ],
    tech: ['Angular', 'Node.js', 'GraphQL', 'MongoDB', 'WebSocket', 'REST APIs']
  },
  {
    id: 'liveintuitions',
    role: 'Full-Stack Developer',
    company: 'LiveIntuitions Technologies',
    period: '08/2018 – 10/2019',
    location: 'Bengaluru, India',
    highlights: [
      'Designed and implemented full-stack architecture for secure healthcare platforms with DICOM file handling and Stripe payment integration',
      'Optimized database schemas and API logic, delivering ~20% improvement in data processing performance',
      'Implemented HIPAA-compliant systems ensuring 100% data integrity and secure payment processing'
    ],
    tech: ['Full-Stack', 'DICOM', 'Stripe', 'HIPAA Compliance', 'AWS S3']
  }
];

export const SKILLS: SkillGroup[] = [
  {
    category: 'Architectural Patterns',
    skills: ['Micro Frontends (MFE)', 'Nx Monorepo', 'Module Federation', 'Clean Architecture', 'SOLID Principles', 'TDD', 'Domain-Driven Design (DDD)']
  },
  {
    category: 'Frontend',
    skills: ['Angular (v1–20)', 'React.js', 'Next.js', 'React Native', 'Ionic', 'Tailwind CSS', 'SCSS', 'HTML5']
  },
  {
    category: 'Backend & APIs',
    skills: ['Node.js', 'Express.js', 'GraphQL', 'REST APIs', 'WebSocket', 'Real-time Systems']
  },
  {
    category: 'Cloud & Infrastructure',
    skills: ['AWS (EC2, Lambda, S3, DynamoDB, RDS, ElasticSearch)', 'Docker', 'GitHub Actions', 'CI/CD Pipelines', 'DevOps Automation']
  },
  {
    category: 'Databases',
    skills: ['MongoDB', 'Oracle SQL', 'SQL Server', 'Data Optimization']
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Postman', 'Jasmine', 'Playwright', 'Segment', 'Google Analytics', 'Builder.io']
  },
  {
    category: 'AI Tools',
    skills: ['GitHub Copilot', 'Gemini', 'ChatGPT', 'Perplexity', 'NotebookLM', 'Google AI Studio', 'Google Stitch', 'Atoms', 'Claude']
  },
  {
    category: 'Payment & Security',
    skills: ['Stripe', 'Razorpay', 'UPI/IMPS', 'HIPAA Compliance', 'Data Encryption']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'fooddarzee',
    title: 'FoodDarzee',
    description: 'Nutrition & Wellness SaaS',
    problem: 'High-friction onboarding and complex payment flows were causing significant user drop-off. The legacy system lacked real-time feedback during the subscription journey.',
    architecture: 'Architected and deployed real-time WebSocket chatbot with intelligent onboarding engine. Integrated Stripe and Razorpay payment gateways with full transaction monitoring.',
    impact: [
      { label: 'Onboarding Friction', value: '-25%' },
      { label: 'User Activation', value: '+18%' },
      { label: 'Payment Success', value: '99.8%' }
    ],
    tags: ['React', 'Node.js', 'WebSocket', 'Stripe', 'Razorpay', 'MongoDB'],
    status: 'Lead_Architect'
  },
  {
    id: 'coinbase',
    title: 'Coinbase Mobile',
    description: 'Cryptocurrency & Payments',
    problem: 'Need for high-security, compliant payment modules for UPI/IMPS transactions within a mobile environment while maintaining strict encryption standards.',
    architecture: 'Developed high-security payment modules for UPI/IMPS transactions using React Native and GraphQL. Implemented end-to-end encryption and compliance with payment security standards.',
    impact: [
      { label: 'Transaction Success', value: '+20%' },
      { label: 'Support Tickets', value: '-15%' },
      { label: 'Security Audit', value: 'PASSED' }
    ],
    tags: ['React Native', 'GraphQL', 'Node.js', 'Encryption', 'UPI/IMPS'],
    status: 'Technical_Lead'
  },
  {
    id: 'airamed',
    title: 'Airamed Portal',
    description: 'Healthcare Imaging SaaS',
    problem: 'Requirement for a HIPAA-compliant portal to handle sensitive DICOM medical imaging data with 100% integrity and secure provider billing.',
    architecture: 'Engineered HIPAA-compliant portal for DICOM medical imaging with secure storage on AWS S3. Implemented role-based access control and audit logging for 100% data integrity.',
    impact: [
      { label: 'Data Breaches', value: 'ZERO' },
      { label: 'System Uptime', value: '99.9%' },
      { label: 'Institutions', value: '50+' }
    ],
    tags: ['Angular', 'Node.js', 'AWS S3', 'HIPAA', 'DICOM', 'PostgreSQL'],
    status: 'Full-Stack_Architect'
  }
];

export const EDUCATION = {
  degree: 'Bachelor of Technology (B.Tech) in Computer Science',
  institution: 'JIET – Jodhpur Institute of Engineering & Technology, India',
  year: '2017'
};

export const LANGUAGES = [
  { name: 'English', level: 'Fluent (Professional & Technical)' },
  { name: 'Hindi', level: 'Native' }
];

export const LOGS: LogEntry[] = [
  { timestamp: '14:02:11', type: 'EVENT_PUSH', message: 'Node_04 connected to main cluster.' },
  { timestamp: '14:02:45', type: 'AUTH_SYNC', message: 'Security handshakes completed across 12 zones.' },
  { timestamp: '14:03:02', type: 'CACHE_CLR', message: 'Cleaning temporary buffer...' },
  { timestamp: '14:03:15', type: 'SYS_READY', message: 'All systems operational. Monitoring active.' }
];
