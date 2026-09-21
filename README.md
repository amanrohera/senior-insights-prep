# Campus Intel Hub

Build a completely new frontend UI from scratch for a product called "Campus Prep".

IMPORTANT:
This is a NEW PROJECT.

There is NO existing UI to preserve.
There is NO existing design to redesign.
Do NOT create a generic SaaS template.
Do NOT build the backend yet.
Do NOT focus on database or API implementation.

Your primary task is to create a polished, professional, production-quality FRONTEND EXPERIENCE for Campus Prep.

The result should look like a real startup product ready to show to college students, not like an AI-generated dashboard.

====================================================
PRODUCT
====================================================

Campus Prep is a student-driven campus placement intelligence and preparation platform.

It helps college students during campus recruitment.

Students can:

- Discover companies visiting their campus
- See companies relevant to their degree/program
- Understand eligibility
- See the placement drive details
- Understand the reported hiring process
- Read previous students' interview experiences
- See frequently reported interview questions
- Find preparation resources
- Track their preparation
- Save companies and experiences
- Contribute their own placement experience

The core idea:

SENIORS' EXPERIENCE → CURRENT STUDENTS' PREPARATION → FUTURE BATCHES

The product is primarily for current students.

====================================================
DESIGN PHILOSOPHY
====================================================

Create a sophisticated, modern student product.

The visual quality should feel comparable to:

- Linear
- Notion
- Vercel
- Arc
- modern professional education products

Do NOT copy any of these products.

Campus Prep should have its own visual identity.

The design should feel:

- Professional
- Clean
- Calm
- Intelligent
- Trustworthy
- Modern
- Information-rich
- Student-focused

It should NOT feel:

- Corporate ERP
- College portal
- Generic admin dashboard
- Generic AI SaaS
- Overly colorful
- Overly playful
- Over-designed

====================================================
COLOR SYSTEM
====================================================

Use a light theme.

Background:
#F7F8FA or a very subtle warm-neutral equivalent.

Surface:
White.

Primary text:
Very dark navy / charcoal.

Secondary text:
Muted slate.

Primary accent:
Professional blue.

Do NOT make every section blue.

Use blue primarily for:

- Primary buttons
- Active navigation
- Links
- Selected states
- Progress indicators

Success:
Muted green.

Warning:
Muted amber.

Error:
Muted red.

Use subtle borders instead of heavy shadows.

Avoid gradients unless extremely subtle.

NO glassmorphism.

NO neon.

====================================================
TYPOGRAPHY
====================================================

Use a premium modern sans-serif such as Inter, Geist, or a similarly clean font.

Typography must have strong hierarchy.

Avoid giant marketing text.

Use approximately:

Page title:
36–42px

Section title:
22–26px

Card title:
16–18px

Body:
14–16px

Metadata:
12–13px

Use generous line height.

====================================================
GLOBAL LAYOUT
====================================================

Desktop content width:
1200–1280px.

Keep content centered.

Use a consistent spacing system.

Primary spacing:

8
12
16
24
32
48
64

Avoid giant empty spaces.

The application should feel dense enough to be useful but never cluttered.

====================================================
GLOBAL NAVIGATION
====================================================

Create a professional compact navbar.

LEFT:

Campus Prep

Small text underneath:

PLACEMENT INTEL

CENTER / MAIN NAVIGATION:

Dashboard
Drives
Companies
Experiences
Preparation

RIGHT:

Search
Log in
Get Started

After login:

Dashboard
Drives
Companies
Experiences
Preparation

Profile avatar on the right.

Navbar should be approximately 64px high.

White/light background.

Subtle bottom border.

====================================================
PAGE 1 — LANDING PAGE
====================================================

Route:

/

The landing page should introduce Campus Prep but should NOT feel like a generic marketing website.

NAVBAR

Campus Prep
PLACEMENT INTEL

Companies
Experiences
How it works

Log in
Get Started

--------------------------------------------

HERO

Small eyebrow:

XYZ UNIVERSITY · PLACEMENT CYCLE 2026–27

Headline:

Your campus placement,
prepared by your seniors.

Supporting text:

Company-specific placement intelligence, real student experiences, reported interview questions, and preparation resources — all in one place.

Buttons:

Explore Companies
Get Started

Keep hero compact.

Do NOT use 80–100px typography.

--------------------------------------------

Immediately below hero:

OPEN FOR YOUR PROGRAM

B.Tech Computer Science · Class of 2027

Show a row/grid of realistic company drive cards.

Microsoft

Software Engineer

B.Tech

21 experiences
58 reported questions

View drive →

Amazon

Software Development Engineer

B.Tech

31 experiences
82 reported questions

View drive →

Deloitte

Analyst

B.Tech

14 experiences
29 reported questions

View drive →

These should be compact and professional.

--------------------------------------------

SECTION:

HOW CAMPUS PREP WORKS

Three steps:

01
Discover

Find companies recruiting for your program.

02
Learn

Read experiences and reported questions from previous students.

03
Prepare

Use the information to prepare and contribute your own experience.

--------------------------------------------

SECTION:

FROM YOUR SENIORS

