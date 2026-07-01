export const profile = {
  name: "Vivek Vijai",
  location: "Greater Stockholm Metropolitan Area",
  availability: "Open to backend roles across Sweden",
  email: "vivekmangalath95@gmail.com",
  phone: "+46 73 488 0060",
  linkedin: "https://www.linkedin.com/in/vivek-vijai199",
  github: "https://github.com/VivekVjai",
  customLink: "https://github.com/VivekVjai/multitenant-api",
  cv: "/vivek-vijai-resume.pdf",
  linkedinProfile: "/linkedin-profile.pdf"
};

export const hero = {
  subtitle: "Backend Developer & Product Owner",
  bio:
    "I build Django backends the way a product owner thinks - checkout flows, payment logic, and cloud deployments, shaped by 5 years of understanding what actually drives a business. Currently shipping the full stack at a Swedish food-tech startup, solo."
};

export const aboutParagraphs = [
  "I am a backend developer based in Stockholm, Sweden, open to opportunities across the country. My core stack is Python, Django, Django REST Framework, PostgreSQL, Redis, Stripe, Docker, Azure App Service, GitHub Actions, pytest, JWT, CORS, Gunicorn, React/Vite integrations, RAG workflows, WhatsApp Business API, and Meta Graph API.",
  "At PeckiiLess AB, I am the sole backend developer and product contributor for a live Swedish food-tech platform. I shaped the user journey in Figma, defined checkout from cart to date and slot selection to payment, and built the backend from scratch with Azure deployment workflows. I also evaluated Klarna's transaction cost against our current order volume and recommended holding off for now, keeping Stripe's card and Swish integration as the leaner near-term path.",
  "Alongside that, I am building AI and API-integration projects for Tellus AB, a Swedish startup: a WhatsApp-based RAG assistant for customer conversations and appointment booking, plus a planned Meta ads dashboard integration with an AI campaign-suggestion layer.",
  "I enjoy problem solving, taking ownership of products end to end, and learning by building. Having owned major product areas independently, I am now looking to join a strong engineering team - not to be handed easier work, but to be pushed. I want engineers around me who will question my architecture, so the next backend I build is better than the last one.",
  "Before tech, I spent five years in pharma sales and marketing in India. That background shapes how I build: I think about users, margins, operational constraints, stakeholder communication, and the business trade-offs behind engineering decisions."
];

export const strengths = [
  {
    title: "Ownership",
    description:
      "Sole backend developer and product contributor on a live commercial platform, from Figma flows to production backend decisions.",
    icon: "briefcase"
  },
  {
    title: "Judgment",
    description:
      "Analysed Klarna's margin cost against our average order value and recommended deferring it - card and Swish cover current needs at lower cost.",
    icon: "scale"
  },
  {
    title: "Adaptability",
    description:
      "Rebuilt from five years in pharma sales into backend engineering while shipping production code and learning fast.",
    icon: "refresh"
  }
];

export const technologies = [
  "Python",
  "Django",
  "Django REST Framework",
  "REST APIs",
  "PostgreSQL",
  "Redis",
  "Stripe API",
  "Docker",
  "Azure App Service",
  "Azure Monitor",
  "GitHub Actions",
  "Docker Hub",
  "pytest",
  "pytest-django",
  "DRF APIClient",
  "JWT Auth",
  "CORS",
  "Gunicorn",
  "Linux",
  "systemctl",
  "journalctl",
  "Bash",
  "SQL",
  "JavaScript",
  "AI Agents",
  "RAG",
  "WhatsApp Business API",
  "Meta Graph API",
  "API Integration",
  "Hetzner VPS",
  "HTML",
  "CSS",
  "Git",
  "GitHub",
  "Figma",
  "Jira",
  "Agile/Scrum"
];

