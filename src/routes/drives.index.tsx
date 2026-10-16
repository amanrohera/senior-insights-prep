import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filterLabels = ["Open", "Upcoming", "B.Tech", "M.Sc Data Science"];

  const filteredDrives = drives.filter((d) => {
    const matchesSearch =
      d.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.program.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      activeFilter === "All" ||
      d.status === activeFilter ||
      d.program.includes(activeFilter);

    return matchesSearch && matchesFilter;
  });

  return (
    <Page>
      <PageHeader
        eyebrow="2026–27 Placement Season"
        title="Campus Recruitment Drives"
        description="Active and upcoming campus drives matching your academic program and eligibility."
      />

      {/* Search and Filters */}

      <div className="grid gap-4 md:grid-cols-[1fr_auto]">
        <SearchBar
          compact
          placeholder="Search drives by role, company, or program..."
          value={searchQuery}
          onChange={setSearchQuery}
        />
        <FilterBar
          labels={filterLabels}
          activeLabel={activeFilter}
          onSelect={setActiveFilter}
        />
      </div>

      <div className="mt-8 flex items-center justify-between border-b border-border pb-3 text-xs">
        <span className="font-medium text-foreground">Showing {filteredDrives.length} drives</span>
        <span className="text-muted-foreground">Placement cycle updated today</span>
      </div>

      {filteredDrives.length === 0 ? (
        <div className="mt-8 rounded-lg border border-dashed border-border p-8 text-center bg-surface text-xs text-muted-foreground">
          No campus drives match &ldquo;{searchQuery}&rdquo;. Try another search keyword.
        </div>
      ) : (
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredDrives.map((d, i) => (
            <DriveCard key={`${d.company}-${d.role}-${i}`} drive={d} />
          ))}
        </div>
      )}
    </Page>
  );
}