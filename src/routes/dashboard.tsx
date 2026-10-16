import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Flame, Sparkles, BookMarked, Calendar, CheckSquare, MessageSquarePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Page,
  SearchBar,
  SectionHeading,
  DriveCard,
  ExperienceCard,
  StatusBadge,
  CompanyLogo,
  RapidSprintKit,
} from "@/components/campus/shared";
import { drives, experiences } from "@/data/campus";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — Campus Prep" },
      { name: "description", content: "Your personalized campus placement overview, 48-hour sprints, and next preparation steps." },
      { property: "og:title", content: "Student Dashboard — Campus Prep" },
      { property: "og:description", content: "Your current drives, recent experiences, and preparation plan." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DashboardPage,
});

function DashboardPage() {
  return (
    <Page>
      {/* Student Greeting & Quick Action Hub */}
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <p className="eyebrow text-primary">Monday, 21 September · Active Placement Cycle</p>
          <h1 className="page-title mt-2">Good morning, Aman.</h1>
          <p className="mt-1.5 text-sm text-muted-foreground">
            B.Tech Computer Science · Class of 2027 <span className="mx-1">•</span> XYZ University
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button size="sm" variant="outline" className="h-8.5 text-xs gap-1.5" asChild>
            <Link to="/workspace"><CheckSquare className="size-3.5" /> My Workspace</Link>
          </Button>
          <Button size="sm" className="h-8.5 text-xs gap-1.5" asChild>
            <Link to="/contribute"><MessageSquarePlus className="size-3.5" /> Share Experience</Link>
          </Button>
        </div>
      </div>

      {/* Urgent 48-Hour Sprint Banner */}
      <div className="mb-8">
        <RapidSprintKit companyName="Microsoft" />
      </div>

      <SearchBar />

      {/* Campus Recruitment Drives */}
      <section className="mt-10">
        <SectionHeading
          label="Open for you"
          title="Campus Recruitment Drives"
          description="Companies currently recruiting for your academic program."
          action={
            <Link to="/drives" className="hidden items-center gap-1 text-xs font-semibold text-primary hover:underline sm:flex">
              All drives <ArrowRight className="size-3.5" />
            </Link>
          }
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {drives.slice(0, 3).map((d) => (
            <DriveCard key={d.company + d.role} drive={d} />
          ))}
        </div>
      </section>

      {/* Tracked Companies + Active Preparation Plan */}
      <div className="mt-12 grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
        <section>
          <div className="flex items-center justify-between mb-4">
            <SectionHeading label="Your journey" title="Tracked Companies" />
            <Link to="/workspace" className="text-xs text-primary font-medium hover:underline">
              Manage in Workspace →
            </Link>
          </div>
          <div className="rounded-xl border border-border bg-surface p-5 shadow-2xs divide-y divide-border">
            {[
              { company: "Microsoft", status: "Participated" as const, detail: "OA in 3 days · 4 tasks pending" },
              { company: "Amazon", status: "Participated" as const, detail: "Drive opens 28 Sep" },
              { company: "Google", status: "Saved" as const, detail: "Saved for high package track" },
            ].map((item) => (
              <div key={item.company} className="flex items-center justify-between py-3.5 first:pt-0 last:pb-0">
                <div className="flex items-center gap-3">
                  <CompanyLogo name={item.company} size="sm" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item.company}</p>
                    <p className="text-xs text-muted-foreground">{item.detail}</p>
                  </div>
                </div>
                <StatusBadge status={item.status} />
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <SectionHeading label="Active Plan" title="Continue Preparation" />
            <Badge variant="secondary" className="text-xs">High-Yield Mode</Badge>
          </div>
          <div className="content-card p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <CompanyLogo name="Microsoft" size="md" />
                <div>
                  <h3 className="card-title text-base font-semibold">Microsoft India</h3>
                  <p className="text-xs text-muted-foreground">Software Engineer · Campus Drive 2026–27</p>
                </div>
              </div>
              <Badge variant="destructive" className="text-[11px] font-mono">
                <Flame className="size-3 mr-1" /> OA: 25 Sep
              </Badge>
            </div>

            <div className="mt-6">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-muted-foreground">Preparation progress</span>
                <span className="text-foreground font-bold">72%</span>
              </div>
              <Progress value={72} className="mt-2.5 h-2" />
            </div>

            <div className="mt-6 flex flex-col justify-between gap-4 border-t border-border pt-4 sm:flex-row sm:items-center">
              <div>
                <p className="eyebrow text-primary">Next High-Yield Task</p>
                <p className="mt-0.5 text-sm font-semibold text-foreground">Solve Microsoft Top 5 Reported Tree Questions</p>
              </div>
              <Button size="sm" className="h-9 px-4 text-xs font-medium shadow-2xs" asChild>
                <Link to="/preparation">
                  Continue Prep <ArrowRight className="ml-1 size-3.5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* Senior Feed */}
      <section className="mt-14">
        <div className="flex items-center justify-between mb-4">
          <SectionHeading label="Senior Feed" title="Recent Student Experiences" />
          <Link to="/experiences" className="text-xs font-semibold text-primary hover:underline">
            Browse all senior submissions →
          </Link>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {experiences.slice(0, 3).map((e) => (
            <ExperienceCard key={e.company + e.year} experience={e} />
          ))}
        </div>
      </section>
    </Page>
  );
}