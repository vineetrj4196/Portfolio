export const siteConfig = {
  name: "Vineet R J",
  title: "Frontend Developer",
  email: "vrj4196@gmail.com",
  phone: "+91 7829104196",
  location: "Bengaluru, Karnataka, India",
  // TODO: replace with your real deployed domain before going live (used for
  // canonical URLs, Open Graph tags, sitemap.xml and JSON-LD).
  url: "https://your-domain.com",
  description:
    "Portfolio of Vineet R J, a Frontend Developer with 1.7+ years of experience building enterprise-grade SaaS platforms, HRMS systems and admin dashboards with React.js, Next.js, Redux and Tailwind CSS.",
  social: {
    linkedin: "https://www.linkedin.com/in/vineetrj",
    github: "https://www.github.com/vineetrj4196",
    instagram: "https://www.instagram.com/vineet_r_j",
    facebook: "https://www.facebook.com/vineetJamakhandi",
  },
};

export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/contact" },
];

export const typingWords = ["Frontend Developer", "React.js Developer", "Next.js Developer", "Problem Solver"];

export const skills = [
  { name: "JavaScript (ES6+)", icon: "Braces", percent: 85 },
  { name: "React.js", icon: "Atom", percent: 90 },
  { name: "Next.js", icon: "Triangle", percent: 80 },
  { name: "Redux", icon: "Workflow", percent: 75 },
  { name: "Tailwind CSS", icon: "Wind", percent: 90 },
  { name: "HTML5 & CSS3", icon: "FileCode2", percent: 90 },
  { name: "Java (Basics)", icon: "Coffee", percent: 60 },
  { name: "SQL (Basics)", icon: "Database", percent: 65 },
];

export const tools = ["Git", "GitHub", "CI/CD", "AWS Amplify", "VS Code", "Postman"];

/** Currently learning — in progress, goal is to grow from frontend into a full-stack (MERN) developer. */
export const currentlyLearning = [
  { name: "Node.js", icon: "Server" },
  { name: "Express.js", icon: "Route" },
];

export const experience = [
  {
    date: "June 2024 – Present",
    role: "Frontend Developer",
    org: "Perisync Technologies Private Limited · Bengaluru, India",
    bullets: [
      "Engineered and maintained state management architecture using Redux and React Hooks to enhance user interaction and streamline REST API data flow.",
      "Integrated RESTful APIs for user authentication, data fetching, and real-time updates across multiple enterprise web applications.",
      "Developed and deployed a feature-rich, responsive client-facing website aligned with company branding and quality standards, using Git for version control and CI/CD pipelines for automated build and deployment.",
      "Built reusable, scalable UI components with thorough unit testing, documentation, and performance optimization.",
      "Conducted regular code reviews to enforce code quality, consistency, and performance best practices.",
      "Collaborated with cross-functional teams including designers, backend developers, and product managers to deliver efficient solutions on schedule.",
      "Ensured application responsiveness across devices and browsers through rigorous cross-platform testing.",
    ],
  },
];

export const education = [
  {
    date: "December 2020 – 2024",
    role: "B.E. — Information Science and Engineering",
    org: "Vidya Vikas Institute of Engineering and Technology · Mysore, India",
    bullets: ["CGPA: 8.5 / 10"],
  },
  {
    date: "June 2018 – 2020",
    role: "Pre-University Board (Science)",
    org: "Sai Nikethan Independent PU College · Mudhol, India",
    bullets: ["84.6%"],
  },
  {
    date: "June 2017 – April 2018",
    role: "SSLC Board",
    org: "Jaycee English Medium School Mahalingapur · Mahalingapur, India",
    bullets: ["85.6%"],
  },
];

export const services = [
  {
    icon: "CodeXml",
    title: "React.js & Next.js Development",
    text: "Dynamic, component-driven UIs with SSR and performance optimization for production-grade apps.",
  },
  {
    icon: "Workflow",
    title: "State Management (Redux)",
    text: "Scalable, predictable state architecture for complex, multi-module workflows.",
  },
  {
    icon: "Database",
    title: "RESTful API Integration",
    text: "Authentication, real-time data fetching and CRUD flows wired cleanly into the frontend.",
  },
  {
    icon: "Smartphone",
    title: "Responsive UI Development",
    text: "Tailwind CSS interfaces that look and work great across mobile, tablet and desktop devices.",
  },
  {
    icon: "ShieldCheck",
    title: "Code Review & Best Practices",
    text: "SDLC-driven development with readable, maintainable and well-tested code.",
  },
  {
    icon: "Wrench",
    title: "Bug Fixing & Maintenance",
    text: "Diagnosing issues and shipping fixes without introducing regressions.",
  },
];

