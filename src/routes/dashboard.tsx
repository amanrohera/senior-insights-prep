import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Page, SearchBar, SectionHeading, DriveCard, ExperienceCard, StatusBadge, CompanyLogo } from "@/components/campus/shared";
import { drives, experiences } from "@/data/campus";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — Campus Prep" },
      { name: "description", content: "Your personalized campus placement overview and next preparation steps." },
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
      <div className="mb-8">
        <p className="eyebrow text-primary">Monday, 21 September</p>
        <h1 className="page-title mt-2">Good morning, Aman.</h1>
        <p className="mt-1.5 text-sm text-muted-foreground">
          B.Tech Computer Science · Class of 2027 <span className="mx-1">•</span> XYZ University <span className="mx-1">•</span> Placement Cycle 2026–27
        </p>
      </div>

      <SearchBar />

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

      <div className="mt-12 grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
        <section>
          <SectionHeading label="Your journey" title="Tracked Companies" />
          <div className="rounded-lg border border-border bg-surface p-5 shadow-2xs divide-y divide-border">
            {[
              { company: "Microsoft", status: "Participated" as const, detail: "Experience submitted" },
              { company: "Amazon", status: "Participated" as const, detail: "Experience pending" },
              { company: "Google", status: "Saved" as const, detail: "Saved for later" },
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
          <SectionHeading label="Active Plan" title="Continue Preparation" />
          <div className="content-card p-6">
            <div className="flex items-center gap-3.5">
              <CompanyLogo name="Microsoft" size="md" />
              <div>
                <h3 className="card-title text-base font-semibold">Microsoft</h3>
                <p className="text-xs text-muted-foreground">Software Engineer · Campus Drive</p>
              </div>
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
                <p className="eyebrow text-primary">Next Task</p>
                <p className="mt-0.5 text-sm font-semibold text-foreground">Revise Binary Trees & Graph Traversal</p>
              </div>
              <Button size="sm" className="h-9 px-4 text-xs font-medium" asChild>
                <Link to="/preparation">
                  Continue Prep <ArrowRight className="ml-1 size-3.5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>

      <section className="mt-14">
        <SectionHeading label="Senior Feed" title="Recent Student Experiences" />
        <div className="grid gap-8 lg:grid-cols-3">
          {experiences.slice(0, 3).map((e) => (
            <ExperienceCard key={e.company + e.year} experience={e} />
          ))}
        </div>
      </section>
    </Page>
  );
}