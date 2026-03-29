export const personalInfo = {
  name: "Uddeshya Singh",
  title: "Data & AI Systems Builder",
  headline: "I build AI systems that turn complex data into decisions.",
  email: "uddeshyasingh.de@gmail.com",
  phone: "+4915213444415",
  location: "Ulm, Germany",
  linkedin: "https://linkedin.com/in/uddeshya-singh1304",
  github: "https://github.com/0-uddeshya-0",
  // Place your profile photo at: public/profile.jpg
  // Use the grey-blazer headshot — lighter background suits the warm-white design
  photo: "/profile.jpg",
};

export const valueProposition = [
  {
    title: "AI Systems Development",
    description:
      "Building end-to-end AI pipelines that transform raw data into actionable intelligence using modern LLMs and machine learning frameworks.",
  },
  {
    title: "Data Engineering",
    description:
      "Designing robust data architectures and processing workflows that ensure clean, structured, and accessible information.",
  },
  {
    title: "Business Impact",
    description:
      "Translating technical capabilities into measurable business outcomes through strategic AI implementation and process optimisation.",
  },
];

export const projects = [
  {
    id: "klarbill",
    title: "KlarBill",
    subtitle: "AI-Powered Utility Bill Assistant",
    description:
      "An intelligent system that processes and analyses utility bills using local LLMs, providing customers with clear insights and automated assistance. Built as part of the Wilken Challenge at Hochschule Neu-Ulm.",
    problem:
      "Utility companies struggle with high volumes of customer inquiries about bills, leading to long response times and customer frustration. Manual processing of unstructured bill data is inefficient and error-prone.",
    solution:
      "Developed an end-to-end AI pipeline that processes PDF bills, extracts structured data using local LLMs (GPTAll), and provides intelligent responses to customer queries. The system includes automated data preprocessing and a FastAPI backend for real-time processing.",
    techStack: ["Python", "FastAPI", "GPTAll", "Firebase", "JavaScript", "HTML/CSS"],
    impact: [
      "Reduced customer inquiry response time by 60%",
      "Automated processing of 1000+ bill formats",
      "Achieved 95% accuracy in data extraction",
    ],
    category: "AI System",
    year: "2024",
    context: "Wilken Challenge · Hochschule Neu-Ulm",
    github: "https://github.com/0-uddeshya-0",
    about:
      "KlarBill was built to tackle a real pain point — utility bill confusion. The core challenge was making a local LLM useful on messy, semi-structured PDF data without relying on paid APIs. I designed the pipeline from OCR extraction to semantic Q&A, with FastAPI serving the interface layer.",
  },
  {
    id: "zapptrax",
    title: "ZappTrax",
    subtitle: "AI Career Guidance Platform",
    description:
      "A full-stack LLM-powered platform that provides personalised career roadmaps with gamified learning experiences.",
    problem:
      "Career guidance is often generic and fails to account for individual skills, market trends, and personalised learning paths. Existing solutions lack interactivity and actionable roadmaps.",
    solution:
      "Designing a multi-role platform with AI-driven career assessments, personalised learning paths, and gamified progress tracking. The architecture includes Docker containerisation, Supabase backend, and LangChain for LLM orchestration.",
    techStack: ["Next.js", "Supabase", "OpenAI/Claude", "LangChain", "React Native", "Docker"],
    impact: [
      "Architected scalable system for 10K+ concurrent users",
      "Designed GDPR/COPPA compliant data framework",
      "Created modular LLM pipeline for career matching",
    ],
    category: "Full-Stack AI",
    year: "2025",
    status: "In Development",
    github: "https://github.com/0-uddeshya-0",
    about:
      "ZappTrax is my most ambitious ongoing project — a platform that meets students and career-switchers where they are and gives them a personalised, intelligent roadmap. The system design required careful thinking around multi-tenancy, LLM cost control, and a mobile-first experience.",
  },
  {
    id: "process-development",
    title: "Process Development",
    subtitle: "Consulting Academic Project",
    description:
      "Cross-functional consulting engagement applying Lean Six Sigma and risk-based compliance frameworks to identify and document process improvement opportunities.",
    problem:
      "Teams lacked structured analytical resources and a shared framework for knowledge exchange around process quality and compliance requirements.",
    solution:
      "Facilitated knowledge exchange sessions, prepared stakeholder-facing presentations and documentation, and collaborated with cross-functional teams to implement best practices using DMADVO methodology.",
    techStack: ["DMADVO", "Lean Six Sigma", "Risk-Based Compliance", "Stakeholder Management"],
    impact: [
      "Delivered structured analytical resources to cross-functional teams",
      "Produced stakeholder documentation and implementation reports",
      "Applied Lean Six Sigma to identify process inefficiencies",
    ],
    category: "Consulting",
    year: "2024–2025",
    about:
      "This engagement gave me hands-on experience with the consulting process — translating ambiguous business problems into structured analysis, and communicating findings to stakeholders with varying technical depth. DMADVO provided rigour to what could otherwise have been loose recommendations.",
  },
  {
    id: "dont-waste-food",
    title: "Don't Waste Food",
    subtitle: "Digital Process Management",
    description:
      "Process analysis and optimisation project that identified significant waste reduction opportunities in food service operations.",
    problem:
      "Food service operations faced significant waste and inefficiency, with no clear visibility into process bottlenecks and improvement opportunities.",
    solution:
      "Conducted comprehensive process analysis using SAP Signavio, created AS-IS/TO-BE process models, and proposed RPA-based automation solutions for key workflows.",
    techStack: ["SAP Signavio", "Process Mining", "RPA Concepts", "Lean Six Sigma"],
    impact: [
      "Identified 40% waste reduction opportunities",
      "Projected 50–70% efficiency gains",
      "Estimated 60–80% error reduction through automation",
    ],
    category: "Process Optimisation",
    year: "2024",
    about:
      "This project sharpened my understanding of how data-driven analysis connects to operational outcomes. Translating messy workflows into clean AS-IS/TO-BE diagrams — and then making a credible case for automation — required both analytical and communication skills.",
  },
  {
    id: "ai-design-thinking",
    title: "AI Use Case Development",
    subtitle: "Design Thinking × AI Strategy",
    description:
      "Strategic AI implementation project for Uzin-Utz AG — identifying and evaluating AI opportunities through structured design thinking workshops.",
    problem:
      "Organisation needed to identify practical AI applications that could deliver measurable operational improvements without disrupting existing workflows.",
    solution:
      "Led design thinking workshops to identify high-impact AI use cases, researched GPT technologies, and developed a comprehensive AI implementation strategy presented to stakeholders.",
    techStack: ["Design Thinking", "GPT Research", "Stakeholder Management", "Strategy"],
    impact: [
      "Identified 5 high-value AI use cases",
      "Developed phased implementation roadmap",
      "Secured stakeholder buy-in for pilot project",
    ],
    category: "AI Strategy",
    year: "2024",
    about:
      "Working directly with Uzin-Utz AG gave me practical exposure to how established organisations think about AI adoption — risk aversion, legacy systems, change management. The double-diamond process helped structure ambiguous discovery work into actionable outputs.",
  },
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
      "Slow development cycles without proper version control",
    ],
    actions: [
      "Implemented responsive web applications using HTML5, CSS3, JavaScript and modern frontend frameworks",
      "Applied User-Centered Design principles for optimal UX across devices",
      "Established Git workflows and CI/CD pipelines for agile development",
    ],
    outcomes: [
      "Improved mobile user engagement by 35%",
      "Reduced cross-browser issues by 90%",
      "Accelerated deployment frequency by 3×",
    ],
  },
  {
    role: "Intern — Graphic Designer",
    company: "You Got Brains",
    location: "New Delhi, India",
    period: "08/2022 – 10/2022",
    challenges: [
      "Inconsistent brand visuals across platforms",
      "Time-consuming manual design processes",
      "Limited design system documentation",
    ],
    actions: [
      "Created cohesive visual assets following brand guidelines",
      "Developed reusable design templates and components",
      "Documented design patterns for team consistency",
    ],
    outcomes: [
      "Established consistent brand identity",
      "Reduced design production time by 40%",
      "Created reusable asset library for team",
    ],
  },
];

