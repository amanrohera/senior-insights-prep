import { Link } from "@tanstack/react-router";
import { ArrowRight, Search, SlidersHorizontal, Bookmark, Menu, CheckCircle2, Circle } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { companyFor, type Drive, type Experience } from "@/data/campus";

const appLinks = [
  ["Dashboard", "/dashboard"], ["Drives", "/drives"], ["Companies", "/companies"],
  ["Experiences", "/experiences"], ["Preparation", "/preparation"],
] as const;

const publicLinks = [["Companies", "/companies"], ["Experiences", "/experiences"]] as const;

function Brand() {
  return <Link to="/" className="flex shrink-0 flex-col leading-none"><span className="text-[15px] font-semibold text-foreground">Campus Prep</span><span className="mt-1 text-[9px] font-semibold uppercase text-muted-foreground tracking-label">Placement Intel</span></Link>;
}

export function Navbar({ publicMode = false }: { publicMode?: boolean }) {
  const links = publicMode ? publicLinks : appLinks;
  return <header className="sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur-sm">
    <div className="page-shell flex h-16 items-center justify-between gap-6">
      <Brand />
      <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
        {links.map(([label, to]) => <Link key={to} to={to} activeProps={{ className: "nav-link-active" }} className="nav-link">{label}</Link>)}
        {publicMode && <a href="#how-it-works" className="nav-link">How it works</a>}
      </nav>
      <div className="hidden items-center gap-2 sm:flex">
        <Button variant="ghost" size="sm" aria-label="Search"><Search /> <span className="hidden xl:inline">Search</span></Button>
        {publicMode ? <><Button variant="ghost" size="sm" asChild><Link to="/dashboard">Log in</Link></Button><Button size="sm" asChild><Link to="/dashboard">Get Started</Link></Button></> : <Link to="/profile" className="avatar-control" aria-label="Open Aman’s profile">AR</Link>}
      </div>
      <div className="sm:hidden"><Sheet><SheetTrigger asChild><Button variant="ghost" size="icon" aria-label="Open navigation"><Menu /></Button></SheetTrigger><SheetContent className="w-[88%] bg-surface"><SheetHeader><SheetTitle><Brand /></SheetTitle></SheetHeader><nav className="mt-8 flex flex-col gap-2">{links.map(([label, to]) => <Link key={to} to={to} className="mobile-nav-link">{label}<ArrowRight /></Link>)}<Link to="/workspace" className="mobile-nav-link">Workspace<ArrowRight /></Link><Link to="/profile" className="mobile-nav-link">Profile<ArrowRight /></Link></nav></SheetContent></Sheet></div>
    </div>
  </header>;
}

