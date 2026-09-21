import { createFileRoute } from "@tanstack/react-router";
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
  return (
    <Page>
      <PageHeader
        eyebrow="Verified Intel"
        title="Student Experiences"
        description="Real campus placement experiences, interview round breakdowns, and advice from previous candidates."
      />

      <div className="grid gap-4 md:grid-cols-[1fr_auto]">
        <SearchBar compact placeholder="Search experiences by company, role, or topic..." />
        <FilterBar labels={["Company", "Program", "Year", "Outcome"]} />
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {[...experiences, ...experiences.slice(0, 2)].map((e, i) => (
          <ExperienceCard key={`${e.company}-${e.role}-${i}`} experience={e} />
        ))}
      </div>
    </Page>
  );
}