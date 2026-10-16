import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Search,
  ExternalLink,
  Code2,
  BookOpen,
  ShieldCheck,
  CheckCircle2,
  Flame,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Page, PageHeader, CompanyLogo } from "@/components/campus/shared";
import { questions } from "@/data/campus";

export const Route = createFileRoute("/preparation")({
  head: () => ({
    meta: [
      { title: "Question Vault — Campus Prep" },
      { name: "description", content: "College-reported placement interview questions filtered by topic and company." },
      { property: "og:title", content: "Question Vault — Campus Prep" },
      { property: "og:description", content: "Reported questions across DSA, DBMS, OS, and System Design." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Preparation,
});

function Preparation() {
  const [activeTopic, setActiveTopic] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredQuestions = questions.filter((q) => {
    const matchesTopic = activeTopic === "All" || q.topic === activeTopic;
    const matchesSearch =
      q.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.topic.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTopic && matchesSearch;
  });

  return (
    <Page>
      <PageHeader
        eyebrow="Placement Question Vault"
        title="Reported Campus Questions"
        description="Real interview questions reported by previous batches at XYZ University, categorized by topic."
        actions={
          <Button size="sm" variant="outline" asChild>
            <Link to="/workspace">Open In My Checklist →</Link>
          </Button>
        }
      />

      {/* Top 3 Curated External Sheets (Fast Scannable Strip) */}
      <section className="grid gap-3 sm:grid-cols-3">
        <a
          href="https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-between rounded-xl border border-border bg-surface p-3.5 shadow-2xs hover:border-primary/50 transition-colors"
        >
          <div className="flex items-center gap-2.5">
            <div className="flex size-7 items-center justify-center rounded-md bg-blue-500/10 text-blue-600">
              <Code2 className="size-3.5" />
            </div>
            <div>
              <p className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">
                Striver SDE Sheet
              </p>
              <p className="text-[10px] text-muted-foreground">DSA & Core Algorithms</p>
            </div>
          </div>
          <ExternalLink className="size-3 text-muted-foreground group-hover:text-primary" />
        </a>

        <a
          href="https://neetcode.io/practice"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-between rounded-xl border border-border bg-surface p-3.5 shadow-2xs hover:border-primary/50 transition-colors"
        >
          <div className="flex items-center gap-2.5">
            <div className="flex size-7 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-600">
              <BookOpen className="size-3.5" />
            </div>
            <div>
              <p className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">
                NeetCode 150
              </p>
              <p className="text-[10px] text-muted-foreground">Pattern-based Coding</p>
            </div>
          </div>
          <ExternalLink className="size-3 text-muted-foreground group-hover:text-primary" />
        </a>

        <a
          href="https://www.geeksforgeeks.org/last-minute-notes-operating-systems/"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-between rounded-xl border border-border bg-surface p-3.5 shadow-2xs hover:border-primary/50 transition-colors"
        >
          <div className="flex items-center gap-2.5">
            <div className="flex size-7 items-center justify-center rounded-md bg-purple-500/10 text-purple-600">
              <ShieldCheck className="size-3.5" />
            </div>
            <div>
              <p className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">
                Gate Smashers / GFG Core
              </p>
              <p className="text-[10px] text-muted-foreground">OS, DBMS, Networks Cheats</p>
            </div>
          </div>
          <ExternalLink className="size-3 text-muted-foreground group-hover:text-primary" />
        </a>
      </section>

      {/* Filter and Search Bar */}
      <section className="mt-8 space-y-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {/* Topic Pills */}
          <div className="flex flex-wrap gap-1.5">
            {["All", "DSA", "DBMS", "Operating Systems", "System Design", "HR"].map((topic) => (
              <button
                key={topic}
                type="button"
                onClick={() => setActiveTopic(topic)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  activeTopic === topic
                    ? "bg-foreground text-background font-semibold"
                    : "border border-border bg-surface text-muted-foreground hover:text-foreground"
                }`}
              >
                {topic}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-2.5 size-3.5 text-muted-foreground" />
            <Input
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-9 pl-8 text-xs bg-surface border-border shadow-2xs"
            />
          </div>
        </div>
      </section>

      {/* Question Cards (Visual Scannable Grid) */}
      <section className="mt-4">
        <div className="rounded-xl border border-border bg-surface divide-y divide-border shadow-2xs overflow-hidden">
          {filteredQuestions.length === 0 ? (
            <div className="p-8 text-center text-xs text-muted-foreground">
              No questions found matching &ldquo;{searchQuery}&rdquo;.
            </div>
          ) : (
            filteredQuestions.map((q) => (
              <div
                key={q.title}
                className="flex flex-col gap-2 p-4 sm:flex-row sm:items-center sm:justify-between hover:bg-muted/30 transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-foreground">
                      {q.title}
                    </span>
                    <Badge
                      variant={
                        q.frequency === "High" || q.frequency === "Essential"
                          ? "destructive"
                          : "secondary"
                      }
                      className="h-4 px-1.5 text-[9px] font-semibold"
                    >
                      {q.frequency} Frequency
                    </Badge>
                  </div>
                  <p className="text-[11px] text-muted-foreground">
                    Company: <span className="text-foreground/80 font-medium">{q.company}</span> · Topic: <span className="text-foreground/80 font-medium">{q.topic}</span>
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <Badge variant="outline" className="text-[10px] font-mono">
                    {q.reports} reports
                  </Badge>
                  <Button size="sm" variant="ghost" className="h-7 text-xs font-semibold text-primary" asChild>
                    <Link to="/drives/microsoft-2026">View Drive →</Link>
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </Page>
  );
}