(() => {
  "use strict";

  const FIXTURE = {
    route: "home",
    projectMode: "list",
    activePage: null,
    activeDecision: null,
    adminTab: "workflows",
    timelineScale: "weeks",
    issueFilter: { text: "", status: "All", assignee: "All" },
    migrationProgress: 0,
    migrationComplete: false,
    decisionApproved: false,
    currentUser: "Maya Okafor",
    currentProject: "SMN",
    projects: [
      {
        key: "SMN",
        name: "Sentinel Mesh Node",
        health: "Amber",
        completion: 64,
        confidence: 72,
        release: "22 Oct 2026",
        objective: "Demonstrate Sentinel Mesh Node Release 1 in a controlled operational scenario on 22 October 2026.",
        owner: "Lena Ortiz",
        description: "Secure mesh-node delivery, certification, integration, and operational demonstration."
      },
      {
        key: "HRU",
        name: "Horizon Relay Upgrade",
        health: "Green",
        completion: 78,
        confidence: 91,
        release: "30 Sep 2026",
        objective: "Complete relay modernization and close site acceptance.",
        owner: "Marcus Reed",
        description: "Relay modernization, site acceptance, and transition readiness."
      },
      {
        key: "BTE",
        name: "Beacon Test Environment",
        health: "Green",
        completion: 51,
        confidence: 84,
        release: "14 Nov 2026",
        objective: "Stand up a repeatable, governed test environment for future releases.",
        owner: "Priya Nair",
        description: "Reusable test environment, configuration baselines, and evidence management."
      }
    ],
    people: [
      { name: "Lena Ortiz", role: "Program Lead", team: "Program Delivery", capacity: 72, initials: "LO", color: "sky" },
      { name: "Marcus Reed", role: "Engineering Manager", team: "Systems Integration", capacity: 91, initials: "MR", color: "orange" },
      { name: "Imani Brooks", role: "Certification Lead", team: "Certification & Assurance", capacity: 84, initials: "IB", color: "green" },
      { name: "Theo Bennett", role: "Systems Engineer", team: "Systems Integration", capacity: 78, initials: "TB", color: "deep" },
      { name: "Priya Nair", role: "Knowledge Owner", team: "Program Delivery", capacity: 63, initials: "PN", color: "coral" },
      { name: "Evan Kim", role: "Cybersecurity Lead", team: "Cybersecurity", capacity: 69, initials: "EK", color: "slate" },
      { name: "Dana Kessler", role: "Executive Sponsor", team: "Executive Leadership", capacity: 48, initials: "DK", color: "sky" },
      { name: "Maya Okafor", role: "Program Director", team: "Program Delivery", capacity: 67, initials: "MO", color: "slate" }
    ],
    issues: [
      {
        key: "SMN-100", summary: "Certification and Assurance", type: "Epic", status: "In Progress", priority: "High",
        assignee: "Imani Brooks", reporter: "Lena Ortiz", sprint: "Portfolio backlog", epic: "—", points: 21, due: "18 Sep 2026",
        description: "Plan, execute, and trace the certification evidence required for Release 1.",
        dependencies: [], linkedPage: "cert-strategy", risk: "RISK-07", milestone: "Integration Readiness Review",
        checklist: ["Evidence sources identified", "Accreditation path confirmed", "Control crosswalk approved"],
        checked: [true, false, false],
        comments: [{ author: "Lena Ortiz", time: "Yesterday", text: "Keep this epic aligned to the decision record and evidence index." }],
        history: ["Scope updated by Lena Ortiz", "Target milestone linked"]
      },
      {
        key: "SMN-184", summary: "Complete certification evidence package", type: "Story", status: "Blocked", priority: "Highest",
        assignee: "Imani Brooks", reporter: "Lena Ortiz", sprint: "Sprint 12", epic: "SMN-100", points: 8, due: "04 Sep 2026",
        description: "Assemble, review, and baseline the evidence package for partner-laboratory execution.",
        dependencies: ["SMN-191"], linkedPage: "evidence-index", risk: "RISK-07", milestone: "Evidence review",
        checklist: ["Test artifacts cataloged", "Open evidence gaps assigned", "Package baseline approved"],
        checked: [true, true, false],
        comments: [{ author: "Imani Brooks", time: "2 hours ago", text: "Package is ready to advance once the alternate path is authorized." }],
        history: ["Status changed to Blocked", "Dependency SMN-191 added"]
      },
      {
        key: "SMN-191", summary: "Approve alternate test path", type: "Decision Task", status: "In Review", priority: "Highest",
        assignee: "Lena Ortiz", reporter: "Dana Kessler", sprint: "Sprint 12", epic: "SMN-100", points: 3, due: "26 Aug 2026",
        description: "Obtain governed approval to use an accredited partner laboratory with parallel evidence review.",
        dependencies: [], linkedPage: "alternate-path", risk: "RISK-07", milestone: "Alternate path decision",
        checklist: ["Accreditation verified", "Options analyzed", "Executive approval recorded"],
        checked: [true, true, false],
        comments: [{ author: "Dana Kessler", time: "41 minutes ago", text: "Recommendation is clear. Confirm control-crosswalk ownership before approval." }],
        history: ["Decision DEC-014 linked", "Moved to In Review"]
      },
      {
        key: "SMN-196", summary: "Validate partner laboratory accreditation", type: "Task", status: "Done", priority: "High",
        assignee: "Theo Bennett", reporter: "Imani Brooks", sprint: "Sprint 12", epic: "SMN-100", points: 3, due: "25 Aug 2026",
        description: "Verify the proposed laboratory accreditation scope and current standing.",
        dependencies: [], linkedPage: "alternate-path", risk: "RISK-11", milestone: "Alternate path decision",
        checklist: ["Letter received", "Scope verified", "Evidence attached"],
        checked: [true, true, true], comments: [], history: ["Completed by Theo Bennett"]
      },
      {
        key: "SMN-202", summary: "Map evidence to certification controls", type: "Task", status: "Blocked", priority: "High",
        assignee: "Priya Nair", reporter: "Imani Brooks", sprint: "Sprint 12", epic: "SMN-100", points: 5, due: "01 Sep 2026",
        description: "Complete the traceable control crosswalk for the alternate certification path.",
        dependencies: ["SMN-191"], linkedPage: "control-crosswalk", risk: "RISK-07", milestone: "Evidence review",
        checklist: ["Control list baselined", "Evidence references mapped", "Independent review complete"],
        checked: [true, false, false], comments: [], history: ["Status changed to Blocked"]
      },
      {
        key: "SMN-120", summary: "Integration Readiness", type: "Epic", status: "In Progress", priority: "High",
        assignee: "Marcus Reed", reporter: "Lena Ortiz", sprint: "Portfolio backlog", epic: "—", points: 34, due: "18 Sep 2026",
        description: "Prepare the release for the Integration Readiness Review and close critical evidence gaps.",
        dependencies: ["SMN-100"], linkedPage: "irr-hub", risk: "RISK-14", milestone: "Integration Readiness Review",
        checklist: ["Interfaces verified", "Rehearsal complete", "Readiness evidence approved"],
        checked: [false, false, false], comments: [], history: ["Forecast moved to 23 Sep 2026"]
      },
      {
        key: "SMN-205", summary: "Validate telemetry baseline", type: "Story", status: "Blocked", priority: "High",
        assignee: "Marcus Reed", reporter: "Theo Bennett", sprint: "Sprint 12", epic: "SMN-120", points: 5, due: "03 Sep 2026",
        description: "Validate the telemetry baseline against the alternate-path test configuration.",
        dependencies: ["SMN-191"], linkedPage: "interface-matrix", risk: "RISK-07", milestone: "Integration Readiness Review",
        checklist: ["Baseline loaded", "Variance analyzed", "Results approved"], checked: [true, false, false],
        comments: [], history: ["Dependency SMN-191 added", "Status changed to Blocked"]
      },
      {
        key: "SMN-206", summary: "Complete interface evidence matrix", type: "Task", status: "Blocked", priority: "High",
        assignee: "Theo Bennett", reporter: "Marcus Reed", sprint: "Sprint 12", epic: "SMN-120", points: 5, due: "04 Sep 2026",
        description: "Complete interface-to-evidence traceability for the readiness review.",
        dependencies: ["SMN-191"], linkedPage: "interface-matrix", risk: "RISK-07", milestone: "Integration Readiness Review",
        checklist: ["Interfaces cataloged", "Evidence mapped", "Review complete"], checked: [true, false, false],
        comments: [], history: ["Status changed to Blocked"]
      },
      {
        key: "SMN-207", summary: "Complete security-control mapping", type: "Risk Action", status: "Blocked", priority: "Highest",
        assignee: "Evan Kim", reporter: "Imani Brooks", sprint: "Sprint 12", epic: "SMN-120", points: 5, due: "04 Sep 2026",
        description: "Map security controls to the partner-laboratory evidence package.",
        dependencies: ["SMN-191"], linkedPage: "control-crosswalk", risk: "RISK-07", milestone: "Evidence review",
        checklist: ["Controls scoped", "Mapping drafted", "Cyber review complete"], checked: [true, false, false],
        comments: [], history: ["Status changed to Blocked"]
      },
      {
        key: "SMN-214", summary: "Schedule readiness-review rehearsal", type: "Task", status: "Blocked", priority: "High",
        assignee: "Lena Ortiz", reporter: "Marcus Reed", sprint: "Sprint 12", epic: "SMN-120", points: 3, due: "08 Sep 2026",
        description: "Reserve participants and schedule the readiness-review rehearsal against the restored plan.",
        dependencies: ["SMN-191"], linkedPage: "rehearsal-checklist", risk: "RISK-07", milestone: "Integration Readiness Review",
        checklist: ["Participants identified", "Agenda drafted", "Calendar released"], checked: [true, true, false],
        comments: [], history: ["Status changed to Blocked"]
      },
      {
        key: "SMN-216", summary: "Close timing-variance defect", type: "Bug", status: "In Progress", priority: "High",
        assignee: "Marcus Reed", reporter: "Theo Bennett", sprint: "Sprint 12", epic: "SMN-120", points: 5, due: "02 Sep 2026",
        description: "Resolve the timing variance observed in the most recent disconnected-mode run.",
        dependencies: [], linkedPage: "operational-scenario", risk: "RISK-14", milestone: "Integration Readiness Review",
        checklist: ["Root cause confirmed", "Fix merged", "Regression passed"], checked: [true, true, false],
        comments: [], history: ["Moved to In Progress"]
      },
      {
        key: "SMN-219", summary: "Publish rehearsal checklist", type: "Task", status: "Ready", priority: "Medium",
        assignee: "Priya Nair", reporter: "Lena Ortiz", sprint: "Sprint 12", epic: "SMN-120", points: 2, due: "05 Sep 2026",
        description: "Publish the governed review-rehearsal checklist and assign evidence owners.",
        dependencies: [], linkedPage: "rehearsal-checklist", risk: "RISK-14", milestone: "Integration Readiness Review",
        checklist: ["Template selected", "Owners assigned", "Page published"], checked: [true, true, false],
        comments: [], history: ["Added to Sprint 12"]
      },
      {
        key: "SMN-140", summary: "Operational Demonstration", type: "Epic", status: "To Do", priority: "Medium",
        assignee: "Lena Ortiz", reporter: "Dana Kessler", sprint: "Backlog", epic: "—", points: 34, due: "22 Oct 2026",
        description: "Plan and execute the controlled operational demonstration for executive stakeholders.",
        dependencies: ["SMN-120"], linkedPage: "operational-scenario", risk: "RISK-14", milestone: "Operational demonstration",
        checklist: ["Scenario approved", "Participants confirmed", "Dry run complete"], checked: [false, false, false],
        comments: [], history: ["Epic created"]
      },
      {
        key: "SMN-232", summary: "Run disconnected-mode scenario", type: "Story", status: "To Do", priority: "Medium",
        assignee: "Theo Bennett", reporter: "Lena Ortiz", sprint: "Backlog", epic: "SMN-140", points: 8, due: "09 Oct 2026",
        description: "Execute and document the final disconnected-mode operational scenario.",
        dependencies: ["SMN-216"], linkedPage: "operational-scenario", risk: "RISK-14", milestone: "Operational demonstration",
        checklist: ["Scenario loaded", "Run executed", "Evidence published"], checked: [false, false, false],
        comments: [], history: ["Added to backlog"]
      },
      {
        key: "SMN-238", summary: "Finalize sponsor briefing", type: "Task", status: "To Do", priority: "Medium",
        assignee: "Lena Ortiz", reporter: "Dana Kessler", sprint: "Backlog", epic: "SMN-140", points: 3, due: "16 Oct 2026",
        description: "Finalize the sponsor briefing from governed status, decision, risk, and evidence data.",
        dependencies: ["SMN-232"], linkedPage: "sponsor-briefing", risk: "RISK-14", milestone: "Operational demonstration",
        checklist: ["Narrative drafted", "Metrics verified", "Sponsor review complete"], checked: [false, false, false],
        comments: [], history: ["Added to backlog"]
      }
    ],
    pages: [
      { id: "program-hub", title: "Program Hub", parent: null, depth: 0, owner: "Priya Nair", updated: "Today", version: 12, summary: "Purpose, outcomes, contacts, current priorities, and governed links for Sentinel Mesh Node.", content: "The Sentinel Mesh Node space is the governed home for delivery context, decisions, evidence, and team working agreements." },
      { id: "delivery-plan", title: "Delivery Plan", parent: null, depth: 0, owner: "Lena Ortiz", updated: "Yesterday", version: 9, summary: "Release scope, milestones, dependencies, and delivery assumptions.", content: "Release 1 is organized around certification recovery, integration readiness, and the controlled operational demonstration." },
      { id: "cert-strategy", title: "Certification Strategy", parent: null, depth: 0, owner: "Imani Brooks", updated: "Today", version: 6, summary: "Certification approach, evidence ownership, and review gates.", content: "Certification uses traceable evidence, independent review, and a governed decision record for any alternate execution path." },
      { id: "alternate-path", title: "Alternate Path Decision Brief", parent: "cert-strategy", depth: 1, owner: "Priya Nair", updated: "41 min ago", version: 7, summary: "Problem, options, recommendation, approval, evidence, and linked work for DEC-014.", content: "The primary certification laboratory is unavailable through 11 September, threatening the 18 September Integration Readiness Review by five days." },
      { id: "evidence-index", title: "Evidence Index", parent: "cert-strategy", depth: 1, owner: "Imani Brooks", updated: "2 hours ago", version: 14, summary: "Authoritative catalog of certification evidence and review status.", content: "The index maps each required evidence artifact to its owner, review state, baseline, and linked control." },
      { id: "control-crosswalk", title: "Control Crosswalk", parent: "cert-strategy", depth: 1, owner: "Evan Kim", updated: "Yesterday", version: 3, summary: "Security and certification controls traced to evidence.", content: "The crosswalk establishes bidirectional traceability between controls and approved evidence artifacts." },
      { id: "irr-hub", title: "Integration Readiness Review", parent: null, depth: 0, owner: "Marcus Reed", updated: "Today", version: 8, summary: "Readiness criteria, agenda, reviewers, and evidence links.", content: "The readiness review confirms interfaces, evidence, staffing, and residual risk are acceptable for release execution." },
      { id: "rehearsal-checklist", title: "Rehearsal Checklist", parent: "irr-hub", depth: 1, owner: "Priya Nair", updated: "Yesterday", version: 4, summary: "Facilitator checklist and evidence-owner assignments.", content: "Use this checklist to conduct the readiness-review rehearsal and capture every action in accountable work." },
      { id: "interface-matrix", title: "Interface Evidence Matrix", parent: "irr-hub", depth: 1, owner: "Theo Bennett", updated: "Today", version: 5, summary: "Interfaces mapped to verification evidence and open actions.", content: "Each critical interface is traced to its current verification result, evidence record, and accountable owner." },
      { id: "release-1", title: "Release 1", parent: null, depth: 0, owner: "Lena Ortiz", updated: "2 days ago", version: 7, summary: "Release intent, included scope, readiness, and acceptance.", content: "Release 1 delivers the capabilities required for the controlled operational demonstration." },
      { id: "operational-scenario", title: "Operational Scenario", parent: "release-1", depth: 1, owner: "Theo Bennett", updated: "2 days ago", version: 6, summary: "Controlled scenario, success criteria, constraints, and data collection.", content: "The scenario evaluates mesh behavior in connected and disconnected modes under controlled conditions." },
      { id: "sponsor-briefing", title: "Sponsor Briefing", parent: "release-1", depth: 1, owner: "Lena Ortiz", updated: "3 days ago", version: 2, summary: "Leadership narrative generated from governed program data.", content: "This briefing draws delivery, risk, decisions, evidence, and forecast facts from the same operating record." },
      { id: "working-agreements", title: "Working Agreements", parent: null, depth: 0, owner: "Priya Nair", updated: "1 week ago", version: 4, summary: "Team norms, workflow expectations, and review cadence.", content: "Every decision, work item, and evidence artifact is linked, owned, and reviewed in the suite." }
    ],
    pageComments: {
      "alternate-path": [
        { author: "Dana Kessler", time: "41 min ago", text: "Recommendation is supportable. Confirm the control crosswalk date." },
        { author: "Evan Kim", time: "1 hour ago", text: "Cybersecurity can complete the crosswalk by 1 September." }
      ]
    },
    pageVersions: {
      "alternate-path": [
        { version: 7, author: "Priya Nair", time: "Today, 09:12", note: "Accreditation evidence added" },
        { version: 6, author: "Lena Ortiz", time: "Yesterday, 16:44", note: "Recommendation revised" },
        { version: 5, author: "Priya Nair", time: "Yesterday, 11:20", note: "Options added" },
        { version: 4, author: "Imani Brooks", time: "22 Aug, 14:08", note: "Initial review draft" }
      ]
    },
    decisions: [
      { id: "DEC-014", title: "Authorize alternate certification path", status: "Pending", owner: "Lena Ortiz", approver: "Dana Kessler", due: "26 Aug 2026", recommendation: "Option B", page: "alternate-path", linkedIssue: "SMN-191", rationale: "Use the accredited partner laboratory with parallel evidence review to restore the 18 September forecast." },
      { id: "DEC-011", title: "Baseline Release 1 operational scenario", status: "Approved", owner: "Theo Bennett", approver: "Lena Ortiz", due: "18 Aug 2026", recommendation: "Scenario 3", page: "operational-scenario", linkedIssue: "SMN-232", rationale: "Scenario 3 best tests the intended connected and disconnected behaviors." },
      { id: "DEC-008", title: "Adopt shared evidence taxonomy", status: "Approved", owner: "Priya Nair", approver: "Imani Brooks", due: "04 Aug 2026", recommendation: "Taxonomy v2", page: "evidence-index", linkedIssue: "SMN-184", rationale: "A shared taxonomy reduces duplicate evidence handling and improves traceability." },
      { id: "DEC-003", title: "Select initial mesh-node configuration", status: "Superseded", owner: "Marcus Reed", approver: "Lena Ortiz", due: "12 Jul 2026", recommendation: "Configuration A", page: "delivery-plan", linkedIssue: "SMN-120", rationale: "The initial configuration was replaced by the Release 1 baseline." }
    ],
    risks: [
      { id: "RISK-07", title: "Certification decision delay", score: 16, level: "High", owner: "Lena Ortiz", response: "Decision required by 26 August", issue: "SMN-191" },
      { id: "RISK-11", title: "Laboratory availability", score: 9, level: "Moderate", owner: "Imani Brooks", response: "Maintain partner-laboratory reservation", issue: "SMN-196" },
      { id: "RISK-14", title: "Interface regression", score: 8, level: "Moderate", owner: "Marcus Reed", response: "Close timing-variance defect before rehearsal", issue: "SMN-216" }
    ],
    milestones: [
      { name: "Alternate path decision", target: "26 Aug", forecast: "26 Aug", status: "At risk", issue: "SMN-191" },
      { name: "Evidence review", target: "04 Sep", forecast: "06 Sep", status: "At risk", issue: "SMN-184" },
      { name: "Integration Readiness Review", target: "18 Sep", forecast: "23 Sep", status: "At risk", issue: "SMN-120" },
      { name: "Operational demonstration", target: "22 Oct", forecast: "22 Oct", status: "On track", issue: "SMN-140" }
    ],
    notifications: [
      { id: 1, unread: true, kind: "decision", title: "DEC-014 is ready for approval", detail: "Dana Kessler requested confirmation of crosswalk ownership.", time: "41 min ago", target: "DEC-014" },
      { id: 2, unread: true, kind: "issue", title: "SMN-184 remains blocked", detail: "The evidence package is waiting on the alternate-path decision.", time: "2 hours ago", target: "SMN-184" },
      { id: 3, unread: true, kind: "page", title: "Alternate Path Decision Brief updated", detail: "Priya Nair added the accreditation evidence.", time: "Today, 09:12", target: "alternate-path" },
      { id: 4, unread: false, kind: "issue", title: "SMN-196 completed", detail: "Partner laboratory accreditation was verified.", time: "Yesterday", target: "SMN-196" }
    ],
    audit: [
      { time: "Today, 09:12", actor: "Priya Nair", action: "Published page version 7", object: "Alternate Path Decision Brief" },
      { time: "Today, 08:46", actor: "Imani Brooks", action: "Added evidence", object: "Partner Laboratory Accreditation Letter.pdf" },
      { time: "Yesterday, 16:44", actor: "Lena Ortiz", action: "Updated recommendation", object: "DEC-014" },
      { time: "Yesterday, 15:20", actor: "Theo Bennett", action: "Completed work item", object: "SMN-196" }
    ],
    automations: [
      { id: "rule-1", name: "Decision unblocks dependent work", detail: "When an approved decision closes a blocker, move dependent items to Ready and notify owners.", enabled: true, runs: 18, last: "2 days ago" },
      { id: "rule-2", name: "Overdue evidence escalation", detail: "Alert the certification lead when required evidence is overdue by one business day.", enabled: true, runs: 7, last: "Yesterday" },
      { id: "rule-3", name: "Leadership brief refresh", detail: "Refresh the leadership brief when milestone, risk, or decision facts change.", enabled: true, runs: 32, last: "41 min ago" },
      { id: "rule-4", name: "Draft-page review reminder", detail: "Remind page owners when a governed page remains in draft for five days.", enabled: false, runs: 0, last: "Never" }
    ]
  };

  let DemoState = clone(FIXTURE);
  let draggedIssueKey = null;
  let migrationTimer = null;
  const appContent = document.getElementById("appContent");
  const detailDrawer = document.getElementById("detailDrawer");
  const drawerScrim = document.getElementById("drawerScrim");
  const modalLayer = document.getElementById("modalLayer");
  const globalSearch = document.getElementById("globalSearch");
  const searchResults = document.getElementById("searchResults");
  const profileMenu = document.getElementById("profileMenu");
  const sidebar = document.getElementById("sidebar");
  const sidebarScrim = document.getElementById("sidebarScrim");

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function esc(value) {
    return String(value ?? "").replace(/[&<>"']/g, (char) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
    })[char]);
  }

  function slug(value) {
    return String(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  function initials(name) {
    return String(name).split(/\s+/).map((part) => part[0]).join("").slice(0, 2).toUpperCase();
  }

  function getPerson(name) {
    return DemoState.people.find((person) => person.name === name) || { initials: initials(name), color: "slate", role: "Team member", team: "Program Delivery", capacity: 0 };
  }

  function avatar(name, sizeClass = "") {
    const person = getPerson(name);
    return `<span class="avatar ${person.color} ${sizeClass}" aria-hidden="true">${esc(person.initials)}</span>`;
  }

  function statusBadge(status) {
    return `<span class="status status-${slug(status)}">${esc(status)}</span>`;
  }

  function priorityBadge(priority) {
    return `<span class="priority priority-${slug(priority)}">↑ ${esc(priority)}</span>`;
  }

  function healthBadge(health) {
    return `<span class="health-pill health-${slug(health.split(",")[0])}">● ${esc(health)}</span>`;
  }

  function issueByKey(key) {
    return DemoState.issues.find((issue) => issue.key === key);
  }

  function pageById(id) {
    return DemoState.pages.find((page) => page.id === id);
  }

  function decisionById(id) {
    return DemoState.decisions.find((decision) => decision.id === id);
  }

  function riskById(id) {
    return DemoState.risks.find((risk) => risk.id === id);
  }

  function unreadCount() {
    return DemoState.notifications.filter((notification) => notification.unread).length;
  }

  function blockedCount() {
    return DemoState.issues.filter((issue) => issue.status === "Blocked").length;
  }

  function currentConfidence() {
    return DemoState.decisionApproved ? 86 : 72;
  }

  function scheduleVariance() {
    return DemoState.decisionApproved ? 0 : 5;
  }

  function currentRiskScore() {
    return riskById("RISK-07").score;
  }

  function nextPageVersion(pageId) {
    const page = pageById(pageId);
    const recorded = (DemoState.pageVersions[pageId] || []).map((item) => Number(item.version) || 0);
    return Math.max(Number(page?.version) || 0, ...recorded, 0) + 1;
  }

  function toast(title, detail = "", type = "") {
    const region = document.getElementById("toastRegion");
    const node = document.createElement("div");
    node.className = `toast ${type}`;
    node.innerHTML = `<span></span><div><strong>${esc(title)}</strong>${detail ? `<span>${esc(detail)}</span>` : ""}</div><button type="button" aria-label="Dismiss notification">×</button>`;
    node.querySelector("button").addEventListener("click", () => node.remove());
    region.appendChild(node);
    window.setTimeout(() => node.remove(), 5200);
  }

  function announce(message) {
    document.getElementById("liveRegion").textContent = message;
  }

  function pageHeader(eyebrow, title, description, actions = "", breadcrumbs = "") {
    return `
      ${breadcrumbs ? `<div class="breadcrumbs">${breadcrumbs}</div>` : ""}
      <header class="page-header">
        <div class="page-title-wrap">
          <div class="eyebrow">${esc(eyebrow)}</div>
          <h1>${esc(title)}</h1>
          <p>${esc(description)}</p>
        </div>
        <div class="page-actions">${actions}</div>
      </header>
    `;
  }

  function metric(label, value, caption, tone = "") {
    return `<article class="metric-card ${tone}"><div class="metric-label">${esc(label)}</div><div class="metric-value">${esc(value)}</div><div class="metric-caption">${caption}</div></article>`;
  }

  function progress(label, value, detail, tone = "") {
    return `
      <div class="progress-row">
        <div class="progress-meta"><span>${esc(label)}</span><span>${esc(detail)}</span></div>
        <div class="progress-track ${tone}"><span style="width:${Math.max(0, Math.min(100, value))}%"></span></div>
      </div>
    `;
  }

  function personCell(name) {
    return `<span class="person-cell">${avatar(name, "table-avatar")}<span>${esc(name)}</span></span>`;
  }

  function issueRows(issues) {
    return issues.map((issue) => `
      <tr data-issue="${esc(issue.key)}" tabindex="0">
        <td class="key-cell">${esc(issue.key)}</td>
        <td class="summary-cell">${esc(issue.summary)}</td>
        <td><span class="type-badge tag">${esc(issue.type)}</span></td>
        <td>${statusBadge(issue.status)}</td>
        <td>${priorityBadge(issue.priority)}</td>
        <td>${personCell(issue.assignee)}</td>
        <td>${esc(issue.due)}</td>
      </tr>
    `).join("");
  }

  function renderHome() {
    const blocked = blockedCount();
    const confidence = currentConfidence();
    const variance = scheduleVariance();
    const myIssues = DemoState.issues.filter((issue) => ["Lena Ortiz", "Maya Okafor"].includes(issue.assignee) && issue.status !== "Done").slice(0, 4);
    return `<div class="page page-enter">
      ${pageHeader(
        "Demonstration Portfolio",
        "Good morning, Maya",
        "Work, knowledge, decisions, and reporting in one governed system.",
        `<button class="button" type="button" data-view="leadership">Open leadership view</button><button class="button primary" type="button" data-action="open-create">Create work</button>`
      )}
      <section class="metric-grid" aria-label="Portfolio summary">
        ${metric("Portfolio health", DemoState.decisionApproved ? "2 green · 1 amber" : "2 green · 1 amber", DemoState.decisionApproved ? '<span class="delta good">Recovering</span> after alternate-path approval' : '<span class="delta bad">1 intervention</span> can change the outcome', "warning")}
        ${metric("Release confidence", confidence + "%", DemoState.decisionApproved ? '<span class="delta good">+14 points</span> after decision' : "SMN 1.0 · leadership estimate", confidence >= 80 ? "success" : "warning")}
        ${metric("Blocked work", blocked, DemoState.decisionApproved ? '<span class="delta good">6 items resumed</span>' : "All trace to DEC-014", blocked ? "danger" : "success")}
        ${metric("Knowledge coverage", "94%", "27 of 29 priority items linked", "success")}
      </section>

      <div class="home-grid">
        <div class="stack">
          <section class="panel">
            <div class="panel-header"><div><h2>Where intervention changes the outcome</h2></div><button class="section-link" type="button" data-view="decisions">Decision register →</button></div>
            <div>
              <button class="attention-item" type="button" data-decision="DEC-014">
                <span class="attention-marker ${DemoState.decisionApproved ? "" : "danger"}"></span>
                <span class="attention-copy"><strong>${DemoState.decisionApproved ? "Alternate certification path approved" : "Approve the alternate certification path"}</strong><span>${DemoState.decisionApproved ? "Six work items resumed; forecast restored to 18 September." : "One governed decision releases six items and protects the 18 September review."}</span></span>
                <span class="attention-meta">${DemoState.decisionApproved ? statusBadge("Approved") : statusBadge("Pending")}</span>
              </button>
              <button class="attention-item" type="button" data-issue="SMN-216">
                <span class="attention-marker"></span>
                <span class="attention-copy"><strong>Close the timing-variance defect</strong><span>Regression verification is the remaining technical path to rehearsal readiness.</span></span>
                <span class="attention-meta">Due 02 Sep</span>
              </button>
              <button class="attention-item" type="button" data-person="Marcus Reed">
                <span class="attention-marker"></span>
                <span class="attention-copy"><strong>Engineering manager capacity is constrained</strong><span>Marcus Reed is at 91% planned capacity across integration and defect recovery.</span></span>
                <span class="attention-meta">91% load</span>
              </button>
            </div>
          </section>

          <section>
            <div class="section-heading"><div><h2>My work</h2><p>Assigned and accountable items across the portfolio.</p></div><button class="section-link" type="button" data-view="my-work">View all →</button></div>
            <div class="data-table-wrap">
              <table class="data-table"><thead><tr><th>Key</th><th>Work item</th><th>Type</th><th>Status</th><th>Priority</th><th>Owner</th><th>Due</th></tr></thead><tbody>${issueRows(myIssues)}</tbody></table>
            </div>
          </section>
        </div>

        <div class="stack">
          <section class="card surface-dark">
            <div class="eyebrow" style="color:var(--sky)">Current sprint</div>
            <h2 style="font-size:16px">Sprint 12 · Certification Recovery</h2>
            <p style="font-size:10px">Approve the alternate path and restore integration work.</p>
            <div style="margin-top:18px">
              ${progress("Story points", 56, "23 of 41 complete")}
              ${progress("Sprint time", 61, "7 of 12 days")}
              ${progress("Scope unblocked", DemoState.decisionApproved ? 100 : 54, DemoState.decisionApproved ? "0 blocked" : "6 blocked", DemoState.decisionApproved ? "success" : "warning")}
            </div>
            <button class="button small" style="margin-top:18px;background:transparent;color:var(--alabaster);border-color:rgba(221,221,221,.35)" type="button" data-view="board">Open sprint board</button>
          </section>
          <section class="panel">
            <div class="panel-header"><h2>Recent governed activity</h2><button class="section-link" type="button" data-view="inbox">Inbox →</button></div>
            <div class="panel-body"><ul class="activity-list">
              ${DemoState.audit.slice(0, 5).map((event) => `<li class="activity-item"><span class="activity-icon">↺</span><span class="activity-copy"><strong>${esc(event.actor)}</strong> ${esc(event.action.toLowerCase())} <strong>${esc(event.object)}</strong><time>${esc(event.time)}</time></span></li>`).join("")}
            </ul></div>
          </section>
        </div>
      </div>
    </div>`;
  }

  function renderMyWork() {
    let issues = DemoState.issues.filter((issue) => ["Lena Ortiz", "Maya Okafor"].includes(issue.assignee));
    issues = filterIssues(issues);
    return `<div class="page page-enter">
      ${pageHeader("Personal workspace", "My work", "Assigned, reported, and watched work—without losing the knowledge or decisions behind it.", `<button class="button" type="button" data-action="save-view">Save view</button><button class="button primary" type="button" data-action="open-create">Create work item</button>`)}
      ${issueToolbar()}
      <div class="data-table-wrap">
        <table class="data-table"><thead><tr><th>Key</th><th>Work item</th><th>Type</th><th>Status</th><th>Priority</th><th>Owner</th><th>Due</th></tr></thead><tbody>${issueRows(issues)}</tbody></table>
      </div>
    </div>`;
  }

  function renderInbox() {
    const notifications = DemoState.notifications;
    return `<div class="page page-enter">
      ${pageHeader("Personal workspace", "Inbox", "Decisions, mentions, assignments, page updates, and automation events in one actionable queue.", `<button class="button" type="button" data-action="mark-all-read">Mark all read</button>`)}
      <section class="panel">
        <div class="panel-header"><h2>Notifications</h2><span class="tag">${unreadCount()} unread</span></div>
        <ul class="notification-list">
          ${notifications.map((item) => `
            <li class="notification-item" style="padding:0">
              <button class="attention-item" type="button" data-notification="${item.id}">
                <span class="attention-marker ${item.unread ? (item.kind === "decision" ? "danger" : "") : ""}" style="opacity:${item.unread ? 1 : .24}"></span>
                <span class="attention-copy"><strong>${esc(item.title)}</strong><span>${esc(item.detail)}</span></span>
                <span class="attention-meta">${esc(item.time)}${item.unread ? "<br><strong>New</strong>" : ""}</span>
              </button>
            </li>
          `).join("")}
        </ul>
      </section>
    </div>`;
  }

  function renderProjects() {
    if (DemoState.projectMode === "overview") return renderProjectOverview();
    return `<div class="page page-enter">
      ${pageHeader("Demonstration Portfolio", "Projects", "Plan and govern delivery work while keeping every decision, page, risk, and briefing fact connected.", `<button class="button primary" type="button" data-action="open-create">Create project</button>`)}
      <div class="project-grid">
        ${DemoState.projects.map((project) => `
          <article class="card project-card" data-project="${project.key}" tabindex="0">
            <div class="project-card-header"><div class="project-key">${esc(project.key)} · Delivery project</div><h2>${esc(project.name)}</h2></div>
            <div class="project-card-body">
              <p>${esc(project.description)}</p>
              <div style="margin-bottom:14px">${healthBadge(project.health)}</div>
              <div class="project-card-metrics">
                <div class="project-card-metric"><strong>${project.completion}%</strong><span>Complete</span></div>
                <div class="project-card-metric"><strong>${project.confidence}%</strong><span>Confidence</span></div>
                <div class="project-card-metric"><strong>${esc(project.release.split(" ")[0] + " " + project.release.split(" ")[1])}</strong><span>Release</span></div>
              </div>
            </div>
          </article>
        `).join("")}
      </div>
    </div>`;
  }

  function renderProjectOverview() {
    const project = DemoState.projects[0];
    project.confidence = currentConfidence();
    const recovering = DemoState.decisionApproved;
    return `<div class="page page-enter">
      ${pageHeader(
        "SMN · Delivery project",
        "Sentinel Mesh Node",
        "A single operating record for scope, delivery, knowledge, decisions, risk, evidence, and leadership status.",
        `<button class="button" type="button" data-view="spaces">Open project space</button><button class="button primary" type="button" data-view="board">Open board</button>`,
        '<button type="button" data-action="all-projects">Projects</button><span>›</span><span>Sentinel Mesh Node</span>'
      )}
      <section class="card objective-card">
        <div class="eyebrow">Program objective</div>
        <blockquote>“${esc(project.objective)}”</blockquote>
        <div style="display:flex;gap:8px;margin-top:18px">${healthBadge(recovering ? "Amber, recovering" : "Amber")}<span class="tag" style="background:rgba(255,255,255,.08);border-color:rgba(221,221,221,.2);color:var(--platinum)">Owner · Lena Ortiz</span></div>
      </section>
      <section class="metric-grid" style="margin-top:14px">
        ${metric("Release progress", "64%", "SMN 1.0 · target 22 Oct")}
        ${metric("Release confidence", currentConfidence() + "%", recovering ? '<span class="delta good">+14 points</span>' : "Leadership estimate", recovering ? "success" : "warning")}
        ${metric("Schedule variance", (scheduleVariance() > 0 ? "+" : "") + scheduleVariance() + " days", recovering ? '<span class="delta good">Target restored</span>' : "IRR forecast vs. target", recovering ? "success" : "danger")}
        ${metric("Open risk exposure", currentRiskScore() + "/25", recovering ? "RISK-07 reduced to moderate" : "RISK-07 · decision delay", recovering ? "success" : "danger")}
      </section>
      <div class="project-overview-grid" style="margin-top:16px">
        <div class="stack">
          <section class="panel">
            <div class="panel-header"><h2>Milestones</h2><button class="section-link" type="button" data-view="timeline">Open timeline →</button></div>
            <div class="panel-body"><ul class="milestone-list">
              ${DemoState.milestones.map((item) => `<li class="milestone-item"><span class="milestone-dot ${item.status === "At risk" ? "warning" : ""}"></span><span class="milestone-copy"><strong>${esc(item.name)}</strong><span>Target ${esc(item.target)} · Forecast ${esc(item.forecast)}</span></span>${item.status === "At risk" ? statusBadge(recovering && item.name !== "Evidence review" ? "In Progress" : "Pending") : statusBadge("Ready")}</li>`).join("")}
            </ul></div>
          </section>
          <section class="panel">
            <div class="panel-header"><h2>Delivery progress</h2><span class="tag">Sprint 12</span></div>
            <div class="panel-body">
              ${progress("Certification and Assurance", 58, "21 of 36 points", recovering ? "success" : "warning")}
              ${progress("Integration Readiness", 67, "29 of 43 points")}
              ${progress("Operational Demonstration", 32, "11 of 34 points")}
            </div>
          </section>
        </div>
        <div class="stack">
          <section class="panel">
            <div class="panel-header"><h2>Top risks</h2><button class="section-link" type="button" data-view="reports">Risk report →</button></div>
            <div class="panel-body">
              ${DemoState.risks.map((risk) => `<div class="risk-row" data-risk="${risk.id}" tabindex="0"><span class="risk-copy"><strong>${esc(risk.id)} · ${esc(risk.title)}</strong><span>${esc(risk.owner)}</span></span><span class="risk-score">${risk.score}/25</span>${statusBadge(risk.score > 12 ? "Blocked" : "In Progress")}</div>`).join("")}
            </div>
          </section>
          <section class="card">
            <div class="section-heading" style="margin-top:0"><div><h2>Connected knowledge</h2><p>Governed context for delivery work.</p></div></div>
            ${["program-hub", "alternate-path", "irr-hub"].map((id) => { const page = pageById(id); return `<button class="linked-object" type="button" data-page="${id}"><span class="linked-icon">PG</span><span class="linked-copy"><strong>${esc(page.title)}</strong><span>v${page.version} · ${esc(page.updated)}</span></span></button>`; }).join("")}
          </section>
        </div>
      </div>
    </div>`;
  }

  function issueToolbar() {
    const people = ["All", ...new Set(DemoState.issues.map((issue) => issue.assignee))];
    return `<div class="data-toolbar">
      <div class="toolbar-field toolbar-search"><label for="issueSearch">Find</label><input id="issueSearch" type="search" value="${esc(DemoState.issueFilter.text)}" placeholder="Key or summary" data-filter="text"></div>
      <div class="toolbar-field"><label for="statusFilter">Status</label><select id="statusFilter" data-filter="status">${["All", "To Do", "Ready", "In Progress", "In Review", "Blocked", "Done"].map((value) => `<option ${DemoState.issueFilter.status === value ? "selected" : ""}>${esc(value)}</option>`).join("")}</select></div>
      <div class="toolbar-field"><label for="assigneeFilter">Owner</label><select id="assigneeFilter" data-filter="assignee">${people.map((value) => `<option ${DemoState.issueFilter.assignee === value ? "selected" : ""}>${esc(value)}</option>`).join("")}</select></div>
      <button class="button small" type="button" data-action="clear-filters">Clear</button>
    </div>`;
  }

  function filterIssues(input) {
    const query = DemoState.issueFilter.text.trim().toLowerCase();
    return input.filter((issue) => {
      const textMatch = !query || `${issue.key} ${issue.summary} ${issue.type} ${issue.assignee}`.toLowerCase().includes(query);
      const statusMatch = DemoState.issueFilter.status === "All" || issue.status === DemoState.issueFilter.status;
      const assigneeMatch = DemoState.issueFilter.assignee === "All" || issue.assignee === DemoState.issueFilter.assignee;
      return textMatch && statusMatch && assigneeMatch;
    });
  }

  function renderBacklog() {
    const sprint = DemoState.issues.filter((issue) => issue.sprint === "Sprint 12");
    const backlog = DemoState.issues.filter((issue) => issue.sprint === "Backlog");
    const portfolio = DemoState.issues.filter((issue) => issue.sprint === "Portfolio backlog");
    return `<div class="page page-enter">
      ${pageHeader("SMN · Work management", "Backlog", "Shape scope, plan Sprint 12, manage estimates, and keep delivery dependencies visible.", `<button class="button" type="button" data-action="start-sprint">Sprint settings</button><button class="button primary" type="button" data-action="open-create">Create work item</button>`)}
      <section class="panel sprint-panel">
        <div class="sprint-header"><span class="sprint-title"><h2>Sprint 12 · Certification Recovery</h2><span>24 Aug–4 Sep · 41 points · ${blockedCount()} blocked</span></span><span style="display:flex;gap:8px"><span class="tag">Active sprint</span><button class="button small" type="button" data-view="board">Open board</button></span></div>
        <div>${backlogRows(sprint, false)}</div>
      </section>
      <section class="panel sprint-panel">
        <div class="sprint-header"><span class="sprint-title"><h2>Product backlog</h2><span>Prioritized future scope</span></span><span class="tag">${backlog.reduce((sum, issue) => sum + issue.points, 0)} points</span></div>
        <div>${backlogRows(backlog, true)}</div>
      </section>
      <section class="panel sprint-panel">
        <div class="sprint-header"><span class="sprint-title"><h2>Epics</h2><span>Outcome-oriented delivery containers</span></span><span class="tag">3 epics</span></div>
        <div>${backlogRows(portfolio, false)}</div>
      </section>
    </div>`;
  }

  function backlogRows(issues, allowMove) {
    return issues.map((issue) => `
      <div class="backlog-row" data-issue="${issue.key}" tabindex="0">
        <span>☷</span><span class="backlog-key">${esc(issue.key)}</span><span class="backlog-summary">${esc(issue.summary)}</span><span>${statusBadge(issue.status)}</span><span>${avatar(issue.assignee, "table-avatar")}</span><span class="story-points" title="Story points">${issue.points}</span>
        ${allowMove ? `<button class="sr-only" type="button" data-action="move-to-sprint" data-key="${issue.key}">Move to Sprint 12</button>` : ""}
      </div>
    `).join("");
  }

  function renderBoard() {
    const order = ["Ready", "In Progress", "In Review", "Blocked", "Done"];
    const sprintIssues = DemoState.issues.filter((issue) => issue.sprint === "Sprint 12");
    return `<div class="page page-enter">
      ${pageHeader("SMN · Sprint 12", "Delivery board", "Move work through the configured workflow. Drag cards or use the arrow controls.", `<button class="button" type="button" data-view="backlog">Backlog</button><button class="button primary" type="button" data-action="open-create">Create work item</button>`)}
      <div class="data-toolbar">
        <span class="tag">Sprint 12 · 24 Aug–4 Sep</span><span class="tag">Goal · Certification recovery</span><span class="tag">23 / 41 points</span><span class="tag">${blockedCount()} blocked</span>
      </div>
      <div class="board-scroll"><div class="board">
        ${order.map((status, columnIndex) => {
          const items = sprintIssues.filter((issue) => issue.status === status || (status === "Ready" && issue.status === "To Do"));
          return `<section class="board-column" data-board-status="${status}" aria-label="${status} column">
            <div class="board-column-header"><span>${esc(status)}</span><span class="board-count">${items.length}</span></div>
            ${items.map((issue) => `
              <article class="board-card priority-${slug(issue.priority)}" draggable="true" data-drag-issue="${issue.key}" data-issue="${issue.key}" tabindex="0">
                <div class="board-card-key"><span>${esc(issue.key)} · ${esc(issue.type)}</span><span>${issue.points} pt</span></div>
                <h3>${esc(issue.summary)}</h3>
                <div class="board-card-meta">${avatar(issue.assignee, "table-avatar")}<span class="board-card-controls">
                  <button class="board-move" type="button" data-action="move-card" data-key="${issue.key}" data-direction="-1" aria-label="Move ${issue.key} left" ${columnIndex === 0 ? "disabled" : ""}>←</button>
                  <button class="board-move" type="button" data-action="move-card" data-key="${issue.key}" data-direction="1" aria-label="Move ${issue.key} right" ${columnIndex === order.length - 1 ? "disabled" : ""}>→</button>
                </span></div>
              </article>
            `).join("")}
          </section>`;
        }).join("")}
      </div></div>
    </div>`;
  }

  function renderTimeline() {
    const scale = DemoState.timelineScale;
    const labels = scale === "months"
      ? ["Aug", "", "Sep", "", "Oct", "", "Nov", ""]
      : ["24 Aug", "31 Aug", "07 Sep", "14 Sep", "21 Sep", "28 Sep", "05 Oct", "12 Oct"];
    const rows = [
      { issue: "SMN-100", label: "Certification & Assurance", start: 0, span: DemoState.decisionApproved ? 3 : 4, tone: DemoState.decisionApproved ? "success" : "warning" },
      { issue: "SMN-191", label: "Alternate path decision", start: 0, span: 1, tone: DemoState.decisionApproved ? "success" : "danger" },
      { issue: "SMN-184", label: "Evidence package", start: 1, span: 2, tone: DemoState.decisionApproved ? "success" : "warning" },
      { issue: "SMN-120", label: "Integration Readiness", start: 2, span: DemoState.decisionApproved ? 3 : 4, tone: "" },
      { issue: "SMN-216", label: "Timing-variance defect", start: 2, span: 2, tone: "dark" },
      { issue: "SMN-140", label: "Operational Demonstration", start: 5, span: 3, tone: "" },
      { issue: "SMN-232", label: "Disconnected-mode scenario", start: 5, span: 2, tone: "dark" }
    ];
    return `<div class="page page-enter">
      ${pageHeader("SMN · Plan", "Timeline", "See epics, work, milestones, dependencies, and schedule exposure in one delivery view.", `<div class="segmented" aria-label="Timeline scale"><button class="${scale === "weeks" ? "active" : ""}" type="button" data-action="set-timeline-scale" data-scale="weeks">Weeks</button><button class="${scale === "months" ? "active" : ""}" type="button" data-action="set-timeline-scale" data-scale="months">Months</button></div><button class="button" type="button" data-action="export-timeline">Export</button>`)}
      <div class="timeline-shell"><div class="timeline">
        <div class="timeline-header"><div>Work</div>${labels.map((date) => `<div>${date}</div>`).join("")}</div>
        ${rows.map((row) => {
          const issue = issueByKey(row.issue);
          return `<div class="timeline-row">
            <div class="timeline-label"><span class="type-badge tag">${esc(issue.type)}</span><span><strong>${esc(row.label)}</strong><span>${esc(row.issue)} · ${esc(issue.assignee)}</span></span></div>
            ${Array.from({ length: 8 }, () => '<div class="timeline-cell"></div>').join("")}
            <button class="timeline-bar ${row.tone}" style="--start:${row.start};--span:${row.span}" type="button" data-issue="${row.issue}">${esc(row.issue)} · ${esc(issue.status)}</button>
          </div>`;
        }).join("")}
      </div></div>
      <div class="callout ${DemoState.decisionApproved ? "success" : "warning"}"><strong>${DemoState.decisionApproved ? "Forecast restored" : "Schedule exposure"}</strong><p>${DemoState.decisionApproved ? "Approval of DEC-014 restored the Integration Readiness Review forecast to 18 September." : "The pending certification decision shifts the Integration Readiness Review forecast from 18 to 23 September."}</p></div>
    </div>`;
  }

  function renderReleases() {
    const approved = DemoState.decisionApproved;
    const releaseScope = DemoState.issues.filter((issue) => ["SMN-100", "SMN-120", "SMN-140", "SMN-191", "SMN-184", "SMN-216", "SMN-232"].includes(issue.key));
    return `<div class="page page-enter">
      ${pageHeader("SMN · Delivery", "Releases", "Control version scope, target dates, readiness gates, evidence, and release decisions from the same operating record.", `<button class="button" type="button" data-action="release-notes">Generate release notes</button><button class="button primary" type="button" data-action="create-release">Create release</button>`)}
      <section class="metric-grid">
        ${metric("Release 1 complete", "64%", "Target · 22 Oct 2026")}
        ${metric("Readiness gates", approved ? "3 / 4" : "2 / 4", approved ? '<span class="delta good">Certification recovery active</span>' : "Certification decision pending", approved ? "success" : "warning")}
        ${metric("Open scope", releaseScope.filter((issue) => issue.status !== "Done").length, releaseScope.length + " governed scope items")}
        ${metric("Release confidence", currentConfidence() + "%", approved ? '<span class="delta good">+14 after DEC-014</span>' : "Leadership estimate", approved ? "success" : "warning")}
      </section>
      <div class="project-overview-grid" style="margin-top:16px">
        <section class="panel"><div class="panel-header"><h2>Release 1 · Operational demonstration</h2>${healthBadge(approved ? "Amber, recovering" : "Amber")}</div><div class="panel-body">
          ${progress("Scope complete", 64, "64%")}${progress("Certification readiness", approved ? 74 : 52, approved ? "Recovering" : "At risk", approved ? "success" : "warning")}${progress("Integration readiness", 68, "Review · " + (approved ? "18 Sep" : "23 Sep"), approved ? "success" : "warning")}${progress("Evidence approved", 57, "12 of 21 artifacts")}
        </div></section>
        <section class="panel release-gates"><div class="panel-header"><h2>Readiness gates</h2><span class="tag">4 governed gates</span></div><div class="panel-body">
          <div class="mapping-row"><strong>Certification path</strong><span>→</span><strong>DEC-014</strong>${statusBadge(approved ? "Approved" : "Pending")}</div>
          <div class="mapping-row"><strong>Security control mapping</strong><span>→</span><strong>SMN-207</strong>${statusBadge(approved ? "Ready" : "Blocked")}</div>
          <div class="mapping-row"><strong>Integration rehearsal</strong><span>→</span><strong>SMN-214</strong>${statusBadge(approved ? "Ready" : "Blocked")}</div>
          <div class="mapping-row"><strong>Operational scenario</strong><span>→</span><strong>SMN-232</strong>${statusBadge("To Do")}</div>
        </div></section>
      </div>
      <section class="panel" style="margin-top:16px"><div class="panel-header"><h2>Included work</h2><span class="tag">Release 1 scope</span></div><div class="data-table-wrap"><table class="data-table"><thead><tr><th>Key</th><th>Summary</th><th>Type</th><th>Owner</th><th>Status</th><th>Due</th></tr></thead><tbody>${releaseScope.map((issue) => `<tr data-issue="${issue.key}" tabindex="0"><td>${issue.key}</td><td class="summary-cell">${esc(issue.summary)}</td><td>${esc(issue.type)}</td><td>${personCell(issue.assignee)}</td><td>${statusBadge(issue.status)}</td><td>${esc(issue.due)}</td></tr>`).join("")}</tbody></table></div></section>
      <div class="callout"><strong>Release governance</strong><p>Release scope, work state, evidence, risks, approvals, and leadership status remain traceable to their accountable records.</p></div>
    </div>`;
  }

  function renderSpaces() {
    if (DemoState.activePage) return renderPage();
    const spaces = [
      { key: "SMN", name: "Sentinel Mesh Node", owner: "Priya Nair", pages: 34, updated: "12 min ago", description: "Program, delivery, certification, integration, release, and team knowledge." },
      { key: "ENG", name: "Engineering Practice", owner: "Marcus Reed", pages: 22, updated: "Yesterday", description: "Engineering standards, reusable patterns, templates, and technical decisions." },
      { key: "PMO", name: "Program Delivery", owner: "Lena Ortiz", pages: 18, updated: "2 days ago", description: "Portfolio governance, planning guidance, reporting, and working agreements." }
    ];
    return `<div class="page page-enter">
      ${pageHeader("Knowledge", "Spaces", "Create, govern, discover, and connect organizational knowledge directly to accountable work.", `<button class="button primary" type="button" data-action="create-page">Create page</button>`)}
      <div class="space-grid">${spaces.map((space, index) => `
        <article class="card space-card" tabindex="0" data-space="${space.key}">
          <span class="space-card-icon">${space.key}</span><h2>${esc(space.name)}</h2><p>${esc(space.description)}</p>
          <div class="space-card-meta"><span>${space.pages} pages</span><span>Owner · ${esc(space.owner)}</span><span>Updated ${esc(space.updated)}</span></div>
          ${index === 0 ? '<span class="tag" style="position:absolute;top:18px;right:18px">Project space</span>' : ""}
        </article>
      `).join("")}</div>
      <div class="section-heading"><div><h2>Recently updated</h2><p>Knowledge changes with linked work and decisions.</p></div></div>
      <div class="data-table-wrap"><table class="data-table"><thead><tr><th>Page</th><th>Space</th><th>Owner</th><th>Version</th><th>Updated</th></tr></thead><tbody>
        ${DemoState.pages.slice().sort((a, b) => a.updated.localeCompare(b.updated)).slice(0, 7).map((page) => `<tr data-page="${page.id}" tabindex="0"><td class="summary-cell">${esc(page.title)}</td><td>Sentinel Mesh Node</td><td>${personCell(page.owner)}</td><td>v${page.version}</td><td>${esc(page.updated)}</td></tr>`).join("")}
      </tbody></table></div>
    </div>`;
  }

  function renderPage() {
    const page = pageById(DemoState.activePage) || pageById("program-hub");
    const comments = DemoState.pageComments[page.id] || [];
    const versions = DemoState.pageVersions[page.id] || [{ version: page.version, author: page.owner, time: page.updated, note: "Current version" }];
    const isDecisionPage = page.id === "alternate-path";
    return `<div class="page page-enter">
      ${pageHeader("Sentinel Mesh Node · Space", page.title, page.summary, `<button class="button" type="button" data-action="page-history">Version history</button><button class="button primary" type="button" data-action="edit-page" data-page-id="${page.id}">Edit page</button>`, '<button type="button" data-action="all-spaces">Spaces</button><span>›</span><span>Sentinel Mesh Node</span>')}
      <div class="knowledge-layout">
        <nav class="page-tree" aria-label="Page tree"><div class="page-tree-header"><span>Pages</span><button class="section-link" type="button" data-action="create-page">＋</button></div>
          ${DemoState.pages.map((item) => `<button class="tree-item depth-${item.depth} ${item.id === page.id ? "active" : ""}" type="button" data-page="${item.id}"><span class="page-ico" aria-hidden="true">${item.depth ? "└" : "▤"}</span><span>${esc(item.title)}</span></button>`).join("")}
        </nav>
        <article class="knowledge-document">
          <div class="document-toolbar"><span class="document-meta">Owned by ${esc(page.owner)} · Updated ${esc(page.updated)} · v${page.version}</span><span class="tag">Governed page</span></div>
          <h1>${esc(page.title)}</h1>
          <p class="lead">${esc(page.content)}</p>
          ${isDecisionPage ? renderDecisionPageBody() : renderGenericPageBody(page)}
          <section style="margin-top:32px;padding-top:20px;border-top:1px solid var(--line)">
            <h2 style="margin-top:0">Comments</h2>
            <ul class="comment-list">${comments.length ? comments.map((comment) => `<li class="comment-item"><div class="comment-head"><strong>${esc(comment.author)}</strong><time>${esc(comment.time)}</time></div><p>${esc(comment.text)}</p></li>`).join("") : '<li class="empty-state" style="padding:18px">No comments yet.</li>'}</ul>
            <form class="comment-form" data-page-comment="${page.id}"><textarea name="comment" aria-label="Add a page comment" placeholder="Add a comment or @mention a teammate"></textarea><button class="button primary" type="submit">Comment</button></form>
          </section>
        </article>
        <aside class="document-sidebar" aria-label="Page information">
          <section class="document-sidebar-section"><h3>Linked work & decisions</h3>
            ${isDecisionPage ? `
              <button class="linked-object" type="button" data-decision="DEC-014"><span class="linked-icon">DE</span><span class="linked-copy"><strong>DEC-014</strong><span>${DemoState.decisionApproved ? "Approved" : "Pending approval"}</span></span></button>
              <button class="linked-object" type="button" data-issue="SMN-191"><span class="linked-icon">WK</span><span class="linked-copy"><strong>SMN-191</strong><span>${esc(issueByKey("SMN-191").status)} · Lena Ortiz</span></span></button>
              <button class="linked-object" type="button" data-risk="RISK-07"><span class="linked-icon">RK</span><span class="linked-copy"><strong>RISK-07</strong><span>${currentRiskScore()}/25 · ${DemoState.decisionApproved ? "Moderate" : "High"}</span></span></button>
            ` : `<button class="linked-object" type="button" data-issue="${DemoState.issues.find((issue) => issue.linkedPage === page.id)?.key || "SMN-100"}"><span class="linked-icon">WK</span><span class="linked-copy"><strong>Linked accountable work</strong><span>Open details and activity</span></span></button>`}
          </section>
          <section class="document-sidebar-section"><h3>Evidence</h3>
            ${["Partner Laboratory Accreditation Letter.pdf", "Control Crosswalk v3.xlsx", "Test Plan SMN-TP-17.pdf"].map((file, index) => `<div class="attachment-row"><span class="attachment-icon">${index === 1 ? "XL" : "PDF"}</span><span>${esc(file)}</span></div>`).join("")}
          </section>
          <section class="document-sidebar-section"><h3>Version history</h3><ul class="version-list">${versions.slice(0, 5).map((version) => `<li class="version-item"><div class="version-head"><strong>v${version.version} · ${esc(version.author)}</strong><time>${esc(version.time)}</time></div><p>${esc(version.note)}</p></li>`).join("")}</ul></section>
        </aside>
      </div>
    </div>`;
  }

  function renderDecisionPageBody() {
    return `
      <div class="callout warning"><strong>Problem</strong><p>The primary certification laboratory is unavailable through 11 September, shifting the 18 September Integration Readiness Review forecast to 23 September.</p></div>
      <h2>Options considered</h2>
      <div class="option-grid">
        <section class="option-card"><h3>Option A · Wait</h3><p>Wait for the primary laboratory. Lowest process change, but the review forecast moves to 23 September.</p></section>
        <section class="option-card recommended"><h3>Option B · Partner path</h3><p>Use an accredited partner laboratory with parallel evidence review. Restores the 18 September forecast.</p><span class="tag" style="margin-top:8px">Recommended</span></section>
        <section class="option-card"><h3>Option C · Defer review</h3><p>Protects near-term workload but creates material exposure to the October operational demonstration.</p></section>
      </div>
      <h2>Recommendation</h2>
      <p>Approve Option B and complete the control crosswalk by 1 September. The accreditation scope is verified, evidence ownership is assigned, and the residual risk is acceptable.</p>
      <div class="callout ${DemoState.decisionApproved ? "success" : ""}"><strong>${DemoState.decisionApproved ? "Decision recorded" : "Approval required by 26 August"}</strong><p>${DemoState.decisionApproved ? "Dana Kessler approved Option B. Six dependent items moved to Ready and the review forecast returned to 18 September." : "DEC-014 is the governed approval record. One approval will update work, schedule, risk, version history, notifications, and the leadership brief."}</p></div>
    `;
  }

  function renderGenericPageBody(page) {
    return `
      <h2>Purpose</h2><p>${esc(page.summary)} This page is connected to the work, decisions, evidence, and owners needed to keep it current.</p>
      <h2>Current operating guidance</h2>
      <ul><li>Use linked work items for accountable execution and due dates.</li><li>Record consequential choices in the decision register.</li><li>Attach evidence to the page and trace it to the relevant work.</li><li>Publish meaningful changes as governed versions.</li></ul>
      <div class="callout"><strong>Living knowledge</strong><p>This content and its accountable work remain synchronized inside the same suite.</p></div>
    `;
  }

  function renderDecisions() {
    if (DemoState.activeDecision) return renderDecisionDetail();
    const decisionCounts = ["Pending", "Approved", "Superseded", "Draft"].map((status) => {
      const count = DemoState.decisions.filter((decision) => decision.status === status).length;
      return count ? `${count} ${status.toLowerCase()}` : "";
    }).filter(Boolean).join(" · ");
    return `<div class="page page-enter">
      ${pageHeader("Governance", "Decision register", "Capture options, rationale, approval, evidence, and downstream impact—not just a comment in a ticket.", `<button class="button primary" type="button" data-action="create-decision">Create decision</button>`)}
      <section class="panel">
        <div class="panel-header"><h2>Program decisions</h2><span class="tag">${decisionCounts}</span></div>
        <div>${DemoState.decisions.map((decision) => `
          <div class="decision-card" data-decision="${decision.id}" tabindex="0">
            <span class="decision-key">${esc(decision.id)}</span>
            <span class="decision-summary"><strong>${esc(decision.title)}</strong><span>Recommendation · ${esc(decision.recommendation)}</span></span>
            <span class="decision-person">Owner · ${esc(decision.owner)}</span>
            <span class="decision-date">Due · ${esc(decision.due)}</span>
            ${statusBadge(decision.status)}
          </div>
        `).join("")}</div>
      </section>
    </div>`;
  }

  function renderDecisionDetail() {
    const decision = decisionById(DemoState.activeDecision) || decisionById("DEC-014");
    const isPrimary = decision.id === "DEC-014";
    const approved = decision.status === "Approved";
    return `<div class="page page-enter">
      ${pageHeader("Governed decision", `${decision.id} · ${decision.title}`, decision.rationale, `<button class="button" type="button" data-page="${decision.page}">Open decision page</button>${isPrimary && !approved ? '<button class="button primary" type="button" data-action="confirm-approval">Approve Option B</button>' : ""}`, '<button type="button" data-action="all-decisions">Decisions</button><span>›</span><span>' + esc(decision.id) + '</span>')}
      <div class="decision-hero">
        <section class="decision-impact ${approved ? "approved" : ""}">
          <div class="eyebrow">${approved ? "Decision recorded" : "Decision required"}</div><h2>${approved ? "Alternate path approved; delivery is recovering." : "One approval changes the delivery outcome."}</h2>
          <p>${approved ? "The governed approval updated accountable work, schedule, risk, knowledge, notifications, audit history, and briefing facts." : "Option B uses an accredited partner laboratory with parallel evidence review."}</p>
          <div class="impact-grid">
            <div class="impact-stat"><strong>${approved ? "0" : "6"}</strong><span>Blocked items</span></div>
            <div class="impact-stat"><strong>${approved ? "18 Sep" : "23 Sep"}</strong><span>Review forecast</span></div>
            <div class="impact-stat"><strong>${approved ? "6/25" : "16/25"}</strong><span>Risk score</span></div>
          </div>
        </section>
        <section class="card">
          <div class="eyebrow">Decision control</div>
          <div class="field" style="margin-top:12px"><span class="field-label">Status</span><div>${statusBadge(decision.status)}</div></div>
          <div class="field" style="margin-top:12px"><span class="field-label">Owner</span><div>${personCell(decision.owner)}</div></div>
          <div class="field" style="margin-top:12px"><span class="field-label">Approver</span><div>${personCell(decision.approver)}</div></div>
          <div class="field" style="margin-top:12px"><span class="field-label">Due</span><div style="font-size:10px">${esc(decision.due)}</div></div>
        </section>
      </div>
      <div class="project-overview-grid" style="margin-top:16px">
        <section class="panel"><div class="panel-header"><h2>Downstream work</h2><span class="tag">6 dependencies</span></div><div class="panel-body">
          <ul class="dependency-list">${["SMN-184", "SMN-202", "SMN-205", "SMN-206", "SMN-207", "SMN-214"].map((key) => { const issue = issueByKey(key); return `<li><button class="dependency-item" type="button" data-issue="${key}"><span class="dependency-key">${key}</span><span>${esc(issue.summary)}</span>${statusBadge(issue.status)}</button></li>`; }).join("")}</ul>
        </div></section>
        <section class="panel"><div class="panel-header"><h2>Traceability</h2></div><div class="panel-body">
          <button class="linked-object" type="button" data-page="alternate-path"><span class="linked-icon">PG</span><span class="linked-copy"><strong>Alternate Path Decision Brief</strong><span>v${pageById("alternate-path").version}</span></span></button>
          <button class="linked-object" type="button" data-issue="SMN-191"><span class="linked-icon">WK</span><span class="linked-copy"><strong>SMN-191</strong><span>${esc(issueByKey("SMN-191").status)}</span></span></button>
          <button class="linked-object" type="button" data-risk="RISK-07"><span class="linked-icon">RK</span><span class="linked-copy"><strong>RISK-07</strong><span>${currentRiskScore()}/25</span></span></button>
        </div></section>
      </div>
    </div>`;
  }

  function renderReports() {
    const completed = DemoState.issues.filter((issue) => issue.status === "Done").length;
    const total = DemoState.issues.length;
    return `<div class="page page-enter">
      ${pageHeader("Insights", "Reports & dashboards", "Analyze delivery, quality, risk, sprint, decision, and knowledge signals from the same governed data.", `<button class="button" type="button" data-action="export-csv">Export CSV</button><button class="button primary" type="button" data-view="leadership">Leadership brief</button>`)}
      <section class="metric-grid">
        ${metric("Sprint completion", "56%", "23 of 41 story points")}
        ${metric("Flow efficiency", "71%", '<span class="delta good">+6%</span> vs. last sprint', "success")}
        ${metric("Blocked items", blockedCount(), DemoState.decisionApproved ? '<span class="delta good">All decision blockers cleared</span>' : "6 trace to DEC-014", blockedCount() ? "danger" : "success")}
        ${metric("Page-to-work linkage", "94%", "27 of 29 priority pages", "success")}
      </section>
      <div class="report-grid" style="margin-top:14px">
        <section class="card chart-card">
          <div class="chart-header"><div><h2>Sprint burnup</h2><p>Completed versus planned story points</p></div><div class="chart-legend"><span><i class="legend-dot"></i>Complete</span><span><i class="legend-dot secondary"></i>Plan</span></div></div>
          <div class="bar-chart">${[3, 6, 9, 12, 16, 19, 23].map((value, index) => `<div class="bar-group"><span class="bar" style="height:${value / 41 * 100}%"></span><span class="bar secondary" style="height:${(index + 1) / 7 * 100}%"></span><span class="bar-label">D${index + 1}</span></div>`).join("")}</div>
        </section>
        <section class="card chart-card">
          <div class="chart-header"><div><h2>Work distribution</h2><p>${total} tracked items by state</p></div></div>
          <div class="donut-wrap"><div class="donut"><div class="donut-hole"><strong>${total}</strong><span>Items</span></div></div><div>
            <div class="donut-legend-row"><span><i class="legend-dot"></i>Active</span><strong>${DemoState.issues.filter((issue) => ["Ready", "In Progress", "In Review"].includes(issue.status)).length}</strong></div>
            <div class="donut-legend-row"><span><i class="legend-dot warning"></i>Blocked</span><strong>${blockedCount()}</strong></div>
            <div class="donut-legend-row"><span><i class="legend-dot secondary"></i>Done</span><strong>${completed}</strong></div>
            <div class="donut-legend-row"><span>Unscheduled</span><strong>${DemoState.issues.filter((issue) => issue.sprint === "Backlog").length}</strong></div>
          </div></div>
        </section>
      </div>
      <div class="report-grid" style="margin-top:14px">
        <section class="panel"><div class="panel-header"><h2>Risk exposure</h2><span class="tag">Updated from register</span></div><div class="panel-body">${DemoState.risks.map((risk) => progress(`${risk.id} · ${risk.title}`, risk.score / 25 * 100, risk.score + "/25", risk.score > 12 ? "warning" : "success")).join("")}</div></section>
        <section class="panel"><div class="panel-header"><h2>Knowledge health</h2><span class="tag">Project space</span></div><div class="panel-body">${progress("Priority pages linked to work", 94, "94%", "success")}${progress("Pages current within 30 days", 87, "87%")}${progress("Evidence with named owner", 96, "96%", "success")}</div></section>
      </div>
    </div>`;
  }

  function renderLeadership() {
    const approved = DemoState.decisionApproved;
    return `<div class="page page-enter">
      ${pageHeader("Executive readout", "Leadership status", "A one-page, traceable status generated from the same delivery and knowledge record.", `<a class="button" href="leadership-demo.html">Presenter tour</a><button class="button primary" type="button" data-action="export-brief">Export briefing</button>`)}
      <article class="leadership-brief" id="leadershipBrief">
        <header class="brief-masthead"><div class="eyebrow">Sentinel Mesh Node · Release 1</div><h1>Leadership delivery readout</h1><div class="brief-meta"><span>Status date · 24 August 2026</span><span>Owner · Lena Ortiz</span><span>Classification · Synthetic demonstration data</span></div></header>
        <section class="brief-bluf ${approved ? "approved" : ""}"><span class="bluf-label">Bottom line</span><p>${approved ? "<strong>Alternate certification path approved.</strong> Six dependent items resumed, the Integration Readiness Review forecast returned to 18 September, and certification risk fell from 16/25 to 6/25. The project remains amber while recovery actions complete." : "<strong>Leadership action is required by 26 August.</strong> The unavailable primary laboratory has shifted the readiness-review forecast to 23 September. Approving the accredited partner path releases six blocked items and restores the 18 September plan."}</p></section>
        <section class="brief-kpis">
          <div class="brief-kpi"><strong>Amber</strong><span>Project health</span></div>
          <div class="brief-kpi"><strong>64%</strong><span>Release complete</span></div>
          <div class="brief-kpi"><strong>${currentConfidence()}%</strong><span>Confidence</span></div>
          <div class="brief-kpi"><strong>${blockedCount()}</strong><span>Blocked items</span></div>
          <div class="brief-kpi"><strong>${scheduleVariance() > 0 ? "+" : ""}${scheduleVariance()}d</strong><span>Schedule variance</span></div>
        </section>
        <div class="brief-body">
          <div>
            <section class="brief-section"><h2>Outcome and forecast</h2><p>The team is delivering toward the 22 October operational demonstration. Certification recovery is the controlling path to the 18 September Integration Readiness Review. ${approved ? "The approved alternate path restores that date; evidence review and rehearsal execution are now the near-term focus." : "The pending decision is the only current leadership intervention with direct schedule leverage."}</p></section>
            <section class="brief-section"><h2>Delivery priorities</h2><ul><li>Complete the certification evidence package and control crosswalk by 4 September.</li><li>Close the timing-variance defect before the readiness-review rehearsal.</li><li>Maintain explicit traceability from release work to evidence and governed pages.</li></ul></section>
            <section class="brief-section"><h2>Next decision or watch item</h2><p>${approved ? "No additional executive decision is currently required. Watch evidence-review completion and engineering-manager capacity." : "Approve DEC-014, Option B: accredited partner laboratory with parallel evidence review."}</p></section>
          </div>
          <div>
            <section class="brief-section"><h2>Risks</h2><ul>${DemoState.risks.map((risk) => `<li><strong>${esc(risk.id)} · ${esc(risk.title)}</strong> — ${risk.score}/25. ${esc(risk.response)}.</li>`).join("")}</ul></section>
            <section class="brief-section"><h2>Traceable sources</h2><ul><li><button class="section-link" type="button" data-decision="DEC-014">DEC-014 · Alternate certification path</button></li><li><button class="section-link" type="button" data-issue="SMN-191">SMN-191 · Accountable decision task</button></li><li><button class="section-link" type="button" data-page="alternate-path">Alternate Path Decision Brief · v${pageById("alternate-path").version}</button></li><li><button class="section-link" type="button" data-risk="RISK-07">RISK-07 · Certification delay</button></li></ul></section>
          </div>
        </div>
      </article>
    </div>`;
  }

  function renderPeople() {
    return `<div class="page page-enter">
      ${pageHeader("Organization", "People & teams", "See team ownership, work allocation, capacity, roles, and accountable delivery relationships.", `<button class="button" type="button" data-action="manage-teams">Manage teams</button><button class="button primary" type="button" data-action="invite-people">Invite people</button>`)}
      <div class="team-grid">${DemoState.people.filter((person) => person.name !== "Maya Okafor").map((person) => {
        const workCount = DemoState.issues.filter((issue) => issue.assignee === person.name && issue.status !== "Done").length;
        return `<article class="card person-card" data-person="${esc(person.name)}" tabindex="0">${avatar(person.name)}<div><h2>${esc(person.name)}</h2><p>${esc(person.role)} · ${esc(person.team)}</p></div><div class="capacity"><div class="capacity-bar ${person.capacity >= 88 ? "warning" : ""}"><span style="width:${person.capacity}%"></span></div><div class="capacity-meta"><span>${person.capacity}% planned capacity</span><span>${workCount} open items</span></div></div></article>`;
      }).join("")}</div>
      <div class="section-heading"><div><h2>Team allocation</h2><p>Active portfolio work by accountable team.</p></div></div>
      <section class="panel"><div class="panel-body">
        ${progress("Program Delivery", 72, "14 active items")}${progress("Systems Integration", 86, "11 active items", "warning")}${progress("Certification & Assurance", 79, "9 active items")}${progress("Cybersecurity", 61, "4 active items")}
      </div></section>
    </div>`;
  }

  function renderAutomation() {
    return `<div class="page page-enter">
      ${pageHeader("Administration", "Automation", "Use governed rules to keep work, knowledge, decisions, notifications, and reporting synchronized.", `<button class="button primary" type="button" data-action="create-rule">Create rule</button>`)}
      <section class="metric-grid">
        ${metric("Rules enabled", DemoState.automations.filter((rule) => rule.enabled).length, "Across project and space")}
        ${metric("Runs this month", DemoState.automations.reduce((sum, rule) => sum + rule.runs, 0), '<span class="delta good">100% successful</span>', "success")}
        ${metric("Manual handoffs removed", "43", "Estimated from configured rules")}
        ${metric("Exceptions", "0", "No failed executions", "success")}
      </section>
      <section class="panel" style="margin-top:14px"><div class="panel-header"><h2>Automation rules</h2><span class="tag">Session-only simulation</span></div><div>
        ${DemoState.automations.map((rule) => `<div class="automation-rule"><button class="toggle ${rule.enabled ? "on" : ""}" type="button" role="switch" aria-checked="${rule.enabled}" aria-label="Toggle ${esc(rule.name)}" data-action="toggle-rule" data-rule="${rule.id}"></button><span class="rule-copy"><strong>${esc(rule.name)}</strong><span>${esc(rule.detail)}</span></span><span class="rule-stat">${rule.runs} runs · ${esc(rule.last)}</span><span class="tag">${rule.enabled ? "Enabled" : "Paused"}</span></div>`).join("")}
      </div></section>
    </div>`;
  }

  function renderAdmin() {
    const tabs = [
      ["workflows", "Workflows"], ["issue-types", "Work item types"], ["permissions", "Permissions"], ["templates", "Templates"],
      ["integrations", "Integrations"], ["audit", "Audit log"]
    ];
    return `<div class="page page-enter">
      ${pageHeader("Suite administration", "Administration", "Configure how teams work, govern knowledge, manage access, and trace every material change.")}
      <div class="admin-layout">
        <nav class="admin-nav" aria-label="Administration sections">${tabs.map(([id, label]) => `<button class="${DemoState.adminTab === id ? "active" : ""}" type="button" data-admin-tab="${id}">${esc(label)}</button>`).join("")}</nav>
        <section class="admin-content">${renderAdminTab()}</section>
      </div>
    </div>`;
  }

  function renderAdminTab() {
    const tab = DemoState.adminTab;
    if (tab === "workflows") return `<h2>Workflows</h2><p>Configure accountable states and transitions for project work.</p><div class="workflow"><span class="workflow-node">To Do</span><span class="workflow-arrow">→</span><span class="workflow-node">Ready</span><span class="workflow-arrow">→</span><span class="workflow-node">In Progress</span><span class="workflow-arrow">→</span><span class="workflow-node">In Review</span><span class="workflow-arrow">→</span><span class="workflow-node done">Done</span><span class="workflow-node blocked">Blocked</span></div><div class="config-grid"><div class="config-card"><h3>Delivery workflow</h3><p>7 statuses · 13 transitions · used by 3 projects</p></div><div class="config-card"><h3>Decision workflow</h3><p>Draft → In review → Pending → Approved or Rejected</p></div><div class="config-card"><h3>Knowledge workflow</h3><p>Draft → Review → Governed · version required on publish</p></div><div class="config-card"><h3>Risk workflow</h3><p>Identified → Assessed → Treating → Accepted or Closed</p></div></div>`;
    if (tab === "issue-types") return `<h2>Work item types</h2><p>Define the hierarchy and fields used across delivery projects.</p><div class="config-grid">${["Epic", "Story", "Task", "Bug", "Decision Task", "Risk Action"].map((type, index) => `<div class="config-card"><h3>${esc(type)}</h3><p>${index < 3 ? "Standard delivery type" : "Governed specialized type"} · ${index + 7} configured fields</p></div>`).join("")}</div>`;
    if (tab === "permissions") return `<h2>Permissions</h2><p>Role-based access model for work, spaces, approvals, administration, and reporting.</p><div class="data-table-wrap"><table class="data-table"><thead><tr><th>Role</th><th>Work</th><th>Knowledge</th><th>Approve</th><th>Administer</th></tr></thead><tbody><tr><td class="summary-cell">Program administrator</td><td>Manage</td><td>Manage</td><td>Yes</td><td>Yes</td></tr><tr><td class="summary-cell">Project lead</td><td>Manage</td><td>Edit</td><td>Configured</td><td>No</td></tr><tr><td class="summary-cell">Contributor</td><td>Edit assigned</td><td>Edit</td><td>No</td><td>No</td></tr><tr><td class="summary-cell">Executive viewer</td><td>Read</td><td>Read</td><td>Assigned</td><td>No</td></tr></tbody></table></div>`;
    if (tab === "templates") return `<h2>Templates</h2><p>Standardize common project, work, page, and decision structures.</p><div class="config-grid">${["Delivery project", "Sprint planning", "Decision brief", "Integration review", "Risk assessment", "Leadership readout"].map((name) => `<div class="config-card"><h3>${esc(name)}</h3><p>Governed template · Available to Demonstration Portfolio</p></div>`).join("")}</div>`;
    if (tab === "integrations") return `<h2>Integrations</h2><p>Connect identity, source control, communication, and enterprise reporting in production.</p><div class="config-grid">${[["Microsoft Entra ID", "Identity and group synchronization"], ["GitHub", "Commits, pull requests, and deployments"], ["Microsoft Teams", "Notifications and collaborative actions"], ["Power BI", "Governed reporting data"], ["Email", "Inbound requests and notifications"], ["REST API", "Enterprise interoperability"]].map(([name, detail]) => `<div class="config-card"><h3>${esc(name)}</h3><p>${esc(detail)} · Not connected in concept</p></div>`).join("")}</div>`;
    return `<h2>Audit log</h2><p>Immutable production audit semantics represented here with session-only synthetic events.</p><div class="data-table-wrap"><table class="data-table"><thead><tr><th>Time</th><th>Actor</th><th>Action</th><th>Object</th></tr></thead><tbody>${DemoState.audit.map((event) => `<tr><td>${esc(event.time)}</td><td>${esc(event.actor)}</td><td>${esc(event.action)}</td><td class="summary-cell">${esc(event.object)}</td></tr>`).join("")}</tbody></table></div>`;
  }

  function renderMigration() {
    return `<div class="page page-enter">
      ${pageHeader("Administration", "Migration center", "Map and validate synthetic Jira and Confluence content before any production migration is considered.", `<button class="button" type="button" data-action="download-mapping">Download mapping</button><button class="button primary" type="button" data-action="run-migration" ${DemoState.migrationProgress > 0 && !DemoState.migrationComplete ? "disabled" : ""}>${DemoState.migrationComplete ? "Run dry run again" : "Run synthetic dry run"}</button>`)}
      <div class="migration-hero">
        <section class="card"><div class="eyebrow">Connected sources</div><div style="margin-top:12px">
          <div class="migration-source"><span class="source-logo">JR</span><span><strong>Jira Cloud · Synthetic export</strong><span>3 projects · 1,284 issues · 19 workflows</span></span>${statusBadge("Ready")}</div>
          <div class="migration-source"><span class="source-logo">CF</span><span><strong>Confluence Cloud · Synthetic export</strong><span>6 spaces · 438 pages · 92 attachments</span></span>${statusBadge("Ready")}</div>
        </div></section>
        <section class="card surface-dark"><div class="eyebrow" style="color:var(--sky)">Migration principle</div><h2 style="font-size:16px">Validate structure before moving content.</h2><p style="font-size:10px">A production migration would inventory, map, reconcile identities, test permissions, preserve links, validate history, and support rollback.</p><div class="tag" style="margin-top:12px;background:rgba(255,255,255,.08);border-color:rgba(221,221,221,.2);color:var(--platinum)">No real Atlassian data is connected</div></section>
      </div>
      <section class="panel" style="margin-top:14px"><div class="panel-header"><h2>Mapping preview</h2><span class="tag">12 validated mappings</span></div><div class="panel-body">
        ${[["Jira project", "Delivery project", "Validated"], ["Epic / Story / Task", "Configured work hierarchy", "Validated"], ["Status and workflow", "Workflow and transition", "2 exceptions"], ["Confluence space", "Knowledge space", "Validated"], ["Page hierarchy", "Page tree", "Validated"], ["Issue link / page link", "Governed relationship", "Validated"]].map(([from, to, result]) => `<div class="mapping-row"><strong>${esc(from)}</strong><span>→</span><strong>${esc(to)}</strong><span class="tag">${esc(result)}</span></div>`).join("")}
        ${DemoState.migrationProgress > 0 ? `<div class="migration-progress"><div class="migration-progress-head"><strong>${DemoState.migrationComplete ? "Dry run complete" : "Validating synthetic export…"}</strong><span>${DemoState.migrationProgress}%</span></div><div class="progress-track ${DemoState.migrationComplete ? "success" : ""}"><span style="width:${DemoState.migrationProgress}%"></span></div>${DemoState.migrationComplete ? '<div class="migration-result-grid"><div class="migration-result"><strong>1,722</strong><span>Records mapped</span></div><div class="migration-result"><strong>2</strong><span>Workflow exceptions</span></div><div class="migration-result"><strong>0</strong><span>Broken links</span></div></div>' : ""}</div>` : ""}
      </div></section>
      <div class="callout"><strong>Production boundary</strong><p>This prototype demonstrates mapping and validation workflow only. Production migration requires Atlassian export/API access, identity reconciliation, permission testing, attachment transfer, data-quality validation, and an approved cutover plan.</p></div>
    </div>`;
  }

  const VIEW_RENDERERS = {
    home: renderHome,
    "my-work": renderMyWork,
    inbox: renderInbox,
    projects: renderProjects,
    backlog: renderBacklog,
    board: renderBoard,
    timeline: renderTimeline,
    releases: renderReleases,
    spaces: renderSpaces,
    decisions: renderDecisions,
    reports: renderReports,
    leadership: renderLeadership,
    people: renderPeople,
    automation: renderAutomation,
    admin: renderAdmin,
    migration: renderMigration
  };

  function hashState() {
    const parts = window.location.hash.replace(/^#\/?/, "").split("/");
    let id = parts.slice(1).join("/");
    try { id = decodeURIComponent(id); } catch (_) { id = ""; }
    return { kind: parts[0], id };
  }

  function routeFromHash() {
    const { kind, id } = hashState();
    if (kind === "issue" && issueByKey(id)) return "board";
    if (kind === "page" && pageById(id)) {
      DemoState.activePage = id;
      return "spaces";
    }
    if (kind === "decision" && decisionById(id)) {
      DemoState.activeDecision = id;
      return "decisions";
    }
    return VIEW_RENDERERS[kind] ? kind : "home";
  }

  function navigate(view, options = {}) {
    if (!VIEW_RENDERERS[view]) view = "home";
    DemoState.route = view;
    if (options.resetSubView !== false) {
      if (view === "projects" && options.preserveProject !== true) DemoState.projectMode = "list";
      if (view === "spaces" && options.preservePage !== true) DemoState.activePage = null;
      if (view === "decisions" && options.preserveDecision !== true) DemoState.activeDecision = null;
    }
    const targetHash = "#" + view;
    if (window.location.hash !== targetHash) {
      if (options.replace) history.replaceState(null, "", targetHash);
      else window.location.hash = targetHash;
    } else {
      render();
    }
    closeSidebar();
  }

  function render() {
    const renderer = VIEW_RENDERERS[DemoState.route] || renderHome;
    appContent.innerHTML = renderer();
    document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.view === DemoState.route));
    updateChrome();
    appContent.scrollTop = 0;
    initializeViewInteractions();
    const deepLink = hashState();
    if (deepLink.kind === "issue" && issueByKey(deepLink.id)) openIssue(deepLink.id);
  }

  function updateChrome() {
    const unread = unreadCount();
    document.getElementById("inboxCount").textContent = unread;
    document.getElementById("inboxCount").hidden = unread === 0;
    document.getElementById("notificationPip").textContent = unread;
    document.getElementById("notificationPip").hidden = unread === 0;
    document.getElementById("decisionCount").textContent = DemoState.decisions.filter((decision) => decision.status === "Pending").length;
    document.getElementById("decisionCount").hidden = DemoState.decisions.every((decision) => decision.status !== "Pending");
    document.getElementById("myWorkCount").textContent = DemoState.issues.filter((issue) => ["Lena Ortiz", "Maya Okafor"].includes(issue.assignee) && issue.status !== "Done").length;
  }

  function initializeViewInteractions() {
    if (DemoState.route === "board") initializeBoardDrag();
  }

  function initializeBoardDrag() {
    document.querySelectorAll("[data-drag-issue]").forEach((card) => {
      card.addEventListener("dragstart", () => {
        draggedIssueKey = card.dataset.dragIssue;
        card.classList.add("dragging");
      });
      card.addEventListener("dragend", () => {
        draggedIssueKey = null;
        card.classList.remove("dragging");
        document.querySelectorAll(".board-column").forEach((column) => column.classList.remove("drag-over"));
      });
    });
    document.querySelectorAll("[data-board-status]").forEach((column) => {
      column.addEventListener("dragover", (event) => {
        event.preventDefault();
        column.classList.add("drag-over");
      });
      column.addEventListener("dragleave", () => column.classList.remove("drag-over"));
      column.addEventListener("drop", (event) => {
        event.preventDefault();
        const status = column.dataset.boardStatus;
        column.classList.remove("drag-over");
        if (draggedIssueKey) updateIssueStatus(draggedIssueKey, status);
      });
    });
  }

  function openIssue(key) {
    const issue = issueByKey(key);
    if (!issue) return;
    const dependent = DemoState.issues.filter((candidate) => candidate.dependencies.includes(issue.key));
    const linkedPage = pageById(issue.linkedPage);
    detailDrawer.innerHTML = `
      <div class="drawer-header"><span class="type-badge tag">${esc(issue.type)}</span><span class="drawer-key">${esc(issue.key)}</span><button class="icon-button" type="button" data-action="close-drawer" aria-label="Close details">×</button></div>
      <div class="drawer-body">
        <h2 class="drawer-title">${esc(issue.summary)}</h2>
        <div class="drawer-actions">${statusBadge(issue.status)}${priorityBadge(issue.priority)}<button class="button small" type="button" data-action="copy-link" data-key="${issue.key}">Copy link</button></div>
        <div class="drawer-grid">
          <div class="field"><label for="drawerStatus">Status</label><select id="drawerStatus" data-issue-status="${issue.key}">${["To Do", "Ready", "In Progress", "In Review", "Blocked", "Done"].map((status) => `<option ${status === issue.status ? "selected" : ""}>${status}</option>`).join("")}</select></div>
          <div class="field"><label for="drawerAssignee">Assignee</label><select id="drawerAssignee" data-issue-assignee="${issue.key}">${DemoState.people.map((person) => `<option ${person.name === issue.assignee ? "selected" : ""}>${esc(person.name)}</option>`).join("")}</select></div>
          <div class="field"><span class="field-label">Sprint</span><div>${esc(issue.sprint)}</div></div>
          <div class="field"><span class="field-label">Due date</span><div>${esc(issue.due)}</div></div>
          <div class="field"><span class="field-label">Epic</span><div>${esc(issue.epic)}</div></div>
          <div class="field"><span class="field-label">Estimate</span><div>${issue.points} story points</div></div>
          <div class="field"><span class="field-label">Reporter</span><div>${personCell(issue.reporter)}</div></div>
          <div class="field"><span class="field-label">Milestone</span><div>${esc(issue.milestone)}</div></div>
        </div>
        <section class="drawer-section"><h3>Description</h3><p>${esc(issue.description)}</p></section>
        <section class="drawer-section"><h3>Dependencies & schedule exposure</h3>
          ${issue.dependencies.length ? `<ul class="dependency-list">${issue.dependencies.map((dep) => { const linked = issueByKey(dep); return `<li><button class="dependency-item" type="button" data-issue="${dep}"><span class="dependency-key">${dep}</span><span>${esc(linked.summary)}</span>${statusBadge(linked.status)}</button></li>`; }).join("")}</ul>` : '<p>No unresolved incoming dependencies.</p>'}
          ${dependent.length ? `<p style="margin-top:12px"><strong>Blocks ${dependent.length} item${dependent.length === 1 ? "" : "s"}:</strong></p><ul class="dependency-list">${dependent.map((item) => `<li><button class="dependency-item" type="button" data-issue="${item.key}"><span class="dependency-key">${item.key}</span><span>${esc(item.summary)}</span>${statusBadge(item.status)}</button></li>`).join("")}</ul>` : ""}
          ${issue.risk ? `<div class="callout warning" style="margin-bottom:0"><strong>${esc(issue.risk)} · ${esc(riskById(issue.risk)?.title || "Linked risk")}</strong><p>Current exposure: ${riskById(issue.risk)?.score || 0}/25. ${esc(riskById(issue.risk)?.response || "")}</p></div>` : ""}
        </section>
        <section class="drawer-section"><h3>Checklist</h3><ul class="checklist">${issue.checklist.map((item, index) => `<li><input type="checkbox" data-checklist-key="${issue.key}" data-checklist-index="${index}" ${issue.checked[index] ? "checked" : ""}><span>${esc(item)}</span></li>`).join("")}</ul></section>
        <section class="drawer-section"><h3>Linked knowledge & evidence</h3>
          <button class="linked-object" type="button" data-page="${issue.linkedPage}"><span class="linked-icon">PG</span><span class="linked-copy"><strong>${esc(linkedPage?.title || "Program Hub")}</strong><span>v${linkedPage?.version || 1} · ${esc(linkedPage?.updated || "Today")}</span></span></button>
          <div class="attachment-row"><span class="attachment-icon">PDF</span><span>Supporting Evidence Summary.pdf</span></div>
        </section>
        <section class="drawer-section"><h3>Comments</h3><ul class="comment-list">${issue.comments.length ? issue.comments.map((comment) => `<li class="comment-item"><div class="comment-head"><strong>${esc(comment.author)}</strong><time>${esc(comment.time)}</time></div><p>${esc(comment.text)}</p></li>`).join("") : '<li class="empty-state" style="padding:16px">No comments yet.</li>'}</ul>
          <form class="comment-form" data-issue-comment="${issue.key}"><textarea name="comment" aria-label="Add an issue comment" placeholder="Add a comment or @mention a teammate"></textarea><button class="button primary" type="submit">Comment</button></form>
        </section>
        <section class="drawer-section"><h3>Activity</h3><ul class="activity-list">${issue.history.map((item, index) => `<li class="activity-item"><span class="activity-icon">↺</span><span class="activity-copy">${esc(item)}<time>${index === 0 ? "Today" : "Earlier"}</time></span></li>`).join("")}</ul></section>
      </div>
    `;
    drawerScrim.hidden = false;
    detailDrawer.setAttribute("aria-hidden", "false");
    requestAnimationFrame(() => detailDrawer.classList.add("open"));
    document.body.dataset.overlay = "drawer";
    detailDrawer.querySelector("[data-action='close-drawer']").focus();
  }

  function closeDrawer() {
    detailDrawer.classList.remove("open");
    detailDrawer.setAttribute("aria-hidden", "true");
    window.setTimeout(() => {
      drawerScrim.hidden = true;
      detailDrawer.innerHTML = "";
    }, 190);
    delete document.body.dataset.overlay;
    if (hashState().kind === "issue") history.replaceState(null, "", "#" + DemoState.route);
  }

  function openModal(content, large = false) {
    modalLayer.innerHTML = `<section class="modal ${large ? "large" : ""}" role="dialog" aria-modal="true">${content}</section>`;
    modalLayer.hidden = false;
    document.body.dataset.overlay = "modal";
    const focusTarget = modalLayer.querySelector("[autofocus], input, button, select, textarea, [tabindex]");
    if (focusTarget) focusTarget.focus();
  }

  function closeModal() {
    modalLayer.hidden = true;
    modalLayer.innerHTML = "";
    delete document.body.dataset.overlay;
  }

  function openCreateModal(type = "work") {
    openModal(`
      <div class="modal-header"><h2>Create in the suite</h2><button class="icon-button" type="button" data-action="close-modal" aria-label="Close">×</button></div>
      <div class="modal-body">
        <div class="create-type-grid">
          <button class="create-type ${type === "work" ? "active" : ""}" type="button" data-action="change-create-type" data-create-type="work"><strong>Work item</strong><span>Epic, story, task, bug, decision task, or risk action.</span></button>
          <button class="create-type ${type === "page" ? "active" : ""}" type="button" data-action="change-create-type" data-create-type="page"><strong>Knowledge page</strong><span>Connected page with ownership and version history.</span></button>
          <button class="create-type ${type === "decision" ? "active" : ""}" type="button" data-action="change-create-type" data-create-type="decision"><strong>Decision</strong><span>Options, recommendation, approver, and downstream impact.</span></button>
        </div>
        ${createForm(type)}
      </div>
    `, false);
  }

  function createForm(type) {
    if (type === "page") return `<form id="createEntityForm" data-create-form="page"><div class="form-grid"><div class="field full"><label for="newPageTitle">Page title</label><input id="newPageTitle" name="title" required autofocus placeholder="e.g., Release readiness checklist"></div><div class="field"><label for="newPageParent">Parent page</label><select id="newPageParent" name="parent"><option value="">No parent</option>${DemoState.pages.map((page) => `<option value="${page.id}">${esc(page.title)}</option>`).join("")}</select></div><div class="field"><label for="newPageOwner">Owner</label><select id="newPageOwner" name="owner">${DemoState.people.map((person) => `<option>${esc(person.name)}</option>`).join("")}</select></div><div class="field full"><label for="newPageSummary">Purpose</label><textarea id="newPageSummary" name="summary" required placeholder="What should this page help the team understand or do?"></textarea></div></div><div class="modal-footer" style="margin:20px -20px -20px"><button class="button" type="button" data-action="close-modal">Cancel</button><button class="button primary" type="submit">Create page</button></div></form>`;
    if (type === "decision") return `<form id="createEntityForm" data-create-form="decision"><div class="form-grid"><div class="field full"><label for="newDecisionTitle">Decision title</label><input id="newDecisionTitle" name="title" required autofocus placeholder="What needs to be decided?"></div><div class="field"><label for="newDecisionOwner">Owner</label><select id="newDecisionOwner" name="owner">${DemoState.people.map((person) => `<option>${esc(person.name)}</option>`).join("")}</select></div><div class="field"><label for="newDecisionApprover">Approver</label><select id="newDecisionApprover" name="approver">${DemoState.people.map((person) => `<option>${esc(person.name)}</option>`).join("")}</select></div><div class="field full"><label for="newDecisionRecommendation">Recommendation</label><textarea id="newDecisionRecommendation" name="recommendation" required placeholder="State the recommended option and why."></textarea></div></div><div class="modal-footer" style="margin:20px -20px -20px"><button class="button" type="button" data-action="close-modal">Cancel</button><button class="button primary" type="submit">Create decision</button></div></form>`;
    return `<form id="createEntityForm" data-create-form="work"><div class="form-grid"><div class="field"><label for="newIssueType">Type</label><select id="newIssueType" name="type">${["Story", "Task", "Bug", "Decision Task", "Risk Action", "Epic"].map((value) => `<option>${value}</option>`).join("")}</select></div><div class="field"><label for="newIssuePriority">Priority</label><select id="newIssuePriority" name="priority">${["Medium", "High", "Highest", "Low"].map((value) => `<option>${value}</option>`).join("")}</select></div><div class="field full"><label for="newIssueSummary">Summary</label><input id="newIssueSummary" name="summary" required autofocus placeholder="What needs to be done?"></div><div class="field"><label for="newIssueAssignee">Assignee</label><select id="newIssueAssignee" name="assignee">${DemoState.people.map((person) => `<option>${esc(person.name)}</option>`).join("")}</select></div><div class="field"><label for="newIssueSprint">Sprint</label><select id="newIssueSprint" name="sprint"><option>Sprint 12</option><option>Backlog</option></select></div><div class="field full"><label for="newIssueDescription">Description</label><textarea id="newIssueDescription" name="description" placeholder="Add context, outcome, constraints, and acceptance information."></textarea></div></div><div class="modal-footer" style="margin:20px -20px -20px"><button class="button" type="button" data-action="close-modal">Cancel</button><button class="button primary" type="submit">Create work item</button></div></form>`;
  }

  function openEditPage(pageId) {
    const page = pageById(pageId);
    if (!page) return;
    openModal(`
      <div class="modal-header"><h2>Edit page</h2><button class="icon-button" type="button" data-action="close-modal" aria-label="Close">×</button></div>
      <form data-edit-page="${page.id}">
        <div class="modal-body">
          <div class="field"><label for="editPageTitle">Title</label><input id="editPageTitle" name="title" value="${esc(page.title)}" required></div>
          <div class="field" style="margin-top:14px"><span class="field-label">Content</span><div class="editor-toolbar" aria-label="Formatting toolbar"><button type="button" data-command="bold" aria-label="Bold">B</button><button type="button" data-command="italic" aria-label="Italic"><em>I</em></button><button type="button" data-command="insertUnorderedList" aria-label="Bulleted list">• List</button><button type="button" data-command="formatBlock" data-value="h2" aria-label="Heading level 2">H2</button><button type="button" data-command="createLink" aria-label="Add link">Link</button></div><div id="pageEditor" class="page-editor" contenteditable="true" role="textbox" aria-multiline="true">${esc(page.content)}<h2>Current operating guidance</h2><p>Keep knowledge connected to accountable work, evidence, and decisions.</p></div></div>
          <div class="field" style="margin-top:14px"><label for="versionNote">Version note</label><input id="versionNote" name="note" placeholder="Describe what changed" value="Content updated"></div>
        </div>
        <div class="modal-footer"><button class="button" type="button" data-action="close-modal">Cancel</button><button class="button primary" type="submit">Publish new version</button></div>
      </form>
    `, true);
  }

  function openApprovalModal() {
    const decisionPageVersion = nextPageVersion("alternate-path");
    openModal(`
      <div class="modal-header"><h2>Approve alternate certification path?</h2><button class="icon-button" type="button" data-action="close-modal" aria-label="Close">×</button></div>
      <div class="modal-body"><div class="callout warning" style="margin-top:0"><strong>Option B · Accredited partner laboratory</strong><p>This controlled update will atomically approve DEC-014, complete SMN-191, release six dependencies, restore the review forecast, reduce RISK-07, publish page v${decisionPageVersion}, notify owners, and refresh the leadership brief.</p></div><p style="color:var(--muted);font-size:9px">Prototype action only. Changes remain in memory until the demo is reset or the page is refreshed.</p></div>
      <div class="modal-footer"><button class="button" type="button" data-action="close-modal">Cancel</button><button class="button primary" type="button" data-action="approve-decision">Approve Option B</button></div>
    `);
  }

  function approveDecision() {
    if (DemoState.decisionApproved) return;
    DemoState.decisionApproved = true;
    const decision = decisionById("DEC-014");
    decision.status = "Approved";
    const task = issueByKey("SMN-191");
    task.status = "Done";
    task.checked[2] = true;
    task.history.unshift("Decision approved by Dana Kessler");
    ["SMN-184", "SMN-202", "SMN-205", "SMN-206", "SMN-207", "SMN-214"].forEach((key) => {
      const issue = issueByKey(key);
      issue.status = "Ready";
      issue.history.unshift("Automatically moved from Blocked to Ready after DEC-014 approval");
      DemoState.notifications.unshift({ id: Date.now() + Math.random(), unread: true, kind: "issue", title: key + " is ready to resume", detail: "DEC-014 cleared the certification-path dependency for " + issue.assignee + ".", time: "Just now", target: key });
    });
    const risk = riskById("RISK-07");
    risk.score = 6;
    risk.level = "Moderate";
    risk.response = "Mitigation active; monitor evidence review";
    DemoState.milestones.find((item) => item.name === "Integration Readiness Review").forecast = "18 Sep";
    DemoState.milestones.find((item) => item.name === "Alternate path decision").status = "On track";
    DemoState.milestones.find((item) => item.name === "Evidence review").forecast = "04 Sep";
    const page = pageById("alternate-path");
    const decisionPageVersion = nextPageVersion("alternate-path");
    page.version = decisionPageVersion;
    page.updated = "Just now";
    DemoState.pageVersions["alternate-path"].unshift({ version: decisionPageVersion, author: "Dana Kessler", time: "Just now", note: "Decision recorded · Option B approved" });
    const events = [
      ["Dana Kessler", "Approved decision", "DEC-014"],
      ["Automation", "Released six dependent work items", "SMN-191"],
      ["Automation", "Restored milestone forecast", "Integration Readiness Review"],
      ["Automation", "Reduced risk score to 6/25", "RISK-07"],
      ["Automation", "Published page version " + decisionPageVersion, "Alternate Path Decision Brief"],
      ["Automation", "Refreshed leadership briefing", "Sentinel Mesh Node"]
    ];
    events.reverse().forEach(([actor, action, object]) => DemoState.audit.unshift({ time: "Just now", actor, action, object }));
    closeModal();
    render();
    toast("Alternate path approved", "Six work items resumed and the 18 September forecast was restored.", "success");
    announce("Decision approved. Six dependent items are ready, risk is reduced, and the schedule forecast is restored.");
  }

  function updateIssueStatus(key, status) {
    const issue = issueByKey(key);
    if (!issue || issue.status === status) return;
    const previous = issue.status;
    issue.status = status;
    issue.history.unshift(`Status changed from ${previous} to ${status} by Maya Okafor`);
    DemoState.audit.unshift({ time: "Just now", actor: "Maya Okafor", action: `Changed status from ${previous} to ${status}`, object: key });
    render();
    if (!drawerScrim.hidden) openIssue(key);
    toast(key + " moved to " + status, "Board, reports, and activity updated.", status === "Done" ? "success" : "");
  }

  function moveCard(key, direction) {
    const order = ["Ready", "In Progress", "In Review", "Blocked", "Done"];
    const issue = issueByKey(key);
    if (!issue) return;
    let index = order.indexOf(issue.status === "To Do" ? "Ready" : issue.status);
    index = Math.max(0, Math.min(order.length - 1, index + Number(direction)));
    updateIssueStatus(key, order[index]);
  }

  function runMigration() {
    if (migrationTimer) window.clearInterval(migrationTimer);
    DemoState.migrationProgress = 12;
    DemoState.migrationComplete = false;
    render();
    const steps = [34, 58, 81, 100];
    let index = 0;
    migrationTimer = window.setInterval(() => {
      DemoState.migrationProgress = steps[index++];
      if (DemoState.migrationProgress >= 100) {
        window.clearInterval(migrationTimer);
        migrationTimer = null;
        DemoState.migrationComplete = true;
        DemoState.audit.unshift({ time: "Just now", actor: "Maya Okafor", action: "Completed synthetic migration dry run", object: "Jira and Confluence mapping" });
        toast("Synthetic dry run complete", "1,722 records mapped; two workflow exceptions require review.", "success");
      }
      render();
    }, 420);
  }

  function exportBrief() {
    const approved = DemoState.decisionApproved;
    const body = [
      "# Unified Project Management Suite",
      "## Sentinel Mesh Node — Leadership Delivery Readout",
      "",
      "**Synthetic demonstration data · 24 August 2026**",
      "",
      "### Bottom line",
      approved
        ? "Alternate certification path approved. Six dependent items resumed, the review forecast returned to 18 September, and RISK-07 fell to 6/25."
        : "Leadership action is required by 26 August. Approving the accredited partner path releases six blocked items and restores the 18 September review plan.",
      "",
      "### Current facts",
      "- Project health: Amber" + (approved ? ", recovering" : ""),
      "- Release complete: 64%",
      "- Release confidence: " + currentConfidence() + "%",
      "- Blocked items: " + blockedCount(),
      "- Schedule variance: " + scheduleVariance() + " days",
      "- Certification risk: " + currentRiskScore() + "/25",
      "",
      "### Traceable sources",
      "- DEC-014 — Authorize alternate certification path",
      "- SMN-191 — Approve alternate test path",
      "- Alternate Path Decision Brief — v" + pageById("alternate-path").version,
      "- RISK-07 — Certification decision delay"
    ].join("\n");
    const blob = new Blob([body], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "unified-suite-sentinel-leadership-readout.md";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    toast("Briefing exported", "A traceable Markdown readout was created locally.", "success");
  }

  function performSearch(query) {
    const q = query.trim().toLowerCase();
    if (!q) {
      searchResults.hidden = true;
      searchResults.innerHTML = "";
      return;
    }
    const issueMatches = DemoState.issues.filter((issue) => `${issue.key} ${issue.summary} ${issue.assignee} ${issue.type}`.toLowerCase().includes(q)).slice(0, 5);
    const pageMatches = DemoState.pages.filter((page) => `${page.title} ${page.summary} ${page.owner}`.toLowerCase().includes(q)).slice(0, 5);
    const decisionMatches = DemoState.decisions.filter((decision) => `${decision.id} ${decision.title} ${decision.rationale}`.toLowerCase().includes(q)).slice(0, 4);
    const riskMatches = DemoState.risks.filter((risk) => `${risk.id} ${risk.title} ${risk.owner} ${risk.response}`.toLowerCase().includes(q)).slice(0, 4);
    const peopleMatches = DemoState.people.filter((person) => `${person.name} ${person.role} ${person.team}`.toLowerCase().includes(q)).slice(0, 4);
    const groups = [];
    if (issueMatches.length) groups.push(searchGroup("Work", issueMatches.map((issue) => searchResult("WK", issue.summary, issue.key + " · " + issue.status, "issue", issue.key))));
    if (pageMatches.length) groups.push(searchGroup("Knowledge", pageMatches.map((page) => searchResult("PG", page.title, "Sentinel Mesh Node · v" + page.version, "page", page.id))));
    if (decisionMatches.length) groups.push(searchGroup("Decisions", decisionMatches.map((decision) => searchResult("DE", decision.title, decision.id + " · " + decision.status, "decision", decision.id))));
    if (riskMatches.length) groups.push(searchGroup("Risks", riskMatches.map((risk) => searchResult("RK", risk.title, risk.id + " · " + risk.score + "/25", "risk", risk.id))));
    if (peopleMatches.length) groups.push(searchGroup("People", peopleMatches.map((person) => searchResult(person.initials, person.name, person.role, "person", person.name))));
    searchResults.innerHTML = groups.length ? groups.join("") : '<div class="empty-state" style="padding:24px"><strong>No matches</strong>Try a key, title, person, risk, or decision.</div>';
    searchResults.hidden = false;
  }

  function searchGroup(label, items) {
    return `<section class="search-result-group"><div class="search-result-label">${esc(label)}</div>${items.join("")}</section>`;
  }

  function searchResult(icon, title, meta, kind, id) {
    return `<button class="search-result" type="button" data-search-kind="${kind}" data-search-id="${esc(id)}"><span class="search-result-icon">${esc(icon)}</span><span class="search-result-copy"><strong>${esc(title)}</strong><span>${esc(meta)}</span></span><span class="search-result-meta">Open →</span></button>`;
  }

  function openNotification(item) {
    item.unread = false;
    updateChrome();
    if (item.kind === "issue") openIssue(item.target);
    else if (item.kind === "page") {
      DemoState.activePage = item.target;
      navigate("spaces", { preservePage: true });
    } else {
      DemoState.activeDecision = item.target;
      navigate("decisions", { preserveDecision: true });
    }
  }

  function showPerson(name) {
    const person = getPerson(name);
    const work = DemoState.issues.filter((issue) => issue.assignee === name);
    openModal(`<div class="modal-header"><h2>${esc(name)}</h2><button class="icon-button" type="button" data-action="close-modal">×</button></div><div class="modal-body"><div style="display:flex;gap:14px;align-items:center">${avatar(name)}<div><strong>${esc(person.role)}</strong><div style="color:var(--muted);font-size:9px">${esc(person.team)} · ${person.capacity}% capacity</div></div></div><div class="section-heading"><div><h2>Assigned work</h2></div></div><ul class="dependency-list">${work.map((issue) => `<li><button class="dependency-item" type="button" data-issue="${issue.key}"><span class="dependency-key">${issue.key}</span><span>${esc(issue.summary)}</span>${statusBadge(issue.status)}</button></li>`).join("")}</ul></div>`);
  }

  function showRisk(id) {
    const risk = riskById(id);
    if (!risk) return;
    openModal(`<div class="modal-header"><h2>${esc(risk.id)} · ${esc(risk.title)}</h2><button class="icon-button" type="button" data-action="close-modal">×</button></div><div class="modal-body"><div class="decision-impact ${risk.score <= 9 ? "approved" : ""}"><div class="eyebrow">Current exposure</div><h2>${risk.score}/25 · ${esc(risk.level)}</h2><p>${esc(risk.response)}</p></div><div class="form-grid" style="margin-top:16px"><div class="field"><span class="field-label">Owner</span><div>${personCell(risk.owner)}</div></div><div class="field"><span class="field-label">Linked action</span><button class="section-link" type="button" data-issue="${risk.issue}">${risk.issue}</button></div></div></div><div class="modal-footer"><button class="button" type="button" data-action="close-modal">Close</button></div>`);
  }

  function resetDemo() {
    if (migrationTimer) window.clearInterval(migrationTimer);
    DemoState = clone(FIXTURE);
    closeModal();
    closeDrawer();
    profileMenu.hidden = true;
    globalSearch.value = "";
    searchResults.hidden = true;
    history.replaceState(null, "", "#home");
    render();
    toast("Demo reset", "All synthetic session changes were cleared.", "success");
  }

  function openSidebar() {
    sidebar.classList.add("open");
    sidebarScrim.hidden = false;
    document.getElementById("menuButton").setAttribute("aria-expanded", "true");
  }

  function closeSidebar() {
    sidebar.classList.remove("open");
    sidebarScrim.hidden = true;
    document.getElementById("menuButton").setAttribute("aria-expanded", "false");
  }

  document.addEventListener("click", (event) => {
    const viewTarget = event.target.closest("[data-view]");
    if (viewTarget) {
      event.preventDefault();
      navigate(viewTarget.dataset.view);
      profileMenu.hidden = true;
      return;
    }

    const adminTarget = event.target.closest("[data-admin-tab]");
    if (adminTarget) {
      event.preventDefault();
      DemoState.adminTab = adminTarget.dataset.adminTab;
      render();
      return;
    }

    const editorCommand = event.target.closest("[data-command]");
    if (editorCommand) {
      event.preventDefault();
      const editor = document.getElementById("pageEditor");
      if (!editor) return;
      editor.focus();
      const command = editorCommand.dataset.command;
      let value = editorCommand.dataset.value || null;
      if (command === "createLink") {
        value = window.prompt("Enter a link URL", "https://") || "";
        if (!value) return;
      }
      document.execCommand(command, false, value);
      announce(editorCommand.getAttribute("aria-label") + " formatting applied.");
      return;
    }

    const actionTarget = event.target.closest("[data-action]");
    if (actionTarget) {
      event.preventDefault();
      const action = actionTarget.dataset.action;
      if (action === "open-create") openCreateModal("work");
      else if (action === "create-page") openCreateModal("page");
      else if (action === "create-decision") openCreateModal("decision");
      else if (action === "change-create-type") openCreateModal(actionTarget.dataset.createType);
      else if (action === "close-modal") closeModal();
      else if (action === "close-drawer") closeDrawer();
      else if (action === "confirm-approval") openApprovalModal();
      else if (action === "approve-decision") approveDecision();
      else if (action === "all-projects") { DemoState.projectMode = "list"; render(); }
      else if (action === "all-spaces") { DemoState.activePage = null; render(); }
      else if (action === "all-decisions") { DemoState.activeDecision = null; render(); }
      else if (action === "open-projects") { DemoState.projectMode = "overview"; navigate("projects", { preserveProject: true }); }
      else if (action === "move-card") moveCard(actionTarget.dataset.key, actionTarget.dataset.direction);
      else if (action === "move-to-sprint") { const issue = issueByKey(actionTarget.dataset.key); issue.sprint = "Sprint 12"; issue.status = "Ready"; render(); toast(issue.key + " added to Sprint 12", "Sprint scope updated."); }
      else if (action === "clear-filters") { DemoState.issueFilter = { text: "", status: "All", assignee: "All" }; render(); }
      else if (action === "save-view") toast("View saved for this session", "Production would save personal and shared filters.", "success");
      else if (action === "start-sprint") toast("Sprint settings opened", "Dates, goal, and capacity are already configured in this concept.");
      else if (action === "set-timeline-scale") { DemoState.timelineScale = actionTarget.dataset.scale; render(); toast("Timeline scale updated", DemoState.timelineScale === "months" ? "Monthly planning view selected." : "Weekly planning view selected."); }
      else if (action === "export-timeline") toast("Timeline export prepared", "Production would generate a PDF or spreadsheet from governed schedule data.", "success");
      else if (action === "release-notes") toast("Release notes generated", "The concept would assemble scope, decisions, fixes, evidence, and known risks from governed records.", "success");
      else if (action === "create-release") toast("Release configuration represented", "Production would capture version, target, scope rules, gates, approvals, and deployment evidence.");
      else if (action === "manage-teams") toast("Team administration represented", "Production would manage team membership, roles, capacity, and identity-provider groups.");
      else if (action === "invite-people") toast("Invitation workflow represented", "No message was sent; this concept has no identity service or outbound communication.");
      else if (action === "export-csv") toast("Report export prepared", "Synthetic report data is ready for local export.", "success");
      else if (action === "export-brief") exportBrief();
      else if (action === "edit-page") openEditPage(actionTarget.dataset.pageId);
      else if (action === "page-history") toast("Version history is visible", "See the page information panel for governed versions.");
      else if (action === "mark-all-read") { DemoState.notifications.forEach((item) => { item.unread = false; }); render(); }
      else if (action === "toggle-rule") {
        const rule = DemoState.automations.find((item) => item.id === actionTarget.dataset.rule);
        rule.enabled = !rule.enabled;
        render();
        toast(rule.name, rule.enabled ? "Rule enabled for this session." : "Rule paused for this session.");
      }
      else if (action === "create-rule") toast("Rule builder represented", "A production version would support triggers, conditions, actions, testing, and audit.");
      else if (action === "run-migration") runMigration();
      else if (action === "download-mapping") toast("Mapping workbook prepared", "This concept does not bundle real source-system data.", "success");
      else if (action === "copy-link") {
        const value = `${window.location.href.split("#")[0]}#issue/${actionTarget.dataset.key}`;
        if (navigator.clipboard) navigator.clipboard.writeText(value).catch(() => {});
        toast("Link copied", value, "success");
      }
      else if (action === "reset-demo") resetDemo();
      return;
    }

    const issueTarget = event.target.closest("[data-issue]");
    if (issueTarget) {
      event.preventDefault();
      openIssue(issueTarget.dataset.issue);
      return;
    }
    const pageTarget = event.target.closest("[data-page]");
    if (pageTarget) {
      event.preventDefault();
      closeDrawer();
      closeModal();
      DemoState.activePage = pageTarget.dataset.page;
      navigate("spaces", { preservePage: true });
      return;
    }
    const decisionTarget = event.target.closest("[data-decision]");
    if (decisionTarget) {
      event.preventDefault();
      closeDrawer();
      closeModal();
      DemoState.activeDecision = decisionTarget.dataset.decision;
      navigate("decisions", { preserveDecision: true });
      return;
    }
    const projectTarget = event.target.closest("[data-project]");
    if (projectTarget) {
      event.preventDefault();
      if (projectTarget.dataset.project === "SMN") {
        DemoState.projectMode = "overview";
        render();
      } else toast(projectTarget.dataset.project + " opened", "Sentinel Mesh Node contains the fully populated prototype workflow.");
      return;
    }
    const spaceTarget = event.target.closest("[data-space]");
    if (spaceTarget) {
      event.preventDefault();
      if (spaceTarget.dataset.space === "SMN") {
        DemoState.activePage = "program-hub";
        render();
      } else toast(spaceTarget.dataset.space + " space opened", "Sentinel Mesh Node is the fully populated knowledge space.");
      return;
    }
    const personTarget = event.target.closest("[data-person]");
    if (personTarget) {
      event.preventDefault();
      showPerson(personTarget.dataset.person);
      return;
    }
    const riskTarget = event.target.closest("[data-risk]");
    if (riskTarget) {
      event.preventDefault();
      showRisk(riskTarget.dataset.risk);
      return;
    }
    const notificationTarget = event.target.closest("[data-notification]");
    if (notificationTarget) {
      const item = DemoState.notifications.find((notification) => String(notification.id) === notificationTarget.dataset.notification);
      if (item) openNotification(item);
      return;
    }
    const searchTarget = event.target.closest("[data-search-kind]");
    if (searchTarget) {
      const kind = searchTarget.dataset.searchKind;
      const id = searchTarget.dataset.searchId;
      globalSearch.value = "";
      searchResults.hidden = true;
      if (kind === "issue") openIssue(id);
      else if (kind === "page") { DemoState.activePage = id; navigate("spaces", { preservePage: true }); }
      else if (kind === "decision") { DemoState.activeDecision = id; navigate("decisions", { preserveDecision: true }); }
      else if (kind === "risk") showRisk(id);
      else showPerson(id);
      return;
    }
    if (!event.target.closest(".global-search-wrap")) searchResults.hidden = true;
    if (!event.target.closest("#profileMenu") && !event.target.closest("#profileButton")) {
      profileMenu.hidden = true;
      document.getElementById("profileButton").setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("change", (event) => {
    const filter = event.target.dataset.filter;
    if (filter) {
      DemoState.issueFilter[filter] = event.target.value;
      render();
      return;
    }
    if (event.target.dataset.issueStatus) {
      updateIssueStatus(event.target.dataset.issueStatus, event.target.value);
      return;
    }
    if (event.target.dataset.issueAssignee) {
      const issue = issueByKey(event.target.dataset.issueAssignee);
      const previous = issue.assignee;
      issue.assignee = event.target.value;
      issue.history.unshift(`Reassigned from ${previous} to ${issue.assignee}`);
      DemoState.audit.unshift({ time: "Just now", actor: "Maya Okafor", action: "Reassigned work", object: issue.key });
      render();
      openIssue(issue.key);
      toast(issue.key + " reassigned", issue.assignee + " is now accountable.", "success");
      return;
    }
    if (event.target.dataset.checklistKey) {
      const issue = issueByKey(event.target.dataset.checklistKey);
      issue.checked[Number(event.target.dataset.checklistIndex)] = event.target.checked;
      issue.history.unshift("Checklist updated by Maya Okafor");
      toast("Checklist updated", issue.key + " activity recorded.");
    }
  });

  document.addEventListener("input", (event) => {
    if (event.target === globalSearch) performSearch(globalSearch.value);
    if (event.target.dataset.filter === "text") {
      DemoState.issueFilter.text = event.target.value;
      const active = document.activeElement;
      window.clearTimeout(event.target._filterTimer);
      event.target._filterTimer = window.setTimeout(() => {
        render();
        const input = document.getElementById("issueSearch");
        if (input && active) {
          input.focus();
          input.setSelectionRange(input.value.length, input.value.length);
        }
      }, 180);
    }
  });

  document.addEventListener("submit", (event) => {
    const form = event.target;
    if (form.dataset.issueComment) {
      event.preventDefault();
      const text = new FormData(form).get("comment").trim();
      if (!text) return;
      const issue = issueByKey(form.dataset.issueComment);
      issue.comments.unshift({ author: "Maya Okafor", time: "Just now", text });
      issue.history.unshift("Comment added by Maya Okafor");
      openIssue(issue.key);
      toast("Comment added", issue.key + " activity updated.", "success");
      return;
    }
    if (form.dataset.pageComment) {
      event.preventDefault();
      const text = new FormData(form).get("comment").trim();
      if (!text) return;
      const pageId = form.dataset.pageComment;
      DemoState.pageComments[pageId] = DemoState.pageComments[pageId] || [];
      DemoState.pageComments[pageId].unshift({ author: "Maya Okafor", time: "Just now", text });
      render();
      toast("Comment added", "Page discussion updated.", "success");
      return;
    }
    if (form.dataset.createForm) {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      if (form.dataset.createForm === "work") {
        const next = Math.max(...DemoState.issues.map((issue) => Number(issue.key.split("-")[1]))) + 1;
        const key = "SMN-" + next;
        DemoState.issues.push({
          key, summary: data.summary, type: data.type, status: data.sprint === "Sprint 12" ? "Ready" : "To Do", priority: data.priority,
          assignee: data.assignee, reporter: "Maya Okafor", sprint: data.sprint, epic: "—", points: 3, due: "Not set",
          description: data.description || "New work item created in the interactive prototype.", dependencies: [], linkedPage: "program-hub", risk: "", milestone: "Not set",
          checklist: ["Confirm acceptance criteria"], checked: [false], comments: [], history: ["Created by Maya Okafor"]
        });
        DemoState.audit.unshift({ time: "Just now", actor: "Maya Okafor", action: "Created work item", object: key });
        closeModal();
        render();
        toast(key + " created", "The new work item is available in the backlog and search.", "success");
        openIssue(key);
      } else if (form.dataset.createForm === "page") {
        const id = slug(data.title) + "-" + (DemoState.pages.length + 1);
        DemoState.pages.push({ id, title: data.title, parent: data.parent || null, depth: data.parent ? 1 : 0, owner: data.owner, updated: "Just now", version: 1, summary: data.summary, content: data.summary });
        DemoState.pageComments[id] = [];
        DemoState.pageVersions[id] = [{ version: 1, author: data.owner, time: "Just now", note: "Initial version" }];
        closeModal();
        DemoState.activePage = id;
        navigate("spaces", { preservePage: true });
        toast("Page created", data.title + " is now in the Sentinel Mesh Node space.", "success");
      } else {
        const number = Math.max(...DemoState.decisions.map((decision) => Number(decision.id.split("-")[1]))) + 1;
        const id = "DEC-" + String(number).padStart(3, "0");
        DemoState.decisions.unshift({ id, title: data.title, status: "Draft", owner: data.owner, approver: data.approver, due: "Not set", recommendation: data.recommendation, page: "program-hub", linkedIssue: "SMN-100", rationale: data.recommendation });
        closeModal();
        DemoState.activeDecision = id;
        navigate("decisions", { preserveDecision: true });
        toast(id + " created", "The decision is linked to the program record.", "success");
      }
      return;
    }
    if (form.dataset.editPage) {
      event.preventDefault();
      const page = pageById(form.dataset.editPage);
      const data = new FormData(form);
      page.title = data.get("title");
      page.content = document.getElementById("pageEditor").innerText.trim();
      page.version = nextPageVersion(page.id);
      page.updated = "Just now";
      DemoState.pageVersions[page.id] = DemoState.pageVersions[page.id] || [];
      DemoState.pageVersions[page.id].unshift({ version: page.version, author: "Maya Okafor", time: "Just now", note: data.get("note") || "Content updated" });
      DemoState.audit.unshift({ time: "Just now", actor: "Maya Okafor", action: "Published page version " + page.version, object: page.title });
      closeModal();
      render();
      toast("Page published", page.title + " is now version " + page.version + ".", "success");
    }
  });

  document.addEventListener("keydown", (event) => {
    const interactive = event.target.matches("input, textarea, select") || event.target.isContentEditable;
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      globalSearch.focus();
      globalSearch.select();
      return;
    }
    if (!interactive && event.key.toLowerCase() === "c") {
      event.preventDefault();
      openCreateModal("work");
      return;
    }
    if (event.key === "Escape") {
      if (!modalLayer.hidden) closeModal();
      else if (!drawerScrim.hidden) closeDrawer();
      else if (document.activeElement === globalSearch || !searchResults.hidden) {
        searchResults.hidden = true;
        globalSearch.blur();
      }
      else if (!profileMenu.hidden) profileMenu.hidden = true;
      else closeSidebar();
    }
    if ((event.key === "Enter" || event.key === " ") && event.target.matches("[data-issue], [data-project], [data-space], [data-decision], [data-risk], [data-person]") && event.target.tagName !== "BUTTON") {
      event.preventDefault();
      event.target.click();
    }
  });

  document.getElementById("createButton").addEventListener("click", () => openCreateModal("work"));
  document.getElementById("menuButton").addEventListener("click", openSidebar);
  sidebarScrim.addEventListener("click", closeSidebar);
  drawerScrim.addEventListener("click", closeDrawer);
  modalLayer.addEventListener("click", (event) => {
    if (event.target === modalLayer) closeModal();
  });
  document.getElementById("notificationButton").addEventListener("click", () => navigate("inbox"));
  document.getElementById("profileButton").addEventListener("click", () => {
    profileMenu.hidden = !profileMenu.hidden;
    document.getElementById("profileButton").setAttribute("aria-expanded", String(!profileMenu.hidden));
  });

  window.addEventListener("hashchange", () => {
    DemoState.route = routeFromHash();
    render();
  });

  DemoState.route = routeFromHash();
  if (!window.location.hash) history.replaceState(null, "", "#home");
  render();
})();
