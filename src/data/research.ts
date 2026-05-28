export interface ResearchArea {
  id: number;
  title: string;
  description: string;
  iconName: string;
  tags: string[];
  highlight?: boolean;
}

export const researchAreas: ResearchArea[] = [
  {
    id: 1,
    title: "Full Stack Blockchain Web Development",
    description:
      "PhD research (SR University, Warangal) focused on building end-to-end decentralized web applications using blockchain backends, smart contracts, and modern frontend frameworks.",
    iconName: "FaLink",
    tags: ["PhD Focus", "DApps", "Smart Contracts", "Web3", "Full Stack"],
    highlight: true,
  },
  {
    id: 2,
    title: "Distributed Ledger Technology",
    description:
      "Study of permissioned and permissionless blockchain architectures, consensus mechanisms, and distributed ledger design for enterprise and academic applications.",
    iconName: "FaFileCode",
    tags: ["DLT", "Consensus Algorithms", "Blockchain Architecture", "Hyperledger"],
  },
  {
    id: 3,
    title: "Decentralized Application Design",
    description:
      "Design and deployment of decentralized applications (DApps) integrating Solidity smart contracts with React-based frontends and IPFS storage for trustless, censorship-resistant systems.",
    iconName: "FaCoins",
    tags: ["Solidity", "Ethereum", "React", "IPFS", "DApps"],
  },
  {
    id: 4,
    title: "Big Data & Database Optimization",
    description:
      "Published research on improving data processing efficiency through optimized management of MySQL Cluster, Apache Pig, and Apache Hive for large-scale data environments.",
    iconName: "FaShieldAlt",
    tags: ["MySQL Cluster", "Apache Pig", "Apache Hive", "Big Data", "Performance"],
  },
];
