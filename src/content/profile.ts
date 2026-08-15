export interface Responsibility {
  title: string;
  children?: string[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  date: string;
  url?: string;
  description: string;
  responsibilities: Responsibility[];
}

export const profile = {
  name: "Hazem Hamdy",
  title: "Senior Frontend Engineer",
  location: "Giza, Egypt",
  email: "hazemhamdy117@gmail.com",
  phone: "+201120922588",
  links: {
    linkedin: "https://www.linkedin.com/in/hazemhamdyabdo/",
    github: "https://github.com/hazemhamdyabdo",
    portfolio: "/",
    resume: "/Hazem-Hamdy-Senior-Frontend-Engineer.pdf",
    whatsapp:
      "https://wa.me/201120922588?text=Hi%20Hazem%2C%20I%20came%20from%20your%20portfolio%20site%20and%20would%20like%20to%20chat%20about%20a%20opportunity.",
  },
  summary:
    "Senior Frontend Engineer with 5+ years of experience building scalable, high-performance web applications with Vue.js, React, and TypeScript. Specialized in frontend architecture, reusable component systems, and large-scale application migrations. Experienced in complex UI systems, real-time data apps, and data visualization platforms—with a strong focus on performance, testing, and maintainable delivery.",
  highlight:
    "Frontend architecture, data visualization, real-time interfaces, and scalable component systems.",
  education: {
    degree: "Bachelor of Mass Communication",
    school: "Helwan University — Cairo",
    date: "Sep 2017 — Jun 2021",
  },
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Professional working proficiency" },
  ],
  skillGroups: [
    {
      label: "Core",
      items: ["HTML", "CSS", "JavaScript", "TypeScript", "REST APIs", "GraphQL"],
    },
    {
      label: "Frameworks",
      items: ["Vue.js", "React.js", "Nuxt.js", "Next.js"],
    },
    {
      label: "Styling & UI",
      items: ["Tailwind CSS", "Vuetify", "Shadcn", "PrimeVue", "Bootstrap"],
    },
    {
      label: "State",
      items: ["Pinia", "Vuex", "Redux", "Zustand"],
    },
    {
      label: "Testing",
      items: ["Jest", "Vitest", "Cypress", "Storybook"],
    },
    {
      label: "Architecture",
      items: ["Vite", "SPA", "SSR", "SSG"],
    },
    {
      label: "Data Visualization",
      items: [
        "Highcharts",
        "Chart.js",
        "Three.js",
        "MapLibre",
        "Leaflet",
        "Deck.gl",
      ],
    },
    {
      label: "Other",
      items: [
        "Web Performance",
        "SEO",
        "Agile (Scrum)",
        "Figma",
        "AI-assisted development",
      ],
    },
  ],
} as const;

export const experience: Experience[] = [
  {
    title: "Senior Frontend Developer",
    company: "Wakeb_Data",
    location: "Egypt",
    date: "Jul 2024 – Present",
    url: "https://wakeb.tech/",
    description:
      "AI and data company building enterprise platforms for visualization, analytics, and intelligent applications. Frontend work centers on Vue.js, TypeScript, maps, charts, and real-time interfaces.",
    responsibilities: [
      {
        title:
          "Designed and developed complex frontend systems using Vue.js and TypeScript.",
      },
      {
        title:
          "Built advanced data visualization interfaces with interactive maps and charts.",
      },
      {
        title:
          "Implemented real-time data streaming and socket-based features.",
      },
      {
        title:
          "Architected scalable UI structures for enterprise business platforms.",
      },
      {
        title:
          "Built a reusable map component package used across multiple company products.",
      },
      {
        title:
          "Mentored mid-level developers and supported engineering best practices.",
      },
      {
        title:
          "Collaborated with backend and design teams to ship high-quality user experiences.",
      },
    ],
  },
  {
    title: "Frontend Developer",
    company: "HectarApp",
    location: "Saudi Arabia",
    date: "Mar 2024 – Oct 2024",
    url: "https://hectarplus.io/",
    description:
      "Integrated real-estate operations and property management platform with a control panel for day-to-day business workflows.",
    responsibilities: [
      {
        title:
          "Built reusable component systems to improve development speed and maintainability.",
      },
      {
        title:
          "Implemented unit testing for components and utilities using Vitest.",
      },
      {
        title: "Managed and improved CI/CD pipelines using GitHub Actions.",
      },
      {
        title: "Conducted code reviews and supported junior developers.",
      },
      {
        title:
          "Optimized application performance through improved architecture and best practices.",
      },
    ],
  },
  {
    title: "Frontend Developer",
    company: "Payiano",
    location: "Egypt",
    date: "May 2022 – Mar 2024",
    url: "https://payiano.com/",
    description:
      "Digital payments platform helping merchants, corporates, and individuals move money quickly and securely.",
    responsibilities: [
      {
        title:
          "Developed modern web applications using Vue.js, Nuxt.js, Tailwind CSS, and TypeScript.",
      },
      {
        title:
          "Integrated multiple RESTful APIs to deliver scalable web solutions.",
      },
      {
        title:
          "Collaborated with UX/UI teams to ensure technical feasibility and polished UX.",
      },
      {
        title: "Led major frontend migrations and modernization initiatives:",
        children: [
          "Migrated Vue 2 → Vue 3",
          "Replaced Webpack with Vite for faster builds and better DX",
        ],
      },
    ],
  },
  {
    title: "Frontend Developer",
    company: "Dory Software",
    location: "Saudi Arabia",
    date: "Jan 2022 – May 2022",
    url: "https://www.dorysoftware.com/",
    description:
      "Custom software studio delivering e-commerce, booking, and real-estate web products for business clients.",
    responsibilities: [
      {
        title:
          "Developed web applications including e-commerce, booking systems, and real estate platforms.",
      },
      {
        title:
          "Built reusable UI components such as data tables, form wizards, and shared utilities.",
      },
      {
        title:
          "Implemented data visualization using Highcharts, AmCharts, and Chart.js.",
      },
      {
        title: "Conducted code reviews and supported junior developers.",
      },
      {
        title:
          "Worked closely with design teams to deliver consistent, user-friendly interfaces.",
      },
    ],
  },
];
