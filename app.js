(() => {
  "use strict";

  const FIXTURE = {
    schemaVersion: 3,
    lastSavedAt: null,
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
    filterQuery: 'project = SMN AND sprint = "Sprint 12" AND status IN ("Blocked", "In Review") ORDER BY priority DESC',
    activeSavedFilter: "filter-102",
    serviceQueue: "unassigned",
    activeRequest: null,
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
      { name: "Maya Okafor", role: "Suite Administrator", team: "Program Delivery", capacity: 67, initials: "MO", color: "slate" },
      { name: "Amina Cole", role: "Request portal customer", team: "Mission Operations", capacity: 0, initials: "AC", color: "coral" },
      { name: "Jordan Lee", role: "Service Agent", team: "Enterprise Service Desk", capacity: 58, initials: "JL", color: "green" }
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
        { version: 7, author: "Priya Nair", time: "Today, 09:12", note: "Accreditation evidence added", title: "Alternate Path Decision Brief", content: "The primary certification laboratory is unavailable through 11 September. Accreditation scope for the proposed partner laboratory has been verified.", bodyHtml: "<h2>Problem</h2><p>The primary certification laboratory is unavailable through 11 September, threatening the 18 September readiness review.</p><h2>Recommendation</h2><p>Use the accredited partner laboratory with parallel evidence review. The accreditation evidence is attached and control ownership is assigned.</p>" },
        { version: 6, author: "Lena Ortiz", time: "Yesterday, 16:44", note: "Recommendation revised", title: "Alternate Path Decision Brief", content: "The primary certification laboratory is unavailable. Option B is recommended with parallel evidence review.", bodyHtml: "<h2>Problem</h2><p>The primary certification laboratory is unavailable through 11 September.</p><h2>Recommendation</h2><p>Use the partner laboratory and perform evidence review in parallel to protect the readiness-review date.</p>" },
        { version: 5, author: "Priya Nair", time: "Yesterday, 11:20", note: "Options added", title: "Alternate Path Decision Brief", content: "Three execution options are under review.", bodyHtml: "<h2>Problem</h2><p>The primary certification laboratory is unavailable.</p><h2>Options</h2><ul><li>Wait for the primary laboratory</li><li>Use the partner laboratory</li><li>Defer the readiness review</li></ul>" },
        { version: 4, author: "Imani Brooks", time: "22 Aug, 14:08", note: "Initial review draft", title: "Alternate Path Decision Brief", content: "The certification laboratory schedule creates delivery exposure.", bodyHtml: "<h2>Problem</h2><p>The certification laboratory schedule creates delivery exposure. Options and a recommendation are still being developed.</p>" }
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
    savedFilters: [
      { id: "filter-101", name: "My open work", owner: "Maya Okafor", scope: "Personal", starred: true, query: "assignee = currentUser() AND status != Done ORDER BY priority DESC" },
      { id: "filter-102", name: "Sprint 12 blockers", owner: "Lena Ortiz", scope: "Shared", starred: true, query: 'project = SMN AND sprint = "Sprint 12" AND status IN ("Blocked", "In Review") ORDER BY priority DESC' },
      { id: "filter-103", name: "Certification scope", owner: "Imani Brooks", scope: "Shared", starred: false, query: "project = SMN AND epic = SMN-100 ORDER BY priority DESC" },
      { id: "filter-104", name: "Changes awaiting approval", owner: "Lena Ortiz", scope: "Shared", starred: false, query: 'type = "Decision Task" AND status = "In Review"' },
      { id: "filter-105", name: "Breaching service requests", owner: "Jordan Lee", scope: "Shared", starred: true, kind: "service", query: "sla = breached" }
    ],
    sprints: [
      { id: "sprint-11", name: "Sprint 11", goal: "Integration Baseline", start: "10 Aug 2026", end: "21 Aug 2026", capacity: 38, committed: 38, completed: 34, status: "completed" },
      { id: "sprint-12", name: "Sprint 12", goal: "Certification Recovery", start: "24 Aug 2026", end: "04 Sep 2026", capacity: 44, committed: 44, completed: 23, status: "active" },
      { id: "sprint-13", name: "Sprint 13", goal: "Readiness Closure", start: "07 Sep 2026", end: "18 Sep 2026", capacity: 36, committed: 11, completed: 0, status: "future" }
    ],
    pageDrafts: {},
    service: {
      demoNow: "24 Aug 2026 · 10:00",
      elapsedHours: 0,
      requestTypes: [
        { id: "incident", name: "Report an incident", icon: "alert-triangle", description: "Something is unavailable, degraded, or failing." },
        { id: "access", name: "Request access", icon: "key", description: "Access a system, repository, or controlled resource." },
        { id: "software", name: "Request software", icon: "box", description: "Request an approved application or license." },
        { id: "change", name: "Request a change", icon: "refresh", description: "Propose a governed service or configuration change." },
        { id: "question", name: "Ask a question", icon: "help-circle", description: "Get help finding an answer or owner." }
      ],
      requests: [
        { key: "HELP-1042", summary: "Access to partner evidence repository", type: "access", status: "Submitted", priority: "High", requester: "Amina Cole", organization: "Mission Operations", assignee: "Unassigned", created: "Today, 06:36", description: "Certification reviewers need controlled read access to the partner evidence repository.", firstResponse: { goal: 4, elapsed: 3.4, met: false }, resolution: { goal: 24, elapsed: 3.4, met: false }, participants: ["Imani Brooks"], linkedIssue: "SMN-184", linkedPage: "evidence-index", comments: [{ author: "Amina Cole", time: "Today, 06:36", visibility: "public", text: "Access is needed before the evidence review begins." }] },
        { key: "HELP-1038", summary: "Test environment unavailable", type: "incident", status: "In progress", priority: "Highest", requester: "Theo Bennett", organization: "Systems Integration", assignee: "Jordan Lee", created: "Today, 03:18", description: "The controlled test environment returns an unavailable response for the integration team.", firstResponse: { goal: 1, elapsed: 0.4, met: true }, resolution: { goal: 8, elapsed: 7.2, met: false }, participants: ["Marcus Reed"], linkedIssue: "SMN-216", linkedPage: "irr-hub", comments: [{ author: "Jordan Lee", time: "Today, 03:42", visibility: "public", text: "We have reproduced the outage and are restoring the environment." }, { author: "Jordan Lee", time: "Today, 04:10", visibility: "internal", text: "Infrastructure escalation INC-88 is active." }] },
        { key: "HELP-1029", summary: "Partner-lab reviewer account", type: "access", status: "Pending approval", priority: "High", requester: "Imani Brooks", organization: "Certification & Assurance", assignee: "Jordan Lee", created: "Yesterday", description: "Create a time-limited reviewer identity for the accredited partner laboratory.", firstResponse: { goal: 4, elapsed: 0.8, met: true }, resolution: { goal: 24, elapsed: 9.5, met: false }, participants: ["Dana Kessler"], linkedIssue: "SMN-191", linkedPage: "alternate-path", comments: [{ author: "Jordan Lee", time: "Yesterday", visibility: "public", text: "The request is waiting for the assigned approver." }] },
        { key: "HELP-1017", summary: "Telemetry export intermittently fails", type: "incident", status: "Waiting for customer", priority: "Medium", requester: "Theo Bennett", organization: "Systems Integration", assignee: "Jordan Lee", created: "22 Aug", description: "CSV telemetry exports fail intermittently for disconnected-mode runs.", firstResponse: { goal: 4, elapsed: 1.1, met: true }, resolution: { goal: 32, elapsed: 12.8, met: false }, participants: [], linkedIssue: "SMN-205", linkedPage: "interface-matrix", comments: [{ author: "Jordan Lee", time: "23 Aug", visibility: "public", text: "Please attach the timestamp from the next failed export." }] },
        { key: "HELP-1004", summary: "Update controlled distribution list", type: "change", status: "Resolved", priority: "Low", requester: "Lena Ortiz", organization: "Program Delivery", assignee: "Jordan Lee", created: "19 Aug", description: "Add the certification reviewers to the controlled weekly distribution.", firstResponse: { goal: 4, elapsed: 0.6, met: true }, resolution: { goal: 40, elapsed: 14.2, met: true }, participants: [], linkedIssue: "SMN-219", linkedPage: "working-agreements", resolutionSummary: "Distribution list updated and confirmed with the request owner.", comments: [{ author: "Jordan Lee", time: "20 Aug", visibility: "public", text: "The list is updated and the next distribution is scheduled." }] }
      ]
    },
    automations: [
      { id: "rule-1", name: "Decision unblocks dependent work", detail: "When an approved decision closes a blocker, move dependent items to Ready and notify owners.", enabled: true, runs: 18, last: "2 days ago" },
      { id: "rule-2", name: "Overdue evidence escalation", detail: "Alert the certification lead when required evidence is overdue by one business day.", enabled: true, runs: 7, last: "Yesterday" },
      { id: "rule-3", name: "Leadership brief refresh", detail: "Refresh the leadership brief when milestone, risk, or decision facts change.", enabled: true, runs: 32, last: "41 min ago" },
      { id: "rule-4", name: "Draft-page review reminder", detail: "Remind page owners when a governed page remains in draft for five days.", enabled: false, runs: 0, last: "Never" }
    ]
  };

  function seedPortfolioFixture() {
    const projectUpdates = {
      SMN: { type: "Product delivery", releaseName: "Release 1" },
      HRU: { type: "Infrastructure", releaseName: "Relay 3.4" },
      BTE: { type: "Platform enablement", releaseName: "Environment 1.0" }
    };
    FIXTURE.projects.forEach((project) => Object.assign(project, projectUpdates[project.key] || { type: "Delivery project", releaseName: "Next release" }));
    FIXTURE.projects.push(
      { key: "ZTA", name: "Zero Trust Access", type: "Cybersecurity", health: "Amber", completion: 43, confidence: 68, releaseName: "Access Wave 2", release: "04 Dec 2026", objective: "Move priority applications to federated, policy-driven access without interrupting mission operations.", owner: "Evan Kim", description: "Identity federation, conditional access, privileged-role governance, and service-account migration." },
      { key: "EGL", name: "Evidence Governance Library", type: "Knowledge & compliance", health: "Green", completion: 86, confidence: 93, releaseName: "Library 3.0", release: "18 Sep 2026", objective: "Publish a governed evidence catalog with complete ownership, retention, and review metadata.", owner: "Imani Brooks", description: "Shared evidence taxonomy, retention controls, ownership, and automated review reminders." },
      { key: "OPS", name: "Operations Intake Modernization", type: "Business transformation", health: "Red", completion: 36, confidence: 42, releaseName: "Pilot 1", release: "11 Dec 2026", objective: "Replace fragmented intake paths with one governed request, approval, routing, and reporting workflow.", owner: "Lena Ortiz", description: "Unified intake, approval routing, ownership controls, agent enablement, and phased adoption." },
      { key: "DCP", name: "Data Connection Platform", type: "Data integration", health: "Amber", completion: 69, confidence: 77, releaseName: "Partner Beta", release: "06 Nov 2026", objective: "Onboard partner data feeds through repeatable schemas, quality controls, replay, and traceable acceptance.", owner: "Marcus Reed", description: "Partner onboarding, ingestion reliability, schema governance, quality thresholds, and replay services." }
    );

    ["issues", "pages", "decisions", "risks", "milestones", "sprints"].forEach((collection) => {
      FIXTURE[collection].forEach((record) => { record.projectKey = "SMN"; });
    });

    const issue = (projectKey, key, summary, type, status, priority, assignee, sprint, points, due, linkedPage, risk = "", epic = "—") => ({
      projectKey, key, summary, type, status, priority, assignee, reporter: FIXTURE.projects.find((project) => project.key === projectKey)?.owner || "Maya Okafor",
      sprint, epic, points, due, description: `${summary} is governed delivery work for ${FIXTURE.projects.find((project) => project.key === projectKey)?.name || projectKey}. Acceptance, evidence, ownership, and activity remain traceable in this workspace.`,
      dependencies: [], linkedPage, risk, milestone: "Next release", checklist: ["Acceptance criteria confirmed", "Owner and evidence identified", "Review outcome recorded"],
      checked: [true, status === "Done", status === "Done"], comments: [{ author: assignee, time: "Yesterday", text: "Current status and next action have been reviewed with the delivery team." }], history: [`Status is ${status}`, `Added to ${sprint}`]
    });
    const page = (projectKey, id, title, parent, owner, version, summary) => ({ projectKey, id, title, parent, depth: parent ? 1 : 0, owner, updated: version > 6 ? "Today" : "Yesterday", version, summary, content: `${summary} This governed page connects operating context to accountable work, decisions, risks, evidence, and review history.` });
    const sprint = (projectKey, id, name, goal, start, end, capacity, status) => ({ projectKey, id, name, goal, start, end, capacity, committed: 0, completed: 0, status });
    const milestone = (projectKey, name, target, forecast, status, issueKey) => ({ projectKey, name, target, forecast, status, issue: issueKey });
    const risk = (projectKey, id, title, score, level, owner, response, issueKey) => ({ projectKey, id, title, score, level, owner, response, issue: issueKey });
    const decision = (projectKey, id, title, status, owner, approver, due, recommendation, pageId, issueKey) => ({ projectKey, id, title, status, owner, approver, due, recommendation, page: pageId, linkedIssue: issueKey, rationale: `${recommendation}. The selected path balances delivery outcome, risk, governance, and available capacity.` });

    FIXTURE.sprints.push(
      sprint("HRU", "hru-s8", "HRU Sprint 8", "Relay acceptance", "24 Aug 2026", "04 Sep 2026", 32, "active"), sprint("HRU", "hru-s9", "HRU Sprint 9", "Transition closure", "07 Sep 2026", "18 Sep 2026", 28, "future"),
      sprint("BTE", "bte-s5", "BTE Sprint 5", "Repeatable environments", "24 Aug 2026", "04 Sep 2026", 34, "active"), sprint("BTE", "bte-s6", "BTE Sprint 6", "Pilot onboarding", "07 Sep 2026", "18 Sep 2026", 30, "future"),
      sprint("ZTA", "zta-s3", "ZTA Sprint 3", "Identity pilot", "24 Aug 2026", "04 Sep 2026", 30, "active"), sprint("ZTA", "zta-s4", "ZTA Sprint 4", "Service-account migration", "07 Sep 2026", "18 Sep 2026", 34, "future"),
      sprint("EGL", "egl-s7", "EGL Sprint 7", "Taxonomy adoption", "24 Aug 2026", "04 Sep 2026", 26, "active"), sprint("EGL", "egl-s8", "EGL Sprint 8", "Owner attestation", "07 Sep 2026", "18 Sep 2026", 24, "future"),
      sprint("OPS", "ops-s2", "OPS Sprint 2", "Routing validation", "24 Aug 2026", "04 Sep 2026", 28, "active"), sprint("OPS", "ops-s3", "OPS Sprint 3", "Pilot readiness", "07 Sep 2026", "18 Sep 2026", 32, "future"),
      sprint("DCP", "dcp-s6", "DCP Sprint 6", "Quality controls", "24 Aug 2026", "04 Sep 2026", 36, "active"), sprint("DCP", "dcp-s7", "DCP Sprint 7", "Partner Beta", "07 Sep 2026", "18 Sep 2026", 38, "future")
    );

    FIXTURE.pages.push(
      page("HRU", "hru-hub", "Horizon Relay Hub", null, "Priya Nair", 8, "Delivery home for relay modernization, acceptance, transition, and operations."), page("HRU", "hru-cutover", "Cutover and Acceptance Plan", "hru-hub", "Marcus Reed", 5, "Controlled cutover steps, evidence, maintenance windows, and acceptance ownership."),
      page("BTE", "bte-hub", "Beacon Environment Hub", null, "Priya Nair", 6, "Self-service environment roadmap, pilot guidance, ownership, and current readiness."), page("BTE", "bte-retention", "Snapshot Retention Decision", "bte-hub", "Priya Nair", 3, "Retention options, cost exposure, recommendation, and approval record."), page("BTE", "bte-architecture", "Environment Architecture", "bte-hub", "Theo Bennett", 4, "Baseline images, reset automation, controls, and environment topology."),
      page("ZTA", "zta-hub", "Zero Trust Access Hub", null, "Evan Kim", 7, "Identity rollout, applications, service accounts, controls, exceptions, and readiness."), page("ZTA", "zta-policy", "Access Exception Policy", "zta-hub", "Evan Kim", 4, "Time-bound exception rules, owners, approval thresholds, and retirement controls."),
      page("EGL", "egl-hub", "Evidence Governance Hub", null, "Imani Brooks", 9, "Evidence ownership, review cadence, retention, and adoption status."), page("EGL", "egl-taxonomy", "Evidence Taxonomy v3", "egl-hub", "Priya Nair", 6, "Approved metadata, evidence classes, lifecycle rules, and examples."),
      page("OPS", "ops-hub", "Operations Intake Hub", null, "Lena Ortiz", 5, "Operating model, pilot scope, service promise, roles, and adoption plan."), page("OPS", "ops-routing", "Routing and Approval Design", "ops-hub", "Priya Nair", 4, "Request routing, ownership, approval paths, exceptions, and retention mapping."),
      page("DCP", "dcp-hub", "Data Connection Hub", null, "Marcus Reed", 8, "Partner onboarding, schemas, operational controls, releases, and support ownership."), page("DCP", "dcp-quality", "Data Quality Thresholds", "dcp-hub", "Marcus Reed", 5, "Warning and rejection tolerances, replay behavior, metrics, and governance." )
    );

    FIXTURE.issues.push(
      issue("HRU", "HRU-100", "Site Acceptance", "Epic", "In Progress", "High", "Marcus Reed", "Portfolio backlog", 21, "30 Sep 2026", "hru-hub"), issue("HRU", "HRU-121", "Complete east relay cutover", "Story", "In Progress", "High", "Marcus Reed", "HRU Sprint 8", 8, "08 Sep 2026", "hru-cutover", "RISK-21", "HRU-100"), issue("HRU", "HRU-128", "Validate failover telemetry", "Task", "Done", "Medium", "Theo Bennett", "HRU Sprint 8", 5, "28 Aug 2026", "hru-cutover", "", "HRU-100"), issue("HRU", "HRU-137", "Approve maintenance window", "Decision Task", "In Review", "High", "Marcus Reed", "HRU Sprint 8", 3, "02 Sep 2026", "hru-cutover", "", "HRU-100"), issue("HRU", "HRU-142", "Deliver operator handoff", "Task", "To Do", "Medium", "Priya Nair", "HRU Sprint 9", 5, "25 Sep 2026", "hru-hub", "", "HRU-100"),
      issue("BTE", "BTE-100", "Self-service Environments", "Epic", "In Progress", "High", "Priya Nair", "Portfolio backlog", 21, "14 Nov 2026", "bte-hub"), issue("BTE", "BTE-54", "Publish baseline images", "Story", "In Progress", "High", "Theo Bennett", "BTE Sprint 5", 8, "03 Sep 2026", "bte-architecture", "", "BTE-100"), issue("BTE", "BTE-61", "Automate environment reset", "Task", "Ready", "Medium", "Marcus Reed", "BTE Sprint 5", 5, "04 Sep 2026", "bte-architecture", "RISK-25", "BTE-100"), issue("BTE", "BTE-67", "Approve snapshot retention window", "Decision Task", "In Review", "Medium", "Priya Nair", "BTE Sprint 5", 3, "01 Sep 2026", "bte-retention", "", "BTE-100"), issue("BTE", "BTE-74", "Onboard pilot cohort", "Story", "To Do", "Medium", "Priya Nair", "BTE Sprint 6", 8, "30 Sep 2026", "bte-hub", "", "BTE-100"),
      issue("ZTA", "ZTA-100", "Identity Federation", "Epic", "In Progress", "Highest", "Evan Kim", "Portfolio backlog", 34, "04 Dec 2026", "zta-hub"), issue("ZTA", "ZTA-42", "Reconcile privileged roles", "Risk Action", "Blocked", "Highest", "Evan Kim", "ZTA Sprint 3", 8, "04 Sep 2026", "zta-policy", "RISK-30", "ZTA-100"), issue("ZTA", "ZTA-47", "Enable conditional access", "Story", "In Progress", "High", "Theo Bennett", "ZTA Sprint 3", 8, "03 Sep 2026", "zta-policy", "", "ZTA-100"), issue("ZTA", "ZTA-59", "Approve time-bound exception policy", "Decision Task", "In Review", "High", "Evan Kim", "ZTA Sprint 3", 3, "02 Sep 2026", "zta-policy", "", "ZTA-100"), issue("ZTA", "ZTA-64", "Migrate service accounts", "Story", "To Do", "High", "Marcus Reed", "ZTA Sprint 4", 13, "30 Oct 2026", "zta-hub", "", "ZTA-100"),
      issue("EGL", "EGL-100", "Governed Evidence Catalog", "Epic", "In Progress", "High", "Imani Brooks", "Portfolio backlog", 21, "18 Sep 2026", "egl-hub"), issue("EGL", "EGL-26", "Add retention metadata", "Story", "In Review", "Medium", "Imani Brooks", "EGL Sprint 7", 5, "03 Sep 2026", "egl-taxonomy", "RISK-32", "EGL-100"), issue("EGL", "EGL-31", "Implement review reminders", "Task", "In Progress", "Medium", "Priya Nair", "EGL Sprint 7", 5, "04 Sep 2026", "egl-hub", "", "EGL-100"), issue("EGL", "EGL-35", "Publish taxonomy v3", "Task", "Done", "High", "Priya Nair", "EGL Sprint 7", 3, "28 Aug 2026", "egl-taxonomy", "", "EGL-100"), issue("EGL", "EGL-41", "Complete owner attestation", "Task", "To Do", "Medium", "Imani Brooks", "EGL Sprint 8", 8, "16 Oct 2026", "egl-hub", "", "EGL-100"),
      issue("OPS", "OPS-100", "Unified Intake", "Epic", "In Progress", "Highest", "Lena Ortiz", "Portfolio backlog", 34, "11 Dec 2026", "ops-hub"), issue("OPS", "OPS-21", "Prototype routing rules", "Story", "In Review", "High", "Lena Ortiz", "OPS Sprint 2", 8, "04 Sep 2026", "ops-routing", "", "OPS-100"), issue("OPS", "OPS-27", "Validate approval paths", "Task", "Blocked", "Highest", "Priya Nair", "OPS Sprint 2", 5, "03 Sep 2026", "ops-routing", "RISK-36", "OPS-100"), issue("OPS", "OPS-34", "Complete retention mapping", "Risk Action", "In Progress", "High", "Imani Brooks", "OPS Sprint 2", 5, "04 Sep 2026", "ops-routing", "", "OPS-100"), issue("OPS", "OPS-38", "Train pilot agents", "Story", "To Do", "Medium", "Jordan Lee", "OPS Sprint 3", 8, "30 Oct 2026", "ops-hub", "", "OPS-100"),
      issue("DCP", "DCP-100", "Partner Data Onboarding", "Epic", "In Progress", "High", "Marcus Reed", "Portfolio backlog", 34, "06 Nov 2026", "dcp-hub"), issue("DCP", "DCP-79", "Resolve ingestion errors", "Bug", "In Progress", "High", "Theo Bennett", "DCP Sprint 6", 8, "03 Sep 2026", "dcp-quality", "RISK-42", "DCP-100"), issue("DCP", "DCP-84", "Configure replay service", "Task", "Ready", "Medium", "Marcus Reed", "DCP Sprint 6", 5, "04 Sep 2026", "dcp-hub", "", "DCP-100"), issue("DCP", "DCP-88", "Approve quality thresholds", "Decision Task", "In Review", "High", "Marcus Reed", "DCP Sprint 6", 3, "02 Sep 2026", "dcp-quality", "", "DCP-100"), issue("DCP", "DCP-99", "Onboard Partner Beta", "Story", "To Do", "High", "Theo Bennett", "DCP Sprint 7", 13, "23 Oct 2026", "dcp-hub", "", "DCP-100")
    );

    const seededDependencies = {
      "HRU-121": ["HRU-137"], "HRU-142": ["HRU-137", "HRU-121"],
      "BTE-61": ["BTE-67"], "BTE-74": ["BTE-67", "BTE-61"],
      "ZTA-42": ["ZTA-59"], "ZTA-64": ["ZTA-59", "ZTA-42"],
      "OPS-27": ["OPS-21"], "OPS-38": ["OPS-21", "OPS-27"],
      "DCP-79": ["DCP-88"], "DCP-99": ["DCP-88", "DCP-79"]
    };
    Object.entries(seededDependencies).forEach(([key, dependencies]) => {
      const record = FIXTURE.issues.find((item) => item.key === key);
      if (record) record.dependencies = dependencies;
    });
    const approvedDcpWork = FIXTURE.issues.find((item) => item.key === "DCP-88");
    const releasedDcpWork = FIXTURE.issues.find((item) => item.key === "DCP-99");
    if (approvedDcpWork) approvedDcpWork.status = "Done";
    if (releasedDcpWork) releasedDcpWork.status = "Ready";

    FIXTURE.risks.push(
      risk("HRU", "RISK-21", "Legacy power-module instability", 9, "Moderate", "Marcus Reed", "Complete burn-in before cutover", "HRU-121"),
      risk("BTE", "RISK-25", "Provisioning concurrency limit", 12, "Moderate", "Theo Bennett", "Load-test reset automation", "BTE-61"),
      risk("ZTA", "RISK-30", "Service-account compatibility", 16, "High", "Evan Kim", "Pilot exceptions and retire legacy authentication by wave", "ZTA-42"),
      risk("EGL", "RISK-32", "Unowned legacy evidence", 6, "Moderate", "Imani Brooks", "Assign owners before archive decision", "EGL-26"),
      risk("OPS", "RISK-36", "Request ownership gaps", 20, "High", "Lena Ortiz", "Resolve approval ownership before pilot", "OPS-27"),
      risk("DCP", "RISK-42", "Partner format drift", 8, "Moderate", "Marcus Reed", "Enforce schema and replay quarantine", "DCP-79")
    );
    FIXTURE.milestones.push(
      milestone("HRU", "East site acceptance", "16 Sep", "16 Sep", "On track", "HRU-121"), milestone("HRU", "Transition complete", "30 Sep", "30 Sep", "On track", "HRU-142"),
      milestone("BTE", "Baseline available", "30 Sep", "02 Oct", "At risk", "BTE-54"), milestone("BTE", "Pilot cohort", "14 Nov", "14 Nov", "On track", "BTE-74"),
      milestone("ZTA", "Authentication pilot", "09 Oct", "14 Oct", "At risk", "ZTA-47"), milestone("ZTA", "Wave 2 cutover", "04 Dec", "04 Dec", "On track", "ZTA-64"),
      milestone("EGL", "Taxonomy published", "18 Sep", "18 Sep", "On track", "EGL-35"), milestone("EGL", "Owner attestation", "16 Oct", "16 Oct", "On track", "EGL-41"),
      milestone("OPS", "Design sign-off", "25 Sep", "07 Oct", "At risk", "OPS-27"), milestone("OPS", "Pilot launch", "11 Dec", "18 Dec", "At risk", "OPS-38"),
      milestone("DCP", "Partner Alpha exit", "25 Sep", "25 Sep", "On track", "DCP-84"), milestone("DCP", "Partner Beta launch", "06 Nov", "13 Nov", "At risk", "DCP-99")
    );
    FIXTURE.decisions.push(
      decision("HRU", "DEC-021", "Approve protected maintenance window", "Pending", "Marcus Reed", "Dana Kessler", "02 Sep 2026", "Window B", "hru-cutover", "HRU-137"),
      decision("BTE", "DEC-024", "Set snapshot retention window", "Pending", "Priya Nair", "Lena Ortiz", "01 Sep 2026", "Thirty days", "bte-retention", "BTE-67"),
      decision("ZTA", "DEC-029", "Adopt time-bound exception policy", "Pending", "Evan Kim", "Dana Kessler", "02 Sep 2026", "90-day maximum", "zta-policy", "ZTA-59"),
      decision("EGL", "DEC-032", "Adopt evidence taxonomy v3", "Approved", "Imani Brooks", "Lena Ortiz", "28 Aug 2026", "Taxonomy v3", "egl-taxonomy", "EGL-35"),
      decision("OPS", "DEC-036", "Use phased intake cutover", "Pending", "Lena Ortiz", "Dana Kessler", "04 Sep 2026", "Two-team pilot before enterprise rollout", "ops-routing", "OPS-21"),
      decision("DCP", "DEC-041", "Adopt quality tolerance bands", "Approved", "Marcus Reed", "Lena Ortiz", "02 Sep 2026", "Tiered warn and reject thresholds", "dcp-quality", "DCP-88")
    );

    FIXTURE.pages.push(
      Object.assign(page("SMN", "help-access", "Requesting Controlled Access", "program-hub", "Jordan Lee", 3, "Customer-safe guidance for requesting repository, system, or workspace access."), { helpCenter: true, bodyHtml: "<h2>Before you submit</h2><p>Name the system, business purpose, required role, sponsor, and date access is needed.</p><h2>What happens next</h2><p>The service desk validates ownership, routes any approval, and records the outcome in the request activity.</p>" }),
      Object.assign(page("SMN", "help-incident", "What to Include in an Incident", "program-hub", "Jordan Lee", 4, "Customer-safe guidance for reporting an unavailable or degraded service."), { helpCenter: true, bodyHtml: "<h2>Describe the impact</h2><p>Include the affected service, people impacted, start time, error text, and any workaround already attempted.</p><h2>For urgent impact</h2><p>Select Critical only when mission work is stopped or a major service is unavailable.</p>" }),
      Object.assign(page("SMN", "help-software", "Software Request Checklist", "program-hub", "Jordan Lee", 2, "Customer-safe guidance for requesting an approved application or license."), { helpCenter: true, bodyHtml: "<h2>Required information</h2><p>Provide the software name, business need, number of users, cost center, required date, and device type.</p><h2>Approval</h2><p>Requests requiring a license or exception are routed to the accountable approver.</p>" })
    );

    FIXTURE.pages.forEach((record) => {
      if (!FIXTURE.pageComments[record.id]) FIXTURE.pageComments[record.id] = [];
      if (!FIXTURE.pageVersions[record.id]) FIXTURE.pageVersions[record.id] = [{ version: record.version, author: record.owner, time: record.updated, note: "Current governed version", title: record.title, content: record.content, bodyHtml: `<h2>Purpose</h2><p>${record.content}</p>` }];
    });
  }

  seedPortfolioFixture();

  const SCHEMA_VERSION = 3;
  const STORAGE_KEY = "upms-demo-v3";
  const PERSONAS = {
    "Maya Okafor": { role: "Suite administrator", key: "administrator", defaultRoute: "home", capabilities: ["all"] },
    "Lena Ortiz": { role: "Project lead", key: "project-lead", defaultRoute: "home", capabilities: ["edit-work", "create-work", "manage-sprint", "edit-knowledge", "publish-knowledge", "archive-knowledge", "comment"] },
    "Theo Bennett": { role: "Contributor", key: "contributor", defaultRoute: "my-work", capabilities: ["edit-assigned-work", "draft-knowledge", "comment"] },
    "Dana Kessler": { role: "Executive approver", key: "executive", defaultRoute: "leadership", capabilities: ["approve", "read-work", "comment"] },
    "Amina Cole": { role: "Requester", key: "customer", defaultRoute: "portal", capabilities: ["request-service", "comment"] },
    "Jordan Lee": { role: "Service agent", key: "agent", defaultRoute: "queues", capabilities: ["manage-service", "read-work", "comment"] }
  };
  const ROUTE_ACCESS = {
    customer: ["portal"],
    agent: ["home", "inbox", "portal", "queues", "slas", "spaces"],
    executive: ["home", "inbox", "projects", "timeline", "releases", "spaces", "decisions", "reports", "leadership", "queues", "slas"],
    contributor: ["home", "my-work", "inbox", "projects", "backlog", "board", "timeline", "releases", "spaces", "decisions", "filters", "reports", "people"],
    "project-lead": ["home", "my-work", "inbox", "projects", "backlog", "board", "timeline", "releases", "spaces", "decisions", "filters", "reports", "leadership", "people", "automation", "portal", "queues", "slas"],
    administrator: ["home", "my-work", "inbox", "projects", "backlog", "board", "timeline", "releases", "spaces", "decisions", "filters", "reports", "leadership", "people", "automation", "admin", "migration", "portal", "queues", "slas"]
  };
  const SAFE_RECORD_ID = /^[A-Za-z0-9][A-Za-z0-9._:-]{0,79}$/;
  const ISSUE_STATUSES = new Set(["To Do", "Ready", "In Progress", "In Review", "Blocked", "Done"]);
  const DECISION_STATUSES = new Set(["Draft", "Pending", "Approved", "Superseded"]);
  const PRIMARY_DEPENDENT_KEYS = ["SMN-184", "SMN-202", "SMN-205", "SMN-206", "SMN-207", "SMN-214"];
  const PRIORITIES = new Set(["Low", "Medium", "High", "Highest"]);
  const SERVICE_STATUSES = new Set(["Submitted", "Triage", "In progress", "Waiting for customer", "Pending approval", "Resolved", "Closed"]);
  const SPRINT_STATUSES = new Set(["completed", "active", "future"]);
  const PERSON_COLORS = new Set(["coral", "deep", "green", "orange", "sky", "slate"]);
  const MAX_IMPORT_BYTES = 5 * 1024 * 1024;

  let storageHealthy = true;
  let pendingImportState = null;
  let draftTimer = null;

  function validateStateCandidate(candidate) {
    if (!candidate || typeof candidate !== "object" || Array.isArray(candidate)) return "The snapshot root must be an object.";
    if (Number(candidate.schemaVersion) !== SCHEMA_VERSION) return `Expected schema ${SCHEMA_VERSION}.`;

    const requiredArrays = ["projects", "people", "issues", "pages", "decisions", "risks", "milestones", "notifications", "audit", "automations", "savedFilters", "sprints"];
    for (const key of requiredArrays) {
      if (!Array.isArray(candidate[key])) return `Required collection “${key}” is missing.`;
      if (candidate[key].length > 5000) return `Collection “${key}” exceeds the demo import limit.`;
      if (candidate[key].some((item) => !item || typeof item !== "object" || Array.isArray(item))) return `Collection “${key}” contains an invalid record.`;
    }
    if (!candidate.service || typeof candidate.service !== "object" || !Array.isArray(candidate.service.requests) || !Array.isArray(candidate.service.requestTypes)) return "Service-management collections are missing.";
    if (!candidate.pageVersions || typeof candidate.pageVersions !== "object" || Array.isArray(candidate.pageVersions)) return "Page version history is missing.";
    if (!candidate.pageComments || typeof candidate.pageComments !== "object" || Array.isArray(candidate.pageComments)) return "Page comments are missing.";
    if (!PERSONAS[candidate.currentUser]) return "The selected persona is not recognized.";

    const requireSafeIds = (records, field, label) => {
      const seen = new Set();
      for (const record of records) {
        const value = record[field];
        if (typeof value !== "string" || !SAFE_RECORD_ID.test(value)) return `${label} contains an unsafe ${field}.`;
        if (seen.has(value)) return `${label} contains duplicate ${field} “${value}”.`;
        seen.add(value);
      }
      return "";
    };
    const idChecks = [
      [candidate.projects, "key", "Projects"],
      [candidate.issues, "key", "Work items"],
      [candidate.pages, "id", "Pages"],
      [candidate.decisions, "id", "Decisions"],
      [candidate.risks, "id", "Risks"],
      [candidate.sprints, "id", "Sprints"],
      [candidate.savedFilters, "id", "Saved filters"],
      [candidate.automations, "id", "Automation rules"],
      [candidate.service.requestTypes, "id", "Request types"],
      [candidate.service.requests, "key", "Service requests"]
    ];
    for (const [records, field, label] of idChecks) {
      const error = requireSafeIds(records, field, label);
      if (error) return error;
    }

    const projectKeys = new Set(candidate.projects.map((item) => item.key));
    const issueKeys = new Set(candidate.issues.map((item) => item.key));
    const pageIds = new Set(candidate.pages.map((item) => item.id));
    const decisionIds = new Set(candidate.decisions.map((item) => item.id));
    const riskIds = new Set(candidate.risks.map((item) => item.id));
    const requestTypeIds = new Set(candidate.service.requestTypes.map((item) => item.id));
    const requestKeys = new Set(candidate.service.requests.map((item) => item.key));
    const requiredSentinelIssues = ["SMN-191", "SMN-184", "SMN-202", "SMN-205", "SMN-206", "SMN-207", "SMN-214"];
    if (!projectKeys.has(candidate.currentProject)) return "The selected project is not recognized.";
    if (!projectKeys.has("SMN") || requiredSentinelIssues.some((key) => !issueKeys.has(key)) || !pageIds.has("program-hub") || !pageIds.has("alternate-path") || !decisionIds.has("DEC-014") || !riskIds.has("RISK-07")) return "The required Sentinel demonstration records are missing.";
    if (requiredSentinelIssues.some((key) => candidate.issues.find((issue) => issue.key === key)?.projectKey !== "SMN") || ["program-hub", "alternate-path"].some((id) => candidate.pages.find((page) => page.id === id)?.projectKey !== "SMN") || candidate.decisions.find((decision) => decision.id === "DEC-014")?.projectKey !== "SMN" || candidate.risks.find((risk) => risk.id === "RISK-07")?.projectKey !== "SMN") return "The Sentinel approval storyline must remain scoped to SMN.";
    if (!candidate.sprints.some((item) => item.status === "active" || item.status === "future")) return "An active or future sprint is required.";
    const sentinelDecision = candidate.decisions.find((decision) => decision.id === "DEC-014");
    const sentinelRisk = candidate.risks.find((risk) => risk.id === "RISK-07");
    const sentinelApprovalTask = candidate.issues.find((issue) => issue.key === "SMN-191");
    const sentinelDependentKeys = PRIMARY_DEPENDENT_KEYS;
    const sentinelMilestones = new Map([
      ["Alternate path decision", "SMN-191"],
      ["Evidence review", "SMN-184"],
      ["Integration Readiness Review", "SMN-120"]
    ]);
    if (!sentinelDecision || sentinelDecision.page !== "alternate-path" || sentinelDecision.linkedIssue !== "SMN-191" || !sentinelRisk || sentinelRisk.issue !== "SMN-191" || sentinelDependentKeys.some((key) => !candidate.issues.find((issue) => issue.key === key)?.dependencies.includes("SMN-191")) || !Array.isArray(candidate.pageVersions["alternate-path"]) || !candidate.pageVersions["alternate-path"].length || !Array.isArray(sentinelApprovalTask?.checked) || sentinelApprovalTask.checked.length < 3) return "The Sentinel decision storyline graph is incomplete or contradictory.";
    if ([...sentinelMilestones].some(([name, issue]) => !candidate.milestones.some((item) => item.projectKey === "SMN" && item.name === name && item.issue === issue))) return "Required schedule milestones are missing or mislinked.";
    if (typeof candidate.decisionApproved !== "boolean" || candidate.decisionApproved !== (sentinelDecision.status === "Approved") || !["Pending", "Approved"].includes(sentinelDecision.status)) return "The Sentinel approval flag and DEC-014 lifecycle are inconsistent.";
    if (candidate.decisionApproved) {
      const milestone = (name) => candidate.milestones.find((item) => item.projectKey === "SMN" && item.name === name);
      const dependentsRemainReleased = sentinelDependentKeys.every((key) => {
        const issue = candidate.issues.find((item) => item.key === key);
        return issue && !["To Do", "Blocked"].includes(issue.status);
      });
      const releasedKeys = sentinelDecision.releasedKeys;
      const uniqueReleasedKeys = Array.isArray(releasedKeys) ? new Set(releasedKeys) : new Set();
      const releaseHistoryIsTraceable = Array.isArray(releasedKeys) && releasedKeys.every((key) => {
        const issue = candidate.issues.find((item) => item.key === key);
        return sentinelDependentKeys.includes(key) && Array.isArray(issue?.history) && issue.history.includes("Automatically moved to Ready after DEC-014 approval");
      });
      const releaseAuditIsTraceable = candidate.audit.some((event) => event.action === `Released ${sentinelDecision.releasedCount} dependent work item${sentinelDecision.releasedCount === 1 ? "" : "s"}` && event.object === "SMN-191");
      if (sentinelApprovalTask.status !== "Done" || !dependentsRemainReleased || typeof sentinelRisk.score !== "number" || sentinelRisk.score > 6 || !["Low", "Moderate"].includes(sentinelRisk.level) || !Number.isInteger(sentinelDecision.releasedCount) || sentinelDecision.releasedCount < 0 || sentinelDecision.releasedCount > sentinelDependentKeys.length || !Array.isArray(releasedKeys) || releasedKeys.length !== sentinelDecision.releasedCount || uniqueReleasedKeys.size !== releasedKeys.length || !releaseHistoryIsTraceable || !releaseAuditIsTraceable || milestone("Alternate path decision")?.status !== "On track" || milestone("Evidence review")?.forecast !== "04 Sep" || milestone("Integration Readiness Review")?.forecast !== "18 Sep") return "The approved Sentinel storyline contains unresolved work, risk, schedule, or audit facts.";
    }

    const finiteInRange = (value, min, max) => typeof value === "number" && Number.isFinite(value) && value >= min && value <= max;
    const hasTextFields = (record, fields, maxLength = 100000) => fields.every((field) => typeof record[field] === "string" && record[field].length <= maxLength);
    for (const project of candidate.projects) {
      if (!hasTextFields(project, ["key", "name", "type", "health", "releaseName", "release", "objective", "owner", "description"]) || !finiteInRange(project.completion, 0, 100) || !finiteInRange(project.confidence, 0, 100)) return `Project ${project.key} has invalid fields or metrics.`;
    }
    for (const person of candidate.people) {
      if (!hasTextFields(person, ["name", "initials", "color", "role", "team"]) || !person.name.trim() || !PERSON_COLORS.has(person.color) || !finiteInRange(person.capacity, 0, 100)) return "A people record is invalid.";
    }
    for (const issue of candidate.issues) {
      if (!hasTextFields(issue, ["projectKey", "key", "summary", "type", "status", "priority", "assignee", "reporter", "sprint", "epic", "due", "description", "linkedPage", "risk", "milestone"]) || !projectKeys.has(issue.projectKey) || !ISSUE_STATUSES.has(issue.status) || !PRIORITIES.has(issue.priority) || !finiteInRange(issue.points, 0, 100)) return `Work item ${issue.key} has invalid project, fields, status, priority, or estimate data.`;
      if (!Array.isArray(issue.dependencies) || issue.dependencies.some((key) => !issueKeys.has(key))) return `Work item ${issue.key} has an invalid dependency.`;
      if (issue.linkedPage && !pageIds.has(issue.linkedPage)) return `Work item ${issue.key} links to an unknown page.`;
      if (issue.risk && !riskIds.has(issue.risk)) return `Work item ${issue.key} links to an unknown risk.`;
      if (issue.linkedPage && candidate.pages.find((page) => page.id === issue.linkedPage)?.projectKey !== issue.projectKey) return `Work item ${issue.key} links across projects.`;
      if (issue.risk && candidate.risks.find((risk) => risk.id === issue.risk)?.projectKey !== issue.projectKey) return `Work item ${issue.key} links to a risk in another project.`;
      if (issue.dependencies.some((key) => candidate.issues.find((candidateIssue) => candidateIssue.key === key)?.projectKey !== issue.projectKey)) return `Work item ${issue.key} has a cross-project dependency.`;
      if (issue.epic !== "—") {
        const epic = candidate.issues.find((candidateIssue) => candidateIssue.key === issue.epic);
        if (!epic || epic.type !== "Epic" || epic.projectKey !== issue.projectKey) return `Work item ${issue.key} has an invalid or cross-project epic.`;
      }
      if (!["Backlog", "Portfolio backlog"].includes(issue.sprint) && !candidate.sprints.some((sprint) => sprint.name === issue.sprint && sprint.projectKey === issue.projectKey)) return `Work item ${issue.key} has an invalid or cross-project sprint.`;
      if (![issue.checklist, issue.checked, issue.comments, issue.history].every(Array.isArray)) return `Work item ${issue.key} has incomplete activity data.`;
    }
    for (const page of candidate.pages) {
      if (!hasTextFields(page, ["projectKey", "id", "title", "owner", "updated", "summary", "content"]) || !projectKeys.has(page.projectKey) || !finiteInRange(page.depth, 0, 10) || !finiteInRange(page.version, 1, 100000)) return `Page ${page.id} has invalid project, fields, hierarchy, or version data.`;
      if (page.parent && !pageIds.has(page.parent)) return `Page ${page.id} has an unknown parent.`;
      if (page.parent && candidate.pages.find((candidatePage) => candidatePage.id === page.parent)?.projectKey !== page.projectKey) return `Page ${page.id} has a cross-project parent.`;
      const versions = candidate.pageVersions[page.id];
      if (versions !== undefined && (!Array.isArray(versions) || !versions.length || versions.length > 500 || versions.some((version) => !finiteInRange(version.version, 1, 100000) || !hasTextFields(version, ["author", "time", "note"])))) return `Page ${page.id} has invalid version history.`;
      if (candidate.pageComments[page.id] && !Array.isArray(candidate.pageComments[page.id])) return `Page ${page.id} has invalid comments.`;
    }
    for (const decision of candidate.decisions) {
      if (!hasTextFields(decision, ["projectKey", "id", "title", "status", "owner", "approver", "due", "recommendation", "rationale", "page", "linkedIssue"]) || !projectKeys.has(decision.projectKey) || !DECISION_STATUSES.has(decision.status)) return `Decision ${decision.id} has invalid project, fields, or lifecycle status.`;
      if (decision.page && !pageIds.has(decision.page)) return `Decision ${decision.id} links to an unknown page.`;
      if (decision.linkedIssue && !issueKeys.has(decision.linkedIssue)) return `Decision ${decision.id} links to an unknown work item.`;
      if (decision.page && candidate.pages.find((page) => page.id === decision.page)?.projectKey !== decision.projectKey) return `Decision ${decision.id} links across projects.`;
      if (decision.linkedIssue && candidate.issues.find((issue) => issue.key === decision.linkedIssue)?.projectKey !== decision.projectKey) return `Decision ${decision.id} links to work in another project.`;
    }
    for (const risk of candidate.risks) {
      if (!hasTextFields(risk, ["projectKey", "id", "title", "level", "owner", "response", "issue"]) || !projectKeys.has(risk.projectKey) || !finiteInRange(risk.score, 0, 25) || (risk.issue && !issueKeys.has(risk.issue))) return `Risk ${risk.id} has invalid project, fields, exposure, or linked work.`;
      if (risk.issue && candidate.issues.find((issue) => issue.key === risk.issue)?.projectKey !== risk.projectKey) return `Risk ${risk.id} links to work in another project.`;
    }
    for (const sprint of candidate.sprints) {
      if (!hasTextFields(sprint, ["projectKey", "id", "name", "goal", "start", "end", "status"]) || !projectKeys.has(sprint.projectKey) || !SPRINT_STATUSES.has(sprint.status) || !finiteInRange(sprint.capacity, 1, 200)) return `Sprint ${sprint.id} has invalid project, fields, lifecycle, or capacity data.`;
      if (sprint.committed !== undefined && !finiteInRange(sprint.committed, 0, 10000)) return `Sprint ${sprint.id} has invalid commitment data.`;
      if (sprint.completed !== undefined && !finiteInRange(sprint.completed, 0, 10000)) return `Sprint ${sprint.id} has invalid completion data.`;
    }
    for (const projectKey of projectKeys) {
      if (!candidate.sprints.some((sprint) => sprint.projectKey === projectKey && ["active", "future"].includes(sprint.status))) return `Project ${projectKey} requires an active or future sprint.`;
      if (!candidate.pages.some((page) => page.projectKey === projectKey && !page.parent && !page.archived)) return `Project ${projectKey} requires a current root page.`;
      if (!candidate.issues.some((issue) => issue.projectKey === projectKey)) return `Project ${projectKey} requires at least one work item.`;
    }
    if (!finiteInRange(candidate.service.elapsedHours, 0, 10000) || typeof candidate.service.demoNow !== "string") return "The service demo clock is invalid.";
    for (const requestType of candidate.service.requestTypes) {
      if (!hasTextFields(requestType, ["id", "name", "description", "icon"])) return `Request type ${requestType.id} has invalid fields.`;
    }
    for (const request of candidate.service.requests) {
      if (!hasTextFields(request, ["key", "summary", "type", "status", "priority", "requester", "organization", "assignee", "created", "description", "linkedIssue", "linkedPage"]) || !SERVICE_STATUSES.has(request.status) || !PRIORITIES.has(request.priority) || !requestTypeIds.has(request.type)) return `Service request ${request.key} has invalid fields or workflow data.`;
      if (!pageIds.has(request.linkedPage) || !issueKeys.has(request.linkedIssue)) return `Service request ${request.key} has an invalid linked record.`;
      if (candidate.pages.find((page) => page.id === request.linkedPage)?.projectKey !== candidate.issues.find((issue) => issue.key === request.linkedIssue)?.projectKey) return `Service request ${request.key} links records from different projects.`;
      if (!Array.isArray(request.comments) || request.comments.some((comment) => !["public", "internal"].includes(comment.visibility))) return `Service request ${request.key} has invalid conversation data.`;
      for (const metric of [request.firstResponse, request.resolution]) {
        if (!metric || !finiteInRange(metric.goal, 0.1, 10000) || !finiteInRange(metric.elapsed, 0, 10000)) return `Service request ${request.key} has invalid SLA data.`;
      }
    }
    const notificationIds = new Set();
    for (const notification of candidate.notifications) {
      if (!(Number.isFinite(Number(notification.id)) || (typeof notification.id === "string" && SAFE_RECORD_ID.test(notification.id)))) return "A notification has an unsafe identifier.";
      const notificationId = String(notification.id);
      if (notificationIds.has(notificationId)) return `Notifications contain duplicate identifier “${notificationId}”.`;
      notificationIds.add(notificationId);
      if (!hasTextFields(notification, ["kind", "title", "detail", "time", "target"]) || typeof notification.unread !== "boolean") return "A notification has invalid fields.";
      const validTarget = notification.kind === "issue" ? issueKeys.has(notification.target) : notification.kind === "page" ? pageIds.has(notification.target) : notification.kind === "decision" ? decisionIds.has(notification.target) : notification.kind === "request" ? requestKeys.has(notification.target) : false;
      if (!validTarget) return `Notification ${notification.id} has an unknown kind or target.`;
    }
    if (candidate.automations.some((rule) => !hasTextFields(rule, ["id", "name", "detail", "last"]) || !finiteInRange(rule.runs, 0, 1000000))) return "An automation rule is invalid.";
    if (candidate.savedFilters.some((filter) => !hasTextFields(filter, ["id", "name", "owner", "scope", "query"]) || !["Personal", "Shared"].includes(filter.scope) || (filter.kind !== undefined && filter.kind !== "service"))) return "A saved filter is invalid.";
    if (candidate.audit.some((event) => !hasTextFields(event, ["time", "actor", "action", "object"]))) return "An audit event is invalid.";
    for (const item of candidate.milestones) {
      if (!hasTextFields(item, ["projectKey", "name", "target", "forecast", "status", "issue"]) || !projectKeys.has(item.projectKey) || (item.issue && !issueKeys.has(item.issue))) return "A milestone is invalid.";
      if (item.issue && candidate.issues.find((issue) => issue.key === item.issue)?.projectKey !== item.projectKey) return `Milestone ${item.name} links to work in another project.`;
    }
    return "";
  }

  function normalizeState(candidate) {
    const base = clone(FIXTURE);
    if (validateStateCandidate(candidate)) return base;
    const state = { ...base, ...candidate };
    state.issueFilter = { ...base.issueFilter, ...(candidate.issueFilter || {}) };
    state.service = { ...base.service, ...(candidate.service || {}) };
    state.service.requests = Array.isArray(candidate.service?.requests) ? candidate.service.requests : base.service.requests;
    state.service.requestTypes = Array.isArray(candidate.service?.requestTypes) ? candidate.service.requestTypes : base.service.requestTypes;
    ["projects", "people", "issues", "pages", "decisions", "risks", "milestones", "notifications", "audit", "automations", "savedFilters", "sprints"].forEach((key) => {
      if (!Array.isArray(state[key])) state[key] = base[key];
    });
    state.issues = state.issues.map((issue, index) => ({ key: `IMP-${index + 1}`, summary: "Imported work item", type: "Task", status: "To Do", priority: "Medium", assignee: "Maya Okafor", reporter: "Maya Okafor", sprint: "Backlog", epic: "—", points: 0, due: "Not set", description: "", dependencies: [], linkedPage: "program-hub", risk: "", milestone: "Not set", checklist: [], checked: [], comments: [], history: [], ...issue, dependencies: Array.isArray(issue.dependencies) ? issue.dependencies : [], checklist: Array.isArray(issue.checklist) ? issue.checklist : [], checked: Array.isArray(issue.checked) ? issue.checked : [], comments: Array.isArray(issue.comments) ? issue.comments : [], history: Array.isArray(issue.history) ? issue.history : [] }));
    state.service.requests = state.service.requests.map((request, index) => ({ key: `HELP-${2000 + index}`, summary: "Imported service request", type: "question", status: "Submitted", priority: "Medium", requester: "Amina Cole", organization: "Mission Operations", assignee: "Unassigned", created: "Imported", description: "", firstResponse: { goal: 4, elapsed: 0, met: false }, resolution: { goal: 24, elapsed: 0, met: false }, participants: [], linkedIssue: "SMN-100", linkedPage: "program-hub", comments: [], ...request, firstResponse: { goal: 4, elapsed: 0, met: false, ...(request.firstResponse || {}) }, resolution: { goal: 24, elapsed: 0, met: false, ...(request.resolution || {}) }, comments: Array.isArray(request.comments) ? request.comments : [] }));
    state.pageComments = state.pageComments && typeof state.pageComments === "object" ? state.pageComments : base.pageComments;
    state.pageVersions = state.pageVersions && typeof state.pageVersions === "object" ? state.pageVersions : base.pageVersions;
    state.pageDrafts = state.pageDrafts && typeof state.pageDrafts === "object" ? state.pageDrafts : {};
    if (!PERSONAS[state.currentUser]) state.currentUser = "Maya Okafor";
    state.pages.forEach((page) => {
      page.archived = Boolean(page.archived);
      const records = Array.isArray(state.pageVersions[page.id]) ? state.pageVersions[page.id] : [];
      state.pageVersions[page.id] = records.length ? records : [{ version: page.version, author: page.owner, time: page.updated, note: "Current version" }];
      state.pageVersions[page.id].forEach((version) => {
        if (!version.title) version.title = page.title;
        if (!version.content) version.content = page.content;
        if (!version.bodyHtml) version.bodyHtml = page.bodyHtml || `<p>${esc(page.content)}</p>`;
      });
    });
    state.route = "home";
    state.activePage = null;
    state.activeDecision = null;
    state.activeRequest = null;
    state.migrationProgress = state.migrationComplete ? 100 : 0;
    return state;
  }

  function loadState() {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      return raw ? normalizeState(JSON.parse(raw)) : normalizeState(clone(FIXTURE));
    } catch (_) {
      storageHealthy = false;
      return normalizeState(clone(FIXTURE));
    }
  }

  function persistState() {
    if (!storageHealthy) return;
    try {
      DemoState.schemaVersion = SCHEMA_VERSION;
      DemoState.lastSavedAt = new Date().toISOString();
      const snapshot = clone(DemoState);
      snapshot.route = "home";
      snapshot.activePage = null;
      snapshot.activeDecision = null;
      snapshot.activeRequest = null;
      snapshot.migrationProgress = snapshot.migrationComplete ? 100 : 0;
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
      const savedAt = document.getElementById("profileSavedAt");
      if (savedAt) savedAt.textContent = "Saved locally · " + new Date(DemoState.lastSavedAt).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
    } catch (_) {
      storageHealthy = false;
      const warning = document.getElementById("storageWarning");
      if (warning) warning.hidden = false;
    }
  }

  let DemoState = loadState();
  let draggedIssueKey = null;
  let migrationTimer = null;
  let drawerCloseTimer = null;
  let drawerOpenFrame = null;
  let previousModalFocus = null;
  let previousDrawerFocus = null;
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

  const ICONS = new Set(["home", "check-square", "inbox", "folder", "list", "columns", "timeline", "package", "filter", "life-buoy", "list-checks", "clock", "book-open", "diamond", "chart", "presentation", "users", "zap", "settings", "migration", "search", "plus", "bell", "chevron-down", "menu", "alert-triangle", "key", "box", "refresh", "help-circle", "file-text", "shield-alert", "x", "history", "arrow-left", "arrow-right", "paperclip", "star", "trash", "download", "file-spreadsheet", "briefcase"]);

  function icon(name, className = "") {
    const safeName = ICONS.has(name) ? name : "file-text";
    return `<svg class="ui-icon ${esc(className)}" aria-hidden="true" focusable="false"><use href="#icon-${safeName}"></use></svg>`;
  }

  function hydrateCloseButtons(container) {
    container.querySelectorAll(".icon-button[data-action='close-modal'], .icon-button[data-action='close-drawer']").forEach((button) => {
      button.innerHTML = icon("x");
      if (!button.hasAttribute("aria-label")) button.setAttribute("aria-label", "Close");
    });
  }

  function sanitizeRichText(input) {
    const source = document.createElement("template");
    source.innerHTML = String(input || "");
    const allowed = new Set(["P", "H2", "H3", "STRONG", "EM", "UL", "OL", "LI", "BLOCKQUOTE", "A", "BR"]);
    const clean = (node) => {
      [...node.childNodes].forEach((child) => {
        if (child.nodeType !== Node.ELEMENT_NODE) return;
        if (!allowed.has(child.tagName)) {
          child.replaceWith(document.createTextNode(child.textContent || ""));
          return;
        }
        const href = child.tagName === "A" ? child.getAttribute("href") || "" : "";
        [...child.attributes].forEach((attribute) => child.removeAttribute(attribute.name));
        if (child.tagName === "A" && /^(https?:|mailto:|#)/i.test(href)) child.setAttribute("href", href);
        clean(child);
      });
    };
    clean(source.content);
    return source.innerHTML;
  }

  function slug(value) {
    return String(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  function initials(name) {
    return String(name).split(/\s+/).map((part) => part[0]).join("").slice(0, 2).toUpperCase();
  }

  function actor() {
    return DemoState.currentUser || "Maya Okafor";
  }

  function persona() {
    return PERSONAS[actor()] || PERSONAS["Maya Okafor"];
  }

  function can(capability, object = null) {
    const capabilities = persona().capabilities;
    if (capabilities.includes("all")) return true;
    if (capability === "approve") {
      if (object?.approver === actor()) return true;
      if (capabilities.includes("approve") && Array.isArray(object?.participants) && object.participants.includes(actor())) return true;
      return false;
    }
    if (capabilities.includes(capability)) return true;
    if (capability === "edit-work" && capabilities.includes("edit-assigned-work")) return object?.assignee === actor();
    if (capability === "edit-knowledge" && capabilities.includes("draft-knowledge")) return true;
    return false;
  }

  function requireCapability(capability, object, message) {
    if (can(capability, object)) return true;
    toast("Action unavailable in this role", message || "Switch personas to preview a role with this permission.");
    return false;
  }

  function canViewRoute(route) {
    return (ROUTE_ACCESS[persona().key] || []).includes(route);
  }

  function canViewSavedFilter(filter) {
    return Boolean(filter) && (filter.scope === "Shared" || filter.owner === actor()) && (filter.kind !== "service" || canViewRoute("queues"));
  }

  function visibleSavedFilters() {
    return DemoState.savedFilters.filter(canViewSavedFilter);
  }

  function recordAudit(action, object, eventActor = actor()) {
    DemoState.audit.unshift({ time: "Just now", actor: eventActor, action, object });
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
    return `<span class="health-pill health-${slug(health.split(",")[0])}">${esc(health)}</span>`;
  }

  function projectByKey(key) {
    return DemoState.projects.find((project) => project.key === key);
  }

  function activeProject() {
    return projectByKey(DemoState.currentProject) || DemoState.projects[0];
  }

  function recordProjectKey(record) {
    return record?.projectKey || String(record?.key || "").split("-")[0] || "SMN";
  }

  function issuesForProject(projectKey = DemoState.currentProject) {
    return DemoState.issues.filter((issue) => recordProjectKey(issue) === projectKey);
  }

  function pagesForProject(projectKey = DemoState.currentProject) {
    return DemoState.pages.filter((page) => (page.projectKey || "SMN") === projectKey);
  }

  function decisionsForProject(projectKey = DemoState.currentProject) {
    return DemoState.decisions.filter((decision) => (decision.projectKey || "SMN") === projectKey);
  }

  function risksForProject(projectKey = DemoState.currentProject) {
    return DemoState.risks.filter((risk) => (risk.projectKey || "SMN") === projectKey);
  }

  function milestonesForProject(projectKey = DemoState.currentProject) {
    return DemoState.milestones.filter((milestone) => (milestone.projectKey || "SMN") === projectKey);
  }

  function sprintsForProject(projectKey = DemoState.currentProject) {
    return DemoState.sprints.filter((sprint) => (sprint.projectKey || "SMN") === projectKey);
  }

  function projectHubId(projectKey = DemoState.currentProject) {
    return pagesForProject(projectKey).find((page) => !page.parent)?.id || pagesForProject(projectKey)[0]?.id || "program-hub";
  }

  function selectProject(projectKey, destination = "projects") {
    if (!projectByKey(projectKey)) return;
    DemoState.currentProject = projectKey;
    DemoState.projectMode = destination === "projects" ? "overview" : DemoState.projectMode;
    DemoState.activePage = null;
    DemoState.activeDecision = null;
    DemoState.activeSavedFilter = null;
    DemoState.filterQuery = `project = ${projectKey} ORDER BY priority DESC`;
  }

  const PROJECT_SCOPED_ROUTES = new Set(["projects", "backlog", "board", "timeline", "releases", "spaces", "decisions", "reports", "leadership"]);

  function alignProjectContext(projectKey) {
    if (!projectByKey(projectKey)) return false;
    const changed = DemoState.currentProject !== projectKey;
    if (changed) {
      selectProject(projectKey, DemoState.route);
      if (PROJECT_SCOPED_ROUTES.has(DemoState.route)) render();
    }
    updateChrome();
    return changed;
  }

  function issueByKey(key) {
    return DemoState.issues.find((issue) => issue.key === key);
  }

  function primaryDependents() {
    return PRIMARY_DEPENDENT_KEYS.map(issueByKey).filter(Boolean);
  }

  function primaryEligibleCount() {
    return primaryDependents().filter((issue) => ["To Do", "Blocked"].includes(issue.status)).length;
  }

  function primaryReleasedCount() {
    const recorded = decisionById("DEC-014")?.releasedCount;
    return Number.isInteger(recorded) ? recorded : 0;
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

  function canOpenNotification(notification) {
    if (notification.kind === "issue") {
      const issue = issueByKey(notification.target);
      return Boolean(issue) && (canViewRoute("board") || can("read-work", issue));
    }
    if (notification.kind === "page") return Boolean(pageById(notification.target)) && canViewRoute("spaces");
    if (notification.kind === "decision") return Boolean(decisionById(notification.target)) && canViewRoute("decisions");
    if (notification.kind === "request") {
      const request = requestByKey(notification.target);
      return Boolean(request) && (canViewRoute("queues") || canViewRoute("portal") && request.requester === actor());
    }
    return false;
  }

  function unreadCount() {
    return DemoState.notifications.filter((notification) => notification.unread && canOpenNotification(notification)).length;
  }

  function blockedCount(projectKey = null) {
    const issues = projectKey ? issuesForProject(projectKey) : DemoState.issues;
    return issues.filter((issue) => issue.status === "Blocked").length;
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

  function activeSprint(projectKey = DemoState.currentProject) {
    const sprints = sprintsForProject(projectKey);
    return sprints.find((sprint) => sprint.status === "active") || sprints.find((sprint) => sprint.status === "future") || sprints[0];
  }

  function issuesForSprint(sprint) {
    if (!sprint) return [];
    return issuesForProject(sprint.projectKey || DemoState.currentProject).filter((issue) => issue.sprint === sprint.name);
  }

  function sprintStats(sprint) {
    if (!sprint) return { issues: [], committed: 0, completed: 0, blocked: 0 };
    const issues = issuesForSprint(sprint);
    const committed = issues.reduce((sum, issue) => sum + Number(issue.points || 0), 0);
    const completed = issues.filter((issue) => issue.status === "Done").reduce((sum, issue) => sum + Number(issue.points || 0), 0);
    return { issues, committed, completed, blocked: issues.filter((issue) => issue.status === "Blocked").length };
  }

  function requestByKey(key) {
    return DemoState.service.requests.find((request) => request.key === key);
  }

  function requestTypeIcon(typeId) {
    return icon(({ incident: "alert-triangle", access: "key", software: "box", change: "refresh", question: "help-circle" })[typeId] || "help-circle");
  }

  function slaState(request, kind) {
    const metric = request[kind];
    if (metric.met) return "met";
    if (metric.breached) return "breached";
    if (["Waiting for customer", "Pending approval", "Resolved", "Closed"].includes(request.status)) return "paused";
    const remaining = metric.goal - metric.elapsed;
    if (remaining <= 0) return "breached";
    if (remaining <= Math.max(1, metric.goal * 0.2)) return "approaching";
    return "running";
  }

  function slaLabel(request, kind) {
    const metric = request[kind];
    const state = slaState(request, kind);
    if (state === "met") return `Met in ${metric.elapsed.toFixed(1)}h`;
    if (state === "paused") return `Paused · ${(metric.goal - metric.elapsed).toFixed(1)}h left`;
    if (state === "breached") return `Breached by ${Math.abs(metric.goal - metric.elapsed).toFixed(1)}h`;
    return `${(metric.goal - metric.elapsed).toFixed(1)}h remaining`;
  }

  function primarySlaKind(request) {
    return request.firstResponse.met ? "resolution" : "firstResponse";
  }

  function requestsForQueue(queueId) {
    const requests = DemoState.service.requests;
    if (queueId === "mine") return requests.filter((request) => request.assignee === actor() && !["Resolved", "Closed"].includes(request.status));
    if (queueId === "approaching") return requests.filter((request) => [slaState(request, "firstResponse"), slaState(request, "resolution")].includes("approaching"));
    if (queueId === "breached") return requests.filter((request) => [slaState(request, "firstResponse"), slaState(request, "resolution")].includes("breached"));
    if (queueId === "waiting") return requests.filter((request) => request.status === "Waiting for customer");
    if (queueId === "approval") return requests.filter((request) => request.status === "Pending approval");
    return requests.filter((request) => request.assignee === "Unassigned");
  }

  function toast(title, detail = "", type = "") {
    const region = document.getElementById("toastRegion");
    const node = document.createElement("div");
    node.className = `toast ${type}`;
    node.innerHTML = `<span></span><div><strong>${esc(title)}</strong>${detail ? `<span>${esc(detail)}</span>` : ""}</div><button type="button" aria-label="Dismiss notification">${icon("x")}</button>`;
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
    const confidence = Math.round(DemoState.projects.reduce((sum, project) => sum + (project.key === "SMN" ? currentConfidence() : project.confidence), 0) / DemoState.projects.length);
    const sprint = activeSprint();
    const sprintSummary = sprintStats(sprint);
    const healthCounts = ["Green", "Amber", "Red"].map((health) => [health, DemoState.projects.filter((project) => project.health === health).length]).filter(([, count]) => count);
    const healthSummary = healthCounts.map(([health, count]) => `${count} ${health.toLowerCase()}`).join(" · ");
    const myIssues = DemoState.issues.filter((issue) => (issue.assignee === actor() || issue.reporter === actor() || (persona().key === "administrator" && issue.assignee === "Lena Ortiz")) && issue.status !== "Done").slice(0, 4);
    const leadershipAction = canViewRoute("leadership") ? '<button class="button" type="button" data-view="leadership">Open leadership view</button>' : "";
    const decisionsAction = canViewRoute("decisions") ? `<button class="section-link" type="button" data-view="decisions">Decision register ${icon("arrow-right")}</button>` : "";
    const myWorkAction = canViewRoute("my-work") ? `<button class="section-link" type="button" data-view="my-work">View all ${icon("arrow-right")}</button>` : "";
    const boardAction = canViewRoute("board") ? '<button class="button small" style="margin-top:18px;background:transparent;color:var(--alabaster);border-color:rgba(221,221,221,.35)" type="button" data-view="board">Open sprint board</button>' : "";
    return `<div class="page page-enter">
      ${pageHeader(
        "Demonstration Portfolio",
        `Good morning, ${actor().split(" ")[0]}`,
        "Work, knowledge, decisions, and reporting in one governed system.",
        `${leadershipAction}${can("create-work") ? '<button class="button primary" type="button" data-action="open-create">Create work</button>' : ""}`
      )}
      <section class="metric-grid" aria-label="Portfolio summary">
        ${metric("Portfolio health", healthSummary, `${DemoState.projects.length} active projects · ${DemoState.projects.filter((project) => project.health !== "Green").length} need attention`, "warning")}
        ${metric("Portfolio confidence", confidence + "%", DemoState.decisionApproved ? '<span class="delta good">Sentinel recovery reflected</span>' : `${DemoState.projects.length} release forecasts`, confidence >= 80 ? "success" : "warning")}
        ${metric("Blocked work", blocked, DemoState.decisionApproved ? '<span class="delta good">SMN decision blockers resumed</span>' : `${DemoState.projects.filter((project) => blockedCount(project.key)).length} projects with blocked work`, blocked ? "danger" : "success")}
        ${metric("Knowledge coverage", Math.round(DemoState.issues.filter((issue) => issue.linkedPage && pageById(issue.linkedPage)).length / DemoState.issues.length * 100) + "%", `${DemoState.pages.filter((page) => !page.archived).length} governed pages`, "success")}
      </section>

      <div class="home-grid">
        <div class="stack">
          <section class="panel">
            <div class="panel-header"><div><h2>Where intervention changes the outcome</h2></div>${decisionsAction}</div>
            <div>
              ${canViewRoute("decisions") ? `<button class="attention-item" type="button" data-decision="DEC-014">
                <span class="attention-marker ${DemoState.decisionApproved ? "" : "danger"}"></span>
                <span class="attention-copy"><strong>${DemoState.decisionApproved ? "Alternate certification path approved" : "Approve the alternate certification path"}</strong><span>${DemoState.decisionApproved ? `${primaryReleasedCount()} work item${primaryReleasedCount() === 1 ? "" : "s"} resumed; forecast restored to 18 September.` : `One governed decision releases ${primaryEligibleCount()} blocked item${primaryEligibleCount() === 1 ? "" : "s"} and protects the 18 September review.`}</span></span>
                <span class="attention-meta">${DemoState.decisionApproved ? statusBadge("Approved") : statusBadge("Pending")}</span>
              </button>` : ""}
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
            <div class="section-heading"><div><h2>My work</h2><p>Assigned and accountable items across the portfolio.</p></div>${myWorkAction}</div>
            <div class="data-table-wrap">
              <table class="data-table"><thead><tr><th>Key</th><th>Work item</th><th>Type</th><th>Status</th><th>Priority</th><th>Owner</th><th>Due</th></tr></thead><tbody>${issueRows(myIssues)}</tbody></table>
            </div>
          </section>
        </div>

        <div class="stack">
          <section class="card surface-dark">
            <div class="eyebrow" style="color:var(--sky)">Current sprint</div>
            <h2 style="font-size:16px">${esc(sprint.name)} · ${esc(sprint.goal)}</h2>
            <p style="font-size:10px">${esc(sprint.start)}–${esc(sprint.end)} · governed sprint scope.</p>
            <div style="margin-top:18px">
              ${progress("Story points", sprintSummary.committed ? sprintSummary.completed / sprintSummary.committed * 100 : 0, `${sprintSummary.completed} of ${sprintSummary.committed} complete`)}
              ${progress("Sprint time", 61, "7 of 12 days")}
              ${progress("Scope unblocked", DemoState.decisionApproved ? 100 : 54, `${sprintSummary.blocked} blocked`, DemoState.decisionApproved ? "success" : "warning")}
            </div>
            ${boardAction}
          </section>
          <section class="panel">
            <div class="panel-header"><h2>Recent governed activity</h2><button class="section-link" type="button" data-view="inbox">Inbox ${icon("arrow-right")}</button></div>
            <div class="panel-body"><ul class="activity-list">
              ${DemoState.audit.slice(0, 5).map((event) => `<li class="activity-item"><span class="activity-icon">${icon("history")}</span><span class="activity-copy"><strong>${esc(event.actor)}</strong> ${esc(event.action.toLowerCase())} <strong>${esc(event.object)}</strong><time>${esc(event.time)}</time></span></li>`).join("")}
            </ul></div>
          </section>
        </div>
      </div>
    </div>`;
  }

  function renderMyWork() {
    let issues = DemoState.issues.filter((issue) => issue.assignee === actor() || issue.reporter === actor() || (persona().key === "administrator" && issue.assignee === "Lena Ortiz"));
    issues = filterIssues(issues);
    return `<div class="page page-enter">
      ${pageHeader("Personal workspace", "My work", `Assigned, reported, and watched work for ${actor()}—without losing the knowledge or decisions behind it.`, `<button class="button" type="button" data-action="save-view">Save as filter</button>${can("create-work") ? '<button class="button primary" type="button" data-action="open-create">Create work item</button>' : ""}`)}
      ${issueToolbar()}
      <div class="data-table-wrap">
        <table class="data-table"><thead><tr><th>Key</th><th>Work item</th><th>Type</th><th>Status</th><th>Priority</th><th>Owner</th><th>Due</th></tr></thead><tbody>${issueRows(issues)}</tbody></table>
      </div>
    </div>`;
  }

  function renderInbox() {
    const notifications = DemoState.notifications.filter(canOpenNotification);
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
      ${pageHeader("Demonstration Portfolio", "Projects", "Plan and govern delivery work while keeping every decision, page, risk, and briefing fact connected.", can("create-work") ? `<button class="button primary" type="button" data-action="open-create-project">Create project</button>` : "")}
      <div class="project-grid">
        ${DemoState.projects.map((project) => `
          <article class="card project-card" data-project="${project.key}" tabindex="0">
            <div class="project-card-header"><div class="project-key">${esc(project.key)} · ${esc(project.type || "Delivery project")}</div><h2>${esc(project.name)}</h2></div>
            <div class="project-card-body">
              <p>${esc(project.description)}</p>
              <div style="margin-bottom:14px">${healthBadge(project.health)}</div>
              <div class="project-card-metrics">
                <div class="project-card-metric"><strong>${project.completion}%</strong><span>Complete</span></div>
                <div class="project-card-metric"><strong>${project.confidence}%</strong><span>Confidence</span></div>
                <div class="project-card-metric"><strong>${esc(project.release.split(" ")[0] + " " + project.release.split(" ")[1])}</strong><span>${esc(project.releaseName || "Release")}</span></div>
              </div>
              <div class="project-card-owner">${avatar(project.owner, "table-avatar")}<span>Owned by ${esc(project.owner)}</span></div>
            </div>
          </article>
        `).join("")}
      </div>
    </div>`;
  }

  function renderProjectOverview() {
    const project = activeProject();
    const isSentinel = project.key === "SMN";
    const recovering = isSentinel && DemoState.decisionApproved;
    const projectIssues = issuesForProject(project.key);
    const projectMilestones = milestonesForProject(project.key);
    const projectRisks = risksForProject(project.key);
    const projectPages = pagesForProject(project.key).filter((page) => !page.archived);
    const projectSprint = activeSprint(project.key);
    const openItems = projectIssues.filter((issue) => issue.status !== "Done").length;
    const projectBlocked = blockedCount(project.key);
    const highestRisk = projectRisks.reduce((max, risk) => Math.max(max, risk.score), 0);
    const confidence = isSentinel ? currentConfidence() : project.confidence;
    const scheduleExposure = projectMilestones.filter((item) => item.status === "At risk").length;
    const epics = projectIssues.filter((issue) => issue.type === "Epic").slice(0, 3);
    return `<div class="page page-enter">
      ${pageHeader(
        `${project.key} · ${project.type || "Delivery project"}`,
        project.name,
        project.description,
        `<button class="button" type="button" data-page="${projectHubId(project.key)}">Open project space</button>${canViewRoute("board") ? '<button class="button primary" type="button" data-view="board">Open board</button>' : ""}`,
        `<button type="button" data-action="all-projects">Projects</button><span>›</span><span>${esc(project.name)}</span>`
      )}
      <section class="card objective-card">
        <div class="eyebrow">Project objective</div>
        <blockquote>“${esc(project.objective)}”</blockquote>
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:18px">${healthBadge(recovering ? "Amber, recovering" : project.health)}<span class="tag" style="background:rgba(255,255,255,.08);border-color:rgba(221,221,221,.2);color:var(--platinum)">Owner · ${esc(project.owner)}</span><span class="tag" style="background:rgba(255,255,255,.08);border-color:rgba(221,221,221,.2);color:var(--platinum)">${esc(project.releaseName || "Next release")} · ${esc(project.release)}</span></div>
      </section>
      <section class="metric-grid" style="margin-top:14px">
        ${metric("Release progress", project.completion + "%", `${esc(project.releaseName || "Next release")} · ${esc(project.release)}`)}
        ${metric("Release confidence", confidence + "%", recovering ? '<span class="delta good">+14 points after decision</span>' : `${openItems} open work items`, confidence >= 80 ? "success" : "warning")}
        ${metric("Schedule exposure", recovering ? "0 gates" : `${scheduleExposure} gate${scheduleExposure === 1 ? "" : "s"}`, recovering ? '<span class="delta good">Target restored</span>' : `${projectBlocked} blocked work item${projectBlocked === 1 ? "" : "s"}`, recovering || !scheduleExposure ? "success" : "danger")}
        ${metric("Highest risk", `${isSentinel ? currentRiskScore() : highestRisk}/25`, projectRisks.length ? `${projectRisks.length} registered project risk${projectRisks.length === 1 ? "" : "s"}` : "No open risks", (isSentinel ? currentRiskScore() : highestRisk) > 12 ? "danger" : "success")}
      </section>
      <div class="project-overview-grid" style="margin-top:16px">
        <div class="stack">
          <section class="panel">
            <div class="panel-header"><h2>Milestones</h2><button class="section-link" type="button" data-view="timeline">Open timeline ${icon("arrow-right")}</button></div>
            <div class="panel-body"><ul class="milestone-list">
              ${projectMilestones.map((item) => `<li class="milestone-item"><span class="milestone-dot ${item.status === "At risk" ? "warning" : ""}"></span><span class="milestone-copy"><strong>${esc(item.name)}</strong><span>Target ${esc(item.target)} · Forecast ${esc(recovering && item.projectKey === "SMN" ? item.target : item.forecast)}</span></span>${statusBadge(recovering && item.projectKey === "SMN" ? "Ready" : item.status === "At risk" ? "Pending" : "Ready")}</li>`).join("") || '<li class="empty-state">No milestones configured.</li>'}
            </ul></div>
          </section>
          <section class="panel">
            <div class="panel-header"><h2>Delivery progress</h2><span class="tag">${esc(projectSprint?.name || "Continuous flow")}</span></div>
            <div class="panel-body">
              ${epics.length ? epics.map((epic) => { const children = projectIssues.filter((item) => item.epic === epic.key); const done = children.filter((item) => item.status === "Done").reduce((sum, item) => sum + item.points, 0); const total = children.reduce((sum, item) => sum + item.points, 0) || epic.points; const percent = total ? Math.round(done / total * 100) : 0; return progress(epic.summary, percent, `${done} of ${total} points`, children.some((item) => item.status === "Blocked") ? "warning" : ""); }).join("") : progress(project.releaseName || "Delivery scope", project.completion, `${project.completion}% complete`)}
            </div>
          </section>
        </div>
        <div class="stack">
          <section class="panel">
            <div class="panel-header"><h2>Top risks</h2><button class="section-link" type="button" data-view="reports">Risk report ${icon("arrow-right")}</button></div>
            <div class="panel-body">
              ${projectRisks.map((risk) => `<div class="risk-row" data-risk="${risk.id}" tabindex="0"><span class="risk-copy"><strong>${esc(risk.id)} · ${esc(risk.title)}</strong><span>${esc(risk.owner)}</span></span><span class="risk-score">${risk.score}/25</span>${statusBadge(risk.score > 12 ? "Blocked" : "In Progress")}</div>`).join("") || '<div class="empty-state">No registered risks.</div>'}
            </div>
          </section>
          <section class="card">
            <div class="section-heading" style="margin-top:0"><div><h2>Connected knowledge</h2><p>Governed context for delivery work.</p></div></div>
            ${projectPages.slice(0, 3).map((page) => `<button class="linked-object" type="button" data-page="${page.id}"><span class="linked-icon">${icon("file-text")}</span><span class="linked-copy"><strong>${esc(page.title)}</strong><span>v${page.version} · ${esc(page.updated)}</span></span></button>`).join("") || '<div class="empty-state">No project knowledge yet.</div>'}
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

  function queryValue(issue, field) {
    if (field === "project") return recordProjectKey(issue);
    if (field === "text") return `${issue.key} ${issue.summary} ${issue.description} ${issue.type} ${issue.assignee}`;
    return issue[field] ?? "";
  }

  function cleanQueryValue(value) {
    const trimmed = String(value).trim();
    if (/^currentUser\(\)$/i.test(trimmed)) return actor();
    return trimmed.replace(/^(["'])(.*)\1$/, "$2");
  }

  function runIssueQuery(query) {
    const fields = ["project", "key", "type", "status", "priority", "assignee", "reporter", "sprint", "epic", "text"];
    const text = String(query || "").trim();
    if (!text) return { items: DemoState.issues.slice(), error: "" };
    const orderMatch = text.match(/\s+ORDER\s+BY\s+([a-z-]+)(?:\s+(ASC|DESC))?\s*$/i);
    const filterText = orderMatch ? text.slice(0, orderMatch.index).trim() : text;
    const clauses = filterText ? filterText.split(/\s+AND\s+/i) : [];
    const tests = [];
    for (const clause of clauses) {
      const match = clause.match(/^([a-z-]+)\s*(IN|!=|=|~)\s*(.+)$/i);
      if (!match) return { items: [], error: `Could not parse “${clause}”. Use FIELD = value, FIELD != value, FIELD IN (...), or FIELD ~ text.` };
      const field = match[1].toLowerCase();
      const operator = match[2].toUpperCase();
      if (!fields.includes(field)) return { items: [], error: `“${field}” is not available in this demo query language.` };
      let values;
      if (operator === "IN") {
        const list = match[3].trim();
        if (!list.startsWith("(") || !list.endsWith(")")) return { items: [], error: `IN requires a parenthesized list in “${clause}”.` };
        values = list.slice(1, -1).split(",").map(cleanQueryValue).filter(Boolean);
      } else values = [cleanQueryValue(match[3])];
      tests.push((issue) => {
        const actual = String(queryValue(issue, field)).toLowerCase();
        const expected = values.map((value) => String(value).toLowerCase());
        if (operator === "=") return actual === expected[0];
        if (operator === "!=") return actual !== expected[0];
        if (operator === "~") return actual.includes(expected[0]);
        return expected.includes(actual);
      });
    }
    let items = DemoState.issues.filter((issue) => tests.every((test) => test(issue)));
    if (orderMatch) {
      const field = orderMatch[1].toLowerCase();
      if (!fields.includes(field)) return { items: [], error: `Cannot order by “${field}” in this demo.` };
      const direction = String(orderMatch[2] || "ASC").toUpperCase() === "DESC" ? -1 : 1;
      const priorities = { Highest: 4, High: 3, Medium: 2, Low: 1 };
      items = items.slice().sort((a, b) => {
        const av = field === "priority" ? priorities[a.priority] || 0 : String(queryValue(a, field));
        const bv = field === "priority" ? priorities[b.priority] || 0 : String(queryValue(b, field));
        return (av > bv ? 1 : av < bv ? -1 : 0) * direction;
      });
    }
    return { items, error: "" };
  }

  function renderFilters() {
    const filters = visibleSavedFilters();
    const active = filters.find((filter) => filter.id === DemoState.activeSavedFilter);
    const result = runIssueQuery(DemoState.filterQuery);
    return `<div class="page page-enter">
      ${pageHeader("Work management", "Filters & advanced search", "Find accountable work with a safe Jira-style query subset, then save the view for repeat use.", `<button class="button" type="button" data-action="reset-query">New search</button>`) }
      <div class="filter-workspace">
        <aside class="saved-filter-panel" aria-label="Saved filters">
          <div class="panel-header"><h2>Saved filters</h2><span class="tag">${filters.length}</span></div>
          ${filters.map((filter) => `<div class="saved-filter-row ${filter.id === DemoState.activeSavedFilter ? "active" : ""}" data-saved-filter-id="${filter.id}"><button type="button" data-action="apply-saved-filter" data-filter-id="${filter.id}"><span class="filter-star ${filter.starred ? "active" : ""}">${icon("star")}</span><span><strong>${esc(filter.name)}</strong><small>${esc(filter.scope)} · ${esc(filter.owner)}</small></span></button>${persona().key === "administrator" || filter.owner === actor() ? `<button class="icon-button" type="button" data-action="delete-filter" data-filter-id="${filter.id}" aria-label="Delete ${esc(filter.name)}">${icon("trash")}</button>` : ""}</div>`).join("")}
        </aside>
        <section class="stack">
          <div class="card query-card">
            <div class="field"><label for="advancedQuery">Advanced query</label><textarea id="advancedQuery" data-filter-query spellcheck="false">${esc(DemoState.filterQuery)}</textarea></div>
            <div class="query-actions"><span class="query-help">Fields: project, key, type, status, priority, assignee, reporter, sprint, epic, text · Operators: =, !=, IN, ~, AND, ORDER BY</span><button class="button primary" type="button" data-action="run-filter">Run query</button></div>
            ${result.error ? `<div class="callout danger" role="alert"><strong>Query needs attention</strong><p>${esc(result.error)}</p></div>` : ""}
          </div>
          <form class="card save-filter-form" data-save-filter-form>
            <div class="field"><label for="filterName">Save this search as</label><input id="filterName" name="name" required value="${active ? esc(active.name) : ""}" placeholder="e.g., Certification work at risk"></div>
            <div class="field"><label for="filterScope">Visibility</label><select id="filterScope" name="scope"><option>Personal</option><option ${active?.scope === "Shared" ? "selected" : ""}>Shared</option></select></div>
            <button class="button" type="submit">Save filter</button>
          </form>
          <section><div class="section-heading"><div><h2>Results</h2><p>${result.error ? "Correct the query to see results." : `${result.items.length} work item${result.items.length === 1 ? "" : "s"} matched.`}</p></div>${active ? `<span class="tag">${esc(active.name)}</span>` : ""}</div>
            <div class="data-table-wrap"><table class="data-table"><thead><tr><th>Key</th><th>Work item</th><th>Type</th><th>Status</th><th>Priority</th><th>Owner</th><th>Due</th></tr></thead><tbody>${result.error ? "" : issueRows(result.items)}</tbody></table></div>
          </section>
        </section>
      </div>
    </div>`;
  }

  function renderBacklog() {
    const project = activeProject();
    const active = activeSprint();
    const stats = sprintStats(active);
    const sprint = stats.issues;
    const projectIssues = issuesForProject();
    const backlog = projectIssues.filter((issue) => issue.sprint === "Backlog");
    const portfolio = projectIssues.filter((issue) => issue.sprint === "Portfolio backlog");
    const future = sprintsForProject().find((item) => item.status === "future");
    const futureStats = future ? sprintStats(future) : null;
    return `<div class="page page-enter">
      ${pageHeader(`${project.key} · Work management`, "Backlog", `Shape scope, plan ${active?.name || "the next sprint"}, manage estimates, and keep delivery dependencies visible.`, `${active && can("manage-sprint") ? '<button class="button" type="button" data-action="start-sprint">Sprint settings</button>' : ""}${can("create-work") ? '<button class="button primary" type="button" data-action="open-create">Create work item</button>' : ""}`)}
      ${active ? `
      <section class="panel sprint-panel" data-sprint-id="${active.id}" data-sprint-status="${active.status}">
        <div class="sprint-header"><span class="sprint-title"><h2>${esc(active.name)} · ${esc(active.goal)}</h2><span>${esc(active.start)}–${esc(active.end)} · ${stats.committed} points · ${stats.blocked} blocked</span></span><span style="display:flex;gap:8px"><span class="tag">${esc(active.status === "active" ? "Active sprint" : "Planned sprint")}</span><button class="button small" type="button" data-view="board">Open board</button></span></div>
        <div>${backlogRows(sprint, false)}</div>
      </section>
      ${future && future.id !== active.id ? `<section class="panel sprint-panel" data-sprint-id="${future.id}" data-sprint-status="${future.status}"><div class="sprint-header"><span class="sprint-title"><h2>${esc(future.name)} · ${esc(future.goal)}</h2><span>${esc(future.start)}–${esc(future.end)} · ${futureStats.committed} planned points · ${future.capacity} point capacity</span></span><span class="tag">Future sprint</span></div><div>${futureStats.issues.length ? backlogRows(futureStats.issues, false) : '<div class="empty-state">No work planned yet.</div>'}</div></section>` : ""}
      ` : '<div class="empty-state"><strong>No sprint configured</strong>Create a project sprint to begin planning delivery work.</div>'}
      <section class="panel sprint-panel">
        <div class="sprint-header"><span class="sprint-title"><h2>Product backlog</h2><span>Prioritized future scope</span></span><span class="tag">${backlog.reduce((sum, issue) => sum + issue.points, 0)} points</span></div>
        <div>${backlogRows(backlog, true)}</div>
      </section>
      <section class="panel sprint-panel">
        <div class="sprint-header"><span class="sprint-title"><h2>Epics</h2><span>Outcome-oriented delivery containers</span></span><span class="tag">${portfolio.length} epic${portfolio.length === 1 ? "" : "s"}</span></div>
        <div>${backlogRows(portfolio, false)}</div>
      </section>
    </div>`;
  }

  function backlogRows(issues, allowMove) {
    return issues.map((issue) => `
      <div class="backlog-row" data-issue="${issue.key}" tabindex="0">
        <span class="backlog-row-icon" aria-hidden="true">${icon("list-checks")}</span><span class="backlog-key">${esc(issue.key)}</span><span class="backlog-summary">${esc(issue.summary)}</span><span>${statusBadge(issue.status)}</span><span>${avatar(issue.assignee, "table-avatar")}</span><span class="story-points" title="Story points">${issue.points}</span>
        ${allowMove && can("manage-sprint") ? `<button class="sr-only" type="button" data-action="move-to-sprint" data-key="${issue.key}">Move to ${esc(activeSprint().name)}</button>` : ""}
      </div>
    `).join("");
  }

  function renderBoard() {
    const order = ["Ready", "In Progress", "In Review", "Blocked", "Done"];
    const project = activeProject();
    const sprint = activeSprint();
    const stats = sprintStats(sprint);
    const sprintIssues = stats.issues;
    return `<div class="page page-enter">
      ${pageHeader(`${project.key} · ${sprint?.name || "Delivery"}`, "Delivery board", "Move work through the configured workflow. Drag cards or use the arrow controls.", `<button class="button" type="button" data-view="backlog">Backlog</button>${can("create-work") ? '<button class="button primary" type="button" data-action="open-create">Create work item</button>' : ""}`)}
      <div class="data-toolbar">
        <span class="tag">${esc(sprint?.name || "No active sprint")} · ${esc(sprint?.start || "Not scheduled")}–${esc(sprint?.end || "Not scheduled")}</span><span class="tag">Goal · ${esc(sprint?.goal || "Configure the sprint in Backlog")}</span><span class="tag">${stats.completed} / ${stats.committed} points</span><span class="tag">${stats.blocked} blocked</span>
      </div>
      <div class="board-scroll"><div class="board">
        ${order.map((status, columnIndex) => {
          const items = sprintIssues.filter((issue) => issue.status === status || (status === "Ready" && issue.status === "To Do"));
          return `<section class="board-column" data-board-status="${status}" aria-label="${status} column">
            <div class="board-column-header"><span>${esc(status)}</span><span class="board-count">${items.length}</span></div>
            ${items.map((issue) => { const editable = can("edit-work", issue); return `
              <article class="board-card priority-${slug(issue.priority)}" draggable="${editable}" ${editable ? `data-drag-issue="${issue.key}"` : ""} data-issue="${issue.key}" tabindex="0">
                <div class="board-card-key"><span>${esc(issue.key)} · ${esc(issue.type)}</span><span>${issue.points} pt</span></div>
                <h3>${esc(issue.summary)}</h3>
                <div class="board-card-meta">${avatar(issue.assignee, "table-avatar")}${editable ? `<span class="board-card-controls">
                  <button class="board-move" type="button" data-action="move-card" data-key="${issue.key}" data-direction="-1" aria-label="Move ${issue.key} left" ${columnIndex === 0 ? "disabled" : ""}>${icon("arrow-left")}</button>
                  <button class="board-move" type="button" data-action="move-card" data-key="${issue.key}" data-direction="1" aria-label="Move ${issue.key} right" ${columnIndex === order.length - 1 ? "disabled" : ""}>${icon("arrow-right")}</button>
                </span>` : '<span class="tag">Read only</span>'}</div>
              </article>
            `; }).join("")}
          </section>`;
        }).join("")}
      </div></div>
    </div>`;
  }

  function renderTimeline() {
    const project = activeProject();
    const scale = DemoState.timelineScale;
    const labels = scale === "months"
      ? ["Aug", "", "Sep", "", "Oct", "", "Nov", ""]
      : ["24 Aug", "31 Aug", "07 Sep", "14 Sep", "21 Sep", "28 Sep", "05 Oct", "12 Oct"];
    const monthMap = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };
    const rows = issuesForProject().slice(0, 8).map((issue, index) => {
      const match = String(issue.due).match(/^(\d{1,2})\s+([A-Za-z]{3})\s+(\d{4})$/);
      const span = scale === "months" ? (issue.type === "Epic" || issue.points >= 8 ? 2 : 1) : issue.type === "Epic" ? 3 : issue.points >= 8 ? 2 : 1;
      let dueSlot = index;
      if (match && monthMap[match[2]] !== undefined) {
        const day = Number(match[1]);
        const month = monthMap[match[2]];
        const year = Number(match[3]);
        dueSlot = scale === "months" ? (month - 7) * 2 + (day > 15 ? 1 : 0) : Math.round((Date.UTC(year, month, day) - Date.UTC(2026, 7, 24)) / 604800000);
      }
      return {
        issue: issue.key,
        label: issue.summary,
        start: Math.max(0, Math.min(8 - span, dueSlot - span + 1)),
        span,
        tone: issue.status === "Done" ? "success" : issue.status === "Blocked" ? "danger" : issue.status === "In Review" ? "warning" : issue.priority === "Highest" ? "dark" : ""
      };
    });
    const atRisk = milestonesForProject().filter((item) => item.status === "At risk");
    return `<div class="page page-enter">
      ${pageHeader(`${project.key} · Plan`, "Timeline", "See epics, work, milestones, dependencies, and schedule exposure in one delivery view.", `<div class="segmented" aria-label="Timeline scale"><button class="${scale === "weeks" ? "active" : ""}" type="button" data-action="set-timeline-scale" data-scale="weeks">Weeks</button><button class="${scale === "months" ? "active" : ""}" type="button" data-action="set-timeline-scale" data-scale="months">Months</button></div><button class="button" type="button" data-action="export-timeline">Export</button>`)}
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
      <div class="callout ${project.key === "SMN" && DemoState.decisionApproved || !atRisk.length ? "success" : "warning"}"><strong>${project.key === "SMN" && DemoState.decisionApproved ? "Forecast restored" : atRisk.length ? "Schedule exposure" : "Plan is on track"}</strong><p>${project.key === "SMN" && DemoState.decisionApproved ? "Approval of DEC-014 restored the Integration Readiness Review forecast to 18 September." : atRisk.length ? `${atRisk.length} milestone${atRisk.length === 1 ? "" : "s"} currently forecast beyond target. Open the linked work to review ownership and recovery actions.` : "Current project milestones remain aligned to their target dates."}</p></div>
    </div>`;
  }

  function renderReleases() {
    const project = activeProject();
    const approved = project.key === "SMN" && DemoState.decisionApproved;
    const releaseScope = issuesForProject();
    const projectDecisions = decisionsForProject();
    const projectMilestones = milestonesForProject();
    const projectRisks = risksForProject();
    const done = releaseScope.filter((issue) => issue.status === "Done").length;
    const gatesReady = projectMilestones.filter((item) => item.status !== "At risk").length + projectDecisions.filter((item) => item.status === "Approved").length;
    const totalGates = projectMilestones.length + projectDecisions.length;
    const confidence = project.key === "SMN" ? currentConfidence() : project.confidence;
    return `<div class="page page-enter">
      ${pageHeader(`${project.key} · Delivery`, "Releases", "Control version scope, target dates, readiness gates, evidence, and release decisions from the same operating record.", `<button class="button" type="button" data-action="release-notes">Generate release notes</button>${can("create-work") ? '<button class="button primary" type="button" data-action="create-release">Configure release</button>' : ""}`)}
      <section class="metric-grid">
        ${metric(`${project.releaseName || "Next release"} complete`, project.completion + "%", `Target · ${esc(project.release)}`)}
        ${metric("Readiness gates", `${gatesReady} / ${totalGates}`, gatesReady === totalGates ? '<span class="delta good">All current gates ready</span>' : `${totalGates - gatesReady} gate${totalGates - gatesReady === 1 ? "" : "s"} need attention`, gatesReady === totalGates ? "success" : "warning")}
        ${metric("Open scope", releaseScope.filter((issue) => issue.status !== "Done").length, releaseScope.length + " governed scope items")}
        ${metric("Release confidence", confidence + "%", approved ? '<span class="delta good">+14 after DEC-014</span>' : `${projectRisks.length} registered risk${projectRisks.length === 1 ? "" : "s"}`, confidence >= 80 ? "success" : "warning")}
      </section>
      <div class="project-overview-grid" style="margin-top:16px">
        <section class="panel"><div class="panel-header"><h2>${esc(project.releaseName || "Next release")} · ${esc(project.name)}</h2>${healthBadge(approved ? "Amber, recovering" : project.health)}</div><div class="panel-body">
          ${progress("Scope complete", project.completion, `${project.completion}%`)}${progress("Work closed", releaseScope.length ? done / releaseScope.length * 100 : 0, `${done} of ${releaseScope.length} items`, releaseScope.some((issue) => issue.status === "Blocked") ? "warning" : "success")}${progress("Milestones on track", projectMilestones.length ? projectMilestones.filter((item) => item.status !== "At risk").length / projectMilestones.length * 100 : 0, `${projectMilestones.filter((item) => item.status !== "At risk").length} of ${projectMilestones.length} gates`, projectMilestones.some((item) => item.status === "At risk") ? "warning" : "success")}${progress("Knowledge coverage", pagesForProject().length ? 100 : 0, `${pagesForProject().length} governed page${pagesForProject().length === 1 ? "" : "s"}`, "success")}
        </div></section>
        <section class="panel release-gates"><div class="panel-header"><h2>Readiness gates</h2><span class="tag">${totalGates} governed gates</span></div><div class="panel-body">
          ${projectDecisions.map((item) => `<div class="mapping-row"><strong>${esc(item.title)}</strong><span>→</span><strong>${esc(item.id)}</strong>${statusBadge(item.status)}</div>`).join("")}
          ${projectMilestones.map((item) => `<div class="mapping-row"><strong>${esc(item.name)}</strong><span>→</span><strong>${esc(item.issue)}</strong>${statusBadge(item.status === "At risk" ? "Blocked" : "Ready")}</div>`).join("")}
        </div></section>
      </div>
      <section class="panel" style="margin-top:16px"><div class="panel-header"><h2>Included work</h2><span class="tag">${esc(project.releaseName || "Release")} scope</span></div><div class="data-table-wrap"><table class="data-table"><thead><tr><th>Key</th><th>Summary</th><th>Type</th><th>Owner</th><th>Status</th><th>Due</th></tr></thead><tbody>${releaseScope.map((issue) => `<tr data-issue="${issue.key}" tabindex="0"><td>${issue.key}</td><td class="summary-cell">${esc(issue.summary)}</td><td>${esc(issue.type)}</td><td>${personCell(issue.assignee)}</td><td>${statusBadge(issue.status)}</td><td>${esc(issue.due)}</td></tr>`).join("")}</tbody></table></div></section>
      <div class="callout"><strong>Release governance</strong><p>Release scope, work state, evidence, risks, approvals, and leadership status remain traceable to their accountable records.</p></div>
    </div>`;
  }

  function renderPortal() {
    const customerName = persona().key === "customer" ? actor() : "Amina Cole";
    const ownRequests = DemoState.service.requests.filter((request) => request.requester === customerName);
    return `<div class="page page-enter" data-service-tab="portal">
      ${pageHeader("Service management", "Help center", "Request help, find governed guidance, and follow every request through resolution.", canViewRoute("queues") ? '<button class="button" type="button" data-view="queues">Agent queues</button>' : "") }
      <div class="portal-hero">
        <section class="portal-welcome"><div class="eyebrow" style="color:var(--sky)">Unified service portal</div><h2>How can we help, ${esc(customerName.split(" ")[0])}?</h2><p>Search connected knowledge or choose a request type. Every submission receives a traceable key, owner, status, activity, and service target.</p><div class="global-search-wrap" style="margin-top:18px;max-width:620px"><input type="search" aria-label="Search help articles" placeholder="Search help and knowledge" data-portal-search></div><div class="portal-search-results" data-portal-results hidden></div></section>
        <section class="card"><div class="eyebrow">Service promise</div><h2 style="font-size:16px">Clear ownership from request to resolution.</h2><p>Public replies, approvals, linked work, and SLA status stay together. Internal agent notes remain private.</p><div class="tag" style="margin-top:12px">Synthetic service data</div></section>
      </div>
      <div class="service-section-head"><h2>What do you need?</h2><span class="tag">5 request types</span></div>
      <div class="request-type-grid" style="margin-top:10px">${DemoState.service.requestTypes.map((type) => `<button class="request-type-card" type="button" data-action="open-request-create" data-request-type="${type.id}" ${can("request-service") ? "" : "disabled"}><span class="request-type-icon">${requestTypeIcon(type.id)}</span><span class="request-type-copy"><strong>${esc(type.name)}</strong><span>${esc(type.description)}</span></span></button>`).join("")}</div>
      <div class="service-section-head" style="margin-top:24px"><h2>${esc(customerName)}’s requests</h2><span class="tag">${ownRequests.length} tracked</span></div>
      <div class="portal-request-list" style="margin-top:10px">${ownRequests.length ? ownRequests.map((request) => `<button class="portal-request-card" type="button" data-request-key="${request.key}"><span class="request-key">${request.key}</span><span class="request-summary"><strong>${esc(request.summary)}</strong><span>${esc(request.type)} · Updated ${esc(request.created)}</span></span>${statusBadge(request.status)}<span class="sla-badge ${slaState(request, primarySlaKind(request)) === "approaching" ? "at-risk" : slaState(request, primarySlaKind(request))}">${esc(slaLabel(request, primarySlaKind(request)))}</span></button>`).join("") : '<div class="empty-state">No requests yet. Choose a request type to begin.</div>'}</div>
    </div>`;
  }

  function queueDefinition(id) {
    return ({
      unassigned: ["Unassigned", "New requests awaiting an owner"],
      mine: ["My open requests", "Assigned to the current service agent"],
      approaching: ["Approaching SLA", "Service targets with less than 20% remaining"],
      breached: ["Breached", "Requests outside a service target"],
      waiting: ["Waiting for customer", "Resolution clock paused for a customer response"],
      approval: ["Changes awaiting approval", "Access and change requests with an approval gate"]
    })[id] || ["Unassigned", "New requests awaiting an owner"];
  }

  function renderQueues() {
    const queueId = DemoState.serviceQueue || "unassigned";
    const requests = requestsForQueue(queueId);
    const [title, description] = queueDefinition(queueId);
    const queues = ["unassigned", "mine", "approaching", "breached", "waiting", "approval"];
    return `<div class="page page-enter" data-service-tab="queues">
      ${pageHeader("Service management", "Agent queues", "Triage, assign, respond, transition, and resolve requests against visible service targets.", `${canViewRoute("portal") ? '<button class="button" type="button" data-view="portal">Open portal</button>' : ""}<button class="button" type="button" data-view="slas">SLA controls</button>`) }
      <div class="queue-layout">
        <aside class="queue-sidebar"><div class="queue-panel-head"><h2>Queues</h2><span class="tag">Live</span></div><div class="queue-list" style="margin-top:10px">${queues.map((id) => { const definition = queueDefinition(id); const count = requestsForQueue(id).length; return `<button class="queue-card ${queueId === id ? "active" : ""}" type="button" data-action="select-queue" data-queue-id="${id}" aria-current="${queueId === id}"><strong>${esc(definition[0])}</strong><span class="queue-count ${id === "breached" && count ? "danger" : id === "approaching" && count ? "warning" : ""}">${count}</span><small>${esc(definition[1])}</small></button>`; }).join("")}</div></aside>
        <section class="queue-main"><div class="queue-panel-head"><div><h2>${esc(title)}</h2><p>${esc(description)}</p></div><span class="tag">${requests.length} requests</span></div><div class="request-list">${requests.length ? requests.map((request) => `<button class="request-row" type="button" data-request-key="${request.key}"><span class="request-key">${request.key}</span><span class="request-summary"><strong>${esc(request.summary)}</strong><span>${esc(request.requester)} · ${esc(request.assignee)}</span></span>${statusBadge(request.status)}<span class="sla-badge ${slaState(request, primarySlaKind(request)) === "approaching" ? "at-risk" : slaState(request, primarySlaKind(request))}" data-sla-kind="${primarySlaKind(request) === "firstResponse" ? "first-response" : "resolution"}" data-sla-state="${slaState(request, primarySlaKind(request))}" data-minutes-remaining="${Math.round((request[primarySlaKind(request)].goal - request[primarySlaKind(request)].elapsed) * 60)}">${esc(slaLabel(request, primarySlaKind(request)))}</span></button>`).join("") : '<div class="empty-state"><strong>Queue is clear</strong>No requests currently match this queue.</div>'}</div></section>
      </div>
    </div>`;
  }

  function renderSlas() {
    const requests = DemoState.service.requests;
    const approaching = requests.filter((request) => [slaState(request, "firstResponse"), slaState(request, "resolution")].includes("approaching")).length;
    const breached = requests.filter((request) => [slaState(request, "firstResponse"), slaState(request, "resolution")].includes("breached")).length;
    const met = requests.filter((request) => request.firstResponse.met && request.resolution.met).length;
    return `<div class="page page-enter" data-service-tab="slas">
      ${pageHeader("Service management", "Service-level agreements", "Preview deterministic response and resolution clocks without relying on the viewer’s real time.", `<button class="button" type="button" data-view="queues">Agent queues</button>${can("manage-service") ? '<button class="button primary" type="button" data-action="advance-clock">Advance demo clock by 1 hour</button>' : '<span class="tag">Read-only preview</span>'}`) }
      <div class="service-hero"><section class="card surface-dark"><div class="eyebrow" style="color:var(--sky)">Deterministic demo clock</div><h2 style="font-size:18px">${esc(DemoState.service.demoNow)}</h2><p>Advanced ${DemoState.service.elapsedHours} hour${DemoState.service.elapsedHours === 1 ? "" : "s"} from the fixture baseline. Waiting and approval states pause resolution time.</p></section><section class="card"><div class="eyebrow">Current service posture</div><div class="capacity-summary" style="margin-top:12px"><div class="capacity-stat"><strong>${approaching}</strong><span>Approaching</span></div><div class="capacity-stat"><strong>${breached}</strong><span>Breached</span></div><div class="capacity-stat"><strong>${met}</strong><span>Fully met</span></div></div></section></div>
      <div class="sla-grid">${requests.slice(0, 5).map((request) => { const state = slaState(request, "resolution"); return `<article class="sla-card"><div class="sla-card-head"><div><h3>${request.key}</h3><p>${esc(request.summary)}</p></div><span class="sla-badge ${state === "approaching" ? "at-risk" : state}" data-sla-kind="resolution" data-sla-state="${state}">${esc(state)}</span></div><div class="sla-clock">${esc(slaLabel(request, "resolution"))}</div><div class="sla-progress ${state === "approaching" ? "at-risk" : state}"><span style="width:${Math.min(100, request.resolution.elapsed / request.resolution.goal * 100)}%"></span></div></article>`; }).join("")}</div>
      <div class="section-heading"><div><h2>Service policies</h2><p>Targets vary by calculated priority and pause on controlled workflow states.</p></div></div><div class="sla-policy-list">${[["P1 critical incident", "15 minutes", "8 hours", "24×7"], ["High priority", "4 hours", "24 hours", "Business hours"], ["Standard request", "8 hours", "40 hours", "Business hours"]].map((policy) => `<div class="sla-policy-row"><strong>${policy[0]}</strong><span>First response · ${policy[1]}</span><span>Resolution · ${policy[2]}</span><span>${policy[3]}</span><span class="tag">Active</span></div>`).join("")}</div>
    </div>`;
  }

  function renderSpaces() {
    if (DemoState.activePage) return renderPage();
    const spaces = DemoState.projects.map((project) => ({ ...project, pages: pagesForProject(project.key).filter((page) => !page.archived).length, updated: pagesForProject(project.key)[0]?.updated || "Not yet updated" }));
    return `<div class="page page-enter">
      ${pageHeader("Knowledge", "Spaces", "Create, govern, discover, and connect organizational knowledge directly to accountable work.", `<button class="button" type="button" data-action="show-archived-pages">Archived pages</button>${can("edit-knowledge") ? '<button class="button primary" type="button" data-action="create-page">Create page</button>' : ""}`)}
      <div class="space-grid">${spaces.map((space) => `
        <article class="card space-card" tabindex="0" data-space="${space.key}">
          <span class="space-card-icon">${esc(space.key)}</span><h2>${esc(space.name)}</h2><p>${esc(space.description)}</p>
          <div class="space-card-meta"><span>${space.pages} pages</span><span>Owner · ${esc(space.owner)}</span><span>Updated ${esc(space.updated)}</span></div>
          <span class="tag" style="position:absolute;top:18px;right:18px">Project space</span>
        </article>
      `).join("")}</div>
      <div class="section-heading"><div><h2>Recently updated</h2><p>Knowledge changes with linked work and decisions.</p></div></div>
      <div class="data-table-wrap"><table class="data-table"><thead><tr><th>Page</th><th>Space</th><th>Owner</th><th>Version</th><th>Updated</th></tr></thead><tbody>
        ${DemoState.pages.filter((page) => !page.archived).slice().sort((a, b) => a.updated.localeCompare(b.updated)).slice(0, 10).map((page) => `<tr data-page="${page.id}" tabindex="0"><td class="summary-cell">${esc(page.title)}</td><td>${esc(projectByKey(page.projectKey || "SMN")?.name || page.projectKey)}</td><td>${personCell(page.owner)}</td><td>v${page.version}</td><td>${esc(page.updated)}</td></tr>`).join("")}
      </tbody></table></div>
    </div>`;
  }

  function renderPage() {
    const page = pageById(DemoState.activePage) || pageById(projectHubId());
    const project = projectByKey(page.projectKey || "SMN") || activeProject();
    const projectPages = pagesForProject(project.key);
    const comments = DemoState.pageComments[page.id] || [];
    const versions = DemoState.pageVersions[page.id] || [{ version: page.version, author: page.owner, time: page.updated, note: "Current version" }];
    const isDecisionPage = page.id === "alternate-path";
    const draft = DemoState.pageDrafts[page.id];
    const pageActions = `<button class="button" type="button" data-action="page-history" data-page-id="${page.id}">Version history</button>${page.id !== projectHubId(project.key) && can("archive-knowledge") ? `<button class="button" type="button" data-action="${page.archived ? "restore-page" : "archive-page"}" data-page-id="${page.id}">${page.archived ? "Restore" : "Archive"}</button>` : ""}${can("edit-knowledge") ? `<button class="button primary" type="button" data-action="edit-page" data-page-id="${page.id}">${draft ? "Resume draft" : "Edit page"}</button>` : ""}`;
    return `<div class="page page-enter">
      ${pageHeader(`${project.name} · Space`, page.title, page.summary, pageActions, `<button type="button" data-action="all-spaces">Spaces</button><span>›</span><span>${esc(project.name)}</span>`)}
      <div class="knowledge-layout">
        <nav class="page-tree" aria-label="Page tree"><div class="page-tree-header"><span>Pages</span>${can("edit-knowledge") ? `<button class="section-link" type="button" data-action="create-page" aria-label="Create a page">${icon("plus")}</button>` : ""}</div>
          ${projectPages.filter((item) => !item.archived || item.id === page.id).map((item) => `<button class="tree-item depth-${item.depth} ${item.id === page.id ? "active" : ""}" type="button" data-page="${item.id}"><span class="page-ico" aria-hidden="true">${icon(item.depth ? "file-text" : "book-open")}</span><span>${esc(item.title)}</span></button>`).join("")}
        </nav>
        <article class="knowledge-document">
          ${page.archived ? '<div class="callout warning" data-page-status="archived"><strong>Archived page</strong><p>This version remains available for traceability but is hidden from the normal page tree and search.</p></div>' : ""}
          ${draft ? `<div class="callout"><strong>Unpublished local draft</strong><p>${esc(draft.updatedBy)} saved changes ${esc(draft.updated)}. The governed page remains at v${page.version}.</p></div>` : ""}
          <div class="document-toolbar"><span class="document-meta">Owned by ${esc(page.owner)} · Updated ${esc(page.updated)} · v${page.version}</span><span class="tag">Governed page</span></div>
          <h1>${esc(page.title)}</h1>
          ${page.bodyHtml ? `<div class="published-page-body">${sanitizeRichText(page.bodyHtml)}</div>` : `<p class="lead">${esc(page.content)}</p>${isDecisionPage ? renderDecisionPageBody() : renderGenericPageBody(page)}`}
          <section style="margin-top:32px;padding-top:20px;border-top:1px solid var(--line)">
            <h2 style="margin-top:0">Comments</h2>
            <ul class="comment-list">${comments.length ? comments.map((comment) => `<li class="comment-item"><div class="comment-head"><strong>${esc(comment.author)}</strong><time>${esc(comment.time)}</time></div><p>${esc(comment.text)}</p></li>`).join("") : '<li class="empty-state" style="padding:18px">No comments yet.</li>'}</ul>
            <form class="comment-form" data-page-comment="${page.id}"><textarea name="comment" aria-label="Add a page comment" placeholder="Add a comment or @mention a teammate"></textarea><button class="button primary" type="submit">Comment</button></form>
          </section>
        </article>
        <aside class="document-sidebar" aria-label="Page information">
          <section class="document-sidebar-section"><h3>Linked work & decisions</h3>
            ${isDecisionPage ? `
              <button class="linked-object" type="button" data-decision="DEC-014"><span class="linked-icon">${icon("diamond")}</span><span class="linked-copy"><strong>DEC-014</strong><span>${DemoState.decisionApproved ? "Approved" : "Pending approval"}</span></span></button>
              <button class="linked-object" type="button" data-issue="SMN-191"><span class="linked-icon">${icon("check-square")}</span><span class="linked-copy"><strong>SMN-191</strong><span>${esc(issueByKey("SMN-191").status)} · Lena Ortiz</span></span></button>
              <button class="linked-object" type="button" data-risk="RISK-07"><span class="linked-icon">${icon("shield-alert")}</span><span class="linked-copy"><strong>RISK-07</strong><span>${currentRiskScore()}/25 · ${DemoState.decisionApproved ? "Moderate" : "High"}</span></span></button>
            ` : (() => { const linked = issuesForProject(project.key).find((issue) => issue.linkedPage === page.id) || issuesForProject(project.key)[0]; return linked ? `<button class="linked-object" type="button" data-issue="${linked.key}"><span class="linked-icon">${icon("check-square")}</span><span class="linked-copy"><strong>${esc(linked.key)} · Linked work</strong><span>Open details and activity</span></span></button>` : '<div class="empty-state">No linked work yet.</div>'; })()}
          </section>
          <section class="document-sidebar-section"><h3>Evidence</h3>
            ${[`${project.key} Evidence Summary.pdf`, `${project.key} Control Register.xlsx`, `${project.key} Review Record.pdf`].map((file, index) => `<div class="attachment-row"><span class="attachment-icon">${icon(index === 1 ? "file-spreadsheet" : "file-text")}</span><span>${esc(file)}</span></div>`).join("")}
          </section>
          <section class="document-sidebar-section"><h3>Version history</h3><ul class="version-list">${versions.slice(0, 5).map((version) => `<li class="version-item" data-version-row="${version.version}"><div class="version-head"><strong>v${version.version} · ${esc(version.author)}</strong><time>${esc(version.time)}</time></div><p>${esc(version.note)}</p><button class="section-link" type="button" data-action="compare-version" data-page-id="${page.id}" data-version="${version.version}">Compare</button></li>`).join("")}</ul></section>
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
      <div class="callout ${DemoState.decisionApproved ? "success" : ""}"><strong>${DemoState.decisionApproved ? "Decision recorded" : "Approval required by 26 August"}</strong><p>${DemoState.decisionApproved ? `Dana Kessler approved Option B. ${primaryReleasedCount()} dependent item${primaryReleasedCount() === 1 ? "" : "s"} moved to Ready and the review forecast returned to 18 September.` : "DEC-014 is the governed approval record. One approval will update work, schedule, risk, version history, notifications, and the leadership brief."}</p></div>
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
    const project = activeProject();
    const projectDecisions = decisionsForProject();
    const decisionCounts = ["Pending", "Approved", "Superseded", "Draft"].map((status) => {
      const count = projectDecisions.filter((decision) => decision.status === status).length;
      return count ? `${count} ${status.toLowerCase()}` : "";
    }).filter(Boolean).join(" · ");
    return `<div class="page page-enter">
      ${pageHeader(`${project.key} · Governance`, "Decision register", `Capture options, rationale, approval, evidence, and downstream impact for ${project.name}.`, can("create-work") ? `<button class="button primary" type="button" data-action="create-decision">Create decision</button>` : "")}
      <section class="panel">
        <div class="panel-header"><h2>Project decisions</h2><span class="tag">${decisionCounts || "No decisions"}</span></div>
        <div>${projectDecisions.map((decision) => `
          <div class="decision-card" data-decision="${decision.id}" tabindex="0">
            <span class="decision-key">${esc(decision.id)}</span>
            <span class="decision-summary"><strong>${esc(decision.title)}</strong><span>Recommendation · ${esc(decision.recommendation)}</span></span>
            <span class="decision-person">Owner · ${esc(decision.owner)}</span>
            <span class="decision-date">Due · ${esc(decision.due)}</span>
            ${statusBadge(decision.status)}
          </div>
        `).join("") || '<div class="empty-state"><strong>No decisions yet</strong>Create a governed decision to capture options, rationale, and approval.</div>'}</div>
      </section>
    </div>`;
  }

  function renderDecisionDetail() {
    const decision = decisionById(DemoState.activeDecision) || decisionById("DEC-014");
    const isPrimary = decision.id === "DEC-014";
    if (!isPrimary) return renderGenericDecisionDetail(decision);
    const approved = decision.status === "Approved";
    const primaryDownstream = primaryDependents();
    return `<div class="page page-enter">
      ${pageHeader("Governed decision", `${decision.id} · ${decision.title}`, decision.rationale, `<button class="button" type="button" data-page="${decision.page}">Open decision page</button>${isPrimary && decision.status === "Pending" && can("approve", decision) ? '<button class="button primary" type="button" data-action="confirm-approval">Approve Option B</button>' : ""}`, '<button type="button" data-action="all-decisions">Decisions</button><span>›</span><span>' + esc(decision.id) + '</span>')}
      <div class="decision-hero">
        <section class="decision-impact ${approved ? "approved" : ""}">
          <div class="eyebrow">${approved ? "Decision recorded" : "Decision required"}</div><h2>${approved ? "Alternate path approved; delivery is recovering." : "One approval changes the delivery outcome."}</h2>
          <p>${approved ? "The governed approval updated accountable work, schedule, risk, knowledge, notifications, audit history, and briefing facts." : "Option B uses an accredited partner laboratory with parallel evidence review."}</p>
          <div class="impact-grid">
            <div class="impact-stat"><strong>${primaryEligibleCount()}</strong><span>Blocked items</span></div>
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
        <section class="panel"><div class="panel-header"><h2>Downstream work</h2><span class="tag">${primaryDownstream.length} dependencies</span></div><div class="panel-body">
          <ul class="dependency-list">${primaryDownstream.map((issue) => `<li><button class="dependency-item" type="button" data-issue="${issue.key}"><span class="dependency-key">${issue.key}</span><span>${esc(issue.summary)}</span>${statusBadge(issue.status)}</button></li>`).join("")}</ul>
        </div></section>
        <section class="panel"><div class="panel-header"><h2>Traceability</h2></div><div class="panel-body">
          <button class="linked-object" type="button" data-page="alternate-path"><span class="linked-icon">${icon("file-text")}</span><span class="linked-copy"><strong>Alternate Path Decision Brief</strong><span>v${pageById("alternate-path").version}</span></span></button>
          <button class="linked-object" type="button" data-issue="SMN-191"><span class="linked-icon">${icon("check-square")}</span><span class="linked-copy"><strong>SMN-191</strong><span>${esc(issueByKey("SMN-191").status)}</span></span></button>
          <button class="linked-object" type="button" data-risk="RISK-07"><span class="linked-icon">${icon("shield-alert")}</span><span class="linked-copy"><strong>RISK-07</strong><span>${currentRiskScore()}/25</span></span></button>
        </div></section>
      </div>
    </div>`;
  }

  function renderGenericDecisionDetail(decision) {
    const project = projectByKey(decision.projectKey || "SMN") || activeProject();
    const approved = decision.status === "Approved";
    const pending = decision.status === "Pending";
    const linkedIssue = issueByKey(decision.linkedIssue);
    const linkedPage = pageById(decision.page);
    const linkedRisk = risksForProject(project.key).find((risk) => risk.issue === decision.linkedIssue || risk.issue === linkedIssue?.key);
    const downstream = linkedIssue ? [linkedIssue, ...issuesForProject(project.key).filter((issue) => issue.dependencies.includes(linkedIssue.key))] : [];
    return `<div class="page page-enter">
      ${pageHeader("Governed decision", `${decision.id} · ${decision.title}`, decision.rationale, `<button class="button" type="button" data-page="${decision.page}">Open decision page</button>${pending && can("approve", decision) ? `<button class="button primary" type="button" data-action="approve-generic-decision" data-decision-id="${decision.id}">Approve recommendation</button>` : ""}`, `<button type="button" data-action="all-decisions">Decisions</button><span>›</span><span>${esc(decision.id)}</span>`)}
      <div class="decision-hero">
        <section class="decision-impact ${approved ? "approved" : ""}"><div class="eyebrow">${approved ? "Decision recorded" : pending ? "Decision required" : "Decision closed"}</div><h2>${approved ? "The recommendation is approved and traceable." : pending ? "A governed choice is ready for review." : `This record is ${esc(decision.status.toLowerCase())} and cannot be approved.`}</h2><p>${esc(decision.recommendation)}. ${esc(decision.rationale)}</p><div class="impact-grid"><div class="impact-stat"><strong>${downstream.length}</strong><span>Linked work items</span></div><div class="impact-stat"><strong>${linkedRisk ? linkedRisk.score + "/25" : "—"}</strong><span>Risk exposure</span></div><div class="impact-stat"><strong>${linkedPage ? "v" + linkedPage.version : "—"}</strong><span>Knowledge version</span></div></div></section>
        <section class="card"><div class="eyebrow">Decision control</div><div class="field" style="margin-top:12px"><span class="field-label">Status</span><div>${statusBadge(decision.status)}</div></div><div class="field" style="margin-top:12px"><span class="field-label">Owner</span><div>${personCell(decision.owner)}</div></div><div class="field" style="margin-top:12px"><span class="field-label">Approver</span><div>${personCell(decision.approver)}</div></div><div class="field" style="margin-top:12px"><span class="field-label">Due</span><div>${esc(decision.due)}</div></div></section>
      </div>
      <div class="project-overview-grid" style="margin-top:16px"><section class="panel"><div class="panel-header"><h2>Downstream work</h2><span class="tag">${downstream.length} linked</span></div><div class="panel-body"><ul class="dependency-list">${downstream.map((issue) => `<li><button class="dependency-item" type="button" data-issue="${issue.key}"><span class="dependency-key">${issue.key}</span><span>${esc(issue.summary)}</span>${statusBadge(issue.status)}</button></li>`).join("") || '<li class="empty-state">No downstream work linked.</li>'}</ul></div></section><section class="panel"><div class="panel-header"><h2>Traceability</h2></div><div class="panel-body">${linkedPage ? `<button class="linked-object" type="button" data-page="${linkedPage.id}"><span class="linked-icon">${icon("file-text")}</span><span class="linked-copy"><strong>${esc(linkedPage.title)}</strong><span>v${linkedPage.version}</span></span></button>` : ""}${linkedIssue ? `<button class="linked-object" type="button" data-issue="${linkedIssue.key}"><span class="linked-icon">${icon("check-square")}</span><span class="linked-copy"><strong>${linkedIssue.key}</strong><span>${esc(linkedIssue.status)}</span></span></button>` : ""}${linkedRisk ? `<button class="linked-object" type="button" data-risk="${linkedRisk.id}"><span class="linked-icon">${icon("shield-alert")}</span><span class="linked-copy"><strong>${linkedRisk.id}</strong><span>${linkedRisk.score}/25</span></span></button>` : ""}</div></section></div>
    </div>`;
  }

  function renderReports() {
    const project = activeProject();
    const projectIssues = issuesForProject();
    const projectPages = pagesForProject().filter((page) => !page.archived);
    const projectRisks = risksForProject();
    const completed = projectIssues.filter((issue) => issue.status === "Done").length;
    const total = projectIssues.length;
    const sprint = activeSprint();
    const stats = sprintStats(sprint);
    const sprintPercent = stats.committed ? Math.round(stats.completed / stats.committed * 100) : 0;
    const active = projectIssues.filter((issue) => ["Ready", "In Progress", "In Review"].includes(issue.status)).length;
    const blocked = projectIssues.filter((issue) => issue.status === "Blocked").length;
    const planned = Math.max(0, total - active - blocked - completed);
    const linked = projectIssues.filter((issue) => issue.linkedPage && pageById(issue.linkedPage)).length;
    const linkage = total ? Math.round(linked / total * 100) : 0;
    const burnup = Array.from({ length: 7 }, (_, index) => Math.round(stats.completed * (index + 1) / 7));
    const activeStop = total ? active / total * 100 : 0;
    const blockedStop = activeStop + (total ? blocked / total * 100 : 0);
    const doneStop = blockedStop + (total ? completed / total * 100 : 0);
    const versionedPages = projectPages.filter((page) => (DemoState.pageVersions[page.id] || []).length > 0).length;
    return `<div class="page page-enter">
      ${pageHeader(`${project.key} · Insights`, "Reports & dashboards", `Analyze delivery, quality, risk, sprint, decision, and knowledge signals for ${project.name}.`, `<button class="button" type="button" data-action="export-csv">Export CSV</button>${canViewRoute("leadership") ? '<button class="button primary" type="button" data-view="leadership">Leadership brief</button>' : ""}`)}
      <section class="metric-grid">
        ${metric("Sprint completion", sprintPercent + "%", `${stats.completed} of ${stats.committed} story points · ${esc(sprint?.name || "No sprint")}`)}
        ${metric("Flow efficiency", total ? Math.round((active + completed) / total * 100) + "%" : "0%", `${active} active · ${completed} done`, active ? "success" : "")}
        ${metric("Blocked items", blockedCount(project.key), blockedCount(project.key) ? `${blockedCount(project.key)} require owner action` : '<span class="delta good">No blocked work</span>', blockedCount(project.key) ? "danger" : "success")}
        ${metric("Page-to-work linkage", linkage + "%", `${linked} of ${total} work items linked`, linkage >= 90 ? "success" : "warning")}
      </section>
      <div class="report-grid" style="margin-top:14px">
        <section class="card chart-card">
          <div class="chart-header"><div><h2>Sprint burnup</h2><p>Completed versus planned story points</p></div><div class="chart-legend"><span><i class="legend-dot"></i>Complete</span><span><i class="legend-dot secondary"></i>Plan</span></div></div>
          <div class="bar-chart">${burnup.map((value, index) => `<div class="bar-group"><span class="bar" style="height:${stats.committed ? Math.min(100, value / stats.committed * 100) : 0}%"></span><span class="bar secondary" style="height:${(index + 1) / 7 * 100}%"></span><span class="bar-label">D${index + 1}</span></div>`).join("")}</div>
        </section>
        <section class="card chart-card">
          <div class="chart-header"><div><h2>Work distribution</h2><p>${total} tracked items by state</p></div></div>
          <div class="donut-wrap"><div class="donut" style="background:conic-gradient(var(--teal-400) 0 ${activeStop}%, var(--danger) ${activeStop}% ${blockedStop}%, var(--success) ${blockedStop}% ${doneStop}%, var(--line) ${doneStop}% 100%)"><div class="donut-hole"><strong>${total}</strong><span>Items</span></div></div><div>
            <div class="donut-legend-row"><span><i class="legend-dot"></i>Active</span><strong>${active}</strong></div>
            <div class="donut-legend-row"><span><i class="legend-dot danger"></i>Blocked</span><strong>${blocked}</strong></div>
            <div class="donut-legend-row"><span><i class="legend-dot success"></i>Done</span><strong>${completed}</strong></div>
            <div class="donut-legend-row"><span><i class="legend-dot neutral"></i>Planned</span><strong>${planned}</strong></div>
          </div></div>
        </section>
      </div>
      <div class="report-grid" style="margin-top:14px">
        <section class="panel"><div class="panel-header"><h2>Risk exposure</h2><span class="tag">Updated from register</span></div><div class="panel-body">${projectRisks.map((risk) => progress(`${risk.id} · ${risk.title}`, risk.score / 25 * 100, risk.score + "/25", risk.score > 12 ? "warning" : "success")).join("") || '<div class="empty-state">No project risks registered.</div>'}</div></section>
        <section class="panel"><div class="panel-header"><h2>Knowledge health</h2><span class="tag">${projectPages.length} governed pages</span></div><div class="panel-body">${progress("Work linked to knowledge", linkage, linkage + "%", linkage >= 90 ? "success" : "warning")}${progress("Pages with named owner", projectPages.length ? 100 : 0, `${projectPages.length} of ${projectPages.length}`, "success")}${progress("Pages with version history", projectPages.length ? versionedPages / projectPages.length * 100 : 0, `${versionedPages} of ${projectPages.length}`, versionedPages === projectPages.length && projectPages.length ? "success" : "warning")}</div></section>
      </div>
    </div>`;
  }

  function renderLeadership() {
    const project = activeProject();
    const isSentinel = project.key === "SMN";
    const approved = isSentinel && DemoState.decisionApproved;
    const projectIssues = issuesForProject();
    const projectRisks = risksForProject();
    const projectMilestones = milestonesForProject();
    const projectDecisions = decisionsForProject();
    const pending = projectDecisions.filter((decision) => decision.status === "Pending");
    const blocked = blockedCount(project.key);
    const atRisk = projectMilestones.filter((milestone) => milestone.status === "At risk");
    const confidence = isSentinel ? currentConfidence() : project.confidence;
    const topRisk = projectRisks.slice().sort((a, b) => b.score - a.score)[0];
    const bottomLine = isSentinel
      ? approved ? `<strong>Alternate certification path approved.</strong> ${primaryReleasedCount()} dependent item${primaryReleasedCount() === 1 ? "" : "s"} resumed, the readiness-review forecast returned to 18 September, and the project remains amber while recovery actions complete.` : `<strong>Leadership action is required by 26 August.</strong> Approving the accredited partner path releases ${primaryEligibleCount()} blocked item${primaryEligibleCount() === 1 ? "" : "s"} and restores the 18 September plan.`
      : project.health === "Green" ? `<strong>${esc(project.name)} remains on plan.</strong> ${projectMilestones.filter((item) => item.status !== "At risk").length} milestones are aligned and current execution is focused on ${esc(activeSprint()?.goal || project.releaseName)}.`
      : `<strong>${esc(project.name)} requires focused intervention.</strong> ${blocked} blocked item${blocked === 1 ? "" : "s"}, ${atRisk.length} at-risk milestone${atRisk.length === 1 ? "" : "s"}, and ${pending.length} pending decision${pending.length === 1 ? "" : "s"} are visible with accountable owners.`;
    return `<div class="page page-enter">
      ${pageHeader("Executive readout", "Leadership status", "A one-page, traceable status generated from the same delivery and knowledge record.", `<a class="button" href="leadership-demo.html">Presenter tour</a><button class="button primary" type="button" data-action="export-brief">Export briefing</button>`)}
      <article class="leadership-brief" id="leadershipBrief">
        <header class="brief-masthead"><div class="eyebrow">${esc(project.name)} · ${esc(project.releaseName || "Next release")}</div><h1>Leadership delivery readout</h1><div class="brief-meta"><span>Status date · 24 August 2026</span><span>Owner · ${esc(project.owner)}</span><span>Classification · Synthetic demonstration data</span></div></header>
        <section class="brief-bluf ${approved || project.health === "Green" ? "approved" : ""}"><span class="bluf-label">Bottom line</span><p>${bottomLine}</p></section>
        <section class="brief-kpis">
          <div class="brief-kpi"><strong>${esc(project.health)}</strong><span>Project health</span></div>
          <div class="brief-kpi"><strong>${project.completion}%</strong><span>Release complete</span></div>
          <div class="brief-kpi"><strong>${confidence}%</strong><span>Confidence</span></div>
          <div class="brief-kpi"><strong>${blocked}</strong><span>Blocked items</span></div>
          <div class="brief-kpi"><strong>${atRisk.length}</strong><span>At-risk milestones</span></div>
        </section>
        <div class="brief-body">
          <div>
            <section class="brief-section"><h2>Outcome and forecast</h2><p>${esc(project.objective)} The current target is ${esc(project.release)} with ${confidence}% delivery confidence.</p></section>
            <section class="brief-section"><h2>Delivery priorities</h2><ul>${projectIssues.filter((issue) => issue.status !== "Done").slice().sort((a, b) => ({ Highest: 4, High: 3, Medium: 2, Low: 1 }[b.priority] || 0) - ({ Highest: 4, High: 3, Medium: 2, Low: 1 }[a.priority] || 0)).slice(0, 3).map((issue) => `<li><button class="section-link" type="button" data-issue="${issue.key}">${esc(issue.key)} · ${esc(issue.summary)}</button> — ${esc(issue.status)}.</li>`).join("")}</ul></section>
            <section class="brief-section"><h2>Next decision or watch item</h2><p>${pending.length ? `${esc(pending[0].id)} requires ${esc(pending[0].approver)} to review ${esc(pending[0].recommendation)} by ${esc(pending[0].due)}.` : topRisk ? `Watch ${esc(topRisk.id)} · ${esc(topRisk.title)} and execute the recorded response: ${esc(topRisk.response)}.` : "No additional executive intervention is currently recorded."}</p></section>
          </div>
          <div>
            <section class="brief-section"><h2>Risks</h2><ul>${projectRisks.map((risk) => `<li><strong>${esc(risk.id)} · ${esc(risk.title)}</strong> — ${risk.score}/25. ${esc(risk.response)}.</li>`).join("") || "<li>No registered project risks.</li>"}</ul></section>
            <section class="brief-section"><h2>Traceable sources</h2><ul>${projectDecisions.slice(0, 2).map((decision) => `<li><button class="section-link" type="button" data-decision="${decision.id}">${esc(decision.id)} · ${esc(decision.title)}</button></li>`).join("")}${projectIssues.slice(0, 2).map((issue) => `<li><button class="section-link" type="button" data-issue="${issue.key}">${esc(issue.key)} · ${esc(issue.summary)}</button></li>`).join("")}${pagesForProject().slice(0, 1).map((page) => `<li><button class="section-link" type="button" data-page="${page.id}">${esc(page.title)} · v${page.version}</button></li>`).join("")}</ul></section>
          </div>
        </div>
      </article>
    </div>`;
  }

  function renderPeople() {
    const teamAllocation = [...new Set(DemoState.people.map((person) => person.team))].map((team) => {
      const members = DemoState.people.filter((person) => person.team === team);
      const names = new Set(members.map((person) => person.name));
      const activeItems = DemoState.issues.filter((issue) => names.has(issue.assignee) && issue.status !== "Done").length;
      const planned = Math.round(members.reduce((sum, person) => sum + person.capacity, 0) / members.length);
      return { team, activeItems, planned };
    }).filter((entry) => entry.activeItems > 0).sort((a, b) => b.activeItems - a.activeItems || b.planned - a.planned);
    return `<div class="page page-enter">
      ${pageHeader("Organization", "People & teams", "See team ownership, work allocation, capacity, roles, and accountable delivery relationships.", can("create-work") ? `<button class="button" type="button" data-action="manage-teams">Manage teams</button><button class="button primary" type="button" data-action="invite-people">Invite person</button>` : "")}
      <div class="team-grid">${DemoState.people.filter((person) => person.name !== "Maya Okafor").map((person) => {
        const workCount = DemoState.issues.filter((issue) => issue.assignee === person.name && issue.status !== "Done").length;
        return `<article class="card person-card" data-person="${esc(person.name)}" tabindex="0">${avatar(person.name)}<div><h2>${esc(person.name)}</h2><p>${esc(person.role)} · ${esc(person.team)}</p></div><div class="capacity"><div class="capacity-bar ${person.capacity >= 88 ? "warning" : ""}"><span style="width:${person.capacity}%"></span></div><div class="capacity-meta"><span>${person.capacity}% planned capacity</span><span>${workCount} open items</span></div></div></article>`;
      }).join("")}</div>
      <div class="section-heading"><div><h2>Team allocation</h2><p>Active portfolio work by accountable team.</p></div></div>
      <section class="panel"><div class="panel-body">
        ${teamAllocation.map((entry) => progress(entry.team, entry.planned, `${entry.activeItems} active item${entry.activeItems === 1 ? "" : "s"}`, entry.planned >= 85 ? "warning" : "")).join("")}
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
      <section class="panel" style="margin-top:14px"><div class="panel-header"><h2>Automation rules</h2><span class="tag">Browser-local simulation</span></div><div>
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
    if (tab === "workflows") return `<h2>Workflows</h2><p>Configure accountable states and transitions for project work.</p><div class="workflow"><span class="workflow-node">To Do</span><span class="workflow-arrow">→</span><span class="workflow-node">Ready</span><span class="workflow-arrow">→</span><span class="workflow-node">In Progress</span><span class="workflow-arrow">→</span><span class="workflow-node">In Review</span><span class="workflow-arrow">→</span><span class="workflow-node done">Done</span><span class="workflow-node blocked">Blocked</span></div><div class="config-grid"><div class="config-card"><h3>Delivery workflow</h3><p>7 statuses · 13 transitions · used by ${DemoState.projects.length} projects</p></div><div class="config-card"><h3>Decision workflow</h3><p>Draft → In review → Pending → Approved or Rejected</p></div><div class="config-card"><h3>Knowledge workflow</h3><p>Draft → Review → Governed · version required on publish</p></div><div class="config-card"><h3>Risk workflow</h3><p>Identified → Assessed → Treating → Accepted or Closed</p></div></div>`;
    if (tab === "issue-types") return `<h2>Work item types</h2><p>Define the hierarchy and fields used across delivery projects.</p><div class="config-grid">${["Epic", "Story", "Task", "Bug", "Decision Task", "Risk Action"].map((type, index) => `<div class="config-card"><h3>${esc(type)}</h3><p>${index < 3 ? "Standard delivery type" : "Governed specialized type"} · ${index + 7} configured fields</p></div>`).join("")}</div>`;
    if (tab === "permissions") return `<h2>Permissions</h2><p>Role-based access model for work, spaces, approvals, service management, administration, and reporting.</p><div class="data-table-wrap"><table class="data-table"><thead><tr><th>Role</th><th>Work</th><th>Knowledge</th><th>Service</th><th>Approve</th><th>Administer</th></tr></thead><tbody><tr><td class="summary-cell">Suite administrator</td><td>Manage</td><td>Manage</td><td>Manage</td><td>Yes</td><td>Yes</td></tr><tr><td class="summary-cell">Project lead</td><td>Manage</td><td>Publish</td><td>Read</td><td>Configured</td><td>No</td></tr><tr><td class="summary-cell">Contributor</td><td>Edit assigned</td><td>Draft</td><td>None</td><td>No</td><td>No</td></tr><tr><td class="summary-cell">Executive approver</td><td>Read</td><td>Read</td><td>Assigned</td><td>Assigned</td><td>No</td></tr><tr><td class="summary-cell">Service agent</td><td>Linked read</td><td>Read</td><td>Manage</td><td>No</td><td>No</td></tr><tr><td class="summary-cell">Requester</td><td>None</td><td>Suggested</td><td>Own requests</td><td>No</td><td>No</td></tr></tbody></table></div>`;
    if (tab === "templates") return `<h2>Templates</h2><p>Standardize common project, work, page, and decision structures.</p><div class="config-grid">${["Delivery project", "Sprint planning", "Decision brief", "Integration review", "Risk assessment", "Leadership readout"].map((name) => `<div class="config-card"><h3>${esc(name)}</h3><p>Governed template · Available to Demonstration Portfolio</p></div>`).join("")}</div>`;
    if (tab === "integrations") return `<h2>Integrations</h2><p>Connect identity, source control, communication, and enterprise reporting in production.</p><div class="config-grid">${[["Microsoft Entra ID", "Identity and group synchronization"], ["GitHub", "Commits, pull requests, and deployments"], ["Microsoft Teams", "Notifications and collaborative actions"], ["Power BI", "Governed reporting data"], ["Email", "Inbound requests and notifications"], ["REST API", "Enterprise interoperability"]].map(([name, detail]) => `<div class="config-card"><h3>${esc(name)}</h3><p>${esc(detail)} · Not connected in concept</p></div>`).join("")}</div>`;
    return `<h2>Audit log</h2><p>Browser-local synthetic events demonstrate the shape of an audit trail. Production immutability would require server-side controls.</p><div class="data-table-wrap"><table class="data-table"><thead><tr><th>Time</th><th>Actor</th><th>Action</th><th>Object</th></tr></thead><tbody>${DemoState.audit.map((event) => `<tr><td>${esc(event.time)}</td><td>${esc(event.actor)}</td><td>${esc(event.action)}</td><td class="summary-cell">${esc(event.object)}</td></tr>`).join("")}</tbody></table></div>`;
  }

  function renderMigration() {
    return `<div class="page page-enter">
      ${pageHeader("Administration", "Migration center", "Map and validate synthetic Jira and Confluence content before any production migration is considered.", `<button class="button" type="button" data-action="download-mapping">Download mapping</button><button class="button primary" type="button" data-action="run-migration" ${DemoState.migrationProgress > 0 && !DemoState.migrationComplete ? "disabled" : ""}>${DemoState.migrationComplete ? "Run dry run again" : "Run synthetic dry run"}</button>`)}
      <div class="migration-hero">
        <section class="card"><div class="eyebrow">Connected sources</div><div style="margin-top:12px">
          <div class="migration-source"><span class="source-logo">JR</span><span><strong>Jira Cloud · Synthetic export</strong><span>${DemoState.projects.length} projects · ${DemoState.issues.length} work items · 4 workflow families</span></span>${statusBadge("Ready")}</div>
          <div class="migration-source"><span class="source-logo">CF</span><span><strong>Confluence Cloud · Synthetic export</strong><span>${DemoState.projects.length} spaces · ${DemoState.pages.length} pages · ${DemoState.pages.length * 3} attachment records</span></span>${statusBadge("Ready")}</div>
        </div></section>
        <section class="card surface-dark"><div class="eyebrow" style="color:var(--sky)">Migration principle</div><h2 style="font-size:16px">Validate structure before moving content.</h2><p style="font-size:10px">A production migration would inventory, map, reconcile identities, test permissions, preserve links, validate history, and support rollback.</p><div class="tag" style="margin-top:12px;background:rgba(255,255,255,.08);border-color:rgba(221,221,221,.2);color:var(--platinum)">No real Atlassian data is connected</div></section>
      </div>
      <section class="panel" style="margin-top:14px"><div class="panel-header"><h2>Mapping preview</h2><span class="tag">12 validated mappings</span></div><div class="panel-body">
        ${[["Jira project", "Delivery project", "Validated"], ["Epic / Story / Task", "Configured work hierarchy", "Validated"], ["Status and workflow", "Workflow and transition", "2 exceptions"], ["Confluence space", "Knowledge space", "Validated"], ["Page hierarchy", "Page tree", "Validated"], ["Issue link / page link", "Governed relationship", "Validated"]].map(([from, to, result]) => `<div class="mapping-row"><strong>${esc(from)}</strong><span>→</span><strong>${esc(to)}</strong><span class="tag">${esc(result)}</span></div>`).join("")}
        ${DemoState.migrationProgress > 0 ? `<div class="migration-progress"><div class="migration-progress-head"><strong>${DemoState.migrationComplete ? "Dry run complete" : "Validating synthetic export…"}</strong><span>${DemoState.migrationProgress}%</span></div><div class="progress-track ${DemoState.migrationComplete ? "success" : ""}"><span style="width:${DemoState.migrationProgress}%"></span></div>${DemoState.migrationComplete ? `<div class="migration-result-grid"><div class="migration-result"><strong>${DemoState.projects.length + DemoState.issues.length + DemoState.pages.length + DemoState.decisions.length}</strong><span>Records mapped</span></div><div class="migration-result"><strong>2</strong><span>Workflow exceptions</span></div><div class="migration-result"><strong>0</strong><span>Broken links</span></div></div>` : ""}</div>` : ""}
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
    filters: renderFilters,
    portal: renderPortal,
    queues: renderQueues,
    slas: renderSlas,
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
    if (kind === "issue" && issueByKey(id)) {
      selectProject(recordProjectKey(issueByKey(id)), "board");
      return canViewRoute("board") ? "board" : can("read-work", issueByKey(id)) ? persona().defaultRoute : "home";
    }
    if (kind === "page" && pageById(id)) {
      selectProject(pageById(id).projectKey || "SMN", "spaces");
      DemoState.activePage = id;
      return "spaces";
    }
    if (kind === "decision" && decisionById(id)) {
      selectProject(decisionById(id).projectKey || "SMN", "decisions");
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

  function renderAccessBoundary(route) {
    return `<div class="page page-enter" data-permission-boundary>${pageHeader("Role simulation", "This view is outside the current persona", `${actor()} is previewing the ${persona().role} experience. Direct links are checked against that simulated role as well.`, `<button class="button primary" type="button" data-action="return-role-home">Return to ${esc(persona().defaultRoute.replace(/-/g, " "))}</button>`)}<div class="callout warning"><strong>Demonstration boundary</strong><p>This interface preview is useful for requirement discovery, but it is not authentication or enforceable security. A production system would require server-side authorization and identity integration.</p></div><section class="card"><div class="eyebrow">Requested route</div><h2 style="font-size:16px">${esc(route)}</h2><p>Switch personas from the profile menu to preview who would normally use this part of the suite.</p></section></div>`;
  }

  function render() {
    const renderer = VIEW_RENDERERS[DemoState.route] || renderHome;
    appContent.innerHTML = canViewRoute(DemoState.route) ? renderer() : renderAccessBoundary(DemoState.route);
    if (persona().key !== "administrator" && canViewRoute(DemoState.route)) appContent.insertAdjacentHTML("afterbegin", `<div class="role-preview-strip" data-role-preview><span><strong>Viewing as ${esc(actor())}</strong> · ${esc(persona().role)} simulation only — not identity or security enforcement.</span><button type="button" data-action="open-role-menu">Change persona</button></div>`);
    document.querySelectorAll(".nav-item").forEach((item) => {
      item.classList.toggle("active", item.dataset.view === DemoState.route);
      item.hidden = !canViewRoute(item.dataset.view);
    });
    document.querySelectorAll(".nav-group").forEach((group) => { group.hidden = !group.querySelector(".nav-item:not([hidden])"); });
    updateChrome();
    appContent.scrollTop = 0;
    initializeViewInteractions();
    const deepLink = hashState();
    if (deepLink.kind === "issue" && issueByKey(deepLink.id) && (canViewRoute("board") || can("read-work", issueByKey(deepLink.id)))) openIssue(deepLink.id);
    persistState();
  }

  function updateChrome() {
    const unread = unreadCount();
    document.getElementById("inboxCount").textContent = unread;
    document.getElementById("inboxCount").hidden = unread === 0;
    document.getElementById("notificationPip").textContent = unread;
    document.getElementById("notificationPip").hidden = unread === 0;
    document.getElementById("decisionCount").textContent = DemoState.decisions.filter((decision) => decision.status === "Pending").length;
    document.getElementById("decisionCount").hidden = DemoState.decisions.every((decision) => decision.status !== "Pending");
    document.getElementById("myWorkCount").textContent = DemoState.issues.filter((issue) => (issue.assignee === actor() || issue.reporter === actor() || (persona().key === "administrator" && issue.assignee === "Lena Ortiz")) && issue.status !== "Done").length;
    const person = getPerson(actor());
    const currentName = document.getElementById("profileCurrentName");
    const currentRole = document.getElementById("profileCurrentRole");
    const currentInitials = document.getElementById("profileCurrentInitials");
    if (currentName) currentName.textContent = actor();
    if (currentRole) currentRole.textContent = `${persona().role} · simulated persona`;
    if (currentInitials) currentInitials.textContent = person.initials;
    document.querySelectorAll("[data-role-option]").forEach((button) => {
      const active = button.dataset.roleOption === actor();
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    const createButton = document.getElementById("createButton");
    if (createButton) createButton.hidden = !can("create-work");
    const projectSwitcher = document.querySelector(".project-switcher");
    if (projectSwitcher) {
      const project = activeProject();
      projectSwitcher.hidden = !canViewRoute("projects");
      projectSwitcher.setAttribute("aria-label", `Current project: ${project.name}. Open project portfolio.`);
      const projectAvatar = document.getElementById("currentProjectAvatar");
      const projectName = document.getElementById("currentProjectName");
      const projectType = document.getElementById("currentProjectType");
      if (projectAvatar) projectAvatar.textContent = project.key.slice(0, 2);
      if (projectName) projectName.textContent = project.name;
      if (projectType) projectType.textContent = project.type || "Delivery project";
    }
    const notificationButton = document.getElementById("notificationButton");
    if (notificationButton) notificationButton.hidden = !canViewRoute("inbox");
    const myWorkMenu = profileMenu.querySelector('[data-view="my-work"]');
    if (myWorkMenu) myWorkMenu.hidden = !canViewRoute("my-work");
    ["export-state", "import-state"].forEach((action) => {
      const control = profileMenu.querySelector(`[data-action="${action}"]`);
      if (control) control.hidden = persona().key !== "administrator";
    });
    const searchWrap = globalSearch.closest(".global-search-wrap");
    if (searchWrap) searchWrap.hidden = persona().key === "customer";
    if (!storageHealthy) {
      const savedAt = document.getElementById("profileSavedAt");
      if (savedAt) savedAt.textContent = "Session only · browser storage unavailable";
    }
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
    window.clearTimeout(drawerCloseTimer);
    if (!modalLayer.hidden) closeModal();
    const issue = issueByKey(key);
    if (!issue) return;
    if (!canViewRoute("board") && !can("read-work", issue)) { toast("Project work is outside this persona", "Switch to a project persona to preview linked delivery work."); return; }
    alignProjectContext(recordProjectKey(issue));
    if (drawerScrim.hidden) previousDrawerFocus = document.activeElement?.isConnected && document.activeElement !== document.body ? document.activeElement : appContent;
    const dependent = DemoState.issues.filter((candidate) => candidate.dependencies.includes(issue.key));
    const linkedPage = pageById(issue.linkedPage);
    detailDrawer.innerHTML = `
      <div class="drawer-header"><span class="type-badge tag">${esc(issue.type)}</span><span class="drawer-key">${esc(issue.key)}</span><button class="icon-button" type="button" data-action="close-drawer" aria-label="Close details">×</button></div>
      <div class="drawer-body">
        <h2 class="drawer-title">${esc(issue.summary)}</h2>
        <div class="drawer-actions">${statusBadge(issue.status)}${priorityBadge(issue.priority)}<button class="button small" type="button" data-action="copy-link" data-key="${issue.key}">Copy link</button></div>
        <div class="drawer-grid">
          <div class="field"><label for="drawerStatus">Status</label><select id="drawerStatus" data-issue-status="${issue.key}" ${can("edit-work", issue) ? "" : "disabled"}>${["To Do", "Ready", "In Progress", "In Review", "Blocked", "Done"].map((status) => `<option ${status === issue.status ? "selected" : ""}>${status}</option>`).join("")}</select></div>
          <div class="field"><label for="drawerAssignee">Assignee</label><select id="drawerAssignee" data-issue-assignee="${issue.key}" ${can("edit-work", issue) ? "" : "disabled"}>${DemoState.people.filter((person) => !["Amina Cole", "Jordan Lee"].includes(person.name)).map((person) => `<option ${person.name === issue.assignee ? "selected" : ""}>${esc(person.name)}</option>`).join("")}</select></div>
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
        <section class="drawer-section"><h3>Checklist</h3><ul class="checklist">${issue.checklist.map((item, index) => `<li><input type="checkbox" data-checklist-key="${issue.key}" data-checklist-index="${index}" ${issue.checked[index] ? "checked" : ""} ${can("edit-work", issue) ? "" : "disabled"}><span>${esc(item)}</span></li>`).join("")}</ul></section>
        <section class="drawer-section"><h3>Linked knowledge & evidence</h3>
          <button class="linked-object" type="button" data-page="${issue.linkedPage}"><span class="linked-icon">${icon("file-text")}</span><span class="linked-copy"><strong>${esc(linkedPage?.title || "Project Hub")}</strong><span>v${linkedPage?.version || 1} · ${esc(linkedPage?.updated || "Today")}</span></span></button>
          <div class="attachment-row"><span class="attachment-icon">${icon("paperclip")}</span><span>Supporting Evidence Summary.pdf</span></div>
        </section>
        <section class="drawer-section"><h3>Comments</h3><ul class="comment-list">${issue.comments.length ? issue.comments.map((comment) => `<li class="comment-item"><div class="comment-head"><strong>${esc(comment.author)}</strong><time>${esc(comment.time)}</time></div><p>${esc(comment.text)}</p></li>`).join("") : '<li class="empty-state" style="padding:16px">No comments yet.</li>'}</ul>
          <form class="comment-form" data-issue-comment="${issue.key}"><textarea name="comment" aria-label="Add an issue comment" placeholder="Add a comment or @mention a teammate"></textarea><button class="button primary" type="submit">Comment</button></form>
        </section>
        <section class="drawer-section"><h3>Activity</h3><ul class="activity-list">${issue.history.map((item, index) => `<li class="activity-item"><span class="activity-icon">${icon("history")}</span><span class="activity-copy">${esc(item)}<time>${index === 0 ? "Today" : "Earlier"}</time></span></li>`).join("")}</ul></section>
      </div>
    `;
    hydrateCloseButtons(detailDrawer);
    drawerScrim.hidden = false;
    detailDrawer.setAttribute("aria-hidden", "false");
    drawerOpenFrame = requestAnimationFrame(() => { detailDrawer.classList.add("open"); drawerOpenFrame = null; });
    document.body.dataset.overlay = "drawer";
    detailDrawer.querySelector("[data-action='close-drawer']").focus();
  }

  function openRequestCreate(typeId = "incident") {
    const selected = DemoState.service.requestTypes.find((type) => type.id === typeId) || DemoState.service.requestTypes[0];
    const defaultProjectKey = projectByKey(DemoState.currentProject)?.key || "SMN";
    openModal(`
      <div class="modal-header"><h2>${esc(selected.name)}</h2><button class="icon-button" type="button" data-action="close-modal" aria-label="Close">×</button></div>
      <form data-request-create>
        <div class="modal-body"><div class="callout" style="margin-top:0"><strong>Portal request</strong><p>Your synthetic request will be saved in this browser and appear immediately in the Unassigned agent queue.</p></div><div class="form-grid">
          <div class="field"><label for="requestType">Request type</label><select id="requestType" name="type">${DemoState.service.requestTypes.map((type) => `<option value="${type.id}" ${type.id === selected.id ? "selected" : ""}>${esc(type.name)}</option>`).join("")}</select></div>
          <div class="field"><label for="requestUrgency">Urgency</label><select id="requestUrgency" name="urgency"><option>Normal</option><option>High</option><option>Critical</option></select></div>
          <div class="field full"><label for="requestProject">Affected project or service</label><select id="requestProject" name="projectKey" required>${DemoState.projects.map((project) => `<option value="${project.key}" ${project.key === defaultProjectKey ? "selected" : ""}>${esc(project.key)} · ${esc(project.name)}</option>`).join("")}</select><small>The selection controls which accountable work and knowledge record receives the request.</small></div>
          <div class="field full"><label for="requestSummary">Summary</label><input id="requestSummary" name="summary" required autofocus placeholder="Briefly describe what you need"></div>
          <div class="field full"><label for="requestDescription">Details</label><textarea id="requestDescription" name="description" required placeholder="Include the outcome, impact, people affected, and any deadline."></textarea></div>
          <div class="field full"><label for="requestAttachment">Attachment (metadata only)</label><input id="requestAttachment" name="attachment" type="file" disabled><small>No files are uploaded or stored in this concept.</small></div>
        </div></div>
        <div class="modal-footer"><button class="button" type="button" data-action="close-modal">Cancel</button><button class="button primary" type="submit">Submit request</button></div>
      </form>
    `, true);
  }

  function openHelpArticle(pageId) {
    const page = pageById(pageId);
    if (!page || page.helpCenter !== true || page.archived) {
      toast("Article unavailable", "Only published customer-help content is available from the service portal.", "danger");
      return;
    }
    openModal(`<div class="modal-header"><h2>${esc(page.title)}</h2><button class="icon-button" type="button" data-action="close-modal" aria-label="Close">${icon("x")}</button></div><div class="modal-body"><div class="eyebrow">Suggested knowledge</div><p class="lead">${esc(page.summary)}</p><div class="published-page-body">${sanitizeRichText(page.bodyHtml || `<p>${esc(page.content)}</p>`)}</div><div class="callout"><strong>Did this solve the request?</strong><p>If not, return to the portal and submit the appropriate request type.</p></div></div><div class="modal-footer"><button class="button primary" type="button" data-action="close-modal">Back to portal</button></div>`, true);
  }

  function openRequest(key) {
    window.clearTimeout(drawerCloseTimer);
    if (drawerScrim.hidden) previousDrawerFocus = document.activeElement;
    const request = requestByKey(key);
    if (!request) return;
    const isCustomer = persona().key === "customer";
    if (isCustomer && request.requester !== actor()) {
      toast("Request unavailable", "Customers can open only requests they submitted.", "danger");
      return;
    }
    const isAgent = can("manage-service");
    const comments = request.comments.filter((comment) => isAgent || comment.visibility === "public");
    const statusOptions = ["Submitted", "Triage", "In progress", "Waiting for customer", "Pending approval", "Resolved", "Closed"];
    const traceabilitySection = isCustomer
      ? `<section class="drawer-section"><h3>Connected record</h3><div class="callout"><strong>Internal work is connected</strong><p>Support agents can trace this request to accountable delivery work and governed knowledge. Internal keys, records, and restricted content remain inside the support workspace.</p></div></section>`
      : `<section class="drawer-section"><h3>Linked work & knowledge</h3><button class="linked-object" type="button" data-issue="${request.linkedIssue}"><span class="linked-icon">${icon("check-square")}</span><span class="linked-copy"><strong>${request.linkedIssue}</strong><span>Accountable delivery work</span></span></button><button class="linked-object" type="button" data-page="${request.linkedPage}"><span class="linked-icon">${icon("file-text")}</span><span class="linked-copy"><strong>${esc(pageById(request.linkedPage)?.title || "Project Hub")}</strong><span>Supporting guidance</span></span></button></section>`;
    detailDrawer.innerHTML = `
      <div class="drawer-header"><span class="type-badge tag">Service request</span><span class="drawer-key">${request.key}</span><button class="icon-button" type="button" data-action="close-drawer" aria-label="Close details">×</button></div>
      <div class="drawer-body">
        <h2 class="drawer-title">${esc(request.summary)}</h2><div class="drawer-actions">${statusBadge(request.status)}${priorityBadge(request.priority)}${request.status === "Pending approval" && can("approve", request) ? `<button class="button small" type="button" data-action="approve-request" data-request-key="${request.key}">Approve request</button>` : ""}${isAgent ? `<button class="button small" type="button" data-action="advance-sla-clock" data-minutes="60" data-request-key="${request.key}">Advance clock 1h</button>` : ""}</div>
        <div class="sla-grid" style="grid-template-columns:repeat(2,minmax(0,1fr));margin:16px 0">${["firstResponse", "resolution"].map((kind) => { const state = slaState(request, kind); return `<article class="sla-card"><div class="sla-card-head"><h3>${kind === "firstResponse" ? "First response" : "Resolution"}</h3><span class="sla-badge ${state === "approaching" ? "at-risk" : state}" data-sla-kind="${kind === "firstResponse" ? "first-response" : "resolution"}" data-sla-state="${state}" data-minutes-remaining="${Math.round((request[kind].goal - request[kind].elapsed) * 60)}">${esc(state)}</span></div><div class="sla-clock">${esc(slaLabel(request, kind))}</div></article>`; }).join("")}</div>
        <div class="drawer-grid">
          <div class="field"><span class="field-label">Requester</span><div>${personCell(request.requester)}</div></div><div class="field"><span class="field-label">Organization</span><div>${esc(request.organization)}</div></div>
          <div class="field"><label for="requestStatus">Status</label><select id="requestStatus" data-request-status="${request.key}" ${isAgent ? "" : "disabled"}>${statusOptions.map((status) => `<option ${request.status === status ? "selected" : ""}>${status}</option>`).join("")}</select></div>
          <div class="field"><label for="requestAssignee">Assignee</label><select id="requestAssignee" data-request-assignee="${request.key}" ${isAgent ? "" : "disabled"}><option ${request.assignee === "Unassigned" ? "selected" : ""}>Unassigned</option><option ${request.assignee === "Jordan Lee" ? "selected" : ""}>Jordan Lee</option></select></div>
          <div class="field"><span class="field-label">Request type</span><div>${esc(DemoState.service.requestTypes.find((type) => type.id === request.type)?.name || request.type)}</div></div><div class="field"><span class="field-label">Created</span><div>${esc(request.created)}</div></div>
        </div>
        <section class="drawer-section"><h3>Description</h3><p>${esc(request.description)}</p></section>
        ${traceabilitySection}
        <section class="drawer-section"><h3>Activity & conversation</h3><ul class="comment-list">${comments.map((comment) => `<li class="comment-item" data-comment-visibility="${comment.visibility}"><div class="comment-head"><strong>${esc(comment.author)}</strong><time>${esc(comment.time)}</time></div><span class="comment-visibility ${comment.visibility}">${comment.visibility === "internal" ? "Internal note" : "Public reply"}</span><p>${esc(comment.text)}</p></li>`).join("")}</ul>
          <form class="comment-form" data-request-comment="${request.key}" data-request-comment-form>${isAgent ? '<select name="visibility" aria-label="Comment visibility"><option value="public">Public reply</option><option value="internal">Internal note</option></select>' : '<input type="hidden" name="visibility" value="public">'}<textarea name="comment" required aria-label="Add a request reply" placeholder="${isAgent ? "Reply to the customer or add an internal note" : "Add a reply"}"></textarea><button class="button primary" type="submit">${isAgent ? "Add update" : "Reply"}</button></form>
        </section>
      </div>`;
    hydrateCloseButtons(detailDrawer);
    drawerScrim.hidden = false;
    detailDrawer.setAttribute("aria-hidden", "false");
    drawerOpenFrame = requestAnimationFrame(() => { detailDrawer.classList.add("open"); drawerOpenFrame = null; });
    document.body.dataset.overlay = "drawer";
    detailDrawer.querySelector("[data-action='close-drawer']").focus();
  }

  function closeDrawer() {
    window.clearTimeout(drawerCloseTimer);
    if (drawerOpenFrame !== null) { cancelAnimationFrame(drawerOpenFrame); drawerOpenFrame = null; }
    if (!detailDrawer.classList.contains("open") && drawerScrim.hidden) {
      detailDrawer.innerHTML = "";
      detailDrawer.setAttribute("aria-hidden", "true");
      return;
    }
    detailDrawer.classList.remove("open");
    detailDrawer.setAttribute("aria-hidden", "true");
    drawerCloseTimer = window.setTimeout(() => {
      drawerScrim.hidden = true;
      detailDrawer.innerHTML = "";
      drawerCloseTimer = null;
    }, 190);
    delete document.body.dataset.overlay;
    if (hashState().kind === "issue") history.replaceState(null, "", "#" + DemoState.route);
    if (previousDrawerFocus?.isConnected) previousDrawerFocus.focus();
    previousDrawerFocus = null;
  }

  function openModal(content, large = false) {
    if (modalLayer.hidden) previousModalFocus = document.activeElement;
    modalLayer.innerHTML = `<section class="modal ${large ? "large" : ""}" role="dialog" aria-modal="true">${content}</section>`;
    hydrateCloseButtons(modalLayer);
    modalLayer.hidden = false;
    document.body.dataset.overlay = "modal";
    const focusTarget = modalLayer.querySelector("[autofocus], input, button, select, textarea, [tabindex]");
    if (focusTarget) focusTarget.focus();
  }

  function closeModal() {
    modalLayer.hidden = true;
    modalLayer.innerHTML = "";
    delete document.body.dataset.overlay;
    if (previousModalFocus?.isConnected) previousModalFocus.focus();
    previousModalFocus = null;
  }

  function openProjectCreate() {
    if (!requireCapability("create-work", null, "Only project leads and administrators can create a project in this preview.")) return;
    openModal(`
      <div class="modal-header"><h2>Create project</h2><button class="icon-button" type="button" data-action="close-modal" aria-label="Close">×</button></div>
      <form data-create-form="project">
        <div class="modal-body"><div class="callout" style="margin-top:0"><strong>Ready-to-plan project</strong><p>The browser-local project will include an overview, governed space, starter epic, active sprint, future sprint, and release target.</p></div><div class="form-grid">
          <div class="field"><label for="newProjectKey">Project key</label><input id="newProjectKey" name="key" required autofocus maxlength="10" pattern="[A-Za-z][A-Za-z0-9\\-]{1,9}" placeholder="e.g., ORB"></div>
          <div class="field"><label for="newProjectOwner">Project lead</label><select id="newProjectOwner" name="owner">${DemoState.people.filter((person) => !["Amina Cole", "Jordan Lee"].includes(person.name)).map((person) => `<option>${esc(person.name)}</option>`).join("")}</select></div>
          <div class="field full"><label for="newProjectName">Project name</label><input id="newProjectName" name="name" required maxlength="80" placeholder="e.g., Orbital Relay Modernization"></div>
          <div class="field"><label for="newProjectType">Project type</label><select id="newProjectType" name="type"><option>Product delivery</option><option>Infrastructure</option><option>Cybersecurity</option><option>Platform enablement</option><option>Business transformation</option></select></div>
          <div class="field"><label for="newProjectReleaseName">Release name</label><input id="newProjectReleaseName" name="releaseName" required maxlength="40" value="Release 1"></div>
          <div class="field"><label for="newProjectRelease">Target release</label><input id="newProjectRelease" name="release" required maxlength="40" placeholder="e.g., 15 Dec 2026"></div>
          <div class="field"><label for="newProjectHealth">Initial health</label><select id="newProjectHealth" name="health"><option>Green</option><option selected>Amber</option><option>Red</option></select></div>
          <div class="field full"><label for="newProjectDescription">Description</label><textarea id="newProjectDescription" name="description" required maxlength="500" placeholder="Describe the outcome, scope, and operating purpose."></textarea></div>
        </div></div>
        <div class="modal-footer"><button class="button" type="button" data-action="close-modal">Cancel</button><button class="button primary" type="submit">Create project</button></div>
      </form>
    `, true);
  }

  function openCreateModal(type = "work") {
    if (type === "work" && !requireCapability("create-work", null, "Only project leads and administrators can create new delivery work in this preview.")) return;
    if (type === "page" && !requireCapability("edit-knowledge", null, "This persona cannot create knowledge pages.")) return;
    if (type === "decision" && !requireCapability("create-work", null, "Only project leads and administrators can open new governed decisions.")) return;
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
    if (type === "page") return `<form id="createEntityForm" data-create-form="page"><div class="form-grid"><div class="field full"><label for="newPageTitle">Page title</label><input id="newPageTitle" name="title" required autofocus placeholder="e.g., Release readiness checklist"></div><div class="field"><label for="newPageParent">Parent page</label><select id="newPageParent" name="parent"><option value="">No parent</option>${pagesForProject().map((page) => `<option value="${page.id}">${esc(page.title)}</option>`).join("")}</select></div><div class="field"><label for="newPageOwner">Owner</label><select id="newPageOwner" name="owner">${DemoState.people.map((person) => `<option>${esc(person.name)}</option>`).join("")}</select></div><div class="field full"><label for="newPageSummary">Purpose</label><textarea id="newPageSummary" name="summary" required placeholder="What should this page help the team understand or do?"></textarea></div></div><div class="modal-footer" style="margin:20px -20px -20px"><button class="button" type="button" data-action="close-modal">Cancel</button><button class="button primary" type="submit">Create page</button></div></form>`;
    if (type === "decision") return `<form id="createEntityForm" data-create-form="decision"><div class="form-grid"><div class="field full"><label for="newDecisionTitle">Decision title</label><input id="newDecisionTitle" name="title" required autofocus placeholder="What needs to be decided?"></div><div class="field"><label for="newDecisionOwner">Owner</label><select id="newDecisionOwner" name="owner">${DemoState.people.map((person) => `<option>${esc(person.name)}</option>`).join("")}</select></div><div class="field"><label for="newDecisionApprover">Approver</label><select id="newDecisionApprover" name="approver">${DemoState.people.map((person) => `<option>${esc(person.name)}</option>`).join("")}</select></div><div class="field full"><label for="newDecisionRecommendation">Recommendation</label><textarea id="newDecisionRecommendation" name="recommendation" required placeholder="State the recommended option and why."></textarea></div></div><div class="modal-footer" style="margin:20px -20px -20px"><button class="button" type="button" data-action="close-modal">Cancel</button><button class="button primary" type="submit">Create decision</button></div></form>`;
    return `<form id="createEntityForm" data-create-form="work"><div class="form-grid"><div class="field"><label for="newIssueType">Type</label><select id="newIssueType" name="type">${["Story", "Task", "Bug", "Decision Task", "Risk Action", "Epic"].map((value) => `<option>${value}</option>`).join("")}</select></div><div class="field"><label for="newIssuePriority">Priority</label><select id="newIssuePriority" name="priority">${["Medium", "High", "Highest", "Low"].map((value) => `<option>${value}</option>`).join("")}</select></div><div class="field full"><label for="newIssueSummary">Summary</label><input id="newIssueSummary" name="summary" required autofocus placeholder="What needs to be done?"></div><div class="field"><label for="newIssueAssignee">Assignee</label><select id="newIssueAssignee" name="assignee">${DemoState.people.filter((person) => !["Amina Cole", "Jordan Lee"].includes(person.name)).map((person) => `<option>${esc(person.name)}</option>`).join("")}</select></div><div class="field"><label for="newIssueSprint">Sprint</label><select id="newIssueSprint" name="sprint">${sprintsForProject().filter((sprint) => sprint.status !== "completed").map((sprint) => `<option>${esc(sprint.name)}</option>`).join("")}<option>Backlog</option></select></div><div class="field full"><label for="newIssueDescription">Description</label><textarea id="newIssueDescription" name="description" placeholder="Add context, outcome, constraints, and acceptance information."></textarea></div></div><div class="modal-footer" style="margin:20px -20px -20px"><button class="button" type="button" data-action="close-modal">Cancel</button><button class="button primary" type="submit">Create work item</button></div></form>`;
  }

  function openEditPage(pageId) {
    const page = pageById(pageId);
    if (!page) return;
    if (!requireCapability("edit-knowledge", page, "This persona can read the governed page but cannot edit it.")) return;
    const draft = DemoState.pageDrafts[page.id];
    const initialHtml = sanitizeRichText(draft?.bodyHtml || page.bodyHtml || `<p>${esc(page.content)}</p><h2>Current operating guidance</h2><p>Keep knowledge connected to accountable work, evidence, and decisions.</p>`);
    openModal(`
      <div class="modal-header"><h2>Edit page</h2><button class="icon-button" type="button" data-action="close-modal" aria-label="Close">×</button></div>
      <form data-edit-page="${page.id}">
        <div class="modal-body">
          ${draft ? `<div class="callout" style="margin-top:0"><strong>Draft resumed</strong><p>These browser-local changes have not altered governed version ${page.version}.</p></div>` : ""}
          <div class="field"><label for="editPageTitle">Title</label><input id="editPageTitle" name="title" value="${esc(draft?.title || page.title)}" required data-page-draft-title></div>
          <div class="field" style="margin-top:14px"><span class="field-label">Content</span><div class="editor-toolbar" aria-label="Formatting toolbar"><button type="button" data-command="bold" aria-label="Bold">B</button><button type="button" data-command="italic" aria-label="Italic"><em>I</em></button><button type="button" data-command="insertUnorderedList" aria-label="Bulleted list">• List</button><button type="button" data-command="formatBlock" data-value="h2" aria-label="Heading level 2">H2</button><button type="button" data-command="createLink" aria-label="Add link">Link</button></div><div id="pageEditor" class="page-editor" contenteditable="true" role="textbox" aria-multiline="true" data-page-draft-editor="${page.id}">${initialHtml}</div><span class="local-save-status" data-page-draft-state>${draft ? "Draft restored" : "Autosave ready"}</span></div>
          <div class="field" style="margin-top:14px"><label for="versionNote">Version note</label><input id="versionNote" name="note" placeholder="Describe what changed" value="${esc(draft?.note || "Content updated")}" ${can("publish-knowledge") ? "required" : ""}></div>
        </div>
        <div class="modal-footer"><button class="button" type="button" data-action="discard-page-draft" data-page-id="${page.id}" ${draft ? "" : "disabled"}>Discard draft</button><button class="button" type="button" data-action="save-page-draft" data-page-id="${page.id}">Save draft</button>${can("publish-knowledge") ? '<button class="button primary" type="submit">Publish new version</button>' : '<button class="button primary" type="button" disabled title="Contributors can draft but cannot publish">Publish requires page owner</button>'}</div>
      </form>
    `, true);
  }

  function savePageDraft(pageId, silent = false) {
    const page = pageById(pageId);
    const editor = document.getElementById("pageEditor");
    const title = document.getElementById("editPageTitle");
    if (!page || !editor || !title) return;
    DemoState.pageDrafts[pageId] = { title: title.value.trim() || page.title, bodyHtml: sanitizeRichText(editor.innerHTML), note: document.getElementById("versionNote")?.value || "Content updated", updated: "Just now", updatedBy: actor() };
    persistState();
    const state = document.querySelector("[data-page-draft-state]");
    if (state) state.textContent = "Draft saved locally · just now";
    if (!silent) toast("Draft saved", "The governed page remains unchanged until an authorized publisher publishes it.", "success");
  }

  function showVersionHistory(pageId) {
    const page = pageById(pageId || DemoState.activePage);
    if (!page) return;
    const versions = DemoState.pageVersions[page.id] || [];
    openModal(`<div class="modal-header"><h2>Version history · ${esc(page.title)}</h2><button class="icon-button" type="button" data-action="close-modal" aria-label="Close">×</button></div><div class="modal-body"><div class="callout" style="margin-top:0"><strong>Stored browser-local snapshots</strong><p>Select two historical versions to compare, or compare one with the current governed page. Production retention and immutability would require server-side controls.</p></div><div class="version-list">${versions.map((version) => `<div class="version-item" data-version-row="${version.version}"><div class="version-head"><label><input type="checkbox" data-compare-version="${version.version}" aria-label="Select version ${version.version} for comparison"> <strong>v${version.version} · ${esc(version.author)}</strong></label><time>${esc(version.time)}</time></div><p>${esc(version.note)}</p><div style="display:flex;gap:8px"><button class="button small" type="button" data-action="compare-version" data-page-id="${page.id}" data-version="${version.version}">Compare with current</button>${can("edit-knowledge") ? `<button class="button small" type="button" data-action="restore-version" data-page-id="${page.id}" data-version="${version.version}">Restore as draft</button>` : ""}</div></div>`).join("")}</div></div><div class="modal-footer"><button class="button" type="button" data-action="close-modal">Close</button><button class="button primary" type="button" data-action="compare-versions" data-page-id="${page.id}">Compare selected</button></div>`, true);
  }

  function comparePageVersion(pageId, versionNumber) {
    const page = pageById(pageId);
    const version = (DemoState.pageVersions[pageId] || []).find((item) => String(item.version) === String(versionNumber));
    if (!page || !version) return;
    const currentHtml = sanitizeRichText(page.bodyHtml || `<p>${esc(page.content)}</p>`);
    const oldHtml = sanitizeRichText(version.bodyHtml || `<p>${esc(version.content || page.content)}</p>`);
    openModal(`<div class="modal-header"><h2>Compare page versions</h2><button class="icon-button" type="button" data-action="close-modal" aria-label="Close">×</button></div><div class="modal-body"><div class="version-compare" data-version-compare><div class="version-compare-toolbar"><span class="tag">v${version.version} · ${esc(version.note)}</span><span>compared with</span><span class="tag">v${page.version} · Current</span></div><div class="version-compare-grid"><section class="version-column"><div class="version-column-head"><strong>v${version.version}</strong><span>${esc(version.author)}</span></div><div class="version-diff"><div class="diff-line" data-diff="removed"><span class="diff-gutter">−</span><div>${oldHtml}</div></div></div></section><section class="version-column"><div class="version-column-head"><strong>v${page.version}</strong><span>Current governed version</span></div><div class="version-diff"><div class="diff-line" data-diff="added"><span class="diff-gutter">+</span><div>${currentHtml}</div></div></div></section></div></div></div><div class="modal-footer">${can("edit-knowledge") ? `<button class="button" type="button" data-action="restore-version" data-page-id="${page.id}" data-version="${version.version}">Restore v${version.version} as draft</button>` : ""}<button class="button primary" type="button" data-action="page-history" data-page-id="${page.id}">Back to history</button></div>`, true);
  }

  function compareSelectedVersions(pageId, versionNumbers) {
    const versions = DemoState.pageVersions[pageId] || [];
    const selected = versionNumbers.map((number) => versions.find((item) => String(item.version) === String(number))).filter(Boolean).sort((a, b) => Number(a.version) - Number(b.version));
    if (selected.length !== 2) { toast("Select two versions", "Choose exactly two historical snapshots to compare."); return; }
    const [older, newer] = selected;
    const olderHtml = sanitizeRichText(older.bodyHtml || `<p>${esc(older.content || "")}</p>`);
    const newerHtml = sanitizeRichText(newer.bodyHtml || `<p>${esc(newer.content || "")}</p>`);
    openModal(`<div class="modal-header"><h2>Compare v${older.version} with v${newer.version}</h2><button class="icon-button" type="button" data-action="close-modal" aria-label="Close">×</button></div><div class="modal-body"><div class="version-compare" data-version-compare><div class="version-compare-toolbar"><span class="tag">v${older.version} · ${esc(older.note)}</span><span>compared with</span><span class="tag">v${newer.version} · ${esc(newer.note)}</span></div><div class="version-compare-grid"><section class="version-column"><div class="version-column-head"><strong>v${older.version}</strong><span>${esc(older.author)}</span></div><div class="version-diff"><div class="diff-line" data-diff="removed"><span class="diff-gutter">−</span><div>${olderHtml}</div></div></div></section><section class="version-column"><div class="version-column-head"><strong>v${newer.version}</strong><span>${esc(newer.author)}</span></div><div class="version-diff"><div class="diff-line" data-diff="added"><span class="diff-gutter">+</span><div>${newerHtml}</div></div></div></section></div></div></div><div class="modal-footer"><button class="button" type="button" data-action="page-history" data-page-id="${pageId}">Back to history</button></div>`, true);
  }

  function restorePageVersion(pageId, versionNumber) {
    const page = pageById(pageId);
    const version = (DemoState.pageVersions[pageId] || []).find((item) => String(item.version) === String(versionNumber));
    if (!page || !version || !requireCapability("edit-knowledge", page)) return;
    DemoState.pageDrafts[pageId] = { title: version.title || page.title, bodyHtml: sanitizeRichText(version.bodyHtml || `<p>${esc(version.content || page.content)}</p>`), note: `Restored from v${version.version}`, updated: "Just now", updatedBy: actor() };
    persistState();
    openEditPage(pageId);
    toast(`Version ${version.version} restored as a draft`, "History was not rewritten. Publishing will create the next version.", "success");
  }

  function showArchivedPages() {
    const archived = DemoState.pages.filter((page) => page.archived);
    openModal(`<div class="modal-header"><h2>Archived pages</h2><button class="icon-button" type="button" data-action="close-modal" aria-label="Close">×</button></div><div class="modal-body">${archived.length ? archived.map((page) => `<div class="mapping-row" data-page-status="archived"><strong>${esc(page.title)}</strong><span>${esc(page.archiveReason || "Archived from the space")}</span><span>${esc(page.archivedBy || "Unknown")}</span>${can("archive-knowledge", page) ? `<button class="button small" type="button" data-action="restore-page" data-page-id="${page.id}">Restore</button>` : '<span class="tag">Read only</span>'}</div>`).join("") : '<div class="empty-state"><strong>No archived pages</strong>Archived knowledge remains visible here for administrators and page owners.</div>'}</div><div class="modal-footer"><button class="button" type="button" data-action="close-modal">Close</button></div>`);
  }

  function openSprintSettings() {
    const sprint = activeSprint();
    const stats = sprintStats(sprint);
    if (!requireCapability("manage-sprint", sprint, "Only project leads and administrators can change sprint settings.")) return;
    const future = sprintsForProject(sprint.projectKey).find((item) => item.status === "future");
    openModal(`<div class="modal-header"><h2>Sprint settings</h2><button class="icon-button" type="button" data-action="close-modal" aria-label="Close">×</button></div><form data-sprint-form data-sprint-id="${sprint.id}"><div class="modal-body"><div class="sprint-config-panel"><div class="sprint-config-head"><div><h2>${esc(sprint.name)} · ${esc(sprint.goal)}</h2><p>${stats.issues.length} work items · ${stats.committed} committed points · ${stats.completed} complete</p></div><span class="tag">${esc(sprint.status)}</span></div><div class="sprint-config-grid"><div class="field"><label for="sprintName">Sprint name</label><input id="sprintName" name="name" value="${esc(sprint.name)}" required></div><div class="field"><label for="sprintCapacity">Capacity</label><input id="sprintCapacity" name="capacity" type="number" min="1" max="200" value="${sprint.capacity}" required></div><div class="field full"><label for="sprintGoal">Goal</label><input id="sprintGoal" name="goal" value="${esc(sprint.goal)}" required></div><div class="sprint-date-grid full"><div class="field"><label for="sprintStart">Start</label><input id="sprintStart" name="start" value="${esc(sprint.start)}" required></div><div class="field"><label for="sprintEnd">End</label><input id="sprintEnd" name="end" value="${esc(sprint.end)}" required></div></div><div class="capacity-summary full"><div class="capacity-stat"><strong>${stats.committed}</strong><span>Committed</span></div><div class="capacity-stat"><strong>${stats.completed}</strong><span>Completed</span></div><div class="capacity-stat"><strong>${Math.max(0, sprint.capacity - stats.committed)}</strong><span>Capacity left</span></div></div></div></div><div class="callout"><strong>Lifecycle behavior</strong><p>Completing this sprint locks completed scope, moves unfinished work to ${esc(future?.name || "the next sprint")}, promotes that sprint to active, and creates a new planning sprint.</p></div></div><div class="modal-footer">${sprint.status === "active" ? `<button class="button" type="button" data-action="complete-sprint" data-sprint-id="${sprint.id}">Complete sprint</button>` : ""}<button class="button" type="button" data-action="close-modal">Cancel</button><button class="button primary" type="submit">Save settings</button></div></form>`, true);
  }

  function completeSprint(sprintId) {
    const sprint = DemoState.sprints.find((item) => item.id === sprintId);
    const future = DemoState.sprints.find((item) => item.projectKey === sprint?.projectKey && item.status === "future");
    if (!sprint || !future || !requireCapability("manage-sprint", sprint)) return;
    const stats = sprintStats(sprint);
    stats.issues.filter((issue) => issue.status !== "Done").forEach((issue) => { issue.sprint = future.name; });
    sprint.status = "completed";
    sprint.committed = stats.committed;
    sprint.completed = stats.completed;
    future.status = "active";
    const projectSprints = sprintsForProject(sprint.projectKey);
    const nextNumber = Math.max(0, ...projectSprints.map((item) => Number((item.name.match(/(\d+)$/) || [])[1]) || 0)) + 1;
    DemoState.sprints.push({ projectKey: sprint.projectKey, id: `${slug(sprint.projectKey)}-s${nextNumber}-${Date.now()}`, name: `${sprint.projectKey} Sprint ${nextNumber}`, goal: "Next release increment", start: "Next planning window", end: "To be scheduled", capacity: future.capacity, committed: 0, completed: 0, status: "future" });
    recordAudit("Completed sprint and carried unfinished work to " + future.name, sprint.name);
    closeModal();
    render();
    toast(`${sprint.name} completed`, `${stats.completed} points completed; ${stats.committed - stats.completed} points moved to ${future.name}.`, "success");
  }

  function openApprovalModal() {
    if (!requireCapability("approve", decisionById("DEC-014"), "Switch to Dana Kessler or the suite administrator to preview the governed approval.")) return;
    const decisionPageVersion = nextPageVersion("alternate-path");
    openModal(`
      <div class="modal-header"><h2>Approve alternate certification path?</h2><button class="icon-button" type="button" data-action="close-modal" aria-label="Close">×</button></div>
      <div class="modal-body"><div class="callout warning" style="margin-top:0"><strong>Option B · Accredited partner laboratory</strong><p>This controlled simulation will apply one coordinated cascade: approve DEC-014, complete SMN-191, move ${primaryEligibleCount()} currently blocked dependent item${primaryEligibleCount() === 1 ? "" : "s"} to Ready, restore the review forecast, reduce RISK-07, publish page v${decisionPageVersion}, notify owners, and refresh the leadership brief.</p></div><p style="color:var(--muted);font-size:9px">Synthetic workflow only. The result is stored locally in this browser until the demo is reset.</p></div>
      <div class="modal-footer"><button class="button" type="button" data-action="close-modal">Cancel</button><button class="button primary" type="button" data-action="approve-decision">Approve Option B</button></div>
    `);
  }

  function approveDecision() {
    if (DemoState.decisionApproved) return;
    if (!requireCapability("approve", decisionById("DEC-014"))) return;
    DemoState.decisionApproved = true;
    const decision = decisionById("DEC-014");
    decision.status = "Approved";
    const task = issueByKey("SMN-191");
    task.status = "Done";
    task.checked[2] = true;
    task.history.unshift(`Decision approved by ${actor()}`);
    const releasedKeys = [];
    PRIMARY_DEPENDENT_KEYS.forEach((key) => {
      const issue = issueByKey(key);
      if (!issue) return;
      const released = ["Blocked", "To Do"].includes(issue.status);
      if (released) {
        releasedKeys.push(key);
        issue.status = "Ready";
        issue.history.unshift("Automatically moved to Ready after DEC-014 approval");
      }
      DemoState.notifications.unshift({ id: Date.now() + Math.random(), unread: true, kind: "issue", title: released ? key + " is ready to resume" : key + " dependency was cleared", detail: released ? "DEC-014 cleared the certification-path dependency for " + issue.assignee + "." : "DEC-014 was recorded without changing the current " + issue.status + " status.", time: "Just now", target: key });
    });
    const releasedCount = releasedKeys.length;
    decision.releasedCount = releasedCount;
    decision.releasedKeys = releasedKeys;
    const risk = riskById("RISK-07");
    risk.score = 6;
    risk.level = "Moderate";
    risk.response = "Mitigation active; monitor evidence review";
    DemoState.milestones.find((item) => item.projectKey === "SMN" && item.name === "Integration Readiness Review").forecast = "18 Sep";
    DemoState.milestones.find((item) => item.projectKey === "SMN" && item.name === "Alternate path decision").status = "On track";
    DemoState.milestones.find((item) => item.projectKey === "SMN" && item.name === "Evidence review").forecast = "04 Sep";
    const page = pageById("alternate-path");
    const decisionPageVersion = nextPageVersion("alternate-path");
    page.version = decisionPageVersion;
    page.updated = "Just now";
    DemoState.pageVersions["alternate-path"].unshift({ version: decisionPageVersion, author: actor(), time: "Just now", note: "Decision recorded · Option B approved", title: page.title, content: page.content, bodyHtml: page.bodyHtml || `<p>${esc(page.content)}</p>` });
    const events = [
      [actor(), "Approved decision", "DEC-014"],
      ["Automation", `Released ${releasedCount} dependent work item${releasedCount === 1 ? "" : "s"}`, "SMN-191"],
      ["Automation", "Restored milestone forecast", "Integration Readiness Review"],
      ["Automation", "Reduced risk score to 6/25", "RISK-07"],
      ["Automation", "Published page version " + decisionPageVersion, "Alternate Path Decision Brief"],
      ["Automation", "Refreshed leadership briefing", "Sentinel Mesh Node"]
    ];
    events.reverse().forEach(([actor, action, object]) => DemoState.audit.unshift({ time: "Just now", actor, action, object }));
    closeModal();
    render();
    toast("Alternate path approved", `${releasedCount} work item${releasedCount === 1 ? "" : "s"} moved to Ready and the 18 September forecast was restored.`, "success");
    announce(`Decision approved. ${releasedCount} dependent item${releasedCount === 1 ? " is" : "s are"} ready, risk is reduced, and the schedule forecast is restored.`);
  }

  function approveGenericDecision(decisionId) {
    const decision = decisionById(decisionId);
    if (!decision || decision.id === "DEC-014" || decision.status !== "Pending") return;
    if (!requireCapability("approve", decision, "Switch to the named approver or suite administrator to record this decision.")) return;
    decision.status = "Approved";
    const linkedIssue = issueByKey(decision.linkedIssue);
    const downstream = linkedIssue ? issuesForProject(decision.projectKey).filter((issue) => issue.dependencies.includes(linkedIssue.key)) : [];
    if (linkedIssue && linkedIssue.status === "In Review") {
      linkedIssue.status = "Done";
      linkedIssue.checked = linkedIssue.checked.map(() => true);
      linkedIssue.history.unshift(`Decision ${decision.id} approved by ${actor()}`);
    }
    downstream.forEach((issue) => {
      if (["To Do", "Blocked"].includes(issue.status)) issue.status = "Ready";
      issue.history.unshift(`Dependency released by ${decision.id}`);
    });
    const impactedIssueKeys = new Set([decision.linkedIssue, ...downstream.map((issue) => issue.key)]);
    risksForProject(decision.projectKey).filter((risk) => impactedIssueKeys.has(risk.issue)).forEach((risk) => {
      risk.score = Math.max(4, risk.score - 5);
      risk.level = risk.score > 12 ? "High" : risk.score > 7 ? "Moderate" : "Low";
    });
    milestonesForProject(decision.projectKey).filter((milestone) => impactedIssueKeys.has(milestone.issue) && milestone.status === "At risk").forEach((milestone) => {
      milestone.status = "On track";
      milestone.forecast = milestone.target;
    });
    const page = pageById(decision.page);
    if (page) {
      page.version = nextPageVersion(page.id);
      page.updated = "Just now";
      DemoState.pageVersions[page.id] = DemoState.pageVersions[page.id] || [];
      DemoState.pageVersions[page.id].unshift({ version: page.version, author: actor(), time: "Just now", note: `${decision.id} approval recorded`, title: page.title, content: page.content, bodyHtml: page.bodyHtml || `<h2>Decision recorded</h2><p>${esc(decision.recommendation)} was approved.</p>` });
    }
    recordAudit("Approved governed decision", decision.id);
    DemoState.notifications.unshift({ id: `decision-${Date.now()}`, unread: true, kind: "decision", title: `${decision.id} approved`, detail: `${decision.recommendation} is now the governed direction; ${downstream.length} downstream item${downstream.length === 1 ? "" : "s"} refreshed.`, time: "Just now", target: decision.id });
    render();
    toast(`${decision.id} approved`, `${downstream.length} downstream item${downstream.length === 1 ? "" : "s"}, linked risk, milestones, knowledge history, audit, and notifications were refreshed.`, "success");
  }

  function updateIssueStatus(key, status) {
    const issue = issueByKey(key);
    if (!issue || issue.status === status) return;
    if (!requireCapability("edit-work", issue, "This persona can update only permitted work items.")) return;
    if (DemoState.decisionApproved && PRIMARY_DEPENDENT_KEYS.includes(key) && ["To Do", "Blocked"].includes(status)) {
      toast("Certification dependency is cleared", "DEC-014 permanently released this dependency in the controlled storyline. Record a new risk or work item for any later blocker.", "danger");
      render();
      if (!drawerScrim.hidden) openIssue(key);
      return;
    }
    const previous = issue.status;
    issue.status = status;
    issue.history.unshift(`Status changed from ${previous} to ${status} by ${actor()}`);
    recordAudit(`Changed status from ${previous} to ${status}`, key);
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
        recordAudit("Completed synthetic migration dry run", "Jira and Confluence mapping");
        const mapped = DemoState.projects.length + DemoState.issues.length + DemoState.pages.length + DemoState.decisions.length;
        toast("Synthetic dry run complete", `${mapped} records mapped; two workflow exceptions require review.`, "success");
      }
      render();
    }, 420);
  }

  function downloadText(filename, body, type = "text/plain;charset=utf-8") {
    const blob = new Blob([body], { type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  function csvCell(value) {
    return `"${String(value ?? "").replace(/"/g, '""')}"`;
  }

  function exportTimelineCsv() {
    const project = activeProject();
    const rows = [["Record type", "Key or milestone", "Summary", "Owner", "Status", "Target or due"]];
    issuesForProject().forEach((issue) => rows.push(["Work item", issue.key, issue.summary, issue.assignee, issue.status, issue.due]));
    milestonesForProject().forEach((item) => rows.push(["Milestone", item.issue, item.name, project.owner, item.status, `${item.target} target / ${item.forecast} forecast`]));
    downloadText(`${project.key.toLowerCase()}-timeline.csv`, rows.map((row) => row.map(csvCell).join(",")).join("\r\n"), "text/csv;charset=utf-8");
    toast("Timeline exported", `${rows.length - 1} project schedule records were written to CSV.`, "success");
  }

  function exportReportCsv() {
    const project = activeProject();
    const rows = [["Project", "Key", "Summary", "Type", "Status", "Priority", "Owner", "Sprint", "Points", "Due", "Linked page", "Risk"]];
    issuesForProject().forEach((issue) => rows.push([project.key, issue.key, issue.summary, issue.type, issue.status, issue.priority, issue.assignee, issue.sprint, issue.points, issue.due, issue.linkedPage, issue.risk]));
    downloadText(`${project.key.toLowerCase()}-work-report.csv`, rows.map((row) => row.map(csvCell).join(",")).join("\r\n"), "text/csv;charset=utf-8");
    toast("Report exported", `${issuesForProject().length} governed work records were written to CSV.`, "success");
  }

  function exportReleaseNotes() {
    const project = activeProject();
    const issues = issuesForProject();
    const body = [`# ${project.name} — ${project.releaseName || "Release"}`, "", `Target: ${project.release}`, `Health: ${project.health}`, `Confidence: ${project.key === "SMN" ? currentConfidence() : project.confidence}%`, "", "## Completed", ...issues.filter((issue) => issue.status === "Done").map((issue) => `- ${issue.key} — ${issue.summary}`), "", "## Open scope", ...issues.filter((issue) => issue.status !== "Done").map((issue) => `- ${issue.key} — ${issue.summary} (${issue.status}, ${issue.assignee})`), "", "## Decisions", ...decisionsForProject().map((decision) => `- ${decision.id} — ${decision.title}: ${decision.status}`), "", "## Risks", ...risksForProject().map((risk) => `- ${risk.id} — ${risk.title}: ${risk.score}/25; ${risk.response}`), "", "Synthetic demonstration data generated locally."].join("\n");
    downloadText(`${project.key.toLowerCase()}-${slug(project.releaseName || "release")}-notes.md`, body, "text/markdown;charset=utf-8");
    toast("Release notes generated", "Scope, decisions, risks, and status were assembled from the current project record.", "success");
  }

  function downloadMigrationMapping() {
    const mappings = [["Source object", "Destination object", "Rule", "Validation"], ["Jira project", "Delivery project", "Preserve key and ownership", "Validated"], ["Epic / Story / Task", "Configured work hierarchy", "Preserve relationships and estimates", "Validated"], ["Status and workflow", "Workflow and transition", "Map approved status values", "2 exceptions"], ["Confluence space", "Knowledge space", "Preserve project association", "Validated"], ["Page hierarchy", "Page tree", "Preserve parent references", "Validated"], ["Issue link / page link", "Governed relationship", "Reject cross-project references", "Validated"]];
    downloadText("jira-confluence-migration-mapping.csv", mappings.map((row) => row.map(csvCell).join(",")).join("\r\n"), "text/csv;charset=utf-8");
    toast("Mapping downloaded", "The synthetic object and validation map was written to CSV.", "success");
  }

  function openReleaseCreate() {
    const project = activeProject();
    openModal(`<div class="modal-header"><h2>Configure release</h2><button class="icon-button" type="button" data-action="close-modal" aria-label="Close">${icon("x")}</button></div><form data-release-form><div class="modal-body"><div class="callout" style="margin-top:0"><strong>${esc(project.key)} release control</strong><p>Update the release name and target. Scope, gates, risks, and notes remain derived from linked project records.</p></div><div class="form-grid"><div class="field"><label for="releaseName">Release name</label><input id="releaseName" name="name" required value="${esc(project.releaseName || "Release 1")}"></div><div class="field"><label for="releaseTarget">Target date</label><input id="releaseTarget" name="target" required value="${esc(project.release)}"></div><div class="field"><label for="releaseHealth">Health</label><select id="releaseHealth" name="health">${["Green", "Amber", "Red"].map((health) => `<option ${project.health === health ? "selected" : ""}>${health}</option>`).join("")}</select></div><div class="field"><label for="releaseConfidence">Confidence</label><input id="releaseConfidence" name="confidence" type="number" min="0" max="100" value="${project.confidence}" required></div></div></div><div class="modal-footer"><button class="button" type="button" data-action="close-modal">Cancel</button><button class="button primary" type="submit">Save release</button></div></form>`, true);
  }

  function openTeamManager() {
    openModal(`<div class="modal-header"><h2>Manage team capacity</h2><button class="icon-button" type="button" data-action="close-modal" aria-label="Close">${icon("x")}</button></div><form data-team-settings><div class="modal-body"><div class="data-table-wrap"><table class="data-table"><thead><tr><th>Person</th><th>Role</th><th>Team</th><th>Planned capacity</th></tr></thead><tbody>${DemoState.people.filter((person) => !["Amina Cole"].includes(person.name)).map((person) => `<tr><td>${personCell(person.name)}</td><td>${esc(person.role)}</td><td>${esc(person.team)}</td><td><input type="number" min="0" max="100" name="capacity-${slug(person.name)}" data-person-capacity="${esc(person.name)}" value="${person.capacity}" aria-label="${esc(person.name)} planned capacity"></td></tr>`).join("")}</tbody></table></div></div><div class="modal-footer"><button class="button" type="button" data-action="close-modal">Cancel</button><button class="button primary" type="submit">Save capacity</button></div></form>`, true);
  }

  function openInvitePerson() {
    openModal(`<div class="modal-header"><h2>Add synthetic team member</h2><button class="icon-button" type="button" data-action="close-modal" aria-label="Close">${icon("x")}</button></div><form data-invite-person><div class="modal-body"><div class="callout" style="margin-top:0"><strong>No message will be sent</strong><p>This creates a browser-local fictional person for workflow and capacity demonstration only.</p></div><div class="form-grid"><div class="field"><label for="inviteName">Full name</label><input id="inviteName" name="name" required autofocus></div><div class="field"><label for="inviteRole">Role</label><input id="inviteRole" name="role" required></div><div class="field"><label for="inviteTeam">Team</label><input id="inviteTeam" name="team" required></div><div class="field"><label for="inviteCapacity">Planned capacity</label><input id="inviteCapacity" name="capacity" type="number" min="0" max="100" value="50" required></div></div></div><div class="modal-footer"><button class="button" type="button" data-action="close-modal">Cancel</button><button class="button primary" type="submit">Add person</button></div></form>`);
  }

  function openRuleCreate() {
    openModal(`<div class="modal-header"><h2>Create automation rule</h2><button class="icon-button" type="button" data-action="close-modal" aria-label="Close">${icon("x")}</button></div><form data-rule-form><div class="modal-body"><div class="form-grid"><div class="field full"><label for="ruleName">Rule name</label><input id="ruleName" name="name" required autofocus></div><div class="field"><label for="ruleTrigger">Trigger</label><select id="ruleTrigger" name="trigger"><option>Work item transitioned</option><option>Decision approved</option><option>Due date reached</option><option>Page published</option></select></div><div class="field"><label for="ruleAction">Action</label><select id="ruleAction" name="action"><option>Notify owner</option><option>Update linked work</option><option>Refresh briefing</option><option>Create follow-up task</option></select></div><div class="field full"><label for="ruleDetail">Description</label><textarea id="ruleDetail" name="detail" required></textarea></div></div></div><div class="modal-footer"><button class="button" type="button" data-action="close-modal">Cancel</button><button class="button primary" type="submit">Create enabled rule</button></div></form>`);
  }

  function exportBrief() {
    const project = activeProject();
    const approved = project.key === "SMN" && DemoState.decisionApproved;
    const projectBlocked = blockedCount(project.key);
    const topRisk = risksForProject().slice().sort((a, b) => b.score - a.score)[0];
    const body = [
      "# Unified Project Management Suite",
      `## ${project.name} — Leadership Delivery Readout`,
      "",
      "**Synthetic demonstration data · 24 August 2026**",
      "",
      "### Bottom line",
      project.key === "SMN" ? approved
        ? `Alternate certification path approved. ${primaryReleasedCount()} dependent item${primaryReleasedCount() === 1 ? "" : "s"} resumed and the readiness-review forecast returned to 18 September.`
        : `Leadership action is required by 26 August. Approving the accredited partner path releases ${primaryEligibleCount()} blocked item${primaryEligibleCount() === 1 ? "" : "s"} and restores the 18 September review plan.`
        : `${project.name} is ${project.health.toLowerCase()} with ${project.confidence}% confidence, ${projectBlocked} blocked items, and ${milestonesForProject().filter((item) => item.status === "At risk").length} at-risk milestones.`,
      "",
      "### Current facts",
      `- Project health: ${project.health}${approved ? ", recovering" : ""}`,
      `- Release complete: ${project.completion}%`,
      `- Release confidence: ${project.key === "SMN" ? currentConfidence() : project.confidence}%`,
      `- Blocked items: ${projectBlocked}`,
      `- At-risk milestones: ${milestonesForProject().filter((item) => item.status === "At risk").length}`,
      `- Highest risk: ${topRisk ? `${topRisk.id} at ${topRisk.score}/25` : "None registered"}`,
      "",
      "### Traceable sources",
      ...decisionsForProject().slice(0, 3).map((decision) => `- ${decision.id} — ${decision.title}`),
      ...issuesForProject().slice(0, 3).map((issue) => `- ${issue.key} — ${issue.summary}`),
      ...pagesForProject().slice(0, 2).map((page) => `- ${page.title} — v${page.version}`)
    ].join("\n");
    downloadText(`unified-suite-${project.key.toLowerCase()}-leadership-readout.md`, body, "text/markdown;charset=utf-8");
    toast("Briefing exported", "A traceable Markdown readout was created locally.", "success");
  }

  function exportState() {
    const envelope = {
      product: "Unified Project Management Suite",
      schemaVersion: SCHEMA_VERSION,
      exportedAt: new Date().toISOString(),
      boundary: "Synthetic browser-local demonstration data",
      state: clone(DemoState)
    };
    const blob = new Blob([JSON.stringify(envelope, null, 2)], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `unified-suite-demo-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    toast("Workspace exported", "Projects, work, pages, service requests, personas, sprints, and filters were written to a local JSON file.", "success");
  }

  async function previewStateImport(file) {
    if (!file) return;
    try {
      if (file.size > MAX_IMPORT_BYTES) throw new Error("The snapshot exceeds the 5 MB demo import limit.");
      const parsed = JSON.parse(await file.text());
      const candidate = parsed.state || parsed;
      if (parsed.state && parsed.product !== "Unified Project Management Suite") throw new Error("This export was not created by the Unified Project Management Suite demo.");
      const validationError = validateStateCandidate({ ...candidate, schemaVersion: Number(parsed.schemaVersion || candidate.schemaVersion) });
      if (validationError) throw new Error(validationError);
      pendingImportState = normalizeState({ ...candidate, schemaVersion: SCHEMA_VERSION });
      openModal(`<div class="modal-header"><h2>Import browser-local workspace?</h2><button class="icon-button" type="button" data-action="close-modal" aria-label="Close">×</button></div><div class="modal-body"><div class="callout warning" style="margin-top:0"><strong>Schema-compatible JSON snapshot</strong><p>The current local demo state will be replaced only after you confirm. Required records, identifiers, references, workflow values, and numeric ranges passed the browser-local checks. The file remains on this device.</p></div><div class="migration-result-grid"><div class="migration-result"><strong>${pendingImportState.projects.length}</strong><span>Projects</span></div><div class="migration-result"><strong>${pendingImportState.issues.length}</strong><span>Work items</span></div><div class="migration-result"><strong>${pendingImportState.pages.length}</strong><span>Pages</span></div><div class="migration-result"><strong>${pendingImportState.service.requests.length}</strong><span>Requests</span></div></div></div><div class="modal-footer"><button class="button" type="button" data-action="close-modal">Cancel</button><button class="button primary" type="button" data-action="apply-import">Import snapshot</button></div>`);
    } catch (error) {
      pendingImportState = null;
      toast("Import rejected", `No data changed. ${error.message}`, "danger");
    } finally {
      const input = document.querySelector("[data-state-import]");
      if (input) input.value = "";
    }
  }

  function applyStateImport() {
    if (!pendingImportState) return;
    DemoState = pendingImportState;
    pendingImportState = null;
    closeModal();
    DemoState.route = persona().defaultRoute;
    history.replaceState(null, "", "#" + DemoState.route);
    render();
    toast("Workspace imported", "The validated synthetic snapshot is active and saved in this browser.", "success");
  }

  function performSearch(query) {
    const q = query.trim().toLowerCase();
    if (!q) {
      searchResults.hidden = true;
      searchResults.innerHTML = "";
      return;
    }
    if (persona().key === "customer") return;
    const issueMatches = canViewRoute("board") || can("read-work") ? DemoState.issues.filter((issue) => `${issue.key} ${issue.summary} ${issue.assignee} ${issue.type}`.toLowerCase().includes(q)).slice(0, 5) : [];
    const pageMatches = canViewRoute("spaces") ? DemoState.pages.filter((page) => !page.archived && `${page.title} ${page.summary} ${page.owner}`.toLowerCase().includes(q)).slice(0, 5) : [];
    const decisionMatches = canViewRoute("decisions") ? DemoState.decisions.filter((decision) => `${decision.id} ${decision.title} ${decision.rationale}`.toLowerCase().includes(q)).slice(0, 4) : [];
    const riskMatches = canViewRoute("reports") ? DemoState.risks.filter((risk) => `${risk.id} ${risk.title} ${risk.owner} ${risk.response}`.toLowerCase().includes(q)).slice(0, 4) : [];
    const peopleMatches = canViewRoute("people") ? DemoState.people.filter((person) => `${person.name} ${person.role} ${person.team}`.toLowerCase().includes(q)).slice(0, 4) : [];
    const requestMatches = canViewRoute("queues") ? DemoState.service.requests.filter((request) => `${request.key} ${request.summary} ${request.requester} ${request.assignee}`.toLowerCase().includes(q)).slice(0, 5) : [];
    const filterMatches = canViewRoute("filters") ? visibleSavedFilters().filter((filter) => `${filter.name} ${filter.query} ${filter.owner}`.toLowerCase().includes(q)).slice(0, 4) : [];
    const groups = [];
    if (issueMatches.length) groups.push(searchGroup("Work", issueMatches.map((issue) => searchResult("WK", issue.summary, issue.key + " · " + issue.status, "issue", issue.key))));
    if (pageMatches.length) groups.push(searchGroup("Knowledge", pageMatches.map((page) => searchResult("PG", page.title, (projectByKey(page.projectKey || "SMN")?.name || page.projectKey) + " · v" + page.version, "page", page.id))));
    if (decisionMatches.length) groups.push(searchGroup("Decisions", decisionMatches.map((decision) => searchResult("DE", decision.title, decision.id + " · " + decision.status, "decision", decision.id))));
    if (riskMatches.length) groups.push(searchGroup("Risks", riskMatches.map((risk) => searchResult("RK", risk.title, risk.id + " · " + risk.score + "/25", "risk", risk.id))));
    if (peopleMatches.length) groups.push(searchGroup("People", peopleMatches.map((person) => searchResult(person.initials, person.name, person.role, "person", person.name))));
    if (requestMatches.length) groups.push(searchGroup("Service requests", requestMatches.map((request) => searchResult("SR", request.summary, request.key + " · " + request.status, "request", request.key))));
    if (filterMatches.length) groups.push(searchGroup("Saved filters", filterMatches.map((filter) => searchResult("FL", filter.name, filter.scope + " · " + filter.owner, "filter", filter.id))));
    searchResults.innerHTML = groups.length ? groups.join("") : '<div class="empty-state" style="padding:24px"><strong>No matches</strong>Try a key, title, person, risk, or decision.</div>';
    searchResults.hidden = false;
  }

  function searchGroup(label, items) {
    return `<section class="search-result-group"><div class="search-result-label">${esc(label)}</div>${items.join("")}</section>`;
  }

  function searchResult(fallbackText, title, meta, kind, id) {
    const semantic = { issue: "check-square", page: "file-text", decision: "diamond", risk: "shield-alert", request: "life-buoy", filter: "filter" };
    const visual = kind === "person" ? esc(fallbackText) : icon(semantic[kind] || "file-text");
    return `<button class="search-result" type="button" data-search-kind="${kind}" data-search-id="${esc(id)}"><span class="search-result-icon">${visual}</span><span class="search-result-copy"><strong>${esc(title)}</strong><span>${esc(meta)}</span></span><span class="search-result-meta">Open ${icon("arrow-right")}</span></button>`;
  }

  function openNotification(item) {
    if (!canOpenNotification(item)) return;
    item.unread = false;
    updateChrome();
    if (item.kind === "issue") openIssue(item.target);
    else if (item.kind === "page") {
      const page = pageById(item.target);
      if (page) selectProject(page.projectKey || "SMN", "spaces");
      DemoState.activePage = item.target;
      navigate("spaces", { preservePage: true });
    } else if (item.kind === "decision") {
      const decision = decisionById(item.target);
      if (decision) selectProject(decision.projectKey || "SMN", "decisions");
      DemoState.activeDecision = item.target;
      navigate("decisions", { preserveDecision: true });
    } else if (item.kind === "request") {
      const destination = canViewRoute("queues") ? "queues" : "portal";
      navigate(destination);
      openRequest(item.target);
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
    alignProjectContext(risk.projectKey || "SMN");
    openModal(`<div class="modal-header"><h2>${esc(risk.id)} · ${esc(risk.title)}</h2><button class="icon-button" type="button" data-action="close-modal">×</button></div><div class="modal-body"><div class="decision-impact ${risk.score <= 9 ? "approved" : ""}"><div class="eyebrow">Current exposure</div><h2>${risk.score}/25 · ${esc(risk.level)}</h2><p>${esc(risk.response)}</p></div><div class="form-grid" style="margin-top:16px"><div class="field"><span class="field-label">Owner</span><div>${personCell(risk.owner)}</div></div><div class="field"><span class="field-label">Linked action</span><button class="section-link" type="button" data-issue="${risk.issue}">${risk.issue}</button></div></div></div><div class="modal-footer"><button class="button" type="button" data-action="close-modal">Close</button></div>`);
  }

  function resetDemo() {
    if (migrationTimer) window.clearInterval(migrationTimer);
    window.clearTimeout(draftTimer);
    try { window.localStorage.removeItem(STORAGE_KEY); } catch (_) { storageHealthy = false; }
    DemoState = normalizeState(clone(FIXTURE));
    closeModal();
    closeDrawer();
    profileMenu.hidden = true;
    globalSearch.value = "";
    searchResults.hidden = true;
    history.replaceState(null, "", "#home");
    render();
    toast("Demo reset", "All browser-local changes were cleared and the synthetic storyline was restored.", "success");
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
    const roleTarget = event.target.closest("[data-role-option]");
    if (roleTarget) {
      event.preventDefault();
      const name = roleTarget.dataset.roleOption;
      if (!PERSONAS[name]) return;
      DemoState.currentUser = name;
      DemoState.route = PERSONAS[name].defaultRoute;
      DemoState.activePage = null;
      DemoState.activeDecision = null;
      DemoState.activeRequest = null;
      if (DemoState.activeSavedFilter && !canViewSavedFilter(DemoState.savedFilters.find((filter) => filter.id === DemoState.activeSavedFilter))) {
        DemoState.activeSavedFilter = null;
        DemoState.filterQuery = `project = ${activeProject().key} ORDER BY priority DESC`;
      }
      closeModal();
      closeDrawer();
      profileMenu.hidden = true;
      history.replaceState(null, "", "#" + DemoState.route);
      render();
      toast(`Viewing as ${name}`, `${PERSONAS[name].role} simulation active. This is not authentication or security enforcement.`, "success");
      return;
    }

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
      else if (action === "open-create-project") openProjectCreate();
      else if (action === "create-page") openCreateModal("page");
      else if (action === "create-decision") openCreateModal("decision");
      else if (action === "open-request-create") openRequestCreate(actionTarget.dataset.requestType);
      else if (action === "show-help-article") openHelpArticle(actionTarget.dataset.pageId);
      else if (action === "change-create-type") openCreateModal(actionTarget.dataset.createType);
      else if (action === "open-role-menu") { profileMenu.hidden = false; document.getElementById("profileButton").setAttribute("aria-expanded", "true"); }
      else if (action === "close-modal") closeModal();
      else if (action === "close-drawer") closeDrawer();
      else if (action === "confirm-approval") openApprovalModal();
      else if (action === "approve-decision") approveDecision();
      else if (action === "approve-generic-decision") approveGenericDecision(actionTarget.dataset.decisionId);
      else if (action === "all-projects") { DemoState.projectMode = "list"; render(); }
      else if (action === "all-spaces") { DemoState.activePage = null; render(); }
      else if (action === "all-decisions") { DemoState.activeDecision = null; render(); }
      else if (action === "open-projects") { DemoState.projectMode = "list"; navigate("projects", { preserveProject: true }); }
      else if (action === "move-card") moveCard(actionTarget.dataset.key, actionTarget.dataset.direction);
      else if (action === "move-to-sprint") { const issue = issueByKey(actionTarget.dataset.key); const sprint = activeSprint(); if (!requireCapability("manage-sprint", sprint)) return; issue.sprint = sprint.name; issue.status = "Ready"; recordAudit("Added work to " + sprint.name, issue.key); render(); toast(issue.key + " added to " + sprint.name, "Sprint scope and capacity updated."); }
      else if (action === "clear-filters") { DemoState.issueFilter = { text: "", status: "All", assignee: "All" }; render(); }
      else if (action === "save-view") {
        const clauses = [`project = ${activeProject().key}`];
        if (DemoState.issueFilter.text.trim()) clauses.push(`text ~ "${DemoState.issueFilter.text.trim().replace(/["\\]/g, "")}"`);
        if (DemoState.issueFilter.status !== "All") clauses.push(`status = "${DemoState.issueFilter.status}"`);
        if (DemoState.issueFilter.assignee !== "All") clauses.push(`assignee = "${DemoState.issueFilter.assignee}"`);
        DemoState.filterQuery = clauses.join(" AND ") + " ORDER BY priority DESC";
        DemoState.activeSavedFilter = null;
        navigate("filters");
      }
      else if (action === "start-sprint") openSprintSettings();
      else if (action === "complete-sprint") completeSprint(actionTarget.dataset.sprintId);
      else if (action === "run-filter") { const query = document.getElementById("advancedQuery"); if (query) DemoState.filterQuery = query.value.trim(); DemoState.activeSavedFilter = null; render(); }
      else if (action === "reset-query") { DemoState.filterQuery = `project = ${activeProject().key} ORDER BY priority DESC`; DemoState.activeSavedFilter = null; render(); }
      else if (action === "apply-saved-filter") { const filter = DemoState.savedFilters.find((item) => item.id === actionTarget.dataset.filterId); if (!canViewSavedFilter(filter)) { toast("Filter unavailable", "This personal or service filter is not available in the current role."); return; } if (filter.kind === "service") { DemoState.serviceQueue = "breached"; navigate("queues"); } else { DemoState.activeSavedFilter = filter.id; DemoState.filterQuery = filter.query; render(); } }
      else if (action === "delete-filter") { const filter = DemoState.savedFilters.find((item) => item.id === actionTarget.dataset.filterId); if (!canViewSavedFilter(filter)) return; if (persona().key !== "administrator" && filter.owner !== actor()) { toast("Filter is read-only", "Only its owner or a suite administrator can delete this shared filter."); return; } DemoState.savedFilters = DemoState.savedFilters.filter((item) => item.id !== filter.id); if (DemoState.activeSavedFilter === filter.id) DemoState.activeSavedFilter = null; render(); toast("Saved filter deleted", filter.name); }
      else if (action === "select-queue") { DemoState.serviceQueue = actionTarget.dataset.queueId; render(); }
      else if (action === "approve-request") { const request = requestByKey(actionTarget.dataset.requestKey); if (!request || !requireCapability("approve", request)) return; request.approved = true; request.status = "Triage"; recordAudit("Approved service request", request.key); render(); openRequest(request.key); toast(request.key + " approved", "The approval gate is cleared and the resolution clock resumed.", "success"); }
      else if (["advance-clock", "advance-sla-clock"].includes(action)) {
        if (!requireCapability("manage-service", null, "Only the service agent and suite administrator can change the deterministic SLA clock.")) return;
        const requestKey = actionTarget.dataset.requestKey;
        DemoState.service.elapsedHours += 1;
        DemoState.service.requests.forEach((request) => {
          if (!request.firstResponse.met && !["Waiting for customer", "Pending approval", "Resolved", "Closed"].includes(request.status)) request.firstResponse.elapsed += 1;
          if (!request.resolution.met && !["Waiting for customer", "Pending approval", "Resolved", "Closed"].includes(request.status)) request.resolution.elapsed += 1;
        });
        const totalHour = 10 + DemoState.service.elapsedHours;
        DemoState.service.demoNow = `${24 + Math.floor(totalHour / 24)} Aug 2026 · ${String(totalHour % 24).padStart(2, "0")}:00`;
        recordAudit("Advanced deterministic service clock by one hour", "Service management");
        window.setTimeout(() => {
          render();
          if (requestKey) openRequest(requestKey);
          toast("Demo clock advanced", "Queues and SLA states recalculated from the synthetic clock.", "success");
        }, 0);
      }
      else if (action === "set-timeline-scale") { DemoState.timelineScale = actionTarget.dataset.scale; render(); toast("Timeline scale updated", DemoState.timelineScale === "months" ? "Monthly planning view selected." : "Weekly planning view selected."); }
      else if (action === "export-timeline") exportTimelineCsv();
      else if (action === "release-notes") exportReleaseNotes();
      else if (action === "create-release") openReleaseCreate();
      else if (action === "manage-teams") openTeamManager();
      else if (action === "invite-people") openInvitePerson();
      else if (action === "export-csv") exportReportCsv();
      else if (action === "export-brief") exportBrief();
      else if (action === "export-state") { if (persona().key !== "administrator") { toast("Administrator action", "Switch to Maya Okafor to export the complete demo workspace."); return; } exportState(); }
      else if (action === "import-state") { if (persona().key !== "administrator") { toast("Administrator action", "Switch to Maya Okafor to import a complete demo workspace."); return; } document.querySelector("[data-state-import]")?.click(); }
      else if (action === "apply-import") applyStateImport();
      else if (action === "edit-page") openEditPage(actionTarget.dataset.pageId);
      else if (action === "page-history") showVersionHistory(actionTarget.dataset.pageId || DemoState.activePage);
      else if (action === "compare-version") comparePageVersion(actionTarget.dataset.pageId, actionTarget.dataset.version);
      else if (action === "compare-versions") compareSelectedVersions(actionTarget.dataset.pageId, [...document.querySelectorAll("[data-compare-version]:checked")].map((input) => input.dataset.compareVersion));
      else if (action === "restore-version") restorePageVersion(actionTarget.dataset.pageId, actionTarget.dataset.version);
      else if (action === "save-page-draft") savePageDraft(actionTarget.dataset.pageId);
      else if (action === "discard-page-draft") { delete DemoState.pageDrafts[actionTarget.dataset.pageId]; closeModal(); render(); toast("Draft discarded", "The governed page was not changed."); }
      else if (action === "show-archived-pages") showArchivedPages();
      else if (action === "archive-page") { const page = pageById(actionTarget.dataset.pageId); if (!page || page.id === projectHubId(page.projectKey || "SMN") || !requireCapability("archive-knowledge", page)) return; page.archived = true; page.archivedBy = actor(); page.archivedAt = "Just now"; page.archiveReason = "No longer current; retained for traceability"; recordAudit("Archived knowledge page", page.title); render(); toast("Page archived", "It is hidden from normal navigation but remains restorable.", "success"); }
      else if (action === "restore-page") { const page = pageById(actionTarget.dataset.pageId); if (!page || !requireCapability("archive-knowledge", page)) return; page.archived = false; recordAudit("Restored archived knowledge page", page.title); closeModal(); DemoState.activePage = page.id; navigate("spaces", { preservePage: true }); toast("Page restored", page.title + " is back in the page tree.", "success"); }
      else if (action === "mark-all-read") { DemoState.notifications.forEach((item) => { item.unread = false; }); render(); }
      else if (action === "toggle-rule") {
        const rule = DemoState.automations.find((item) => item.id === actionTarget.dataset.rule);
        rule.enabled = !rule.enabled;
        render();
        toast(rule.name, rule.enabled ? "Rule enabled for this session." : "Rule paused for this session.");
      }
      else if (action === "create-rule") openRuleCreate();
      else if (action === "run-migration") runMigration();
      else if (action === "download-mapping") downloadMigrationMapping();
      else if (action === "copy-link") {
        const value = `${window.location.href.split("#")[0]}#issue/${actionTarget.dataset.key}`;
        const copy = navigator.clipboard?.writeText ? navigator.clipboard.writeText(value) : Promise.reject(new Error("Clipboard API unavailable"));
        copy.then(() => toast("Link copied", value, "success")).catch(() => {
          const input = document.createElement("textarea");
          input.value = value;
          input.setAttribute("readonly", "");
          input.style.position = "fixed";
          input.style.opacity = "0";
          document.body.appendChild(input);
          input.select();
          const copied = document.execCommand("copy");
          input.remove();
          toast(copied ? "Link copied" : "Copy unavailable", copied ? value : "Select the address from the browser to copy this work-item link.", copied ? "success" : "danger");
        });
      }
      else if (action === "return-role-home") navigate(persona().defaultRoute);
      else if (action === "reset-demo") resetDemo();
      return;
    }

    const issueTarget = event.target.closest("[data-issue]");
    if (issueTarget) {
      event.preventDefault();
      openIssue(issueTarget.dataset.issue);
      return;
    }
    const requestTarget = event.target.closest("[data-request-key]");
    if (requestTarget) {
      event.preventDefault();
      openRequest(requestTarget.dataset.requestKey);
      return;
    }
    const pageTarget = event.target.closest("[data-page]");
    if (pageTarget) {
      event.preventDefault();
      closeDrawer();
      closeModal();
      const targetPage = pageById(pageTarget.dataset.page);
      if (targetPage) selectProject(targetPage.projectKey || "SMN", "spaces");
      DemoState.activePage = pageTarget.dataset.page;
      navigate("spaces", { preservePage: true });
      return;
    }
    const decisionTarget = event.target.closest("[data-decision]");
    if (decisionTarget) {
      event.preventDefault();
      closeDrawer();
      closeModal();
      const targetDecision = decisionById(decisionTarget.dataset.decision);
      if (targetDecision) selectProject(targetDecision.projectKey || "SMN", "decisions");
      DemoState.activeDecision = decisionTarget.dataset.decision;
      navigate("decisions", { preserveDecision: true });
      return;
    }
    const projectTarget = event.target.closest("[data-project]");
    if (projectTarget) {
      event.preventDefault();
      selectProject(projectTarget.dataset.project);
      render();
      return;
    }
    const spaceTarget = event.target.closest("[data-space]");
    if (spaceTarget) {
      event.preventDefault();
      selectProject(spaceTarget.dataset.space, "spaces");
      DemoState.activePage = projectHubId(spaceTarget.dataset.space);
      render();
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
      const targetRisk = riskById(riskTarget.dataset.risk);
      if (targetRisk) selectProject(targetRisk.projectKey || "SMN", DemoState.route);
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
      else if (kind === "page") { const page = pageById(id); if (page) selectProject(page.projectKey || "SMN", "spaces"); DemoState.activePage = id; navigate("spaces", { preservePage: true }); }
      else if (kind === "decision") { const decision = decisionById(id); if (decision) selectProject(decision.projectKey || "SMN", "decisions"); DemoState.activeDecision = id; navigate("decisions", { preserveDecision: true }); }
      else if (kind === "risk") showRisk(id);
      else if (kind === "request") { navigate("queues"); openRequest(id); }
      else if (kind === "filter") { const filter = DemoState.savedFilters.find((item) => item.id === id); if (!canViewSavedFilter(filter)) return; if (filter.kind === "service") { DemoState.serviceQueue = "breached"; navigate("queues"); } else { DemoState.activeSavedFilter = filter.id; DemoState.filterQuery = filter.query; navigate("filters"); } }
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
    if (event.target.matches("[data-state-import]")) {
      if (persona().key !== "administrator") { event.target.value = ""; toast("Administrator action", "This persona cannot replace the complete demo workspace."); return; }
      previewStateImport(event.target.files?.[0]);
      return;
    }
    const filter = event.target.dataset.filter;
    if (filter) {
      DemoState.issueFilter[filter] = event.target.value;
      window.setTimeout(render, 0);
      return;
    }
    if (event.target.dataset.issueStatus) {
      const key = event.target.dataset.issueStatus;
      const status = event.target.value;
      window.setTimeout(() => updateIssueStatus(key, status), 0);
      return;
    }
    if (event.target.dataset.issueAssignee) {
      const issue = issueByKey(event.target.dataset.issueAssignee);
      if (!requireCapability("edit-work", issue, "This persona cannot reassign this work item.")) { window.setTimeout(() => openIssue(issue.key), 0); return; }
      const previous = issue.assignee;
      issue.assignee = event.target.value;
      issue.history.unshift(`Reassigned from ${previous} to ${issue.assignee}`);
      recordAudit("Reassigned work", issue.key);
      window.setTimeout(() => {
        render();
        openIssue(issue.key);
        toast(issue.key + " reassigned", issue.assignee + " is now accountable.", "success");
      }, 0);
      return;
    }
    if (event.target.dataset.checklistKey) {
      const issue = issueByKey(event.target.dataset.checklistKey);
      if (!requireCapability("edit-work", issue, "This persona cannot change this checklist.")) { window.setTimeout(() => openIssue(issue.key), 0); return; }
      issue.checked[Number(event.target.dataset.checklistIndex)] = event.target.checked;
      issue.history.unshift(`Checklist updated by ${actor()}`);
      toast("Checklist updated", issue.key + " activity recorded.");
      persistState();
      return;
    }
    if (event.target.dataset.requestAssignee) {
      const request = requestByKey(event.target.dataset.requestAssignee);
      if (!request || !requireCapability("manage-service", request)) { if (request) window.setTimeout(() => openRequest(request.key), 0); return; }
      const previous = request.assignee;
      request.assignee = event.target.value;
      if (request.status === "Submitted" && request.assignee !== "Unassigned") request.status = "Triage";
      recordAudit(`Reassigned service request from ${previous} to ${request.assignee}`, request.key);
      window.setTimeout(() => {
        render();
        openRequest(request.key);
        toast(request.key + " assigned", request.assignee + " now owns the request.", "success");
      }, 0);
      return;
    }
    if (event.target.dataset.requestStatus) {
      const request = requestByKey(event.target.dataset.requestStatus);
      if (!request || !requireCapability("manage-service", request)) { if (request) window.setTimeout(() => openRequest(request.key), 0); return; }
      const next = event.target.value;
      if (request.status === "Pending approval" && !request.approved && !["Pending approval", "Closed"].includes(next)) {
        toast("Approval gate is still active", "This access or change request cannot proceed until its assigned approval is recorded.");
        window.setTimeout(() => openRequest(request.key), 0);
        return;
      }
      const previous = request.status;
      request.status = next;
      if (["Resolved", "Closed"].includes(next)) {
        request.resolutionSummary = request.resolutionSummary || "Service outcome confirmed and request completed in the synthetic workflow.";
        request.resolution.met = request.resolution.elapsed <= request.resolution.goal;
        request.resolution.breached = !request.resolution.met;
      }
      recordAudit(`Changed request status from ${previous} to ${next}`, request.key);
      window.setTimeout(() => {
        render();
        openRequest(request.key);
        toast(request.key + " moved to " + next, "Queues and SLA states recalculated.", next === "Resolved" ? "success" : "");
      }, 0);
      return;
    }
  });

  document.addEventListener("input", (event) => {
    if (event.target === globalSearch) performSearch(globalSearch.value);
    if (event.target.matches("[data-portal-search]")) {
      const results = document.querySelector("[data-portal-results]");
      const query = event.target.value.trim().toLowerCase();
      if (!results || !query) { if (results) { results.hidden = true; results.innerHTML = ""; } }
      else {
        const matches = DemoState.pages.filter((page) => page.helpCenter === true && !page.archived && `${page.title} ${page.summary} ${page.content}`.toLowerCase().includes(query)).slice(0, 4);
        results.innerHTML = matches.length ? matches.map((page) => `<button type="button" data-action="show-help-article" data-page-id="${page.id}"><strong>${esc(page.title)}</strong><span>${esc(page.summary)}</span></button>`).join("") : '<div class="empty-state">No suggested knowledge found.</div>';
        results.hidden = false;
      }
    }
    if (event.target.matches("[data-page-draft-editor], [data-page-draft-title], #versionNote")) {
      const form = event.target.closest("[data-edit-page]");
      const state = document.querySelector("[data-page-draft-state]");
      if (state) { state.textContent = "Saving draft…"; state.classList.add("saving"); }
      window.clearTimeout(draftTimer);
      draftTimer = window.setTimeout(() => {
        if (form) savePageDraft(form.dataset.editPage, true);
        const currentState = document.querySelector("[data-page-draft-state]");
        if (currentState) currentState.classList.remove("saving");
      }, 500);
    }
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
    if (form.matches("[data-save-filter-form]")) {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      const query = document.getElementById("advancedQuery")?.value.trim() || DemoState.filterQuery;
      const result = runIssueQuery(query);
      if (result.error) { toast("Filter not saved", result.error, "danger"); return; }
      let filter = visibleSavedFilters().find((item) => item.id === DemoState.activeSavedFilter && item.kind !== "service");
      if (filter && persona().key !== "administrator" && filter.owner !== actor()) filter = null;
      if (filter) Object.assign(filter, { name: data.name.trim(), scope: data.scope, query });
      else {
        const next = Math.max(100, ...DemoState.savedFilters.map((item) => Number(String(item.id).split("-")[1]) || 0)) + 1;
        filter = { id: "filter-" + next, name: data.name.trim(), owner: actor(), scope: data.scope, starred: false, query };
        DemoState.savedFilters.push(filter);
      }
      DemoState.activeSavedFilter = filter.id;
      DemoState.filterQuery = query;
      recordAudit("Saved advanced work filter", filter.name);
      render();
      toast("Filter saved", `${filter.name} is available after refresh.`, "success");
      return;
    }
    if (form.matches("[data-sprint-form]")) {
      event.preventDefault();
      const sprint = DemoState.sprints.find((item) => item.id === form.dataset.sprintId);
      if (!sprint || !requireCapability("manage-sprint", sprint)) return;
      const data = Object.fromEntries(new FormData(form).entries());
      const stats = sprintStats(sprint);
      const capacity = Number(data.capacity);
      if (capacity < stats.committed) { toast("Capacity is below committed scope", `Enter at least ${stats.committed} points or move work out of the sprint.`, "danger"); return; }
      const previousName = sprint.name;
      Object.assign(sprint, { name: data.name.trim(), goal: data.goal.trim(), start: data.start.trim(), end: data.end.trim(), capacity });
      if (previousName !== sprint.name) issuesForProject(sprint.projectKey).filter((issue) => issue.sprint === previousName).forEach((issue) => { issue.sprint = sprint.name; });
      recordAudit("Updated sprint settings", sprint.name);
      closeModal();
      render();
      toast("Sprint settings saved", `${sprint.name} now has ${capacity} points of capacity.`, "success");
      return;
    }
    if (form.matches("[data-request-create]")) {
      event.preventDefault();
      if (!requireCapability("request-service", null, "Switch to the requester persona to submit through the portal.")) return;
      const data = Object.fromEntries(new FormData(form).entries());
      const next = Math.max(1000, ...DemoState.service.requests.map((request) => Number(request.key.split("-")[1]) || 0)) + 1;
      const key = "HELP-" + next;
      const priority = data.urgency === "Critical" ? "Highest" : data.urgency === "High" ? "High" : "Medium";
      const requester = persona().key === "customer" ? actor() : "Amina Cole";
      const requestProject = projectByKey(data.projectKey) || projectByKey("SMN");
      DemoState.service.requests.unshift({ key, summary: data.summary.trim(), type: data.type, status: "Submitted", priority, requester, organization: "Mission Operations", assignee: "Unassigned", created: "Just now", description: data.description.trim(), firstResponse: { goal: priority === "Highest" ? 1 : 4, elapsed: 0, met: false }, resolution: { goal: priority === "Highest" ? 8 : 24, elapsed: 0, met: false }, participants: [], linkedIssue: issuesForProject(requestProject.key)[0]?.key || "SMN-100", linkedPage: projectHubId(requestProject.key), comments: [{ author: requester, time: "Just now", visibility: "public", text: `Request submitted for ${requestProject.name} through the unified service portal.` }] });
      recordAudit("Submitted service request", key);
      closeModal();
      DemoState.route = "portal";
      history.replaceState(null, "", "#portal");
      render();
      toast(`${key} submitted`, "The request is now visible in the Unassigned agent queue.", "success");
      return;
    }
    if (form.dataset.requestComment) {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      const request = requestByKey(form.dataset.requestComment);
      const text = String(data.comment || "").trim();
      const visibility = can("manage-service") && data.visibility === "internal" ? "internal" : "public";
      if (!request || !text || (persona().key === "customer" && request.requester !== actor())) return;
      request.comments.push({ author: actor(), time: "Just now", visibility, text });
      if (visibility === "public" && !request.firstResponse.met && actor() !== request.requester) request.firstResponse.met = true;
      recordAudit(visibility === "internal" ? "Added internal service note" : "Added public service reply", request.key);
      render();
      openRequest(request.key);
      toast(visibility === "internal" ? "Internal note added" : "Public reply added", visibility === "internal" ? "Customers cannot see this note; the first-response clock continues." : "The requester can see this update.", "success");
      return;
    }
    if (form.dataset.issueComment) {
      event.preventDefault();
      const text = new FormData(form).get("comment").trim();
      if (!text) return;
      const issue = issueByKey(form.dataset.issueComment);
      issue.comments.unshift({ author: actor(), time: "Just now", text });
      issue.history.unshift(`Comment added by ${actor()}`);
      recordAudit("Commented on work item", issue.key);
      openIssue(issue.key);
      persistState();
      toast("Comment added", issue.key + " activity updated.", "success");
      return;
    }
    if (form.dataset.pageComment) {
      event.preventDefault();
      const text = new FormData(form).get("comment").trim();
      if (!text) return;
      const pageId = form.dataset.pageComment;
      DemoState.pageComments[pageId] = DemoState.pageComments[pageId] || [];
      DemoState.pageComments[pageId].unshift({ author: actor(), time: "Just now", text });
      recordAudit("Commented on knowledge page", pageById(pageId)?.title || pageId);
      render();
      toast("Comment added", "Page discussion updated.", "success");
      return;
    }
    if (form.matches("[data-release-form]")) {
      event.preventDefault();
      if (!requireCapability("create-work")) return;
      const data = Object.fromEntries(new FormData(form).entries());
      const project = activeProject();
      project.releaseName = String(data.name).trim();
      project.release = String(data.target).trim();
      project.health = data.health;
      project.confidence = Math.max(0, Math.min(100, Number(data.confidence)));
      recordAudit("Updated release configuration", `${project.key} · ${project.releaseName}`);
      closeModal();
      render();
      toast("Release saved", `${project.releaseName} now targets ${project.release}.`, "success");
      return;
    }
    if (form.matches("[data-team-settings]")) {
      event.preventDefault();
      if (!requireCapability("create-work")) return;
      form.querySelectorAll("[data-person-capacity]").forEach((input) => {
        const person = DemoState.people.find((item) => item.name === input.dataset.personCapacity);
        if (person) person.capacity = Math.max(0, Math.min(100, Number(input.value)));
      });
      recordAudit("Updated team capacity plan", "People & teams");
      closeModal();
      render();
      toast("Team capacity saved", "People cards and workload context were updated.", "success");
      return;
    }
    if (form.matches("[data-invite-person]")) {
      event.preventDefault();
      if (!requireCapability("create-work")) return;
      const data = Object.fromEntries(new FormData(form).entries());
      const name = String(data.name).trim();
      if (DemoState.people.some((person) => person.name.toLowerCase() === name.toLowerCase())) { toast("Person already exists", `${name} is already in the synthetic directory.`, "danger"); return; }
      DemoState.people.push({ name, role: String(data.role).trim(), team: String(data.team).trim(), capacity: Number(data.capacity), initials: initials(name), color: ["sky", "orange", "green", "deep", "coral", "slate"][DemoState.people.length % 6] });
      recordAudit("Added synthetic team member", name);
      closeModal();
      render();
      toast(`${name} added`, "The fictional team member is now available for assignment.", "success");
      return;
    }
    if (form.matches("[data-rule-form]")) {
      event.preventDefault();
      if (!requireCapability("create-work")) return;
      const data = Object.fromEntries(new FormData(form).entries());
      const id = `rule-${Math.max(0, ...DemoState.automations.map((rule) => Number(rule.id.split("-").pop()) || 0)) + 1}`;
      DemoState.automations.push({ id, name: String(data.name).trim(), detail: `${data.trigger} → ${data.action}. ${String(data.detail).trim()}`, enabled: true, runs: 0, last: "Never" });
      recordAudit("Created automation rule", id);
      closeModal();
      render();
      toast("Automation rule created", "The enabled browser-local rule is available in the rule list.", "success");
      return;
    }
    if (form.dataset.createForm) {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      if (form.dataset.createForm === "project") {
        if (!requireCapability("create-work")) return;
        const key = String(data.key || "").trim().toUpperCase();
        if (!/^[A-Z][A-Z0-9-]{1,9}$/.test(key)) { toast("Project key is invalid", "Use 2–10 letters, numbers, or hyphens, beginning with a letter.", "danger"); return; }
        if (DemoState.projects.some((project) => project.key === key)) { toast("Project key already exists", `${key} is already in the synthetic portfolio.`, "danger"); return; }
        const projectName = String(data.name).trim();
        const hubId = `${slug(key)}-hub`;
        const activeSprintName = `${key} Sprint 1`;
        DemoState.projects.push({ key, name: projectName, type: data.type, health: data.health, completion: 0, confidence: data.health === "Green" ? 82 : data.health === "Red" ? 42 : 65, releaseName: String(data.releaseName).trim(), release: String(data.release).trim(), objective: String(data.description).trim(), owner: data.owner, description: String(data.description).trim() });
        DemoState.sprints.push({ projectKey: key, id: `${slug(key)}-s1`, name: activeSprintName, goal: "Establish the delivery baseline", start: "24 Aug 2026", end: "04 Sep 2026", capacity: 30, committed: 0, completed: 0, status: "active" }, { projectKey: key, id: `${slug(key)}-s2`, name: `${key} Sprint 2`, goal: "Advance release readiness", start: "07 Sep 2026", end: "18 Sep 2026", capacity: 30, committed: 0, completed: 0, status: "future" });
        DemoState.pages.push({ projectKey: key, id: hubId, title: `${projectName} Hub`, parent: null, depth: 0, owner: data.owner, updated: "Just now", version: 1, summary: `Governed home for ${projectName}.`, content: String(data.description).trim() });
        DemoState.pageComments[hubId] = [];
        DemoState.pageVersions[hubId] = [{ version: 1, author: actor(), time: "Just now", note: "Initial project space", title: `${projectName} Hub`, content: String(data.description).trim(), bodyHtml: `<h2>Project purpose</h2><p>${esc(String(data.description).trim())}</p>` }];
        DemoState.issues.push({ projectKey: key, key: `${key}-100`, summary: `${data.releaseName} delivery`, type: "Epic", status: "To Do", priority: "High", assignee: data.owner, reporter: actor(), sprint: "Portfolio backlog", epic: "—", points: 21, due: String(data.release).trim(), description: String(data.description).trim(), dependencies: [], linkedPage: hubId, risk: "", milestone: String(data.releaseName).trim(), checklist: ["Outcome and acceptance criteria confirmed", "Delivery owners assigned", "Release baseline approved"], checked: [true, false, false], comments: [], history: [`Project created by ${actor()}`] });
        DemoState.milestones.push({ projectKey: key, name: "Delivery baseline", target: "04 Sep", forecast: "04 Sep", status: "On track", issue: `${key}-100` }, { projectKey: key, name: String(data.releaseName).trim(), target: String(data.release).trim(), forecast: String(data.release).trim(), status: "On track", issue: `${key}-100` });
        recordAudit("Created project", key);
        closeModal();
        selectProject(key);
        render();
        toast(`${key} created`, "Project overview, space, starter epic, sprints, milestones, and release baseline are ready.", "success");
      } else if (form.dataset.createForm === "work") {
        if (!requireCapability("create-work")) return;
        const projectKey = activeProject().key;
        const next = Math.max(99, ...issuesForProject(projectKey).map((issue) => Number(issue.key.split("-").pop()) || 0)) + 1;
        const key = projectKey + "-" + next;
        DemoState.issues.push({
          projectKey, key, summary: data.summary, type: data.type, status: data.sprint === activeSprint()?.name ? "Ready" : "To Do", priority: data.priority,
          assignee: data.assignee, reporter: actor(), sprint: data.sprint, epic: "—", points: 3, due: "Not set",
          description: data.description || "New work item created in the interactive prototype.", dependencies: [], linkedPage: projectHubId(projectKey), risk: "", milestone: "Not set",
          checklist: ["Confirm acceptance criteria"], checked: [false], comments: [], history: [`Created by ${actor()}`]
        });
        recordAudit("Created work item", key);
        closeModal();
        render();
        toast(key + " created", "The new work item is available in the backlog and search.", "success");
        openIssue(key);
      } else if (form.dataset.createForm === "page") {
        if (!requireCapability("edit-knowledge")) return;
        const id = slug(data.title) + "-" + (DemoState.pages.length + 1);
        DemoState.pages.push({ projectKey: activeProject().key, id, title: data.title, parent: data.parent || null, depth: data.parent ? 1 : 0, owner: data.owner, updated: "Just now", version: 1, summary: data.summary, content: data.summary });
        DemoState.pageComments[id] = [];
        DemoState.pageVersions[id] = [{ version: 1, author: actor(), time: "Just now", note: "Initial version", title: data.title, content: data.summary, bodyHtml: `<p>${esc(data.summary)}</p>` }];
        recordAudit("Created knowledge page", data.title);
        closeModal();
        DemoState.activePage = id;
        navigate("spaces", { preservePage: true });
        toast("Page created", data.title + " is now in the " + activeProject().name + " space.", "success");
      } else {
        if (!requireCapability("create-work")) return;
        const number = Math.max(...DemoState.decisions.map((decision) => Number(decision.id.split("-")[1]))) + 1;
        const id = "DEC-" + String(number).padStart(3, "0");
        DemoState.decisions.unshift({ projectKey: activeProject().key, id, title: data.title, status: "Draft", owner: data.owner, approver: data.approver, due: "Not set", recommendation: data.recommendation, page: projectHubId(), linkedIssue: issuesForProject()[0]?.key || "", rationale: data.recommendation });
        recordAudit("Created governed decision", id);
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
      if (!page || !requireCapability("publish-knowledge", page, "This persona can save a draft but cannot publish governed knowledge.")) return;
      const data = new FormData(form);
      const editor = document.getElementById("pageEditor");
      page.title = String(data.get("title") || page.title).trim();
      page.content = editor.innerText.trim().slice(0, 5000);
      page.bodyHtml = sanitizeRichText(editor.innerHTML);
      page.version = nextPageVersion(page.id);
      page.updated = "Just now";
      DemoState.pageVersions[page.id] = DemoState.pageVersions[page.id] || [];
      DemoState.pageVersions[page.id].unshift({ version: page.version, author: actor(), time: "Just now", note: data.get("note") || "Content updated", title: page.title, content: page.content, bodyHtml: page.bodyHtml });
      delete DemoState.pageDrafts[page.id];
      recordAudit("Published page version " + page.version, page.title);
      window.clearTimeout(draftTimer);
      closeModal();
      render();
      toast("Page published", page.title + " is now version " + page.version + ".", "success");
    }
  });

  document.addEventListener("keydown", (event) => {
    const interactive = event.target.matches("input, textarea, select") || event.target.isContentEditable;
    if (event.key === "Tab" && (!modalLayer.hidden || !drawerScrim.hidden)) {
      const container = !modalLayer.hidden ? modalLayer.querySelector(".modal") : detailDrawer;
      const focusable = [...container.querySelectorAll('button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')].filter((item) => item.offsetParent !== null);
      if (focusable.length) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    }
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

  DemoState.route = window.location.hash ? routeFromHash() : persona().defaultRoute;
  if (!window.location.hash) history.replaceState(null, "", "#" + DemoState.route);
  render();
})();
