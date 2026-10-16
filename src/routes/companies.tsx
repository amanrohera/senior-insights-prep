import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Briefcase, Sparkles } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
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
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filterOptions = ["Technology", "Consulting", "E-commerce & Cloud", "IT Services"];

  const filteredCompanies = companies.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.industry.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === "All" || c.industry === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <Page>
      <PageHeader
        eyebrow="Placement Directory"
        title="Recruiting Companies"
        description="Explore top companies recruiting from your campus across engineering, consulting, and product roles."
      />

      <div className="grid gap-4 md:grid-cols-[1fr_auto]">
        <SearchBar
          compact
          placeholder="Search companies by name or industry..."
          value={searchQuery}
          onChange={setSearchQuery}
        />
        <FilterBar
          labels={filterOptions}
          activeLabel={activeFilter}
          onSelect={setActiveFilter}
        />
      </div>

      <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground px-1">
        <span>Showing {filteredCompanies.length} companies</span>
        <span>Placement Season 2026–27</span>
      </div>

      <div className="mt-4 rounded-xl border border-border bg-surface shadow-2xs divide-y divide-border">
        {filteredCompanies.length === 0 ? (
          <div className="p-8 text-center text-xs text-muted-foreground">
            No companies found matching &ldquo;{searchQuery}&rdquo;. Try another filter or keyword.
          </div>
        ) : (
          filteredCompanies.map((c) => (
            <article
              key={c.name}
              className="group grid gap-4 p-5 sm:grid-cols-[1.3fr_.9fr_auto] sm:items-center transition-colors hover:bg-muted/40"
            >
              <div className="flex items-center gap-3.5">
                <CompanyLogo name={c.name} size="lg" />
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="card-title text-base font-semibold group-hover:text-primary transition-colors">
                      {c.name}
                    </h2>
                    {c.avgPackage && (
                      <Badge variant="secondary" className="text-[10px] font-mono">
                        Avg: {c.avgPackage}
                      </Badge>
                    )}
                  </div>
                  <p className="mt-0.5 text-xs text-muted-foreground flex items-center gap-2">
                    <span>{c.industry}</span>
                    {c.location && (
                      <>
                        <span className="text-border">•</span>
                        <span className="flex items-center gap-0.5 text-[11px]">
                          <MapPin className="size-3" /> {c.location}
                        </span>
                      </>
                    )}
                  </p>
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

              <Link
                to="/drives/microsoft-2026"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:underline"
              >
                View intel <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </article>
          ))
        )}
      </div>
    </Page>
  );
}