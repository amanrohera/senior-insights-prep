import { createFileRoute } from "@tanstack/react-router";
import { Page, PageHeader, SearchBar, FilterBar, DriveCard } from "@/components/campus/shared";
import { drives } from "@/data/campus";

export const Route = createFileRoute("/drives/")({
  head: () => ({
    meta: [
      { title: "Placement Drives — Campus Prep" },
      { name: "description", content: "Browse active and upcoming companies recruiting in the 2026–27 campus placement cycle." },
      { property: "og:title", content: "Placement Drives — Campus Prep" },
      { property: "og:description", content: "Find relevant campus drives, deadlines, and interview intelligence." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DrivesPage,
});

function DrivesPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="2026–27 Placement Season"
        title="Placement Drives"
        description="Active and upcoming campus drives matching your academic program and eligibility."
      />

      <div className="grid gap-4 md:grid-cols-[1fr_auto]">
        <SearchBar compact placeholder="Search drives by role, company, or program..." />
        <FilterBar labels={["Program", "Deadline", "Status"]} />
      </div>

      <div className="mt-8 flex items-center justify-between border-b border-border pb-3 text-xs">
        <span className="font-medium text-foreground">Showing 6 relevant drives</span>
        <span className="text-muted-foreground">Updated today</span>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {drives.map((d, i) => (
          <DriveCard key={`${d.company}-${d.role}-${i}`} drive={d} />
        ))}
      </div>
    </Page>
  );
}