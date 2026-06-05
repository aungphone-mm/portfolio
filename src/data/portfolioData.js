export const portfolioData = {
  projects: [
    {
      id: 'odoo-modules',
      title: 'Custom Odoo ERP Modules',
      tech: ['Odoo 17', 'Python', 'QWeb', 'PostgreSQL'],
      category: 'ERP',
      color: '#7c3aed',
      demo: null,
      source: null,
    },
    {
      id: 'email-assistant',
      title: 'AI Email Assistant',
      tech: ['React', 'Vite', 'Groq API', 'Express'],
      category: 'AI',
      color: '#06b6d4',
      demo: 'https://my-email-app-eta.vercel.app',
      source: 'https://github.com/aungphone-mm/my-email-app',
    },
    {
      id: 'yangon-bus',
      title: 'Yangon Bus Transit App',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Leaflet'],
      category: 'Full Stack',
      color: '#10b981',
      demo: 'https://ybs-plum.vercel.app',
      source: 'https://github.com/aungphone-mm/yangon-bus',
    },
    {
      id: 'nextbooking',
      title: 'Beauty Salon Booking System',
      tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
      category: 'Full Stack',
      color: '#f43f5e',
      demo: 'https://nextbooking-cyan.vercel.app/',
      source: 'https://github.com/aungphone-mm/nextbooking',
    }
  ],
  certifications: [
    {
      name: 'AWS Cloud Administration',
      issuer: 'MyanmarRoute Technologies',
      year: '2019',
      color: '#f59e0b',
    },
    {
      name: 'Database Design & Development',
      issuer: 'Gusto Institute of Information Technology',
      year: '2018',
      color: '#06b6d4',
    },
    {
      name: 'Web Advanced Course',
      issuer: 'Creative Web Studio',
      year: '2010',
      color: '#ec4899',
    },
  ],
  experiences: [
    {
      company: 'Mingalarsky Co., Ltd.',
      role: 'Odoo Developer',
      period: 'March 2024 – Present',
      duration: '2 years 3 months',
      highlights: [
        'Led development team designing and implementing custom Odoo modules for inventory, sales, accounting, logistics, and hotel management.',
        'Created professional PDF reports using QWeb templating with reusable header components and wkhtmltopdf CSS optimization.',
        'Resolved complex Record Rules, Access Rights, and ORM query issues — significantly reducing report generation times.',
        'Managed Odoo 17 cloud deployment on DigitalOcean (Docker & native) with UAT/Production environment separation.',
        'Led client communications, technical consultations, and produced architecture documentation for knowledge transfer.',
      ],
    },
    {
      company: 'Infinite Business Solution Co., Ltd.',
      role: 'Software Developer',
      period: 'January 2023 – February 2024',
      duration: '1 year 3 months',
      highlights: [
        'Developed, customized, and integrated Odoo ERP business applications across Sales, Purchase, Accounts, Inventory, and HR modules.',
        'Performed view customization using Widgets, Wizards, JavaScript, and XML.',
        'Delivered strong debugging skills across multiple Odoo versions.',
      ],
    },
    {
      company: 'Xinhua News Agency',
      role: 'IT Administrator',
      period: 'April 2015 – April 2020',
      duration: '5 years',
      highlights: [
        'Administered computer systems, diagnosed hardware/software faults, and resolved technical issues.',
        'Collected, analyzed, and interpreted operational data to support business decisions.',
        'Managed social media channels (Facebook, Twitter, YouTube) and published news content to the website.',
      ],
    },
    {
      company: 'ACE Data System Co., Ltd.',
      role: 'Software Developer',
      period: 'June 2013 – July 2014',
      duration: '1 year',
      highlights: [
        'Designed and developed multi-tiered web applications through the full SDLC from requirements to deployment.',
        'Built and deployed MSSQL databases and graphical user interfaces for client-facing applications.',
      ],
    },
    {
      company: 'Myanmar Information Technology (MIT) Co., Ltd.',
      role: 'Software Engineer',
      period: 'May 2012 – May 2013',
      duration: '1 year',
      highlights: [
        'Developed and modified features per customer requirements in coordination with the team.',
        'Performed unit and integration testing using use cases and resolved bugs.',
      ],
    },
  ],
  contact: {
    email: 'aungphone.mm@gmail.com',
    location: 'Yangon, Myanmar',
  },
  social: {
    github: 'https://github.com/aungphone-mm',
    linkedin: 'https://www.linkedin.com/in/aungphone',
    twitter: 'https://twitter.com/aung_phone',
    website: 'https://www.aungphone.com',
  },
};