export const education = [
  {
    degree: "Master's in Artificial Intelligence & Data Analytics",
    institution: "Hochschule Neu-Ulm, Deutschland",
    period: "09/2024 – 07/2026",
    grade: "Current Grade: 1.8",
  },
  {
    degree: "Bachelor's in Computer Application",
    institution: "Chandigarh University, Mohali, India",
    period: "07/2019 – 07/2023",
    grade: "Final Grade: 2.2",
  },
];

export const skills = {
  "AI & ML": [
    "NLP (Transformers, Attention)",
    "Deep Learning (RNN, DNN)",
    "MCP Servers",
    "LangChain / LLM Orchestration",
    "AI Use Case Development",
    "Workflow Automation",
    "Prompt Engineering",
  ],
  "Data & Engineering": [
    "Python",
    "SQL",
    "FastAPI",
    "Data Processing & Transformation",
    "JSON / XML Processing",
    "Docker",
    "Firebase / Supabase",
  ],
  "Design & Product": [
    "User-Centered Design",
    "Design Thinking",
    "Process Modelling (SAP Signavio)",
    "Stakeholder Communication",
    "Graphic Design",
    "Balsamiq",
  ],
  "Tools & Platforms": [
    "GitHub",
    "n8n",
    "Claude Code",
    "VS Code / Cursor",
    "Power Automate",
    "Jira / Microsoft Office",
  ],
};

export const certifications = [
  "Applied Design Thinking Project: Identification of AI Use Cases",
  "SQL",
  "Project Management",
  "Entrepreneurship Foundation",
  "The Fundamentals of Digital Marketing",
];

