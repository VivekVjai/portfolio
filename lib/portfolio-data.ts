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
  subtitle: "Backend Developer & Product Contributor",
  roles: [
    "Backend Developer",
    "Product Owner",
    "Full-Stack Engineer",
    "Python & Django Developer"
  ],
  bio:
    "Stockholm-based backend developer building production Django REST APIs, PostgreSQL systems, Stripe payment flows, and Azure deployments. I bring product ownership instincts from a Swedish food-tech startup and five years of sales and market experience."
};

export const aboutParagraphs = [
  "I am a backend developer based in Stockholm, Sweden, open to opportunities across the country. My core stack is Python, Django, Django REST Framework, PostgreSQL, Redis, Stripe, Docker, Azure App Service, GitHub Actions, pytest, Linux, JWT, CORS, and Gunicorn.",
  "At PeckiiLess AB, I work as the sole backend developer and product contributor for a live Swedish food-tech platform. I helped design the full user journey in Figma, defined the checkout flow from cart to date and slot selection to payment, and built the backend from scratch with deployment on Azure.",
  "Before tech, I spent five years in pharma sales and marketing in India. That background shapes how I build: I think about users, margins, operational constraints, stakeholder communication, and the business trade-offs behind engineering decisions."
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
    duration: "7 Months",
    description: [
      "Sole backend developer for a Swedish food-tech platform covering daily food ordering, catering, and event services. I architected and built the Django REST API from scratch, including PostgreSQL schema design, domain logic, JWT authentication, CORS for a React/Vite frontend, Redis caching, and Stripe payments with idempotency handling.",
      "Contributed product ownership across the platform: designed 20+ responsive Figma screens, defined the checkout flow from cart to date and slot selection to payment, implemented a two-day advance booking rule, evaluated Klarna against AOV margin impact, selected Stripe to unify card and Swish payments, and worked in Agile/Scrum rituals including sprint planning, standups, and retrospectives."
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
      "Built full-stack web applications using Python, Django, HTML, CSS, and JavaScript across more than three projects during the internship period.",
      "Developed RESTful APIs with Django REST Framework, implemented CRUD operations, JWT authentication, user session management, database queries, frontend integration, and version control workflows with Git and GitHub."
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
      "Production Django REST API for the Gandom food-tech platform, covering cart management, delivery scheduling, and product cataloging for up to 100 daily orders. It includes Stripe integration for card and Swish payments, idempotency keys to prevent duplicate charges, JWT authentication, CORS for React/Vite frontends, and consistent DRF JSON error responses.",
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
    href: "https://github.com/VivekVjai",
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
    title: "E-Learning Platform",
    description:
      "Full-stack learning platform project from my Python/Django project set, built while strengthening CRUD flows, authentication, and Django application structure.",
    tech: ["Python", "Django", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/VivekVjai/e-learning-app",
    preview: "https://github.com/VivekVjai/e-learning-app"
  },
  {
    title: "EasyMed App",
    description:
      "Healthcare-oriented application project focused on applying Django fundamentals, user flows, and practical full-stack development patterns.",
    tech: ["Python", "Django", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/VivekVjai/myproject-easymed",
    preview: "https://github.com/VivekVjai/myproject-easymed"
  },
  {
    title: "Stripe Payment Architecture",
    description:
      "Payment integration strategy for a food-tech checkout, selecting Stripe to unify card and Swish payments while deferring Klarna based on margin impact and growth stage.",
    tech: ["Stripe", "Swish", "Product Strategy", "AOV Analysis"],
    github: "https://github.com/VivekVjai",
    preview: "https://github.com/VivekVjai"
  },
  {
    title: "Automated Backend Test Suite",
    description:
      "pytest-based backend test suite covering API endpoints, authentication flows, and payment logic, with mocked Stripe and Redis dependencies and a 75%+ coverage target.",
    tech: ["pytest", "pytest-django", "DRF APIClient", "Mocking"],
    github: "https://github.com/VivekVjai",
    preview: "https://github.com/VivekVjai"
  },
  {
    title: "Azure Docker Deployment Pipeline",
    description:
      "CI/CD workflow deploying a Dockerized Django backend to Azure App Service, building images through Docker Hub, running pytest, and managing runtime with Gunicorn on Linux.",
    tech: ["Azure App Service", "Docker", "Docker Hub", "GitHub Actions", "Gunicorn"],
    github: "https://github.com/VivekVjai",
    preview: "https://github.com/VivekVjai"
  },
  {
    title: "Food-Tech Booking Journey",
    description:
      "Responsive product journey for daily food ordering, catering, and event services, including cart, date and slot selection, payment, and operational advance-booking constraints.",
    tech: ["Figma", "Checkout Flow", "Agile/Scrum", "Product Ownership"],
    github: "https://github.com/VivekVjai",
    preview: "https://github.com/VivekVjai"
  }
];

export const navItems = [
  { number: "01.", label: "About", href: "#about" },
  { number: "02.", label: "Experience", href: "#experience" },
  { number: "03.", label: "Projects", href: "#projects" },
  { number: "04.", label: "Contact", href: "#contact" }
];