Show 2–3 realistic experience previews.

Microsoft
Software Engineer · 2026

4 rounds · 18 questions

"Technical rounds focused heavily on DSA, OOP and project discussion."

Anonymous · B.Tech

Read experience →

--------------------------------------------

SECTION:

BUILT FOR YOUR PLACEMENT CYCLE

Show:

2026–27

B.Tech
M.Sc IT
M.Sc Data Science

Make this section clean and minimal.

--------------------------------------------

FINAL CTA

Ready for your placement season?

Explore your campus drives.

[Explore Companies]

====================================================
PAGE 2 — STUDENT DASHBOARD
====================================================

Route:

/dashboard

This should feel like the main product, NOT an analytics dashboard.

Top:

Good morning, Aman.

B.Tech Computer Science · Class of 2027
XYZ University · Placement Cycle 2026–27

Large search field:

Search companies, roles, questions, experiences...

--------------------------------------------

OPEN FOR YOU

Small supporting text:

Companies currently relevant to your program.

Company cards:

Microsoft

Software Engineer
B.Tech

Deadline
25 Sep 2026

21 experiences
58 questions

View drive →

Amazon

SDE
B.Tech

Deadline
28 Sep 2026

31 experiences
82 questions

View drive →

Deloitte

Analyst
B.Tech

Deadline
02 Oct 2026

14 experiences
29 questions

View drive →

--------------------------------------------

YOUR PLACEMENT JOURNEY

Show a clean list:

Microsoft
Participated
Experience submitted

Amazon
Participated
Experience pending

Google
Saved

--------------------------------------------

RECENT EXPERIENCES

Show experience cards.

--------------------------------------------

CONTINUE PREPARING

Show:

Microsoft
Software Engineer

Preparation progress:
72%

Next:

Revise Binary Trees

[Continue Preparation]

====================================================
PAGE 3 — PLACEMENT DRIVES
====================================================

Route:

/drives

Header:

Placement Drives

Companies recruiting in your placement cycle.

Search bar.

Filters:

Program
Role
Company
Deadline
Status

Drive cards.

Each card:

Company logo
Company
Role
Eligible programs
Deadline
Experience count
Question count

Use a professional compact grid.

====================================================
PAGE 4 — COMPANIES
====================================================

Route:

/companies

Header:

Companies

Explore companies that recruit from your campus.

Search companies.

Filters:

Industry
Role
Program

Company directory.

Each company:

Logo
Microsoft

Technology

3 campus drives
21 experiences
58 questions

View company →

====================================================
PAGE 5 — COMPANY DRIVE DETAILS
====================================================

Route:

/drives/microsoft-2026

This is one of the most important screens.

Header:

MICROSOFT

Software Engineer

Campus Drive · 2026–27

B.Tech

Buttons:

Save
I Participated

--------------------------------------------

STATS

Eligibility
7+ CGPA
No active backlogs

Deadline
25 Sep 2026

Experiences
21 students

Questions
58 reported

Use a clean horizontal information layout.

--------------------------------------------

HIRING PROCESS

Title:

Reported Hiring Process

Create a beautiful vertical timeline:

01
Online Assessment

3 coding questions

↓

02
Technical Interview

DSA · OOP · Projects

↓

03
Technical Interview

DBMS · Graphs

↓

04
HR

Behavioral

Use subtle numbered circles and thin lines.

--------------------------------------------

PREVIOUS STUDENT EXPERIENCES

Show experience cards.

Example:

Anonymous
B.Tech · Class of 2026

Selected

4 rounds · 18 questions

"Technical rounds focused heavily on DSA, OOP and project discussion."

Read experience →

--------------------------------------------

FREQUENTLY REPORTED QUESTIONS

Show clean question rows:

Reverse Linked List
14 reports

Binary Trees
11 reports

DBMS Normalization
8 reports

Graphs
7 reports

--------------------------------------------

PREPARATION RESOURCES

Resource cards/list.

--------------------------------------------

SENIORS FROM YOUR COLLEGE

Small profile rows.

====================================================
PAGE 6 — EXPERIENCE DIRECTORY
====================================================

Route:

/experiences

Header:

Student Experiences

Real placement experiences shared by students.

Search.

Filters:

Company
Program
Graduation Year
Result

Experience cards should prioritize:

Company
Role
Year
Program
Result
Number of rounds
Number of questions

====================================================
PAGE 7 — EXPERIENCE DETAIL
====================================================

Route:

/experiences/microsoft-example

This should feel like reading a polished interview report.

Header:

Microsoft

Interview Experience

Anonymous
B.Tech · Class of 2026

Selected

--------------------------------------------

ROUND 01

Online Assessment

What happened?

Realistic experience text.

Reported questions:

1. Reverse Linked List
2. Binary Tree
3. SQL Query

--------------------------------------------

ROUND 02

Technical Interview

Experience

Questions

--------------------------------------------

ROUND 03

Technical Interview

Experience

Questions

--------------------------------------------

ROUND 04

HR

Experience

Questions

--------------------------------------------

OVERALL EXPERIENCE

PREPARATION ADVICE

