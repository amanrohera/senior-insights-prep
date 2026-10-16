export type Company = {
  name: string;
  initials: string;
  industry: string;
  drives: number;
  experiences: number;
  questions: number;
  tone: "blue" | "amber" | "green" | "red" | "neutral";
  slug: string;
  avgPackage?: string;
  location?: string;
};

export type Drive = {
  company: string;
  role: string;
  program: string;
  deadline: string;
  experiences: number;
  questions: number;
  status: "Open" | "Upcoming" | "Closed";
  daysLeft?: number;
  slug?: string;
  ctc?: string;
  cgpaCutoff?: string;
};

export type Experience = {
  id?: string;
  company: string;
  role: string;
  year: string;
  program: string;
  result: "Selected" | "Not selected";
  rounds: number;
  questions: number;
  quote: string;
  difficulty?: "Easy" | "Medium" | "Hard";
  seniorName?: string;
};

export type ExternalResource = {
  id: string;
  platform: "YouTube" | "LeetCode" | "Reddit" | "Glassdoor" | "GitHub";
  title: string;
  description: string;
  url: string;
  tag: string;
  meta: string;
};

export type WorkspaceTask = {
  id: string;
  label: string;
  category: "DSA" | "Core CS" | "HR" | "Resume" | "OA Practice";
  completed: boolean;
  priority: "High" | "Medium" | "Low";
  dueText: string;
};

export type WorkspaceNote = {
  id: string;
  title: string;
  company: string;
  topic: string;
  content: string;
  updatedAt: string;
};

export type CalendarEvent = {
  id: string;
  title: string;
  company: string;
  type: "OA" | "Interview" | "Deadline" | "Study" | "PPT";
  date: string;
  time: string;
  location: string;
  status: "Urgent" | "Upcoming" | "Completed";
};

export type ReflectionEntry = {
  id: string;
  company: string;
  role: string;
  date: string;
  outcome: "Offer Received" | "Reached Final Round" | "OA Cleared" | "Eliminated Round 2";
  whatWentWell: string;
  trickyQuestions: string[];
  lessonsLearned: string;
  sharedWithJuniors: boolean;
};

export type SeniorMentor = {
  name: string;
  initials: string;
  role: string;
  company: string;
  batch: string;
  linkedin: string;
  topTip: string;
};

export const companies: Company[] = [
  { name: "Microsoft", initials: "M", industry: "Technology", drives: 3, experiences: 21, questions: 58, tone: "blue", slug: "microsoft-2026", avgPackage: "45 LPA", location: "Bangalore / Hyderabad" },
  { name: "Amazon", initials: "A", industry: "E-commerce & Cloud", drives: 2, experiences: 31, questions: 82, tone: "amber", slug: "microsoft-2026", avgPackage: "44 LPA", location: "Hyderabad / Bangalore" },
  { name: "Google", initials: "G", industry: "Technology", drives: 2, experiences: 18, questions: 46, tone: "green", slug: "microsoft-2026", avgPackage: "52 LPA", location: "Bangalore" },
  { name: "Deloitte", initials: "D", industry: "Consulting", drives: 4, experiences: 14, questions: 29, tone: "green", slug: "microsoft-2026", avgPackage: "12 LPA", location: "Pan India" },
  { name: "TCS", initials: "T", industry: "IT Services", drives: 5, experiences: 42, questions: 96, tone: "red", slug: "microsoft-2026", avgPackage: "9 LPA", location: "Multiple" },
];

