# Unified Project Management Suite

A broad interactive concept for replacing fragmented Jira, Confluence, and manual reporting with one governed system for work, knowledge, decisions, risk, evidence, and leadership status.

## Run the prototype

- [Open the live product prototype](https://azjester.github.io/J-C_Replace/)
- [Open the five-minute leadership tour](https://azjester.github.io/J-C_Replace/leadership-demo.html)
- [Download the PowerPoint](./downloads/unified-project-management-suite-leadership-brief.pptx)
- [Download the PDF](./downloads/unified-project-management-suite-leadership-brief.pdf)

## What is represented

- Portfolio home, personal work, and notification inbox
- Projects and a populated Sentinel Mesh Node project overview
- Backlog, sprint board, editable work details, dependencies, comments, checklists, and activity
- Timeline, milestones, releases, risks, and delivery reporting
- Knowledge spaces, page tree, living pages, comments, evidence, editing, and version history
- Governed decision register with an approval cascade that updates six dependent items
- Leadership readout generated from the same synthetic operating record
- People, teams, capacity, workflow administration, permissions, templates, integrations, and audit
- Automation rules and a synthetic Jira/Confluence migration dry run
- Unified search, global create, keyboard navigation, responsive layouts, reduced motion, and demo reset

## Demonstration path

1. Open **Home** and select the certification intervention.
2. Inspect **SMN-191** and its blocked downstream work.
3. Follow the linked **Alternate Path Decision Brief**.
4. Open **DEC-014** and approve Option B.
5. Confirm that six items move to Ready, the forecast returns to 18 September, risk falls to 6/25, and the leadership brief refreshes.
6. Reset the demo from the user menu.

## Concept boundary

This is a front-end-only product prototype using fictional people, projects, dates, metrics, and outcomes. State exists only in a JavaScript `DemoState` object and is cleared by reset or refresh. The site uses no APIs, authentication, cookies, telemetry, uploads, browser storage, or real Atlassian or organizational program data.

Production replacement would still require enterprise identity and permissions, durable storage, security engineering, scale and performance work, supported integrations, migration tooling, data-quality validation, operational support, and an approved cutover plan.

## Local use

Clone the repository and open `index.html` in a modern browser, or serve the folder from any static web server. All visual assets are bundled locally; no internet connection is needed after download.

Keyboard shortcuts:

- `Ctrl/Cmd + K` — unified search
- `C` — create work
- `Esc` — close the current overlay

## Visual system

The prototype uses a neutral navy-and-teal product palette, semantic status colors, a system-font stack, and a generic suite mark. It intentionally carries no company-specific identity.
