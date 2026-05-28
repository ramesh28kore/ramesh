// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PUBLICATIONS — Add venue, year, and DOI once you have them
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export type PublicationType = "Journal" | "Conference" | "Preprint";

export interface Publication {
  id: number;
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: PublicationType;
  doi?: string;
  tags: string[];
}

export const publications: Publication[] = [
  {
    id: 1,
    title: "Enhanced Processing Time by Managing MySQL Cluster, Apache Pig, and Apache Hive Methods",
    authors: "Kore Ramesh",
    venue: "International Journal — update venue from publication details", // PLACEHOLDER: add journal name
    year: 2023,  // PLACEHOLDER: update with actual year
    type: "Journal",
    doi: "#",   // PLACEHOLDER: add DOI link
    tags: ["MySQL Cluster", "Apache Pig", "Apache Hive", "Big Data", "Processing Optimization"],
  },
];
