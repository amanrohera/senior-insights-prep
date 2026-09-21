import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DriveCard, ExperienceCard, SectionHeading } from "@/components/campus/shared";
import { drives, experiences } from "@/data/campus";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Campus Prep — Placement intelligence from your seniors" },
    { name: "description", content: "Discover campus drives, student interview experiences, reported questions, and focused preparation resources." },
    { property: "og:title", content: "Campus Prep — Placement intelligence from your seniors" },
    { property: "og:description", content: "Real campus placement intelligence for current students." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: LandingPage,
});

function LandingPage() {
  return <main>
    <section className="page-shell grid min-h-[500px] items-center py-16 md:grid-cols-[1.2fr_.8fr] md:py-20">
      <div><p className="eyebrow text-primary">XYZ University · Placement cycle 2026–27</p><h1 className="mt-5 max-w-3xl text-[40px] font-semibold leading-[1.12] text-foreground md:text-[48px]">Your campus placement,<br/>prepared by your seniors.</h1><p className="mt-6 max-w-2xl text-[17px] leading-7 text-muted-foreground">Company-specific placement intelligence, real student experiences, reported interview questions, and preparation resources — all in one place.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button size="lg" asChild><Link to="/companies">Explore Companies <ArrowRight/></Link></Button><Button size="lg" variant="outline" asChild><Link to="/dashboard">Get Started</Link></Button></div></div>
      <div className="mt-12 border-l border-border pl-0 md:mt-0 md:pl-10"><p className="eyebrow">This placement cycle</p><div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-7"><div><p className="text-3xl font-semibold">12</p><p className="mt-1 text-sm text-muted-foreground">Open drives</p></div><div><p className="text-3xl font-semibold">126</p><p className="mt-1 text-sm text-muted-foreground">Senior experiences</p></div><div><p className="text-3xl font-semibold">318</p><p className="mt-1 text-sm text-muted-foreground">Reported questions</p></div><div><p className="text-3xl font-semibold">3</p><p className="mt-1 text-sm text-muted-foreground">Eligible programs</p></div></div></div>
    </section>
    <section className="border-y border-border bg-surface py-12"><div className="page-shell"><SectionHeading label="Open for your program" title="B.Tech Computer Science · Class of 2027"/><div className="grid gap-4 md:grid-cols-3">{drives.slice(0,3).map(d => <DriveCard key={d.company} drive={d} compact/>)}</div></div></section>
    <section id="how-it-works" className="page-shell py-16"><SectionHeading label="How Campus Prep works"/><div className="grid border-y border-border md:grid-cols-3">{[["01","Discover","Find companies recruiting for your program."],["02","Learn","Read experiences and reported questions from previous students."],["03","Prepare","Build your plan, then contribute your own experience."]].map(([n,t,d]) => <div key={n} className="py-8 md:border-r md:px-8 first:pl-0 last:border-0"><span className="text-xs font-semibold text-primary">{n}</span><h3 className="mt-5 text-xl font-semibold">{t}</h3><p className="mt-2 max-w-xs text-sm leading-6 text-muted-foreground">{d}</p></div>)}</div></section>
    <section className="border-y border-border bg-surface py-16"><div className="page-shell"><SectionHeading label="From your seniors" title="What the process was really like"/><div className="grid gap-x-10 md:grid-cols-3">{experiences.slice(0,3).map(e => <ExperienceCard key={e.company} experience={e}/>)}</div></div></section>
    <section className="page-shell py-16"><div className="grid gap-8 border-b border-border pb-16 md:grid-cols-[1fr_2fr]"><div><p className="eyebrow">Built for your placement cycle</p><p className="mt-4 text-4xl font-semibold">2026–27</p></div><div className="flex flex-wrap items-end gap-3">{["B.Tech","M.Sc IT","M.Sc Data Science"].map(x => <span key={x} className="border border-border bg-surface px-4 py-3 text-sm font-medium">{x}</span>)}</div></div><div className="flex flex-col items-start justify-between gap-6 pt-16 md:flex-row md:items-center"><div><h2 className="section-title">Ready for your placement season?</h2><p className="mt-2 text-muted-foreground">Explore your campus drives.</p></div><Button asChild><Link to="/companies">Explore Companies <ArrowRight/></Link></Button></div></section>
  </main>;
}