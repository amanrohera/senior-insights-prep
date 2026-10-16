import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Check,
  Flame,
  ArrowRight,
  ExternalLink,
  BookOpen,
  Sparkles,
  Bookmark,
  Share2,
  Calendar,
  CheckCircle2,
  Clock,
  Code2,
  ShieldCheck,
  MessageSquare,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Page,
  CompanyLogo,
  SaveButton,
} from "@/components/campus/shared";

export const Route = createFileRoute("/drives/microsoft-2026")({
  head: () => ({
    meta: [
      { title: "Microsoft Software Engineer Drive — Campus Prep" },
      { name: "description", content: "Fast placement cheat-sheet for Microsoft SDE-1: rounds, questions, and senior tips." },
      { property: "og:title", content: "Microsoft Campus Drive — Campus Prep" },
      { property: "og:description", content: "Reported process, questions, and student experiences for Microsoft Software Engineer." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DriveDetail,
});

function DriveDetail() {
  const [participating, setParticipating] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Page>
      {/* Visual Quick Hub Header */}
      <header className="rounded-2xl border border-border bg-surface p-6 shadow-2xs">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <CompanyLogo name="Microsoft" size="lg" />
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Microsoft India
                </span>
                <Badge variant="destructive" className="h-5 px-2 text-[10px] font-semibold animate-pulse">
                  <Flame className="size-2.5 mr-1" /> OA in 3 Days (25 Sep)
                </Badge>
              </div>

              <h1 className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Software Engineer (SDE-1)
              </h1>

              <div className="mt-2.5 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <Badge variant="secondary" className="font-semibold text-foreground">
                  ₹45.5 LPA CTC
                </Badge>
                <span className="text-border">•</span>
                <Badge variant="outline">7.0+ CGPA</Badge>
                <span className="text-border">•</span>
                <span>B.Tech CS / IT</span>
                <span className="text-border">•</span>
                <span>21 Seniors Placed Last Year</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <SaveButton />
            <Button
              size="sm"
              variant={participating ? "outline" : "default"}
              onClick={() => setParticipating(!participating)}
              className="gap-1.5 font-semibold shadow-xs"
            >
              <Check className="size-3.5" />
              {participating ? "Participating" : "I'm Participating"}
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={handleShare}
              className="gap-1.5 border-border"
            >
              <Share2 className="size-3.5" />
              {copied ? "Link Copied!" : "Share"}
            </Button>
          </div>
        </div>
      </header>

      {/* The 3 Rounds at a Glance (Scannable Cards) */}
      <section className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-foreground">The 3 Rounds at a Glance</h2>
            <p className="text-xs text-muted-foreground">What happens in each stage based on 21 senior reports</p>
          </div>
          <Badge variant="secondary" className="text-xs">
            4-Day Prep Timeline
          </Badge>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {/* Round 1 */}
          <div className="rounded-xl border border-border bg-surface p-5 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                  Round 1 · Day 1
                </span>
                <Badge variant="outline" className="text-[10px]">
                  90 Mins
                </Badge>
              </div>
              <h3 className="mt-1.5 font-bold text-base text-foreground">Online Assessment</h3>
              <p className="mt-1 text-xs text-muted-foreground">3 coding questions on Codility/Mettl</p>

              <div className="mt-4 space-y-2 border-t border-border pt-3">
                <div className="flex items-start gap-2 text-xs">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-foreground/90">Lowest Common Ancestor & Tree Diameter</span>
                </div>
                <div className="flex items-start gap-2 text-xs">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-foreground/90">Sliding Window with K distinct chars</span>
                </div>
                <div className="flex items-start gap-2 text-xs">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-foreground/90">Array Prefix Sum / Greedy optimization</span>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-lg bg-muted/50 p-2.5 text-[11px] text-muted-foreground">
              💡 <strong className="text-foreground">Key Tip:</strong> Must pass 100% test cases on at least 2 questions to clear cutoff.
            </div>
          </div>

          {/* Round 2 */}
          <div className="rounded-xl border border-border bg-surface p-5 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                  Round 2 · Day 3
                </span>
                <Badge variant="outline" className="text-[10px]">
                  45 Mins
                </Badge>
              </div>
              <h3 className="mt-1.5 font-bold text-base text-foreground">Technical Interview</h3>
              <p className="mt-1 text-xs text-muted-foreground">Live 1-on-1 coding & core CS concepts</p>

              <div className="mt-4 space-y-2 border-t border-border pt-3">
                <div className="flex items-start gap-2 text-xs">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-foreground/90">Implement LRU Cache with O(1) ops</span>
                </div>
                <div className="flex items-start gap-2 text-xs">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-foreground/90">OS Virtual Memory & Page Replacement</span>
                </div>
                <div className="flex items-start gap-2 text-xs">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-foreground/90">DBMS B-Trees vs Hash Indexing</span>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-lg bg-muted/50 p-2.5 text-[11px] text-muted-foreground">
              💡 <strong className="text-foreground">Key Tip:</strong> Always talk through your brute force solution before optimizing.
            </div>
          </div>

          {/* Round 3 */}
          <div className="rounded-xl border border-border bg-surface p-5 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                  Round 3 · Day 4
                </span>
                <Badge variant="outline" className="text-[10px]">
                  30 Mins
                </Badge>
              </div>
              <h3 className="mt-1.5 font-bold text-base text-foreground">HR & Culture Fit</h3>
              <p className="mt-1 text-xs text-muted-foreground">Project defense & behavioral alignment</p>

              <div className="mt-4 space-y-2 border-t border-border pt-3">
                <div className="flex items-start gap-2 text-xs">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-foreground/90">Deep dive into final year project tech choices</span>
                </div>
                <div className="flex items-start gap-2 text-xs">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-foreground/90">Handling conflicts in a hackathon / team</span>
                </div>
                <div className="flex items-start gap-2 text-xs">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-foreground/90">&ldquo;Why Microsoft?&rdquo; (Growth Mindset culture)</span>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-lg bg-muted/50 p-2.5 text-[11px] text-muted-foreground">
              💡 <strong className="text-foreground">Key Tip:</strong> Be ready to explain trade-offs of every library on your resume.
            </div>
          </div>
        </div>
      </section>

      {/* Top 3 Golden Rules from Seniors */}
      <section className="mt-8">
        <h2 className="text-lg font-bold text-foreground">Top 3 Senior Golden Rules</h2>
        <p className="text-xs text-muted-foreground">Crucial advice from seniors placed in the last batch</p>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-surface p-4 shadow-2xs">
            <span className="text-lg">🎯</span>
            <h4 className="mt-2 text-xs font-bold text-foreground">Trees & Graphs are 70% of the drive</h4>
            <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
              &ldquo;Don&apos;t waste time on complex Bitmask DP. Practice Binary Tree traversals and LCA until you can write them flawlessly.&rdquo;
            </p>
            <p className="mt-3 text-[10px] font-semibold text-primary">— Aman S. (SDE-1)</p>
          </div>

          <div className="rounded-xl border border-border bg-surface p-4 shadow-2xs">
            <span className="text-lg">⚡</span>
            <h4 className="mt-2 text-xs font-bold text-foreground">Explain Time & Space Complexity First</h4>
            <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
              &ldquo;The interviewer cared more about whether I understood O(N) vs O(N log N) trade-offs than finishing in 10 minutes.&rdquo;
            </p>
            <p className="mt-3 text-[10px] font-semibold text-primary">— Rohan K. (SDE-1)</p>
          </div>

          <div className="rounded-xl border border-border bg-surface p-4 shadow-2xs">
            <span className="text-lg">🛡️</span>
            <h4 className="mt-2 text-xs font-bold text-foreground">Never Fake Project Technologies</h4>
            <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
              &ldquo;If you put Redis or Docker on your resume, they will ask how caching invalidation works. Keep only what you built.&rdquo;
            </p>
            <p className="mt-3 text-[10px] font-semibold text-primary">— Sneha R. (SDE-1)</p>
          </div>
        </div>
      </section>

      {/* 3 High-Yield Preparation Links */}
      <section className="mt-8">
        <h2 className="text-lg font-bold text-foreground">High-Yield Prep Resources</h2>
        <p className="text-xs text-muted-foreground">Direct links recommended by past batch toppers</p>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <a
            href="https://leetcode.com/company/microsoft/"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between rounded-xl border border-border bg-surface p-4 shadow-2xs hover:border-primary/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="flex size-8 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600">
                <Code2 className="size-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">
                  LeetCode Top Microsoft 50
                </p>
                <p className="text-[11px] text-muted-foreground">Most frequently asked in India OA</p>
              </div>
            </div>
            <ExternalLink className="size-3.5 text-muted-foreground group-hover:text-primary" />
          </a>

          <a
            href="https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between rounded-xl border border-border bg-surface p-4 shadow-2xs hover:border-primary/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="flex size-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600">
                <BookOpen className="size-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">
                  Striver SDE Sheet
                </p>
                <p className="text-[11px] text-muted-foreground">Trees, Graphs & DP core questions</p>
              </div>
            </div>
            <ExternalLink className="size-3.5 text-muted-foreground group-hover:text-primary" />
          </a>

          <Link
            to="/preparation"
            className="group flex items-center justify-between rounded-xl border border-border bg-surface p-4 shadow-2xs hover:border-primary/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="flex size-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600">
                <ShieldCheck className="size-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">
                  Campus Question Vault
                </p>
                <p className="text-[11px] text-muted-foreground">58 questions reported from our campus</p>
              </div>
            </div>
            <ArrowRight className="size-3.5 text-muted-foreground group-hover:text-primary" />
          </Link>
        </div>
      </section>

      {/* Clean Bottom Actions */}
      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
        <Button variant="ghost" size="sm" asChild>
          <Link to="/drives">← Back to all drives</Link>
        </Button>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" asChild>
            <Link to="/workspace">Go To My Workspace</Link>
          </Button>
          <Button size="sm" asChild>
            <Link to="/contribute">+ Add Senior Review</Link>
          </Button>
        </div>
      </div>
    </Page>
  );
}