import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Search,
  SlidersHorizontal,
  Bookmark,
  Menu,
  CheckCircle2,
  Circle,
  ExternalLink,
  Sparkles,
  Zap,
  Clock,
  Youtube,
  Code2,
  MessageSquare,
  DollarSign,
  Send,
  Linkedin,
  AlertTriangle,
  Flame,
  Check,
  Bot
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { companyFor, type Drive, type Experience, type ExternalResource, type SeniorMentor } from "@/data/campus";

const appLinks = [
  ["Companies", "/companies"],
  ["Drives", "/drives"],
  ["Experiences", "/experiences"],
  ["Preparation", "/preparation"],
  ["Workspace", "/workspace"],
  ["Contribute", "/contribute"],
] as const;

const publicLinks = [
  ["Companies", "/companies"],
  ["Drives", "/drives"],
  ["Experiences", "/experiences"],
  ["Preparation", "/preparation"],
  ["Workspace", "/workspace"],
] as const;

function BrandMark() {
  return (
    <div className="flex size-7 items-center justify-center rounded-[6px] border border-foreground/15 bg-foreground text-background shadow-2xs">
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
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const searchResults = [
    { title: "Microsoft Software Engineer Drive", type: "Drive", url: "/drives/microsoft-2026" },
    { title: "Amazon SDE Interview Experience", type: "Experience", url: "/experiences/microsoft-example" },
    { title: "Binary Trees & LCA Question Breakdown", type: "Question", url: "/preparation" },
    { title: "DBMS Normalization & Indexing Cheat Sheet", type: "Resource", url: "/workspace" },
    { title: "Contribute Your Campus Experience", type: "Action", url: "/contribute" },
  ].filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.type.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/90 backdrop-blur-md">
      <div className="page-shell flex h-14 items-center justify-between gap-6">
        <Brand />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
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
          {/* Global Quick Search Dialog */}
          <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="h-8.5 gap-2 text-xs font-normal text-muted-foreground hover:text-foreground">
                <Search className="size-3.5" />
                <span>Search intel...</span>
                <kbd className="pointer-events-none hidden rounded border border-border bg-muted px-1.5 text-[10px] font-medium text-muted-foreground xl:inline-block">
                  ⌘K
                </kbd>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md p-0 overflow-hidden bg-surface border-border">
              <div className="border-b border-border p-3 flex items-center gap-2.5">
                <Search className="size-4 text-muted-foreground shrink-0" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Type a company, topic (DSA, DBMS), or question..."
                  className="border-0 shadow-none focus-visible:ring-0 text-sm h-9 bg-transparent p-0"
                  autoFocus
                />
              </div>
              <div className="max-h-72 overflow-y-auto p-2 divide-y divide-border/60">
                {searchResults.length === 0 ? (
                  <p className="p-4 text-center text-xs text-muted-foreground">No matches found. Try searching &quot;Microsoft&quot;, &quot;Trees&quot;, or &quot;Drive&quot;.</p>
                ) : (
                  searchResults.map((res) => (
                    <Link
                      key={res.title}
                      to={res.url}
                      onClick={() => setSearchOpen(false)}
                      className="flex items-center justify-between p-2.5 rounded-md hover:bg-muted/60 transition-colors text-xs"
                    >
                      <span className="font-medium text-foreground">{res.title}</span>
                      <Badge variant="secondary" className="text-[10px] uppercase font-mono">{res.type}</Badge>
                    </Link>
                  ))
                )}
              </div>
            </DialogContent>
          </Dialog>

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
            <div className="flex items-center gap-2">
              <Button size="sm" variant="outline" className="h-8 text-xs font-medium border-border" asChild>
                <Link to="/contribute">+ Share Intel</Link>
              </Button>
              <Link to="/profile" className="avatar-control" aria-label="Open profile">
                AR
              </Link>
            </div>
          )}
        </div>
        <div className="lg:hidden">
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

