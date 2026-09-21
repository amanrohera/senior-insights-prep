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
  ["Companies", "/companies"],
  ["Drives", "/drives"],
  ["Experiences", "/experiences"],
  ["Preparation", "/preparation"],
] as const;

const publicLinks = [
  ["Companies", "/companies"],
  ["Drives", "/drives"],
  ["Experiences", "/experiences"],
  ["Preparation", "/preparation"],
] as const;

function BrandMark() {
  return (
    <div className="flex size-7 items-center justify-center rounded-[6px] border border-foreground/15 bg-foreground text-background">
      <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    </div>
  );
}

export function Brand() {
  return (
    <Link to="/" className="group flex items-center gap-2.5">
      <BrandMark />
      <div className="flex flex-col leading-tight">
        <span className="text-[14px] font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
          Campus Prep
        </span>
        <span className="text-[9px] font-semibold uppercase tracking-wider text-muted-foreground">
          Placement Intel
        </span>
      </div>
    </Link>
  );
}

export function Navbar({ publicMode = false }: { publicMode?: boolean }) {
  const links = publicMode ? publicLinks : appLinks;
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/90 backdrop-blur-md">
      <div className="page-shell flex h-14 items-center justify-between gap-6">
        <Brand />
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {links.map(([label, to]) => (
            <Link key={to} to={to} activeProps={{ className: "nav-link-active" }} className="nav-link">
              {label}
            </Link>
          ))}
          {publicMode && (
            <a href="#how-it-works" className="nav-link">
              How it works
            </a>
          )}
        </nav>
        <div className="hidden items-center gap-2.5 sm:flex">
          <Button variant="outline" size="sm" className="h-8.5 gap-2 text-xs font-normal text-muted-foreground hover:text-foreground">
            <Search className="size-3.5" />
            <span>Search intel...</span>
            <kbd className="pointer-events-none hidden rounded border border-border bg-muted px-1.5 text-[10px] font-medium text-muted-foreground xl:inline-block">
              ⌘K
            </kbd>
          </Button>
          {publicMode ? (
            <>
              <Button variant="ghost" size="sm" className="h-8.5 text-xs font-medium" asChild>
                <Link to="/dashboard">Log in</Link>
              </Button>
              <Button size="sm" className="h-8.5 text-xs font-medium px-3.5" asChild>
                <Link to="/dashboard">Get Started</Link>
              </Button>
            </>
          ) : (
            <Link to="/profile" className="avatar-control" aria-label="Open profile">
              AR
            </Link>
          )}
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open navigation">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[85%] max-w-sm bg-surface">
              <SheetHeader className="text-left">
                <SheetTitle>
                  <Brand />
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-1">
                {links.map(([label, to]) => (
                  <Link key={to} to={to} className="mobile-nav-link">
                    {label}
                    <ArrowRight className="size-4" />
                  </Link>
                ))}
                <Link to="/workspace" className="mobile-nav-link">
                  Workspace
                  <ArrowRight className="size-4" />
                </Link>
                <Link to="/profile" className="mobile-nav-link">
                  Profile
                  <ArrowRight className="size-4" />
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export function Page({ children, className }: { children: ReactNode; className?: string }) {
  return <main className={cn("page-shell py-8 md:py-12", className)}>{children}</main>;
}

export function PageHeader({ eyebrow, title, description, actions }: { eyebrow?: string; title: string; description?: string; actions?: ReactNode }) {
  return (
    <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <div>
        {eyebrow && <p className="eyebrow mb-2.5">{eyebrow}</p>}
        <h1 className="page-title">{title}</h1>
        {description && <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">{description}</p>}
      </div>
      {actions && <div className="flex shrink-0 gap-2">{actions}</div>}
    </div>
  );
}

export function SectionHeading({ label, title, description, action }: { label?: string; title?: string; description?: string; action?: ReactNode }) {
  return (
    <div className="mb-5 flex items-end justify-between gap-4">
      <div>
        {label && <p className="eyebrow">{label}</p>}
        {title && <h2 className="section-title mt-1">{title}</h2>}
        {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
      </div>
      {action}
    </div>
  );
}

export function SearchBar({ placeholder = "Search companies, roles, questions, experiences...", compact = false }: { placeholder?: string; compact?: boolean }) {
  return (
    <div className="relative w-full">
      <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      <Input aria-label={placeholder} placeholder={placeholder} className={cn("pl-10 bg-surface border-border", compact ? "h-9.5 text-sm" : "h-11 text-[14px]")} />
    </div>
  );
}

export function CompanyLogo({ name, size = "md" }: { name: string; size?: "sm" | "md" | "lg" }) {
  const company = companyFor(name);
  return (
    <span className={cn("company-logo font-mono tracking-tight select-none", size === "sm" ? "size-8 text-xs" : size === "lg" ? "size-11 text-base" : "size-9.5 text-sm")}>
      {company.initials}
    </span>
  );
}

export function StatusBadge({ status }: { status: "Open" | "Upcoming" | "Closed" | "Selected" | "Not selected" | "Participated" | "Saved" }) {
  const success = status === "Open" || status === "Selected";
  const warning = status === "Upcoming" || status === "Participated";
  const destructive = status === "Closed" || status === "Not selected";
  return (
    <Badge variant="outline" className={cn("px-2.5 py-0.5 text-[11px] font-medium rounded-full", success && "status-success", warning && "status-warning", destructive && "status-error", status === "Saved" && "status-info")}>
      {status}
    </Badge>
  );
}

export function DriveCard({ drive, compact = false }: { drive: Drive; compact?: boolean }) {
  return (
    <article className="content-card group flex h-full flex-col justify-between p-5">
      <div>
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <CompanyLogo name={drive.company} />
            <div>
              <h3 className="card-title group-hover:text-primary transition-colors">{drive.company}</h3>
              <p className="mt-0.5 text-xs text-muted-foreground">{drive.role}</p>
            </div>
          </div>
          {!compact && <StatusBadge status={drive.status} />}
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <Badge variant="secondary" className="bg-muted text-muted-foreground text-[11px] font-medium border-0">
            {drive.program}
          </Badge>
          <span className="text-[12px] text-muted-foreground">Deadline · {drive.deadline}</span>
        </div>
      </div>
      <div>
        <div className="mt-5 flex items-center gap-4 border-t border-border/80 pt-3.5 text-xs text-muted-foreground">
          <span><strong className="font-semibold text-foreground">{drive.experiences}</strong> experiences</span>
          <span className="text-border">•</span>
          <span><strong className="font-semibold text-foreground">{drive.questions}</strong> questions</span>
        </div>
        <Link to="/drives/microsoft-2026" className="mt-3.5 inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:underline">
          View drive <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="editorial-card group">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <CompanyLogo name={experience.company} size="sm" />
          <div>
            <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">{experience.company}</h3>
            <p className="text-xs text-muted-foreground">{experience.role} · {experience.year}</p>
          </div>
        </div>
        <StatusBadge status={experience.result} />
      </div>
      <p className="mt-4 text-[14px] leading-relaxed text-foreground/90 font-normal">
        “{experience.quote}”
      </p>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
        <span>Anonymous · {experience.program}</span>
        <span>{experience.rounds} rounds · {experience.questions} questions</span>
      </div>
      <Link to="/experiences/microsoft-example" className="mt-3.5 inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:underline">
        Read experience <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </article>
  );
}

export function QuestionRow({ title, reports, topic, index }: { title: string; reports?: number; topic?: string; index?: number }) {
  return (
    <div className="question-row">
      <div className="flex min-w-0 items-center gap-3">
        {index ? (
          <span className="question-index">{String(index).padStart(2, "0")}</span>
        ) : (
          <Circle className="size-3.5 text-muted-foreground" />
        )}
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-foreground">{title}</p>
          {topic && <p className="mt-0.5 text-xs text-muted-foreground">{topic}</p>}
        </div>
      </div>
      {reports !== undefined && (
        <span className="shrink-0 text-xs text-muted-foreground font-mono">{reports} reports</span>
      )}
    </div>
  );
}

export function FilterBar({ labels }: { labels: string[] }) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
      <Button variant="outline" size="sm" className="h-9.5 gap-1.5 text-xs">
        <SlidersHorizontal className="size-3.5" /> Filters
      </Button>
      {labels.map((label) => (
        <Button key={label} variant="outline" size="sm" className="h-9.5 text-xs">
          {label}
        </Button>
      ))}
    </div>
  );
}

export function Metric({ label, value, detail }: { label: string; value: string; detail?: string }) {
  return (
    <div className="metric">
      <p className="eyebrow">{label}</p>
      <p className="mt-1.5 text-xl font-bold tracking-tight text-foreground">{value}</p>
      {detail && <p className="mt-0.5 text-xs text-muted-foreground">{detail}</p>}
    </div>
  );
}

export function SaveButton() {
  const [saved, setSaved] = useState(false);
  return (
    <Button variant="outline" size="sm" onClick={() => setSaved(!saved)} className="gap-1.5">
      <Bookmark className={cn("size-3.5", saved && "fill-current")} />
      {saved ? "Saved" : "Save"}
    </Button>
  );
}

export function TaskRow({ label, initial = false }: { label: string; initial?: boolean }) {
  const [done, setDone] = useState(initial);
  return (
    <button type="button" onClick={() => setDone(!done)} className="task-row">
      <span className={cn("task-check", done && "task-check-done")}>
        {done ? <CheckCircle2 className="size-4" /> : <Circle className="size-4" />}
      </span>
      <span className={cn("text-sm font-medium", done && "text-muted-foreground line-through font-normal")}>{label}</span>
    </button>
  );
}

export function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="border border-dashed border-border rounded-lg p-8 text-center bg-surface">
      <p className="font-semibold text-sm text-foreground">{title}</p>
      <p className="mt-1 text-xs text-muted-foreground">{description}</p>
    </div>
  );
}