export function Page({ children, className }: { children: ReactNode; className?: string }) { return <main className={cn("page-shell py-9 md:py-12", className)}>{children}</main>; }
export function PageHeader({ eyebrow, title, description, actions }: { eyebrow?: string; title: string; description?: string; actions?: ReactNode }) { return <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div>{eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}<h1 className="page-title">{title}</h1>{description && <p className="mt-2 max-w-2xl text-[15px] leading-6 text-muted-foreground">{description}</p>}</div>{actions && <div className="flex shrink-0 gap-2">{actions}</div>}</div>; }
export function SectionHeading({ label, title, description, action }: { label?: string; title?: string; description?: string; action?: ReactNode }) { return <div className="mb-5 flex items-end justify-between gap-4"><div>{label && <p className="eyebrow">{label}</p>}{title && <h2 className="section-title mt-1">{title}</h2>}{description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}</div>{action}</div>; }
export function SearchBar({ placeholder = "Search companies, roles, questions, experiences...", compact = false }: { placeholder?: string; compact?: boolean }) { return <div className="relative"><Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"/><Input aria-label={placeholder} placeholder={placeholder} className={cn("pl-11 bg-surface", compact ? "h-10" : "h-12 text-[15px]")} /></div>; }

export function CompanyLogo({ name, size = "md" }: { name: string; size?: "sm" | "md" | "lg" }) { const company = companyFor(name); return <span className={cn("company-logo", `company-${company.tone}`, size === "sm" ? "size-8 text-xs" : size === "lg" ? "size-12 text-base" : "size-10 text-sm")}>{company.initials}</span>; }
export function StatusBadge({ status }: { status: "Open" | "Upcoming" | "Closed" | "Selected" | "Not selected" | "Participated" | "Saved" }) { const success = status === "Open" || status === "Selected"; const warning = status === "Upcoming" || status === "Participated"; const destructive = status === "Closed" || status === "Not selected"; return <Badge variant="outline" className={cn("font-medium", success && "status-success", warning && "status-warning", destructive && "status-error", status === "Saved" && "status-info")}>{status}</Badge>; }

export function DriveCard({ drive, compact = false }: { drive: Drive; compact?: boolean }) { return <article className="content-card group flex h-full flex-col p-5">
  <div className="flex items-start justify-between gap-4"><div className="flex gap-3"><CompanyLogo name={drive.company}/><div><h3 className="card-title">{drive.company}</h3><p className="mt-0.5 text-sm text-muted-foreground">{drive.role}</p></div></div>{!compact && <StatusBadge status={drive.status}/>}</div>
  <div className="mt-5 flex flex-wrap gap-2"><Badge variant="secondary">{drive.program}</Badge><span className="text-xs text-muted-foreground">Deadline · {drive.deadline}</span></div>
  <div className="mt-5 flex items-center gap-4 border-t border-border pt-4 text-xs text-muted-foreground"><span><strong className="text-foreground">{drive.experiences}</strong> experiences</span><span><strong className="text-foreground">{drive.questions}</strong> questions</span></div>
  <Link to="/drives/microsoft-2026" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">View drive <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5"/></Link>
</article>; }

export function ExperienceCard({ experience }: { experience: Experience }) { return <article className="editorial-card group">
  <div className="flex items-start justify-between gap-4"><div className="flex items-center gap-3"><CompanyLogo name={experience.company} size="sm"/><div><h3 className="font-semibold text-foreground">{experience.company}</h3><p className="text-xs text-muted-foreground">{experience.role} · {experience.year}</p></div></div><StatusBadge status={experience.result}/></div>
  <p className="mt-5 text-[15px] leading-7 text-foreground">“{experience.quote}”</p>
  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground"><span>Anonymous · {experience.program}</span><span>{experience.rounds} rounds · {experience.questions} questions</span></div>
  <Link to="/experiences/microsoft-example" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">Read experience <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5"/></Link>
</article>; }

export function QuestionRow({ title, reports, topic, index }: { title: string; reports?: number; topic?: string; index?: number }) { return <div className="question-row"><div className="flex min-w-0 items-center gap-3">{index ? <span className="question-index">{String(index).padStart(2,"0")}</span> : <Circle className="size-4 text-muted-foreground"/>}<div className="min-w-0"><p className="truncate text-sm font-medium text-foreground">{title}</p>{topic && <p className="mt-0.5 text-xs text-muted-foreground">{topic}</p>}</div></div>{reports !== undefined && <span className="shrink-0 text-xs text-muted-foreground">{reports} reports</span>}</div>; }
export function FilterBar({ labels }: { labels: string[] }) { return <div className="flex gap-2 overflow-x-auto pb-1"><Button variant="outline" size="sm"><SlidersHorizontal/> Filters</Button>{labels.map(label => <Button key={label} variant="outline" size="sm">{label}</Button>)}</div>; }
export function Metric({ label, value, detail }: { label: string; value: string; detail?: string }) { return <div className="metric"><p className="eyebrow">{label}</p><p className="mt-2 text-lg font-semibold text-foreground">{value}</p>{detail && <p className="mt-1 text-xs text-muted-foreground">{detail}</p>}</div>; }
export function SaveButton() { const [saved, setSaved] = useState(false); return <Button variant="outline" onClick={() => setSaved(!saved)}><Bookmark className={cn(saved && "fill-current")}/>{saved ? "Saved" : "Save"}</Button>; }
export function TaskRow({ label, initial = false }: { label: string; initial?: boolean }) { const [done, setDone] = useState(initial); return <button type="button" onClick={() => setDone(!done)} className="task-row"><span className={cn("task-check", done && "task-check-done")}>{done ? <CheckCircle2/> : <Circle/>}</span><span className={cn("text-sm", done && "text-muted-foreground line-through")}>{label}</span></button>; }
export function EmptyState({ title, description }: { title: string; description: string }) { return <div className="border border-dashed border-border p-8 text-center"><p className="font-medium">{title}</p><p className="mt-1 text-sm text-muted-foreground">{description}</p></div>; }
