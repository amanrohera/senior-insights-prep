import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Page, PageHeader, SearchBar, FilterBar, CompanyLogo } from "@/components/campus/shared";
import { companies } from "@/data/campus";

export const Route = createFileRoute("/companies")({
  head: () => ({
    meta: [
      { title: "Companies — Campus Prep" },
      { name: "description", content: "Explore companies that recruit from XYZ University campus placement drives." },
      { property: "og:title", content: "Company Directory — Campus Prep" },
      { property: "og:description", content: "Campus recruiting companies, active drives, student experiences, and reported questions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CompaniesPage,
});

function CompaniesPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Placement Directory"
        title="Recruiting Companies"
        description="Explore top companies recruiting from your campus across engineering, consulting, and product roles."
      />

      <div className="grid gap-4 md:grid-cols-[1fr_auto]">
        <SearchBar compact placeholder="Search companies by name, industry, or role..." />
        <FilterBar labels={["Industry", "Program", "Active Drives"]} />
      </div>

      <div className="mt-8 rounded-lg border border-border bg-surface shadow-2xs divide-y divide-border">
        {companies.map((c) => (
          <article key={c.name} className="group grid gap-4 p-5 sm:grid-cols-[1.2fr_.9fr_auto] sm:items-center transition-colors hover:bg-muted/40">
            <div className="flex items-center gap-3.5">
              <CompanyLogo name={c.name} size="lg" />
              <div>
                <h2 className="card-title text-base font-semibold group-hover:text-primary transition-colors">{c.name}</h2>
                <p className="mt-0.5 text-xs text-muted-foreground">{c.industry}</p>
              </div>
            </div>

            <div className="flex gap-6 text-xs text-muted-foreground">
              <div>
                <span className="block font-bold text-sm text-foreground">{c.drives}</span>
                <span>campus drives</span>
              </div>
              <div>
                <span className="block font-bold text-sm text-foreground">{c.experiences}</span>
                <span>experiences</span>
              </div>
              <div>
                <span className="block font-bold text-sm text-foreground">{c.questions}</span>
                <span>questions</span>
              </div>
            </div>

            <Link to="/drives/microsoft-2026" className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:underline">
              View company <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </article>
        ))}
      </div>
    </Page>
  );
}