export function SearchBar({
  placeholder = "Search companies, roles, questions, experiences...",
  compact = false,
  value,
  onChange,
}: {
  placeholder?: string;
  compact?: boolean;
  value?: string;
  onChange?: (val: string) => void;
}) {
  return (
    <div className="relative w-full">
      <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        aria-label={placeholder}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className={cn("pl-10 bg-surface border-border", compact ? "h-9.5 text-sm" : "h-11 text-[14px]")}
      />
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
          <div className="flex flex-col items-end gap-1">
            {!compact && <StatusBadge status={drive.status} />}
            {drive.daysLeft && drive.daysLeft <= 5 && (
              <Badge variant="destructive" className="text-[10px] px-2 py-0 h-4.5 font-medium animate-pulse">
                <Flame className="size-2.5 mr-0.5" /> {drive.daysLeft}d left
              </Badge>
            )}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <Badge variant="secondary" className="bg-muted text-muted-foreground text-[11px] font-medium border-0">
            {drive.program}
          </Badge>
          {drive.ctc && (
            <Badge variant="outline" className="border-border text-foreground font-semibold text-[11px]">
              {drive.ctc}
            </Badge>
          )}
          {drive.cgpaCutoff && (
            <span className="text-[11px] text-muted-foreground font-mono">
              Cutoff: {drive.cgpaCutoff}
            </span>
          )}
        </div>
      </div>
      <div>
        <div className="mt-5 flex items-center justify-between border-t border-border/80 pt-3.5 text-xs text-muted-foreground">
          <div className="flex items-center gap-3">
            <span><strong className="font-semibold text-foreground">{drive.experiences}</strong> experiences</span>
            <span className="text-border">•</span>
            <span><strong className="font-semibold text-foreground">{drive.questions}</strong> Qs</span>
          </div>
          <span className="text-[11px] font-mono text-muted-foreground">{drive.deadline}</span>
        </div>
        <Link to="/drives/microsoft-2026" className="mt-3.5 inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:underline">
          View drive intel <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
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
        <div className="flex items-center gap-2">
          {experience.difficulty && (
            <Badge variant="secondary" className="text-[10px] font-medium">
              {experience.difficulty}
            </Badge>
          )}
          <StatusBadge status={experience.result} />
        </div>
      </div>
      <p className="mt-4 text-[14px] leading-relaxed text-foreground/90 font-normal">
        &ldquo;{experience.quote}&rdquo;
      </p>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
        <span>{experience.seniorName ? `${experience.seniorName} (Senior)` : "Anonymous"} · {experience.program}</span>
        <span>{experience.rounds} rounds · {experience.questions} questions</span>
      </div>
      <Link to="/experiences/microsoft-example" className="mt-3.5 inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:underline">
        Read complete round breakdown <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </article>
  );
}

export function QuestionRow({ title, reports, topic, index, company }: { title: string; reports?: number; topic?: string; index?: number; company?: string }) {
  const [practiced, setPracticed] = useState(false);
  return (
    <div className="question-row group flex items-center justify-between py-2.5 border-b border-border hover:bg-muted/30 px-2 rounded-md transition-colors">
      <div className="flex min-w-0 items-center gap-3">
        <button
          type="button"
          onClick={() => setPracticed(!practiced)}
          aria-label="Toggle practice status"
          className="shrink-0"
        >
          {practiced ? (
            <CheckCircle2 className="size-4 text-emerald-600 fill-emerald-100" />
          ) : index ? (
            <span className="question-index">{String(index).padStart(2, "0")}</span>
          ) : (
            <Circle className="size-3.5 text-muted-foreground group-hover:text-foreground" />
          )}
        </button>
        <div className="min-w-0">
          <p className={cn("truncate text-sm font-medium text-foreground", practiced && "line-through text-muted-foreground")}>{title}</p>
          <div className="flex items-center gap-2 mt-0.5">
            {topic && <span className="text-[11px] text-muted-foreground">{topic}</span>}
            {company && <span className="text-[10px] px-1.5 rounded bg-muted text-muted-foreground font-mono">{company}</span>}
          </div>
        </div>
      </div>
      {reports !== undefined && (
        <span className="shrink-0 text-xs text-muted-foreground font-mono ml-2">{reports} reports</span>
      )}
    </div>
  );
}

