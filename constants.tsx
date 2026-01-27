import { CaseStudy, Experience, Skill } from './types';

export const PROFESSIONAL_SUMMARY = `Associate Product Manager–aspirant with 1.7 years of experience in a software product environment as an Associate QA Engineer at Vegastack. I leverage a deep understanding of product integrity to lead strategic discovery and feature definition.`;

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'rapido-pooling',
    title: 'Rapido Ride Pooling Strategy',
    oneLineDescription: 'Leading the design of a C2C marketplace enabling commuters to host upcoming journeys and share costs through an automated atomic payment split.',
    problem: 'High individual ride costs, no way to plan shared rides in advance, and inefficient vehicle utilization during Bangalore peak hours.',
    innovation: 'The "Atomic Split": A strategic matching mechanism where driver booking only triggers once the pool reaches 100% capacity/payment.',
    impact: '₹500-2,600 monthly savings per user, 15% increase in user engagement.',
    tags: ['Marketplace', 'Mobility', 'Fintech'],
    notionUrl: 'https://www.notion.so/Rapido-Ride-Pooling-Feature-2d83d7a7290480b6baf3c6380a06c2b4?source=copy_link',
    details: [
      { label: 'Primary Market', value: 'Daily Office Commuters' },
      { label: 'Target Route', value: 'HSR ↔ Bellandur ↔ Whitefield' }
    ],
    fullSpecs: [
      {
        title: 'STRATEGIC FEATURE FLOW',
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
    title: 'WhatsApp Smart Reply Strategy',
    oneLineDescription: 'Leading the integration of on-device LLMs for generating hyper-personalized, context-aware reply chips that mimic user tone.',
    problem: 'Generic smart replies ("OK", "No") feel robotic and fail to capture conversational nuance or Hinglish slang.',
    innovation: 'Personalized Style Weights: A product-led approach where AI analyzes past chat history locally to generate reply suggestions that match YOUR personal tone.',
    impact: '40% of replies sent via smart suggestions, 90% faster response time.',
    tags: ['Generative AI', 'NLP', 'Mobile Product'],
    notionUrl: 'https://www.notion.so/WhatsApp-Smart-Reply-Feature-2d83d7a7290480f8af95ce8447897c03?source=copy_link',
    details: [
      { label: 'Core Engine', value: 'On-device Edge LLM' },
      { label: 'UX Pattern', value: 'Adaptive Response Chips' }
    ],
    fullSpecs: [
      {
        title: 'PRODUCT ARCHITECTURE',
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
    title: 'Project-Requirements-Specifications - Doc',
    description: 'Comprehensive Product Requirement Documents (PRDs) covering functional specs, user personas, and edge case management.',
    links: [
      { label: 'View Notion PRD', url: 'https://www.notion.so/Project-Requirements-Specifications-Documentation-2d93d7a72904801d9343f266de0defe5?source=copy_link' }
    ],
    icon: 'prd'
  },
  {
    title: 'Priority Matrix & Roadmap',
    description: 'RICE scoring models and priority listings for strategic product roadmapping, balancing business impact against technical feasibility and resource effort to ensure maximum ROI and alignment.',
    links: [
      { label: 'Priority Sheet', url: 'https://www.notion.so/Feature-Prioritization-Document-2d93d7a7290480cda963e3e9cf81a9e7?source=copy_link' }
    ],
    icon: 'priority'
  },
  {
    title: 'Food Delivery App KPIs',
    description: 'Strategic analysis of success metrics for food delivery platforms, focusing on order frequency, logistics efficiency, and retention.',
    links: [
      { label: 'View KPI Document', url: 'https://www.notion.so/Food-Delivery-App-KPIs-2d93d7a72904804fb5a8f5bfdd39ba53?source=copy_link' }
    ],
    icon: 'priority'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Vegastack',
    role: 'Associate QA Engineer (Transitioning to Product)',
    period: '2024 - Present',
    isCurrent: true,
    description: [
      'Ensuring product integrity for startup-scale SaaS solutions, collaborating with PMs to refine PRDs and user journeys.',
      'Applying analytical thinking to requirement analysis, acceptance criteria definition, and Agile execution.',
      'Bridging technical bugs and UX improvements to ensure the product vision aligns with user expectations.',
      'Actively involved in product discovery sessions and feature prioritization using RICE frameworks.'
    ]
  },
  {
    company: 'VibeKodes',
    role: 'Developed VibeKodes – Learning Initiative',
    period: '',
    description: [
      'Led a public learning platform to practice product management concepts in real-world scenarios.',
      'Identified student learning challenges and translated them into improvement ideas.',
      'Worked on user journeys, feature requirements, and content structure.',
      'Prioritized enhancements based on user feedback and usability observations.',
      'Continuously iterated the platform to improve learning experience and clarity.',
      'Maintained this initiative as a learning path, not a commercial venture.'
    ]
  }
];

export const SKILLS: Skill[] = [
  { 
    category: 'Product Strategy', 
    items: ['PRD Writing', 'User Research', 'Strategic Discovery', 'Wireframing', 'Market Analysis'] 
  },
  { 
    category: 'Execution', 
    items: ['Agile Methodologies', 'Requirement Analysis', 'Acceptance Criteria', 'QA Auditing', 'Prioritization'] 
  },
  { 
    category: 'TECH & PM TOOLKIT', 
    items: ['Excel', 'Cursor AI', 'Python & SQL', 'Figma', 'Jira', 'Notion', 'ClickUp'] 
  },
  {
    category: 'Career Skills',
    items: ['Problem Solving', 'Critical Thinking & Leadership', 'Teamwork & Collaboration', 'Research & Analysis', 'Ownership mindset', 'Decision making']
  },
  {
    category: 'Area of Interest',
    items: ['Technical Product Design', 'SaaS products', 'AI-based products', 'Workflow automation', 'FinTech']
  }
];

export const VIBEKODES_PRODUCT = {
  title: 'VibeKodes',
  subtitle: 'Learning Initiative',
  mission: 'Empowering students with a public learning platform to practice product management concepts in real-world scenarios.',
  methodology: {
    title: 'Product Methodology',
    points: [
      { title: 'Discovery', description: 'Identifying student learning challenges through direct interaction.' },
      { title: 'Definition', description: 'Translating challenges into user journeys and feature requirements.' },
      { title: 'Delivery', description: 'Continuous iteration based on feedback and usability observations.' }
    ]
  },
  mindsets: [
    { title: 'Learning First', description: 'Maintained as a product learning initiative.' },
    { title: 'Iterative Growth', description: 'Improving clarity and experience through constant feedback.' }
  ],
  achievements: [
    { title: 'Public Platform', description: 'Successfully launched and led the VibeKodes public learning hub.' },
    { title: 'Feature Ownership', description: 'Managed end-to-end content structure and requirements.' },
    { title: 'Strategic Roadmap', description: 'Prioritizing enhancements as a solo Product Developer.' }
  ],
  links: [
    { url: 'https://vibekodes.com' }
  ]
};