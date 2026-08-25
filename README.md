# Unified Project Management Suite

A browser-local working sandbox for demonstrating how project delivery, knowledge, service management, decisions, risk, evidence, and leadership reporting can operate in one governed product experience.

Everything in the sandbox is synthetic. It is designed to feel operational during a demonstration while remaining a vendor-neutral, static front-end concept.

## Run the sandbox

- [Open the live Unified Project Management Suite](https://azjester.github.io/J-C_Replace/)
- [Open the five-minute leadership tour](https://azjester.github.io/J-C_Replace/leadership-demo.html)
- [Download the PowerPoint](./downloads/unified-project-management-suite-leadership-brief.pptx)
- [Download the PDF](./downloads/unified-project-management-suite-leadership-brief.pdf)

## Working sandbox capabilities

### Browser-local demo data

- Versioned local persistence keeps synthetic changes after a refresh.
- JSON export creates a portable copy of the current scenario.
- JSON import checks schema compatibility, required records, references, identifiers, workflow values, and numeric ranges before restoring a compatible scenario entirely in the browser.
- Reset clears browser-local changes and returns the sandbox to its original fictional data.
- A visible save indicator shows when the current scenario was last stored locally.

The JSON import reads a file locally; it does not upload that file or its contents anywhere.

### Simulated people and permissions

The **View as** control supports six fictional personas:

- Maya Okafor — suite administrator
- Lena Ortiz — project lead
- Theo Bennett — contributor
- Dana Kessler — executive approver
- Amina Cole — service requester
- Jordan Lee — service agent

Navigation, actions, search results, and dashboards adapt to the selected persona. This is a role-and-permission simulation only. It is not authentication, identity verification, access-control enforcement, or a security boundary.

### Project and sprint management

- Seven populated project workspaces with separate backlog, board, sprints, releases, milestones, risks, decisions, pages, reports, and leadership status
- A real work-item hierarchy: Epic → Story / Task / Bug → Sub-task. Subtasks belong to a parent, inherit its sprint, show progress roll-ups on backlog rows and board cards, and are excluded from sprint point totals so estimates never double-count
- Subtask management in the work-item panel: inline add, per-subtask status, parent breadcrumbs, and a completion prompt when the last subtask closes
- Epics as first-class references: an epic picker on creation, clickable epic links, and an Epics panel with child progress
- Editable checklists (add, check, remove) and browser-local file attachments on work items
- Overdue indicators computed from real parsed dates against the deterministic 24 August demo date
- Project creation provisions a starter sprint plan, project hub, epic, and milestones so a new workspace is immediately usable
- A timeline that positions every scheduled work item by its actual due date, with milestone gates and dependency counts
- An upgraded query language: `AND`, `OR`, parentheses, `IN`, `~`, and date/point comparisons (`due < "05 Sep 2026"`, `points >= 8`), plus `parent`, `points`, and `due` fields
- Personal and shared saved filters with query ordering and seeded favorites
- Completed, active, and future sprints with editable goals, dates, capacity, completion, and automatic carryover
- A governed decision cascade that updates dependent work, schedule, risk, notifications, audit history, and leadership status

### Service management

- Requester portal with synthetic request types, request submission, public replies, and status tracking
- Agent request views and derived queues for unassigned, assigned, approaching-SLA, breached, waiting-for-customer, and approval work
- Request workflow with public replies, private internal notes, approval gates, resolution, and closure
- First-response and resolution SLAs driven by a deterministic demo clock so time-based behavior is repeatable

### Knowledge management

- Spaces with a true recursive page tree: arbitrary nesting depth, expand/collapse, and move/copy that carries a page’s whole branch
- Full-text search across page bodies, work items, blog posts, and decisions, with highlighted snippets and `label:` / `type:` / `space:` filter tokens
- Page labels with a label browse cloud, plus live page templates (decision brief, meeting notes, retrospective, integration review, risk assessment, leadership readout)
- Macros inside pages: table of contents, info/warning panels, expandable sections, status lozenges, tables, and live work-item chips (`{{SMN-184}}`) that show current status and open the work item
- Collaboration: @mention autocomplete with inbox notifications, threaded page comments with reply and resolve, and inline comments anchored to selected text
- Watch a page or a whole space and receive inbox notifications when watched content is published or discussed; reactions on pages and posts
- Per-page view/edit restrictions enforced by the persona simulation, with a restricted marker in the tree
- Browser-local attachments on pages, page and whole-space Markdown export, space blog posts, and personal spaces per persona
- Browser-local autosaved drafts that can be resumed after navigation or refresh
- Version history with a word-level diff between any two versions and restore-to-new-draft behavior
- Page archive and restore behavior with permissions and audit history

### Reporting and administration

- Portfolio, delivery, sprint, service, and leadership readouts derived from the same synthetic state
- Browser-generated timeline and report CSV files, release-note Markdown, migration mapping CSV, and leadership briefing Markdown
- Working release configuration, team-capacity, synthetic-person, and automation-rule forms
- People, teams, capacity, workflow configuration, permission matrices, templates, automation, integrations, and audit views
- Synthetic migration dry run, unified search, global create, keyboard navigation, responsive layouts, reduced motion, and repeatable reset

## Suggested demonstration path

1. Select a persona and show how navigation and permitted actions change.
2. Create or update work, save an advanced filter, and refresh to show local persistence.
3. Move work through the active sprint and inspect the resulting sprint metrics.
4. Submit a request through the service portal, then switch to the service agent and work it from a queue.
5. Advance the deterministic demo clock to show an SLA state change.
6. Edit a knowledge page, resume its draft, publish a new version, and compare it with an earlier version.
7. Export the scenario, reset it, and import the JSON to restore the demonstration state.

## Concept boundary and limitations

This repository is a static, front-end-only concept using fictional people, organizations, projects, requests, dates, metrics, and outcomes. It works offline after download and makes no application API calls. It uses no cookies, telemetry, network uploads, or server-side persistence. Browser-local storage is the only persistence mechanism.

It does not provide real authentication, enforceable permissions, multi-user concurrency, email delivery, binary attachment storage, encryption, enterprise integrations, supported migration, backups, disaster recovery, or production security. A production replacement would still require identity and access management, backend services and durable data storage, security engineering, integration and migration tooling, scale and performance validation, operations, and an approved cutover plan.

## Local use

Clone the repository and open `index.html` in a modern browser, or serve the folder from any static web server. All visual assets are bundled locally; no internet connection is required after download.

Keyboard shortcuts:

- `Ctrl/Cmd + K` — unified search (press `Enter` for full-text results)
- `C` — create work
- `Esc` — close the current overlay

## Visual system

The sandbox uses a neutral navy-and-teal product palette, semantic status colors, a system-font stack, and a generic suite mark. It intentionally carries no organization-specific identity.
