(() => {
  "use strict";

  const FIXTURE = {
    schemaVersion: 4,
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
    searchQuery: "",
    activeBlogPost: null,
    boardShowSubtasks: false,
    pageTreeCollapsed: {},
    pageInlineComments: {},
    watches: { pages: { "alternate-path": ["Dana Kessler"], "evidence-index": ["Imani Brooks"] }, spaces: {} },
    attachments: { issues: {}, pages: {} },
    blogPosts: [
      { id: "blog-1", projectKey: "SMN", title: "Sprint 12 kicked off: certification recovery is the goal", author: "Lena Ortiz", time: "Today", reactions: { "👍": ["Theo Bennett", "Priya Nair"] }, comments: [], bodyHtml: "<p>Sprint 12 started this morning with one goal: recover the certification path. The single most important item is {{SMN-191}} — the alternate-path decision. Until it is approved, six items stay blocked.</p><h2>What changed since Sprint 11</h2><ul><li>Partner-laboratory accreditation was verified ({{SMN-196}}).</li><li>The decision brief is complete and waiting on Dana Kessler.</li><li>The timing-variance defect ({{SMN-216}}) has a confirmed root cause.</li></ul><div class=\"callout\"><strong>Ask</strong><p>If you own evidence in the Evidence Index, confirm your review state before Thursday.</p></div>" },
      { id: "blog-2", projectKey: "SMN", title: "How we run governed decisions in this program", author: "Priya Nair", time: "3 days ago", reactions: { "❤️": ["Lena Ortiz"] }, comments: [], bodyHtml: "<p>Every consequential choice in this program gets a decision record: the problem, the options we actually considered, a recommendation, a named approver, and the downstream work it releases.</p><p>That discipline is why one approval can move six work items, update a risk score, restore a milestone forecast, and refresh the leadership brief — the links already exist before the decision is made.</p>" },
      { id: "blog-3", projectKey: "EGL", title: "Taxonomy v3 is published", author: "Imani Brooks", time: "2 days ago", reactions: { "🎉": ["Priya Nair", "Lena Ortiz"] }, comments: [], bodyHtml: "<p>Evidence Taxonomy v3 is now the governed baseline. All new evidence artifacts must carry the v3 metadata set: class, owner, retention band, and review cadence.</p><div class=\"callout success\"><strong>Adoption status</strong><p>Legacy items are being reclassified through {{EGL-26}}. Owner attestation begins 16 October.</p></div>" }
    ],
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
      },
      {
        key: "SMN-240", summary: "Catalog remaining laboratory artifacts", type: "Sub-task", status: "Done", priority: "High",
        assignee: "Imani Brooks", reporter: "Imani Brooks", sprint: "Sprint 12", epic: "SMN-100", parent: "SMN-184", points: 2, due: "27 Aug 2026",
        description: "Catalog the remaining test artifacts so the evidence package can baseline.",
        dependencies: [], linkedPage: "evidence-index", risk: "", milestone: "Evidence review",
        checklist: [], checked: [], comments: [], history: ["Completed by Imani Brooks"]
      },
      {
        key: "SMN-241", summary: "Run independent evidence review", type: "Sub-task", status: "In Progress", priority: "High",
        assignee: "Priya Nair", reporter: "Imani Brooks", sprint: "Sprint 12", epic: "SMN-100", parent: "SMN-184", points: 2, due: "02 Sep 2026",
        description: "Independent reviewer pass over the assembled evidence package.",
        dependencies: [], linkedPage: "evidence-index", risk: "", milestone: "Evidence review",
        checklist: [], checked: [], comments: [], history: ["Moved to In Progress"]
      },
      {
        key: "SMN-242", summary: "Baseline the approved package", type: "Sub-task", status: "To Do", priority: "High",
        assignee: "Imani Brooks", reporter: "Imani Brooks", sprint: "Sprint 12", epic: "SMN-100", parent: "SMN-184", points: 1, due: "04 Sep 2026",
        description: "Baseline the evidence package after review comments are resolved.",
        dependencies: [], linkedPage: "evidence-index", risk: "", milestone: "Evidence review",
        checklist: [], checked: [], comments: [], history: ["Created from evidence plan"]
      },
      {
        key: "SMN-243", summary: "Reproduce variance in disconnected mode", type: "Sub-task", status: "Done", priority: "High",
        assignee: "Theo Bennett", reporter: "Marcus Reed", sprint: "Sprint 12", epic: "SMN-120", parent: "SMN-216", points: 2, due: "28 Aug 2026",
        description: "Reproduce the timing variance under the disconnected-mode configuration.",
        dependencies: [], linkedPage: "operational-scenario", risk: "", milestone: "Integration Readiness Review",
        checklist: [], checked: [], comments: [], history: ["Completed by Theo Bennett"]
      },
      {
        key: "SMN-244", summary: "Verify fix against regression suite", type: "Sub-task", status: "In Progress", priority: "High",
        assignee: "Marcus Reed", reporter: "Marcus Reed", sprint: "Sprint 12", epic: "SMN-120", parent: "SMN-216", points: 2, due: "02 Sep 2026",
        description: "Run the merged fix through the full regression suite and record results.",
        dependencies: [], linkedPage: "operational-scenario", risk: "", milestone: "Integration Readiness Review",
        checklist: [], checked: [], comments: [], history: ["Moved to In Progress"]
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

  const PAGE_ENRICHMENT = {
    "program-hub": { labels: ["program", "governance"], bodyHtml: "<div data-macro=\"toc\"></div><h2>Why this space exists</h2><p>The Sentinel Mesh Node space is the governed home for delivery context, decisions, evidence, and team working agreements. If a fact matters to Release 1, it lives here and it is linked to the work that proves it.</p><h2>Current priorities</h2><ul><li><strong>Certification recovery</strong> — the alternate-path decision {{SMN-191}} gates six items of Sprint 12 scope.</li><li><strong>Integration readiness</strong> — the 18 September review depends on the evidence package {{SMN-184}} and the timing-variance fix {{SMN-216}}.</li><li><strong>Operational demonstration</strong> — 22 October, planned under {{SMN-140}}.</li></ul><h2>Who to ask</h2><table><thead><tr><th>Topic</th><th>Owner</th></tr></thead><tbody><tr><td>Program delivery</td><td>Lena Ortiz</td></tr><tr><td>Certification and evidence</td><td>Imani Brooks</td></tr><tr><td>Integration engineering</td><td>Marcus Reed</td></tr><tr><td>Cybersecurity controls</td><td>Evan Kim</td></tr><tr><td>Knowledge and decisions</td><td>Priya Nair</td></tr></tbody></table><div class=\"callout\"><strong>Working rule</strong><p>Every consequential choice gets a decision record before it gets a status update.</p></div>" },
    "delivery-plan": { labels: ["release", "planning"], bodyHtml: "<h2>Release 1 shape</h2><p>Release 1 is organized around certification recovery, integration readiness, and the controlled operational demonstration on 22 October. Scope is carried by two epics: {{SMN-100}} (Certification and Assurance) and {{SMN-120}} (Integration Readiness), with the demonstration epic {{SMN-140}} staged behind them.</p><h2>Schedule spine</h2><ul><li><span class=\"lozenge lz-amber\">At risk</span> Alternate path decision — 26 August</li><li><span class=\"lozenge lz-amber\">At risk</span> Evidence review — 4 September</li><li><span class=\"lozenge lz-amber\">At risk</span> Integration Readiness Review — 18 September</li><li><span class=\"lozenge lz-green\">On track</span> Operational demonstration — 22 October</li></ul><h2>Delivery assumptions</h2><ul><li>The partner laboratory remains reserved through September.</li><li>Sprint capacity holds at 44 points with no unplanned absence.</li><li>No new certification scope is accepted before the readiness review.</li></ul><div class=\"callout warning\"><strong>Standing exposure</strong><p>Until {{SMN-191}} is approved, the readiness-review forecast stays at 23 September — five days past target.</p></div>" },
    "cert-strategy": { labels: ["certification", "evidence"], bodyHtml: "<h2>Approach</h2><p>Certification uses traceable evidence, independent review, and a governed decision record for any alternate execution path. Every required artifact has one named owner and one review gate — no shared ownership, no informal sign-off.</p><h2>Review gates</h2><ul><li><strong>Gate 1 — Evidence complete.</strong> Package assembled and cataloged in the Evidence Index.</li><li><strong>Gate 2 — Independent review.</strong> A reviewer who did not produce the artifact confirms it.</li><li><strong>Gate 3 — Baseline.</strong> The package is frozen and traced to controls in the crosswalk.</li></ul><h2>Current state</h2><p><span class=\"lozenge lz-amber\">Blocked</span> The package {{SMN-184}} and control mapping {{SMN-202}} are waiting on the alternate-path decision. The accreditation of the partner laboratory has already been verified ({{SMN-196}}).</p>" },
    "alternate-path": { labels: ["decision-record", "certification"] },
    "evidence-index": { labels: ["evidence", "certification"], bodyHtml: "<h2>What this index is</h2><p>The authoritative catalog of certification evidence. Each artifact is mapped to its owner, review state, baseline, and linked control. If an artifact is not in this index, it does not exist for certification purposes.</p><h2>Artifact status</h2><table><thead><tr><th>Artifact</th><th>Owner</th><th>Review state</th></tr></thead><tbody><tr><td>Laboratory accreditation letter</td><td>Imani Brooks</td><td><span class=\"lozenge lz-green\">Approved</span></td></tr><tr><td>Interface verification results</td><td>Theo Bennett</td><td><span class=\"lozenge lz-amber\">In review</span></td></tr><tr><td>Security-control mapping</td><td>Evan Kim</td><td><span class=\"lozenge lz-red\">Blocked</span></td></tr><tr><td>Telemetry baseline report</td><td>Marcus Reed</td><td><span class=\"lozenge lz-amber\">In review</span></td></tr><tr><td>Disconnected-mode run log</td><td>Theo Bennett</td><td><span class=\"lozenge lz-green\">Approved</span></td></tr></tbody></table><p>Assembly work is tracked in {{SMN-184}}; the blocked control mapping is {{SMN-207}}.</p>" },
    "control-crosswalk": { labels: ["certification", "security"], bodyHtml: "<h2>Purpose</h2><p>The crosswalk establishes bidirectional traceability between controls and approved evidence artifacts: every control names its evidence, and every evidence artifact names the controls it satisfies.</p><h2>How to update it</h2><ul><li>Map new evidence through {{SMN-202}} — never edit the mapping table directly.</li><li>A control with no approved evidence is an open finding, not a footnote.</li><li>Security-control rows are owned by Evan Kim under {{SMN-207}}.</li></ul><div class=\"callout warning\"><strong>Alternate-path condition</strong><p>DEC-014 requires the crosswalk complete by 1 September for the partner-laboratory route.</p></div>" },
    "irr-hub": { labels: ["readiness", "review"], bodyHtml: "<div data-macro=\"toc\"></div><h2>What the review confirms</h2><p>The readiness review confirms interfaces, evidence, staffing, and residual risk are acceptable for release execution. It is a decision meeting, not a status meeting: the output is a go, a conditional go with named actions, or a no-go with a recovery date.</p><h2>Readiness criteria</h2><ul><li>All critical interfaces verified with evidence in the matrix.</li><li>Certification evidence package baselined.</li><li>Open defects at severity 2 or above: zero. The current gate item is {{SMN-216}}.</li><li>Residual risk accepted by the program lead and sponsor.</li></ul><h2>Reviewers</h2><ul><li>Dana Kessler — executive sponsor (chair)</li><li>Lena Ortiz — program lead</li><li>Marcus Reed — integration</li><li>Imani Brooks — certification</li><li>Evan Kim — cybersecurity</li></ul><h2>Rehearsal</h2><p>A full rehearsal runs one week prior, scheduled under {{SMN-214}}, using the facilitator checklist.</p>" },
    "rehearsal-checklist": { labels: ["readiness", "checklist"], bodyHtml: "<h2>How to use this checklist</h2><p>Use this checklist to conduct the readiness-review rehearsal and capture every action in accountable work. The facilitator owns the flow; evidence owners answer only for their own artifacts.</p><details class=\"macro-expand\"><summary>Before the rehearsal</summary><ul><li>Confirm the reviewer list and send the agenda 48 hours ahead.</li><li>Freeze the evidence package version being presented.</li><li>Assign a scribe who is not presenting.</li></ul></details><details class=\"macro-expand\"><summary>During the rehearsal</summary><ul><li>Walk the readiness criteria in order — do not skip to the contentious one.</li><li>Every open question becomes a work item before the meeting ends.</li><li>Time-box each evidence area to ten minutes.</li></ul></details><details class=\"macro-expand\"><summary>After the rehearsal</summary><ul><li>Publish the action list the same day.</li><li>Update the readiness criteria page with anything the rehearsal invalidated.</li></ul></details><p>Publication of this checklist is tracked in {{SMN-219}}.</p>" },
    "interface-matrix": { labels: ["readiness", "integration"], bodyHtml: "<h2>Coverage</h2><p>Each critical interface is traced to its current verification result, evidence record, and accountable owner.</p><table><thead><tr><th>Interface</th><th>Verification</th><th>Owner</th></tr></thead><tbody><tr><td>Mesh node ↔ relay uplink</td><td><span class=\"lozenge lz-green\">Verified</span></td><td>Marcus Reed</td></tr><tr><td>Telemetry export</td><td><span class=\"lozenge lz-amber\">Re-test queued</span></td><td>Theo Bennett</td></tr><tr><td>Disconnected-mode sync</td><td><span class=\"lozenge lz-amber\">Variance under fix</span></td><td>Marcus Reed</td></tr><tr><td>Control-plane auth</td><td><span class=\"lozenge lz-green\">Verified</span></td><td>Evan Kim</td></tr></tbody></table><p>Completion of the matrix is {{SMN-206}}; the sync variance is being closed under {{SMN-216}}.</p>" },
    "release-1": { labels: ["release"], bodyHtml: "<h2>Release intent</h2><p>Release 1 delivers the capabilities required for the controlled operational demonstration: certified mesh-node operation in connected and disconnected modes, verified interfaces, and a traceable evidence baseline.</p><h2>Included scope</h2><ul><li>Certification and assurance — {{SMN-100}}</li><li>Integration readiness — {{SMN-120}}</li><li>Operational demonstration — {{SMN-140}}</li></ul><h2>Acceptance</h2><p>Release 1 is accepted when the readiness review records a go decision and the demonstration success criteria in the operational scenario are met.</p>" },
    "operational-scenario": { labels: ["scenario", "release"], bodyHtml: "<h2>Scenario</h2><p>The scenario evaluates mesh behavior in connected and disconnected modes under controlled conditions: a planned uplink loss, thirty minutes of autonomous operation, and a monitored rejoin.</p><h2>Success criteria</h2><ul><li>No data loss across the disconnect window.</li><li>Rejoin completes inside ninety seconds.</li><li>Telemetry export resumes without manual intervention.</li></ul><h2>Constraints and data collection</h2><ul><li>The run uses the frozen Release 1 configuration — no live patching.</li><li>All telemetry is retained for the evidence package.</li><li>The final run is executed under {{SMN-232}}.</li></ul>" },
    "sponsor-briefing": { labels: ["briefing", "leadership"], bodyHtml: "<h2>What this briefing is</h2><p>This briefing draws delivery, risk, decisions, evidence, and forecast facts from the same operating record leadership sees in the suite — nothing is retyped, so nothing can drift.</p><h2>Narrative</h2><p>Sentinel Mesh Node is amber and recoverable. The single decision that changes the outcome is the alternate certification path: approving it releases the blocked evidence chain and restores the 18 September review forecast. The demonstration remains on plan for 22 October.</p><p>Final assembly of this briefing is tracked in {{SMN-238}}.</p>" },
    "working-agreements": { labels: ["team-norms"], bodyHtml: "<h2>Our norms</h2><ul><li>Every decision, work item, and evidence artifact is linked, owned, and reviewed in the suite.</li><li>Work without an owner is not work — it is a wish.</li><li>Blocked means a named blocker and a named unblocking action, or it is not blocked.</li><li>Pages are published with version notes; drafts are private until published.</li></ul><h2>Cadence</h2><ul><li>Board review daily at 09:15.</li><li>Risk and decision review Tuesdays.</li><li>Evidence review Thursdays with the certification lead.</li></ul>" },
    "hru-hub": { labels: ["program", "cutover"], bodyHtml: "<h2>Where the upgrade stands</h2><p>Relay modernization is green: 78% complete with 91% confidence against the 30 September transition. Site acceptance runs under {{HRU-100}}, with the east relay cutover {{HRU-121}} as the active critical path.</p><h2>Focus this sprint</h2><ul><li>East relay cutover execution and failover telemetry validation.</li><li>The protected maintenance window decision {{HRU-137}} — pending with Dana Kessler.</li></ul>" },
    "hru-cutover": { labels: ["cutover", "acceptance"], bodyHtml: "<h2>Cutover approach</h2><p>Controlled cutover steps, evidence, maintenance windows, and acceptance ownership. Each site follows the same sequence: burn-in, telemetry validation, protected-window cutover, 72-hour observation, acceptance sign-off.</p><div class=\"callout warning\"><strong>Gate</strong><p>The east cutover cannot schedule until the maintenance window decision {{HRU-137}} is approved.</p></div><h2>Evidence per site</h2><ul><li>Burn-in log with the legacy power-module readings (RISK-21 mitigation).</li><li>Failover telemetry validation — completed under {{HRU-128}}.</li><li>Signed acceptance record from the site owner.</li></ul>" },
    "bte-hub": { labels: ["environments"], bodyHtml: "<h2>Roadmap</h2><p>Self-service environment roadmap, pilot guidance, ownership, and current readiness. The goal: a governed test environment any team can provision in minutes and reset in one action.</p><h2>Now / next</h2><ul><li><strong>Now</strong> — publish baseline images ({{BTE-54}}) and automate environment reset ({{BTE-61}}).</li><li><strong>Next</strong> — snapshot retention decision {{BTE-67}}, then the pilot cohort in November.</li></ul>" },
    "bte-retention": { labels: ["decision-record", "environments"], bodyHtml: "<h2>The question</h2><p>How long do environment snapshots live before automatic deletion? Retention drives storage cost directly and recovery expectations indirectly.</p><h2>Options</h2><ul><li><strong>Fourteen days</strong> — lowest cost, breaks the monthly regression pattern.</li><li><strong>Thirty days</strong> — covers every observed recovery request to date. <span class=\"lozenge lz-blue\">Recommended</span></li><li><strong>Ninety days</strong> — triples storage cost for recoveries that have never been requested.</li></ul><p>The approval record is {{BTE-67}}, pending with Lena Ortiz as DEC-024.</p>" },
    "bte-architecture": { labels: ["architecture", "environments"], bodyHtml: "<h2>Topology</h2><p>Baseline images, reset automation, controls, and environment topology. Each environment is an isolated stack built from versioned baseline images; resets rebuild from image rather than repairing in place.</p><h2>Operating rules</h2><ul><li>Baseline images are versioned and published under {{BTE-54}}.</li><li>Reset automation ({{BTE-61}}) is load-tested against the provisioning concurrency limit (RISK-25).</li><li>No snowflake environments: manual changes are destroyed on reset by design.</li></ul>" },
    "zta-hub": { labels: ["security", "identity"], bodyHtml: "<h2>Rollout state</h2><p>Identity rollout, applications, service accounts, controls, exceptions, and readiness. Wave 2 targets 4 December; the program is amber at 43% complete.</p><h2>Critical path</h2><ul><li>Privileged-role reconciliation {{ZTA-42}} — <span class=\"lozenge lz-red\">Blocked</span> on the exception-policy decision.</li><li>Conditional access enablement {{ZTA-47}} — in progress.</li><li>Time-bound exception policy {{ZTA-59}} — pending approval as DEC-029.</li></ul><div class=\"callout warning\"><strong>Highest risk</strong><p>Service-account compatibility (RISK-30, 16/25): legacy authentication retires by wave, with pilot exceptions only.</p></div>" },
    "zta-policy": { labels: ["policy", "security"], bodyHtml: "<h2>Exception rules</h2><p>Time-bound exception rules, owners, approval thresholds, and retirement controls for access that cannot yet meet the zero-trust baseline.</p><ul><li>Maximum exception life: 90 days, no renewals without re-approval.</li><li>Every exception names an owner and a retirement path.</li><li>Privileged-role exceptions require the security lead and the executive approver.</li></ul><p>Adoption of this policy is the pending decision {{ZTA-59}}.</p>" },
    "egl-hub": { labels: ["governance", "evidence"], bodyHtml: "<h2>Program state</h2><p>Evidence ownership, review cadence, retention, and adoption status. The library is green at 86% complete toward Library 3.0 on 18 September.</p><h2>Adoption</h2><ul><li>Taxonomy v3 published ({{EGL-35}}) — <span class=\"lozenge lz-green\">Done</span></li><li>Retention metadata backfill {{EGL-26}} — in review.</li><li>Automated review reminders {{EGL-31}} — in progress.</li></ul>" },
    "egl-taxonomy": { labels: ["taxonomy", "evidence"], bodyHtml: "<h2>The v3 metadata set</h2><p>Approved metadata, evidence classes, lifecycle rules, and examples. Every artifact carries: class, owner, retention band, and review cadence.</p><h2>Evidence classes</h2><table><thead><tr><th>Class</th><th>Retention</th><th>Review</th></tr></thead><tbody><tr><td>Certification</td><td>7 years</td><td>Annual</td></tr><tr><td>Operational</td><td>3 years</td><td>Annual</td></tr><tr><td>Working</td><td>1 year</td><td>On change</td></tr></tbody></table><p>Reclassification of legacy items runs under {{EGL-26}}.</p>" },
    "ops-hub": { labels: ["intake", "transformation"], bodyHtml: "<h2>Operating model</h2><p>Operating model, pilot scope, service promise, roles, and adoption plan for unified intake. The program is red at 36% — request-ownership gaps (RISK-36, 20/25) are the dominant exposure.</p><h2>Pilot plan</h2><ul><li>Routing rules prototype {{OPS-21}} — in review.</li><li>Approval-path validation {{OPS-27}} — <span class=\"lozenge lz-red\">Blocked</span> on ownership resolution.</li><li>Phased cutover pending as DEC-036: two-team pilot before enterprise rollout, with agent training under {{OPS-38}}.</li></ul><div class=\"callout warning\"><strong>Bottom line</strong><p>No pilot launches until every request type has one accountable owner.</p></div>" },
    "ops-routing": { labels: ["routing", "intake"], bodyHtml: "<h2>Design</h2><p>Request routing, ownership, approval paths, exceptions, and retention mapping. Requests route on type and organization; approvals attach at the type level, never per request.</p><h2>Open design questions</h2><ul><li>Ownership for cross-organization requests — blocking {{OPS-27}}.</li><li>Escalation path when an approver is unavailable beyond one business day.</li></ul><p>Retention mapping is handled under {{OPS-34}}.</p>" },
    "dcp-hub": { labels: ["partners", "data"], bodyHtml: "<h2>Platform state</h2><p>Partner onboarding, schemas, operational controls, releases, and support ownership. Partner Beta targets 6 November; the program is amber at 69%.</p><h2>Active work</h2><ul><li>Ingestion error recovery {{DCP-79}} — in progress against partner format drift (RISK-42).</li><li>Replay service configuration {{DCP-84}} — ready.</li><li>Quality thresholds approved as DEC-041 ({{DCP-88}} <span class=\"lozenge lz-green\">Done</span>).</li></ul>" },
    "dcp-quality": { labels: ["data-quality", "partners"], bodyHtml: "<h2>Thresholds</h2><p>Warning and rejection tolerances, replay behavior, metrics, and governance — approved under DEC-041 as tiered warn and reject bands.</p><table><thead><tr><th>Signal</th><th>Warn</th><th>Reject</th></tr></thead><tbody><tr><td>Schema mismatch</td><td>0.5%</td><td>2%</td></tr><tr><td>Late arrival</td><td>15 min</td><td>4 hours</td></tr><tr><td>Duplicate records</td><td>0.1%</td><td>1%</td></tr></tbody></table><h2>Replay behavior</h2><p>Rejected batches quarantine automatically and replay after correction — configuration runs under {{DCP-84}}.</p>" },
    "help-access": { labels: ["help-center"] },
    "help-incident": { labels: ["help-center"] },
    "help-software": { labels: ["help-center"] }
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

    Object.entries(PAGE_ENRICHMENT).forEach(([id, extra]) => {
      const record = FIXTURE.pages.find((item) => item.id === id);
      if (record) Object.assign(record, extra);
    });

    FIXTURE.pages.push(
      { projectKey: "personal:Maya Okafor", id: "personal-maya-rollout", title: "Suite rollout notes", parent: null, depth: 0, owner: "Maya Okafor", updated: "Yesterday", version: 2, labels: ["personal"], summary: "Personal working notes on suite administration and rollout sequencing.", content: "Personal notes on rollout order, permission model checks, and template curation.", bodyHtml: "<h2>Rollout order</h2><ul><li>Projects and boards first — teams feel the value immediately.</li><li>Knowledge spaces second, seeded from templates.</li><li>Service management last, once request types are agreed.</li></ul><h2>To check</h2><ul><li>Permission matrix review with each project lead.</li><li>Which page templates the teams actually use after two weeks.</li></ul>" },
      { projectKey: "personal:Priya Nair", id: "personal-priya-drafts", title: "Drafting corner", parent: null, depth: 0, owner: "Priya Nair", updated: "2 days ago", version: 1, labels: ["personal"], summary: "Scratch space for knowledge structures before they move to a governed space.", content: "Draft outlines and page structures that are not yet ready for a project space.", bodyHtml: "<h2>In progress</h2><ul><li>A one-page decision-record template with tighter option framing.</li><li>Evidence-index layout that scales past fifty artifacts.</li></ul><p>Nothing here is governed — pages move to a project space when they are ready for review.</p>" }
    );

    FIXTURE.pages.forEach((record) => {
      if (!FIXTURE.pageComments[record.id]) FIXTURE.pageComments[record.id] = [];
      if (!FIXTURE.pageVersions[record.id]) FIXTURE.pageVersions[record.id] = [{ version: record.version, author: record.owner, time: record.updated, note: "Current governed version", title: record.title, content: record.content, bodyHtml: record.bodyHtml || `<h2>Purpose</h2><p>${record.content}</p>` }];
    });
  }

  seedPortfolioFixture();

  const SCHEMA_VERSION = 4;
  const STORAGE_KEY = "upms-demo-v4";
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
    agent: ["home", "inbox", "portal", "queues", "slas", "spaces", "search"],
    executive: ["home", "inbox", "projects", "timeline", "releases", "spaces", "decisions", "reports", "leadership", "queues", "slas", "search"],
    contributor: ["home", "my-work", "inbox", "projects", "backlog", "board", "timeline", "releases", "spaces", "decisions", "filters", "reports", "people", "search"],
    "project-lead": ["home", "my-work", "inbox", "projects", "backlog", "board", "timeline", "releases", "spaces", "decisions", "filters", "reports", "leadership", "people", "automation", "portal", "queues", "slas", "search"],
    administrator: ["home", "my-work", "inbox", "projects", "backlog", "board", "timeline", "releases", "spaces", "decisions", "filters", "reports", "leadership", "people", "automation", "admin", "migration", "portal", "queues", "slas", "search"]
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

  function migrateLegacySnapshot(candidate) {
    if (!candidate || typeof candidate !== "object" || Number(candidate.schemaVersion) !== 3) return candidate;
    const upgraded = { ...candidate, schemaVersion: 4 };
    if (Array.isArray(upgraded.issues)) upgraded.issues = upgraded.issues.map((issue) => ({ parent: null, ...issue }));
    if (Array.isArray(upgraded.pages)) upgraded.pages = upgraded.pages.map((page) => ({ labels: [], ...page }));
    return upgraded;
  }

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
    const isValidReactionMap = (map) => map && typeof map === "object" && !Array.isArray(map) && Object.entries(map).every(([emoji, names]) => typeof emoji === "string" && emoji.length <= 16 && Array.isArray(names) && names.every((name) => typeof name === "string"));
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
      if (issue.parent !== undefined && issue.parent !== null) {
        if (typeof issue.parent !== "string" || issue.parent === issue.key) return `Work item ${issue.key} has an invalid parent reference.`;
        const parent = candidate.issues.find((candidateIssue) => candidateIssue.key === issue.parent);
        if (!parent || parent.projectKey !== issue.projectKey) return `Work item ${issue.key} has an unknown or cross-project parent.`;
        if (parent.type === "Sub-task") return `Work item ${issue.key} cannot be nested under another subtask.`;
      }
      if (issue.type === "Sub-task" && !issue.parent) return `Subtask ${issue.key} requires a parent work item.`;
    }
    const personNames = new Set(candidate.people.map((person) => person.name));
    const validPageProject = (key) => projectKeys.has(key) || (typeof key === "string" && key.startsWith("personal:") && personNames.has(key.slice("personal:".length)));
    for (const page of candidate.pages) {
      if (!hasTextFields(page, ["projectKey", "id", "title", "owner", "updated", "summary", "content"]) || !validPageProject(page.projectKey) || !finiteInRange(page.depth, 0, 10) || !finiteInRange(page.version, 1, 100000)) return `Page ${page.id} has invalid project, fields, hierarchy, or version data.`;
      if (page.labels !== undefined && (!Array.isArray(page.labels) || page.labels.length > 20 || page.labels.some((label) => typeof label !== "string" || !label.trim() || label.length > 40))) return `Page ${page.id} has invalid labels.`;
      if (page.reactions !== undefined && !isValidReactionMap(page.reactions)) return `Page ${page.id} has invalid reactions.`;
      if (page.bodyHtml !== undefined && (typeof page.bodyHtml !== "string" || page.bodyHtml.length > 200000)) return `Page ${page.id} has an invalid body.`;
      if (page.restricted !== undefined && page.restricted !== null && (typeof page.restricted !== "object" || ["view", "edit"].some((mode) => page.restricted[mode] !== undefined && (!Array.isArray(page.restricted[mode]) || page.restricted[mode].some((name) => typeof name !== "string"))))) return `Page ${page.id} has invalid restrictions.`;
      let cursor = page;
      const walked = new Set();
      while (cursor && cursor.parent) {
        if (walked.has(cursor.id)) return `Page ${page.id} is part of a circular page hierarchy.`;
        walked.add(cursor.id);
        cursor = candidate.pages.find((candidatePage) => candidatePage.id === cursor.parent);
      }
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
      if (notification.for !== undefined && (typeof notification.for !== "string" || notification.for.length > 100)) return "A notification has an invalid recipient.";
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
    if (candidate.blogPosts !== undefined) {
      if (!Array.isArray(candidate.blogPosts) || candidate.blogPosts.length > 500) return "Blog posts are invalid.";
      for (const post of candidate.blogPosts) {
        if (!post || typeof post !== "object" || !SAFE_RECORD_ID.test(String(post.id)) || !hasTextFields(post, ["title", "author", "time"])) return "A blog post is invalid.";
        if (post.bodyHtml !== undefined && (typeof post.bodyHtml !== "string" || post.bodyHtml.length > 200000)) return "A blog post body is invalid.";
        if (post.reactions !== undefined && !isValidReactionMap(post.reactions)) return "A blog post has invalid reactions.";
      }
    }
    if (candidate.pageInlineComments !== undefined && (typeof candidate.pageInlineComments !== "object" || Array.isArray(candidate.pageInlineComments))) return "Inline comments are invalid.";
    if (candidate.watches !== undefined && (typeof candidate.watches !== "object" || Array.isArray(candidate.watches))) return "Watch subscriptions are invalid.";
    if (candidate.attachments !== undefined) {
      if (typeof candidate.attachments !== "object" || Array.isArray(candidate.attachments)) return "Attachments are invalid.";
      for (const group of Object.values(candidate.attachments)) {
        if (typeof group !== "object" || Array.isArray(group)) return "Attachments are invalid.";
        for (const files of Object.values(group)) {
          if (!Array.isArray(files) || files.length > 40) return "An attachment list is invalid.";
          for (const file of files) {
            if (!file || typeof file !== "object" || typeof file.name !== "string" || file.name.length > 200 || (file.dataUrl !== undefined && (typeof file.dataUrl !== "string" || file.dataUrl.length > 800000 || !file.dataUrl.startsWith("data:")))) return "An attachment record is invalid.";
          }
        }
      }
    }
    return "";
  }

  function normalizeState(candidate) {
    const base = clone(FIXTURE);
    candidate = migrateLegacySnapshot(candidate);
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
    state.pageInlineComments = state.pageInlineComments && typeof state.pageInlineComments === "object" && !Array.isArray(state.pageInlineComments) ? state.pageInlineComments : {};
    state.watches = state.watches && typeof state.watches === "object" && !Array.isArray(state.watches) ? { pages: state.watches.pages && typeof state.watches.pages === "object" ? state.watches.pages : {}, spaces: state.watches.spaces && typeof state.watches.spaces === "object" ? state.watches.spaces : {} } : clone(base.watches);
    state.attachments = state.attachments && typeof state.attachments === "object" && !Array.isArray(state.attachments) ? { issues: state.attachments.issues || {}, pages: state.attachments.pages || {} } : { issues: {}, pages: {} };
    state.blogPosts = Array.isArray(state.blogPosts) ? state.blogPosts.map((post) => ({ reactions: {}, comments: [], bodyHtml: "", projectKey: "SMN", ...post })) : clone(base.blogPosts);
    state.pageTreeCollapsed = state.pageTreeCollapsed && typeof state.pageTreeCollapsed === "object" ? state.pageTreeCollapsed : {};
    state.boardShowSubtasks = Boolean(state.boardShowSubtasks);
    state.searchQuery = typeof state.searchQuery === "string" ? state.searchQuery : "";
    state.issues.forEach((issue) => {
      if (issue.parent === undefined) issue.parent = null;
      if (issue.parent && !state.issues.some((candidateIssue) => candidateIssue.key === issue.parent)) issue.parent = null;
    });
    state.pageVersions = state.pageVersions && typeof state.pageVersions === "object" ? state.pageVersions : base.pageVersions;
    state.pageDrafts = state.pageDrafts && typeof state.pageDrafts === "object" ? state.pageDrafts : {};
    if (!PERSONAS[state.currentUser]) state.currentUser = "Maya Okafor";
    state.pages.forEach((page) => {
      page.archived = Boolean(page.archived);
      if (!Array.isArray(page.labels)) page.labels = [];
      if (page.restricted && typeof page.restricted === "object") page.restricted = { view: Array.isArray(page.restricted.view) ? page.restricted.view : [], edit: Array.isArray(page.restricted.edit) ? page.restricted.edit : [] };
      else page.restricted = null;
      if (!page.reactions || typeof page.reactions !== "object") page.reactions = {};
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
    state.activeBlogPost = null;
    state.activeDecision = null;
    state.activeRequest = null;
    Object.keys(state.pageComments).forEach((pageId) => {
      state.pageComments[pageId] = (state.pageComments[pageId] || []).map((comment, index) => ({ id: comment.id || `pc-${pageId}-${index}`, replies: Array.isArray(comment.replies) ? comment.replies : [], resolved: Boolean(comment.resolved), ...comment }));
    });
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
      snapshot.activeBlogPost = null;
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

  const RICH_TEXT_TAGS = new Set(["P", "H2", "H3", "STRONG", "EM", "U", "S", "UL", "OL", "LI", "BLOCKQUOTE", "A", "BR", "CODE", "PRE", "TABLE", "THEAD", "TBODY", "TR", "TH", "TD", "DETAILS", "SUMMARY", "DIV", "SPAN"]);
  const RICH_TEXT_CLASSES = new Set(["callout", "callout warning", "callout success", "lozenge lz-green", "lozenge lz-amber", "lozenge lz-red", "lozenge lz-blue", "lozenge lz-grey", "macro-expand"]);
  function sanitizeRichText(input) {
    const source = document.createElement("template");
    source.innerHTML = String(input || "");
    const clean = (node) => {
      [...node.childNodes].forEach((child) => {
        if (child.nodeType !== Node.ELEMENT_NODE) return;
        if (!RICH_TEXT_TAGS.has(child.tagName)) {
          child.replaceWith(document.createTextNode(child.textContent || ""));
          return;
        }
        const href = child.tagName === "A" ? child.getAttribute("href") || "" : "";
        const className = child.getAttribute("class") || "";
        const macro = child.getAttribute("data-macro") || "";
        [...child.attributes].forEach((attribute) => child.removeAttribute(attribute.name));
        if (child.tagName === "A" && /^(https?:|mailto:|#)/i.test(href)) child.setAttribute("href", href);
        if ((child.tagName === "DIV" || child.tagName === "SPAN") && RICH_TEXT_CLASSES.has(className)) child.setAttribute("class", className);
        if (child.tagName === "DETAILS") child.setAttribute("class", "macro-expand");
        if (child.tagName === "DIV" && macro === "toc") child.setAttribute("data-macro", "toc");
        clean(child);
      });
    };
    clean(source.content);
    return source.innerHTML;
  }

  const MONTH_INDEX = { jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5, jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11 };
  const DEMO_TODAY_MS = Date.UTC(2026, 7, 24);
  function parseDemoDate(value) {
    const text = String(value || "").trim();
    if (!text || /^(not set|next release|—)$/i.test(text)) return null;
    if (/^today$/i.test(text)) return DEMO_TODAY_MS;
    const match = text.match(/^(\d{1,2})\s+([A-Za-z]{3})[a-z]*(?:\s+(\d{4}))?$/);
    if (!match) return null;
    const month = MONTH_INDEX[match[2].toLowerCase()];
    if (month === undefined) return null;
    return Date.UTC(match[3] ? Number(match[3]) : 2026, month, Number(match[1]));
  }
  function isOverdue(issue) {
    const due = parseDemoDate(issue.due);
    return due !== null && due < DEMO_TODAY_MS && issue.status !== "Done";
  }
  function dueCell(issue) {
    return isOverdue(issue) ? `<span class="due-overdue" title="Past due against the 24 August demo date">${esc(issue.due)} · Overdue</span>` : esc(issue.due);
  }
  function pageRecency(page) {
    const text = String(page.updated || "").trim().toLowerCase();
    if (!text) return 999999;
    if (text === "just now") return 0;
    let match = text.match(/^(\d+)\s*min/);
    if (match) return Number(match[1]);
    match = text.match(/^(\d+)\s*hour/);
    if (match) return Number(match[1]) * 60;
    if (text.startsWith("today")) return 300;
    if (text === "yesterday") return 1440;
    match = text.match(/^(\d+)\s*day/);
    if (match) return Number(match[1]) * 1440;
    match = text.match(/^(\d+)\s*week/);
    if (match) return Number(match[1]) * 10080;
    const parsed = parseDemoDate(page.updated);
    if (parsed !== null) return Math.max(0, Math.round((DEMO_TODAY_MS - parsed) / 60000));
    return 999999;
  }
  function stripHtml(html) {
    const source = document.createElement("template");
    source.innerHTML = String(html || "");
    return (source.content.textContent || "").replace(/\s+/g, " ").trim();
  }
  function pageSearchText(page) {
    return `${page.title} ${page.summary} ${page.owner} ${(page.labels || []).join(" ")} ${page.content || ""} ${stripHtml(page.bodyHtml || "")}`;
  }
  function searchSnippet(text, query, radius = 90) {
    const plain = String(text || "");
    const index = plain.toLowerCase().indexOf(String(query).toLowerCase());
    if (index < 0) return esc(plain.slice(0, radius * 2)) + (plain.length > radius * 2 ? "…" : "");
    const start = Math.max(0, index - radius);
    const end = Math.min(plain.length, index + query.length + radius);
    const before = esc(plain.slice(start, index));
    const hit = esc(plain.slice(index, index + query.length));
    const after = esc(plain.slice(index + query.length, end));
    return `${start > 0 ? "…" : ""}${before}<mark>${hit}</mark>${after}${end < plain.length ? "…" : ""}`;
  }
  function diffWords(oldText, newText) {
    const a = String(oldText || "").split(/\s+/).filter(Boolean);
    const b = String(newText || "").split(/\s+/).filter(Boolean);
    if (a.length > 1600 || b.length > 1600) return null;
    const rows = a.length + 1;
    const cols = b.length + 1;
    const table = new Uint16Array(rows * cols);
    for (let i = a.length - 1; i >= 0; i -= 1) {
      for (let j = b.length - 1; j >= 0; j -= 1) {
        table[i * cols + j] = a[i] === b[j] ? table[(i + 1) * cols + j + 1] + 1 : Math.max(table[(i + 1) * cols + j], table[i * cols + j + 1]);
      }
    }
    const parts = [];
    let i = 0;
    let j = 0;
    const push = (kind, word) => {
      const last = parts[parts.length - 1];
      if (last && last.kind === kind) last.words.push(word);
      else parts.push({ kind, words: [word] });
    };
    while (i < a.length && j < b.length) {
      if (a[i] === b[j]) { push("same", a[i]); i += 1; j += 1; }
      else if (table[(i + 1) * cols + j] >= table[i * cols + j + 1]) { push("removed", a[i]); i += 1; }
      else { push("added", b[j]); j += 1; }
    }
    while (i < a.length) { push("removed", a[i]); i += 1; }
    while (j < b.length) { push("added", b[j]); j += 1; }
    return parts;
  }
  function renderWordDiff(oldText, newText) {
    const parts = diffWords(oldText, newText);
    if (!parts) return null;
    if (!parts.some((part) => part.kind !== "same")) return '<p class="diff-empty">No text differences between these versions.</p>';
    return `<p class="diff-inline">${parts.map((part) => {
      const words = esc(part.words.join(" "));
      if (part.kind === "removed") return `<del>${words}</del>`;
      if (part.kind === "added") return `<ins>${words}</ins>`;
      return words;
    }).join(" ")}</p>`;
  }
  function renderCommentText(text) {
    let html = esc(text);
    DemoState.people.forEach((person) => {
      const token = "@" + person.name;
      html = html.split(esc(token)).join(`<span class="mention-chip">@${esc(person.name)}</span>`);
    });
    return html;
  }
  function mentionedPeople(text) {
    return DemoState.people.filter((person) => String(text).includes("@" + person.name)).map((person) => person.name);
  }
  function renderPageBodyHtml(page, bodyHtml) {
    let html = sanitizeRichText(bodyHtml !== undefined ? bodyHtml : page.bodyHtml || "");
    if (html.includes("data-macro=\"toc\"")) {
      const scratch = document.createElement("template");
      scratch.innerHTML = html;
      const headings = [...scratch.content.querySelectorAll("h2, h3")].map((heading) => heading.textContent.trim()).filter(Boolean);
      const toc = headings.length ? `<div class="macro-toc"><strong>On this page</strong><ul>${headings.map((title) => `<li>${esc(title)}</li>`).join("")}</ul></div>` : "";
      html = html.replace(/<div data-macro="toc"><\/div>/g, () => toc);
    }
    html = html.replace(/\{\{([A-Z][A-Z0-9]*-\d+)\}\}/g, (matchText, key) => {
      const issue = issueByKey(key);
      if (!issue) return esc(matchText);
      return `<button class="work-chip" type="button" data-issue="${esc(key)}" title="${esc(issue.summary)}"><span class="work-chip-key">${esc(key)}</span><span class="work-chip-status st-${slug(issue.status)}">${esc(issue.status)}</span></button>`;
    });
    return html;
  }

  const SUBTASK_TYPE = "Sub-task";
  function isSubtask(issue) {
    return issue && issue.type === SUBTASK_TYPE;
  }
  function subtasksOf(key) {
    return DemoState.issues.filter((issue) => issue.parent === key);
  }
  function subtaskProgress(key) {
    const children = subtasksOf(key);
    return { total: children.length, done: children.filter((issue) => issue.status === "Done").length };
  }
  function subtaskChip(issue) {
    const progress = subtaskProgress(issue.key);
    if (!progress.total) return "";
    return `<span class="subtask-chip ${progress.done === progress.total ? "complete" : ""}" title="${progress.done} of ${progress.total} subtasks done">${icon("list-checks")} ${progress.done}/${progress.total}</span>`;
  }
  function epicsForProject(projectKey = DemoState.currentProject) {
    return issuesForProject(projectKey).filter((issue) => issue.type === "Epic");
  }

  function pageVisibleTo(page, name = actor()) {
    if (persona().key === "administrator") return true;
    const restricted = page.restricted || {};
    if (Array.isArray(restricted.view) && restricted.view.length) return restricted.view.includes(name) || page.owner === name;
    return true;
  }
  function pageEditableBy(page, name = actor()) {
    if (persona().key === "administrator") return true;
    const restricted = page.restricted || {};
    if (Array.isArray(restricted.edit) && restricted.edit.length) return restricted.edit.includes(name) || page.owner === name;
    return pageVisibleTo(page, name);
  }
  function visiblePages(pages) {
    return pages.filter((page) => pageVisibleTo(page));
  }
  function pageChildrenOf(parentId, projectKey) {
    return pagesForProject(projectKey).filter((page) => (page.parent || null) === (parentId || null));
  }
  function pageDepthOf(page) {
    let depth = 0;
    let cursor = page;
    const seen = new Set();
    while (cursor && cursor.parent && !seen.has(cursor.id) && depth < 10) {
      seen.add(cursor.id);
      cursor = pageById(cursor.parent);
      depth += 1;
    }
    return depth;
  }
  function pageDescendantIds(pageId) {
    const ids = [];
    const walk = (id) => {
      DemoState.pages.filter((page) => page.parent === id).forEach((child) => {
        ids.push(child.id);
        walk(child.id);
      });
    };
    walk(pageId);
    return ids;
  }
  function orderedProjectPages(projectKey, includeArchivedId = null) {
    const result = [];
    const walk = (parentId, depth) => {
      pageChildrenOf(parentId, projectKey)
        .filter((page) => (!page.archived || page.id === includeArchivedId))
        .forEach((page) => {
          result.push({ page, depth });
          walk(page.id, depth + 1);
        });
    };
    walk(null, 0);
    return result;
  }
  function allLabels() {
    const counts = new Map();
    DemoState.pages.filter((page) => !page.archived).forEach((page) => {
      (page.labels || []).forEach((label) => counts.set(label, (counts.get(label) || 0) + 1));
    });
    return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  }
  function labelChips(page, editable = false) {
    const labels = page.labels || [];
    return `<div class="label-row" data-label-row>${labels.map((label) => `<span class="label-chip"><button class="label-chip-link" type="button" data-label-search="${esc(label)}">${esc(label)}</button>${editable ? `<button class="label-remove" type="button" data-action="remove-label" data-page-id="${esc(page.id)}" data-label="${esc(label)}" aria-label="Remove label ${esc(label)}">×</button>` : ""}</span>`).join("")}${editable ? `<form class="label-add-form" data-add-label="${esc(page.id)}"><input name="label" placeholder="Add label" aria-label="Add a label" maxlength="30"><button class="button small" type="submit">Add</button></form>` : ""}</div>`;
  }

  function personalSpaceKey(name) {
    return "personal:" + name;
  }
  function isPersonalSpaceKey(key) {
    return String(key || "").startsWith("personal:");
  }
  function spaceForKey(key) {
    if (isPersonalSpaceKey(key)) {
      const name = String(key).slice("personal:".length);
      return { key, name: `${name.split(" ")[0]}’s personal space`, owner: name, personal: true, description: `Personal notes and drafts for ${name}.` };
    }
    return projectByKey(key);
  }
  function watchersOfPage(pageId) {
    return DemoState.watches.pages[pageId] || [];
  }
  function watchersOfSpace(spaceKey) {
    return DemoState.watches.spaces[spaceKey] || [];
  }
  function isWatchingPage(pageId, name = actor()) {
    return watchersOfPage(pageId).includes(name) || watchersOfSpace(pageById(pageId)?.projectKey)?.includes(name);
  }
  function notifyPeople(names, notification) {
    [...new Set(names)].filter((name) => name && name !== actor()).forEach((name, index) => {
      DemoState.notifications.unshift({ id: `ntf-${Date.now()}-${index}-${Math.floor(Math.random() * 100000)}`, unread: true, for: name, time: "Just now", ...notification });
    });
  }
  function notifyPageWatchers(page, title, detail) {
    notifyPeople([...watchersOfPage(page.id), ...watchersOfSpace(page.projectKey)], { kind: "page", target: page.id, title, detail });
  }

  function slug(value) {
    return String(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  function safeRecordId(base, salt, prefix = "page") {
    let candidate = String(base || "").slice(0, 60);
    if (!/^[A-Za-z0-9]/.test(candidate)) candidate = `${prefix}-${candidate}`.slice(0, 60);
    candidate = `${candidate}-${salt}`.replace(/[^A-Za-z0-9._:-]/g, "").slice(0, 79);
    if (!SAFE_RECORD_ID.test(candidate)) candidate = `${prefix}-${salt}`;
    return candidate;
  }

  function normalizeLabelInput(raw, max = 8) {
    return String(raw || "").split(",").map((label) => label.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9_-]/g, "").slice(0, 30)).filter(Boolean).slice(0, max);
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
    if (notification.for && notification.for !== actor()) return false;
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
    if (!sprint) return { issues: [], subtasks: [], committed: 0, completed: 0, blocked: 0 };
    const all = issuesForSprint(sprint);
    const issues = all.filter((issue) => !isSubtask(issue));
    const subtasks = all.filter(isSubtask);
    const committed = issues.reduce((sum, issue) => sum + Number(issue.points || 0), 0);
    const completed = issues.filter((issue) => issue.status === "Done").reduce((sum, issue) => sum + Number(issue.points || 0), 0);
    return { issues, subtasks, committed, completed, blocked: issues.filter((issue) => issue.status === "Blocked").length };
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
        <td class="summary-cell">${esc(issue.summary)}${isSubtask(issue) && issue.parent ? ` <span class="parent-tag" title="Subtask of ${esc(issue.parent)}">↳ ${esc(issue.parent)}</span>` : ""}${subtaskChip(issue)}</td>
        <td><span class="type-badge tag">${esc(issue.type)}</span></td>
        <td>${statusBadge(issue.status)}</td>
        <td>${priorityBadge(issue.priority)}</td>
        <td>${personCell(issue.assignee)}</td>
        <td>${dueCell(issue)}</td>
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
              ${epics.length ? epics.map((epic) => { const children = projectIssues.filter((item) => item.epic === epic.key && !isSubtask(item)); const done = children.filter((item) => item.status === "Done").reduce((sum, item) => sum + item.points, 0); const total = children.reduce((sum, item) => sum + item.points, 0) || epic.points; const percent = total ? Math.round(done / total * 100) : 0; return progress(epic.summary, percent, `${done} of ${total} points`, children.some((item) => item.status === "Blocked") ? "warning" : ""); }).join("") : progress(project.releaseName || "Delivery scope", project.completion, `${project.completion}% complete`)}
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
    const fields = ["project", "key", "type", "status", "priority", "assignee", "reporter", "sprint", "epic", "parent", "points", "due", "text"];
    const text = String(query || "").trim();
    if (!text) return { items: DemoState.issues.slice(), error: "" };
    const orderMatch = text.match(/\s+ORDER\s+BY\s+([a-z-]+)(?:\s+(ASC|DESC))?\s*$/i);
    const filterText = orderMatch ? text.slice(0, orderMatch.index).trim() : text;

    const tokens = [];
    const scanner = /"([^"]*)"|'([^']*)'|([A-Za-z_]+\(\))|(\()|(\))|(,)|(!=|<=|>=|=|~|<|>)|([^\s(),]+)/g;
    let scan;
    while ((scan = scanner.exec(filterText))) {
      if (scan[1] !== undefined || scan[2] !== undefined) tokens.push({ kind: "string", value: scan[1] ?? scan[2] });
      else if (scan[3]) tokens.push({ kind: "word", value: scan[3] });
      else if (scan[4]) tokens.push({ kind: "lparen" });
      else if (scan[5]) tokens.push({ kind: "rparen" });
      else if (scan[6]) tokens.push({ kind: "comma" });
      else if (scan[7]) tokens.push({ kind: "op", value: scan[7] });
      else {
        const word = scan[8];
        const upper = word.toUpperCase();
        if (upper === "AND" || upper === "OR" || upper === "IN" || upper === "NOT") tokens.push({ kind: "keyword", value: upper });
        else tokens.push({ kind: "word", value: word });
      }
    }

    let position = 0;
    let parseError = "";
    const peek = () => tokens[position];
    const fail = (message) => { if (!parseError) parseError = message; return null; };
    const priorities = { Highest: 4, High: 3, Medium: 2, Low: 1 };

    const readValueWords = () => {
      const words = [];
      while (peek() && (peek().kind === "word" || peek().kind === "string")) {
        if (peek().kind === "word" && ["AND", "OR"].includes(String(peek().value).toUpperCase())) break;
        words.push(tokens[position].value);
        position += 1;
        if (tokens[position - 1].kind === "string") break;
      }
      return words.length ? words.join(" ") : null;
    };

    const parseClause = () => {
      const fieldToken = peek();
      if (!fieldToken || fieldToken.kind !== "word") return fail("Expected a field name.");
      const field = String(fieldToken.value).toLowerCase();
      if (!fields.includes(field)) return fail(`“${field}” is not available in this demo query language.`);
      position += 1;
      const opToken = peek();
      if (opToken && opToken.kind === "keyword" && opToken.value === "IN") {
        position += 1;
        if (!peek() || peek().kind !== "lparen") return fail(`IN requires a parenthesized list after “${field}”.`);
        position += 1;
        const values = [];
        while (peek() && peek().kind !== "rparen") {
          if (peek().kind === "comma") { position += 1; continue; }
          const value = readValueWords();
          if (value === null) return fail(`Unexpected token in the IN list for “${field}”.`);
          values.push(cleanQueryValue(value));
        }
        if (!peek()) return fail(`The IN list for “${field}” is missing its closing parenthesis.`);
        position += 1;
        return (issue) => values.map((value) => value.toLowerCase()).includes(String(queryValue(issue, field)).toLowerCase());
      }
      if (!opToken || opToken.kind !== "op") return fail(`Expected an operator after “${field}”. Use =, !=, ~, <, <=, >, >=, or IN.`);
      const operator = opToken.value;
      position += 1;
      const raw = readValueWords();
      if (raw === null) return fail(`Expected a value after “${field} ${operator}”.`);
      const expected = cleanQueryValue(raw);
      if (["<", "<=", ">", ">="].includes(operator)) {
        if (field === "points") {
          const bound = Number(expected);
          if (!Number.isFinite(bound)) return fail(`“${expected}” is not a number for the points comparison.`);
          return (issue) => {
            const actual = Number(issue.points);
            if (!Number.isFinite(actual)) return false;
            return operator === "<" ? actual < bound : operator === "<=" ? actual <= bound : operator === ">" ? actual > bound : actual >= bound;
          };
        }
        if (field === "due") {
          const bound = parseDemoDate(expected);
          if (bound === null) return fail(`“${expected}” is not a date. Use “04 Sep 2026” or today.`);
          return (issue) => {
            const actual = parseDemoDate(issue.due);
            if (actual === null) return false;
            return operator === "<" ? actual < bound : operator === "<=" ? actual <= bound : operator === ">" ? actual > bound : actual >= bound;
          };
        }
        return fail(`Comparison operators only work with due and points, not “${field}”.`);
      }
      return (issue) => {
        const actual = String(queryValue(issue, field)).toLowerCase();
        const value = expected.toLowerCase();
        if (operator === "=") return actual === value;
        if (operator === "!=") return actual !== value;
        return actual.includes(value);
      };
    };

    const parseFactor = () => {
      if (peek() && peek().kind === "lparen") {
        position += 1;
        const inner = parseExpression();
        if (!peek() || peek().kind !== "rparen") return fail("A grouping parenthesis was never closed.");
        position += 1;
        return inner;
      }
      return parseClause();
    };

    const parseTerm = () => {
      let left = parseFactor();
      while (!parseError && peek() && peek().kind === "keyword" && peek().value === "AND") {
        position += 1;
        const right = parseFactor();
        const previous = left;
        left = previous && right ? (issue) => previous(issue) && right(issue) : null;
      }
      return left;
    };

    const parseExpression = () => {
      let left = parseTerm();
      while (!parseError && peek() && peek().kind === "keyword" && peek().value === "OR") {
        position += 1;
        const right = parseTerm();
        const previous = left;
        left = previous && right ? (issue) => previous(issue) || right(issue) : null;
      }
      return left;
    };

    let test = null;
    if (filterText) {
      test = parseExpression();
      if (!parseError && position < tokens.length) parseError = `Could not parse the query near “${tokens[position].value || tokens[position].kind}”.`;
      if (parseError) return { items: [], error: parseError };
    }

    let items = test ? DemoState.issues.filter(test) : DemoState.issues.slice();
    if (orderMatch) {
      const field = orderMatch[1].toLowerCase();
      if (!fields.includes(field)) return { items: [], error: `Cannot order by “${field}” in this demo.` };
      const direction = String(orderMatch[2] || "ASC").toUpperCase() === "DESC" ? -1 : 1;
      items = items.slice().sort((a, b) => {
        let av;
        let bv;
        if (field === "priority") { av = priorities[a.priority] || 0; bv = priorities[b.priority] || 0; }
        else if (field === "due") { av = parseDemoDate(a.due) ?? Infinity; bv = parseDemoDate(b.due) ?? Infinity; }
        else if (field === "points") { av = Number(a.points) || 0; bv = Number(b.points) || 0; }
        else { av = String(queryValue(a, field)); bv = String(queryValue(b, field)); }
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
            <div class="query-actions"><span class="query-help">Fields: project, key, type, status, priority, assignee, reporter, sprint, epic, parent, points, due, text · Operators: =, !=, IN, ~, &lt;, &lt;=, &gt;, &gt;=, AND, OR, ( ), ORDER BY · e.g. project = SMN AND (status = Blocked OR due &lt; "05 Sep 2026")</span><button class="button primary" type="button" data-action="run-filter">Run query</button></div>
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
    const backlog = projectIssues.filter((issue) => issue.sprint === "Backlog" && !isSubtask(issue) && issue.type !== "Epic");
    const portfolio = projectIssues.filter((issue) => issue.type === "Epic");
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
        <div>${portfolio.map((epic) => {
          const children = projectIssues.filter((item) => item.epic === epic.key && !isSubtask(item));
          const doneChildren = children.filter((item) => item.status === "Done").reduce((sum, item) => sum + item.points, 0);
          const totalChildren = children.reduce((sum, item) => sum + item.points, 0) || epic.points;
          const percent = totalChildren ? Math.round(doneChildren / totalChildren * 100) : 0;
          return `<div class="backlog-row epic-row" data-issue="${epic.key}" tabindex="0">
            <span class="backlog-row-icon" aria-hidden="true">${icon("diamond")}</span><span class="backlog-key">${esc(epic.key)}</span><span class="backlog-summary">${esc(epic.summary)}<span class="epic-progress-wrap" aria-hidden="true"><span class="epic-progress" style="width:${percent}%"></span></span></span><span class="epic-progress-label">${percent}% · ${children.length} item${children.length === 1 ? "" : "s"}</span><span>${statusBadge(epic.status)}</span><span>${avatar(epic.assignee, "table-avatar")}</span><span class="story-points" title="Story points">${epic.points}</span>
          </div>`;
        }).join("") || '<div class="empty-state">No epics yet.</div>'}</div>
      </section>
    </div>`;
  }

  function backlogRows(issues, allowMove) {
    return issues.map((issue) => `
      <div class="backlog-row" data-issue="${issue.key}" tabindex="0">
        <span class="backlog-row-icon" aria-hidden="true">${icon("list-checks")}</span><span class="backlog-key">${esc(issue.key)}</span><span class="backlog-summary">${esc(issue.summary)}${subtaskChip(issue)}${isOverdue(issue) ? '<span class="due-overdue" title="Past due">Overdue</span>' : ""}</span><span>${statusBadge(issue.status)}</span><span>${avatar(issue.assignee, "table-avatar")}</span><span class="story-points" title="Story points">${issue.points}</span>
        ${allowMove && can("manage-sprint") ? `<button class="sr-only" type="button" data-action="move-to-sprint" data-key="${issue.key}">Move to ${esc(activeSprint().name)}</button>` : ""}
      </div>
    `).join("");
  }

  function renderBoard() {
    const order = ["Ready", "In Progress", "In Review", "Blocked", "Done"];
    const project = activeProject();
    const sprint = activeSprint();
    const stats = sprintStats(sprint);
    const sprintIssues = DemoState.boardShowSubtasks ? [...stats.issues, ...stats.subtasks] : stats.issues;
    return `<div class="page page-enter">
      ${pageHeader(`${project.key} · ${sprint?.name || "Delivery"}`, "Delivery board", "Move work through the configured workflow. Drag cards or use the arrow controls.", `<button class="button" type="button" data-view="backlog">Backlog</button>${can("create-work") ? '<button class="button primary" type="button" data-action="open-create">Create work item</button>' : ""}`)}
      <div class="data-toolbar">
        <span class="tag">${esc(sprint?.name || "No active sprint")} · ${esc(sprint?.start || "Not scheduled")}–${esc(sprint?.end || "Not scheduled")}</span><span class="tag">Goal · ${esc(sprint?.goal || "Configure the sprint in Backlog")}</span><span class="tag">${stats.completed} / ${stats.committed} points</span><span class="tag">${stats.blocked} blocked</span>
        <label class="toolbar-toggle"><input type="checkbox" data-action-toggle="board-subtasks" ${DemoState.boardShowSubtasks ? "checked" : ""}> Show subtasks (${stats.subtasks.length})</label>
      </div>
      <div class="board-scroll"><div class="board">
        ${order.map((status, columnIndex) => {
          const items = sprintIssues.filter((issue) => issue.status === status || (status === "Ready" && issue.status === "To Do"));
          return `<section class="board-column" data-board-status="${status}" aria-label="${status} column">
            <div class="board-column-header"><span>${esc(status)}</span><span class="board-count">${items.length}</span></div>
            ${items.map((issue) => { const editable = can("edit-work", issue); return `
              <article class="board-card priority-${slug(issue.priority)}" draggable="${editable}" ${editable ? `data-drag-issue="${issue.key}"` : ""} data-issue="${issue.key}" tabindex="0">
                <div class="board-card-key"><span>${esc(issue.key)} · ${esc(issue.type)}</span><span>${isSubtask(issue) ? `↳ ${esc(issue.parent)}` : `${issue.points} pt`}</span></div>
                <h3>${esc(issue.summary)}</h3>
                ${subtaskChip(issue) || (isOverdue(issue) ? '<span class="due-overdue">Overdue · ' + esc(issue.due) + "</span>" : "")}
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
    const windowStart = Date.UTC(2026, 7, 24);
    const slotMs = scale === "months" ? 14 * 86400000 : 7 * 86400000;
    const slots = 8;
    const windowEnd = windowStart + slots * slotMs;
    const labels = scale === "months"
      ? ["24 Aug", "07 Sep", "21 Sep", "05 Oct", "19 Oct", "02 Nov", "16 Nov", "30 Nov"]
      : ["24 Aug", "31 Aug", "07 Sep", "14 Sep", "21 Sep", "28 Sep", "05 Oct", "12 Oct"];
    const slotFor = (ms) => Math.floor((ms - windowStart) / slotMs);
    const rows = issuesForProject().filter((issue) => !isSubtask(issue)).map((issue) => {
      const due = parseDemoDate(issue.due);
      const durationSlots = Math.max(1, Math.min(4, issue.type === "Epic" ? Math.ceil(issue.points / 12) : Math.ceil(issue.points / 6)));
      let endSlot;
      let clipped = "";
      if (due === null) endSlot = slots - 1;
      else if (due >= windowEnd) { endSlot = slots - 1; clipped = "→"; }
      else if (due < windowStart) { endSlot = 0; clipped = "←"; }
      else endSlot = Math.max(0, Math.min(slots - 1, slotFor(due)));
      const span = Math.min(durationSlots, endSlot + 1);
      const start = Math.max(0, endSlot - span + 1);
      return {
        issue,
        start,
        span,
        clipped,
        tone: issue.status === "Done" ? "success" : issue.status === "Blocked" ? "danger" : issue.status === "In Review" ? "warning" : issue.priority === "Highest" ? "dark" : ""
      };
    }).sort((a, b) => (a.issue.type === "Epic" ? 0 : 1) - (b.issue.type === "Epic" ? 0 : 1) || (parseDemoDate(a.issue.due) ?? Infinity) - (parseDemoDate(b.issue.due) ?? Infinity));
    const milestones = milestonesForProject().map((item) => {
      const target = parseDemoDate(item.target);
      if (target === null || target < windowStart || target >= windowEnd) return null;
      return { item, percent: ((target - windowStart) / (slots * slotMs)) * 100 };
    }).filter(Boolean);
    const atRisk = milestonesForProject().filter((item) => item.status === "At risk");
    return `<div class="page page-enter">
      ${pageHeader(`${project.key} · Plan`, "Timeline", "Every scheduled work item positioned by its real due date, with milestone gates and dependency counts.", `<div class="segmented" aria-label="Timeline scale"><button class="${scale === "weeks" ? "active" : ""}" type="button" data-action="set-timeline-scale" data-scale="weeks">Weeks</button><button class="${scale === "months" ? "active" : ""}" type="button" data-action="set-timeline-scale" data-scale="months">Months</button></div><button class="button" type="button" data-action="export-timeline">Export</button>`)}
      <div class="timeline-shell"><div class="timeline">
        <div class="timeline-header"><div>Work</div>${labels.map((date) => `<div>${date}</div>`).join("")}</div>
        <div class="timeline-row"><div class="timeline-label"><span class="type-badge tag">Gates</span><span><strong>Milestones</strong><span>${milestones.length} in window</span></span></div><div class="timeline-milestone-lane" style="grid-column:2 / -1"><div class="timeline-milestone-row">${milestones.map(({ item, percent }) => `<span class="timeline-milestone ${item.status === "At risk" ? "at-risk" : ""}" style="left:${percent}%" title="${esc(item.name)} · target ${esc(item.target)} · forecast ${esc(item.forecast)} · ${esc(item.status)}"><span class="ms-diamond"></span><span>${esc(item.name.length > 22 ? item.name.slice(0, 22) + "…" : item.name)}</span></span>`).join("")}</div></div></div>
        ${rows.map((row) => {
          const issue = row.issue;
          const deps = issue.dependencies.length;
          return `<div class="timeline-row">
            <div class="timeline-label"><span class="type-badge tag">${esc(issue.type)}</span><span><strong>${esc(issue.summary)}</strong><span>${esc(issue.key)} · ${esc(issue.assignee)} · due ${esc(issue.due)}</span></span></div>
            ${Array.from({ length: slots }, () => '<div class="timeline-cell"></div>').join("")}
            <button class="timeline-bar ${row.tone}" style="--start:${row.start};--span:${row.span}" type="button" data-issue="${issue.key}" title="${esc(issue.key)} · due ${esc(issue.due)}${deps ? ` · ${deps} dependenc${deps === 1 ? "y" : "ies"}` : ""}">${row.clipped === "←" ? "← " : ""}${esc(issue.key)} · ${esc(issue.status)}${deps ? `<span class="timeline-dep-chip">⛓ ${deps}</span>` : ""}${row.clipped === "→" ? " →" : ""}</button>
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

  const PAGE_TEMPLATES = [
    { id: "blank", name: "Blank page", bodyHtml: "" },
    { id: "decision-brief", name: "Decision brief", bodyHtml: "<div data-macro=\"toc\"></div><h2>Problem</h2><p>State the problem, the deadline, and what happens if no decision is made.</p><h2>Options considered</h2><ul><li><strong>Option A</strong> — description, cost, risk.</li><li><strong>Option B</strong> — description, cost, risk.</li></ul><h2>Recommendation</h2><p>Name the recommended option and the reason it wins.</p><div class=\"callout warning\"><strong>Approval</strong><p>Name the approver and the date the decision is needed.</p></div>" },
    { id: "meeting-notes", name: "Meeting notes", bodyHtml: "<h2>Attendees</h2><p>Who was present and who owns the outcomes.</p><h2>Decisions</h2><ul><li>Record each decision with its owner.</li></ul><h2>Actions</h2><ul><li>Action — owner — due date. Convert each to a work item.</li></ul>" },
    { id: "sprint-retrospective", name: "Sprint retrospective", bodyHtml: "<h2>What went well</h2><ul><li>…</li></ul><h2>What did not</h2><ul><li>…</li></ul><h2>What we change next sprint</h2><ul><li>One committed change with an owner — tracked as a work item.</li></ul>" },
    { id: "integration-review", name: "Integration review", bodyHtml: "<h2>Scope</h2><p>Interfaces and configurations under review.</p><h2>Evidence</h2><table><thead><tr><th>Interface</th><th>Result</th><th>Owner</th></tr></thead><tbody><tr><td>…</td><td><span class=\"lozenge lz-grey\">Pending</span></td><td>…</td></tr></tbody></table><h2>Findings and actions</h2><ul><li>Finding — action — owner.</li></ul>" },
    { id: "risk-assessment", name: "Risk assessment", bodyHtml: "<h2>Risk statement</h2><p>Condition — consequence. What could happen and what it would cost.</p><h2>Assessment</h2><ul><li>Likelihood: …</li><li>Impact: …</li><li>Score: …/25</li></ul><h2>Response</h2><div class=\"callout\"><strong>Selected response</strong><p>Avoid, mitigate, transfer, or accept — with the named owner and review date.</p></div>" },
    { id: "leadership-readout", name: "Leadership readout", bodyHtml: "<h2>Bottom line</h2><p>One sentence: the state of delivery and the single action leadership can take.</p><h2>Facts</h2><ul><li>Health, confidence, blocked items, at-risk milestones.</li></ul><h2>Decisions needed</h2><ul><li>Decision — approver — date.</li></ul>" }
  ];

  function searchTokens(raw) {
    const tokens = { text: [], label: null, type: null, space: null };
    String(raw || "").trim().split(/\s+/).filter(Boolean).forEach((word) => {
      const match = word.match(/^(label|type|space):(.+)$/i);
      if (match) tokens[match[1].toLowerCase()] = match[2].toLowerCase();
      else tokens.text.push(word);
    });
    tokens.query = tokens.text.join(" ");
    return tokens;
  }

  function renderSearch() {
    const tokens = searchTokens(DemoState.searchQuery);
    const q = tokens.query.toLowerCase();
    const wants = (kind) => !tokens.type || tokens.type === kind;
    const spaceOk = (key) => !tokens.space || String(key).toLowerCase() === tokens.space;
    const textMatch = (haystack) => !q || haystack.toLowerCase().includes(q);
    const issues = (canViewRoute("board") || can("read-work")) && wants("work") ? DemoState.issues.filter((issue) => spaceOk(recordProjectKey(issue)) && !tokens.label && textMatch(`${issue.key} ${issue.summary} ${issue.description} ${issue.assignee} ${issue.type}`)) : [];
    const pages = canViewRoute("spaces") && wants("page") ? visiblePages(DemoState.pages.filter((page) => !page.archived)).filter((page) => spaceOk(page.projectKey) && (!tokens.label || (page.labels || []).some((label) => label.toLowerCase() === tokens.label)) && textMatch(pageSearchText(page))) : [];
    const posts = canViewRoute("spaces") && wants("blog") && !tokens.label ? DemoState.blogPosts.filter((post) => spaceOk(post.projectKey) && textMatch(`${post.title} ${post.author} ${stripHtml(post.bodyHtml)}`)) : [];
    const decisions = canViewRoute("decisions") && wants("decision") && !tokens.label ? DemoState.decisions.filter((decision) => spaceOk(decision.projectKey) && textMatch(`${decision.id} ${decision.title} ${decision.rationale} ${decision.recommendation}`)) : [];
    const total = issues.length + pages.length + posts.length + decisions.length;
    const section = (title, hits) => hits.length ? `<section style="margin-bottom:18px"><div class="section-heading"><div><h2>${esc(title)}</h2></div><span class="tag">${hits.length}</span></div>${hits.slice(0, 25).join("")}</section>` : "";
    return `<div class="page page-enter">
      ${pageHeader("Knowledge & work", "Search", "Full-text search across work items, page content, blog posts, and decisions.", "")}
      <form class="search-page-form" data-search-page-form><input type="search" name="q" value="${esc(DemoState.searchQuery)}" placeholder="Search everything — try a phrase from inside a page, or label:evidence, type:page, space:SMN" aria-label="Search query"><button class="button primary" type="submit">Search</button></form>
      <div class="search-filter-row"><span>${DemoState.searchQuery.trim() ? `${total} result${total === 1 ? "" : "s"}` : "Type a query, or filter with label:, type: (work · page · blog · decision), space:"}</span>${tokens.label ? `<span class="tag">label: ${esc(tokens.label)}</span>` : ""}${tokens.type ? `<span class="tag">type: ${esc(tokens.type)}</span>` : ""}${tokens.space ? `<span class="tag">space: ${esc(tokens.space.toUpperCase())}</span>` : ""}</div>
      ${DemoState.searchQuery.trim() && !total ? '<div class="empty-state"><strong>No matches</strong>Try fewer words, or drop a filter token.</div>' : ""}
      ${section("Pages", pages.map((page) => `<button class="search-hit" type="button" data-page="${page.id}"><span class="hit-title">${icon("file-text")} ${esc(page.title)}</span><span class="hit-snippet">${q ? searchSnippet(pageSearchText(page), tokens.query) : esc(page.summary)}</span><span class="hit-meta">${esc(spaceForKey(page.projectKey)?.name || page.projectKey)} · v${page.version} · ${esc(page.owner)}${(page.labels || []).length ? " · " + page.labels.map(esc).join(", ") : ""}</span></button>`))}
      ${section("Work items", issues.map((issue) => `<button class="search-hit" type="button" data-issue="${esc(issue.key)}"><span class="hit-title">${icon("check-square")} ${esc(issue.key)} · ${esc(issue.summary)}</span><span class="hit-snippet">${q ? searchSnippet(`${issue.summary} — ${issue.description}`, tokens.query) : esc(issue.description)}</span><span class="hit-meta">${esc(issue.type)} · ${esc(issue.status)} · ${esc(issue.assignee)} · ${esc(recordProjectKey(issue))}</span></button>`))}
      ${section("Blog posts", posts.map((post) => `<button class="search-hit" type="button" data-blog-post="${esc(post.id)}"><span class="hit-title">${icon("book-open")} ${esc(post.title)}</span><span class="hit-snippet">${q ? searchSnippet(stripHtml(post.bodyHtml), tokens.query) : esc(stripHtml(post.bodyHtml).slice(0, 140))}</span><span class="hit-meta">${esc(post.author)} · ${esc(post.time)}</span></button>`))}
      ${section("Decisions", decisions.map((decision) => `<button class="search-hit" type="button" data-decision="${esc(decision.id)}"><span class="hit-title">${icon("diamond")} ${esc(decision.id)} · ${esc(decision.title)}</span><span class="hit-snippet">${q ? searchSnippet(`${decision.rationale} ${decision.recommendation}`, tokens.query) : esc(decision.rationale)}</span><span class="hit-meta">${esc(decision.status)} · ${esc(decision.owner)}</span></button>`))}
    </div>`;
  }

  function renderBlogPost() {
    const post = DemoState.blogPosts.find((item) => item.id === DemoState.activeBlogPost);
    if (!post) { DemoState.activeBlogPost = null; return renderSpaces(); }
    const reactions = ["👍", "🎉", "❤️", "👀"];
    const canEditPost = can("edit-knowledge") && (persona().key === "administrator" || post.author === actor());
    return `<div class="page page-enter">
      ${pageHeader(`${spaceForKey(post.projectKey)?.name || post.projectKey} · Blog`, post.title, `Posted by ${post.author} · ${post.time}`, `${canEditPost ? `<button class="button" type="button" data-action="edit-blog-post" data-post-id="${esc(post.id)}">Edit post</button>` : ""}`, `<button type="button" data-action="all-spaces">Spaces</button><span>›</span><span>Blog</span>`)}
      <div class="knowledge-layout" style="grid-template-columns:minmax(0,1fr)">
        <article class="knowledge-document">
          <div class="published-page-body">${renderPageBodyHtml(post, post.bodyHtml)}</div>
          <div class="reaction-bar" aria-label="Reactions">${reactions.map((emoji) => { const names = (post.reactions || {})[emoji] || []; const mine = names.includes(actor()); return `<button class="reaction-pill ${mine ? "mine" : ""}" type="button" data-action="react-blog" data-post-id="${esc(post.id)}" data-emoji="${emoji}" title="${esc(names.join(", ") || "React")}">${emoji}${names.length ? ` ${names.length}` : ""}</button>`; }).join("")}</div>
          <section style="margin-top:26px;padding-top:20px;border-top:1px solid var(--line)">
            <h2 style="margin-top:0">Comments</h2>
            <ul class="comment-list">${(post.comments || []).length ? post.comments.map((comment) => `<li class="comment-item"><div class="comment-head"><strong>${esc(comment.author)}</strong><time>${esc(comment.time)}</time></div><p>${renderCommentText(comment.text)}</p></li>`).join("") : '<li class="empty-state" style="padding:18px">No comments yet.</li>'}</ul>
            ${can("comment") ? `<form class="comment-form mention-host" data-blog-comment="${esc(post.id)}"><textarea name="comment" aria-label="Add a comment" placeholder="Add a comment or @mention a teammate" data-mention-input></textarea><button class="button primary" type="submit">Comment</button></form>` : ""}
          </section>
        </article>
      </div>
    </div>`;
  }

  function openBlogEditor(postId = null) {
    if (!requireCapability("edit-knowledge", null, "This persona cannot write blog posts.")) return;
    const post = postId ? DemoState.blogPosts.find((item) => item.id === postId) : null;
    openModal(`
      <div class="modal-header"><h2>${post ? "Edit blog post" : "Write blog post"}</h2><button class="icon-button" type="button" data-action="close-modal" aria-label="Close">×</button></div>
      <form data-blog-form="${post ? esc(post.id) : ""}">
        <div class="modal-body">
          <div class="field"><label for="blogTitle">Title</label><input id="blogTitle" name="title" required value="${esc(post?.title || "")}" placeholder="Announce something worth reading"></div>
          <div class="field" style="margin-top:14px"><span class="field-label">Content</span><div class="editor-toolbar" aria-label="Formatting toolbar"><button type="button" data-command="bold" aria-label="Bold">B</button><button type="button" data-command="italic" aria-label="Italic"><em>I</em></button><button type="button" data-command="insertUnorderedList" aria-label="Bulleted list">• List</button><button type="button" data-command="formatBlock" data-value="h2" aria-label="Heading level 2">H2</button></div><div id="pageEditor" class="page-editor" contenteditable="true" role="textbox" aria-multiline="true">${post ? sanitizeRichText(post.bodyHtml) : "<p></p>"}</div></div>
        </div>
        <div class="modal-footer"><button class="button" type="button" data-action="close-modal">Cancel</button><button class="button primary" type="submit">${post ? "Save post" : "Publish post"}</button></div>
      </form>
    `, true);
  }

  function renderSpaces() {
    if (DemoState.activeBlogPost) return renderBlogPost();
    if (DemoState.activePage) return renderPage();
    const spaces = DemoState.projects.map((project) => ({ ...project, pages: visiblePages(pagesForProject(project.key)).filter((page) => !page.archived).length, updatedMin: Math.min(...pagesForProject(project.key).map(pageRecency), 999999) }));
    const personal = visiblePages(DemoState.pages.filter((page) => isPersonalSpaceKey(page.projectKey) && !page.archived));
    const personalSpaces = [...new Set(personal.map((page) => page.projectKey))].map((key) => ({ ...spaceForKey(key), pages: personal.filter((page) => page.projectKey === key).length }));
    const myPersonalKey = personalSpaceKey(actor());
    if (!personalSpaces.some((space) => space.key === myPersonalKey) && can("edit-knowledge")) personalSpaces.unshift({ ...spaceForKey(myPersonalKey), pages: 0 });
    const recent = visiblePages(DemoState.pages.filter((page) => !page.archived)).slice().sort((a, b) => pageRecency(a) - pageRecency(b)).slice(0, 10);
    const labels = allLabels();
    const posts = DemoState.blogPosts.slice().sort((a, b) => pageRecency({ updated: a.time }) - pageRecency({ updated: b.time }));
    return `<div class="page page-enter">
      ${pageHeader("Knowledge", "Spaces", "Create, govern, discover, and connect organizational knowledge directly to accountable work.", `<button class="button" type="button" data-action="show-archived-pages">Archived pages</button>${can("edit-knowledge") ? '<button class="button" type="button" data-action="create-blog-post">Write blog post</button><button class="button primary" type="button" data-action="create-page">Create page</button>' : ""}`)}
      <div class="space-grid">${spaces.map((space) => `
        <article class="card space-card" tabindex="0" data-space="${space.key}">
          <span class="space-card-icon">${esc(space.key)}</span><h2>${esc(space.name)}</h2><p>${esc(space.description)}</p>
          <div class="space-card-meta"><span>${space.pages} pages</span><span>Owner · ${esc(space.owner)}</span><span>${watchersOfSpace(space.key).includes(actor()) ? "Watching" : "Updated " + esc(space.updatedMin === 999999 ? "—" : space.updatedMin === 0 ? "just now" : space.updatedMin < 60 ? space.updatedMin + " min ago" : space.updatedMin < 1440 ? Math.round(space.updatedMin / 60) + " h ago" : Math.round(space.updatedMin / 1440) + " d ago")}</span></div>
          <span class="tag" style="position:absolute;top:18px;right:18px">Project space</span>
          <button class="button small ${watchersOfSpace(space.key).includes(actor()) ? "watch-active" : ""}" style="position:absolute;bottom:16px;right:16px" type="button" data-action="toggle-watch-space" data-space-key="${space.key}">${watchersOfSpace(space.key).includes(actor()) ? "Watching ✓" : "Watch"}</button>
        </article>
      `).join("")}${personalSpaces.map((space) => `
        <article class="card space-card" tabindex="0" data-personal-space="${esc(space.key)}">
          <span class="space-card-icon">${esc(initials(space.owner))}</span><h2>${esc(space.name)}</h2><p>${esc(space.description)}</p>
          <div class="space-card-meta"><span>${space.pages} page${space.pages === 1 ? "" : "s"}</span><span>Owner · ${esc(space.owner)}</span></div>
          <span class="tag" style="position:absolute;top:18px;right:18px">Personal space</span>
        </article>
      `).join("")}</div>
      <div class="project-overview-grid" style="margin-top:18px">
        <section class="panel">
          <div class="panel-header"><h2>Recently updated</h2><p style="margin:0;font-size:9px;color:var(--muted)">Newest first, across every space</p></div>
          <div class="data-table-wrap"><table class="data-table"><thead><tr><th>Page</th><th>Space</th><th>Owner</th><th>Version</th><th>Updated</th></tr></thead><tbody>
            ${recent.map((page) => `<tr data-page="${page.id}" tabindex="0"><td class="summary-cell">${esc(page.title)}</td><td>${esc(spaceForKey(page.projectKey || "SMN")?.name || page.projectKey)}</td><td>${personCell(page.owner)}</td><td>v${page.version}</td><td>${esc(page.updated)}</td></tr>`).join("")}
          </tbody></table></div>
        </section>
        <div class="stack">
          <section class="panel">
            <div class="panel-header"><h2>Blog</h2><span class="tag">${posts.length} post${posts.length === 1 ? "" : "s"}</span></div>
            <div class="panel-body">${posts.slice(0, 4).map((post) => `<article class="blog-card" data-blog-post="${esc(post.id)}" tabindex="0"><h3>${esc(post.title)}</h3><div class="blog-meta"><span>${esc(post.author)}</span><span>${esc(post.time)}</span><span>${esc(spaceForKey(post.projectKey)?.name || post.projectKey)}</span>${Object.entries(post.reactions || {}).filter(([, names]) => Array.isArray(names) && names.length).map(([emoji, names]) => `<span>${esc(emoji)} ${names.length}</span>`).join("")}</div></article>`).join("") || '<div class="empty-state">No blog posts yet.</div>'}</div>
          </section>
          <section class="panel">
            <div class="panel-header"><h2>Labels</h2><span class="tag">${labels.length}</span></div>
            <div class="panel-body"><div class="label-cloud">${labels.map(([label, count]) => `<span class="label-chip"><button class="label-chip-link" type="button" data-label-search="${esc(label)}">${esc(label)}</button><span class="label-count">${count}</span></span>`).join("") || '<span class="empty-inline">No labels yet.</span>'}</div></div>
          </section>
        </div>
      </div>
    </div>`;
  }

  function renderPage() {
    const page = pageById(DemoState.activePage) || pageById(projectHubId());
    const space = spaceForKey(page.projectKey || "SMN") || activeProject();
    const isPersonal = isPersonalSpaceKey(page.projectKey);
    if (!pageVisibleTo(page)) {
      return `<div class="page page-enter">${pageHeader("Knowledge", "This page is restricted", `${esc(page.owner)} limited who can view this page. Ask the owner for access, or return to the space.`, '<button class="button primary" type="button" data-action="all-spaces">Back to spaces</button>')}</div>`;
    }
    const comments = DemoState.pageComments[page.id] || [];
    const inlineThreads = DemoState.pageInlineComments[page.id] || [];
    const openThreads = inlineThreads.filter((thread) => !thread.resolved);
    const versions = DemoState.pageVersions[page.id] || [{ version: page.version, author: page.owner, time: page.updated, note: "Current version" }];
    const isDecisionPage = page.id === "alternate-path";
    const draft = DemoState.pageDrafts[page.id];
    const watching = isWatchingPage(page.id);
    const canEditThis = can("edit-knowledge") && pageEditableBy(page);
    const treeEntries = orderedProjectPages(space.key, page.archived ? page.id : null).filter((entry) => pageVisibleTo(entry.page));
    const pageActions = `<button class="button ${watching ? "watch-active" : ""}" type="button" data-action="toggle-watch-page" data-page-id="${page.id}">${watching ? "Watching ✓" : "Watch"}</button><button class="button" type="button" data-action="export-page" data-page-id="${page.id}">Export</button><button class="button" type="button" data-action="page-history" data-page-id="${page.id}">Version history</button>${page.id !== projectHubId(space.key) && can("archive-knowledge") ? `<button class="button" type="button" data-action="${page.archived ? "restore-page" : "archive-page"}" data-page-id="${page.id}">${page.archived ? "Restore" : "Archive"}</button>` : ""}${canEditThis ? `<button class="button primary" type="button" data-action="edit-page" data-page-id="${page.id}">${draft ? "Resume draft" : "Edit page"}</button>` : ""}`;
    const collapsed = DemoState.pageTreeCollapsed;
    const hasChildren = (id) => treeEntries.some((entry) => entry.page.parent === id);
    const visibleInTree = (entry) => {
      let parentId = entry.page.parent;
      while (parentId) {
        if (collapsed[parentId]) return false;
        parentId = pageById(parentId)?.parent || null;
      }
      return true;
    };
    const reactions = ["👍", "🎉", "❤️", "👀"];
    return `<div class="page page-enter">
      ${pageHeader(`${space.name} · Space`, page.title, page.summary, pageActions, `<button type="button" data-action="all-spaces">Spaces</button><span>›</span><span>${esc(space.name)}</span>`)}
      <div class="knowledge-layout">
        <nav class="page-tree" aria-label="Page tree"><div class="page-tree-header"><span>Pages</span>${can("edit-knowledge") ? `<button class="section-link" type="button" data-action="create-page" aria-label="Create a page">${icon("plus")}</button>` : ""}</div>
          ${treeEntries.filter(visibleInTree).map(({ page: item, depth }) => `<div class="tree-node">${"".padStart(0)}${hasChildren(item.id) ? `<button class="tree-twisty" type="button" data-action="toggle-tree" data-page-id="${item.id}" aria-label="${collapsed[item.id] ? "Expand" : "Collapse"} ${esc(item.title)}" style="margin-left:${depth * 12}px">${collapsed[item.id] ? "▸" : "▾"}</button>` : `<span class="tree-twisty-spacer" style="margin-left:${depth * 12}px"></span>`}<button class="tree-item ${item.id === page.id ? "active" : ""}" type="button" data-page="${item.id}"><span class="page-ico" aria-hidden="true">${icon(depth ? "file-text" : "book-open")}</span><span>${esc(item.title)}</span>${item.restricted && (item.restricted.view?.length || item.restricted.edit?.length) ? `<span class="restricted-ico" title="Restricted page">${icon("key")}</span>` : ""}</button></div>`).join("") || '<div class="empty-inline" style="padding:10px">No pages yet.</div>'}
        </nav>
        <article class="knowledge-document">
          ${page.archived ? '<div class="callout warning" data-page-status="archived"><strong>Archived page</strong><p>This version remains available for traceability but is hidden from the normal page tree and search.</p></div>' : ""}
          ${draft ? `<div class="callout"><strong>Unpublished local draft</strong><p>${esc(draft.updatedBy)} saved changes ${esc(draft.updated)}. The governed page remains at v${page.version}.</p></div>` : ""}
          <div class="document-toolbar"><span class="document-meta">Owned by ${esc(page.owner)} · Updated ${esc(page.updated)} · v${page.version}</span><span style="display:flex;gap:6px">${page.restricted && (page.restricted.view?.length || page.restricted.edit?.length) ? '<span class="tag">Restricted</span>' : ""}<span class="tag">${isPersonal ? "Personal page" : "Governed page"}</span></span></div>
          <h1>${esc(page.title)}</h1>
          ${labelChips(page, canEditThis)}
          <div class="published-page-body" data-page-body="${page.id}">${page.bodyHtml ? renderPageBodyHtml(page) : `<p class="lead">${esc(page.content)}</p>${isDecisionPage ? renderDecisionPageBody() : renderGenericPageBody(page)}`}</div>
          <div class="reaction-bar" aria-label="Reactions">${reactions.map((emoji) => { const names = (page.reactions || {})[emoji] || []; const mine = names.includes(actor()); return `<button class="reaction-pill ${mine ? "mine" : ""}" type="button" data-action="react-page" data-page-id="${page.id}" data-emoji="${emoji}" title="${esc(names.join(", ") || "React")}">${emoji}${names.length ? ` ${names.length}` : ""}</button>`; }).join("")}</div>
          <section style="margin-top:26px;padding-top:20px;border-top:1px solid var(--line)">
            <h2 style="margin-top:0">Comments</h2>
            <ul class="comment-list">${comments.length ? comments.map((comment) => `<li class="comment-item ${comment.resolved ? "resolved" : ""}" data-thread-id="${esc(String(comment.id))}">
              <div class="comment-head"><strong>${esc(comment.author)}</strong><time>${esc(comment.time)}</time>${comment.resolved ? '<span class="comment-resolved-tag">Resolved</span>' : ""}</div>
              <p>${renderCommentText(comment.text)}</p>
              ${(comment.replies || []).map((reply) => `<div class="thread-reply"><div class="comment-head"><strong>${esc(reply.author)}</strong><time>${esc(reply.time)}</time></div><p>${renderCommentText(reply.text)}</p></div>`).join("")}
              ${can("comment") ? `<div class="thread-actions"><button class="section-link" type="button" data-action="reply-page-comment" data-page-id="${page.id}" data-thread="${esc(String(comment.id))}">Reply</button>${!comment.resolved ? `<button class="section-link" type="button" data-action="resolve-page-comment" data-page-id="${page.id}" data-thread="${esc(String(comment.id))}">Resolve</button>` : ""}</div><form class="comment-form mention-host" data-page-comment-reply="${page.id}" data-thread="${esc(String(comment.id))}" hidden><textarea name="comment" aria-label="Reply" placeholder="Reply — @mention a teammate" data-mention-input></textarea><button class="button primary" type="submit">Reply</button></form>` : ""}
            </li>`).join("") : '<li class="empty-state" style="padding:18px">No comments yet.</li>'}</ul>
            ${can("comment") ? `<form class="comment-form mention-host" data-page-comment="${page.id}"><textarea name="comment" aria-label="Add a page comment" placeholder="Add a comment or @mention a teammate" data-mention-input></textarea><button class="button primary" type="submit">Comment</button></form>` : ""}
          </section>
        </article>
        <aside class="document-sidebar" aria-label="Page information">
          ${canEditThis || can("archive-knowledge") ? `<section class="document-sidebar-section"><h3>Organize</h3><div style="display:flex;flex-wrap:wrap;gap:6px">
            <button class="button small" type="button" data-action="move-page" data-page-id="${page.id}">Move</button>
            <button class="button small" type="button" data-action="copy-page" data-page-id="${page.id}">Copy</button>
            <button class="button small" type="button" data-action="page-restrictions" data-page-id="${page.id}">Restrictions</button>
            <button class="button small" type="button" data-action="export-space" data-space-key="${esc(space.key)}">Export space</button>
          </div></section>` : ""}
          <section class="document-sidebar-section"><h3>Inline comments${openThreads.length ? ` · ${openThreads.length} open` : ""}</h3>
            <p class="empty-inline" style="margin-top:0">Select text in the page to start an inline comment.</p>
            ${inlineThreads.length ? inlineThreads.map((thread) => `<div class="inline-thread ${thread.resolved ? "" : "active"}" data-inline-thread="${esc(thread.id)}">
              <blockquote>“${esc(thread.quote.length > 90 ? thread.quote.slice(0, 90) + "…" : thread.quote)}”</blockquote>
              <div class="comment-head"><strong>${esc(thread.author)}</strong><time>${esc(thread.time)}</time>${thread.resolved ? '<span class="comment-resolved-tag">Resolved</span>' : ""}</div>
              <p style="font-size:10px;margin:4px 0 0">${renderCommentText(thread.text)}</p>
              ${(thread.replies || []).map((reply) => `<div class="thread-reply"><div class="comment-head"><strong>${esc(reply.author)}</strong><time>${esc(reply.time)}</time></div><p style="font-size:10px">${renderCommentText(reply.text)}</p></div>`).join("")}
              ${can("comment") && !thread.resolved ? `<div class="thread-actions"><button class="section-link" type="button" data-action="reply-inline-comment" data-page-id="${page.id}" data-thread="${esc(thread.id)}">Reply</button><button class="section-link" type="button" data-action="resolve-inline-comment" data-page-id="${page.id}" data-thread="${esc(thread.id)}">Resolve</button></div><form class="comment-form mention-host" data-inline-reply="${page.id}" data-thread="${esc(thread.id)}" hidden><textarea name="comment" aria-label="Reply" data-mention-input></textarea><button class="button primary" type="submit">Reply</button></form>` : ""}
            </div>`).join("") : ""}
          </section>
          ${!isPersonal ? `<section class="document-sidebar-section"><h3>Linked work & decisions</h3>
            ${isDecisionPage ? `
              <button class="linked-object" type="button" data-decision="DEC-014"><span class="linked-icon">${icon("diamond")}</span><span class="linked-copy"><strong>DEC-014</strong><span>${DemoState.decisionApproved ? "Approved" : "Pending approval"}</span></span></button>
              <button class="linked-object" type="button" data-issue="SMN-191"><span class="linked-icon">${icon("check-square")}</span><span class="linked-copy"><strong>SMN-191</strong><span>${esc(issueByKey("SMN-191").status)} · Lena Ortiz</span></span></button>
              <button class="linked-object" type="button" data-risk="RISK-07"><span class="linked-icon">${icon("shield-alert")}</span><span class="linked-copy"><strong>RISK-07</strong><span>${currentRiskScore()}/25 · ${DemoState.decisionApproved ? "Moderate" : "High"}</span></span></button>
            ` : (() => { const linked = issuesForProject(space.key).find((issue) => issue.linkedPage === page.id) || issuesForProject(space.key)[0]; return linked ? `<button class="linked-object" type="button" data-issue="${linked.key}"><span class="linked-icon">${icon("check-square")}</span><span class="linked-copy"><strong>${esc(linked.key)} · Linked work</strong><span>Open details and activity</span></span></button>` : '<div class="empty-state">No linked work yet.</div>'; })()}
          </section>` : ""}
          <section class="document-sidebar-section"><h3>Attachments</h3>${attachmentSection("pages", page.id, canEditThis)}</section>
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
    if (tab === "issue-types") return `<h2>Work item types</h2><p>The delivery hierarchy is Epic → Story / Task / Bug → Sub-task. Subtasks always belong to a parent work item, inherit its sprint, and are excluded from sprint point totals.</p><div class="config-grid">${["Epic", "Story", "Task", "Bug", "Sub-task", "Decision Task", "Risk Action"].map((type, index) => `<div class="config-card"><h3>${esc(type)}</h3><p>${type === "Epic" ? "Container type · groups delivery work toward an outcome" : type === "Sub-task" ? "Child type · breakdown of a single parent work item" : index < 4 ? "Standard delivery type" : "Governed specialized type"} · ${index + 7} configured fields</p></div>`).join("")}</div>`;
    if (tab === "permissions") return `<h2>Permissions</h2><p>Role-based access model for work, spaces, approvals, service management, administration, and reporting.</p><div class="data-table-wrap"><table class="data-table"><thead><tr><th>Role</th><th>Work</th><th>Knowledge</th><th>Service</th><th>Approve</th><th>Administer</th></tr></thead><tbody><tr><td class="summary-cell">Suite administrator</td><td>Manage</td><td>Manage</td><td>Manage</td><td>Yes</td><td>Yes</td></tr><tr><td class="summary-cell">Project lead</td><td>Manage</td><td>Publish</td><td>Read</td><td>Configured</td><td>No</td></tr><tr><td class="summary-cell">Contributor</td><td>Edit assigned</td><td>Draft</td><td>None</td><td>No</td><td>No</td></tr><tr><td class="summary-cell">Executive approver</td><td>Read</td><td>Read</td><td>Assigned</td><td>Assigned</td><td>No</td></tr><tr><td class="summary-cell">Service agent</td><td>Linked read</td><td>Read</td><td>Manage</td><td>No</td><td>No</td></tr><tr><td class="summary-cell">Requester</td><td>None</td><td>Suggested</td><td>Own requests</td><td>No</td><td>No</td></tr></tbody></table></div>`;
    if (tab === "templates") return `<h2>Templates</h2><p>Page templates are live in the Create page flow — pick one here to start a page from it.</p><div class="config-grid">${PAGE_TEMPLATES.filter((template) => template.id !== "blank").map((template) => `<div class="config-card"><h3>${esc(template.name)}</h3><p>Governed page template · seeds structure, panels, and macros</p>${can("edit-knowledge") ? `<button class="button small" type="button" data-action="create-page" data-template="${template.id}" style="margin-top:8px">Use template</button>` : ""}</div>`).join("")}</div>`;
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
    search: renderSearch,
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
      if (view === "spaces" && options.preservePage !== true) { DemoState.activePage = null; DemoState.activeBlogPost = null; }
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
    if (DemoState.route === "spaces" && DemoState.activePage) initializeInlineComments(DemoState.activePage);
  }

  function initializeInlineComments(pageId) {
    const body = document.querySelector(`[data-page-body="${CSS.escape(pageId)}"]`);
    if (!body) return;
    const threads = DemoState.pageInlineComments[pageId] || [];
    threads.forEach((thread) => {
      if (!thread.quote) return;
      const walker = document.createTreeWalker(body, NodeFilter.SHOW_TEXT);
      let node;
      while ((node = walker.nextNode())) {
        const index = node.textContent.indexOf(thread.quote);
        if (index < 0) continue;
        if (node.parentElement.closest(".inline-anchor")) continue;
        const range = document.createRange();
        range.setStart(node, index);
        range.setEnd(node, index + thread.quote.length);
        const mark = document.createElement("mark");
        mark.className = "inline-anchor" + (thread.resolved ? " resolved" : "");
        mark.dataset.inlineRef = thread.id;
        mark.title = `${thread.author}: ${thread.text.slice(0, 80)}`;
        try { range.surroundContents(mark); } catch (_) { /* selection spans elements; skip highlight */ }
        break;
      }
    });
    if (!can("comment")) return;
    body.addEventListener("mouseup", () => {
      document.querySelector(".selection-comment-bubble")?.remove();
      const selection = window.getSelection();
      if (!selection || selection.isCollapsed) return;
      const text = selection.toString().replace(/\s+/g, " ").trim();
      if (text.length < 3 || text.length > 300) return;
      if (!body.contains(selection.anchorNode) || !body.contains(selection.focusNode)) return;
      const rect = selection.getRangeAt(0).getBoundingClientRect();
      const bubble = document.createElement("div");
      bubble.className = "selection-comment-bubble";
      bubble.innerHTML = `<button class="button small primary" type="button">${icon("plus")} Comment</button>`;
      document.body.appendChild(bubble);
      bubble.style.left = Math.max(8, rect.left + rect.width / 2 - 40) + "px";
      bubble.style.top = Math.max(8, rect.top - 38 + window.scrollY) + "px";
      bubble.style.position = "fixed";
      bubble.querySelector("button").addEventListener("click", () => {
        bubble.remove();
        openInlineCommentModal(pageId, text);
      });
      window.setTimeout(() => {
        document.addEventListener("mousedown", function cleanup(event) {
          if (!bubble.contains(event.target)) { bubble.remove(); document.removeEventListener("mousedown", cleanup); }
        });
      }, 0);
    });
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

  function attachmentSection(kind, id, canManage) {
    const files = (DemoState.attachments[kind] || {})[id] || [];
    return `<div class="attachment-block" data-attachment-block>
      ${files.map((file) => `<div class="attachment-row"><span class="attachment-icon">${icon("paperclip")}</span><span class="attachment-copy"><strong>${esc(file.name)}</strong><span>${esc(file.addedBy)} · ${esc(file.time)} · ${Math.max(1, Math.round((file.size || 0) / 1024))} KB</span></span>${file.dataUrl && /^data:(image\/(png|jpe?g|gif|webp|svg\+xml)|application\/pdf|text\/plain)[;,]/i.test(file.dataUrl) ? `<a class="button small" href="${esc(file.dataUrl)}" download="${esc(file.name)}">Download</a>` : ""}${canManage ? `<button class="label-remove" type="button" data-action="remove-attachment" data-kind="${esc(kind)}" data-record="${esc(id)}" data-file="${esc(file.id)}" aria-label="Remove attachment ${esc(file.name)}">×</button>` : ""}</div>`).join("") || '<p class="empty-inline">No attachments yet.</p>'}
      ${canManage ? `<label class="attachment-add button small">Attach file<input type="file" data-attach-kind="${esc(kind)}" data-attach-record="${esc(id)}" hidden></label><span class="field-hint">Stored in this browser only · 384 KB per file</span>` : ""}
    </div>`;
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
          <div class="field"><span class="field-label">Sprint</span><div>${esc(issue.sprint)}${isSubtask(issue) ? ' <span class="field-hint">(inherited from parent)</span>' : ""}</div></div>
          <div class="field"><span class="field-label">Due date</span><div>${dueCell(issue)}</div></div>
          <div class="field"><span class="field-label">Epic</span><div>${issue.epic && issue.epic !== "—" && issueByKey(issue.epic) ? `<button class="linked-key" type="button" data-issue="${esc(issue.epic)}">${esc(issue.epic)} · ${esc(issueByKey(issue.epic).summary)}</button>` : "No epic"}</div></div>
          <div class="field"><span class="field-label">Estimate</span><div>${issue.points} story points${isSubtask(issue) ? ' <span class="field-hint">(not counted in sprint totals)</span>' : ""}</div></div>
          <div class="field"><span class="field-label">Reporter</span><div>${personCell(issue.reporter)}</div></div>
          <div class="field"><span class="field-label">Milestone</span><div>${esc(issue.milestone)}</div></div>
        </div>
        ${isSubtask(issue) && issue.parent ? `<section class="drawer-section subtask-parent-strip"><button class="linked-object" type="button" data-issue="${esc(issue.parent)}"><span class="linked-icon">${icon("arrow-left")}</span><span class="linked-copy"><strong>Subtask of ${esc(issue.parent)}</strong><span>${esc(issueByKey(issue.parent)?.summary || "Parent work item")} · ${esc(issueByKey(issue.parent)?.status || "")}</span></span></button></section>` : ""}
        <section class="drawer-section"><h3>Description</h3><p>${esc(issue.description)}</p></section>
        ${!isSubtask(issue) && issue.type !== "Epic" ? (() => {
          const children = subtasksOf(issue.key);
          const done = children.filter((child) => child.status === "Done").length;
          const canAdd = can("edit-work", issue) || can("create-work");
          return `<section class="drawer-section"><h3>Subtasks${children.length ? ` · ${done}/${children.length} done` : ""}</h3>
            ${children.length ? `<div class="subtask-progress-track" aria-hidden="true"><span style="width:${Math.round(done / children.length * 100)}%"></span></div>
            <ul class="subtask-list">${children.map((child) => `<li><button class="dependency-item" type="button" data-issue="${esc(child.key)}"><span class="dependency-key">${esc(child.key)}</span><span>${esc(child.summary)}</span><span class="subtask-owner">${avatar(child.assignee, "table-avatar")}</span>${statusBadge(child.status)}</button></li>`).join("")}</ul>` : '<p class="empty-inline">No subtasks yet. Break this work down without losing the parent view.</p>'}
            ${canAdd ? `<form class="subtask-add-form" data-subtask-form="${esc(issue.key)}"><input name="summary" placeholder="Add a subtask" aria-label="New subtask summary" required maxlength="140"><select name="assignee" aria-label="Subtask assignee">${DemoState.people.filter((person) => !["Amina Cole", "Jordan Lee"].includes(person.name)).map((person) => `<option ${person.name === issue.assignee ? "selected" : ""}>${esc(person.name)}</option>`).join("")}</select><button class="button small primary" type="submit">Add</button></form>` : ""}
          </section>`;
        })() : ""}
        <section class="drawer-section"><h3>Dependencies & schedule exposure</h3>
          ${issue.dependencies.length ? `<ul class="dependency-list">${issue.dependencies.map((dep) => { const linked = issueByKey(dep); return `<li><button class="dependency-item" type="button" data-issue="${dep}"><span class="dependency-key">${dep}</span><span>${esc(linked.summary)}</span>${statusBadge(linked.status)}</button></li>`; }).join("")}</ul>` : '<p>No unresolved incoming dependencies.</p>'}
          ${dependent.length ? `<p style="margin-top:12px"><strong>Blocks ${dependent.length} item${dependent.length === 1 ? "" : "s"}:</strong></p><ul class="dependency-list">${dependent.map((item) => `<li><button class="dependency-item" type="button" data-issue="${item.key}"><span class="dependency-key">${item.key}</span><span>${esc(item.summary)}</span>${statusBadge(item.status)}</button></li>`).join("")}</ul>` : ""}
          ${issue.risk ? `<div class="callout warning" style="margin-bottom:0"><strong>${esc(issue.risk)} · ${esc(riskById(issue.risk)?.title || "Linked risk")}</strong><p>Current exposure: ${riskById(issue.risk)?.score || 0}/25. ${esc(riskById(issue.risk)?.response || "")}</p></div>` : ""}
        </section>
        <section class="drawer-section"><h3>Checklist</h3><ul class="checklist">${issue.checklist.map((item, index) => `<li><input type="checkbox" data-checklist-key="${issue.key}" data-checklist-index="${index}" ${issue.checked[index] ? "checked" : ""} ${can("edit-work", issue) ? "" : "disabled"}><span>${esc(item)}</span>${can("edit-work", issue) ? `<button class="label-remove" type="button" data-action="remove-checklist-item" data-key="${issue.key}" data-index="${index}" aria-label="Remove checklist item">×</button>` : ""}</li>`).join("") || '<li class="empty-inline">No checklist items.</li>'}</ul>
        ${can("edit-work", issue) ? `<form class="subtask-add-form" data-checklist-form="${esc(issue.key)}"><input name="item" placeholder="Add a checklist item" aria-label="New checklist item" required maxlength="140"><button class="button small" type="submit">Add</button></form>` : ""}</section>
        <section class="drawer-section"><h3>Linked knowledge & evidence</h3>
          <button class="linked-object" type="button" data-page="${issue.linkedPage}"><span class="linked-icon">${icon("file-text")}</span><span class="linked-copy"><strong>${esc(linkedPage?.title || "Project Hub")}</strong><span>v${linkedPage?.version || 1} · ${esc(linkedPage?.updated || "Today")}</span></span></button>
          ${attachmentSection("issues", issue.key, can("edit-work", issue))}
        </section>
        <section class="drawer-section"><h3>Comments</h3><ul class="comment-list">${issue.comments.length ? issue.comments.map((comment) => `<li class="comment-item"><div class="comment-head"><strong>${esc(comment.author)}</strong><time>${esc(comment.time)}</time></div><p>${renderCommentText(comment.text)}</p></li>`).join("") : '<li class="empty-state" style="padding:16px">No comments yet.</li>'}</ul>
          <form class="comment-form mention-host" data-issue-comment="${issue.key}"><textarea name="comment" aria-label="Add an issue comment" placeholder="Add a comment or @mention a teammate" data-mention-input></textarea><button class="button primary" type="submit">Comment</button></form>
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

  function openCreateModal(type = "work", options = {}) {
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
        ${createForm(type, options)}
      </div>
    `, false);
  }

  function createForm(type, options = {}) {
    if (type === "page") return `<form id="createEntityForm" data-create-form="page"><div class="form-grid"><div class="field full"><label for="newPageTitle">Page title</label><input id="newPageTitle" name="title" required autofocus maxlength="120" placeholder="e.g., Release readiness checklist"></div><div class="field"><label for="newPageSpace">Space</label><select id="newPageSpace" name="space" data-page-space-select><option value="${esc(activeProject().key)}">${esc(activeProject().name)}</option><option value="${esc(personalSpaceKey(actor()))}">My personal space</option></select></div><div class="field"><label for="newPageTemplate">Template</label><select id="newPageTemplate" name="template">${PAGE_TEMPLATES.map((template) => `<option value="${template.id}" ${options.template === template.id ? "selected" : ""}>${esc(template.name)}</option>`).join("")}</select></div><div class="field"><label for="newPageParent">Parent page</label><select id="newPageParent" name="parent"><option value="">No parent (top level)</option>${orderedProjectPages(activeProject().key).filter((entry) => pageVisibleTo(entry.page)).map(({ page, depth }) => `<option value="${page.id}">${"— ".repeat(depth)}${esc(page.title)}</option>`).join("")}</select></div><div class="field"><label for="newPageOwner">Owner</label><select id="newPageOwner" name="owner">${DemoState.people.map((person) => `<option ${person.name === actor() ? "selected" : ""}>${esc(person.name)}</option>`).join("")}</select></div><div class="field full"><label for="newPageLabels">Labels</label><input id="newPageLabels" name="labels" placeholder="Comma-separated, e.g. evidence, readiness"></div><div class="field full"><label for="newPageSummary">Purpose</label><textarea id="newPageSummary" name="summary" required placeholder="What should this page help the team understand or do?"></textarea></div></div><div class="modal-footer" style="margin:20px -20px -20px"><button class="button" type="button" data-action="close-modal">Cancel</button><button class="button primary" type="submit">Create page</button></div></form>`;
    if (type === "decision") return `<form id="createEntityForm" data-create-form="decision"><div class="form-grid"><div class="field full"><label for="newDecisionTitle">Decision title</label><input id="newDecisionTitle" name="title" required autofocus placeholder="What needs to be decided?"></div><div class="field"><label for="newDecisionOwner">Owner</label><select id="newDecisionOwner" name="owner">${DemoState.people.map((person) => `<option>${esc(person.name)}</option>`).join("")}</select></div><div class="field"><label for="newDecisionApprover">Approver</label><select id="newDecisionApprover" name="approver">${DemoState.people.map((person) => `<option>${esc(person.name)}</option>`).join("")}</select></div><div class="field full"><label for="newDecisionRecommendation">Recommendation</label><textarea id="newDecisionRecommendation" name="recommendation" required placeholder="State the recommended option and why."></textarea></div></div><div class="modal-footer" style="margin:20px -20px -20px"><button class="button" type="button" data-action="close-modal">Cancel</button><button class="button primary" type="submit">Create decision</button></div></form>`;
    const parentCandidates = issuesForProject().filter((item) => !isSubtask(item) && item.type !== "Epic");
    const epicOptions = epicsForProject();
    return `<form id="createEntityForm" data-create-form="work"><div class="form-grid"><div class="field"><label for="newIssueType">Type</label><select id="newIssueType" name="type" data-create-type-select>${["Story", "Task", "Bug", "Sub-task", "Decision Task", "Risk Action", "Epic"].map((value) => `<option>${value}</option>`).join("")}</select></div><div class="field"><label for="newIssuePriority">Priority</label><select id="newIssuePriority" name="priority">${["Medium", "High", "Highest", "Low"].map((value) => `<option>${value}</option>`).join("")}</select></div><div class="field full"><label for="newIssueSummary">Summary</label><input id="newIssueSummary" name="summary" required autofocus placeholder="What needs to be done?"></div><div class="field"><label for="newIssueAssignee">Assignee</label><select id="newIssueAssignee" name="assignee">${DemoState.people.filter((person) => !["Amina Cole", "Jordan Lee"].includes(person.name)).map((person) => `<option>${esc(person.name)}</option>`).join("")}</select></div><div class="field" data-create-sprint-field><label for="newIssueSprint">Sprint</label><select id="newIssueSprint" name="sprint">${sprintsForProject().filter((sprint) => sprint.status !== "completed").map((sprint) => `<option>${esc(sprint.name)}</option>`).join("")}<option>Backlog</option></select></div><div class="field" data-create-parent-field hidden><label for="newIssueParent">Parent work item</label><select id="newIssueParent" name="parent">${parentCandidates.map((item) => `<option value="${esc(item.key)}">${esc(item.key)} · ${esc(item.summary)}</option>`).join("")}</select></div><div class="field" data-create-epic-field><label for="newIssueEpic">Epic</label><select id="newIssueEpic" name="epic"><option value="">No epic</option>${epicOptions.map((epic) => `<option value="${esc(epic.key)}">${esc(epic.key)} · ${esc(epic.summary)}</option>`).join("")}</select></div><div class="field full"><label for="newIssueDescription">Description</label><textarea id="newIssueDescription" name="description" placeholder="Add context, outcome, constraints, and acceptance information."></textarea></div></div><div class="modal-footer" style="margin:20px -20px -20px"><button class="button" type="button" data-action="close-modal">Cancel</button><button class="button primary" type="submit">Create work item</button></div></form>`;
  }

  function htmlToMarkdown(html) {
    const source = document.createElement("template");
    source.innerHTML = sanitizeRichText(html || "");
    const lines = [];
    const inline = (node) => [...node.childNodes].map((child) => {
      if (child.nodeType === Node.TEXT_NODE) return child.textContent;
      const inner = inline(child);
      if (child.tagName === "STRONG") return `**${inner}**`;
      if (child.tagName === "EM") return `*${inner}*`;
      if (child.tagName === "CODE") return "`" + inner + "`";
      if (child.tagName === "A") return `[${inner}](${child.getAttribute("href") || ""})`;
      if (child.tagName === "BR") return "\n";
      return inner;
    }).join("").replace(/\s+/g, " ");
    const walk = (node) => {
      [...node.children].forEach((child) => {
        const tag = child.tagName;
        if (tag === "H2") lines.push("", "## " + inline(child).trim(), "");
        else if (tag === "H3") lines.push("", "### " + inline(child).trim(), "");
        else if (tag === "P") lines.push(inline(child).trim(), "");
        else if (tag === "UL" || tag === "OL") { [...child.children].forEach((item, index) => lines.push((tag === "OL" ? `${index + 1}. ` : "- ") + inline(item).trim())); lines.push(""); }
        else if (tag === "BLOCKQUOTE") lines.push("> " + inline(child).trim(), "");
        else if (tag === "TABLE") {
          const rows = [...child.querySelectorAll("tr")].map((row) => [...row.children].map((cell) => inline(cell).trim()));
          if (rows.length) {
            lines.push("| " + rows[0].join(" | ") + " |");
            lines.push("| " + rows[0].map(() => "---").join(" | ") + " |");
            rows.slice(1).forEach((row) => lines.push("| " + row.join(" | ") + " |"));
            lines.push("");
          }
        }
        else if (tag === "DETAILS") { const summary = child.querySelector("summary"); if (summary) lines.push("", "### " + inline(summary).trim(), ""); walk(child); }
        else if (tag === "DIV" || tag === "SECTION") { const text = inline(child).trim(); if (child.children.length && [...child.children].some((inner) => ["P", "UL", "OL", "H2", "H3", "STRONG"].includes(inner.tagName))) { walk(child); } else if (text) lines.push("> " + text, ""); }
        else { const text = inline(child).trim(); if (text) lines.push(text, ""); }
      });
    };
    walk(source.content);
    return lines.join("\n").replace(/\n{3,}/g, "\n\n").trim();
  }

  function pageMarkdown(page) {
    const body = page.bodyHtml ? htmlToMarkdown(renderPageBodyHtml(page)) : page.content;
    return [`# ${page.title}`, "", `> ${page.summary}`, "", `Owner: ${page.owner} · Version ${page.version} · Updated ${page.updated}${(page.labels || []).length ? ` · Labels: ${page.labels.join(", ")}` : ""}`, "", body].join("\n");
  }

  function exportPageMarkdown(pageId) {
    const page = pageById(pageId);
    if (!page || !pageVisibleTo(page)) return;
    downloadText(`${slug(page.title)}.md`, pageMarkdown(page), "text/markdown;charset=utf-8");
    toast("Page exported", `${page.title} was written to Markdown from the governed record.`, "success");
  }

  function exportSpaceMarkdown(spaceKey) {
    const space = spaceForKey(spaceKey);
    if (!space) return;
    const entries = orderedProjectPages(spaceKey).filter((entry) => pageVisibleTo(entry.page));
    const body = [`# ${space.name} — space export`, "", `${entries.length} pages · exported from the browser-local demonstration record.`, "", ...entries.map(({ page }) => pageMarkdown(page) + "\n\n---\n")];
    downloadText(`${slug(space.name)}-space.md`, body.join("\n"), "text/markdown;charset=utf-8");
    toast("Space exported", `${entries.length} pages were written to a single Markdown file.`, "success");
  }

  function openMovePageModal(pageId) {
    const page = pageById(pageId);
    if (!page || !requireCapability("edit-knowledge", page, "This persona cannot move pages.")) return;
    const blocked = new Set([page.id, ...pageDescendantIds(page.id)]);
    const targets = orderedProjectPages(page.projectKey).filter((entry) => !blocked.has(entry.page.id) && pageVisibleTo(entry.page));
    openModal(`
      <div class="modal-header"><h2>Move page · ${esc(page.title)}</h2><button class="icon-button" type="button" data-action="close-modal" aria-label="Close">×</button></div>
      <form data-move-page="${page.id}">
        <div class="modal-body">
          <div class="field"><label for="movePageParent">New parent</label><select id="movePageParent" name="parent"><option value="">No parent (top level)</option>${targets.map(({ page: item, depth }) => `<option value="${item.id}" ${item.id === page.parent ? "selected" : ""}>${"— ".repeat(depth)}${esc(item.title)}</option>`).join("")}</select></div>
          <p class="field-hint" style="margin-top:10px">The page keeps its children — the whole branch moves together. Moving under a descendant is prevented.</p>
        </div>
        <div class="modal-footer"><button class="button" type="button" data-action="close-modal">Cancel</button><button class="button primary" type="submit">Move page</button></div>
      </form>
    `);
  }

  function copyPage(pageId) {
    const page = pageById(pageId);
    if (!page || !requireCapability("edit-knowledge", page, "This persona cannot copy pages.")) return;
    const id = safeRecordId(slug(page.title) + "-copy", DemoState.pages.length + 1);
    const copy = { ...clone(page), id, title: "Copy of " + page.title, version: 1, updated: "Just now", owner: actor(), restricted: null, reactions: {} };
    DemoState.pages.push(copy);
    DemoState.pageComments[id] = [];
    DemoState.pageVersions[id] = [{ version: 1, author: actor(), time: "Just now", note: `Copied from ${page.title} v${page.version}`, title: copy.title, content: copy.content, bodyHtml: copy.bodyHtml || `<p>${esc(copy.content)}</p>` }];
    recordAudit("Copied knowledge page", `${page.title} → ${copy.title}`);
    DemoState.activePage = id;
    navigate("spaces", { preservePage: true });
    toast("Page copied", `${copy.title} was created as version 1.`, "success");
  }

  function openRestrictionsModal(pageId) {
    const page = pageById(pageId);
    if (!page || !requireCapability("edit-knowledge", page, "This persona cannot change page restrictions.")) return;
    const restricted = page.restricted || { view: [], edit: [] };
    const people = DemoState.people.filter((person) => !["Amina Cole"].includes(person.name));
    const listFor = (mode) => `<div class="restriction-list">${people.map((person) => `<label><input type="checkbox" name="${mode}" value="${esc(person.name)}" ${restricted[mode]?.includes(person.name) ? "checked" : ""}> ${esc(person.name)}</label>`).join("")}</div>`;
    openModal(`
      <div class="modal-header"><h2>Restrictions · ${esc(page.title)}</h2><button class="icon-button" type="button" data-action="close-modal" aria-label="Close">×</button></div>
      <form data-restrictions-form="${page.id}">
        <div class="modal-body">
          <div class="callout" style="margin-top:0"><strong>Simulation only</strong><p>Restrictions are enforced by the persona simulation, not by real access control. Leave a list empty to keep that action open to the space.</p></div>
          <h3 style="margin:14px 0 4px">Who can view</h3>${listFor("view")}
          <h3 style="margin:14px 0 4px">Who can edit</h3>${listFor("edit")}
        </div>
        <div class="modal-footer"><button class="button" type="button" data-action="close-modal">Cancel</button><button class="button primary" type="submit">Save restrictions</button></div>
      </form>
    `, true);
  }

  function openInlineCommentModal(pageId, quote) {
    if (!can("comment")) return;
    openModal(`
      <div class="modal-header"><h2>Inline comment</h2><button class="icon-button" type="button" data-action="close-modal" aria-label="Close">×</button></div>
      <form data-inline-create="${esc(pageId)}">
        <div class="modal-body">
          <blockquote style="border-left:3px solid var(--warning,#eda242);padding:6px 12px;color:var(--muted);font-size:10px;font-style:italic">“${esc(quote.length > 160 ? quote.slice(0, 160) + "…" : quote)}”</blockquote>
          <input type="hidden" name="quote" value="${esc(quote.slice(0, 300))}">
          <div class="field mention-host" style="margin-top:12px"><label for="inlineCommentText">Comment</label><textarea id="inlineCommentText" name="comment" required autofocus placeholder="Comment on the selected text — @mention a teammate" data-mention-input></textarea></div>
        </div>
        <div class="modal-footer"><button class="button" type="button" data-action="close-modal">Cancel</button><button class="button primary" type="submit">Comment</button></div>
      </form>
    `);
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
          <div class="field" style="margin-top:14px"><span class="field-label">Content</span><div class="editor-toolbar" aria-label="Formatting toolbar"><button type="button" data-command="bold" aria-label="Bold">B</button><button type="button" data-command="italic" aria-label="Italic"><em>I</em></button><button type="button" data-command="insertUnorderedList" aria-label="Bulleted list">• List</button><button type="button" data-command="formatBlock" data-value="h2" aria-label="Heading level 2">H2</button><button type="button" data-command="formatBlock" data-value="h3" aria-label="Heading level 3">H3</button><button type="button" data-command="createLink" aria-label="Add link">Link</button><span class="toolbar-divider" aria-hidden="true"></span><button type="button" data-macro-insert="toc" aria-label="Insert table of contents">TOC</button><button type="button" data-macro-insert="panel-info" aria-label="Insert info panel">Panel</button><button type="button" data-macro-insert="panel-warning" aria-label="Insert warning panel">Warn</button><button type="button" data-macro-insert="expand" aria-label="Insert expandable section">Expand</button><button type="button" data-macro-insert="status" aria-label="Insert status lozenge">Status</button><button type="button" data-macro-insert="table" aria-label="Insert table">Table</button><button type="button" data-macro-insert="work-chip" aria-label="Insert live work-item chip">Work</button></div><div id="pageEditor" class="page-editor" contenteditable="true" role="textbox" aria-multiline="true" data-page-draft-editor="${page.id}">${initialHtml}</div><span class="field-hint">Tip: type {{SMN-184}} anywhere to embed a live work-item chip.</span><span class="local-save-status" data-page-draft-state>${draft ? "Draft restored" : "Autosave ready"}</span></div>
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
    const inlineDiff = renderWordDiff(stripHtml(oldHtml), stripHtml(currentHtml));
    openModal(`<div class="modal-header"><h2>Compare page versions</h2><button class="icon-button" type="button" data-action="close-modal" aria-label="Close">×</button></div><div class="modal-body"><div class="version-compare" data-version-compare><div class="version-compare-toolbar"><span class="tag">v${version.version} · ${esc(version.note)}</span><span>compared with</span><span class="tag">v${page.version} · Current</span></div>${inlineDiff ? `<div class="diff-panel"><h3 style="margin:12px 0 6px;font-size:11px">Changes, word by word</h3>${inlineDiff}</div>` : ""}<details class="diff-full-versions"${inlineDiff ? "" : " open"}><summary>Full versions side by side</summary><div class="version-compare-grid"><section class="version-column"><div class="version-column-head"><strong>v${version.version}</strong><span>${esc(version.author)}</span></div><div class="version-diff"><div class="diff-line" data-diff="removed"><span class="diff-gutter">−</span><div>${oldHtml}</div></div></div></section><section class="version-column"><div class="version-column-head"><strong>v${page.version}</strong><span>Current governed version</span></div><div class="version-diff"><div class="diff-line" data-diff="added"><span class="diff-gutter">+</span><div>${currentHtml}</div></div></div></section></div></details></div></div><div class="modal-footer">${can("edit-knowledge") ? `<button class="button" type="button" data-action="restore-version" data-page-id="${page.id}" data-version="${version.version}">Restore v${version.version} as draft</button>` : ""}<button class="button primary" type="button" data-action="page-history" data-page-id="${page.id}">Back to history</button></div>`, true);
  }

  function compareSelectedVersions(pageId, versionNumbers) {
    const versions = DemoState.pageVersions[pageId] || [];
    const selected = versionNumbers.map((number) => versions.find((item) => String(item.version) === String(number))).filter(Boolean).sort((a, b) => Number(a.version) - Number(b.version));
    if (selected.length !== 2) { toast("Select two versions", "Choose exactly two historical snapshots to compare."); return; }
    const [older, newer] = selected;
    const olderHtml = sanitizeRichText(older.bodyHtml || `<p>${esc(older.content || "")}</p>`);
    const newerHtml = sanitizeRichText(newer.bodyHtml || `<p>${esc(newer.content || "")}</p>`);
    const inlineDiff = renderWordDiff(stripHtml(olderHtml), stripHtml(newerHtml));
    openModal(`<div class="modal-header"><h2>Compare v${older.version} with v${newer.version}</h2><button class="icon-button" type="button" data-action="close-modal" aria-label="Close">×</button></div><div class="modal-body"><div class="version-compare" data-version-compare><div class="version-compare-toolbar"><span class="tag">v${older.version} · ${esc(older.note)}</span><span>compared with</span><span class="tag">v${newer.version} · ${esc(newer.note)}</span></div>${inlineDiff ? `<div class="diff-panel"><h3 style="margin:12px 0 6px;font-size:11px">Changes, word by word</h3>${inlineDiff}</div>` : ""}<details class="diff-full-versions"${inlineDiff ? "" : " open"}><summary>Full versions side by side</summary><div class="version-compare-grid"><section class="version-column"><div class="version-column-head"><strong>v${older.version}</strong><span>${esc(older.author)}</span></div><div class="version-diff"><div class="diff-line" data-diff="removed"><span class="diff-gutter">−</span><div>${olderHtml}</div></div></div></section><section class="version-column"><div class="version-column-head"><strong>v${newer.version}</strong><span>${esc(newer.author)}</span></div><div class="version-diff"><div class="diff-line" data-diff="added"><span class="diff-gutter">+</span><div>${newerHtml}</div></div></div></section></div></details></div></div><div class="modal-footer"><button class="button" type="button" data-action="page-history" data-page-id="${pageId}">Back to history</button></div>`, true);
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
    issuesForProject(sprint.projectKey).filter(isSubtask).forEach((subtask) => {
      const parent = issueByKey(subtask.parent);
      if (parent) subtask.sprint = parent.sprint;
      if (subtask.status !== "Done" && subtask.sprint === sprint.name) subtask.sprint = future.name;
    });
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
    if (issue.parent && status === "Done") {
      const parent = issueByKey(issue.parent);
      const siblings = subtasksOf(issue.parent);
      if (parent && parent.status !== "Done" && siblings.length && siblings.every((child) => child.status === "Done")) {
        toast("All subtasks complete", `Every subtask of ${parent.key} is done — consider moving the parent forward.`, "success");
      }
    }
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
      const rawCandidate = parsed.state || parsed;
      if (parsed.state && parsed.product !== "Unified Project Management Suite") throw new Error("This export was not created by the Unified Project Management Suite demo.");
      const candidate = migrateLegacySnapshot({ ...rawCandidate, schemaVersion: Number(parsed.schemaVersion || rawCandidate.schemaVersion) });
      const validationError = validateStateCandidate(candidate);
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
    const pageMatches = canViewRoute("spaces") ? visiblePages(DemoState.pages.filter((page) => !page.archived)).filter((page) => pageSearchText(page).toLowerCase().includes(q)).slice(0, 5) : [];
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
    const footer = canViewRoute("search") ? `<button class="search-result" type="button" data-action="open-search-page"><span class="search-result-icon">${icon("search")}</span><span class="search-result-copy"><strong>See all results for “${esc(query.trim())}”</strong><span>Full-text search across page content, work, blog, and decisions</span></span><span class="search-result-meta">Enter ${icon("arrow-right")}</span></button>` : "";
    searchResults.innerHTML = (groups.length ? groups.join("") : '<div class="empty-state" style="padding:24px"><strong>No quick matches</strong>Try the full search for content inside pages.</div>') + footer;
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

    const macroInsert = event.target.closest("[data-macro-insert]");
    if (macroInsert) {
      event.preventDefault();
      const editor = document.getElementById("pageEditor");
      if (!editor) return;
      editor.focus();
      const kind = macroInsert.dataset.macroInsert;
      const snippets = {
        "toc": '<div data-macro="toc"></div><p></p>',
        "panel-info": '<div class="callout"><strong>Note</strong><p>Explain the context the reader needs.</p></div><p></p>',
        "panel-warning": '<div class="callout warning"><strong>Watch out</strong><p>Name the exposure and its owner.</p></div><p></p>',
        "expand": '<details class="macro-expand"><summary>More detail</summary><p>Collapsed content readers can open when they need it.</p></details><p></p>',
        "status": '<span class="lozenge lz-amber">In review</span>&nbsp;',
        "table": '<table><thead><tr><th>Column</th><th>Column</th></tr></thead><tbody><tr><td>Row</td><td>Row</td></tr><tr><td>Row</td><td>Row</td></tr></tbody></table><p></p>',
        "work-chip": (() => { const first = issuesForProject()[0]; return first ? `{{${first.key}}}&nbsp;` : ""; })()
      };
      document.execCommand("insertHTML", false, snippets[kind] || "");
      announce("Macro inserted.");
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

    const mentionPick = event.target.closest("[data-mention-pick]");
    if (mentionPick) {
      event.preventDefault();
      const host = mentionPick.closest(".mention-host");
      const textarea = host?.querySelector("[data-mention-input]");
      if (textarea) {
        const caret = textarea.selectionStart ?? textarea.value.length;
        const upTo = textarea.value.slice(0, caret).replace(/@[A-Za-z]{0,24}$/, "@" + mentionPick.dataset.mentionPick + " ");
        textarea.value = upTo + textarea.value.slice(caret);
        textarea.focus();
        textarea.setSelectionRange(upTo.length, upTo.length);
      }
      host?.querySelector(".mention-menu")?.remove();
      return;
    }
    if (!event.target.closest(".mention-host")) document.querySelectorAll(".mention-menu").forEach((menu) => menu.remove());
    const actionTarget = event.target.closest("[data-action]");
    if (actionTarget) {
      event.preventDefault();
      const action = actionTarget.dataset.action;
      if (action === "open-create") openCreateModal("work");
      else if (action === "open-create-project") openProjectCreate();
      else if (action === "create-page") openCreateModal("page", { template: actionTarget.dataset.template });
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
      else if (action === "mark-all-read") { DemoState.notifications.filter(canOpenNotification).forEach((item) => { item.unread = false; }); render(); }
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
      else if (action === "toggle-tree") {
        const id = actionTarget.dataset.pageId;
        DemoState.pageTreeCollapsed[id] = !DemoState.pageTreeCollapsed[id];
        persistState();
        render();
      }
      else if (action === "toggle-watch-page") {
        const page = pageById(actionTarget.dataset.pageId);
        if (!page) return;
        const list = DemoState.watches.pages[page.id] = DemoState.watches.pages[page.id] || [];
        const index = list.indexOf(actor());
        if (index >= 0) list.splice(index, 1); else list.push(actor());
        persistState();
        render();
        toast(index >= 0 ? "Watch removed" : "Watching page", index >= 0 ? `You will no longer be notified about ${page.title}.` : `You will be notified when ${page.title} is published or discussed.`, "success");
      }
      else if (action === "toggle-watch-space") {
        const key = actionTarget.dataset.spaceKey;
        const list = DemoState.watches.spaces[key] = DemoState.watches.spaces[key] || [];
        const index = list.indexOf(actor());
        if (index >= 0) list.splice(index, 1); else list.push(actor());
        persistState();
        render();
        toast(index >= 0 ? "Space watch removed" : "Watching space", index >= 0 ? "Space notifications are off for this persona." : "You will be notified about page publishes across this space.", "success");
      }
      else if (action === "react-page" || action === "react-blog") {
        const record = action === "react-page" ? pageById(actionTarget.dataset.pageId) : DemoState.blogPosts.find((item) => item.id === actionTarget.dataset.postId);
        if (!record) return;
        record.reactions = record.reactions || {};
        const names = record.reactions[actionTarget.dataset.emoji] = record.reactions[actionTarget.dataset.emoji] || [];
        const index = names.indexOf(actor());
        if (index >= 0) names.splice(index, 1); else names.push(actor());
        persistState();
        render();
      }
      else if (action === "remove-label") {
        const page = pageById(actionTarget.dataset.pageId);
        if (!page || !requireCapability("edit-knowledge", page, "This persona cannot edit labels.")) return;
        page.labels = (page.labels || []).filter((label) => label !== actionTarget.dataset.label);
        recordAudit("Removed page label", `${page.title} · ${actionTarget.dataset.label}`);
        persistState();
        render();
      }
      else if (action === "open-search-page") {
        DemoState.searchQuery = globalSearch.value.trim();
        globalSearch.value = "";
        searchResults.hidden = true;
        navigate("search");
      }
      else if (action === "create-blog-post") openBlogEditor();
      else if (action === "edit-blog-post") openBlogEditor(actionTarget.dataset.postId);
      else if (action === "move-page") openMovePageModal(actionTarget.dataset.pageId);
      else if (action === "copy-page") copyPage(actionTarget.dataset.pageId);
      else if (action === "page-restrictions") openRestrictionsModal(actionTarget.dataset.pageId);
      else if (action === "export-page") exportPageMarkdown(actionTarget.dataset.pageId);
      else if (action === "export-space") exportSpaceMarkdown(actionTarget.dataset.spaceKey);
      else if (action === "reply-page-comment" || action === "reply-inline-comment") {
        const selector = action === "reply-page-comment" ? `[data-page-comment-reply="${actionTarget.dataset.pageId}"][data-thread="${actionTarget.dataset.thread}"]` : `[data-inline-reply="${actionTarget.dataset.pageId}"][data-thread="${actionTarget.dataset.thread}"]`;
        const form = document.querySelector(selector);
        if (form) { form.hidden = !form.hidden; if (!form.hidden) form.querySelector("textarea")?.focus(); }
      }
      else if (action === "resolve-page-comment") {
        const thread = (DemoState.pageComments[actionTarget.dataset.pageId] || []).find((comment) => String(comment.id) === actionTarget.dataset.thread);
        if (!thread) return;
        thread.resolved = true;
        recordAudit("Resolved page comment", pageById(actionTarget.dataset.pageId)?.title || actionTarget.dataset.pageId);
        persistState();
        render();
      }
      else if (action === "resolve-inline-comment") {
        const thread = (DemoState.pageInlineComments[actionTarget.dataset.pageId] || []).find((item) => item.id === actionTarget.dataset.thread);
        if (!thread) return;
        thread.resolved = true;
        recordAudit("Resolved inline comment", pageById(actionTarget.dataset.pageId)?.title || actionTarget.dataset.pageId);
        persistState();
        render();
      }
      else if (action === "remove-checklist-item") {
        const issue = issueByKey(actionTarget.dataset.key);
        if (!issue || !requireCapability("edit-work", issue, "This persona cannot change this checklist.")) return;
        const index = Number(actionTarget.dataset.index);
        issue.checklist.splice(index, 1);
        issue.checked.splice(index, 1);
        issue.history.unshift(`Checklist item removed by ${actor()}`);
        persistState();
        openIssue(issue.key);
      }
      else if (action === "remove-attachment") {
        const kind = actionTarget.dataset.kind;
        const record = actionTarget.dataset.record;
        const list = (DemoState.attachments[kind] || {})[record] || [];
        const file = list.find((item) => item.id === actionTarget.dataset.file);
        if (kind === "issues") { const issue = issueByKey(record); if (!issue || !requireCapability("edit-work", issue, "This persona cannot manage attachments here.")) return; }
        else if (!requireCapability("edit-knowledge", pageById(record), "This persona cannot manage attachments here.")) return;
        DemoState.attachments[kind][record] = list.filter((item) => item.id !== actionTarget.dataset.file);
        recordAudit("Removed attachment", `${record} · ${file?.name || "file"}`);
        persistState();
        if (kind === "issues") openIssue(record);
        else render();
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
    const labelTarget = event.target.closest("[data-label-search]");
    if (labelTarget) {
      event.preventDefault();
      if (!canViewRoute("search")) return;
      DemoState.searchQuery = "label:" + labelTarget.dataset.labelSearch;
      navigate("search");
      return;
    }
    const blogTarget = event.target.closest("[data-blog-post]");
    if (blogTarget) {
      event.preventDefault();
      DemoState.activeBlogPost = blogTarget.dataset.blogPost;
      DemoState.activePage = null;
      navigate("spaces", { preservePage: true });
      return;
    }
    const personalSpaceTarget = event.target.closest("[data-personal-space]");
    if (personalSpaceTarget) {
      event.preventDefault();
      const key = personalSpaceTarget.dataset.personalSpace;
      const first = DemoState.pages.find((page) => page.projectKey === key && !page.archived);
      if (first) { DemoState.activePage = first.id; navigate("spaces", { preservePage: true }); }
      else if (can("edit-knowledge")) openCreateModal("page");
      return;
    }
    const inlineAnchor = event.target.closest(".inline-anchor");
    if (inlineAnchor) {
      const thread = document.querySelector(`[data-inline-thread="${inlineAnchor.dataset.inlineRef}"]`);
      if (thread) { thread.scrollIntoView({ behavior: "smooth", block: "center" }); thread.classList.add("active"); }
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
    if (event.target.matches("[data-create-type-select]")) {
      const type = event.target.value;
      const modal = event.target.closest("form");
      const parentField = modal?.querySelector("[data-create-parent-field]");
      const sprintField = modal?.querySelector("[data-create-sprint-field]");
      const epicField = modal?.querySelector("[data-create-epic-field]");
      if (parentField) parentField.hidden = type !== "Sub-task";
      if (sprintField) sprintField.hidden = type === "Sub-task" || type === "Epic";
      if (epicField) epicField.hidden = type === "Sub-task" || type === "Epic";
      return;
    }
    if (event.target.matches('[data-action-toggle="board-subtasks"]')) {
      DemoState.boardShowSubtasks = event.target.checked;
      persistState();
      render();
      return;
    }
    if (event.target.matches("[data-attach-kind]")) {
      const input = event.target;
      const file = input.files?.[0];
      input.value = "";
      if (!file) return;
      if (file.size > 384 * 1024) { toast("File too large", "Attachments in this browser-local demo are limited to 384 KB.", "danger"); return; }
      const kind = input.dataset.attachKind;
      const record = input.dataset.attachRecord;
      const reader = new FileReader();
      reader.onload = () => {
        DemoState.attachments[kind] = DemoState.attachments[kind] || {};
        const list = DemoState.attachments[kind][record] = DemoState.attachments[kind][record] || [];
        if (list.length >= 8) { toast("Attachment limit reached", "This record already has 8 browser-local attachments.", "danger"); return; }
        list.push({ id: `att-${Date.now()}-${Math.floor(Math.random() * 100000)}`, name: file.name.slice(0, 160), size: file.size, type: file.type || "application/octet-stream", dataUrl: String(reader.result), addedBy: actor(), time: "Just now" });
        recordAudit("Attached file", `${record} · ${file.name.slice(0, 80)}`);
        try { persistState(); } catch (_) { /* quota */ }
        if (kind === "issues") openIssue(record);
        else render();
        toast("File attached", `${file.name.slice(0, 60)} is stored in this browser only.`, "success");
      };
      reader.readAsDataURL(file);
      return;
    }
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
    if (event.target.matches("[data-mention-input]")) {
      const textarea = event.target;
      const host = textarea.closest(".mention-host");
      let menu = host?.querySelector(".mention-menu");
      const upTo = textarea.value.slice(0, textarea.selectionStart ?? textarea.value.length);
      const match = upTo.match(/@([A-Za-z]{0,24})$/);
      if (!host || !match) { menu?.remove(); }
      else {
        const query = match[1].toLowerCase();
        const options = DemoState.people.filter((person) => person.name.toLowerCase().startsWith(query) || person.name.split(" ").some((part) => part.toLowerCase().startsWith(query))).slice(0, 5);
        if (!options.length) { menu?.remove(); }
        else {
          if (!menu) { menu = document.createElement("div"); menu.className = "mention-menu"; host.appendChild(menu); }
          menu.innerHTML = options.map((person) => `<button type="button" data-mention-pick="${esc(person.name)}">${avatar(person.name, "table-avatar")}<span>${esc(person.name)}</span><small>${esc(person.role)}</small></button>`).join("");
        }
      }
    }
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
      notifyPeople(mentionedPeople(text), { kind: "issue", target: issue.key, title: `${actor()} mentioned you on ${issue.key}`, detail: text.slice(0, 140) });
      recordAudit("Commented on work item", issue.key);
      openIssue(issue.key);
      persistState();
      toast("Comment added", issue.key + " activity updated.", "success");
      return;
    }
    if (form.dataset.subtaskForm) {
      event.preventDefault();
      const parent = issueByKey(form.dataset.subtaskForm);
      if (!parent || isSubtask(parent)) return;
      if (!(can("edit-work", parent) || can("create-work"))) { toast("Subtask not created", "This persona cannot add subtasks to this work item."); return; }
      const data = Object.fromEntries(new FormData(form).entries());
      const summary = String(data.summary || "").trim();
      if (!summary) return;
      const projectKey = recordProjectKey(parent);
      const next = Math.max(99, ...issuesForProject(projectKey).map((issue) => Number(issue.key.split("-").pop()) || 0)) + 1;
      const key = projectKey + "-" + next;
      DemoState.issues.push({
        projectKey, key, summary, type: "Sub-task", status: "To Do", priority: parent.priority,
        assignee: data.assignee || parent.assignee, reporter: actor(), sprint: parent.sprint, epic: parent.epic || "—", parent: parent.key,
        points: 1, due: "Not set", description: `Subtask of ${parent.key} — ${parent.summary}.`, dependencies: [], linkedPage: parent.linkedPage, risk: "", milestone: parent.milestone || "Not set",
        checklist: [], checked: [], comments: [], history: [`Created by ${actor()}`]
      });
      parent.history.unshift(`Subtask ${key} added by ${actor()}`);
      recordAudit("Created subtask", key);
      render();
      openIssue(parent.key);
      toast(key + " created", `Subtask added under ${parent.key}.`, "success");
      return;
    }
    if (form.dataset.checklistForm) {
      event.preventDefault();
      const issue = issueByKey(form.dataset.checklistForm);
      if (!issue || !requireCapability("edit-work", issue, "This persona cannot change this checklist.")) return;
      const item = String(new FormData(form).get("item") || "").trim();
      if (!item) return;
      issue.checklist.push(item);
      issue.checked.push(false);
      issue.history.unshift(`Checklist item added by ${actor()}`);
      persistState();
      openIssue(issue.key);
      return;
    }
    if (form.dataset.pageComment) {
      event.preventDefault();
      const text = new FormData(form).get("comment").trim();
      if (!text) return;
      const pageId = form.dataset.pageComment;
      const page = pageById(pageId);
      DemoState.pageComments[pageId] = DemoState.pageComments[pageId] || [];
      DemoState.pageComments[pageId].unshift({ id: `pc-${Date.now()}`, author: actor(), time: "Just now", text, replies: [], resolved: false });
      notifyPeople(mentionedPeople(text), { kind: "page", target: pageId, title: `${actor()} mentioned you on ${page?.title || pageId}`, detail: text.slice(0, 140) });
      if (page) notifyPageWatchers(page, `New comment on ${page.title}`, `${actor()}: ${text.slice(0, 120)}`);
      recordAudit("Commented on knowledge page", page?.title || pageId);
      render();
      toast("Comment added", "Page discussion updated.", "success");
      return;
    }
    if (form.dataset.pageCommentReply || form.dataset.inlineReply) {
      event.preventDefault();
      const text = String(new FormData(form).get("comment") || "").trim();
      if (!text) return;
      const pageId = form.dataset.pageCommentReply || form.dataset.inlineReply;
      const threadId = form.dataset.thread;
      const collection = form.dataset.pageCommentReply ? (DemoState.pageComments[pageId] || []) : (DemoState.pageInlineComments[pageId] || []);
      const thread = collection.find((item) => String(item.id) === threadId);
      if (!thread) return;
      thread.replies = thread.replies || [];
      thread.replies.push({ author: actor(), time: "Just now", text });
      notifyPeople([thread.author, ...mentionedPeople(text)], { kind: "page", target: pageId, title: `${actor()} replied on ${pageById(pageId)?.title || pageId}`, detail: text.slice(0, 140) });
      recordAudit("Replied to a comment", pageById(pageId)?.title || pageId);
      persistState();
      render();
      return;
    }
    if (form.dataset.inlineCreate) {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      const text = String(data.comment || "").trim();
      const pageId = form.dataset.inlineCreate;
      const page = pageById(pageId);
      if (!text || !page) return;
      DemoState.pageInlineComments[pageId] = DemoState.pageInlineComments[pageId] || [];
      DemoState.pageInlineComments[pageId].push({ id: `il-${Date.now()}`, quote: String(data.quote || "").slice(0, 300), author: actor(), time: "Just now", text, resolved: false, replies: [] });
      notifyPeople([page.owner, ...mentionedPeople(text)], { kind: "page", target: pageId, title: `${actor()} commented inline on ${page.title}`, detail: text.slice(0, 140) });
      recordAudit("Added inline comment", page.title);
      closeModal();
      render();
      toast("Inline comment added", "The selected text is now highlighted with an open thread.", "success");
      return;
    }
    if (form.dataset.blogComment !== undefined && form.dataset.blogComment !== "") {
      event.preventDefault();
      const text = String(new FormData(form).get("comment") || "").trim();
      const post = DemoState.blogPosts.find((item) => item.id === form.dataset.blogComment);
      if (!text || !post) return;
      post.comments = post.comments || [];
      post.comments.push({ author: actor(), time: "Just now", text });
      notifyPeople([post.author, ...mentionedPeople(text)], { kind: "page", target: pageById(projectHubId(post.projectKey)) ? projectHubId(post.projectKey) : "program-hub", title: `${actor()} commented on “${post.title}”`, detail: text.slice(0, 140) });
      recordAudit("Commented on blog post", post.title);
      persistState();
      render();
      return;
    }
    if (form.dataset.blogForm !== undefined) {
      event.preventDefault();
      if (!requireCapability("edit-knowledge", null, "This persona cannot write blog posts.")) return;
      const data = Object.fromEntries(new FormData(form).entries());
      const editor = document.getElementById("pageEditor");
      const bodyHtml = sanitizeRichText(editor?.innerHTML || "");
      const title = String(data.title || "").trim();
      if (!title) return;
      const existing = form.dataset.blogForm ? DemoState.blogPosts.find((item) => item.id === form.dataset.blogForm) : null;
      if (existing) {
        Object.assign(existing, { title, bodyHtml, time: "Just now" });
        recordAudit("Updated blog post", title);
      } else {
        const id = `blog-${Date.now()}`;
        DemoState.blogPosts.unshift({ id, projectKey: activeProject().key, title, author: actor(), time: "Just now", bodyHtml, reactions: {}, comments: [] });
        DemoState.activeBlogPost = id;
        recordAudit("Published blog post", title);
      }
      closeModal();
      navigate("spaces", { preservePage: true });
      toast(existing ? "Post updated" : "Post published", `${title} is visible in the space blog.`, "success");
      return;
    }
    if (form.dataset.searchPageForm !== undefined) {
      event.preventDefault();
      DemoState.searchQuery = String(new FormData(form).get("q") || "").trim();
      render();
      return;
    }
    if (form.dataset.movePage) {
      event.preventDefault();
      const page = pageById(form.dataset.movePage);
      if (!page || !requireCapability("edit-knowledge", page)) return;
      const data = Object.fromEntries(new FormData(form).entries());
      const parentId = data.parent || null;
      if (parentId && (parentId === page.id || pageDescendantIds(page.id).includes(parentId))) { toast("Move blocked", "A page cannot move under itself or its own descendants.", "danger"); return; }
      page.parent = parentId;
      page.depth = pageDepthOf(page);
      pageDescendantIds(page.id).forEach((id) => { const child = pageById(id); if (child) child.depth = pageDepthOf(child); });
      recordAudit("Moved knowledge page", page.title);
      closeModal();
      render();
      toast("Page moved", `${page.title} now sits ${parentId ? "under " + (pageById(parentId)?.title || "its new parent") : "at the top level"}.`, "success");
      return;
    }
    if (form.dataset.restrictionsForm) {
      event.preventDefault();
      const page = pageById(form.dataset.restrictionsForm);
      if (!page || !requireCapability("edit-knowledge", page)) return;
      const formData = new FormData(form);
      const view = formData.getAll("view").map(String);
      const edit = formData.getAll("edit").map(String);
      page.restricted = view.length || edit.length ? { view, edit } : null;
      recordAudit("Updated page restrictions", page.title);
      closeModal();
      render();
      toast("Restrictions saved", page.restricted ? "The page now shows a restricted marker in the tree." : "The page is open to the space again.", "success");
      return;
    }
    if (form.dataset.addLabel) {
      event.preventDefault();
      const page = pageById(form.dataset.addLabel);
      if (!page || !requireCapability("edit-knowledge", page, "This persona cannot edit labels.")) return;
      const label = normalizeLabelInput(new FormData(form).get("label"), 1)[0];
      if (!label) return;
      page.labels = page.labels || [];
      if (!page.labels.includes(label)) page.labels.push(label);
      recordAudit("Added page label", `${page.title} · ${label}`);
      persistState();
      render();
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
        const isEpic = data.type === "Epic";
        const isNewSubtask = data.type === "Sub-task";
        const parentIssue = isNewSubtask ? issueByKey(data.parent) : null;
        if (isNewSubtask && (!parentIssue || isSubtask(parentIssue) || recordProjectKey(parentIssue) !== projectKey)) { toast("Subtask needs a parent", "Choose a non-subtask parent work item in this project.", "danger"); return; }
        const sprint = isEpic ? "Portfolio backlog" : isNewSubtask ? parentIssue.sprint : data.sprint;
        const epic = isEpic ? "—" : isNewSubtask ? (parentIssue.epic || "—") : (data.epic && issueByKey(data.epic) ? data.epic : "—");
        DemoState.issues.push({
          projectKey, key, summary: data.summary, type: data.type, status: !isEpic && sprint === activeSprint()?.name ? "Ready" : "To Do", priority: data.priority,
          assignee: data.assignee, reporter: actor(), sprint, epic, parent: isNewSubtask ? parentIssue.key : null, points: isEpic ? 8 : isNewSubtask ? 1 : 3, due: "Not set",
          description: data.description || "New work item created in the interactive prototype.", dependencies: [], linkedPage: isNewSubtask ? parentIssue.linkedPage : projectHubId(projectKey), risk: "", milestone: "Not set",
          checklist: [], checked: [], comments: [], history: [`Created by ${actor()}`]
        });
        if (isNewSubtask) parentIssue.history.unshift(`Subtask ${key} added by ${actor()}`);
        recordAudit("Created work item", key);
        closeModal();
        render();
        toast(key + " created", isNewSubtask ? `Subtask added under ${parentIssue.key}.` : isEpic ? "The new epic is available in the Epics panel." : "The new work item is available in the backlog and search.", "success");
        openIssue(key);
      } else if (form.dataset.createForm === "page") {
        if (!requireCapability("edit-knowledge")) return;
        const id = safeRecordId(slug(data.title), DemoState.pages.length + 1);
        const spaceKey = isPersonalSpaceKey(data.space) ? personalSpaceKey(actor()) : (projectByKey(data.space) ? data.space : activeProject().key);
        const parentPage = !isPersonalSpaceKey(spaceKey) && data.parent ? pageById(data.parent) : null;
        const parent = parentPage && parentPage.projectKey === spaceKey ? parentPage.id : null;
        const template = PAGE_TEMPLATES.find((item) => item.id === data.template) || PAGE_TEMPLATES[0];
        const labels = normalizeLabelInput(data.labels);
        const bodyHtml = template.bodyHtml || `<p>${esc(data.summary)}</p>`;
        const record = { projectKey: spaceKey, id, title: data.title, parent, depth: parent ? pageDepthOf({ parent }) : 0, owner: data.owner, updated: "Just now", version: 1, summary: data.summary, content: data.summary, labels, bodyHtml, reactions: {}, restricted: null };
        DemoState.pages.push(record);
        DemoState.pageComments[id] = [];
        DemoState.pageVersions[id] = [{ version: 1, author: actor(), time: "Just now", note: template.id === "blank" ? "Initial version" : `Created from the ${template.name} template`, title: data.title, content: data.summary, bodyHtml }];
        recordAudit("Created knowledge page", data.title);
        closeModal();
        DemoState.activePage = id;
        navigate("spaces", { preservePage: true });
        toast("Page created", `${data.title} is now in ${spaceForKey(spaceKey)?.name || spaceKey}.`, "success");
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
      notifyPageWatchers(page, `${page.title} is now v${page.version}`, `${actor()} published: ${String(data.get("note") || "Content updated").slice(0, 120)}`);
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
    if (event.key === "Enter" && document.activeElement === globalSearch && canViewRoute("search")) {
      event.preventDefault();
      DemoState.searchQuery = globalSearch.value.trim();
      globalSearch.value = "";
      searchResults.hidden = true;
      navigate("search");
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
    if ((event.key === "Enter" || event.key === " ") && event.target.matches("[data-issue], [data-project], [data-space], [data-personal-space], [data-page], [data-blog-post], [data-decision], [data-risk], [data-person]") && event.target.tagName !== "BUTTON") {
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