Make this page highly readable.

Do NOT put everything into separate floating cards.

Use the page itself as the reading surface.

====================================================
PAGE 8 — PREPARATION
====================================================

Route:

/preparation

Header:

Prepare for your next drive

Selected company:

Microsoft
Software Engineer

Progress:

72%

--------------------------------------------

TODAY

□ Revise Binary Trees
□ Solve Microsoft reported questions
□ Revise DBMS
□ Prepare project explanation

--------------------------------------------

REPORTED QUESTIONS

Questions from previous students.

--------------------------------------------

TOPICS

DSA
DBMS
OOP
Projects
HR

--------------------------------------------

RESOURCES

Clean resource list.

====================================================
PAGE 9 — PERSONAL WORKSPACE
====================================================

Route:

/workspace

Header:

My Workspace

Tabs:

Overview
Tasks
Notes
Saved
Calendar

TASKS:

□ Revise Trees
□ Solve Microsoft questions
□ Prepare project explanation
□ Mock interview

SAVED:

Saved Drives
Saved Experiences
Saved Resources

NOTES:

Microsoft Preparation

Keep this interface lightweight.

====================================================
PAGE 10 — PROFILE
====================================================

Route:

/profile

Profile:

Aman

B.Tech Computer Science
XYZ University
Class of 2027

Placement cycle:

2026–27

Placement journey.

Contribution statistics.

Privacy settings.

Keep it simple.

====================================================
PAGE 11 — CONTRIBUTE EXPERIENCE
====================================================

Route:

/contribute

Create a beautiful multi-step experience submission UI.

Step navigation:

01 Result
02 Round 1
03 Round 2
04 Round 3
05 Round 4
06 Overall
07 Submit

Each round:

Round title

What happened?

[Large textarea]

Questions asked:

Question 1
Question 2

[+ Add question]

Optional:

Topic
Difficulty

Privacy:

Post anonymously

Submit Experience

Make the form feel calm and easy.

====================================================
COMPONENT SYSTEM
====================================================

Create a coherent reusable design system.

Components:

Button
Input
SearchBar
CompanyCard
DriveCard
ExperienceCard
QuestionRow
Timeline
TimelineItem
Badge
StatusBadge
Tabs
Filter
Modal
Drawer
Toast
Avatar
Progress
EmptyState
LoadingState

Do NOT use the same giant rounded card for everything.

Different content types should have different visual structures.

====================================================
CARD DESIGN
====================================================

Company cards:

Compact.

Experience cards:

Editorial.

Hiring process:

Timeline.

Questions:

List.

Workspace:

Rows.

Stats:

Typography + dividers.

Do NOT make every component a floating white rounded rectangle.

====================================================
ICON RULE
====================================================

Use Lucide icons.

Icons should only exist when they communicate meaning.

NO decorative random icons.

NO floating action icons over cards.

NO giant icon circles.

====================================================
COMPANY LOGOS
====================================================

Use small consistent company logos.

If actual logo assets are unavailable, use clean initials.

Do NOT use huge logos.

====================================================
RESPONSIVE DESIGN
====================================================

Build desktop and mobile intentionally.

Desktop:

1200–1280px max content width.

Mobile:

- Compact navigation
- Stacked cards
- Vertical timeline
- Filter drawer
- Comfortable typography
- Full-width primary buttons
- Proper spacing

Do NOT simply scale down desktop.

====================================================
MICRO INTERACTIONS
====================================================

Use subtle interactions:

Hover
Focus
Button transitions
Card hover
Tab transitions
Progress animation

No:

Bouncing
Floating
Parallax
Animated gradients
Excessive motion

====================================================
CONTENT
====================================================

Use realistic fictional content.

University:

XYZ University

Programs:

B.Tech Computer Science
M.Sc IT
M.Sc Data Science

Companies:

Microsoft
Amazon
Google
Deloitte
TCS

Placement cycle:

2026–27

Use realistic experiences and questions.

Do NOT use lorem ipsum.

====================================================
IMPORTANT
====================================================

This is a NEW DESIGN FROM SCRATCH.

Do not imitate a generic SaaS template.

Do not create an admin dashboard as the main UI.

Do not make the hero gigantic.

Do not make every element a rounded card.

Do not overuse blue.

Do not overuse icons.

Do not add decorative elements that do not communicate information.

The product should feel like a serious placement intelligence platform.

The primary visual focus must always be:

COMPANIES
DRIVES
EXPERIENCES
QUESTIONS
PREPARATION

The user should understand Campus Prep within 5 seconds.

====================================================
IMPLEMENTATION
====================================================

First create the complete frontend design system.

Then implement:

1. Navbar
2. Landing page
3. Dashboard
4. Drives
5. Companies
6. Company Drive Details
7. Experiences
8. Experience Details
9. Preparation
10. Workspace
11. Profile
12. Contribution flow

Use mock data for now.

No backend required.

Ensure all navigation links work between the pages.

The final result should feel like one coherent professionally designed product.

Do not stop after creating the landing page.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://senior-insights-prep.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a8b0d842-b4ec-45a5-aadf-c19c103bd6db).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