export const drives: Drive[] = [
  { company: "Microsoft", role: "Software Engineer", program: "B.Tech", deadline: "25 Sep 2026", experiences: 21, questions: 58, status: "Open", daysLeft: 3, slug: "microsoft-2026", ctc: "45.5 LPA", cgpaCutoff: "7.0+" },
  { company: "Amazon", role: "Software Development Engineer", program: "B.Tech", deadline: "28 Sep 2026", experiences: 31, questions: 82, status: "Open", daysLeft: 6, slug: "microsoft-2026", ctc: "44.0 LPA", cgpaCutoff: "6.5+" },
  { company: "Deloitte", role: "Analyst", program: "B.Tech · M.Sc IT", deadline: "02 Oct 2026", experiences: 14, questions: 29, status: "Open", daysLeft: 10, slug: "microsoft-2026", ctc: "12.0 LPA", cgpaCutoff: "6.0+" },
  { company: "Google", role: "Software Engineer", program: "B.Tech", deadline: "08 Oct 2026", experiences: 18, questions: 46, status: "Upcoming", daysLeft: 16, slug: "microsoft-2026", ctc: "52.0 LPA", cgpaCutoff: "7.5+" },
  { company: "TCS", role: "Graduate Engineer Trainee", program: "B.Tech · M.Sc IT", deadline: "14 Oct 2026", experiences: 42, questions: 96, status: "Upcoming", daysLeft: 22, slug: "microsoft-2026", ctc: "9.0 LPA", cgpaCutoff: "6.0+" },
  { company: "Microsoft", role: "Data Science Associate", program: "M.Sc Data Science", deadline: "19 Oct 2026", experiences: 9, questions: 24, status: "Upcoming", daysLeft: 27, slug: "microsoft-2026", ctc: "38.0 LPA", cgpaCutoff: "7.0+" },
];

export const experiences: Experience[] = [
  { company: "Microsoft", role: "Software Engineer", year: "2026", program: "B.Tech", result: "Selected", rounds: 4, questions: 18, quote: "Technical rounds focused heavily on DSA, OOP and project discussion. The interviewers cared about how I explained trade-offs.", difficulty: "Medium", seniorName: "Nisha K." },
  { company: "Amazon", role: "SDE", year: "2026", program: "B.Tech", result: "Selected", rounds: 4, questions: 16, quote: "The online assessment was time-sensitive. Leadership principles came up naturally throughout both technical interviews.", difficulty: "Hard", seniorName: "Rahul S." },
  { company: "Deloitte", role: "Analyst", year: "2026", program: "M.Sc IT", result: "Selected", rounds: 3, questions: 11, quote: "SQL fundamentals and clear communication mattered more than advanced algorithms in my process.", difficulty: "Easy", seniorName: "Priya M." },
  { company: "Google", role: "Software Engineer", year: "2025", program: "B.Tech", result: "Not selected", rounds: 3, questions: 12, quote: "Graph problems were the main theme. I would spend more time narrating my approach before writing code.", difficulty: "Hard", seniorName: "Kunal V." },
];

export const questions = [
  { title: "Reverse Linked List in K-Groups", reports: 14, topic: "DSA", company: "Microsoft", frequency: "High" },
  { title: "Binary Trees: Lowest Common Ancestor", reports: 11, topic: "DSA", company: "Microsoft", frequency: "High" },
  { title: "DBMS Normalization & B-Tree Indexing", reports: 8, topic: "DBMS", company: "Microsoft", frequency: "Medium" },
  { title: "Graphs: Shortest Path Dijkstra & BFS", reports: 7, topic: "DSA", company: "Microsoft", frequency: "High" },
  { title: "Explain Your Final-Year Project Scalability Bottlenecks", reports: 6, topic: "Projects", company: "Microsoft", frequency: "Essential" },
  { title: "Design a Rate Limiter or URL Shortener (HLD Basics)", reports: 5, topic: "System Design", company: "Microsoft", frequency: "Medium" },
  { title: "OOP Design Patterns (Singleton, Factory, Strategy)", reports: 9, topic: "OOP", company: "Microsoft", frequency: "High" },
];

export const resources = [
  { title: "Microsoft Campus Question Set (Past 3 Years)", kind: "Question Set", detail: "58 questions · College-specific archive" },
  { title: "Core DSA Last-Mile Crash Notes", kind: "Study Guide", detail: "12 topics · High-yield formulas & patterns" },
  { title: "DBMS & SQL Query Speed-Run for Tech Rounds", kind: "Cheat Sheet", detail: "Normalization, indexing, ACID, transaction isolation" },
  { title: "Project Defense Framework (STAR + Metrics)", kind: "Template", detail: "How to explain architecture, trade-offs and failures" },
];