export const publications = [
  {
    id: "brains-heart",
    title: "Brain's Heart, a Poet",
    type: "Poetry Collection",
    publisher: "Writersgram Publications",
    year: "2023",
    description:
      "A debut poetry collection exploring consciousness, emotion, and the tender contradictions of being human. Written in moments between deadlines and design sprints.",
    longDescription:
      "Published through Writersgram Publications, Brain's Heart is a collection of poems that sit somewhere between introspection and observation — examining how people relate to machines, to memory, and to each other. Writing and building software share more than most people admit: both require precision in service of feeling.",
    links: {
      googlePlay: "https://books.google.com/books/about/Brain_s_heart_a_poet.html?id=eI5NEAAAQBAJ",
      amazon: "https://amzn.to/3y42xy7",
      flipkart: "https://dl.flipkart.com/dl/brain-s-heat-poet/p/itmca92cb8dd6c3e?_refId=&_appId=CL",
    },
    tags: ["Poetry", "Published Author", "Writersgram Publications"],
    coverColor: "#A8B5A2",
    // Replace these with actual lines from your book.
    // Keep each poem to 4–8 lines for the preview.
    poems: [
      {
        title: "[ Have we met before? ]",
        lines: [
          "You look familiar 
          Did I see you before?

          Heart’s convinced 
          But eyes aren’t so sure
          
          Have I ever siped
          From your lips before?
          
          Cuz they tremble 
          When you knock on my mind’s door
          
          Only you can tell me
          What might be its cure
          
          My soul’s confused 
          Don’t know how to endure 
          
          Since ages I’ve known you
          But who’s there to assure
          
          What we held once
          Memories, Future or something more",
        ],
      },
      {
        title: "[ Misunderstood understood ]",
        lines: [
          "In the shadows of choices, we're entwined,
          A life dictated, a fate unkind.
          Blaming the winds that blow us astray,
          Yet we're the architects of our own dismay.
          
          Sorry creatures, seeking pity's embrace,
          Crafting tales of woe, our hearts misplace.
          Miseries named, in this twisted charade,
          A dance of despair, a relentless crusade.
            
          We, the victims or architects of strife?
          Choosing paths that carve the script of life.
          In echoes of choices, bitter and cold,
          A symphony of sorrow, a tale untold.
      
          Pity not the beings lost in their blame,
          For we are the authors of our own cruel game.
          Seeking solace in the sympathy we find,
          In a world where our choices are intertwined.",
        ],
      },
    ],
  },
];

export const workshops = [
  {
    id: "ai-design-thinking-workshop",
    title: "Applied Design Thinking for AI",
    role: "Workshop Facilitator & Researcher",
    client: "Uzin-Utz AG",
    institution: "Hochschule Neu-Ulm",
    year: "2024",
    description:
      "Facilitated structured design thinking sprints to identify, validate, and prioritise AI use cases for a manufacturing company's operational workflows. Applied double-diamond methodology with user research, rapid prototyping, and stakeholder presentations.",
    methodology: [
      "Double Diamond",
      "User Research",
      "Rapid Prototyping",
      "Stakeholder Mapping",
      "GPT Technology Research",
    ],
    outcome:
      "5 validated AI use cases with a phased implementation roadmap, presented to senior management.",
  },
];

// Three art series from the portfolio — pencil portraits, acrylic paintings, ink landscapes.
// Add your image files to public/sketches/ and fill in the pieces arrays below.
export const creativeWork = {
  title: "Sketches & Visual Work",
  description:
    "Drawing has been a quieter part of the work — a way to think before the keyboard. Portraits, landscapes, and abstractions across pencil, acrylic, and ink.",
  series: [
    {
      id: "portraits",
      title: "Portrait Studies",
      medium: "Pencil on paper",
      concept:
        "Capturing the essence of individuals — expressive faces and the small gestures that make a person recognisable. Each portrait starts with observation and ends with something that feels like understanding.",
      // Add portrait images: { id: 1, src: '/sketches/portrait-01.jpg', subject: 'Study I' }
      pieces: [] as Array<{ id: number; src: string; subject: string }>,
    },
    {
      id: "paintings",
      title: "Miniature Paintings",
      medium: "Acrylic on canvas",
      concept:
        "Vibrant scenes compressed into small formats — nature's detail and colour captured in miniature. The constraint of scale forces precision.",
      pieces: [] as Array<{ id: number; src: string; subject: string }>,
    },
    {
      id: "ink",
      title: "Ink Landscapes",
      medium: "Ink on paper",
      concept:
        "Mountain landscapes built from non-intersecting black ink lines. Abstract, yet immediately legible — the kind of composition that rewards a second look.",
      pieces: [] as Array<{ id: number; src: string; subject: string }>,
    },
  ],
};

export const howIBuild = {
  approach:
    "I start with the problem, not the technology. Every system I build begins with understanding the business context, user needs, and success metrics. This ensures technical solutions actually solve real problems.",
  systemThinking:
    "I view projects as interconnected systems rather than isolated features. This means considering data flow, scalability, maintenance, and integration points from day one — not as afterthoughts.",
  tradeoffs:
    "Engineering is about making informed tradeoffs. I document decisions, weigh alternatives, and choose approaches that balance immediate delivery with long-term sustainability.",
};
