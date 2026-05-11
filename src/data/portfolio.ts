export const getAssetPath = (path: string) => {
  const cleaned = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${cleaned}`;
};

export const personalInfo = {
  name: "Uddeshya Singh",
  title: "Data & AI Systems Builder",
  headline: "I build AI systems that turn complex data into decisions.",
  email: "uddeshyasingh.de@gmail.com",
  phone: "+4915213444415",
  location: "Germany",
  linkedin: "https://linkedin.com/in/uddeshya-singh1304",
  github: "https://github.com/0-uddeshya-0",
  // Place your profile photo at: public/profile.jpg
  // Use the grey-blazer headshot — lighter background suits the warm-white design
  photo: getAssetPath("profile.jpg"),
};

export type PortfolioProject = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  impact: string[];
  category: string;
  year: string;
  status?: string;
  signature?: boolean;
  context?: string;
  github?: string;
  about?: string;
};

type LocalizedProjectOverride = Partial<
  Pick<PortfolioProject, "subtitle" | "description" | "problem" | "solution" | "about" | "category">
> & {
  impact?: string[];
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

export const projects: PortfolioProject[] = [
  {
    id: "behaviorci",
    title: "BehaviorCI",
    subtitle: "Pytest-native behavioral regression testing for LLM applications",
    description:
      "Open-source pytest plugin on GitHub: capture LLM outputs as behavioral snapshots, compare meaning with embeddings (not exact strings), and fail CI on semantic drift. Lexical guards, SQLite storage, local or API embedders.",
    problem:
      "Prompt or model tweaks can change LLM outputs—format, tone, or meaning—while ordinary asserts still pass. Teams often only notice after ship when parsers or downstream logic break.",
    solution:
      "The `@behavior` decorator records return values, stores baselines under `.behaviorci/`, and scores similarity with embeddings (e.g. sentence-transformers or an injected API embedder). Supports record / check / update flows and pytest-xdist.",
    techStack: ["Python", "pytest", "SQLite", "sentence-transformers", "Embeddings", "CI/CD"],
    impact: [
      "Regression checks in normal pytest runs and CI",
      "Semantic drift visible before merge",
      "Documented install paths: lightweight (API embeddings) or offline `[local]`",
    ],
    category: "Developer Tools",
    year: "2026",
    signature: true,
    github: "https://github.com/0-uddeshya-0/BehaviorCI",
    about:
      "Aligned with the repo README: BehaviorCI treats LLM behavior like snapshot testing—record once, compare on meaning, gate in CI. Alpha software: API and storage still evolving toward v1.",
  },
  {
    id: "vouch",
    title: "Vouch",
    subtitle: "Don't trust AI output. Verify it.",
    description:
      "TypeScript monorepo (Fastify API, workers, Prisma, Redis) for AI-assisted PR review: npm/PyPI checks, security pattern scanning, hybrid LLM routing, and optional zero-cost Ollama mode—per GitHub README and build docs.",
    problem:
      "AI-generated diffs can include fake packages, typosquats, leaked secrets, and risky patterns while looking plausible at a glance.",
    solution:
      "Webhook-driven analysis pipeline: rule-based and registry verification, Tree-sitter parsing, BullMQ jobs, PostgreSQL for findings—designed to comment on PRs with disclosures, confidence, and audit-friendly outputs.",
    techStack: ["TypeScript", "Fastify", "Prisma", "PostgreSQL", "Redis", "BullMQ", "Docker"],
    impact: [
      "Brings verification closer to the PR, not post-deploy",
      "Documented modes: full, zero-cost (Ollama), air-gapped, security-only",
      "EU AI Act–oriented disclosure and audit patterns in docs",
    ],
    category: "Full-Stack AI",
    year: "2026",
    github: "https://github.com/0-uddeshya-0/Vouch",
    about:
      "Repository matches the public architecture in README/BUILD_SUMMARY: GitHub App shape, registry clients, security scanner, and LLM tiering. Verify live status on GitHub before treating as production-deployed.",
  },
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
    github: "https://github.com/0-uddeshya-0/klarbill",
    about:
      "KlarBill was built to tackle a real pain point — utility bill confusion. The core challenge was making a local LLM useful on messy, semi-structured PDF data without relying on paid APIs. I designed the pipeline from OCR extraction to semantic Q&A, with FastAPI serving the interface layer.",
  },
  {
    id: "unity-vr-avatar-haptic",
    title: "Unity VR Avatar Haptic System",
    subtitle: "Multi-user VR avatars with networking and haptic-ready interaction",
    description:
      "Unity VR avatar interaction system (GitHub): advanced controls, haptic integration hooks, gesture/interaction scaffolding, and real-time multiplayer via Photon PUN 2—see repo description for full feature list.",
    problem:
      "Social VR needs believable presence: synced avatars, precise touch semantics, and a path to real haptic feedback—not a one-off demo without structure.",
    solution:
      "Implemented a Unity pipeline with ReadyPlayerMe loading, Photon PUN 2 synchronization, XR Interaction Toolkit rigging, and modular haptic managers so touch events can drive device-specific feedback (e.g. bHaptics, Teslasuit) as hardware allows.",
    techStack: ["C#", "Unity", "Photon PUN 2", "OpenXR", "XR Interaction Toolkit", "ReadyPlayerMe"],
    impact: [
      "Real-time multiplayer avatar sync for remote users",
      "Body-part colliders for nuanced touch and haptic triggers",
      "Extensible haptic layer for production-style VR interaction",
    ],
    category: "VR / Real-Time Systems",
    year: "2024",
    github: "https://github.com/0-uddeshya-0/Unity-VR-Avatar-Haptic-System",
    about:
      "This project merges systems thinking with immersion: networking correctness, VR performance, and tactile feedback as first-class concerns—not an afterthought.",
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

const projectGermanOverrides: Record<string, LocalizedProjectOverride> = {
  behaviorci: {
    subtitle: "Pytest-basiertes Behavioral-Regression-Testing fur LLM-Anwendungen",
    description:
      "Open-Source-Pytest-Plugin: LLM-Ausgaben als Behavior-Snapshots speichern, semantisch vergleichen (statt String-Gleichheit) und Drift direkt in der CI erkennen. Mit lexical guards, SQLite und lokalem oder API-basiertem Embedding.",
    problem:
      "Schon kleine Prompt- oder Modellanpassungen konnen Ton, Format oder Bedeutung verandern, obwohl klassische Tests grun bleiben. Die Folgen sieht man oft erst im Betrieb.",
    solution:
      "Der `@behavior`-Decorator erfasst Ruckgabewerte, verwaltet Baselines in `.behaviorci/` und bewertet Ahnlichkeit uber Embeddings. Unterstutzt Record/Check/Update-Flows und lauft auch mit pytest-xdist.",
    impact: [
      "Regression-Checks im normalen Pytest- und CI-Workflow",
      "Semantische Drift wird vor dem Merge sichtbar",
      "Dokumentierte Installationspfade fur leichtgewichtig (API) oder lokal (`[local]`)",
    ],
    about:
      "BehaviorCI behandelt LLM-Verhalten wie Snapshot-Tests: einmal erfassen, auf Bedeutung vergleichen, in der CI absichern. Aktuell im Alpha-Status mit laufender Stabilisierung Richtung v1.",
  },
  vouch: {
    subtitle: "KI-Output nicht blind vertrauen - erst verifizieren",
    description:
      "TypeScript-Monorepo fur PR-Analyse in AI-Workflows: Registry-Checks (npm/PyPI), Security-Pattern-Scan, LLM-Routing und optionaler Ollama-Zero-Cost-Modus. Ausgelegt auf nachvollziehbare Findings direkt im Review-Prozess.",
    problem:
      "AI-generierte Diffs wirken oft plausibel, enthalten aber erfundene Packages, Typosquatting-Risiken oder geleakte Secrets.",
    solution:
      "Webhook-basierte Analysepipeline mit regelbasierten Checks, Registry-Verifikation, Queue-Processing und persistenten Findings. Ergebnisse werden PR-nah mit Confidence und Audit-Kontext aufbereitet.",
    impact: [
      "Verifikation wandert in den PR-Flow statt in die Zeit nach dem Deploy",
      "Mehrere Betriebsmodi: full, zero-cost (Ollama), air-gapped, security-only",
      "Dokumentierte Transparenz- und Audit-Muster im Kontext EU AI Act",
    ],
    about:
      "Die Repository-Struktur folgt klar dem dokumentierten Aufbau (API, Worker, Registry-Clients, Security-Scanner, LLM-Tiers). Den Live-Reifegrad solltest du weiterhin direkt auf GitHub verifizieren.",
  },
  klarbill: {
    subtitle: "KI-gestutzter Assistent fur Energie- und Nebenkostenabrechnungen",
    description:
      "System zur Verarbeitung und Analyse von Rechnungsdokumenten mit lokalem LLM-Fokus. Ziel war es, aus heterogenen PDF-Rechnungen verlasslich strukturierte Informationen fur Kundenanfragen bereitzustellen.",
    problem:
      "Versorger haben viele Ruckfragen zu Rechnungen, aber unstrukturierte Dokumente und manuelle Bearbeitung verlangsamen den Service deutlich.",
    solution:
      "End-to-End-Pipeline mit Extraktion aus PDF-Daten, Strukturierung fur Folgeprozesse und API-Schicht fur Anfragen. Fokus auf robuste Verarbeitung statt Demo-Charakter.",
    impact: [
      "Schnellere Bearbeitung typischer Abrechnungsruckfragen",
      "Automatisierbare Verarbeitung unterschiedlicher Dokumenttypen",
      "Bessere Datenbasis fur nachvollziehbare Kundenkommunikation",
    ],
    about:
      "KlarBill entstand aus einem konkreten Praxisproblem. Der Schwerpunkt lag auf einer stabilen Pipeline fur reale, uneinheitliche Dokumente - nicht auf einer reinen Showcase-Losung.",
  },
  "unity-vr-avatar-haptic": {
    subtitle: "Mehrnutzer-VR-Avatare mit Networking und haptikbereitem Interaktionsmodell",
    description:
      "Unity-VR-System fur Avatar-Interaktion mit Multiplayer-Synchronisation, Touch-Zonen und Haptik-Integrationspunkten. Entspricht dem Fokus des offentlichen Repos auf immersive, erweiterbare VR-Interaktion.",
    problem:
      "Glaubwurdige Social-VR braucht mehr als Visuals: konsistente Avatar-Synchronisierung, klare Interaktionslogik und eine belastbare Haptik-Architektur.",
    solution:
      "Aufbau einer modularen Unity-Architektur mit Photon-Sync, XR-Toolkit-Rigging und haptikfahigen Event-Hooks fur geratespezifisches Feedback.",
    impact: [
      "Echtzeit-Synchronisierung fur verteilte Nutzer",
      "Feingranulare Trigger fur Touch- und Haptikereignisse",
      "Skalierbare Grundlage fur produktionsnahe VR-Interaktion",
    ],
    about:
      "Das Projekt verbindet Netzwerktechnik, Performance und Immersion. Haptik wurde von Anfang an als Systembaustein gedacht - nicht als nachtragliche Erweiterung.",
  },
  "process-development": {
    subtitle: "Beratungsnahes Hochschulprojekt",
    description:
      "Cross-funktionales Projekt zur Prozessverbesserung mit Lean-Six-Sigma- und Compliance-Perspektive. Fokus auf strukturierter Analyse und umsetzbarer Dokumentation.",
    problem:
      "Es fehlten gemeinsame Analysegrundlagen und eine belastbare Struktur fur Wissensaustausch rund um Prozessqualitat und Compliance.",
    solution:
      "Moderation von Austauschformaten, Aufbereitung stakeholdergerechter Unterlagen und Umsetzung methodischer Verbesserungen entlang DMADVO.",
    impact: [
      "Strukturierte Analysegrundlagen fur mehrere Teams bereitgestellt",
      "Dokumentation und Entscheidungsunterlagen fur Stakeholder erstellt",
      "Prozessschwachstellen systematisch identifiziert",
    ],
    about:
      "Das Projekt hat meinen Beratungsblick gescharzt: unklare Ausgangslagen in nachvollziehbare Analyse und umsetzbare Empfehlungen ubersetzen.",
  },
  "dont-waste-food": {
    subtitle: "Digitales Prozessmanagement",
    description:
      "Prozessanalyse und Optimierung im Food-Service-Kontext mit Fokus auf Abfallreduktion, Effizienzsteigerung und Automatisierungspotenzial.",
    problem:
      "Hohe Verluste und geringe Transparenz in Ablaufen machten gezielte Verbesserungen ohne saubere Prozesssicht schwierig.",
    solution:
      "AS-IS/TO-BE-Modellierung, Engpassanalyse und Ableitung automatisierbarer Schritte als Grundlage fur priorisierte Verbesserungsmasnahmen.",
    impact: [
      "Relevante Hebel zur Abfallreduktion identifiziert",
      "Deutliches Potenzial fur Effizienzgewinne aufgezeigt",
      "Fehlerreduktionspotenzial durch Automatisierung strukturiert bewertet",
    ],
    about:
      "Hier stand die Verbindung von Prozessmodellierung und betrieblicher Wirkung im Mittelpunkt - von Analyse bis zur belastbaren Entscheidungsvorlage.",
  },
  "ai-design-thinking": {
    subtitle: "Design Thinking x KI-Strategie",
    description:
      "Strategisches Projekt zur KI-Einfuhrung mit Uzin-Utz AG: Use-Case-Identifikation, Priorisierung und Roadmap-Entwicklung im Workshop-Format.",
    problem:
      "Gesucht waren konkrete KI-Anwendungsfalle mit messbarer Wirkung, ohne bestehende Arbeitsablaufe zu destabilisieren.",
    solution:
      "Moderierte Discovery-Workshops, Bewertung von Potenzialen und Ableitung einer pragmatischen, phasenweisen Einfuhrungsstrategie.",
    impact: [
      "Mehrere priorisierte KI-Use-Cases definiert",
      "Roadmap mit Umsetzungsstufen fur Pilot und Rollout erstellt",
      "Stakeholder-Akzeptanz fur die nachste Projektphase aufgebaut",
    ],
    about:
      "Die Zusammenarbeit mit Uzin-Utz zeigte, wie stark KI-Einfuhrung von Change-Management, Risikoblick und klarer Moderation abhangt.",
  },
};

export function localizeProject(project: PortfolioProject, lang: "en" | "de"): PortfolioProject {
  if (lang === "en") return project;
  const override = projectGermanOverrides[project.id];
  if (!override) return project;
  return {
    ...project,
    ...override,
    impact: override.impact ?? project.impact,
  };
}

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
    year: "2021",
    coverImage: getAssetPath("book-cover.png"),
    description:
      "A debut poetry collection exploring consciousness, emotion, and the tender contradictions of being human. Written in moments between deadlines and design sprints.",
    longDescription:
      "Published by Writersgram Publications, Brain's Heart, a Poet is a debut collection written across seasons of study, building, and reflection. The poems move between solitude and connection, technology and tenderness, and the quiet tension between ambition and vulnerability. It is a personal body of work that balances structure with emotion—much like product building, where clarity matters, but human resonance matters more.",
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
    "You look familiar",
    "Did I see you before?",
    "",
    "Heart's convinced",
    "But eyes aren't so sure",
    "",
    "Have I ever siped",
    "From your lips before?",
    "",
    "Cuz they tremble",
    "When you knock on my mind's door",
    "",
    "Only you can tell me",
    "What might be its cure",
    "",
    "My soul's confused",
    "Don't know how to endure",
    "",
    "Since ages I've known you",
    "But who's there to assure",
    "",
    "What we held once",
    "Memories, Future or something more",
  ],
},
{
  title: "[ Misunderstood understood ]",
  lines: [
    "In the shadows of choices, we're entwined,",
    "A life dictated, a fate unkind.",
    "Blaming the winds that blow us astray,",
    "Yet we're the architects of our own dismay.",
    "",
    "Sorry creatures, seeking pity's embrace,",
    "Crafting tales of woe, our hearts misplace.",
    "Miseries named, in this twisted charade,",
    "A dance of despair, a relentless crusade.",
    "",
    "We, the victims or architects of strife?",
    "Choosing paths that carve the script of life.",
    "In echoes of choices, bitter and cold,",
    "A symphony of sorrow, a tale untold.",
    "",
    "Pity not the beings lost in their blame,",
    "For we are the authors of our own cruel game.",
    "Seeking solace in the sympathy we find,",
    "In a world where our choices are intertwined.",
  ],
},
    ],
  },
];

type PublicationItem = (typeof publications)[number];

const publicationGermanOverrides: Record<
  string,
  Partial<Pick<PublicationItem, "title" | "type" | "description" | "longDescription" | "tags">>
> = {
  "brains-heart": {
    type: "Gedichtband",
    description:
      "Ein Debutband uber Bewusstsein, Emotion und die stillen Widerspruche des Menschseins - geschrieben zwischen Studium, Projekten und Produktarbeit.",
    longDescription:
      "Veroffentlicht bei Writersgram Publications. Brain's Heart, a Poet ist ein Debutband, entstanden zwischen Studium, Produktarbeit und personlichen Umbruchen. Die Texte bewegen sich zwischen Introspektion und Beobachtung: Nahe und Distanz, Technologie und Menschlichkeit, Anspruch und Verletzlichkeit. Wie im Engineering geht es auch hier um Struktur - aber immer mit Wirkung beim Menschen.",
    tags: ["Lyrik", "Publizierter Autor", "Writersgram Publications"],
  },
};

export function localizePublication(pub: PublicationItem, lang: "en" | "de"): PublicationItem {
  if (lang === "en") return pub;
  const override = publicationGermanOverrides[pub.id];
  if (!override) return pub;
  return { ...pub, ...override };
}

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
