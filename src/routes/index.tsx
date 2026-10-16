import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Zap,
  Sparkles,
  BookOpen,
  CheckCircle2,
  Calendar,
  Flame,
  FileCode,
  ShieldCheck,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DriveCard, CompanyLogo } from "@/components/campus/shared";
import { drives } from "@/data/campus";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Campus Prep — Placement Intelligence from Your Seniors" },
      { name: "description", content: "College-specific placement drives, reported interview questions, and senior tips — scannable in seconds." },
      { property: "og:title", content: "Campus Prep — Placement Intelligence from Your Seniors" },
      { property: "og:description", content: "Crack campus placements with verified senior intelligence." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Visual Quick Hub Hero */}
      <section className="page-shell pt-10 pb-8 sm:pt-14 sm:pb-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground shadow-2xs">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            XYZ University · Placement Cycle 2026–27 Live
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Crack Your Campus Drives.
          </h1>

          <p className="mt-3 max-w-xl text-base text-muted-foreground sm:text-lg">
            Real interview rounds, reported questions, and senior tips — designed to prepare you in 48 hours without the noise.
          </p>

          {/* Quick Action Buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button size="lg" className="h-10 px-5 text-sm font-semibold shadow-xs" asChild>
              <Link to="/drives">
                Explore Active Drives <ArrowRight className="ml-1.5 size-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-10 px-5 text-sm font-semibold border-border bg-surface hover:bg-muted" asChild>
              <Link to="/workspace">My Prep Checklist</Link>
            </Button>
            <Button size="lg" variant="ghost" className="h-10 px-4 text-sm font-medium text-primary" asChild>
              <Link to="/contribute">+ Share My Experience</Link>
            </Button>
          </div>
        </div>

        {/* 3 Glanceable Stat Cards */}
        <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-4">
          <div className="rounded-xl border border-border bg-surface p-4 shadow-2xs">
            <div className="flex items-center gap-2 text-primary">
              <Zap className="size-4" />
              <span className="text-xl font-bold text-foreground sm:text-2xl">12</span>
            </div>
            <p className="mt-1 text-xs font-medium text-muted-foreground">Active Campus Drives</p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4 shadow-2xs">
            <div className="flex items-center gap-2 text-primary">
              <FileCode className="size-4" />
              <span className="text-xl font-bold text-foreground sm:text-2xl">318+</span>
            </div>
            <p className="mt-1 text-xs font-medium text-muted-foreground">Reported Questions</p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4 shadow-2xs">
            <div className="flex items-center gap-2 text-primary">
              <ShieldCheck className="size-4" />
              <span className="text-xl font-bold text-foreground sm:text-2xl">100%</span>
            </div>
            <p className="mt-1 text-xs font-medium text-muted-foreground">Verified by Seniors</p>
          </div>
        </div>
      </section>

      {/* Active Campus Drives (Scannable Cards) */}
      <section className="border-t border-border bg-surface/50 py-10">
        <div className="page-shell">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <Flame className="size-4 text-amber-500" />
                <h2 className="text-lg font-bold text-foreground sm:text-xl">Urgent Placement Drives</h2>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">Upcoming assessments and interviews this week</p>
            </div>
            <Button variant="ghost" size="sm" className="text-xs font-semibold text-primary" asChild>
              <Link to="/drives">View all 12 drives →</Link>
            </Button>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {drives.slice(0, 3).map((d) => (
              <DriveCard key={d.company + d.role} drive={d} compact />
            ))}
          </div>
        </div>
      </section>

      {/* 4 Fast Prep Topic Hubs */}
      <section className="page-shell py-12">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-foreground sm:text-xl">Fast Preparation Hubs</h2>
            <p className="text-xs text-muted-foreground mt-0.5">Focus on high-frequency questions reported by seniors</p>
          </div>
          <Button variant="ghost" size="sm" className="text-xs font-semibold text-primary" asChild>
            <Link to="/preparation">Question Vault →</Link>
          </Button>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            to="/preparation"
            className="group rounded-xl border border-border bg-surface p-4 shadow-2xs hover:border-primary/50 transition-all hover:-translate-y-0.5"
          >
            <div className="flex size-9 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 mb-3">
              <FileCode className="size-5" />
            </div>
            <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
              DSA & Coding
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">Trees, Dynamic Programming, Sliding Window</p>
            <span className="mt-3 inline-flex items-center text-[11px] font-semibold text-primary">
              142 Questions →
            </span>
          </Link>

          <Link
            to="/preparation"
            className="group rounded-xl border border-border bg-surface p-4 shadow-2xs hover:border-primary/50 transition-all hover:-translate-y-0.5"
          >
            <div className="flex size-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 mb-3">
              <BookOpen className="size-5" />
            </div>
            <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
              Core CS Subjects
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">OS Deadlocks, DBMS Indexing, Computer Networks</p>
            <span className="mt-3 inline-flex items-center text-[11px] font-semibold text-primary">
              86 Questions →
            </span>
          </Link>

          <Link
            to="/preparation"
            className="group rounded-xl border border-border bg-surface p-4 shadow-2xs hover:border-primary/50 transition-all hover:-translate-y-0.5"
          >
            <div className="flex size-9 items-center justify-center rounded-lg bg-purple-500/10 text-purple-600 mb-3">
              <Zap className="size-5" />
            </div>
            <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
              System Design
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">LRU Cache, Scalability, Database Sharding</p>
            <span className="mt-3 inline-flex items-center text-[11px] font-semibold text-primary">
              45 Questions →
            </span>
          </Link>

          <Link
            to="/preparation"
            className="group rounded-xl border border-border bg-surface p-4 shadow-2xs hover:border-primary/50 transition-all hover:-translate-y-0.5"
          >
            <div className="flex size-9 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 mb-3">
              <MessageSquare className="size-5" />
            </div>
            <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
              HR & Project Defense
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">STAR method, Resume deep-dive, Conflict answers</p>
            <span className="mt-3 inline-flex items-center text-[11px] font-semibold text-primary">
              45 Scenarios →
            </span>
          </Link>
        </div>
      </section>

      {/* Senior Wisdom Bites (Scannable Quotes) */}
      <section className="border-t border-border bg-surface/50 py-10">
        <div className="page-shell">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-foreground sm:text-xl">Top Senior Advice</h2>
              <p className="text-xs text-muted-foreground mt-0.5">Golden rules from seniors who cracked Day-1 companies</p>
            </div>
            <Button variant="ghost" size="sm" className="text-xs font-semibold text-primary" asChild>
              <Link to="/experiences">All experiences →</Link>
            </Button>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-surface p-5 shadow-2xs">
              <div className="flex items-center gap-3">
                <CompanyLogo name="Microsoft" size="sm" />
                <div>
                  <p className="text-xs font-semibold text-foreground">Aman S. · Placed at Microsoft SDE-1</p>
                  <p className="text-[11px] text-muted-foreground">2025 Batch · CTC ₹45.5 LPA</p>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-foreground/90 font-medium">
                &ldquo;Don&apos;t memorize optimal solutions. For the OA, focus on clean code and handling edge cases (empty arrays, duplicates). In the interview, always vocalize your thought process before writing a single line of code.&rdquo;
              </p>
            </div>

            <div className="rounded-xl border border-border bg-surface p-5 shadow-2xs">
              <div className="flex items-center gap-3">
                <CompanyLogo name="Amazon" size="sm" />
                <div>
                  <p className="text-xs font-semibold text-foreground">Sneha R. · Placed at Amazon SDE</p>
                  <p className="text-[11px] text-muted-foreground">2025 Batch · CTC ₹32.0 LPA</p>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-foreground/90 font-medium">
                &ldquo;Amazon takes Leadership Principles very seriously. Prepare 2 real stories for each principle using the STAR method. For DSA, master BFS/DFS and Binary Search variations.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Footer CTA */}
      <section className="page-shell py-12 text-center">
        <div className="max-w-xl mx-auto rounded-2xl border border-border bg-surface p-8 shadow-2xs">
          <h2 className="text-xl font-bold text-foreground">Placed recently? Help your juniors.</h2>
          <p className="mt-2 text-xs text-muted-foreground">
            Takes less than 3 minutes to share your interview rounds and tips. Pay it forward to the next batch.
          </p>
          <div className="mt-5 flex justify-center gap-3">
            <Button size="sm" className="font-semibold shadow-xs" asChild>
              <Link to="/contribute">+ Share Interview Experience</Link>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <Link to="/companies">View All Companies</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}