export const projects = [
  {
    slug: "hrms",
    title: "Human Resources Management System (HRMS)",
    category: "saas",
    categoryLabel: "SaaS Platform",
    description:
      "Architected a comprehensive, enterprise-grade HRMS covering employee management, attendance tracking, leave management, payroll processing and performance evaluation. Built the Payroll Employee Web App for payslips, payroll data and salary history, and the Recruiter Module for end-to-end hiring workflows — job postings, applicant tracking, interview scheduling and onboarding. Implemented role-based dashboards for HR admins and employees with secure, permission-driven access, using Next.js for SSR and performance, and Redux for state management across complex multi-module workflows. All CRUD operations run over RESTful APIs, deployed on AWS Amplify via CI/CD pipelines.",
    tags: ["React.js", "Next.js", "Redux", "Tailwind CSS", "REST APIs", "AWS Amplify"],
    image: "/assets/images/projects/project-hrms.svg",
    width: 900,
    height: 600,
    link: "#",
  },
  {
    slug: "zunoy-admin-web-app",
    title: "Zunoy Admin Web App",
    category: "admin",
    categoryLabel: "Admin Dashboard",
    description:
      "Full-featured admin dashboard for the Zunoy platform, enabling administrators to manage products, users, subscriptions and platform configurations. Implemented alert and notification management for composing, scheduling and broadcasting updates to end users, plus data visualization dashboards with real-time analytics for platform usage, user activity and business KPIs. Designed role-based access control (RBAC) so admin actions and sensitive data stay restricted to authorized users, with RESTful APIs syncing the admin panel and backend services.",
    tags: ["React.js", "Tailwind CSS", "REST APIs", "RBAC"],
    image: "/assets/images/projects/project-zunoy-admin.svg",
    width: 900,
    height: 600,
    link: "#",
  },
  {
    slug: "zunoy-saas-website",
    title: "Zunoy SaaS Website",
    category: "website",
    categoryLabel: "Website",
    description:
      "High-performance, responsive SaaS website built with Vanilla JavaScript and Tailwind CSS, without a frontend framework. Unified 6 core Zunoy products into a single, cohesive business ecosystem with a seamless user journey. Applied UTM tracking, cookie consent management and user behavior analytics for accurate marketing attribution and data compliance, with mobile-first design, WCAG accessibility and on-page SEO across all pages.",
    tags: ["Vanilla JavaScript", "Tailwind CSS", "REST APIs", "SEO"],
    image: "/assets/images/projects/project-zunoy-saas.svg",
    width: 900,
    height: 600,
    link: "#",
  },
  {
    slug: "interior-arc-admin-portal",
    title: "Interior Arc — Admin Portal",
    category: "admin",
    categoryLabel: "Admin Dashboard",
    description:
      "Client project at Perisync Technologies: an admin portal built for Interior Arc, an interior design/architecture business. The portal lets admins manage content and add the project images shown to client-facing users, keeping the public-facing gallery up to date without touching code. Built with React.js, Next.js and Tailwind CSS as part of a feature-rich, responsive client-facing deployment using Git for version control and CI/CD pipelines for automated build and deployment.",
    tags: ["React.js", "Next.js", "Tailwind CSS", "REST APIs"],
    // TODO: swap in a real screenshot and live link once available.
    image: "/assets/images/projects/project-interior-arc.svg",
    width: 900,
    height: 600,
    link: "#",
  },
];

export const projectFilters = [
  { label: "All", value: "all" },
  { label: "SaaS Platform", value: "saas" },
  { label: "Admin Dashboard", value: "admin" },
  { label: "Website", value: "website" },
];

export const certifications = [
  {
    title: "SQL and Relational Databases 101",
    issuer: "IBM · Cognitive Class",
    date: "October 2023",
    file: "/certificates/ibm-sql-relational-databases-101.pdf",
    credentialUrl: "https://courses.cognitiveclass.ai/certificates/0a809b331aeb4a3b81dc978384c83e44",
  },
  {
    title: "Agile Methodology Virtual Experience Program",
    issuer: "Cognizant (via Forage)",
    date: "August 2023",
    file: "/certificates/cognizant-agile-methodology-forage.pdf",
  },
  {
    title: "Solutions Architecture Virtual Experience Program",
    issuer: "AWS (via Forage)",
    date: "June 2023",
    file: "/certificates/aws-solutions-architecture-forage.pdf",
  },
  {
    title: "Zenith — National Level Management & Technical Fest",
    issuer: "Cresta, Vidya Vikas Institute of Engineering & Technology",
    date: "May 2023",
    file: "/certificates/zenith-2023-management-technical-fest.pdf",
  },
  {
    title: "HTML5 — The Language",
    issuer: "Infosys Springboard",
    date: "May 2023",
    file: "/certificates/infosys-springboard-html5-the-language.pdf",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp.org",
    date: "January 2023",
    file: "/certificates/freecodecamp-responsive-web-design.pdf",
    credentialUrl: "https://freecodecamp.org/certification/vineet_rj/responsive-web-design",
  },
  {
    title: "Basics of Python",
    issuer: "Infosys Springboard",
    date: "December 2022",
    file: "/certificates/infosys-springboard-basics-of-python.pdf",
  },
  {
    title: "Solving Global Grand Challenges with High Performance Data Analytics",
    issuer: "IEEE Mysore Subsection",
    date: "February 2022",
    file: "/certificates/ieee-webinar-hpc-data-analytics.pdf",
  },
  {
    title: "Amazon Go — Future of Shopping",
    issuer: "TechLearn",
    date: "February 2022",
    file: "/certificates/techlearn-amazon-go-future-of-shopping.pdf",
  },
  {
    title: "IEEE Student Congress 2021",
    issuer: "IEEE Bangalore Section",
    date: "December 2021",
    file: "/certificates/ieee-student-congress-2021.pdf",
  },
];
