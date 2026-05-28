// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SKILLS — Derived from certifications, teaching & research experience
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export interface Skill {
  name: string;
  level: number; // 0–100
}

export interface SkillGroup {
  category: string;
  iconName: string;
  color: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    // NPTEL Certified + PhD research focus
    category: "Blockchain & Web3",
    iconName: "FaLink",
    color: "blue",
    skills: [
      { name: "Blockchain Technology",      level: 90 },
      { name: "Smart Contracts (Solidity)",  level: 82 },
      { name: "Ethereum / DLT",             level: 85 },
      { name: "Hyperledger Fabric",         level: 75 },
      { name: "Web3.js / DApps",            level: 78 },
      { name: "IPFS",                       level: 68 },
    ],
  },
  {
    // NxtWave CCBP 4.0 Full Stack Certification
    category: "Full Stack Web Development",
    iconName: "FaCode",
    color: "indigo",
    skills: [
      { name: "HTML5 / CSS3",              level: 88 },
      { name: "JavaScript",                level: 82 },
      { name: "React.js",                  level: 78 },
      { name: "Node.js / Express",         level: 72 },
      { name: "REST APIs",                 level: 80 },
      { name: "C Programming",             level: 90 },
    ],
  },
  {
    // NPTEL Python for Data Science + AWS ML certification
    category: "AI, Data Science & Cloud",
    iconName: "FaBrain",
    color: "purple",
    skills: [
      { name: "Python",                    level: 82 },
      { name: "Machine Learning (basics)", level: 68 },
      { name: "AWS (ML Foundation)",       level: 65 },
      { name: "Apache Pig / Hive",         level: 72 },
      { name: "MySQL Cluster",             level: 75 },
    ],
  },
  {
    // From 9+ years of teaching, lab admin, website management
    category: "Teaching & Tools",
    iconName: "FaTools",
    color: "cyan",
    skills: [
      { name: "Curriculum Design",         level: 92 },
      { name: "Lab Manual Preparation",    level: 88 },
      { name: "Web Administration",        level: 78 },
      { name: "LaTeX / Academic Writing",  level: 80 },
      { name: "Git / GitHub",              level: 72 },
      { name: "Linux",                     level: 70 },
    ],
  },
];
