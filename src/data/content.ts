/**
 * All site copy lives here. Edit text in this file only —
 * components read from it and never hard-code content.
 * Every fact below comes from Tanay_Resume.pdf.
 */

export const site = {
  name: "Tanay Patil",
  logo: "TANAY.",
  title: "Tanay Patil — Full-Stack Developer",
  description:
    "Tanay Patil is a B.Tech IT student at VESIT (CGPA 9.03) and a full-stack developer in Mumbai who ships AI-powered products — MERN apps, agentic AI automation and OCR document scanning.",
  // Update this after the first Vercel deploy if you add a custom domain.
  url: "https://tanay-patil-portfolio.vercel.app",
};

export const links = {
  github: "https://github.com/tanaygit0530",
  linkedin: "https://www.linkedin.com/in/tanay-patil-872767371",
  email: "tanaypatil0530@gmail.com",
  resume: "/Tanay_Resume.pdf",
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About me", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export const hero = {
  headingTop: "Explore my",
  headingBottom: "Portfolio",
  role: "Full-Stack Developer · Mumbai",
  statement: "I build real-world products that solve practical problems.",
  focus: ["MERN Stack", "React & Tailwind", "Agentic AI", "OCR & Automation", "Hackathons"],
  portrait: {
    src: "/portrait.png",
    alt: "Black-and-white portrait of Tanay Patil",
  },
};

export const about = {
  heading: "About",
  quote:
    "Tanay Patil is a B.Tech IT student at VESIT (CGPA 9.03) and a full-stack developer who ships AI-powered products — from OCR document scanning at Electrolyte Solutions to award-winning hackathon builds.",
  stats: [
    { value: "9.03", label: "CGPA at VESIT" },
    { value: "2", label: "Internships" },
    { value: "4", label: "Hackathon podiums & finals" },
  ],
};

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  stack: string[];
  bullets: string[];
  github?: string;
  live?: string;
  note?: string;
};

export type ProjectTab = { id: string; label: string; projects: Project[] };

export const projects: { heading: string; tabs: ProjectTab[] } = {
  heading: "Featured project",
  tabs: [
    {
      id: "ai",
      label: "AI Products",
      projects: [
        {
          id: "nagarvaani",
          title: "NagarVaani",
          subtitle: "AI civic grievance platform",
          image: "/projects/nagarvaani.png",
          imageAlt: "NagarVaani app mockup",
          stack: ["React", "Node.js", "Supabase", "Gemini API", "Leaflet"],
          bullets: [
            "Built AI-driven complaint deduplication, clustering, spam filtering, multilingual support and predictive insights, reducing redundant reports and improving transparency.",
            "Implemented an Aam Aadmi Trust Score (AATS), crowd validation, AI-based proof-of-resolution with GPS verification, and secure whistleblower reporting using hybrid encryption.",
            "Designed a scalable full-stack architecture with React, Express and Supabase, featuring interactive maps and analytics dashboards for real-time complaint tracking.",
          ],
          github: "https://github.com/tanaygit0530/NirmanHack26",
        },
        {
          id: "nexusagent",
          title: "NexusAgent",
          subtitle: "AI IT support automation",
          image: "/projects/nexusagent.png",
          imageAlt: "NexusAgent dashboard mockup",
          stack: ["FastAPI", "React", "Gemini Pro", "n8n"],
          bullets: [
            "Developed an AI-powered IT support platform that converts WhatsApp and email queries into structured support tickets using agentic AI and automated workflows.",
            "Automated end-to-end ticket creation using n8n, webhook integrations and asynchronous FastAPI services, reducing manual support effort and enabling real-time processing.",
            "Built an interactive React admin dashboard with live ticket monitoring, analytics and one-click Excel export, with fail-safe manual review when AI confidence is low.",
          ],
          github: "https://github.com/tanaygit0530/NexusAgent2",
        },
      ],
    },
    {
      id: "web",
      label: "Web Apps",
      projects: [
        {
          id: "wastec",
          title: "WAStec E-commerce",
          subtitle: "Eco-friendly MERN store · Kukreja internship",
          image: "/projects/wastec.png",
          imageAlt: "WAStec e-commerce mockup",
          stack: ["MongoDB", "Express.js", "React", "Node.js"],
          bullets: [
            "Built and shipped pages for an eco-friendly e-commerce platform using the MERN stack.",
            "Researched and integrated AI tools and modern web technologies to improve site performance and user experience.",
            "Prepared technical documentation and live demo prototypes for company workshops, and supported participants through hands-on troubleshooting.",
          ],
          note: "Company project — source not public.",
        },
        {
          id: "bajaj",
          title: "Bajaj Workflow + OCR",
          subtitle: "Enterprise document scanning · Electrolyte internship",
          image: "/projects/bajaj-ocr.png",
          imageAlt: "Bajaj workflow and OCR scanning mockup",
          stack: ["OCR", "TagEntry", "UI/UX", "Workflow design"],
          bullets: [
            "Redesigned and optimized internal application workflows for the Bajaj project, improving usability and reducing task completion time for end users.",
            "Built and enhanced TagEntry and OCR-based document scanning features, increasing structured data capture accuracy and reducing manual data entry.",
            "Partnered with frontend and backend engineers to resolve UI/UX issues and ship performance improvements across the application.",
          ],
          note: "Client project — source not public.",
        },
      ],
    },
  ],
};

