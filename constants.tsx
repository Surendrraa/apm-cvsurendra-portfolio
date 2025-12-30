
import { CaseStudy, Experience, Skill } from './types';

export const PROFESSIONAL_SUMMARY = `Associate Product Manager–aspirant with 1.6 years of experience in a software product environment as an Associate QA Engineer at Vegastack. Strong exposure to product requirements, user stories, acceptance criteria, Agile execution, and cross-functional collaboration. Complements professional experience with hands-on product building as the Product Lead for VibeKodes, demonstrating real-world product thinking, user focus, and ownership mindset.`;

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'rapido-pooling',
    title: 'Rapido Ride Pooling Feature',
    oneLineDescription: 'A C2C marketplace enabling commuters to host upcoming journeys and share costs through an automated atomic payment split.',
    problem: 'High individual ride costs, no way to plan shared rides in advance, and inefficient vehicle utilization during Bangalore peak hours.',
    innovation: 'The "Atomic Split": User-controlled matching where driver booking only triggers once the pool reaches 100% capacity/payment.',
    impact: '₹500-2,600 monthly savings per user, 15% increase in user engagement.',
    tags: ['Marketplace', 'Mobility', 'Fintech'],
    notionUrl: 'https://www.notion.so/Rapido-Ride-Pooling-Feature-2d83d7a7290480b6baf3c6380a06c2b4?source=copy_link',
    details: [
      { label: 'Primary Market', value: 'Daily Office Commuters' },
      { label: 'Target Route', value: 'HSR ↔ Bellandur ↔ Whitefield' }
    ],
    fullSpecs: [
      {
        title: '6-STEP CORE FEATURE FLOW',
        type: 'screens',
        screens: [
          { title: 'Ride Pool Home', description: 'Central hub for posting/finding rides with scheduled summaries and quick stats.', type: 'home' },
          { title: 'Post Journey', description: 'Comprehensive route creation with seat allocation, vehicle selection, and cost estimation.', type: 'post' },
          { title: 'Browse Rides', description: 'Marketplace for available pools featuring host profiles, route times, and available seats.', type: 'browse' },
          { title: 'Journey Details', description: 'Deep-dive into route map, rider profiles, cost breakdown, and secure group chat.', type: 'details' },
          { title: 'Pool Group Chat', description: 'Real-time coordination between riders and host to manage pickup and route details.', type: 'chat' },
          { title: 'Ride Requests', description: 'Host-side dashboard for reviewing and managing co-rider applications with quick stats.', type: 'requests' }
        ]
      }
    ]
  },
  {
    id: 'whatsapp-ai',
    title: 'WhatsApp Smart Reply Feature',
    oneLineDescription: 'On-device LLM integration for generating hyper-personalized, context-aware reply chips that mimic user tone.',
    problem: 'Generic smart replies ("OK", "No") feel robotic and fail to capture conversational nuance or Hinglish slang.',
    innovation: 'Personalized Style Weights: AI analyzes past chat history locally to generate reply suggestions that match YOUR personal tone.',
    impact: '40% of replies sent via smart suggestions, 90% faster response time.',
    tags: ['Generative AI', 'NLP', 'Mobile Product'],
    notionUrl: 'https://www.notion.so/WhatsApp-Smart-Reply-Feature-2d83d7a7290480f8af95ce8447897c03?source=copy_link',
    details: [
      { label: 'Core Engine', value: 'On-device Edge LLM' },
      { label: 'UX Pattern', value: 'Adaptive Response Chips' }
    ],
    fullSpecs: [
      {
        title: 'CORE PRODUCT FLOW',
        type: 'screens',
        screens: [
          { title: 'Smart Inbox', description: 'AI-ready indicators for pending replies in the contacts list.', type: 'home' },
          { title: 'AI Chat Context', description: 'Extensive chat history with tone-matched AI suggestion chips.', type: 'chat' },
          { title: 'AI Preferences', description: 'Control on-device learning, toggle AI suggestions, and manage tone-analysis privacy.', type: 'settings' }
        ]
      }
    ]
  }
];

export const DOCUMENTATION_RESOURCES = [
  {
    title: 'Prompts Den - UI/UX Design',
    description: 'A specialized mobile utility to store, organize, and deploy complex AI prompts with dynamic variables. Designed for scalability and user efficiency.',
    links: [
      { label: 'View Figma Design', url: 'https://www.figma.com/design/5CuSet75hrKtBi9Wn9KrC9/Prompts-Den?node-id=8-2' }
    ],
    icon: 'figma'
  },
  {
    title: 'Project-Requirements-Specifications-Documentation',
    description: 'Comprehensive Product Requirement Documents (PRDs) covering functional specs, user personas, and edge case management.',
    links: [
      { label: 'View Notion PRD', url: 'https://www.notion.so/Project-Requirements-Specifications-Documentation-2d93d7a72904801d9343f266de0defe5?source=copy_link' }
    ],
    icon: 'prd'
  },
  {
    title: 'Priority Matrix & Roadmap',
    description: 'RICE scoring models and priority listings for product roadmapping, balancing impact against technical effort.',
    links: [
      { label: 'Priority Sheet', url: 'https://www.notion.so/Feature-Prioritization-Document-2d93d7a7290480cda963e3e9cf81a9e7?source=copy_link' }
    ],
    icon: 'priority'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'VibeKodes',
    role: 'Product Lead',
    period: '2025 - Present',
    isCurrent: true,
    description: [
      'Spearheading the roadmap for "Edu Future VibeKoding", a gamified edutech platform targeting future-ready skills.',
      'Owning product discovery, user research, and wireframing for core learning loops.',
      'Implementing feedback-driven iterations to increase student retention through gamification.'
    ]
  },
  {
    company: 'Vegastack',
    role: 'Associate QA Engineer',
    period: '2024 - Present',
    isCurrent: true,
    description: [
      'Ensuring product quality for startup-scale SaaS solutions, working directly with PMs to refine PRDs and user journeys.',
      '1.6 years of hands-on experience in requirement analysis, acceptance criteria definition, and Agile execution.',
      'Bridging technical bugs and UX improvements to maintain high standards of product integrity.'
    ]
  }
];

export const SKILLS: Skill[] = [
  { category: 'Product Strategy', items: ['PRD Writing', 'User Research', 'Strategic Discovery', 'Wireframing'] },
  { category: 'Execution', items: ['Agile Methodologies', 'Requirement Analysis', 'Acceptance Criteria', 'QA Auditing'] },
  { category: 'Technical Toolkit', items: ['Figma', 'Jira', 'Notion', 'Mixpanel', 'SQL', 'API Testing'] }
];