export const preparationTasks: string[] = [
  "Revise Binary Trees (Level-order & LCA)",
  "Solve Top 5 Microsoft campus reported questions",
  "Revise DBMS indexing & B+ Tree query plans",
  "Structure final-year project pitch with STAR method",
];

export const rapidSprintData = {
  company: "Microsoft",
  daysRemaining: 3,
  urgentNotice: "OA window opens Friday 9:00 PM (Coding + Debugging)",
  mustKnowTopics: [
    { name: "Trees & BST (LCA, Views, Level order)", weight: "35% of past OA questions" },
    { name: "Strings & HashMaps (Frequency sliding window)", weight: "25% of past OA questions" },
    { name: "Graphs (BFS/DFS cycle detection)", weight: "20% of past OA questions" },
    { name: "Core CS Fundamentals (OOP + Indexing)", weight: "Mandatory in Round 2" }
  ],
  oaPattern: {
    duration: "90 Minutes",
    questions: "3 Coding Problems (1 Easy-Med, 2 Medium)",
    platform: "Mettle / HackerEarth",
    proctoring: "Webcam + Full Screen + Tab Switch Detection"
  }
};

export const externalIntel: ExternalResource[] = [
  {
    id: "yt-1",
    platform: "YouTube",
    title: "Microsoft Campus Hiring 2026: Complete Round Breakdown & Strategy",
    description: "Senior campus recruit breaks down the OA platform test cases, DSA questions asked, and how technical rounds were graded.",
    url: "https://www.youtube.com",
    tag: "Interview Breakdown",
    meta: "28 mins · 14.2k views"
  },
  {
    id: "lc-1",
    platform: "LeetCode",
    title: "LeetCode Discuss: Microsoft On-Campus Interview Experience (All Rounds)",
    description: "Detailed breakdown of questions: Binary tree paths, SQL joins, and how behavioral rounds were scored.",
    url: "https://leetcode.com/discuss",
    tag: "Interview Archive",
    meta: "Updated this week · 89 upvotes"
  },
  {
    id: "rd-1",
    platform: "Reddit",
    title: "r/developersIndia: What really gets filtered out in Microsoft campus shortlists?",
    description: "Alumni thread discussing CGPA cutoffs, resume keyword density, and whether OA test case efficiency matters.",
    url: "https://reddit.com",
    tag: "Community Intel",
    meta: "142 comments · Verified alumni"
  },
  {
    id: "gd-1",
    platform: "Glassdoor",
    title: "Glassdoor: Microsoft SDE Campus Placement Salary & Interview Insights",
    description: "Base ₹16.5L, Joining bonus ₹5L, Relocation ₹2.5L, Stock options $45k over 4 years. Difficulty: 3.4/5.",
    url: "https://glassdoor.com",
    tag: "Compensation & Stats",
    meta: "Verified reviews for College Freshers"
  }
];

export const mentors: SeniorMentor[] = [
  {
    name: "Nisha Kapoor",
    initials: "NK",
    role: "Software Engineer",
    company: "Microsoft",
    batch: "Class of 2025 · B.Tech CS",
    linkedin: "https://linkedin.com",
    topTip: "In Round 2, they care much more about how you speak out your approach than whether you write 100% bug-free code on the first attempt."
  },
  {
    name: "Rahul Sharma",
    initials: "RS",
    role: "SDE-1",
    company: "Amazon",
    batch: "Class of 2025 · B.Tech IT",
    linkedin: "https://linkedin.com",
    topTip: "Prepare two strong stories for every Amazon Leadership Principle. Don't recycle the same project story for every question."
  },
  {
    name: "Priya Mukherjee",
    initials: "PM",
    role: "Associate Consultant",
    company: "Microsoft",
    batch: "Class of 2026 · M.Sc IT",
    linkedin: "https://linkedin.com",
    topTip: "Revisit SQL queries and database normalization. That was 40% of my technical round."
  }
];