export type ListItem = {
  title: string;
  meta?: string;
  bullets?: string[];
};

export const experience: { heading: string; intro: string; items: ListItem[] } = {
  heading: "Experience",
  intro: "Internships, leadership and education — shipping real products alongside my degree.",
  items: [
    {
      title: "Software Dev Intern — Electrolyte Solutions",
      meta: "Oct 2025 – Apr 2026 · Mumbai",
      bullets: [
        "Redesigned and optimized internal application workflows for the Bajaj project, improving usability and reducing task completion time for end users.",
        "Built and enhanced TagEntry and OCR-based document scanning features, increasing structured data capture accuracy and reducing manual data entry.",
        "Partnered with frontend and backend engineers to resolve UI/UX issues and ship performance improvements across the application.",
      ],
    },
    {
      title: "Web Dev Intern — Kukreja · WAStec",
      meta: "Dec 2025 – Jan 2026 · Mumbai",
      bullets: [
        "Built and shipped pages for an eco-friendly e-commerce platform using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
        "Researched and integrated AI tools and modern web technologies to improve site performance and user experience.",
        "Prepared technical documentation and live demo prototypes for company workshops, and supported participants through hands-on troubleshooting.",
      ],
    },
    {
      title: "Jr Technical Officer — ISTE VESIT",
      meta: "Jun 2026 – Present · Mumbai",
      bullets: [
        "Organized technical events and workshops, developed project prototypes, and supported participants with hands-on technical guidance and troubleshooting.",
      ],
    },
    {
      title: "SE Technical Officer — ISTE VESIT",
      meta: "Sep 2025 – Jun 2026 · Mumbai",
      bullets: [
        "Built and tested project prototypes used for live demonstrations at technical workshops and events.",
      ],
    },
    {
      title: "B.Tech IT — VESIT · CGPA 9.03",
      meta: "Sep 2024 – Present · Mumbai University",
      bullets: [
        "B.Tech in Information Technology at Vivekanand Education Society's Institute of Technology, CGPA 9.03.",
        "Languages: Java, JavaScript, HTML/CSS. Frameworks & tools: React.js, Node.js, Express.js, Tailwind CSS.",
        "Databases: MongoDB, Firebase, Supabase. Other: Git, GitHub, VS Code, MongoDB Atlas, Cloudinary.",
      ],
    },
  ],
};

export const services: { heading: string; intro: string; items: ListItem[] } = {
  heading: "What I do",
  intro: "From idea to deployed product — fast, clean and practical.",
  items: [
    { title: "Full-stack web apps" },
    { title: "AI & agentic automation" },
    { title: "OCR & data capture" },
    { title: "UI/UX implementation" },
    { title: "Hackathon prototyping" },
  ],
};

export const achievements = {
  heading: "Achievements",
  items: [
    { value: "1st", label: "Runner-up — SYRUS 7.0 Hackathon" },
    { value: "2nd", label: "Runner-up — Genesis 2.0 Hackathon" },
    { value: "4th", label: "Position — Nirman National-Level Hackathon" },
    { value: "Top 6", label: "Finalist — Genesis Hackathon" },
  ],
};

export const footer = {
  heading: "Let's talk",
  scattered: ["GitHub", "LinkedIn", "Email", "Resume", "Mumbai", "Open to internships"],
  credit: "Designed & built by Tanay Patil",
};
