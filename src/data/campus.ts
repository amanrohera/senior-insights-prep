export type Company = {
  name: string;
  initials: string;
  industry: string;
  drives: number;
  experiences: number;
  questions: number;
  tone: "blue" | "amber" | "green" | "red" | "neutral";
};

export type Drive = {
  company: string;
  role: string;
  program: string;
  deadline: string;
  experiences: number;
  questions: number;
  status: "Open" | "Upcoming" | "Closed";
};

export type Experience = {
  company: string;
  role: string;
  year: string;
  program: string;
  result: "Selected" | "Not selected";
  rounds: number;
  questions: number;
  quote: string;
};

export const companies: Company[] = [
  { name: "Microsoft", initials: "M", industry: "Technology", drives: 3, experiences: 21, questions: 58, tone: "blue" },
  { name: "Amazon", initials: "a", industry: "E-commerce & Cloud", drives: 2, experiences: 31, questions: 82, tone: "amber" },
  { name: "Google", initials: "G", industry: "Technology", drives: 2, experiences: 18, questions: 46, tone: "green" },
  { name: "Deloitte", initials: "D", industry: "Consulting", drives: 4, experiences: 14, questions: 29, tone: "green" },
  { name: "TCS", initials: "T", industry: "IT Services", drives: 5, experiences: 42, questions: 96, tone: "red" },
];

export const drives: Drive[] = [
  { company: "Microsoft", role: "Software Engineer", program: "B.Tech", deadline: "25 Sep 2026", experiences: 21, questions: 58, status: "Open" },
  { company: "Amazon", role: "Software Development Engineer", program: "B.Tech", deadline: "28 Sep 2026", experiences: 31, questions: 82, status: "Open" },
  { company: "Deloitte", role: "Analyst", program: "B.Tech · M.Sc IT", deadline: "02 Oct 2026", experiences: 14, questions: 29, status: "Open" },
  { company: "Google", role: "Software Engineer", program: "B.Tech", deadline: "08 Oct 2026", experiences: 18, questions: 46, status: "Upcoming" },
  { company: "TCS", role: "Graduate Engineer Trainee", program: "B.Tech · M.Sc IT", deadline: "14 Oct 2026", experiences: 42, questions: 96, status: "Upcoming" },
  { company: "Microsoft", role: "Data Science Associate", program: "M.Sc Data Science", deadline: "19 Oct 2026", experiences: 9, questions: 24, status: "Upcoming" },
];

export const experiences: Experience[] = [
  { company: "Microsoft", role: "Software Engineer", year: "2026", program: "B.Tech", result: "Selected", rounds: 4, questions: 18, quote: "Technical rounds focused heavily on DSA, OOP and project discussion. The interviewers cared about how I explained trade-offs." },
  { company: "Amazon", role: "SDE", year: "2026", program: "B.Tech", result: "Selected", rounds: 4, questions: 16, quote: "The online assessment was time-sensitive. Leadership principles came up naturally throughout both technical interviews." },
  { company: "Deloitte", role: "Analyst", year: "2026", program: "M.Sc IT", result: "Selected", rounds: 3, questions: 11, quote: "SQL fundamentals and clear communication mattered more than advanced algorithms in my process." },
  { company: "Google", role: "Software Engineer", year: "2025", program: "B.Tech", result: "Not selected", rounds: 3, questions: 12, quote: "Graph problems were the main theme. I would spend more time narrating my approach before writing code." },
];

export const questions = [
  { title: "Reverse Linked List", reports: 14, topic: "DSA" },
  { title: "Binary Trees", reports: 11, topic: "DSA" },
  { title: "DBMS Normalization", reports: 8, topic: "DBMS" },
  { title: "Graphs: shortest path", reports: 7, topic: "DSA" },
  { title: "Explain your final-year project", reports: 6, topic: "Projects" },
];

export const resources = [
  { title: "Microsoft interview question set", kind: "Question set", detail: "58 questions · Updated 4 days ago" },
  { title: "Core DSA revision notes", kind: "Study guide", detail: "12 topics · 45 min" },
  { title: "DBMS concepts for interviews", kind: "Notes", detail: "Normalization, indexing, transactions" },
  { title: "Project explanation framework", kind: "Template", detail: "Problem, decisions, impact, learnings" },
];

export const preparationTasks = [
  "Revise Binary Trees",
  "Solve Microsoft reported questions",
  "Revise DBMS",
  "Prepare project explanation",
];

export function companyFor(name: string) {
  return companies.find((company) => company.name === name) ?? { name, initials: name.slice(0, 1), industry: "Technology", drives: 0, experiences: 0, questions: 0, tone: "neutral" as const };
}
