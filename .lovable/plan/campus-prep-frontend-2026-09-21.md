# Campus Prep frontend

## Goal
Build a complete, frontend-only Campus Prep experience with realistic mock content, working navigation, and intentional desktop/mobile layouts across all 11 requested pages.

## Visual direction
- Light warm-neutral canvas, white surfaces, charcoal/navy text, restrained professional blue, and muted semantic status colors.
- Geist-style modern sans typography with compact hierarchy, thin borders, minimal shadows, and modest corner radii.
- Information-first composition: compact company/drive blocks, editorial experience previews, plain reading surfaces, row-based questions and tasks, and a vertical hiring timeline.
- A compact 64px product navigation with a distinct public state on the landing page and an authenticated-style state elsewhere; mobile uses a focused drawer.

## Build plan
1. Define global design tokens, typography, spacing, motion, focus states, and shared layout rules in the design system.
2. Create typed mock data for companies, drives, experiences, questions, resources, preparation tasks, and student profile information.
3. Build reusable product components: navigation, buttons, inputs/search, badges/statuses, logos/avatars, company/drive/experience displays, question rows, timeline, tabs/filters, progress, modal/drawer/toast, and loading/empty states.
4. Implement all requested routes with unique page metadata:
   - `/` landing page
   - `/dashboard`
   - `/drives` and `/drives/microsoft-2026`
   - `/companies`
   - `/experiences` and `/experiences/microsoft-example`
   - `/preparation`
   - `/workspace`
   - `/profile`
   - `/contribute`
5. Wire navigation and useful mock interactions, including filtering/search presentation, save/participation states, checklist progress, workspace tabs, and the multi-step contribution form.
6. Verify every route at desktop and mobile sizes, check interactions and visual overflow, and resolve build/runtime issues.

## Technical details
- TanStack Start file routes with a shared root shell and route-specific SEO metadata.
- React state only; no database, authentication, or API work.
- Existing Radix/shadcn primitives and Lucide icons for accessible controls.
- Semantic Tailwind v4 tokens in `src/styles.css`; no hardcoded component colors.
