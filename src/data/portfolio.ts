export const personalInfo = {
  name: "Uddeshya Singh",
  title: "Data & AI Systems Builder",
  headline: "I build AI systems that turn complex data into decisions.",
  email: "uddeshyasingh.de@gmail.com",
  phone: "+4915213444415",
  location: "Germany",
  linkedin: "https://linkedin.com/in/uddeshya-singh1304",
  github: "https://github.com/0-uddeshya-0",
};

export const valueProposition = [
  {
    title: "AI Systems Development",
    description: "Building end-to-end AI pipelines that transform raw data into actionable intelligence using modern LLMs and machine learning frameworks."
  },
  {
    title: "Data Engineering",
    description: "Designing robust data architectures and processing workflows that ensure clean, structured, and accessible information."
  },
  {
    title: "Business Impact",
    description: "Translating technical capabilities into measurable business outcomes through strategic AI implementation and process optimization."
  }
];

export const projects = [
  {
    id: "klarbill",
    title: "KlarBill",
    subtitle: "AI-Powered Utility Bill Assistant",
    description: "An intelligent system that processes and analyzes utility bills using local LLMs, providing customers with clear insights and automated assistance.",
    problem: "Utility companies struggle with high volumes of customer inquiries about bills, leading to long response times and customer frustration. Manual processing of unstructured bill data is inefficient and error-prone.",
    solution: "Developed an end-to-end AI pipeline that processes PDF bills, extracts structured data using local LLMs (GPTAll), and provides intelligent responses to customer queries. The system includes automated data preprocessing and a FastAPI backend for real-time processing.",
    techStack: ["Python", "FastAPI", "GPTAll", "Firebase", "JavaScript", "HTML/CSS"],
    impact: [
      "Reduced customer inquiry response time by 60%",
      "Automated processing of 1000+ bill formats",
      "Achieved 95% accuracy in data extraction"
    ],
    category: "AI System",
    year: "2024"
  },
  {
    id: "zapptrax",
    title: "ZappTrax",
    subtitle: "AI Career Guidance Platform",
    description: "A full-stack LLM-powered platform that provides personalized career roadmaps with gamified learning experiences.",
    problem: "Career guidance is often generic and fails to account for individual skills, market trends, and personalized learning paths. Existing solutions lack interactivity and actionable roadmaps.",
    solution: "Designing a multi-role platform with AI-driven career assessments, personalized learning paths, and gamified progress tracking. The architecture includes Docker containerization, Supabase backend, and LangChain for LLM orchestration.",
    techStack: ["Next.js", "Supabase", "OpenAI/Claude", "LangChain", "React Native", "Docker"],
    impact: [
      "Architected scalable system for 10K+ concurrent users",
      "Designed GDPR/COPPA compliant data framework",
      "Created modular LLM pipeline for career matching"
    ],
    category: "Full-Stack AI",
    year: "2025",
    status: "In Development"
  },
  {
    id: "dont-waste-food",
    title: "Don't Waste Food",
    subtitle: "Digital Process Management",
    description: "Process analysis and optimization project that identified significant waste reduction opportunities in food service operations.",
    problem: "Food service operations faced significant waste and inefficiency, with no clear visibility into process bottlenecks and improvement opportunities.",
    solution: "Conducted comprehensive process analysis using SAP Signavio, created AS-IS/TO-BE process models, and proposed RPA-based automation solutions for key workflows.",
    techStack: ["SAP Signavio", "Process Mining", "RPA Concepts", "Lean Six Sigma"],
    impact: [
      "Identified 40% waste reduction opportunities",
      "Projected 50-70% efficiency gains",
      "Estimated 60-80% error reduction through automation"
    ],
    category: "Process Optimization",
    year: "2024"
  },
  {
    id: "ai-design-thinking",
    title: "AI Use Case Development",
    subtitle: "Design Thinking Workshop",
    description: "Strategic AI implementation project for Uzin-Utz AG, identifying and evaluating AI opportunities for operational efficiency.",
    problem: "Organization needed to identify practical AI applications that could deliver measurable operational improvements without disrupting existing workflows.",
    solution: "Led design thinking workshops to identify high-impact AI use cases, researched GPT technologies, and developed a comprehensive AI implementation strategy presented to stakeholders.",
    techStack: ["Design Thinking", "GPT Research", "Stakeholder Management", "Strategy"],
    impact: [
      "Identified 5 high-value AI use cases",
      "Developed phased implementation roadmap",
      "Secured stakeholder buy-in for pilot project"
    ],
    category: "AI Strategy",
    year: "2024"
  }
];

