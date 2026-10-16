import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  Circle,
  Plus,
  Trash2,
  Calendar,
  Flame,
  ArrowRight,
  BookOpen,
  Bookmark,
  Building2,
  StickyNote,
} from "lucide-react";
import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Page, PageHeader, CompanyLogo } from "@/components/campus/shared";

export const Route = createFileRoute("/workspace")({
  head: () => ({
    meta: [
      { title: "My Workspace — Campus Prep" },
      { name: "description", content: "Your simple placement checklist, deadlines, and saved company notes." },
      { property: "og:title", content: "My Workspace — Campus Prep" },
      { property: "og:description", content: "Personal placement command center." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Workspace,
});

interface Task {
  id: string;
  title: string;
  category: "DSA" | "Core CS" | "HR" | "Project";
  completed: boolean;
  priority: "High" | "Normal";
}

const defaultTasks: Task[] = [
  { id: "1", title: "Practice 5 Tree problems on LeetCode (LCA, Diameter)", category: "DSA", completed: true, priority: "High" },
  { id: "2", title: "Implement LRU Cache from scratch with Doubly LinkedList", category: "DSA", completed: true, priority: "High" },
  { id: "3", title: "Revise OS Virtual Memory, Page Faults & Thrashing", category: "Core CS", completed: false, priority: "High" },
  { id: "4", title: "Review B-Tree vs Hash Indexing trade-offs in DBMS", category: "Core CS", completed: false, priority: "Normal" },
  { id: "5", title: "Rehearse 2-minute elevator pitch for final year project", category: "Project", completed: false, priority: "High" },
  { id: "6", title: "Prepare 2 STAR stories for Microsoft Growth Mindset culture", category: "HR", completed: false, priority: "Normal" },
];

function Workspace() {
  const [tasks, setTasks] = useState<Task[]>(defaultTasks);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Scratchpad notes per saved company
  const [msftNotes, setMsftNotes] = useState(
    "• Remember to explain brute force before optimal O(N) solution.\n• Mention Redis cache TTL and invalidation in project discussion."
  );
  const [amznNotes, setAmznNotes] = useState(
    "• Prepare customer obsession and bias for action STAR scenarios.\n• Focus on BFS / Dijkstra for shortest paths."
  );

  const toggleTask = (id: string) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    const newTask: Task = {
      id: String(Date.now()),
      title: newTaskTitle.trim(),
      category: "DSA",
      completed: false,
      priority: "Normal",
    };
    setTasks([newTask, ...tasks]);
    setNewTaskTitle("");
  };

  const completedCount = tasks.filter((t) => t.completed).length;
  const progressPercent = Math.round((completedCount / (tasks.length || 1)) * 100);

  const filteredTasks = tasks.filter((t) => {
    if (activeCategory === "All") return true;
    return t.category === activeCategory;
  });

  return (
    <Page>
      <PageHeader
        eyebrow="Personal Command Center"
        title="Placement Workspace"
        description="Track your preparation checklist, upcoming drive deadlines, and company notes in one place."
      />

      {/* Top Scannable Progress Banner */}
      <section className="rounded-2xl border border-border bg-surface p-5 shadow-2xs">
        <div className="grid gap-6 sm:grid-cols-[1.2fr_1fr] sm:items-center">
          <div>
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-foreground">Drive Readiness Progress</span>
              <strong className="text-primary font-bold">
                {completedCount} of {tasks.length} Tasks Done ({progressPercent}%)
              </strong>
            </div>
            <Progress value={progressPercent} className="mt-2.5 h-2.5" />
            <p className="mt-2 text-[11px] text-muted-foreground">
              Tip: Completing core tasks boosts interview shortlist confidence significantly.
            </p>
          </div>

          <div className="rounded-xl border border-border/80 bg-muted/40 p-3.5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CompanyLogo name="Microsoft" size="sm" />
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-foreground">Microsoft OA</span>
                  <Badge variant="destructive" className="h-4 px-1.5 text-[9px] font-semibold animate-pulse">
                    in 3 Days
                  </Badge>
                </div>
                <p className="text-[11px] text-muted-foreground">Thursday, 25 Sep · 7:00 PM</p>
              </div>
            </div>
            <Button size="sm" variant="ghost" className="h-8 text-xs font-semibold text-primary" asChild>
              <Link to="/drives/microsoft-2026">Prep Sheet →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Clean 2-Tab View */}
      <section className="mt-8">
        <Tabs defaultValue="tasks" className="w-full">
          <TabsList className="h-10 bg-muted/60 p-1 border border-border">
            <TabsTrigger value="tasks" className="text-xs font-semibold">
              <CheckCircle2 className="size-3.5 mr-1.5" /> My Checklist ({tasks.length})
            </TabsTrigger>
            <TabsTrigger value="notes" className="text-xs font-semibold">
              <StickyNote className="size-3.5 mr-1.5" /> Saved Drives & Notes (2)
            </TabsTrigger>
          </TabsList>

          {/* TAB 1: CHECKLIST */}
          <TabsContent value="tasks" className="mt-6 space-y-4">
            {/* Quick Add Form */}
            <form onSubmit={addTask} className="flex gap-2">
              <Input
                placeholder="Add a new quick task (e.g., Revise Graph BFS/DFS)..."
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                className="h-10 text-xs bg-surface border-border shadow-2xs"
              />
              <Button type="submit" size="sm" className="h-10 px-4 font-semibold shrink-0">
                <Plus className="size-4 mr-1" /> Add Task
              </Button>
            </form>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-1.5">
              {["All", "DSA", "Core CS", "Project", "HR"].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                    activeCategory === cat
                      ? "bg-foreground text-background font-semibold"
                      : "border border-border bg-surface text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Task Items */}
            <div className="rounded-xl border border-border bg-surface divide-y divide-border shadow-2xs overflow-hidden">
              {filteredTasks.length === 0 ? (
                <div className="p-8 text-center text-xs text-muted-foreground">
                  No tasks found in this category.
                </div>
              ) : (
                filteredTasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex items-center justify-between p-3.5 hover:bg-muted/30 transition-colors"
                  >
                    <div
                      onClick={() => toggleTask(task.id)}
                      className="flex items-center gap-3 cursor-pointer select-none flex-1"
                    >
                      {task.completed ? (
                        <CheckCircle2 className="size-4.5 text-emerald-500 shrink-0" />
                      ) : (
                        <Circle className="size-4.5 text-muted-foreground shrink-0 hover:text-primary transition-colors" />
                      )}
                      <span
                        className={`text-xs font-medium ${
                          task.completed ? "line-through text-muted-foreground" : "text-foreground"
                        }`}
                      >
                        {task.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <Badge variant="outline" className="text-[10px] font-mono">
                        {task.category}
                      </Badge>
                      {task.priority === "High" && (
                        <Badge variant="destructive" className="h-4 px-1 text-[9px] font-semibold">
                          High
                        </Badge>
                      )}
                      <button
                        type="button"
                        onClick={() => deleteTask(task.id)}
                        className="text-muted-foreground/60 hover:text-destructive p-1 transition-colors"
                        title="Delete task"
                      >
                        <Trash2 className="size-3.5" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </TabsContent>

          {/* TAB 2: SAVED DRIVES & NOTES */}
          <TabsContent value="notes" className="mt-6 grid gap-4 md:grid-cols-2">
            {/* Microsoft Card */}
            <div className="rounded-xl border border-border bg-surface p-5 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CompanyLogo name="Microsoft" size="sm" />
                    <div>
                      <h3 className="text-sm font-bold text-foreground">Microsoft India</h3>
                      <p className="text-[11px] text-muted-foreground">SDE-1 · ₹45.5 LPA</p>
                    </div>
                  </div>
                  <Badge variant="destructive" className="h-4.5 text-[10px] animate-pulse">
                    OA in 3 Days
                  </Badge>
                </div>

                <div className="mt-4">
                  <label className="text-xs font-semibold text-muted-foreground block mb-1.5">
                    Personal Scratchpad Notes:
                  </label>
                  <textarea
                    rows={4}
                    value={msftNotes}
                    onChange={(e) => setMsftNotes(e.target.value)}
                    className="w-full rounded-lg border border-border bg-muted/30 p-2.5 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Type your last-minute notes, edge cases, or interview reminders..."
                  />
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                <span className="text-[11px] text-muted-foreground">Auto-saved locally</span>
                <Button size="sm" variant="ghost" className="h-7 text-xs font-semibold text-primary" asChild>
                  <Link to="/drives/microsoft-2026">Open Drive Sheet →</Link>
                </Button>
              </div>
            </div>

            {/* Amazon Card */}
            <div className="rounded-xl border border-border bg-surface p-5 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CompanyLogo name="Amazon" size="sm" />
                    <div>
                      <h3 className="text-sm font-bold text-foreground">Amazon India</h3>
                      <p className="text-[11px] text-muted-foreground">SDE · ₹32.0 LPA</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="h-4.5 text-[10px]">
                    Drive in 6 Days
                  </Badge>
                </div>

                <div className="mt-4">
                  <label className="text-xs font-semibold text-muted-foreground block mb-1.5">
                    Personal Scratchpad Notes:
                  </label>
                  <textarea
                    rows={4}
                    value={amznNotes}
                    onChange={(e) => setAmznNotes(e.target.value)}
                    className="w-full rounded-lg border border-border bg-muted/30 p-2.5 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Type your last-minute notes, edge cases, or interview reminders..."
                  />
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                <span className="text-[11px] text-muted-foreground">Auto-saved locally</span>
                <Button size="sm" variant="ghost" className="h-7 text-xs font-semibold text-primary" asChild>
                  <Link to="/drives">Open Drive Sheet →</Link>
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </Page>
  );
}