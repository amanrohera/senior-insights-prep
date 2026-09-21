import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, SlidersHorizontal, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DriveCard, ExperienceCard, SectionHeading } from "@/components/campus/shared";
import { drives, experiences } from "@/data/campus";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Campus Prep — Placement Intelligence from Your Seniors" },
      { name: "description", content: "Discover campus drives, student interview experiences, reported questions, and focused preparation resources for your university." },
      { property: "og:title", content: "Campus Prep — Placement Intelligence from Your Seniors" },
      { property: "og:description", content: "Real campus placement intelligence for college students preparing for placement season." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  const [activeProgram, setActiveProgram] = useState("B.Tech CS");

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="page-shell py-14 md:py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground shadow-2xs">
            <span className="size-1.5 rounded-full bg-primary" />
            XYZ University · Placement Cycle 2026–27
          </div>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl md:leading-[1.12]">
            Your campus placement,<br />
            prepared by your seniors.
          </h1>

          <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-muted-foreground sm:text-[17px]">
            Company-specific placement intelligence, real student experiences, reported interview questions, and preparation resources — verified by previous student batches.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button size="lg" className="h-11 px-6 text-sm font-medium shadow-2xs" asChild>
              <Link to="/companies">
                Explore Companies <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-11 px-6 text-sm font-medium border-border bg-surface hover:bg-muted" asChild>
              <Link to="/dashboard">Get Started</Link>
            </Button>
          </div>
        </div>

        {/* Placement Statistics Strip */}
        <div className="mt-14 rounded-lg border border-border bg-surface p-6 shadow-2xs">
          <div className="grid grid-cols-2 gap-6 divide-y divide-border sm:grid-cols-4 sm:divide-x sm:divide-y-0">
            <div className="sm:pr-4">
              <p className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">12</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">Open Drives</p>
            </div>
            <div className="pt-4 sm:pl-6 sm:pr-4 sm:pt-0">
              <p className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">126</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">Senior Experiences</p>
            </div>
            <div className="pt-4 sm:pl-6 sm:pr-4 sm:pt-0">
              <p className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">318</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">Reported Questions</p>
            </div>
            <div className="pt-4 sm:pl-6 sm:pt-0">
              <p className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">3</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">Eligible Programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open for Your Program */}
      <section className="border-y border-border bg-surface py-14">
        <div className="page-shell">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow text-primary">Live Campus Recruitment</p>
              <h2 className="section-title mt-1">Open for your program</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                B.Tech Computer Science · Class of 2027
              </p>
            </div>

            {/* Filter controls */}
            <div className="flex items-center gap-2">
              {["B.Tech CS", "All Programs", "2026–27"].map((prog) => (
                <button
                  key={prog}
                  type="button"
                  onClick={() => setActiveProgram(prog)}
                  className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                    activeProgram === prog
                      ? "bg-foreground text-background"
                      : "border border-border bg-surface text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {prog}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {drives.slice(0, 3).map((d) => (
              <DriveCard key={d.company + d.role} drive={d} compact />
            ))}
          </div>

          <div className="mt-8 text-center sm:text-right">
            <Link to="/drives" className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline">
              View all active campus drives <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* How Campus Prep Works */}
      <section id="how-it-works" className="page-shell py-16">
        <SectionHeading
          label="Workflow"
          title="How Campus Prep works"
          description="A structured approach to preparing for campus placement drives."
        />

        <div className="mt-8 grid gap-8 border-y border-border py-8 md:grid-cols-3 md:gap-0 md:divide-x md:divide-border">
          {[
            ["01", "Discover", "Find companies recruiting for your program, eligibility criteria, and drive deadlines."],
            ["02", "Learn", "Read verified student experiences, reported round details, and real interview questions."],
            ["03", "Prepare", "Build your personalized preparation plan and contribute your own placement journey."],
          ].map(([num, title, desc], idx) => (
            <div key={num} className={`flex flex-col justify-between ${idx === 0 ? "md:pr-8" : idx === 1 ? "md:px-8" : "md:pl-8"}`}>
              <div>
                <span className="font-mono text-xs font-semibold tracking-wider text-primary">{num}</span>
                <h3 className="mt-3 text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* From Your Seniors */}
      <section className="border-y border-border bg-surface py-16">
        <div className="page-shell">
          <SectionHeading
            label="From your seniors"
            title="What the process was really like"
            description="Real experiences shared by students from previous placement cycles."
            action={
              <Link to="/experiences" className="hidden text-xs font-semibold text-primary hover:underline sm:inline-flex items-center gap-1">
                All experiences <ArrowRight className="size-3.5" />
              </Link>
            }
          />

          <div className="mt-8 grid gap-8 md:grid-cols-3 md:gap-10">
            {experiences.slice(0, 3).map((e) => (
              <ExperienceCard key={e.company + e.year} experience={e} />
            ))}
          </div>
        </div>
      </section>

      {/* Placement Cycle Section */}
      <section className="page-shell py-16">
        <div className="rounded-xl border border-border bg-surface p-8">
          <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:items-center">
            <div>
              <p className="eyebrow text-primary">Placement Cycle</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground">2026–27</h2>
              <p className="mt-2 text-xs text-muted-foreground">Updated for current batch recruiting season.</p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Supported Programs</p>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {["B.Tech Computer Science", "M.Sc IT", "M.Sc Data Science", "B.Tech ECE"].map((prog) => (
                  <span key={prog} className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground">
                    <CheckCircle2 className="size-3.5 text-success" />
                    {prog}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-xl border border-border bg-surface p-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-foreground">Ready for your placement season?</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Explore companies, learn from previous students, and prepare with confidence.
            </p>
          </div>

          <Button size="lg" className="h-10.5 px-5 text-sm font-medium" asChild>
            <Link to="/companies">
              Explore Companies <ArrowRight className="ml-1.5 size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}