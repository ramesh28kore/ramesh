// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// COURSES — Actual courses taught across all institutions
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export type CourseLevel = "UG" | "PG";

export interface Course {
  id: number;
  code: string;
  name: string;
  level: CourseLevel;
  institution: string;
  credits: number;
  description: string;
}

export const courses: Course[] = [
  {
    id: 1,
    code: "CS1XX",
    name: "Programming for Problem Solving",
    level: "UG",
    institution: "Pallavi Engineering College - Aurora's Technological Research Institute",
    credits: 3,
    description:
      "Introduction to programming using C: data types, control flow, functions, arrays, pointers, structures, and file handling. Emphasis on problem decomposition and algorithmic thinking.",
  },
  {
    id: 2,
    code: "CS1PY",
    name: "Python Programming",
    level: "UG",
    institution: "Pallavi Engineering College",
    credits: 3,
    description:
      "Introduction to Python programming: syntax, data types, control structures, functions, modules, file handling, object-oriented programming, and standard libraries for practical problem solving.",
  },
  {
    id: 3,
    code: "CS3XX",
    name: "Blockchain Technologies",
    level: "UG",
    institution: "Keshav Memorial Institute of Technology",
    credits: 3,
    description:
      "Fundamentals of distributed ledger technology, blockchain architecture, consensus mechanisms (PoW, PoS, PBFT), smart contracts using Solidity, and enterprise blockchain platforms including Hyperledger Fabric.",
  },
  {
    id: 4,
    code: "CS2XX",
    name: "Design and Analysis of Algorithms",
    level: "UG",
    institution: "Pallavi Engineering College",
    credits: 4,
    description:
      "Algorithm design paradigms - divide and conquer, dynamic programming, greedy algorithms, backtracking, and branch-and-bound. Complexity analysis, NP-completeness, and practical problem-solving techniques.",
  },
  {
    id: 5,
    code: "CS3XX",
    name: "Network Management Systems & Operations",
    level: "UG",
    institution: "Pallavi Engineering College - Aurora's Technological Research Institute",
    credits: 3,
    description:
      "Network administration, SNMP-based management, fault, configuration, accounting, performance, and security (FCAPS) model, network monitoring tools, and enterprise network operations.",
  },
  {
    id: 6,
    code: "CS3XY",
    name: "Service Oriented Architecture",
    level: "UG",
    institution: "Keshav Memorial Institute of Technology",
    credits: 3,
    description:
      "Principles of SOA, web services (SOAP, REST, WSDL, UDDI), microservices architecture, API design and integration, and enterprise service bus patterns.",
  },
  {
    id: 7,
    code: "CS2XY",
    name: "Object-Oriented Programming",
    level: "UG",
    institution: "Mahaveer Institute of Science and Technology",
    credits: 3,
    description:
      "OOP concepts in Java: classes, objects, inheritance, polymorphism, encapsulation, abstraction, interfaces, exception handling, collections, and introduction to design patterns.",
  },
  {
    id: 8,
    code: "CS4XY",
    name: "Web Technologies",
    level: "UG",
    institution: "Mahaveer Institute of Science and Technology",
    credits: 3,
    description:
      "Client-side and server-side web development: HTML5, CSS3, JavaScript, DOM manipulation, AJAX, PHP/Node.js basics, RESTful APIs, and introduction to modern frontend frameworks.",
  },
];