export function FilterBar({
  labels,
  activeLabel,
  onSelect,
}: {
  labels: string[];
  activeLabel?: string;
  onSelect?: (label: string) => void;
}) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
      <Button
        variant={activeLabel === "All" || !activeLabel ? "default" : "outline"}
        size="sm"
        onClick={() => onSelect?.("All")}
        className="h-9.5 gap-1.5 text-xs shrink-0"
      >
        <SlidersHorizontal className="size-3.5" /> All
      </Button>
      {labels.map((label) => (
        <Button
          key={label}
          variant={activeLabel === label ? "default" : "outline"}
          size="sm"
          onClick={() => onSelect?.(label)}
          className="h-9.5 text-xs shrink-0"
        >
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
      <Bookmark className={cn("size-3.5", saved && "fill-current text-primary")} />
      {saved ? "Saved" : "Save"}
    </Button>
  );
}

export function TaskRow({ label, initial = false, onToggle }: { label: string; initial?: boolean; onToggle?: (done: boolean) => void }) {
  const [done, setDone] = useState(initial);
  return (
    <button
      type="button"
      onClick={() => {
        const next = !done;
        setDone(next);
        onToggle?.(next);
      }}
      className="task-row flex w-full items-center gap-3 py-3 border-b border-border text-left hover:bg-muted/30 px-2 rounded-md transition-colors"
    >
      <span className={cn("task-check grid place-items-center size-5 rounded-full border border-border shrink-0", done && "border-primary bg-primary text-primary-foreground")}>
        {done ? <Check className="size-3.5 stroke-[3]" /> : <Circle className="size-3.5 text-muted-foreground opacity-60" />}
      </span>
      <span className={cn("text-sm font-medium text-foreground", done && "text-muted-foreground line-through font-normal")}>{label}</span>
    </button>
  );
}

export function EmptyState({ title, description, action }: { title: string; description: string; action?: ReactNode }) {
  return (
    <div className="border border-dashed border-border rounded-lg p-8 text-center bg-surface">
      <p className="font-semibold text-sm text-foreground">{title}</p>
      <p className="mt-1 text-xs text-muted-foreground max-w-sm mx-auto">{description}</p>
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}

/**
 * Rapid 48-Hour Sprint Component for short-deadline company preparation
 */
export function RapidSprintKit({ companyName = "Microsoft" }: { companyName?: string }) {
  return (
    <div className="rounded-xl border-2 border-primary/30 bg-primary/5 p-6 shadow-xs relative overflow-hidden">
      <div className="absolute -right-6 -bottom-6 opacity-10 pointer-events-none">
        <Zap className="size-48 text-primary" />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Badge variant="destructive" className="gap-1 px-2.5 py-0.5 text-xs font-semibold">
              <Flame className="size-3.5" /> 3-Day Emergency Rapid Sprint
            </Badge>
            <Badge variant="outline" className="border-border text-xs font-mono">
              College Verified
            </Badge>
          </div>
          <h3 className="mt-2 text-lg font-bold text-foreground">
            {companyName} Fast-Track OA & Interview Survival Kit
          </h3>
          <p className="mt-1 text-xs text-muted-foreground max-w-xl">
            Only 72 hours remaining. Ignore low-yield topics and focus solely on what our campus seniors confirmed in previous drives.
          </p>
        </div>

        <Button size="sm" className="h-9 px-4 shrink-0 shadow-xs" asChild>
          <Link to="/preparation">Start 48h Sprint <ArrowRight className="size-3.5 ml-1" /></Link>
        </Button>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 border-t border-primary/20 pt-4">
        <div className="rounded-lg bg-surface/80 p-3 border border-border">
          <p className="text-[11px] font-semibold uppercase text-muted-foreground flex items-center gap-1.5">
            <Clock className="size-3 text-primary" /> OA Format
          </p>
          <p className="mt-1 text-xs font-semibold text-foreground">90 Mins · 3 Coding Problems</p>
          <p className="mt-0.5 text-[11px] text-muted-foreground">Mettle / HackerEarth platform</p>
        </div>

        <div className="rounded-lg bg-surface/80 p-3 border border-border">
          <p className="text-[11px] font-semibold uppercase text-muted-foreground flex items-center gap-1.5">
            <AlertTriangle className="size-3 text-amber-500" /> Elimination Trap
          </p>
          <p className="mt-1 text-xs font-semibold text-foreground">Binary Trees LCA & Views</p>
          <p className="mt-0.5 text-[11px] text-muted-foreground">Tested in 65% of shortlists</p>
        </div>

        <div className="rounded-lg bg-surface/80 p-3 border border-border">
          <p className="text-[11px] font-semibold uppercase text-muted-foreground flex items-center gap-1.5">
            <CheckCircle2 className="size-3 text-emerald-600" /> Must-Revise Core
          </p>
          <p className="mt-1 text-xs font-semibold text-foreground">DBMS B+ Trees & Indexing</p>
          <p className="mt-0.5 text-[11px] text-muted-foreground">Round 2 technical staple</p>
        </div>

        <div className="rounded-lg bg-surface/80 p-3 border border-border">
          <p className="text-[11px] font-semibold uppercase text-muted-foreground flex items-center gap-1.5">
            <Zap className="size-3 text-primary" /> Project Defense
          </p>
          <p className="mt-1 text-xs font-semibold text-foreground">STAR Framework (4 min pitch)</p>
          <p className="mt-0.5 text-[11px] text-muted-foreground">Prepare bottlenecks & trade-offs</p>
        </div>
      </div>
    </div>
  );
}

/**
 * Curated External Resources Hub (YouTube, LeetCode, Reddit, Glassdoor)
 */
export function ExternalIntelGrid({ resources }: { resources: ExternalResource[] }) {
  const getIcon = (platform: ExternalResource["platform"]) => {
    switch (platform) {
      case "YouTube":
        return <Youtube className="size-4 text-red-500" />;
      case "LeetCode":
        return <Code2 className="size-4 text-amber-500" />;
      case "Reddit":
        return <MessageSquare className="size-4 text-orange-500" />;
      case "Glassdoor":
        return <DollarSign className="size-4 text-emerald-500" />;
      default:
        return <ExternalLink className="size-4 text-primary" />;
    }
  };

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {resources.map((item) => (
        <a
          key={item.id}
          href={item.url}
          target="_blank"
          rel="noreferrer"
          className="group content-card p-4.5 flex flex-col justify-between hover:border-primary/50 transition-all"
        >
          <div>
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground">
                {getIcon(item.platform)} {item.platform}
              </span>
              <Badge variant="outline" className="text-[10px] font-medium border-border">
                {item.tag}
              </Badge>
            </div>
            <h4 className="mt-2.5 text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
              {item.title}
            </h4>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground line-clamp-2">
              {item.description}
            </p>
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-border pt-2.5 text-[11px] text-muted-foreground">
            <span>{item.meta}</span>
            <span className="inline-flex items-center gap-1 font-semibold text-primary group-hover:underline">
              Open Resource <ExternalLink className="size-3" />
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}

/**
 * Interactive AI Placement Intelligence Copilot
 */
export function AiCopilotWidget({ companyName = "Microsoft" }: { companyName?: string }) {
  const [selectedPrompt, setSelectedPrompt] = useState<string>("dossier");
  const [customQuery, setCustomQuery] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [output, setOutput] = useState<string | null>(null);

  const predefinedPrompts = [
    {
      id: "dossier",
      label: "Synthesize Company Dossier",
      desc: "Hiring trends, tech stack, and what recruiters look for."
    },
    {
      id: "questions",
      label: "Generate 3 Campus OA Questions",
      desc: "Simulate test cases and edge cases."
    },
    {
      id: "project",
      label: "Project Defense Griller",
      desc: "Simulate 3 tricky questions an interviewer will ask on your project."
    },
    {
      id: "hr",
      label: "Behavioral & Culture Fit",
      desc: "Company core values & sample answers."
    }
  ];

  const handleGenerate = (promptId: string) => {
    setSelectedPrompt(promptId);
    setIsGenerating(true);
    setOutput(null);

    setTimeout(() => {
      setIsGenerating(false);
      if (promptId === "dossier") {
        setOutput(`### 🤖 AI Placement Dossier: ${companyName} (Campus Edition)
- **Primary Tech Stack Tested:** C++, Java, C#, Azure Cloud, SQL, Distributed Cache.
- **Campus Hiring Focus:** Strong preference for structured OOP thinking and space optimization. The hiring team at this university historically eliminated 50% of candidates who wrote brute force O(N^2) loops in OA.
- **Round 1 Strategy:** Explain time/space complexity before typing code. Interviewers prioritize candidates who ask clarifying edge-case questions.`);
      } else if (promptId === "questions") {
        setOutput(`### 🤖 Predicted OA Coding Problems for ${companyName}
1. **Binary Tree Boundary Traversal with Leaf Filtering**
   - *Frequency:* High (Seen in 2025 & 2026 drives)
   - *Trap:* Handling single-node trees and skewed trees without stack overflow.
2. **Longest Substring with At Most K Distinct Characters**
   - *Pattern:* Sliding Window + Frequency HashMap
3. **Database Indexing Strategy for Order Status Queries**
   - *Query:* Write SQL with composite index on \`(created_at, status)\` and explain index scan vs index seek.`);
      } else if (promptId === "project") {
        setOutput(`### 🤖 3 Project Defense Questions You MUST Prepare
1. *"You used MongoDB/PostgreSQL in your project. If user traffic spikes by 50x tomorrow, what part of your schema breaks first?"*
2. *"How did you handle authentication token expiration during an active user checkout or write transaction?"*
3. *"If you had two more weeks to work on this project, what single architectural design decision would you rewrite?"*`);
      } else {
        setOutput(`### 🤖 ${companyName} Behavioral Interview Prep
- **Core Value:** Growth Mindset & Learn-It-All culture (Satya Nadella philosophy).
- **Golden Rule:** Never say *"I don't know that topic"*. Instead say *"I have not used that specific library in production, but here is how I would reason about it based on first principles."*
- **Teamwork Question:** Prepare a story where you resolved a git merge conflict or architectural debate with a batchmate using data and benchmarks.`);
      }
    }, 700);
  };

  return (
    <div className="rounded-xl border border-primary/20 bg-gradient-to-br from-surface to-accent/20 p-6 shadow-xs">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground shadow-2xs">
            <Sparkles className="size-4" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
              AI Placement Copilot
              <Badge variant="secondary" className="text-[10px] bg-primary/10 text-primary border-primary/20">
                Live Intel
              </Badge>
            </h3>
            <p className="text-xs text-muted-foreground">
              Trained on campus placement experiences, recruiter rubrics, and senior contributions.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {predefinedPrompts.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => handleGenerate(p.id)}
            className={cn(
              "p-3 rounded-lg border text-left transition-all",
              selectedPrompt === p.id && !output
                ? "border-primary bg-primary/10 shadow-2xs"
                : "border-border bg-surface hover:border-primary/40 hover:bg-muted/40"
            )}
          >
            <p className="text-xs font-semibold text-foreground flex items-center justify-between">
              {p.label}
              <ArrowRight className="size-3 text-muted-foreground" />
            </p>
            <p className="mt-1 text-[11px] text-muted-foreground line-clamp-1">{p.desc}</p>
          </button>
        ))}
      </div>

      <div className="mt-4 flex gap-2">
        <Input
          placeholder={`Ask anything specific, e.g., "What SQL questions does ${companyName} ask freshers?"`}
          value={customQuery}
          onChange={(e) => setCustomQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && customQuery.trim()) {
              handleGenerate("custom");
            }
          }}
          className="text-xs h-9.5 bg-surface border-border"
        />
        <Button
          size="sm"
          onClick={() => handleGenerate(selectedPrompt)}
          disabled={isGenerating}
          className="gap-1.5 text-xs h-9.5 px-4 shrink-0"
        >
          {isGenerating ? <Bot className="size-3.5 animate-spin" /> : <Send className="size-3.5" />}
          Run AI
        </Button>
      </div>

      {(isGenerating || output) && (
        <div className="mt-5 rounded-lg border border-border bg-surface p-4.5 text-xs text-foreground/90 transition-all">
          {isGenerating ? (
            <div className="flex items-center gap-3 py-4 text-muted-foreground justify-center">
              <Bot className="size-5 animate-bounce text-primary" />
              <span>Analyzing senior submissions and synthesizing intelligence...</span>
            </div>
          ) : (
            <div className="space-y-2 whitespace-pre-line leading-relaxed font-sans">
              {output}
              <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-[11px] text-muted-foreground">
                <span>Tailored for XYZ University campus placement cycle</span>
                <Button variant="ghost" size="sm" className="h-7 text-[11px]" onClick={() => alert("Copied guidance to clipboard!")}>
                  Copy Guidance
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/**
 * Senior Mentor Card with Direct Advice / Connect Modal
 */
export function SeniorMentorCard({ mentor }: { mentor: SeniorMentor }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [questionText, setQuestionText] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <article className="content-card p-4.5 flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="avatar-control size-9 text-xs">{mentor.initials}</span>
            <div>
              <h4 className="text-sm font-semibold text-foreground">{mentor.name}</h4>
              <p className="text-xs text-muted-foreground">{mentor.role} @ {mentor.company}</p>
            </div>
          </div>
          <a
            href={mentor.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="size-4" />
          </a>
        </div>
        <p className="mt-2 text-[11px] font-mono text-muted-foreground">{mentor.batch}</p>
        <div className="mt-3 rounded-md bg-muted/50 p-2.5 text-xs text-foreground/90 border border-border/60">
          <span className="font-semibold text-primary block mb-0.5">Senior Tip:</span>
          &ldquo;{mentor.topTip}&rdquo;
        </div>
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm" className="mt-4 w-full h-8 text-xs font-medium border-border">
            Ask {mentor.name.split(" ")[0]} a Question
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-surface border-border sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-base font-semibold">
              Ask {mentor.name} ({mentor.company})
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              Send a focused preparation or process question to your college senior.
            </DialogDescription>
          </DialogHeader>

          {sent ? (
            <div className="py-6 text-center space-y-2">
              <CheckCircle2 className="size-10 text-emerald-600 mx-auto" />
              <p className="text-sm font-semibold text-foreground">Question Sent Successfully!</p>
              <p className="text-xs text-muted-foreground">
                {mentor.name.split(" ")[0]} receives questions via university email and usually replies within 24 hours.
              </p>
              <Button size="sm" className="mt-4" onClick={() => { setSent(false); setOpenDialog(false); }}>
                Done
              </Button>
            </div>
          ) : (
            <div className="space-y-4 pt-2">
              <div>
                <label className="text-xs font-medium text-foreground">Your Question</label>
                <Textarea
                  value={questionText}
                  onChange={(e) => setQuestionText(e.target.value)}
                  placeholder={`Hi ${mentor.name.split(" ")[0]}, I have Microsoft OA in 3 days. What tree traversals or DBMS topics should I focus on?`}
                  className="mt-1.5 min-h-28 text-xs bg-surface"
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="ghost" size="sm" onClick={() => setOpenDialog(false)}>
                  Cancel
                </Button>
                <Button
                  size="sm"
                  disabled={!questionText.trim()}
                  onClick={() => setSent(true)}
                  className="gap-1.5 text-xs"
                >
                  <Send className="size-3.5" /> Send to Senior
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </article>
  );
}