export const experience = [
  {
    role: "Junior Web Developer",
    company: "Language Pantheon",
    location: "New Delhi, India",
    period: "07/2023 – 07/2024",
    challenges: [
      "Legacy codebase with poor responsive design",
      "Cross-browser compatibility issues",
      "Slow development cycles without proper version control"
    ],
    actions: [
      "Implemented responsive web applications using modern frontend frameworks",
      "Applied User-Centered Design principles for optimal UX across devices",
      "Established Git workflows and CI/CD pipelines for agile development"
    ],
    outcomes: [
      "Improved mobile user engagement by 35%",
      "Reduced cross-browser issues by 90%",
      "Accelerated deployment frequency by 3x"
    ]
  },
  {
    role: "Graphic Design Intern",
    company: "You Got Brains",
    location: "New Delhi, India",
    period: "08/2022 – 10/2022",
    challenges: [
      "Inconsistent brand visuals across platforms",
      "Time-consuming manual design processes",
      "Limited design system documentation"
    ],
    actions: [
      "Created cohesive visual assets following brand guidelines",
      "Developed reusable design templates and components",
      "Documented design patterns for team consistency"
    ],
    outcomes: [
      "Established consistent brand identity",
      "Reduced design production time by 40%",
      "Created reusable asset library for team"
    ]
  }
];

export const education = [
  {
    degree: "Master's in Artificial Intelligence & Data Analytics",
    institution: "Hochschule Neu-Ulm, Deutschland",
    period: "09/2024 – 07/2026",
    grade: "Current Grade: 1.8"
  },
  {
    degree: "Bachelor's in Computer Application",
    institution: "Chandigarh University, Mohali, India",
    period: "07/2019 – 07/2023",
    grade: "Final Grade: 2.2"
  }
];

export const skills = {
  "AI & ML": [
    "NLP (Transformers, Attention)",
    "Deep Learning (RNN, DNN)",
    "MCP Servers",
    "AI Tools & Prompting",
    "AI Use Case Development",
    "Workflow Automation",
    "Skill Engineering"
  ],
  "Data": [
    "Python",
    "SQL",
    "Data Processing",
    "Data Transformation",
    "JSON/XML Processing",
    "Business Intelligence"
  ],
  "Backend Systems": [
    "FastAPI",
    "Firebase",
    "System Integration",
    "API Design",
    "Docker",
    "Web Development"
  ],
  "Tools & Platforms": [
    "GitHub",
    "Jira",
    "n8n",
    "Claude Code",
    "VS Code / Cursor",
    "SAP Signavio",
    "Power Automate"
  ]
};

export const certifications = [
  "Applied Design Thinking Project: Identification of AI Use Cases",
  "SQL",
  "Project Management",
  "Entrepreneurship Foundation",
  "The Fundamentals of Digital Marketing"
];

export const howIBuild = {
  approach: "I start with the problem, not the technology. Every system I build begins with understanding the business context, user needs, and success metrics. This ensures technical solutions actually solve real problems.",
  systemThinking: "I view projects as interconnected systems rather than isolated features. This means considering data flow, scalability, maintenance, and integration points from day one—not as afterthoughts.",
  tradeoffs: "Engineering is about making informed tradeoffs. I document decisions, weigh alternatives, and choose approaches that balance immediate delivery with long-term sustainability."
};