export const initialWorkspaceTasks: WorkspaceTask[] = [
  { id: "t1", label: "Solve Microsoft top 5 reported tree questions", category: "DSA", completed: true, priority: "High", dueText: "Today" },
  { id: "t2", label: "Revise DBMS Indexing & ACID transactions", category: "Core CS", completed: false, priority: "High", dueText: "Tomorrow" },
  { id: "t3", label: "Practice STAR method for final-year project defense", category: "HR", completed: false, priority: "Medium", dueText: "In 2 days" },
  { id: "t4", label: "Take timed 90-min mock OA on HackerEarth format", category: "OA Practice", completed: false, priority: "High", dueText: "24 Sep" },
  { id: "t5", label: "Tailor resume bullet points for cloud & distributed systems", category: "Resume", completed: true, priority: "Low", dueText: "Completed" },
];

export const initialWorkspaceNotes: WorkspaceNote[] = [
  {
    id: "n1",
    title: "Microsoft Drive Cheat Sheet & Traps",
    company: "Microsoft",
    topic: "Company Prep",
    content: "1. Trees are guaranteed in OA and Round 1. Practice LCA and level order.\n2. In Round 2, interviewers ask to optimize O(N) space down to O(1) if possible.\n3. Keep 3 failure-handling metrics ready for the project discussion.",
    updatedAt: "Today, 10:30 AM"
  },
  {
    id: "n2",
    title: "Key DBMS Concepts to Drill",
    company: "General",
    topic: "Core CS",
    content: "B-Trees vs B+ Trees (why databases use B+ trees for range queries). Clustered vs non-clustered indexes. Isolation levels (Dirty read, Non-repeatable read, Phantom read).",
    updatedAt: "Yesterday"
  },
  {
    id: "n3",
    title: "HR & Behavioral Cheat Sheet",
    company: "Microsoft",
    topic: "HR",
    content: "Growth mindset questions: 'Tell me about a time you received critical feedback.' Focus on action taken and how the code/project improved.",
    updatedAt: "2 days ago"
  }
];

export const initialCalendarEvents: CalendarEvent[] = [
  {
    id: "ev-1",
    title: "Microsoft Online Assessment (OA)",
    company: "Microsoft",
    type: "OA",
    date: "25 Sep 2026",
    time: "07:00 PM - 08:30 PM",
    location: "Online (Mettle / Campus Portal)",
    status: "Urgent"
  },
  {
    id: "ev-2",
    title: "Amazon Pre-Placement Talk (PPT)",
    company: "Amazon",
    type: "PPT",
    date: "27 Sep 2026",
    time: "04:00 PM - 05:30 PM",
    location: "Main Auditorium & Teams",
    status: "Upcoming"
  },
  {
    id: "ev-3",
    title: "Amazon OA Window Closes",
    company: "Amazon",
    type: "Deadline",
    date: "28 Sep 2026",
    time: "11:59 PM",
    location: "HackerRank Portal",
    status: "Upcoming"
  },
  {
    id: "ev-4",
    title: "Peer Mock Technical Interview: Trees & Graphs",
    company: "Preparation",
    type: "Study",
    date: "24 Sep 2026",
    time: "08:00 PM - 09:30 PM",
    location: "Discord / Google Meet",
    status: "Upcoming"
  }
];

export const initialReflections: ReflectionEntry[] = [
  {
    id: "ref-1",
    company: "Microsoft",
    role: "Software Engineer",
    date: "Placement Cycle 2026",
    outcome: "Reached Final Round",
    whatWentWell: "Cleared OA easily with 3/3 test cases passed. In Round 1, my tree traversal explanation was praised for considering null-pointer edge cases.",
    trickyQuestions: ["Explain why B+ trees are preferred over hash indexes for range queries", "Optimize a sliding window with duplicate characters without extra memory"],
    lessonsLearned: "I spent too long on the project explanation and got rushed on the system design follow-up. Next time: limit project pitch to 4 minutes max.",
    sharedWithJuniors: true
  }
];

export function companyFor(name: string) {
  return companies.find((company) => company.name === name) ?? {
    name,
    initials: name.slice(0, 1),
    industry: "Technology",
    drives: 0,
    experiences: 0,
    questions: 0,
    tone: "neutral" as const,
    slug: "microsoft-2026"
  };
}
