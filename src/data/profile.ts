export const profile = {
  name: "Kore Ramesh",
  title: "Assistant Professor",
  department: "Computer Science and Engineering",
  institution: "Pallavi Engineering College",
  tagline: "PhD Scholar · Full Stack Blockchain Web Dev · 9+ Yrs CSE Education",

  bio: [
    "Experienced Assistant Professor with over 9 years of expertise in Computer Science and Engineering education. Skilled in designing and delivering effective curriculum, mentoring students, and fostering a stimulating learning environment.",
    "Strong research orientation with ongoing pursuit of a PhD, specializing in Full Stack Blockchain Web Development at SR University, Warangal. My teaching spans Blockchain Technologies, Design and Analysis of Algorithms, Network Management Systems, Object-Oriented Programming, Web Technologies, and Service Oriented Architecture.",
    "Committed to advancing academic excellence through impactful research, innovative teaching methodologies, and active contribution to institutional growth.",
  ],

  email: "ramesh2kore@gmail.com",
  phone: "+91 96188 61041",
  location: "New Kamala Nagar, Amberpet, Uppal, Hyderabad, Telangana – 500013",

  profileImage: "/profile.jpg",
  initials: "KR",
  cvUrl: "/resume.pdf",

  socials: {
    linkedin: "#",      // Add your LinkedIn URL
    github: "#",        // Add your GitHub URL
    googleScholar: "#", // Add your Google Scholar URL
    researchGate: "#",  // Add your ResearchGate URL
    orcid: "#",         // Add your ORCID URL
    twitter: "#",       // Add your Twitter/X URL
  },

  stats: {
    yearsExperience: 9,
    publicationsCount: 1,
    coursesCount: 7,
    institutionsCount: 5,
    studentsCount: 1000,
  },

  certifications: [
    { name: "Blockchain Technologies", issuer: "NPTEL" },
    { name: "Python for Data Science", issuer: "NPTEL" },
    { name: "Full Stack Web Development", issuer: "NxtWave CCBP 4.0" },
    { name: "AWS Machine Learning Foundation Program", issuer: "Google Udacity" },
  ],

  workshops: [
    { name: "Faculty Development Program", organizer: "Aurora's Technological Research Institute", year: 2019 },
    { name: "Web Application Development Workshop", organizer: "Institute of Aeronautical Engineering", year: null },
  ],

  extracurricular: [
    "Website Administrator & Content Developer",
    "Actively involved in the preparation of lab manuals and subject materials for programming-related subjects",
    "Participated in various departmental and college events",
  ],
} as const;