export const experiences = [
  {
    company: "PeckiiLess AB",
    logo: "P",
    role: "Backend Developer & Product Contributor",
    location: "Stockholm County, Sweden",
    dateRange: "November 2025 - Present",
    duration: "8 months",
    description: [
      "Sole backend developer for a Swedish food-tech platform covering daily food ordering, catering, and event services."
    ],
    bullets: [
      "Architected and built the Django REST API from scratch - PostgreSQL schema, cart and checkout logic, delivery date/slot scheduling, JWT authentication, CORS for a React/Vite frontend, Redis caching, and consistent DRF JSON error responses.",
      "Implemented Stripe card and Swish payment flows with idempotency handling to prevent duplicate charges.",
      "Deployed a Dockerized Gunicorn runtime on Azure App Service with GitHub Actions CI/CD and environment-based configuration; planned backend test coverage with pytest.",
      "Designed 20+ responsive Figma screens and defined the full checkout journey.",
      "Set a two-day advance booking rule based on operational constraints.",
      "Evaluated Klarna against AOV margin impact and recommended deferring it in favor of the existing Stripe card/Swish flow - informing my manager's payment roadmap with a cost-based analysis, not just a technical opinion.",
      "Worked in Agile/Scrum rituals: sprint planning, standups, retrospectives."
    ]
  },
  {
    company: "Luminar Technolab",
    logo: "L",
    role: "Full-Stack Developer Intern (Python & Django)",
    location: "Kerala, India",
    dateRange: "August 2024 - March 2025",
    duration: "8 Months",
    description: [
      "Completed a Python/Django full-stack internship, building CRUD applications and REST APIs with Django, Django REST Framework, HTML, CSS, JavaScript, templates, database queries, and Git/GitHub workflows.",
      "Practiced authentication, session handling, serializer-based API development, frontend integration, and project structuring across healthcare, learning, CRM, and API-focused projects."
    ]
  },
  {
    company: "INTAS Pharmaceuticals",
    logo: "I",
    role: "Area Sales Executive",
    location: "Kerala, India",
    dateRange: "April 2021 - August 2024",
    duration: "3 Years 5 Months",
    description: [
      "Managed pharmaceutical product sales and territory development across Kerala, building relationships with doctors, pharmacists, and hospital procurement teams.",
      "Consistently met sales targets through market analysis and client relationship management while developing stakeholder communication, data-driven decision making, and customer-needs instincts that now support product and technical work."
    ]
  },
  {
    company: "Aristo Pharmaceuticals Pvt. Ltd.",
    logo: "A",
    role: "Territory Business Executive",
    location: "Kerala, India",
    dateRange: "May 2019 - March 2021",
    duration: "1 Year 11 Months",
    description: [
      "Managed territory-level pharmaceutical sales across an assigned region in Kerala, owning the sales cycle from prospecting to closing across a product portfolio.",
      "Built market insight, customer empathy, and structured communication habits that now inform my approach to product thinking and user-centred backend development."
    ]
  }
];

export const featuredProjects = [
  {
    title: "Gandom Backend API",
    label: "Featured Project",
    description:
      "Production Django REST API for the Gandom food-tech platform, covering product cataloging, cart management, checkout, delivery date and slot scheduling, and payment preparation for daily food ordering, catering, and event services. It includes Stripe card and Swish flows, idempotency handling, JWT authentication, CORS for a React/Vite frontend, Redis caching, and consistent DRF JSON error responses.",
    tech: [
      "Django",
      "DRF",
      "PostgreSQL",
      "Redis",
      "Stripe",
      "JWT",
      "Azure",
      "Docker",
      "GitHub Actions",
      "pytest"
    ],
    visual: "checkout"
  },
  {
    title: "Multi-Tenant E-Commerce API",
    label: "Featured Project",
    description:
      "Production-ready multi-tenant Django REST API using a row-based architecture with a centralized Tenant model and foreign-key isolation. Includes an RBAC layer for Admin, Seller, and Customer permission tiers scoped by Tenant_ID, plus stateless Gunicorn and Docker deployment on Azure with GitHub Actions CI/CD.",
    tech: ["Django", "DRF", "PostgreSQL", "RBAC", "Gunicorn", "Docker", "Azure", "CI/CD"],
    href: "https://github.com/VivekVjai/multitenant-api",
    visual: "tenant"
  }
];

export const otherProjects = [
  {
    title: "Tellus AI WhatsApp Agent",
    description:
      "AI WhatsApp assistant for Tellus AB, a Swedish startup. The agent uses RAG over company resource data so customers can ask natural questions, book appointments through chat, and get escalated to a human when support is needed. Planned deployment on a Hetzner VPS.",
    tech: ["WhatsApp API", "RAG", "AI Agents", "Python", "Hetzner VPS"],
    status: "In Progress"
  },
  {
    title: "EasyMed App",
    description:
      "Django healthcare marketplace connecting medicine dealers and customers. Dealers can manage medicine listings, prices, and discounts, while customers can browse shops and compare available offers through a simple Bootstrap UI.",
    tech: ["Python", "Django", "Django Templates", "Bootstrap", "SQLite"],
    github: "https://github.com/VivekVjai/myproject-easymed"
  },
  {
    title: "E-Learning App",
    description:
      "Django learning-platform project from my training portfolio, used to practice app structure, routing, templates, CRUD-style flows, authentication thinking, and the foundations of a course or instructor-led learning product.",
    tech: ["Python", "Django", "Templates", "HTML", "CSS"],
    github: "https://github.com/VivekVjai/e-learning-app"
  },
  {
    title: "Meta API Integration",
    description:
      "Planned Tellus AB dashboard integration for Meta ad reporting. Company officials will be able to view customer ad details through their dashboard, then use an AI layer to generate suggested ad campaign ideas from current ad performance reports. Planned deployment on Azure.",
    tech: ["Meta Graph API", "Ad Reporting", "AI Suggestions", "Dashboard API", "Azure"],
    status: "Coming Soon"
  }
];

export const navItems = [
  { number: "01.", label: "About", href: "#about" },
  { number: "02.", label: "Experience", href: "#experience" },
  { number: "03.", label: "Projects", href: "#projects" },
  { number: "04.", label: "Contact", href: "#contact" }
];
