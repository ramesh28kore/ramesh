// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// EXPERIENCE — Professional work history
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export interface WorkExperience {
  id: number;
  institution: string;
  role: string;
  period: string;
  current: boolean;
  responsibilities: string[];
}

export interface Education {
  id: number;
  degree: string;
  field: string;
  institution: string;
  period: string;
  note?: string;
}

export const workExperience: WorkExperience[] = [
  {
    id: 1,
    institution: "Pallavi Engineering College",
    role: "Assistant Professor",
    period: "Aug 2024 – Present",
    current: true,
    responsibilities: [
      "Conducted lectures on Programming for Problem Solving, Design and Analysis of Algorithms, and Network Management Systems and Operations.",
      "Supervised academic student projects and guided students.",
    ],
  },
  {
    id: 2,
    institution: "Keshav Memorial Institute of Technology",
    role: "Assistant Professor",
    period: "Oct 2022 – Jul 2024",
    current: false,
    responsibilities: [
      "Conducted lectures on Blockchain Technologies and Service Oriented Architecture.",
      "Supervised academic student projects and guided students.",
      "Actively participated in NBA & NAAC process work.",
    ],
  },
  {
    id: 3,
    institution: "Mahaveer Institute of Science and Technology",
    role: "Assistant Professor",
    period: "Dec 2021 – Oct 2022",
    current: false,
    responsibilities: [
      "Taught courses on Object-Oriented Programming and Web Technologies.",
      "Managed Admission processes and contributed to curriculum development.",
      "Assisted in the establishment of well-equipped laboratories.",
    ],
  },
  {
    id: 4,
    institution: "Aurora's Technological Research Institute",
    role: "Assistant Professor",
    period: "Dec 2018 – Dec 2021",
    current: false,
    responsibilities: [
      "Taught courses on Network Management System & Operations and Programming for Problem Solving (C Programming).",
      "Participated in faculty development programs and workshops.",
      "Oversaw the smooth operation of computer labs and maintained college websites.",
    ],
  },
  {
    id: 5,
    institution: "Tirumala Engineering College",
    role: "Assistant Professor",
    period: "Feb 2017 – Dec 2018",
    current: false,
    responsibilities: [
      "Conducted classes on computer science subjects.",
      "Assisted in examination administration and lab management.",
    ],
  },
];

export const education: Education[] = [
  {
    id: 1,
    degree: "Doctor of Philosophy (PhD)",
    field: "Blockchain Technology",
    institution: "SR University, Warangal",
    period: "2024 – Present",
    note: "Batch 7 · Specialization in Full Stack Blockchain Web Development",
  },
  {
    id: 2,
    degree: "Master of Technology (MTech)",
    field: "Computer Science",
    institution: "CVSR College of Engineering (Anurag University)",
    period: "Nov 2014 – Jan 2017",
  },
  {
    id: 3,
    degree: "Bachelor of Technology (BTech)",
    field: "Information Technology",
    institution: "ACE Engineering College",
    period: "Oct 2010 – Apr 2014",
  },
];
