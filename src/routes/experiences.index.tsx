import { createFileRoute, Link } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Page, PageHeader, SearchBar, FilterBar, ExperienceCard } from "@/components/campus/shared";
import { experiences } from "@/data/campus";

export const Route = createFileRoute("/experiences/")({
  head: () => ({
    meta: [
      { title: "Student Experiences — Campus Prep" },
      { name: "description", content: "Read real campus placement experiences shared by students from previous recruiting cycles." },
      { property: "og:title", content: "Student Experiences — Campus Prep" },
      { property: "og:description", content: "Detailed interview rounds, reported questions, results, and preparation advice." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ExperiencesPage,
});

function ExperiencesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filterLabels = ["Selected", "Microsoft", "Amazon", "Google", "Deloitte"];

  const allExperiences = [...experiences, ...experiences.slice(0, 2)];

  const filtered = allExperiences.filter((e) => {
    const matchesSearch =
      e.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.quote.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      activeFilter === "All" ||
      e.result === activeFilter ||
      e.company === activeFilter;

    return matchesSearch && matchesFilter;
  });

  return (
    <Page>
      <PageHeader
        eyebrow="Verified Intel"
        title="Student Experiences"
        description="Real campus placement experiences, interview round breakdowns, and advice from previous candidates."
        actions={
          <Button size="sm" asChild>
            <Link to="/contribute" className="gap-1.5">
              <Plus className="size-4" /> Share Your Experience
            </Link>
          </Button>
        }
      />

      <div className="grid gap-4 md:grid-cols-[1fr_auto]">
        <SearchBar
          compact
          placeholder="Search experiences by company, role, or keywords..."
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
        <span className="font-medium text-foreground">Showing {filtered.length} experiences</span>
        <span className="text-muted-foreground">Class of 2025 & 2026</span>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-8 rounded-lg border border-dashed border-border p-8 text-center bg-surface text-xs text-muted-foreground">
          No student experiences match &ldquo;{searchQuery}&rdquo;.
        </div>
      ) : (
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {filtered.map((e, i) => (
            <ExperienceCard key={`${e.company}-${e.role}-${i}`} experience={e} />
          ))}
        </div>
      )}
    </Page>
  );
}