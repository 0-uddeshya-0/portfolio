export const getAssetPath = (path: string) => {
  const cleaned = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${cleaned}`;
};

export const personalInfo = {
  name: "Uddeshya Singh",
  title: "Data & AI Systems Builder",
  headline:
    "I build software that wrangles data and models without turning into a black box.",
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
    title: "Models in context",
    description:
      "End-to-end pipelines that take raw data and produce something a person or system can actually act on. LLMs when they earn their keep, smaller tools when they are faster or cheaper.",
  },
  {
    title: "Data Engineering",
    description:
      "Pipelines and schemas that survive the next requirement change: ingestion and transforms you can trace, and storage you can query without a shovel.",
  },
  {
    title: "Impact people notice",
    description:
      "Connecting what the model does to what a team actually feels: fewer panics, fewer mystery outputs, more trust when someone hits deploy.",
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
      "Prompt or model tweaks can change LLM outputs (format, tone, or meaning) while ordinary asserts still pass. Teams often notice only after ship, when parsers or downstream logic break.",
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
      "Same idea as the repo README: treat LLM behavior like snapshot testing (record once, compare on meaning, gate in CI). Still alpha; API and storage are settling toward v1.",
  },
  {
    id: "vouch",
    title: "Vouch",
    subtitle: "Don't trust AI output. Verify it.",
    description:
      "TypeScript monorepo (Fastify API, workers, Prisma, Redis) for AI-assisted PR review: npm/PyPI checks, security scanning, hybrid LLM routing, optional free Ollama mode. Layout matches the public README and build docs.",
    problem:
      "AI-generated diffs can include fake packages, typosquats, leaked secrets, and risky patterns while looking plausible at a glance.",
    solution:
      "Webhook-driven pipeline: rule checks, registry verification, Tree-sitter parsing, BullMQ jobs, PostgreSQL for findings. Comments on PRs with disclosures, confidence scores, and audit-friendly context.",
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
      "A local-LLM pipeline that reads utility bills and answers customer questions about them, built for the Wilken Challenge at Hochschule Neu-Ulm.",
    problem:
      "Utility companies struggle with high volumes of customer inquiries about bills, leading to long response times and customer frustration. Manual processing of unstructured bill data is inefficient and error-prone.",
    solution:
      "Developed an end-to-end pipeline that processes PDF bills, extracts structured data using local LLMs (GPTAll), and answers customer questions using semantic search over extracted fields. The system includes preprocessing automation and a FastAPI backend.",
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
      "The actual challenge was getting a local LLM to do useful work on messy, semi-structured PDF data without relying on paid APIs. I designed the pipeline from OCR extraction to semantic Q&A, with FastAPI as the interface layer.",
  },
  {
    id: "unity-vr-avatar-haptic",
    title: "Unity VR Avatar Haptic System",
    subtitle: "Multi-user VR avatars with networking and haptic-ready interaction",
    description:
      "Unity VR avatar work (GitHub): controls, haptic hooks, gesture scaffolding, multiplayer via Photon PUN 2. Repo README lists the full feature set.",
    problem:
      "Social VR needs believable presence: synced avatars, clear touch semantics, and a real path to haptics. A pretty demo is not enough if the network story is wrong.",
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
      "Networked VR that feels right needs sync, frame time, and haptics to agree at once. None of those are a bolt-on you add in week six.",
  },
  {
    id: "process-development",
    title: "Process Development",
    subtitle: "Consulting Academic Project",
    description:
      "Academic consulting project applying Lean Six Sigma to map, analyse, and document process improvement opportunities for a real client.",
    problem:
      "Teams had no shared language for discussing process quality - each group tracked issues differently, and nothing connected.",
    solution:
      "Ran structured workshops, built analysis documents, and worked across teams to apply DMADVO methodology to the most urgent process gaps.",
    techStack: ["DMADVO", "Lean Six Sigma", "Risk-Based Compliance", "Stakeholder Management"],
    impact: [
      "Built and handed over analysis documentation teams could actually use",
      "Produced reports that supported implementation decisions",
      "Applied Lean Six Sigma to identify process inefficiencies",
    ],
    category: "Consulting",
    year: "2024–2025",
    about:
      "Good practice turning fuzzy briefs into analysis people could act on, and writing it so both ops and leadership could follow. DMADVO kept the work from drifting into vibes-only advice.",
  },
  {
    id: "dont-waste-food",
    title: "Don't Waste Food",
    subtitle: "Digital Process Management",
    description:
      "Process analysis and optimisation project that identified significant waste reduction opportunities in food service operations.",
    problem:
      "Food service had real waste, but nobody could point to where in the flow it happened or why.",
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
      "Turning messy workflows into AS-IS/TO-BE diagrams is only half the job. The other half is a story leadership believes enough to fund.",
  },
  {
    id: "ai-design-thinking",
    title: "AI Use Case Development",
    subtitle: "Design Thinking × AI Strategy",
    description:
      "AI consulting project for Uzin-Utz AG - running design thinking workshops to find where AI could realistically help operations.",
    problem:
      "Uzin-Utz needed specific and workable AI opportunities - not a vague strategy deck, but concrete process-level options.",
    solution:
      "Ran design thinking workshops, researched GPT options against actual process pain points, and delivered a phased roadmap to management.",
    techStack: ["Design Thinking", "GPT Research", "Stakeholder Management", "Strategy"],
    impact: [
      "Identified 5 high-value AI use cases",
      "Handed off a phased roadmap with clear next steps",
      "Secured stakeholder buy-in for pilot project",
    ],
    category: "AI Strategy",
    year: "2024",
    about:
      "Working with Uzin-Utz showed me how cautious established organizations are about AI adoption, and why. The double-diamond process gave structure to what would otherwise remain a vague brief.",
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
      "Kept UX consistent across mobile, tablet, and desktop by following user-centered design throughout",
      "Set up Git workflows and CI/CD pipelines the team could actually maintain",
    ],
    outcomes: [
      "Improved mobile user engagement by 35%",
      "Reduced cross-browser issues by 90%",
      "Accelerated deployment frequency by 3×",
    ],
  },
  {
    role: "Intern, graphic design",
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
      "A debut poetry collection about people, confusion, and what it feels like to pay attention. Written between deadlines.",
    longDescription:
      "Published by Writersgram Publications. I wrote it while studying systems and watching people sidestep hard truths. The book is short. Some pieces rhyme, some do not. If there is a theme, it is paying attention instead of performing depth.",
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
      "Erstlingsband: Menschen, Missverständnisse und Momente, in denen einem auffällt, dass man gar nicht so aufmerksam war wie gedacht. Zwischen Deadlines geschrieben.",
    longDescription:
      "Bei Writersgram Publications erschienen. Die Texte sind kurz, teils gereimt, teils nicht. Es geht um Zuhören, Peinlichkeiten, Ehrgeiz und Zweifel, oft im selben Atemzug. Wer Code schreibt, merkt vielleicht, dass ich auch dort auf Rhythmus und klare Zeilen achte.",
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
      "Facilitated design thinking with Uzin-Utz AG to find AI ideas that could survive a real factory floor, not just a slide deck. Double diamond: go wide, then cut hard to what was feasible.",
    methodology: [
      "Double Diamond",
      "User Research",
      "Rapid Prototyping",
      "Stakeholder Mapping",
      "GPT Technology Research",
    ],
    outcome:
      "Five AI directions the client could picture, plus a phased roadmap management actually signed off on.",
  },
];

// Three art series from the portfolio — pencil portraits, acrylic paintings, ink landscapes.
// Add your image files to public/sketches/ and fill in the pieces arrays below.
export const creativeWork = {
  title: "Sketches & Visual Work",
  description:
    "Drawing is thinking before the keyboard gets involved. Portraits, landscapes, and abstractions in pencil, acrylic, and ink.",
  series: [
    {
      id: "portraits",
      title: "Portrait Studies",
      medium: "Pencil on paper",
      concept:
        "Starting with the face and trying to get the expression right. A portrait works when you can tell what the person is thinking without being told.",
      // Add portrait images: { id: 1, src: '/sketches/portrait-01.jpg', subject: 'Study I' }
      pieces: [] as Array<{ id: number; src: string; subject: string }>,
    },
    {
      id: "paintings",
      title: "Miniature Paintings",
      medium: "Acrylic on canvas",
      concept:
        "Tiny canvases, loud color. Small size forces you to decide what matters in a scene.",
      pieces: [] as Array<{ id: number; src: string; subject: string }>,
    },
    {
      id: "ink",
      title: "Ink Landscapes",
      medium: "Ink on paper",
      concept:
        "Mountains from black ink lines that never cross. Looks abstract until you squint; then it clicks.",
      pieces: [] as Array<{ id: number; src: string; subject: string }>,
    },
  ],
};

export const howIBuild = {
  approach:
    "I start with the problem, not the shiny tool. What does 'working' mean here, and who gets paged if it does not? That answer matters more than whatever is trending on Hacker News.",
  systemThinking:
    "A feature that demos well but wrecks the data model in two months is not finished. I try to notice which choices mortgage the future before I merge them.",
  tradeoffs:
    "I jot why we picked A over B. Not every line needs a paper trail, but the ones that will confuse Future Me usually do.",
};
