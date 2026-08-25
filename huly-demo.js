(() => {
  "use strict";

  const STORAGE_KEY = "huly-static-evaluation-v1";
  const APP_VERSION = 3;

  const statusDefinitions = {
    backlog: { label: "Backlog", color: "#8b94a6", tint: "rgba(139, 148, 166, 0.14)" },
    todo: { label: "Todo", color: "#a4abbb", tint: "rgba(164, 171, 187, 0.12)" },
    "in-progress": { label: "In progress", color: "#5683da", tint: "rgba(86, 131, 218, 0.16)" },
    "in-review": { label: "Under review", color: "#4ec9ae", tint: "rgba(64, 196, 170, 0.14)" },
    done: { label: "Done", color: "#5fc985", tint: "rgba(84, 200, 128, 0.14)" },
    blocked: { label: "Blocked", color: "#f07a6a", tint: "rgba(240, 106, 90, 0.15)" }
  };

  const priorityLabels = {
    urgent: "Urgent",
    high: "High",
    medium: "Medium",
    low: "Low"
  };

  const people = [
    { id: "maya", name: "Maya Chen", initials: "MC", role: "Workspace lead", department: "Program Delivery", color: "#2c3b5e", ink: "#b9ccf7", capacity: 82 },
    { id: "lena", name: "Lena Ortiz", initials: "LO", role: "Delivery lead", department: "Program Delivery", color: "#553326", ink: "#f7c5ae", capacity: 94 },
    { id: "theo", name: "Theo Bennett", initials: "TB", role: "Systems engineer", department: "Engineering", color: "#24402f", ink: "#a9e3bd", capacity: 76 },
    { id: "dana", name: "Dana Kessler", initials: "DK", role: "Executive sponsor", department: "Leadership", color: "#3d2d52", ink: "#d9c2f5", capacity: 48 },
    { id: "amina", name: "Amina Cole", initials: "AC", role: "Service owner", department: "Operations", color: "#4a3a1e", ink: "#edd49a", capacity: 64 },
    { id: "jordan", name: "Jordan Lee", initials: "JL", role: "Service analyst", department: "Operations", color: "#1f3d45", ink: "#a5dbe8", capacity: 71 },
    { id: "priya", name: "Priya Nair", initials: "PN", role: "Security architect", department: "Engineering", color: "#352a4e", ink: "#cbb8f0", capacity: 88 },
    { id: "marcus", name: "Marcus Reed", initials: "MR", role: "Test lead", department: "Quality", color: "#3a3d22", ink: "#ccd39a", capacity: 69 }
  ];

  const seedState = {
    version: APP_VERSION,
    ui: {
      module: "office",
      currentProject: "SMN",
      trackerTab: "active",
      trackerView: "list",
      trackerSearch: "",
      selectedDoc: "doc-certification-path",
      selectedNotification: "notice-1",
      selectedChannel: "delivery-room",
      selectedDrive: "program-records",
      selectedDepartment: "All",
      inboxFilter: "all",
      driveFilter: "all",
      panelCollapsed: false,
      documentEditing: false
    },
    decision: {
      id: "DEC-014",
      title: "Use the alternate certification evidence path",
      approved: false,
      owner: "dana",
      updated: "Today, 8:52 AM"
    },
    projects: [
      { id: "SMN", name: "Sentinel Mesh Node", short: "Sentinel Mesh", color: "#4c7ce0", health: "amber", progress: 63, owner: "lena", milestone: "Field Release 3", due: "Sep 18" },
      { id: "HRU", name: "Harbor Relay Upgrade", short: "Harbor Relay", color: "#3fae7c", health: "green", progress: 78, owner: "theo", milestone: "Site acceptance", due: "Sep 4" },
      { id: "ZTA", name: "Zero Trust Access", short: "Zero Trust", color: "#8b6ce0", health: "green", progress: 56, owner: "priya", milestone: "Policy cutover", due: "Oct 2" },
      { id: "EGL", name: "Edge Logistics", short: "Edge Logistics", color: "#e08b4c", health: "amber", progress: 41, owner: "amina", milestone: "Warehouse pilot", due: "Oct 16" },
      { id: "BTE", name: "Business Tooling Enablement", short: "Business Tooling", color: "#3e9fc0", health: "green", progress: 84, owner: "jordan", milestone: "Wave 2 adoption", due: "Sep 11" },
      { id: "DCP", name: "Data Center Power", short: "Data Center Power", color: "#a3a84e", health: "green", progress: 69, owner: "marcus", milestone: "Load validation", due: "Sep 25" },
      { id: "OPS", name: "Operations Service Desk", short: "Service Desk", color: "#b06ab3", health: "green", progress: 72, owner: "amina", milestone: "Portal release", due: "Sep 8" }
    ],
    issues: [
      { id: "SMN-184", project: "SMN", title: "Finalize certification evidence package", status: "in-review", priority: "urgent", assignee: "lena", due: "Aug 28", estimate: "8h", spent: "5h", tags: ["CERT", "MILESTONE"], component: "Certification", milestone: "Field Release 3", description: "Complete the controlled evidence package required to hold the September field release. The remaining gap is the external lab artifact for the primary path.", linkedDoc: "doc-certification-path", checklist: [{ text: "Confirm evidence index", done: true }, { text: "Reconcile lab artifact references", done: true }, { text: "Record approval decision", done: false }, { text: "Publish final package", done: false }] },
      { id: "SMN-191", project: "SMN", title: "Validate mesh handoff under degraded transport", status: "in-progress", priority: "high", assignee: "theo", due: "Aug 29", estimate: "13h", spent: "7h", tags: ["TEST", "RADIO"], component: "Networking", milestone: "Field Release 3", description: "Execute the degraded-transport handoff sequence and capture results against the acceptance criteria.", linkedDoc: "doc-mesh-test-plan", checklist: [{ text: "Stage test environment", done: true }, { text: "Run 30-minute degradation profile", done: false }, { text: "Attach results", done: false }] },
      { id: "SMN-202", project: "SMN", title: "Release production image candidate", status: "todo", blocked: true, priority: "high", assignee: "priya", due: "Sep 1", estimate: "5h", spent: "0h", tags: ["RELEASE"], component: "Platform", milestone: "Field Release 3", description: "Promote the signed image after certification evidence is approved.", linkedDoc: "doc-release-readiness", checklist: [{ text: "Confirm signing key", done: true }, { text: "Promote candidate", done: false }] },
      { id: "SMN-207", project: "SMN", title: "Open field deployment window", status: "todo", blocked: true, priority: "high", assignee: "amina", due: "Sep 3", estimate: "3h", spent: "0h", tags: ["FIELD"], component: "Deployment", milestone: "Field Release 3", description: "Coordinate site access and authorize the deployment window.", linkedDoc: "doc-release-readiness", checklist: [{ text: "Validate site roster", done: false }, { text: "Notify deployment team", done: false }] },
      { id: "SMN-213", project: "SMN", title: "Publish operator release notes", status: "todo", blocked: true, priority: "medium", assignee: "maya", due: "Sep 4", estimate: "3h", spent: "0h", tags: ["DOCS"], component: "Enablement", milestone: "Field Release 3", description: "Publish the operator-facing change summary, cautions, and rollback notes.", linkedDoc: "doc-release-readiness", checklist: [{ text: "Draft changes", done: true }, { text: "Add certification statement", done: false }] },
      { id: "SMN-221", project: "SMN", title: "Begin deployment rehearsal", status: "todo", blocked: true, priority: "medium", assignee: "marcus", due: "Sep 6", estimate: "8h", spent: "0h", tags: ["REHEARSAL"], component: "Quality", milestone: "Field Release 3", description: "Run the end-to-end installation and rollback rehearsal using the approved release candidate.", linkedDoc: "doc-release-readiness", checklist: [{ text: "Reserve lab", done: true }, { text: "Load release candidate", done: false }] },
      { id: "SMN-229", project: "SMN", title: "Close high-severity release risk", status: "todo", blocked: true, priority: "urgent", assignee: "lena", due: "Sep 7", estimate: "2h", spent: "0h", tags: ["RISK"], component: "Program", milestone: "Field Release 3", description: "Reassess and close the schedule exposure after the controlled decision is recorded.", linkedDoc: "doc-certification-path", checklist: [{ text: "Verify decision record", done: false }, { text: "Update risk rationale", done: false }] },
      { id: "SMN-236", project: "SMN", title: "Refresh leadership briefing facts", status: "todo", blocked: true, priority: "medium", assignee: "maya", due: "Sep 8", estimate: "2h", spent: "0h", tags: ["BRIEF"], component: "Program", milestone: "Field Release 3", description: "Update the one-page leadership readout using the latest schedule, risk, and work facts.", linkedDoc: "doc-certification-path", checklist: [{ text: "Refresh milestone status", done: false }, { text: "Update intervention request", done: false }] },

      { id: "HRU-71", project: "HRU", title: "Install relay enclosure at Site Bravo", status: "done", priority: "high", assignee: "theo", due: "Aug 22", estimate: "10h", spent: "9h", tags: ["FIELD"], component: "Installation", milestone: "Site acceptance", description: "Install and verify the hardened relay enclosure.", checklist: [{ text: "Inspect mount", done: true }, { text: "Record serials", done: true }] },
      { id: "HRU-82", project: "HRU", title: "Complete antenna alignment survey", status: "in-progress", priority: "medium", assignee: "marcus", due: "Aug 27", estimate: "6h", spent: "3h", tags: ["SURVEY"], component: "RF", milestone: "Site acceptance", description: "Capture final bearing, elevation, and link-margin measurements.", checklist: [{ text: "Calibrate instrument", done: true }, { text: "Capture final readings", done: false }] },
      { id: "HRU-88", project: "HRU", title: "Prepare site acceptance record", status: "todo", priority: "medium", assignee: "maya", due: "Sep 2", estimate: "4h", spent: "0h", tags: ["DOCS"], component: "Quality", milestone: "Site acceptance", description: "Compile acceptance criteria and evidence for customer review.", checklist: [{ text: "Create evidence index", done: false }] },

      { id: "ZTA-40", project: "ZTA", title: "Map privileged access groups", status: "done", priority: "high", assignee: "priya", due: "Aug 20", estimate: "8h", spent: "8h", tags: ["IDENTITY"], component: "Identity", milestone: "Policy cutover", description: "Map privileged groups to the new policy model.", checklist: [{ text: "Approve mapping", done: true }] },
      { id: "ZTA-54", project: "ZTA", title: "Validate conditional access policies", status: "in-review", priority: "high", assignee: "priya", due: "Aug 30", estimate: "13h", spent: "9h", tags: ["SECURITY", "TEST"], component: "Policy", milestone: "Policy cutover", description: "Validate user, device, and location conditions for the cutover policy set.", checklist: [{ text: "Run exception cases", done: true }, { text: "Approve policy set", done: false }] },
      { id: "ZTA-63", project: "ZTA", title: "Draft administrator transition guide", status: "in-progress", priority: "medium", assignee: "maya", due: "Sep 3", estimate: "5h", spent: "2h", tags: ["DOCS"], component: "Enablement", milestone: "Policy cutover", description: "Prepare the transition guide for identity administrators.", checklist: [{ text: "Document rollback", done: false }] },

      { id: "EGL-105", project: "EGL", title: "Confirm handheld scanner inventory", status: "done", priority: "medium", assignee: "jordan", due: "Aug 21", estimate: "4h", spent: "4h", tags: ["ASSET"], component: "Inventory", milestone: "Warehouse pilot", description: "Reconcile pilot scanner serials and ownership.", checklist: [{ text: "Reconcile serial list", done: true }] },
      { id: "EGL-112", project: "EGL", title: "Integrate shipment event feed", status: "in-progress", priority: "high", assignee: "theo", due: "Sep 1", estimate: "16h", spent: "6h", tags: ["INTEGRATION"], component: "Data", milestone: "Warehouse pilot", description: "Connect the pilot event feed to the edge logistics workspace.", checklist: [{ text: "Map event schema", done: true }, { text: "Run end-to-end event", done: false }] },
      { id: "EGL-119", project: "EGL", title: "Approve warehouse pilot roster", status: "backlog", priority: "low", assignee: "amina", due: "Sep 9", estimate: "2h", spent: "0h", tags: ["PILOT"], component: "Operations", milestone: "Warehouse pilot", description: "Approve participants for the first warehouse workflow pilot.", checklist: [{ text: "Collect supervisor nominations", done: false }] },

      { id: "BTE-17", project: "BTE", title: "Publish collaboration workspace template", status: "done", priority: "medium", assignee: "maya", due: "Aug 19", estimate: "5h", spent: "5h", tags: ["TEMPLATE"], component: "Enablement", milestone: "Wave 2 adoption", description: "Publish the governed workspace starter template.", checklist: [{ text: "Approve template", done: true }] },
      { id: "BTE-24", project: "BTE", title: "Complete Wave 2 facilitator training", status: "in-progress", priority: "medium", assignee: "jordan", due: "Aug 28", estimate: "8h", spent: "4h", tags: ["TRAINING"], component: "Adoption", milestone: "Wave 2 adoption", description: "Train the second group of workspace facilitators.", checklist: [{ text: "Deliver session one", done: true }, { text: "Deliver session two", done: false }] },
      { id: "BTE-31", project: "BTE", title: "Retire duplicate status workbook", status: "todo", priority: "low", assignee: "maya", due: "Sep 5", estimate: "3h", spent: "0h", tags: ["CLEANUP"], component: "Governance", milestone: "Wave 2 adoption", description: "Archive the duplicate manual status workbook after adoption checks.", checklist: [{ text: "Verify team adoption", done: false }] },

      { id: "DCP-11", project: "DCP", title: "Record generator load baseline", status: "done", priority: "high", assignee: "marcus", due: "Aug 18", estimate: "6h", spent: "6h", tags: ["TEST"], component: "Power", milestone: "Load validation", description: "Capture the baseline load profile for the standby generator.", checklist: [{ text: "Attach load trace", done: true }] },
      { id: "DCP-18", project: "DCP", title: "Validate automatic transfer sequence", status: "in-progress", priority: "urgent", assignee: "marcus", due: "Aug 27", estimate: "9h", spent: "5h", tags: ["TEST", "SAFETY"], component: "Power", milestone: "Load validation", description: "Execute the automatic transfer test and verify recovery timing.", checklist: [{ text: "Approve safety brief", done: true }, { text: "Run transfer test", done: false }] },
      { id: "DCP-27", project: "DCP", title: "Issue load validation certificate", status: "backlog", priority: "medium", assignee: "lena", due: "Sep 12", estimate: "3h", spent: "0h", tags: ["CERT"], component: "Quality", milestone: "Load validation", description: "Issue the controlled certificate when testing is complete.", checklist: [{ text: "Review evidence", done: false }] },

      { id: "OPS-100", project: "OPS", title: "Configure access request workflow", status: "done", priority: "high", assignee: "jordan", due: "Aug 20", estimate: "8h", spent: "8h", tags: ["SERVICE"], component: "Portal", milestone: "Portal release", description: "Configure routing, approvals, and requester updates for access requests.", checklist: [{ text: "Test approval path", done: true }] },
      { id: "OPS-108", project: "OPS", title: "Validate incident response SLA clock", status: "in-review", priority: "high", assignee: "amina", due: "Aug 29", estimate: "6h", spent: "4h", tags: ["SLA"], component: "Operations", milestone: "Portal release", description: "Validate first-response and resolution timers across priority levels.", checklist: [{ text: "Test pause condition", done: true }, { text: "Approve SLA model", done: false }] },
      { id: "OPS-116", project: "OPS", title: "Publish requester knowledge articles", status: "in-progress", priority: "medium", assignee: "maya", due: "Sep 2", estimate: "7h", spent: "3h", tags: ["KNOWLEDGE"], component: "Portal", milestone: "Portal release", description: "Publish the first set of customer-safe help articles.", checklist: [{ text: "Review access article", done: true }, { text: "Publish software article", done: false }] }
    ],
    documents: [
      {
        id: "doc-certification-path",
        teamspace: "Sentinel Mesh Node",
        title: "Certification path decision record",
        author: "maya",
        updated: "Today, 9:12 AM",
        starred: true,
        version: 7,
        linkedIssues: ["SMN-184", "SMN-202", "SMN-229"],
        raw: "Decision context\nThe primary external laboratory artifact will not arrive before the release control gate. The team needs a controlled alternate evidence path that preserves the acceptance basis.\n\nRecommendation\nUse the alternate package of witnessed test results, signed engineering analysis, and deferred external laboratory confirmation.\n\nApproval conditions\nEvidence index is complete. Quality records the deviation. External confirmation remains tracked to closure.",
        body: `<p><strong>Decision context:</strong> The primary external laboratory artifact will not arrive before the release control gate. The team needs a controlled alternate evidence path that preserves the acceptance basis.</p><blockquote>The decision changes how evidence is accepted; it does not reduce the release acceptance criteria.</blockquote><h2>Options considered</h2><table><thead><tr><th>Option</th><th>Schedule effect</th><th>Control</th></tr></thead><tbody><tr><td>Wait for the primary artifact</td><td>14–21 day delay</td><td>Existing path</td></tr><tr><td>Use alternate evidence</td><td>Release remains achievable</td><td>Deviation record + follow-up</td></tr><tr><td>Remove the affected capability</td><td>5–7 day delay</td><td>Reduced release scope</td></tr></tbody></table><h2>Recommendation</h2><p>Use the alternate package of witnessed test results, signed engineering analysis, and deferred external laboratory confirmation. <span class="mention">@Dana Kessler</span> is the accountable approver.</p><h2>Approval conditions</h2><ul><li>Evidence index for <span class="issue-link">SMN-184</span> is complete.</li><li>Quality records the controlled deviation.</li><li>External confirmation remains tracked to closure.</li></ul>` ,
        comments: [
          { id: "c1", author: "lena", time: "8:41 AM", text: "Engineering and quality have reconciled the alternate package. I recommend approval." },
          { id: "c2", author: "dana", time: "9:02 AM", text: "Confirm that the external artifact remains visible in the release follow-up." }
        ]
      },
      { id: "doc-mesh-test-plan", teamspace: "Sentinel Mesh Node", title: "Degraded transport test plan", author: "theo", updated: "Yesterday, 4:18 PM", starred: false, version: 4, linkedIssues: ["SMN-191"], raw: "Purpose\nValidate mesh handoff behavior during constrained and intermittent transport.\n\nAcceptance criteria\nSession continuity remains above 98 percent and recovery completes within 12 seconds.", body: `<p><strong>Purpose:</strong> Validate mesh handoff behavior during constrained and intermittent transport.</p><h2>Test profile</h2><ol><li>Establish the baseline session.</li><li>Apply the 30-minute degradation profile.</li><li>Force two relay handoffs.</li><li>Capture recovery behavior and logs.</li></ol><h2>Acceptance criteria</h2><p>Session continuity remains above 98 percent and recovery completes within 12 seconds.</p>`, comments: [{ id: "c3", author: "marcus", time: "Yesterday", text: "The lab reservation and instrumentation are confirmed." }] },
      { id: "doc-release-readiness", teamspace: "Sentinel Mesh Node", title: "Field Release 3 readiness", author: "lena", updated: "Today, 8:30 AM", starred: true, version: 12, linkedIssues: ["SMN-202", "SMN-207", "SMN-213", "SMN-221"], raw: "Release objective\nDeliver the approved mesh node release to the field pilot by September 18.\n\nCurrent gate\nCertification evidence decision remains the only gating item.", body: `<p><strong>Release objective:</strong> Deliver the approved mesh node release to the field pilot by September 18.</p><h2>Current gate</h2><p>Certification evidence decision remains the only gating item. The image, deployment roster, operator notes, and rehearsal are ready to resume when the gate clears.</p><h2>Rollback</h2><p>Retain the prior signed image and tested configuration package for immediate rollback.</p>`, comments: [] },
      { id: "doc-harbor-acceptance", teamspace: "Harbor Relay Upgrade", title: "Site acceptance checklist", author: "marcus", updated: "Yesterday, 2:05 PM", starred: false, version: 3, linkedIssues: ["HRU-82", "HRU-88"], raw: "Acceptance scope\nVerify installation, alignment, power, and link margin before handover.", body: `<p><strong>Acceptance scope:</strong> Verify installation, alignment, power, and link margin before handover.</p><h2>Evidence</h2><ul><li>Installation photographs</li><li>Antenna alignment survey</li><li>Power and grounding measurements</li><li>Customer acknowledgement</li></ul>`, comments: [] },
      { id: "doc-zta-cutover", teamspace: "Zero Trust Access", title: "Policy cutover runbook", author: "priya", updated: "Monday, 3:47 PM", starred: true, version: 6, linkedIssues: ["ZTA-54", "ZTA-63"], raw: "Objective\nTransition privileged users to the new conditional access policy set with a tested rollback.", body: `<p><strong>Objective:</strong> Transition privileged users to the new conditional access policy set with a tested rollback.</p><h2>Sequence</h2><ol><li>Freeze policy changes.</li><li>Export the approved configuration.</li><li>Enable the pilot group.</li><li>Validate sign-in and device conditions.</li><li>Expand or roll back.</li></ol>`, comments: [] },
      { id: "doc-edge-pilot", teamspace: "Edge Logistics", title: "Warehouse pilot operating concept", author: "amina", updated: "Friday, 11:15 AM", starred: false, version: 2, linkedIssues: ["EGL-112", "EGL-119"], raw: "Pilot outcome\nProve that shipment events can be captured and reconciled at the edge without duplicate manual entry.", body: `<p><strong>Pilot outcome:</strong> Prove that shipment events can be captured and reconciled at the edge without duplicate manual entry.</p><h2>Participants</h2><p>Warehouse supervisors, inventory clerks, and the integration support team.</p>`, comments: [] },
      { id: "doc-workspace-standard", teamspace: "Business Tooling Enablement", title: "Governed workspace standard", author: "maya", updated: "Aug 20, 1:20 PM", starred: false, version: 5, linkedIssues: ["BTE-17", "BTE-31"], raw: "Standard\nEvery delivery workspace owns its work, knowledge, decisions, risks, and briefing facts in one governed record.", body: `<p><strong>Standard:</strong> Every delivery workspace owns its work, knowledge, decisions, risks, and briefing facts in one governed record.</p><h2>Minimum content</h2><ul><li>Accountable work and milestones</li><li>Living knowledge and decisions</li><li>Current risks and dependencies</li><li>Derived status readout</li></ul>`, comments: [] },
      { id: "doc-power-safety", teamspace: "Data Center Power", title: "Automatic transfer safety brief", author: "marcus", updated: "Today, 7:55 AM", starred: false, version: 3, linkedIssues: ["DCP-18"], raw: "Safety boundary\nOnly authorized operators may enter the transfer test area during execution.", body: `<p><strong>Safety boundary:</strong> Only authorized operators may enter the transfer test area during execution.</p><h2>Hold points</h2><ul><li>Verify emergency stop access.</li><li>Confirm communications with the operations desk.</li><li>Record transfer and recovery timing.</li></ul>`, comments: [] },
      { id: "doc-service-catalog", teamspace: "Operations Service Desk", title: "Requester service catalog", author: "amina", updated: "Yesterday, 10:32 AM", starred: true, version: 8, linkedIssues: ["OPS-100", "OPS-108", "OPS-116"], raw: "Catalog purpose\nGive requesters one clear place to report incidents, request access, request software, and ask for help.", body: `<p><strong>Catalog purpose:</strong> Give requesters one clear place to report incidents, request access, request software, and ask for help.</p><h2>Request types</h2><ul><li>Report an incident</li><li>Request access</li><li>Request software</li><li>Request a change</li><li>Ask a question</li></ul>`, comments: [] }
    ],
    notifications: [
      { id: "notice-1", type: "decision", title: "Approval requested for DEC-014", detail: "Lena Ortiz requested your review of the alternate certification evidence path.", time: "9:12 AM", unread: true, targetType: "document", targetId: "doc-certification-path" },
      { id: "notice-2", type: "mention", title: "You were mentioned in Field Release 3 readiness", detail: "Lena Ortiz asked for the briefing facts to be refreshed after the decision.", time: "8:30 AM", unread: true, targetType: "document", targetId: "doc-release-readiness" },
      { id: "notice-3", type: "issue", title: "SMN-191 moved to In progress", detail: "Theo Bennett started the degraded transport handoff validation.", time: "Yesterday", unread: true, targetType: "issue", targetId: "SMN-191" },
      { id: "notice-4", type: "comment", title: "New comment on SMN-184", detail: "Quality confirmed the alternate evidence index is complete.", time: "Yesterday", unread: true, targetType: "issue", targetId: "SMN-184" },
      { id: "notice-5", type: "document", title: "Policy cutover runbook published", detail: "Priya Nair published version 6 in Zero Trust Access.", time: "Monday", unread: false, targetType: "document", targetId: "doc-zta-cutover" },
      { id: "notice-6", type: "issue", title: "DCP-18 is due this week", detail: "Automatic transfer sequence validation is due August 27.", time: "Monday", unread: false, targetType: "issue", targetId: "DCP-18" },
      { id: "notice-7", type: "chat", title: "3 new messages in #delivery-room", detail: "The team posted the certification review outcome and next actions.", time: "Friday", unread: false, targetType: "channel", targetId: "delivery-room" }
    ],
    channels: [
      { id: "delivery-room", name: "delivery-room", description: "Cross-project delivery coordination", unread: 3 },
      { id: "sentinel-release", name: "sentinel-release", description: "Field Release 3 execution", unread: 0 },
      { id: "service-operations", name: "service-operations", description: "Portal and service desk work", unread: 1 },
      { id: "leadership-readout", name: "leadership-readout", description: "Briefing facts and decisions", unread: 0 }
    ],
    messages: {
      "delivery-room": [
        { id: "m1", author: "lena", time: "8:37 AM", text: "The alternate evidence package is reconciled. DEC-014 is ready for Dana's approval.", attachment: { type: "issue", id: "SMN-184", label: "Finalize certification evidence package" } },
        { id: "m2", author: "priya", time: "8:44 AM", text: "Security has no additional conditions. The external lab artifact remains a tracked follow-up." },
        { id: "m3", author: "maya", time: "9:05 AM", text: "Once the decision is recorded, I will refresh the one-page leadership facts and notify the six dependent owners.", attachment: { type: "document", id: "doc-certification-path", label: "Certification path decision record" } }
      ],
      "sentinel-release": [
        { id: "m4", author: "theo", time: "Yesterday, 4:21 PM", text: "The degraded transport environment is staged for tomorrow morning." },
        { id: "m5", author: "marcus", time: "Yesterday, 4:26 PM", text: "Instrumentation is calibrated and the lab reservation is confirmed.", attachment: { type: "issue", id: "SMN-191", label: "Validate mesh handoff under degraded transport" } }
      ],
      "service-operations": [
        { id: "m6", author: "amina", time: "9:02 AM", text: "The SLA model passed the pause-and-resume test. We still need the approval-state scenario." },
        { id: "m7", author: "jordan", time: "9:16 AM", text: "I have the final scenario queued for this afternoon.", attachment: { type: "issue", id: "OPS-108", label: "Validate incident response SLA clock" } }
      ],
      "leadership-readout": [
        { id: "m8", author: "dana", time: "Friday, 3:10 PM", text: "Keep the Tuesday readout focused on intervention points, not activity volume." },
        { id: "m9", author: "maya", time: "Friday, 3:18 PM", text: "Understood. The first item will be the certification decision and its schedule effect." }
      ]
    },
    plannerEvents: [
      { id: "e1", issueId: "SMN-184", day: 0, slot: 0, label: "Certification review", time: "9:00–10:00", color: "#f2a744", bg: "rgba(240, 167, 68, 0.14)" },
      { id: "e2", issueId: "SMN-236", day: 0, slot: 2, label: "Refresh leadership facts", time: "1:00–2:00", color: "#a08ff2", bg: "rgba(139, 118, 236, 0.16)" },
      { id: "e3", issueId: "SMN-191", day: 1, slot: 0, label: "Degraded transport test", time: "9:00–11:00", color: "#5683da", bg: "rgba(86, 131, 218, 0.16)" },
      { id: "e4", issueId: "BTE-24", day: 1, slot: 3, label: "Facilitator training", time: "3:00–4:00", color: "#4ec9ae", bg: "rgba(64, 196, 170, 0.14)" },
      { id: "e5", issueId: "DCP-18", day: 2, slot: 1, label: "Transfer sequence test", time: "11:00–12:00", color: "#f07a6a", bg: "rgba(240, 106, 90, 0.15)" },
      { id: "e6", issueId: "OPS-108", day: 2, slot: 3, label: "SLA approval scenario", time: "3:00–4:00", color: "#a08ff2", bg: "rgba(139, 118, 236, 0.16)" },
      { id: "e7", issueId: "ZTA-54", day: 3, slot: 0, label: "Policy review", time: "9:00–10:00", color: "#5683da", bg: "rgba(86, 131, 218, 0.16)" },
      { id: "e8", issueId: "HRU-82", day: 3, slot: 2, label: "Survey readout", time: "1:00–2:00", color: "#4ec9ae", bg: "rgba(64, 196, 170, 0.14)" },
      { id: "e9", issueId: "EGL-112", day: 4, slot: 1, label: "Event feed demo", time: "11:00–12:00", color: "#f2a744", bg: "rgba(240, 167, 68, 0.14)" },
      { id: "e10", issueId: "SMN-221", day: 4, slot: 3, label: "Release rehearsal", time: "3:00–5:00", color: "#5683da", bg: "rgba(86, 131, 218, 0.16)" }
    ],
    drives: [
      { id: "program-records", name: "Program records", description: "Controlled delivery evidence", color: "#a08ff2" },
      { id: "release-artifacts", name: "Release artifacts", description: "Images, notes, and manifests", color: "#5683da" },
      { id: "team-resources", name: "Team resources", description: "Templates and working material", color: "#4ec9ae" }
    ],
    files: [
      { id: "f1", drive: "program-records", name: "SMN-evidence-index-v7.xlsx", type: "XLSX", owner: "lena", updated: "Today, 8:46 AM", size: "284 KB" },
      { id: "f2", drive: "program-records", name: "witnessed-test-results.pdf", type: "PDF", owner: "marcus", updated: "Yesterday, 5:02 PM", size: "2.8 MB" },
      { id: "f3", drive: "program-records", name: "engineering-analysis-signed.pdf", type: "PDF", owner: "priya", updated: "Yesterday, 3:19 PM", size: "1.4 MB" },
      { id: "f4", drive: "release-artifacts", name: "smn-release-3-manifest.json", type: "JSON", owner: "theo", updated: "Today, 7:41 AM", size: "18 KB" },
      { id: "f5", drive: "release-artifacts", name: "operator-release-notes-draft.docx", type: "DOCX", owner: "maya", updated: "Monday, 2:33 PM", size: "152 KB" },
      { id: "f6", drive: "team-resources", name: "workspace-kickoff-template.docx", type: "DOCX", owner: "maya", updated: "Aug 20", size: "96 KB" },
      { id: "f7", drive: "team-resources", name: "risk-review-checklist.pdf", type: "PDF", owner: "lena", updated: "Aug 18", size: "221 KB" },
      { id: "f8", drive: "team-resources", name: "service-portal-copy-review.xlsx", type: "XLSX", owner: "amina", updated: "Aug 17", size: "74 KB" }
    ],
    activities: [
      { id: "a1", icon: "file", actor: "Maya Chen", action: "published version 7", target: "Certification path decision record", time: "9:12 AM" },
      { id: "a2", icon: "chat", actor: "Lena Ortiz", action: "requested approval", target: "DEC-014", time: "9:10 AM" },
      { id: "a3", icon: "tracker", actor: "Theo Bennett", action: "started", target: "SMN-191", time: "8:38 AM" },
      { id: "a4", icon: "file", actor: "Priya Nair", action: "attached", target: "engineering-analysis-signed.pdf", time: "Yesterday" },
      { id: "a5", icon: "tracker", actor: "Marcus Reed", action: "completed", target: "DCP-11", time: "Monday" },
      { id: "a6", icon: "file", actor: "Amina Cole", action: "updated", target: "Requester service catalog", time: "Monday" }
    ]
  };

  const deepClone = (value) => JSON.parse(JSON.stringify(value));
  const escapeHtml = (value = "") => String(value).replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[character]));
  const icon = (name, className = "") => `<svg${className ? ` class="${className}"` : ""} aria-hidden="true"><use href="#i-${name}"></use></svg>`;
  const personById = (id) => people.find((person) => person.id === id) || people[0];
  const projectById = (id) => state.projects.find((project) => project.id === id) || state.projects[0];
  const issueById = (id) => state.issues.find((issue) => issue.id === id);
  const documentById = (id) => state.documents.find((document) => document.id === id);
  const avatar = (personId, className = "") => {
    const person = personById(personId);
    return `<span class="member-avatar ${className}" style="--avatar-bg:${person.color};--avatar-ink:${person.ink}" title="${escapeHtml(person.name)}">${escapeHtml(person.initials)}</span>`;
  };

  function loadState() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) return deepClone(seedState);
      const parsed = JSON.parse(stored);
      if (parsed.version !== APP_VERSION || !Array.isArray(parsed.issues) || !Array.isArray(parsed.documents)) return deepClone(seedState);
      return parsed;
    } catch (error) {
      return deepClone(seedState);
    }
  }

  let state = loadState();
  let lastFocusedElement = null;
  let activeDrawerIssue = null;

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      showToast("Demo changes are temporary", "This browser could not save local state.", "alert");
    }
  }

  function statusForIssue(issue) {
    return issue.blocked ? "blocked" : issue.status;
  }

  function statusPill(status) {
    const definition = statusDefinitions[status] || statusDefinitions.todo;
    const className = status === "blocked" ? "status-red" : status === "done" ? "status-green" : status === "in-review" ? "status-green" : status === "in-progress" ? "status-blue" : "status-gray";
    return `<span class="status-pill ${className}">${escapeHtml(definition.label)}</span>`;
  }

  function healthPill(health) {
    if (health === "amber") return `<span class="status-pill status-amber">Needs attention</span>`;
    if (health === "red") return `<span class="status-pill status-red">At risk</span>`;
    return `<span class="status-pill status-green">On track</span>`;
  }

  function priorityPill(priority) {
    const className = priority === "urgent" ? "status-red" : priority === "high" ? "status-amber" : "status-gray";
    return `<span class="priority-pill ${className}">${escapeHtml(priorityLabels[priority] || priority)}</span>`;
  }

  function tagsMarkup(tags = []) {
    return `<span class="tag-list">${tags.slice(0, 2).map((tag, index) => {
      const normalized = String(tag).toUpperCase();
      const className = normalized === "BLOCKED" || normalized === "RISK" ? "tag-red" : normalized === "MILESTONE" || normalized === "SAFETY" ? "tag-amber" : index === 0 ? "tag-blue" : "";
      return `<span class="tag ${className}">${escapeHtml(tag)}</span>`;
    }).join("")}</span>`;
  }

  function formatDocumentBody(raw) {
    const blocks = String(raw || "").trim().split(/\n\s*\n/).filter(Boolean);
    return blocks.map((block, index) => {
      const lines = block.split("\n");
      if (lines.length > 1 && lines[0].length < 70) {
        return `<h2>${escapeHtml(lines[0])}</h2><p>${lines.slice(1).map(escapeHtml).join("<br>")}</p>`;
      }
      return `<p>${lines.map(escapeHtml).join("<br>")}</p>`;
    }).join("");
  }

  function unreadCount() {
    return state.notifications.filter((notice) => notice.unread).length;
  }

  function activeIssuesForProject(projectId) {
    return state.issues.filter((issue) => issue.project === projectId && issue.status !== "done");
  }

  function currentProjectHealth(project) {
    if (project.id === "SMN" && state.decision.approved) return "green";
    return project.health;
  }

  function updateClock() {
    const node = document.getElementById("demo-clock");
    if (!node) return;
    const now = new Date();
    node.textContent = new Intl.DateTimeFormat("en-US", { weekday: "short", hour: "numeric", minute: "2-digit" }).format(now);
  }

  function showToast(title, message, iconName = "check") {
    const region = document.getElementById("toast-region");
    if (!region) return;
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<span class="toast-icon">${icon(iconName)}</span><span><strong>${escapeHtml(title)}</strong><span>${escapeHtml(message)}</span></span>`;
    region.append(toast);
    window.setTimeout(() => toast.remove(), 3600);
  }

  function setModule(module) {
    state.ui.module = module;
    document.body.classList.remove("panel-open");
    saveState();
    renderApp();
    document.getElementById("module-content")?.focus({ preventScroll: true });
  }

  function selectProject(projectId) {
    state.ui.currentProject = projectId;
    state.ui.trackerScope = "project";
    state.ui.module = "tracker";
    saveState();
    renderApp();
  }

  function selectDocument(documentId) {
    state.ui.selectedDoc = documentId;
    state.ui.documentEditing = false;
    state.ui.module = "documents";
    saveState();
    renderApp();
  }

  function navigateToTarget(type, id) {
    if (type === "issue") {
      const issue = issueById(id);
      if (issue) {
        state.ui.currentProject = issue.project;
        state.ui.module = "tracker";
        saveState();
        renderApp();
        openIssueDrawer(id);
      }
      return;
    }
    if (type === "document") {
      selectDocument(id);
      return;
    }
    if (type === "channel") {
      state.ui.selectedChannel = id;
      setModule("chat");
      return;
    }
    if (type === "file") {
      setModule("drive");
      openFilePreview(id);
      return;
    }
    if (type === "person") {
      setModule("team");
      openProfile(id);
      return;
    }
    if (type === "project") {
      selectProject(id);
    }
  }

  function renderApp() {
    document.body.classList.toggle("panel-collapsed", Boolean(state.ui.panelCollapsed));
    document.querySelectorAll(".app-rail [data-module]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.module === state.ui.module);
      if (button.classList.contains("rail-button")) button.setAttribute("aria-current", button.dataset.module === state.ui.module ? "page" : "false");
    });

    const badge = document.getElementById("inbox-badge");
    const count = unreadCount();
    if (badge) {
      badge.textContent = String(count);
      badge.hidden = count === 0;
    }

    renderModulePanel();
    renderModuleContent();
    const panelToggle = document.querySelector("[data-action='toggle-panel']");
    if (panelToggle) panelToggle.setAttribute("aria-expanded", String(window.matchMedia("(max-width: 900px)").matches ? document.body.classList.contains("panel-open") : !state.ui.panelCollapsed));
    document.querySelectorAll(".tab-button").forEach((button) => button.setAttribute("aria-selected", String(button.classList.contains("is-active"))));
    document.querySelectorAll("[data-action='tracker-view']").forEach((button) => button.setAttribute("aria-pressed", String(button.classList.contains("is-active"))));
  }

  function modulePanelHeader(title, action = "") {
    return `<div class="module-panel-head"><h1>${escapeHtml(title)}</h1>${action}</div>`;
  }

  function primaryPanelAction(label, action, iconName = "plus") {
    return `<button class="primary-action" type="button" data-action="${escapeHtml(action)}">${icon(iconName)}<span>${escapeHtml(label)}</span></button>`;
  }

  function renderModulePanel() {
    const panel = document.getElementById("module-panel");
    if (!panel) return;

    const module = state.ui.module;
    if (module === "tracker") {
      panel.innerHTML = renderTrackerPanel();
    } else if (module === "documents") {
      panel.innerHTML = renderDocumentsPanel();
    } else if (module === "inbox") {
      panel.innerHTML = renderInboxPanel();
    } else if (module === "planner") {
      panel.innerHTML = renderPlannerPanel();
    } else if (module === "chat") {
      panel.innerHTML = renderChatPanel();
    } else if (module === "drive") {
      panel.innerHTML = renderDrivePanel();
    } else if (module === "team") {
      panel.innerHTML = renderTeamPanel();
    } else {
      panel.innerHTML = renderOfficePanel();
    }
  }

  function renderOfficePanel() {
    const myIssues = state.issues.filter((issue) => issue.assignee === "maya" && issue.status !== "done").length;
    const blocked = state.issues.filter((issue) => issue.blocked).length;
    return `${modulePanelHeader("Office")}
      <div class="panel-body">
        ${primaryPanelAction("Create", "quick-create")}
        <div class="panel-section">
          <div class="panel-nav">
            <button class="panel-row is-active" type="button" data-module="office">${icon("home")}<span>Workspace home</span></button>
            <button class="panel-row" type="button" data-action="open-my-work">${icon("tracker")}<span>My work</span><span class="row-count">${myIssues}</span></button>
            <button class="panel-row" type="button" data-action="open-decision">${icon("alert")}<span>Decision queue</span><span class="row-count">${state.decision.approved ? 0 : 1}</span></button>
            <button class="panel-row" type="button" data-module="inbox">${icon("bell")}<span>Updates</span><span class="row-count">${unreadCount()}</span></button>
          </div>
        </div>
        <div class="panel-section">
          <div class="panel-section-label"><span>Workspace pulse</span></div>
          <div class="panel-nav">
            <button class="panel-row" type="button" data-module="tracker">${icon("tracker")}<span>Active work</span><span class="row-count">${state.issues.filter((issue) => issue.status !== "done").length}</span></button>
            <button class="panel-row" type="button" data-module="documents">${icon("file")}<span>Published knowledge</span><span class="row-count">${state.documents.length}</span></button>
            <button class="panel-row" type="button" data-action="show-blocked-work">${icon("alert")}<span>Blocked items</span><span class="row-count">${blocked}</span></button>
          </div>
        </div>
      </div>`;
  }

  function renderTrackerPanel() {
    const selected = state.ui.currentProject;
    const totalActive = state.issues.filter((issue) => issue.status !== "done").length;
    const mine = state.issues.filter((issue) => issue.assignee === "maya" && issue.status !== "done").length;
    return `${modulePanelHeader("Tracker")}
      <div class="panel-body">
        ${primaryPanelAction("New issue", "new-issue")}
        <div class="panel-section">
          <div class="panel-nav">
            <button class="panel-row" type="button" data-action="tracker-mine">${icon("tracker")}<span>My issues</span><span class="row-count">${mine}</span></button>
            <button class="panel-row" type="button" data-action="tracker-all">${icon("list")}<span>All issues</span><span class="row-count">${totalActive}</span></button>
          </div>
        </div>
        <div class="panel-section">
          <div class="panel-section-label"><span>Your projects</span><button class="panel-add" type="button" data-action="new-project" aria-label="Create project">${icon("plus")}</button></div>
          <div class="project-tree">
            ${state.projects.map((project) => {
              const isSelected = selected === project.id;
              const count = activeIssuesForProject(project.id).length;
              return `<div>
                <button class="project-row ${isSelected ? "is-active" : ""}" type="button" data-action="select-project" data-project="${escapeHtml(project.id)}">
                  <span class="project-color" style="--project-color:${project.color}"></span>
                  <span class="project-name">${escapeHtml(project.short)}</span>
                  <span class="row-count">${count}</span>
                </button>
                ${isSelected ? `<div class="project-subnav">
                  <button class="tree-row is-active" type="button" data-action="tracker-tab" data-tab="active">${icon("tracker")}<span>Issues</span></button>
                  <button class="tree-row" type="button" data-action="show-components">${icon("component")}<span>Components</span></button>
                  <button class="tree-row" type="button" data-action="show-milestones">${icon("milestone")}<span>Milestones</span></button>
                  <button class="tree-row" type="button" data-action="show-templates">${icon("template")}<span>Templates</span></button>
                </div>` : ""}
              </div>`;
            }).join("")}
          </div>
        </div>
      </div>`;
  }

  function renderDocumentsPanel() {
    const teamspaces = [...new Set(state.documents.map((document) => document.teamspace))];
    return `${modulePanelHeader("Documents")}
      <div class="panel-body">
        ${primaryPanelAction("Create a document", "new-document")}
        <div class="panel-section">
          <div class="panel-nav">
            <button class="panel-row" type="button" data-action="documents-all">${icon("list")}<span>All documents</span><span class="row-count">${state.documents.length}</span></button>
            <button class="panel-row" type="button" data-action="documents-starred">${icon("star")}<span>Starred</span><span class="row-count">${state.documents.filter((document) => document.starred).length}</span></button>
          </div>
        </div>
        <div class="panel-section">
          <div class="panel-section-label"><span>Teamspaces</span><button class="panel-add" type="button" data-action="new-document" aria-label="Create document">${icon("plus")}</button></div>
          <div class="page-tree">
            ${teamspaces.map((teamspace) => {
              const docs = state.documents.filter((document) => document.teamspace === teamspace);
              const activeTeamspace = docs.some((document) => document.id === state.ui.selectedDoc);
              const project = state.projects.find((candidate) => candidate.name === teamspace);
              return `<div>
                <div class="project-row ${activeTeamspace ? "is-active" : ""}"><span class="project-color" style="--project-color:${project?.color || "#3d4350"}"></span><span class="project-name">${escapeHtml(teamspace)}</span></div>
                ${docs.map((document) => `<button class="tree-row tree-indent-1 ${document.id === state.ui.selectedDoc ? "is-active" : ""}" type="button" data-action="select-document" data-document="${escapeHtml(document.id)}">${icon("file")}<span>${escapeHtml(document.title)}</span>${document.starred ? icon("star") : ""}</button>`).join("")}
              </div>`;
            }).join("")}
          </div>
        </div>
      </div>`;
  }

  function renderInboxPanel() {
    return `${modulePanelHeader("Inbox")}
      <div class="panel-body">
        <button class="primary-action" type="button" data-action="mark-all-read">${icon("check")}<span>Mark all as read</span></button>
        <div class="panel-section">
          <div class="panel-nav">
            <button class="panel-row is-active" type="button" data-action="inbox-filter" data-filter="all">${icon("bell")}<span>All updates</span><span class="row-count">${state.notifications.length}</span></button>
            <button class="panel-row" type="button" data-action="inbox-filter" data-filter="unread">${icon("alert")}<span>Unread</span><span class="row-count">${unreadCount()}</span></button>
            <button class="panel-row" type="button" data-action="inbox-filter" data-filter="mentions">${icon("chat")}<span>Mentions</span><span class="row-count">${state.notifications.filter((notice) => notice.type === "mention").length}</span></button>
          </div>
        </div>
        <div class="panel-section">
          <div class="panel-section-label"><span>Sources</span></div>
          <div class="panel-nav">
            <button class="panel-row" type="button" data-module="tracker">${icon("tracker")}<span>Tracker</span></button>
            <button class="panel-row" type="button" data-module="documents">${icon("file")}<span>Documents</span></button>
            <button class="panel-row" type="button" data-module="chat">${icon("chat")}<span>Chat</span></button>
          </div>
        </div>
      </div>`;
  }

  function renderPlannerPanel() {
    const myIssues = state.issues.filter((issue) => issue.assignee === "maya" && issue.status !== "done");
    return `${modulePanelHeader("Planner")}
      <div class="panel-body">
        ${primaryPanelAction("Plan work", "quick-create", "calendar")}
        <div class="panel-section">
          <div class="panel-nav">
            <button class="panel-row is-active" type="button" data-module="planner">${icon("calendar")}<span>This week</span></button>
            <button class="panel-row" type="button" data-action="planner-today">${icon("clock")}<span>Today</span><span class="row-count">2</span></button>
            <button class="panel-row" type="button" data-action="planner-unscheduled">${icon("list")}<span>Unscheduled</span><span class="row-count">${myIssues.filter((issue) => !state.plannerEvents.some((event) => event.issueId === issue.id)).length}</span></button>
          </div>
        </div>
        <div class="panel-section">
          <div class="panel-section-label"><span>My work</span></div>
          <div class="panel-nav">
            ${myIssues.slice(0, 6).map((issue) => `<button class="tree-row" type="button" data-action="open-issue" data-issue="${escapeHtml(issue.id)}">${icon("tracker")}<span>${escapeHtml(issue.title)}</span></button>`).join("")}
          </div>
        </div>
      </div>`;
  }

  function renderChatPanel() {
    return `${modulePanelHeader("Chat")}
      <div class="panel-body">
        ${primaryPanelAction("New message", "focus-message", "chat")}
        <div class="panel-section">
          <div class="panel-section-label"><span>Channels</span><button class="panel-add" type="button" data-action="new-channel" aria-label="Create channel">${icon("plus")}</button></div>
          <div class="channel-list">
            ${state.channels.map((channel) => `<button class="channel-row ${channel.id === state.ui.selectedChannel ? "is-active" : ""}" type="button" data-action="select-channel" data-channel="${escapeHtml(channel.id)}"><span class="channel-hash">#</span><span>${escapeHtml(channel.name)}</span>${channel.unread ? `<span class="row-count">${channel.unread}</span>` : ""}</button>`).join("")}
          </div>
        </div>
        <div class="panel-section">
          <div class="panel-section-label"><span>Direct messages</span></div>
          <div class="channel-list">
            ${people.slice(1, 5).map((person) => `<button class="channel-row" type="button" data-action="open-profile" data-person="${person.id}">${avatar(person.id)}<span>${escapeHtml(person.name)}</span></button>`).join("")}
          </div>
        </div>
      </div>`;
  }

  function renderDrivePanel() {
    return `${modulePanelHeader("Drive")}
      <div class="panel-body">
        ${primaryPanelAction("Add sample file", "add-sample-file", "plus")}
        <div class="panel-section">
          <div class="panel-section-label"><span>Drives</span></div>
          <div class="panel-nav">
            ${state.drives.map((drive) => `<button class="panel-row ${drive.id === state.ui.selectedDrive ? "is-active" : ""}" type="button" data-action="select-drive" data-drive="${escapeHtml(drive.id)}">${icon("drive")}<span>${escapeHtml(drive.name)}</span><span class="row-count">${state.files.filter((file) => file.drive === drive.id).length}</span></button>`).join("")}
          </div>
        </div>
        <div class="panel-section">
          <div class="panel-nav">
            <button class="panel-row" type="button" data-action="drive-recent">${icon("history")}<span>Recent</span></button>
            <button class="panel-row" type="button" data-action="drive-starred">${icon("star")}<span>Starred</span></button>
          </div>
        </div>
      </div>`;
  }

  function renderTeamPanel() {
    const departments = ["All", ...new Set(people.map((person) => person.department))];
    return `${modulePanelHeader("Team")}
      <div class="panel-body">
        ${primaryPanelAction("Invite teammate", "invite-teammate", "users")}
        <div class="panel-section">
          <div class="panel-section-label"><span>Departments</span></div>
          <div class="panel-nav">
            ${departments.map((department) => `<button class="panel-row ${department === state.ui.selectedDepartment ? "is-active" : ""}" type="button" data-action="select-department" data-department="${escapeHtml(department)}">${icon("users")}<span>${escapeHtml(department)}</span><span class="row-count">${department === "All" ? people.length : people.filter((person) => person.department === department).length}</span></button>`).join("")}
          </div>
        </div>
      </div>`;
  }

  function renderModuleContent() {
    const content = document.getElementById("module-content");
    if (!content) return;
    const module = state.ui.module;
    if (module === "tracker") content.innerHTML = renderTrackerContent();
    else if (module === "documents") content.innerHTML = renderDocumentsContent();
    else if (module === "inbox") content.innerHTML = renderInboxContent();
    else if (module === "planner") content.innerHTML = renderPlannerContent();
    else if (module === "chat") content.innerHTML = renderChatContent();
    else if (module === "drive") content.innerHTML = renderDriveContent();
    else if (module === "team") content.innerHTML = renderTeamContent();
    else content.innerHTML = renderOfficeContent();

    if (module === "tracker" && state.ui.trackerView === "board") wireBoardDragAndDrop();
  }

  function renderOfficeContent() {
    const approved = state.decision.approved;
    const blockedCount = state.issues.filter((issue) => issue.blocked).length;
    const activeCount = state.issues.filter((issue) => issue.status !== "done").length;
    const completedCount = state.issues.filter((issue) => issue.status === "done").length;
    const smnHealth = approved ? "green" : "amber";
    const activity = state.activities.slice(0, 6);
    const myWork = state.issues.filter((issue) => issue.assignee === "maya" && issue.status !== "done").slice(0, 5);
    return `<section class="content-page office-page">
      <div class="office-hero">
        <div><h2>Good morning, Maya</h2><p>Here is the work that may need your attention today.</p></div>
        <div class="office-date"><strong>Tuesday, August 25</strong><span>Delivery workspace</span></div>
      </div>
      <div class="office-grid">
        <article class="card priority-callout span-two">
          <div class="priority-main">
            <div>
              <span class="eyebrow">${approved ? "Decision recorded" : "Intervention requested"}</span>
              <h3>${approved ? "Alternate certification path approved" : "Certification evidence threatens Field Release 3"}</h3>
              <p>${approved ? "Six dependent work items resumed, the schedule exposure was reduced, and the controlled history was updated." : "The primary lab artifact will arrive after the release gate. DEC-014 provides a controlled alternate path that can protect the September milestone."}</p>
            </div>
            <div class="inline-actions">
              <button class="ghost-button" type="button" data-action="select-document" data-document="doc-certification-path">${icon("file")}Review record</button>
              ${approved ? `<button class="soft-button" type="button" data-action="show-decision-result">${icon("check")}View outcome</button>` : `<button class="button" type="button" data-action="approve-path">${icon("check")}Simulate approval</button>`}
            </div>
          </div>
          <div class="metric-strip">
            <div class="metric"><strong>${blockedCount}</strong><span>Blocked by decision</span></div>
            <div class="metric"><strong>${approved ? "Sep 18" : "Oct 2"}</strong><span>Forecast field release</span></div>
            <div class="metric"><strong>${approved ? "Moderate" : "High"}</strong><span>Schedule exposure</span></div>
            <div class="metric"><strong>${approved ? "Recorded" : "Dana Kessler"}</strong><span>${approved ? "Audit status" : "Accountable approver"}</span></div>
          </div>
        </article>

        <article class="card">
          <div class="card-header"><h3>Project pulse</h3><button class="ghost-button" type="button" data-module="tracker">Open Tracker</button></div>
          <div class="card-body project-pulse-list">
            ${state.projects.map((project) => {
              const health = project.id === "SMN" ? smnHealth : currentProjectHealth(project);
              const healthColor = health === "amber" ? "#e09a3a" : health === "red" ? "#e0655e" : "#4db878";
              return `<button class="pulse-row" type="button" data-action="select-project" data-project="${escapeHtml(project.id)}">
                <span class="pulse-project"><span class="health-dot" style="--health-color:${healthColor}"></span><span><strong>${escapeHtml(project.name)}</strong><span>${escapeHtml(project.milestone)} · ${escapeHtml(project.due)}</span></span></span>
                <span>${healthPill(health)}</span>
                <span class="progress-track" style="--progress:${project.progress}%;--progress-color:${healthColor}"><span></span></span>
                <strong class="tiny">${project.progress}%</strong>
              </button>`;
            }).join("")}
          </div>
        </article>

        <article class="card">
          <div class="card-header"><h3>My work</h3><button class="ghost-button" type="button" data-action="open-my-work">View all</button></div>
          <div class="card-body my-work-list">
            ${myWork.map((issue) => `<button class="document-row" type="button" data-action="open-issue" data-issue="${escapeHtml(issue.id)}"><span class="doc-icon">${icon("tracker")}</span><span class="row-primary"><strong>${escapeHtml(issue.title)}</strong><span>${escapeHtml(issue.id)} · due ${escapeHtml(issue.due)}</span></span>${statusPill(statusForIssue(issue))}</button>`).join("")}
          </div>
        </article>

        <article class="card">
          <div class="card-header"><h3>Recent documents</h3><button class="ghost-button" type="button" data-module="documents">Open Documents</button></div>
          <div class="card-body document-list">
            ${state.documents.slice(0, 5).map((document) => `<button class="document-row" type="button" data-action="select-document" data-document="${escapeHtml(document.id)}"><span class="doc-icon">${icon("file")}</span><span class="row-primary"><strong>${escapeHtml(document.title)}</strong><span>${escapeHtml(document.teamspace)} · v${document.version}</span></span><span class="tiny muted">${escapeHtml(document.updated.split(",")[0])}</span></button>`).join("")}
          </div>
        </article>

        <article class="card">
          <div class="card-header"><h3>Workspace activity</h3><span class="tiny muted">Live synthetic feed</span></div>
          <div class="card-body activity-list">
            ${activity.map((item) => `<div class="activity-row"><span class="activity-icon">${icon(item.icon)}</span><span class="activity-copy"><strong>${escapeHtml(item.actor)}</strong> ${escapeHtml(item.action)}<p>${escapeHtml(item.target)}</p></span><span class="activity-time">${escapeHtml(item.time)}</span></div>`).join("")}
          </div>
        </article>

        <article class="card span-two">
          <div class="card-header"><h3>Five-minute coworker walkthrough</h3><span class="tiny muted">Every step is clickable</span></div>
          <div class="card-body demo-path">
            <button class="demo-step" type="button" data-action="open-decision"><b>1</b><strong>See the intervention</strong><span>Start with the certification decision and schedule exposure.</span></button>
            <button class="demo-step" type="button" data-action="open-issue" data-issue="SMN-184"><b>2</b><strong>Trace accountable work</strong><span>Open the issue, checklist, owner, milestone, and linked page.</span></button>
            <button class="demo-step" type="button" data-action="select-document" data-document="doc-certification-path"><b>3</b><strong>Open living knowledge</strong><span>Review the decision record, comments, links, and history.</span></button>
            <button class="demo-step" type="button" data-action="approve-path"><b>4</b><strong>Apply one update</strong><span>Simulate approval and unblock the dependent work.</span></button>
            <button class="demo-step" type="button" data-module="planner"><b>5</b><strong>Show coordinated execution</strong><span>Move into Planner, Chat, Drive, and the team view.</span></button>
          </div>
        </article>
      </div>
    </section>`;
  }

  function filteredTrackerIssues() {
    const query = state.ui.trackerSearch.trim().toLowerCase();
    let issues = state.ui.trackerScope === "mine" ? state.issues.filter((issue) => issue.assignee === "maya") : state.ui.trackerScope === "all" ? [...state.issues] : state.issues.filter((issue) => issue.project === state.ui.currentProject);
    if (state.ui.trackerTab === "active") issues = issues.filter((issue) => issue.status !== "done" && issue.status !== "backlog");
    if (state.ui.trackerTab === "backlog") issues = issues.filter((issue) => issue.status === "backlog");
    if (state.ui.trackerTab === "mine") issues = issues.filter((issue) => issue.assignee === "maya" && issue.status !== "done");
    if (query) {
      issues = issues.filter((issue) => [issue.id, issue.title, issue.component, issue.milestone, ...(issue.tags || [])].join(" ").toLowerCase().includes(query));
    }
    return issues;
  }

  function renderTrackerContent() {
    const project = projectById(state.ui.currentProject);
    const issues = filteredTrackerIssues();
    const scopeTitle = state.ui.trackerScope === "mine" ? "My issues" : state.ui.trackerScope === "all" ? "All project work" : project.name;
    const scopeEyebrow = state.ui.trackerScope === "mine" ? "Tracker · assigned to Maya Chen" : state.ui.trackerScope === "all" ? "Tracker · delivery portfolio" : `Tracker · ${escapeHtml(project.id)}`;
    return `<section class="content-page">
      <header class="content-header">
        <div class="header-title-wrap"><div class="header-eyebrow">${scopeEyebrow}</div><h2>${escapeHtml(scopeTitle)}</h2></div>
        <div class="header-actions">
          ${healthPill(currentProjectHealth(project))}
          <button class="ghost-button" type="button" data-action="show-project-summary">${icon("spark")}Project summary</button>
          <button class="button" type="button" data-action="new-issue">${icon("plus")}New issue</button>
        </div>
      </header>
      <div class="content-tabs">
        <button class="tab-button ${state.ui.trackerTab === "active" ? "is-active" : ""}" type="button" data-action="tracker-tab" data-tab="active">Active</button>
        <button class="tab-button ${state.ui.trackerTab === "all" ? "is-active" : ""}" type="button" data-action="tracker-tab" data-tab="all">All</button>
        <button class="tab-button ${state.ui.trackerTab === "backlog" ? "is-active" : ""}" type="button" data-action="tracker-tab" data-tab="backlog">Backlog</button>
        <button class="tab-button ${state.ui.trackerTab === "mine" ? "is-active" : ""}" type="button" data-action="tracker-tab" data-tab="mine">My issues</button>
      </div>
      <div class="content-toolbar">
        <label class="inline-search">${icon("search")}<input id="tracker-search" type="search" value="${escapeHtml(state.ui.trackerSearch)}" placeholder="Search this project" aria-label="Search project issues"></label>
        <div class="toolbar-actions">
          <button class="ghost-button" type="button" data-action="tracker-filter">${icon("filter")}Show</button>
          <button class="ghost-button ${state.ui.trackerView === "list" ? "is-active" : ""}" type="button" data-action="tracker-view" data-view="list" aria-label="List view">${icon("list")}</button>
          <button class="ghost-button ${state.ui.trackerView === "board" ? "is-active" : ""}" type="button" data-action="tracker-view" data-view="board" aria-label="Board view">${icon("grid")}</button>
        </div>
      </div>
      ${state.ui.trackerView === "board" ? renderTrackerBoard(issues) : renderTrackerList(issues)}
    </section>`;
  }

  function renderTrackerList(issues) {
    if (!issues.length) return `<div class="empty-state"><div><strong>No matching issues</strong><p>Change the tab or search terms to see more work.</p></div></div>`;
    const order = ["blocked", "in-progress", "in-review", "todo", "backlog", "done"];
    const groups = order.map((status) => ({ status, issues: issues.filter((issue) => statusForIssue(issue) === status) })).filter((group) => group.issues.length);
    return `<div class="issue-groups">${groups.map((group) => {
      const definition = statusDefinitions[group.status];
      return `<section class="issue-group">
        <div class="issue-group-head" style="--group-bg:${definition.tint}"><span class="health-dot" style="--health-color:${definition.color}"></span><span>${escapeHtml(definition.label)}</span><span class="row-count">${group.issues.length}</span></div>
        <div class="issue-table-head"><span></span><span>Key</span><span>Issue</span><span>Labels</span><span>Due</span><span>Estimate</span><span></span></div>
        ${group.issues.map(renderIssueRow).join("")}
      </section>`;
    }).join("")}</div>`;
  }

  function renderIssueRow(issue) {
    const assignee = personById(issue.assignee);
    return `<div class="issue-row">
      <button class="issue-check ${issue.status === "done" ? "is-complete" : ""}" type="button" data-action="toggle-issue-complete" data-issue="${escapeHtml(issue.id)}" aria-label="${issue.status === "done" ? "Reopen" : "Complete"} ${escapeHtml(issue.id)}">${icon("check")}</button>
      <span class="issue-key">${escapeHtml(issue.id)}</span>
      <button class="issue-title issue-title-button" type="button" data-action="open-issue" data-issue="${escapeHtml(issue.id)}">${escapeHtml(issue.title)}</button>
      ${tagsMarkup(issue.blocked ? ["BLOCKED", ...(issue.tags || [])] : issue.tags)}
      <span class="due-date">${escapeHtml(issue.due)}</span>
      <span class="estimate">${escapeHtml(issue.spent)}/${escapeHtml(issue.estimate)}</span>
      <span class="assignee-avatar" style="--avatar-bg:${assignee.color};--avatar-ink:${assignee.ink}" title="${escapeHtml(assignee.name)}">${escapeHtml(assignee.initials)}</span>
    </div>`;
  }

  function renderTrackerBoard(issues) {
    const projectIssues = issues.filter((issue) => issue.status !== "backlog");
    const columns = ["todo", "in-progress", "in-review", "done"];
    return `<div class="board-wrap"><div class="board">
      ${columns.map((status) => {
        const definition = statusDefinitions[status];
        const columnIssues = projectIssues.filter((issue) => issue.status === status);
        return `<section class="board-column">
          <div class="board-column-head"><span>${escapeHtml(definition.label)}</span><span>${columnIssues.length}</span></div>
          <div class="board-cards" data-drop-status="${status}">
            ${columnIssues.map((issue) => `<article class="board-card" draggable="true" role="button" tabindex="0" data-action="open-issue" data-issue="${escapeHtml(issue.id)}">
              <span class="board-card-key">${escapeHtml(issue.id)}</span>
              <h4>${escapeHtml(issue.title)}</h4>
              ${tagsMarkup(issue.blocked ? ["BLOCKED", ...(issue.tags || [])] : issue.tags)}
              <div class="board-card-footer"><span class="due-date">${escapeHtml(issue.due)}</span>${avatar(issue.assignee, "assignee-avatar")}</div>
            </article>`).join("")}
          </div>
        </section>`;
      }).join("")}
    </div></div>`;
  }

  function wireBoardDragAndDrop() {
    const content = document.getElementById("module-content");
    if (!content) return;
    content.querySelectorAll(".board-card").forEach((card) => {
      card.addEventListener("dragstart", (event) => {
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData("text/plain", card.dataset.issue || "");
      });
    });
    content.querySelectorAll(".board-cards").forEach((column) => {
      column.addEventListener("dragover", (event) => {
        event.preventDefault();
        column.classList.add("is-dragover");
      });
      column.addEventListener("dragleave", () => column.classList.remove("is-dragover"));
      column.addEventListener("drop", (event) => {
        event.preventDefault();
        column.classList.remove("is-dragover");
        const issue = issueById(event.dataTransfer.getData("text/plain"));
        if (!issue) return;
        if (issue.blocked) {
          showToast("Decision required", `${issue.id} is blocked by DEC-014. Record the decision before moving it.`, "alert");
          return;
        }
        issue.status = column.dataset.dropStatus;
        addActivity("tracker", "Maya Chen", "moved", `${issue.id} to ${statusDefinitions[issue.status].label}`);
        saveState();
        renderApp();
        showToast("Issue moved", `${issue.id} is now ${statusDefinitions[issue.status].label}.`, "tracker");
      });
    });
  }

  function renderDocumentsContent() {
    const page = documentById(state.ui.selectedDoc) || state.documents[0];
    const author = personById(page.author);
    const linkedIssues = (page.linkedIssues || []).map(issueById).filter(Boolean);
    const decisionBanner = page.id === "doc-certification-path" ? `<div class="document-decision ${state.decision.approved ? "is-approved" : ""}">
      <span class="activity-icon">${icon(state.decision.approved ? "check" : "alert")}</span>
      <span><strong>${state.decision.approved ? "DEC-014 approved" : "DEC-014 awaiting approval"}</strong><small>${state.decision.approved ? "Alternate evidence path recorded · six dependent items released" : "A controlled decision is required to protect the September 18 release."}</small></span>
      ${state.decision.approved ? `<button class="soft-button" type="button" data-action="show-decision-result">View outcome</button>` : `<button class="button" type="button" data-action="approve-path">Simulate approval</button>`}
    </div>` : "";

    const editor = state.ui.documentEditing ? `<div class="editor-wrap">
      <div class="editor-toolbar" aria-label="Formatting toolbar">
        <button class="editor-tool" type="button" data-action="editor-format" aria-label="Bold">B</button>
        <button class="editor-tool" type="button" data-action="editor-format" aria-label="Italic"><em>I</em></button>
        <button class="editor-tool" type="button" data-action="editor-format" aria-label="Heading">H2</button>
        <button class="editor-tool" type="button" data-action="editor-format" aria-label="Bulleted list">${icon("list")}</button>
        <button class="editor-tool" type="button" data-action="editor-format" aria-label="Insert link">${icon("link")}</button>
      </div>
      <textarea class="editor-area" id="document-editor" aria-label="Document content">${escapeHtml(page.raw)}</textarea>
      <div class="inline-actions editor-actions"><button class="button" type="button" data-action="publish-document">${icon("check")}Publish version ${page.version + 1}</button><button class="ghost-button" type="button" data-action="cancel-document-edit">Cancel</button></div>
    </div>` : `<div class="document-content">${page.body}</div>`;

    return `<section class="document-layout">
      <header class="content-header">
        <div class="header-title-wrap"><div class="header-eyebrow">Documents · ${escapeHtml(page.teamspace)}</div><h2>Page</h2></div>
        <div class="header-actions">
          <button class="ghost-button ${page.starred ? "is-active" : ""}" type="button" data-action="toggle-document-star">${icon("star")}${page.starred ? "Starred" : "Star"}</button>
          <button class="ghost-button" type="button" data-action="document-history">${icon("history")}History</button>
          ${state.ui.documentEditing ? "" : `<button class="button" type="button" data-action="edit-document">${icon("edit")}Edit</button>`}
        </div>
      </header>
      <div class="document-workspace">
        <article class="document-canvas">
          ${decisionBanner}
          <div class="document-meta">${avatar(author.id)}<span>${escapeHtml(author.name)}</span><span>·</span><span>Updated ${escapeHtml(page.updated)}</span><span>·</span><span>Version ${page.version}</span></div>
          <h1 class="document-title">${escapeHtml(page.title)}</h1>
          ${editor}
        </article>
        <aside class="document-sidebar" aria-label="Page details">
          <section class="side-section"><h4>Linked work</h4>
            ${linkedIssues.length ? linkedIssues.map((issue) => `<button class="document-row compact-row" type="button" data-action="open-issue" data-issue="${escapeHtml(issue.id)}"><span class="doc-icon">${icon("tracker")}</span><span class="row-primary"><strong>${escapeHtml(issue.id)}</strong><span>${escapeHtml(issue.title)}</span></span>${statusPill(statusForIssue(issue))}</button>`).join("") : `<p class="tiny muted">No linked work yet.</p>`}
          </section>
          <section class="side-section"><h4>Comments · ${(page.comments || []).length}</h4>
            ${(page.comments || []).map((comment) => { const member = personById(comment.author); return `<div class="comment">${avatar(member.id)}<div class="comment-copy"><strong>${escapeHtml(member.name)}</strong><time>${escapeHtml(comment.time)}</time><p>${escapeHtml(comment.text)}</p></div></div>`; }).join("") || `<p class="tiny muted">Start the discussion on this page.</p>`}
            <form class="comment-composer" data-form="document-comment"><input name="comment" type="text" placeholder="Add a comment" aria-label="Add page comment" required><button class="send-button" type="submit" aria-label="Post comment">${icon("send")}</button></form>
          </section>
          <section class="side-section"><h4>Page controls</h4><button class="panel-row" type="button" data-action="copy-page-link">${icon("link")}<span>Copy demo link</span></button><button class="panel-row" type="button" data-action="new-document">${icon("plus")}<span>Create child page</span></button></section>
        </aside>
      </div>
    </section>`;
  }

  function filteredNotifications() {
    const filter = state.ui.inboxFilter || "all";
    if (filter === "unread") return state.notifications.filter((notice) => notice.unread);
    if (filter === "mentions") return state.notifications.filter((notice) => notice.type === "mention");
    return state.notifications;
  }

  function notificationIcon(type) {
    return ({ decision: "alert", mention: "chat", issue: "tracker", comment: "chat", document: "file", chat: "chat" })[type] || "bell";
  }

  function renderInboxContent() {
    const notices = filteredNotifications();
    const selected = state.notifications.find((notice) => notice.id === state.ui.selectedNotification) || notices[0] || state.notifications[0];
    return `<section class="content-page">
      <header class="content-header"><div class="header-title-wrap"><div class="header-eyebrow">Workspace updates</div><h2>Inbox</h2></div><div class="header-actions"><span class="status-pill status-blue">${unreadCount()} unread</span><button class="ghost-button" type="button" data-action="mark-all-read">${icon("check")}Mark all read</button></div></header>
      <div class="content-tabs">
        ${[["all", "All updates"], ["unread", "Unread"], ["mentions", "Mentions"]].map(([id, label]) => `<button class="tab-button ${(state.ui.inboxFilter || "all") === id ? "is-active" : ""}" type="button" data-action="inbox-filter" data-filter="${id}">${label}</button>`).join("")}
      </div>
      <div class="inbox-layout">
        <div class="notification-list">${notices.length ? notices.map((notice) => `<button class="notification-row ${notice.unread ? "is-unread" : ""} ${selected?.id === notice.id ? "is-selected" : ""}" type="button" data-action="select-notification" data-notification="${escapeHtml(notice.id)}"><span class="unread-dot"></span><span class="notification-icon">${icon(notificationIcon(notice.type))}</span><span class="notification-copy"><strong>${escapeHtml(notice.title)}</strong><span>${escapeHtml(notice.detail)}</span><span>${escapeHtml(notice.time)}</span></span></button>`).join("") : `<div class="empty-state"><div><strong>You're caught up</strong><p>No updates match this filter.</p></div></div>`}</div>
        <div class="notification-preview">${selected ? `<article class="preview-card"><span class="notification-icon">${icon(notificationIcon(selected.type))}</span><h3>${escapeHtml(selected.title)}</h3><p>${escapeHtml(selected.detail)}</p><div class="property-grid"><div class="property"><label>Received</label><strong>${escapeHtml(selected.time)}</strong></div><div class="property"><label>Source</label><strong>${escapeHtml(selected.targetType)}</strong></div></div><div class="inline-actions"><button class="button" type="button" data-action="open-notification-target" data-notification="${escapeHtml(selected.id)}">Open ${escapeHtml(selected.targetType)}</button><button class="ghost-button" type="button" data-action="toggle-notification-read" data-notification="${escapeHtml(selected.id)}">${selected.unread ? "Mark read" : "Mark unread"}</button></div></article>` : ""}</div>
      </div>
    </section>`;
  }

  function renderPlannerContent() {
    const myOpen = state.issues.filter((issue) => issue.assignee === "maya" && issue.status !== "done");
    const scheduledIds = new Set(state.plannerEvents.map((event) => event.issueId));
    const days = [{ label: "Tue", date: "25" }, { label: "Wed", date: "26" }, { label: "Thu", date: "27" }, { label: "Fri", date: "28" }, { label: "Sat", date: "29" }];
    const times = ["9 AM", "11 AM", "1 PM", "3 PM"];
    let cells = `<div class="week-cell week-head"></div>${days.map((day) => `<div class="week-cell week-head"><span>${day.label}</span><strong>${day.date}</strong></div>`).join("")}`;
    times.forEach((time, slot) => {
      cells += `<div class="week-cell time-cell">${time}</div>`;
      days.forEach((day, dayIndex) => {
        const events = state.plannerEvents.filter((event) => event.day === dayIndex && event.slot === slot);
        cells += `<div class="week-cell">${events.map((event) => `<button class="calendar-event" type="button" data-action="open-issue" data-issue="${escapeHtml(event.issueId)}" style="--event-color:${event.color};--event-bg:${event.bg}"><strong>${escapeHtml(event.label)}</strong><span>${escapeHtml(event.time)}</span></button>`).join("")}</div>`;
      });
    });
    return `<section class="content-page">
      <header class="content-header"><div class="header-title-wrap"><div class="header-eyebrow">My coordinated work</div><h2>Planner · Aug 25–29</h2></div><div class="header-actions"><button class="ghost-button" type="button" data-action="planner-unscheduled">${icon("list")}Unscheduled</button><button class="button" type="button" data-action="new-issue">${icon("plus")}Add work</button></div></header>
      <div class="planner-shell">
        <div class="planner-summary"><div class="summary-card"><strong>${myOpen.length}</strong><span>Open items assigned to me</span></div><div class="summary-card"><strong>${state.plannerEvents.length}</strong><span>Scheduled work blocks</span></div><div class="summary-card"><strong>${myOpen.filter((issue) => !scheduledIds.has(issue.id)).length}</strong><span>Unscheduled items</span></div><div class="summary-card"><strong>${state.issues.filter((issue) => issue.blocked).length}</strong><span>Blocked across workspace</span></div></div>
        <div class="planner-scroll"><div class="week-grid">${cells}</div></div>
      </div>
    </section>`;
  }

  function renderChatContent() {
    const channel = state.channels.find((item) => item.id === state.ui.selectedChannel) || state.channels[0];
    const messages = state.messages[channel.id] || [];
    return `<section class="chat-layout">
      <header class="content-header"><div class="header-title-wrap"><div class="header-eyebrow">Channel · ${channel.description}</div><h2># ${escapeHtml(channel.name)}</h2></div><div class="header-actions"><span class="status-pill status-green">${people.length} teammates</span><button class="ghost-button" type="button" data-action="channel-details">${icon("users")}Details</button></div></header>
      <div class="message-stream" id="message-stream"><div class="day-divider"><span>Today</span></div>${messages.map((message) => { const member = personById(message.author); return `<article class="message">${avatar(member.id)}<div class="message-body"><div class="message-head"><strong>${escapeHtml(member.name)}</strong><time>${escapeHtml(message.time)}</time></div><p>${escapeHtml(message.text)}</p>${message.attachment ? `<button class="message-attachment" type="button" data-action="open-attachment" data-type="${escapeHtml(message.attachment.type)}" data-id="${escapeHtml(message.attachment.id)}"><span class="doc-icon">${icon(message.attachment.type === "issue" ? "tracker" : "file")}</span><span><strong>${escapeHtml(message.attachment.id)}</strong><br>${escapeHtml(message.attachment.label)}</span></button>` : ""}</div></article>`; }).join("")}</div>
      <form class="message-composer" data-form="chat-message"><button class="icon-button" type="button" data-action="attach-demo-file" aria-label="Attach a file">${icon("paperclip")}</button><textarea name="message" rows="1" placeholder="Message #${escapeHtml(channel.name)}" aria-label="Message ${escapeHtml(channel.name)}" required></textarea><button class="send-button" type="submit" aria-label="Send message">${icon("send")}</button></form>
    </section>`;
  }

  function renderDriveContent() {
    const selectedDrive = state.drives.find((drive) => drive.id === state.ui.selectedDrive) || state.drives[0];
    let files = state.files.filter((file) => file.drive === selectedDrive.id);
    if (state.ui.driveFilter === "starred") files = files.filter((file) => file.starred);
    if (state.ui.driveFilter === "recent") files = [...files].reverse();
    if (state.ui.driveSortReverse) files = [...files].reverse();
    return `<section class="content-page">
      <header class="content-header"><div class="header-title-wrap"><div class="header-eyebrow">Shared evidence and artifacts</div><h2>${escapeHtml(selectedDrive.name)}</h2></div><div class="header-actions"><button class="ghost-button" type="button" data-action="drive-recent">${icon("history")}Recent</button><button class="button" type="button" data-action="add-sample-file">${icon("plus")}Add sample file</button></div></header>
      <div class="content-body">
        <div class="drive-grid">${state.drives.map((drive) => `<button class="drive-card ${drive.id === selectedDrive.id ? "is-active" : ""}" type="button" data-action="select-drive" data-drive="${escapeHtml(drive.id)}"><span class="drive-icon" style="--drive-color:${drive.color}">${icon("drive")}</span><span><strong>${escapeHtml(drive.name)}</strong><span>${escapeHtml(drive.description)} · ${state.files.filter((file) => file.drive === drive.id).length} files</span></span></button>`).join("")}</div>
        <div class="content-toolbar"><strong>${files.length} files</strong><div class="toolbar-actions"><button class="ghost-button ${state.ui.driveFilter === "starred" ? "is-active" : ""}" type="button" data-action="drive-starred">${icon("star")}Starred</button><button class="ghost-button" type="button" data-action="drive-sort">${icon("filter")}Updated</button></div></div>
        <div class="file-table">${files.length ? files.map((file) => `<div class="file-row"><span class="file-type">${escapeHtml(file.type)}</span><button class="file-name plain-button" type="button" data-action="open-file" data-file="${escapeHtml(file.id)}">${escapeHtml(file.name)}</button><span class="file-meta">${escapeHtml(personById(file.owner).name)}</span><span class="file-meta">${escapeHtml(file.updated)}</span><span class="file-meta">${escapeHtml(file.size)}</span><button class="icon-button table-icon ${file.starred ? "is-active" : ""}" type="button" data-action="toggle-file-star" data-file="${escapeHtml(file.id)}" aria-label="${file.starred ? "Unstar" : "Star"} ${escapeHtml(file.name)}">${icon("star")}</button></div>`).join("") : `<div class="empty-state"><div><strong>No matching files</strong><p>Add a sample file or change the view.</p></div></div>`}</div>
      </div>
    </section>`;
  }

  function renderTeamContent() {
    const department = state.ui.selectedDepartment || "All";
    const members = department === "All" ? people : people.filter((member) => member.department === department);
    return `<section class="content-page">
      <header class="content-header"><div class="header-title-wrap"><div class="header-eyebrow">Workspace directory</div><h2>Team</h2></div><div class="header-actions"><span class="status-pill status-green">${people.length} modeled teammates</span><button class="button" type="button" data-action="invite-teammate">${icon("plus")}Invite sample teammate</button></div></header>
      <div class="content-toolbar"><strong>${escapeHtml(department)} · ${members.length}</strong><div class="toolbar-actions"><button class="ghost-button" type="button" data-action="team-capacity">${icon("calendar")}Capacity</button><button class="ghost-button" type="button" data-action="team-org">${icon("users")}Organization</button></div></div>
      <div class="content-body"><div class="team-grid">${members.map((member) => {
        const assigned = state.issues.filter((issue) => issue.assignee === member.id && issue.status !== "done");
        const completed = state.issues.filter((issue) => issue.assignee === member.id && issue.status === "done").length;
        return `<button class="member-card" type="button" data-action="open-profile" data-person="${member.id}"><div class="member-card-head">${avatar(member.id)}<span><h4>${escapeHtml(member.name)}</h4><p>${escapeHtml(member.role)} · ${escapeHtml(member.department)}</p></span></div><div class="member-stats"><span class="member-stat"><strong>${assigned.length}</strong><span>Open work</span></span><span class="member-stat"><strong>${member.capacity}%</strong><span>Capacity used</span></span></div><span class="progress-track" style="--progress:${member.capacity}%;--progress-color:${member.capacity > 90 ? "#f07a6a" : "#5683da"}"><span></span></span><span class="tiny muted">${completed} completed · click for profile</span></button>`;
      }).join("")}</div></div>
    </section>`;
  }

  function addActivity(iconName, actor, action, target) {
    state.activities.unshift({ id: `a-${Date.now()}`, icon: iconName, actor, action, target, time: "Just now" });
    state.activities = state.activities.slice(0, 16);
  }

  function issueRelationshipMarkup(issue) {
    const dependentIds = ["SMN-202", "SMN-207", "SMN-213", "SMN-221", "SMN-229", "SMN-236"];
    const isDecisionSource = issue.id === "SMN-184";
    const isDependent = dependentIds.includes(issue.id);
    if (!isDecisionSource && !isDependent) return `<p class="tiny muted">No active blockers. This item contributes to ${escapeHtml(issue.milestone)}.</p>`;
    if (isDecisionSource) {
      return `<div class="relationship-card"><span class="relationship-icon">${icon("link")}</span><span><strong>${state.decision.approved ? "Released six dependent items" : "Blocks six dependent items"}</strong><small>${dependentIds.join(" · ")}</small></span><button class="ghost-button" type="button" data-action="show-decision-result">View chain</button></div>`;
    }
    return `<div class="relationship-card ${issue.blocked ? "is-blocked" : ""}"><span class="relationship-icon">${icon(issue.blocked ? "alert" : "check")}</span><span><strong>${issue.blocked ? "Blocked by DEC-014" : "Released by DEC-014"}</strong><small>${issue.blocked ? "Awaiting certification evidence decision" : "Alternate path approved; work may proceed"}</small></span><button class="ghost-button" type="button" data-action="open-decision">Open decision</button></div>`;
  }

  function renderIssueDrawer(issueId) {
    const issue = issueById(issueId);
    if (!issue) return "";
    const owner = personById(issue.assignee);
    const project = projectById(issue.project);
    const linkedPage = issue.linkedDoc ? documentById(issue.linkedDoc) : null;
    const comments = issue.comments || [];
    const evidence = issue.project === "SMN" ? state.files.filter((file) => file.drive === "program-records").slice(0, 3) : [];
    return `<header class="drawer-header"><h2>Tracker · ${escapeHtml(project.short)}</h2><button class="close-button" type="button" data-action="close-drawer" aria-label="Close issue details">${icon("close")}</button></header>
      <div class="drawer-body">
        <span class="drawer-key">${escapeHtml(issue.id)} · ${escapeHtml(issue.component)}</span>
        <h1 class="drawer-title" id="drawer-title">${escapeHtml(issue.title)}</h1>
        <div class="inline-actions drawer-status-line">${statusPill(statusForIssue(issue))}${priorityPill(issue.priority)}${issue.blocked ? `<span class="tag tag-red">DEC-014 BLOCKER</span>` : ""}</div>
        <div class="property-grid">
          <div class="property"><label>Owner</label><strong class="property-person">${avatar(owner.id)}${escapeHtml(owner.name)}</strong></div>
          <div class="property"><label>Project</label><strong>${escapeHtml(project.name)}</strong></div>
          <div class="property"><label>Due</label><strong>${escapeHtml(issue.due)}</strong></div>
          <div class="property"><label>Estimate</label><strong>${escapeHtml(issue.spent)} used of ${escapeHtml(issue.estimate)}</strong></div>
          <div class="property"><label>Milestone</label><strong>${escapeHtml(issue.milestone)}</strong></div>
          <div class="property"><label>Iteration</label><strong>Release 3 · Week 4</strong></div>
        </div>
        <div class="field"><label for="issue-status-select">Workflow status</label><select id="issue-status-select" data-change="issue-status" data-issue="${escapeHtml(issue.id)}" ${issue.blocked ? "disabled" : ""}>${["backlog", "todo", "in-progress", "in-review", "done"].map((status) => `<option value="${status}" ${issue.status === status ? "selected" : ""}>${statusDefinitions[status].label}</option>`).join("")}</select>${issue.blocked ? `<span class="field-help">Record DEC-014 before changing this item.</span>` : ""}</div>
        <section class="drawer-section"><h3>Description</h3><p>${escapeHtml(issue.description)}</p></section>
        <section class="drawer-section"><h3>Relationships and schedule exposure</h3>${issueRelationshipMarkup(issue)}</section>
        <section class="drawer-section"><h3>Acceptance checklist · ${(issue.checklist || []).filter((item) => item.done).length}/${(issue.checklist || []).length}</h3><div class="checklist">${(issue.checklist || []).map((item, index) => `<button class="checklist-row ${item.done ? "is-done" : ""}" type="button" data-action="toggle-checklist" data-issue="${escapeHtml(issue.id)}" data-index="${index}"><span class="check-box">${icon("check")}</span><span>${escapeHtml(item.text)}</span></button>`).join("")}</div></section>
        ${linkedPage ? `<section class="drawer-section"><h3>Linked knowledge</h3><button class="linked-record" type="button" data-action="select-document" data-document="${escapeHtml(linkedPage.id)}"><span class="doc-icon">${icon("file")}</span><span class="row-primary"><strong>${escapeHtml(linkedPage.title)}</strong><span>${escapeHtml(linkedPage.teamspace)} · version ${linkedPage.version}</span></span>${icon("chevron")}</button></section>` : ""}
        ${evidence.length ? `<section class="drawer-section"><h3>Supporting evidence</h3>${evidence.map((file) => `<button class="linked-record" type="button" data-action="open-file" data-file="${escapeHtml(file.id)}"><span class="file-type">${escapeHtml(file.type)}</span><span class="row-primary"><strong>${escapeHtml(file.name)}</strong><span>${escapeHtml(file.updated)} · ${escapeHtml(file.size)}</span></span>${icon("chevron")}</button>`).join("")}</section>` : ""}
        <section class="drawer-section"><h3>Discussion · ${comments.length}</h3>${comments.map((comment) => { const member = personById(comment.author); return `<div class="comment">${avatar(member.id)}<div class="comment-copy"><strong>${escapeHtml(member.name)}</strong><time>${escapeHtml(comment.time)}</time><p>${escapeHtml(comment.text)}</p></div></div>`; }).join("") || `<p class="tiny muted comment-empty">No issue comments yet.</p>`}<form class="comment-composer issue-comment-form" data-form="issue-comment"><input name="comment" type="text" placeholder="Comment on ${escapeHtml(issue.id)}" aria-label="Add issue comment" required><button class="send-button" type="submit" aria-label="Post comment">${icon("send")}</button></form></section>
        <section class="drawer-section"><h3>Recent history</h3><div class="history-list"><div class="history-row"><span class="activity-icon">${icon("tracker")}</span><span><strong>${escapeHtml(owner.name)}</strong><small>owns this item · due ${escapeHtml(issue.due)}</small></span></div>${issue.id.startsWith("SMN-") ? `<div class="history-row"><span class="activity-icon">${icon(state.decision.approved ? "check" : "alert")}</span><span><strong>${state.decision.approved ? "Decision state synchronized" : "Decision dependency recorded"}</strong><small>${escapeHtml(state.decision.updated)}</small></span></div>` : ""}</div></section>
      </div>`;
  }

  function openIssueDrawer(issueId) {
    const issue = issueById(issueId);
    if (!issue) return;
    const overlay = document.getElementById("drawer-overlay");
    const drawer = document.getElementById("detail-drawer");
    if (!overlay || !drawer) return;
    if (overlay.hidden) lastFocusedElement = document.activeElement;
    activeDrawerIssue = issueId;
    drawer.innerHTML = renderIssueDrawer(issueId);
    overlay.hidden = false;
    document.body.classList.add("overlay-open");
    window.requestAnimationFrame(() => drawer.querySelector("[data-action='close-drawer']")?.focus());
  }

  function refreshIssueDrawer() {
    if (!activeDrawerIssue || document.getElementById("drawer-overlay")?.hidden) return;
    const drawer = document.getElementById("detail-drawer");
    if (drawer) drawer.innerHTML = renderIssueDrawer(activeDrawerIssue);
  }

  function closeDrawer(restoreFocus = true) {
    const overlay = document.getElementById("drawer-overlay");
    if (!overlay || overlay.hidden) return;
    overlay.hidden = true;
    activeDrawerIssue = null;
    if (document.getElementById("modal-overlay")?.hidden) document.body.classList.remove("overlay-open");
    if (restoreFocus && lastFocusedElement instanceof HTMLElement) lastFocusedElement.focus({ preventScroll: true });
  }

  function openModal(title, body, footer = "", className = "") {
    const overlay = document.getElementById("modal-overlay");
    const card = document.getElementById("modal-card");
    if (!overlay || !card) return;
    if (overlay.hidden) lastFocusedElement = document.activeElement;
    card.className = `modal-card ${className}`.trim();
    card.setAttribute("aria-labelledby", "modal-title");
    card.removeAttribute("aria-label");
    card.innerHTML = `<header class="modal-header"><h2 id="modal-title">${escapeHtml(title)}</h2><button class="close-button" type="button" data-action="close-modal" aria-label="Close dialog">${icon("close")}</button></header><div class="modal-body">${body}</div>${footer ? `<footer class="modal-footer">${footer}</footer>` : ""}`;
    overlay.hidden = false;
    document.body.classList.add("overlay-open");
    window.requestAnimationFrame(() => (card.querySelector("[autofocus]") || card.querySelector("input, textarea, select, button"))?.focus());
  }

  function closeModal(restoreFocus = true) {
    const overlay = document.getElementById("modal-overlay");
    if (!overlay || overlay.hidden) return;
    overlay.hidden = true;
    const card = document.getElementById("modal-card");
    if (card) card.innerHTML = "";
    if (document.getElementById("drawer-overlay")?.hidden) document.body.classList.remove("overlay-open");
    if (restoreFocus && lastFocusedElement instanceof HTMLElement) lastFocusedElement.focus({ preventScroll: true });
  }

  function decisionModalBody() {
    const owner = personById(state.decision.owner);
    const dependentIssues = ["SMN-202", "SMN-207", "SMN-213", "SMN-221", "SMN-229", "SMN-236"].map(issueById).filter(Boolean);
    return `<div class="decision-summary ${state.decision.approved ? "is-approved" : ""}"><span class="notification-icon">${icon(state.decision.approved ? "check" : "alert")}</span><span><strong>${state.decision.approved ? "Approved and synchronized" : "Leadership intervention requested"}</strong><p>${state.decision.approved ? "The alternate evidence path is now part of the governed record." : "The alternate path preserves the acceptance basis and keeps the September 18 milestone achievable."}</p></span></div><div class="property-grid"><div class="property"><label>Decision</label><strong>${escapeHtml(state.decision.id)}</strong></div><div class="property"><label>Accountable approver</label><strong>${escapeHtml(owner.name)}</strong></div><div class="property"><label>Forecast</label><strong>${state.decision.approved ? "Sep 18" : "Oct 2 without action"}</strong></div><div class="property"><label>Exposure</label><strong>${state.decision.approved ? "Moderate" : "High"}</strong></div></div><h3 class="modal-section-title">Dependent work · ${dependentIssues.length}</h3><div class="modal-list">${dependentIssues.map((issue) => `<button class="linked-record" type="button" data-action="open-issue" data-issue="${escapeHtml(issue.id)}"><span class="doc-icon">${icon("tracker")}</span><span class="row-primary"><strong>${escapeHtml(issue.id)} · ${escapeHtml(issue.title)}</strong><span>${issue.blocked ? "Blocked pending decision" : "Ready to resume"}</span></span>${statusPill(statusForIssue(issue))}</button>`).join("")}</div>`;
  }

  function openDecisionModal() {
    openModal(state.decision.title, decisionModalBody(), `<button class="ghost-button" type="button" data-action="select-document" data-document="doc-certification-path">${icon("file")}Open full decision page</button>${state.decision.approved ? `<button class="button" type="button" data-action="show-decision-result">${icon("check")}View synchronized outcome</button>` : `<button class="button" type="button" data-action="approve-path">${icon("check")}Simulate approval</button>`}`);
  }

  function showDecisionResult() {
    const resumed = ["SMN-202", "SMN-207", "SMN-213", "SMN-221", "SMN-229", "SMN-236"].map(issueById).filter(Boolean);
    openModal("Decision synchronization", `<div class="cascade-hero"><span class="cascade-check">${icon(state.decision.approved ? "check" : "alert")}</span><div><h3>${state.decision.approved ? "One decision updated the operating record" : "Decision has not been recorded yet"}</h3><p>${state.decision.approved ? "Work, schedule, risk, audit history, notifications, and briefing facts now share the same approved state." : "Simulate approval to see the connected updates."}</p></div></div><div class="cascade-grid"><div><strong>${state.decision.approved ? "6" : "0"}</strong><span>Items unblocked</span></div><div><strong>${state.decision.approved ? "Sep 18" : "Oct 2"}</strong><span>Release forecast</span></div><div><strong>${state.decision.approved ? "Moderate" : "High"}</strong><span>Exposure</span></div><div><strong>${state.decision.approved ? "v8" : "v7"}</strong><span>Decision page</span></div></div><div class="modal-list">${resumed.map((issue) => `<button class="linked-record" type="button" data-action="open-issue" data-issue="${escapeHtml(issue.id)}"><span class="doc-icon">${icon(issue.blocked ? "alert" : "check")}</span><span class="row-primary"><strong>${escapeHtml(issue.id)}</strong><span>${escapeHtml(issue.title)}</span></span>${statusPill(statusForIssue(issue))}</button>`).join("")}</div>`, state.decision.approved ? `<button class="ghost-button" type="button" data-module="tracker">Open Tracker board</button><button class="button" type="button" data-action="go-office">View refreshed home</button>` : `<button class="button" type="button" data-action="approve-path">Simulate approval</button>`);
  }

  function approveDecision() {
    if (state.decision.approved) {
      showDecisionResult();
      return;
    }
    const dependentIds = ["SMN-202", "SMN-207", "SMN-213", "SMN-221", "SMN-229", "SMN-236"];
    state.decision.approved = true;
    state.decision.updated = "Just now · approved by Dana Kessler";
    dependentIds.forEach((id) => {
      const issue = issueById(id);
      if (issue) issue.blocked = false;
    });
    const gateIssue = issueById("SMN-184");
    const approvalCheck = gateIssue?.checklist?.find((item) => item.text === "Record approval decision");
    if (approvalCheck) approvalCheck.done = true;
    const project = projectById("SMN");
    project.progress = Math.max(project.progress, 68);
    const page = documentById("doc-certification-path");
    if (page) {
      page.version = Math.max(page.version, 8);
      page.updated = "Just now";
      page.comments = page.comments || [];
      page.comments.push({ id: `c-${Date.now()}`, author: "dana", time: "Just now", text: "Approved. Proceed with the alternate evidence path and keep the external artifact tracked to closure." });
      page.history = page.history || [];
      page.history.unshift({ version: page.version, actor: "Dana Kessler", time: "Just now", detail: "Approved DEC-014 and recorded the alternate certification path." });
    }
    state.notifications.unshift({ id: `notice-${Date.now()}`, type: "decision", title: "DEC-014 approved — six items resumed", detail: "The release forecast returned to September 18 and dependent owners were notified.", time: "Just now", unread: true, targetType: "document", targetId: "doc-certification-path" });
    state.messages["delivery-room"].push({ id: `m-${Date.now()}`, author: "dana", time: "Just now", text: "DEC-014 approved. Proceed with the alternate certification evidence path; external confirmation remains tracked.", attachment: { type: "document", id: "doc-certification-path", label: "Certification path decision record · version 8" } });
    addActivity("check", "Dana Kessler", "approved DEC-014 and released six items", "Sentinel Mesh Node · Field Release 3");
    saveState();
    closeModal(false);
    renderApp();
    refreshIssueDrawer();
    showToast("Decision synchronized", "Six items resumed and the September 18 forecast was restored.", "check");
    window.setTimeout(showDecisionResult, 180);
  }

  function openProjectSummary() {
    const project = projectById(state.ui.currentProject);
    const issues = state.issues.filter((issue) => issue.project === project.id);
    const open = issues.filter((issue) => issue.status !== "done");
    const done = issues.filter((issue) => issue.status === "done").length;
    const health = currentProjectHealth(project);
    openModal(`${project.name} summary`, `<div class="project-summary-head"><span class="project-color large" style="--project-color:${project.color}"></span><span><strong>${escapeHtml(project.milestone)}</strong><small>Target ${escapeHtml(project.due)} · owned by ${escapeHtml(personById(project.owner).name)}</small></span>${healthPill(health)}</div><div class="cascade-grid"><div><strong>${project.progress}%</strong><span>Progress</span></div><div><strong>${open.length}</strong><span>Open issues</span></div><div><strong>${done}</strong><span>Completed</span></div><div><strong>${open.filter((issue) => issue.blocked).length}</strong><span>Blocked</span></div></div><h3 class="modal-section-title">Current focus</h3><div class="modal-list">${open.slice(0, 6).map((issue) => `<button class="linked-record" type="button" data-action="open-issue" data-issue="${escapeHtml(issue.id)}"><span class="doc-icon">${icon("tracker")}</span><span class="row-primary"><strong>${escapeHtml(issue.id)} · ${escapeHtml(issue.title)}</strong><span>${escapeHtml(issue.assignee ? personById(issue.assignee).name : "Unassigned")} · due ${escapeHtml(issue.due)}</span></span>${statusPill(statusForIssue(issue))}</button>`).join("")}</div>`, `<button class="button" type="button" data-action="tracker-view" data-view="board">Open board</button>`);
  }

  function openGlobalSearch(initialQuery = "") {
    const overlay = document.getElementById("modal-overlay");
    const card = document.getElementById("modal-card");
    if (!overlay || !card) return;
    if (overlay.hidden) lastFocusedElement = document.activeElement;
    card.className = "modal-card search-modal";
    card.removeAttribute("aria-labelledby");
    card.setAttribute("aria-label", "Search workspace");
    card.innerHTML = `<div class="global-search-input">${icon("search")}<input id="global-search-input" type="search" value="${escapeHtml(initialQuery)}" placeholder="Search issues, pages, files, people, and channels" aria-label="Search workspace" autofocus><kbd>Esc</kbd></div><div class="search-results" id="global-search-results"></div><footer class="modal-footer search-footer"><span class="tiny muted">Static cross-workspace search · synthetic records only</span><button class="ghost-button" type="button" data-action="close-modal">Close</button></footer>`;
    overlay.hidden = false;
    document.body.classList.add("overlay-open");
    renderGlobalSearchResults(initialQuery);
    window.requestAnimationFrame(() => document.getElementById("global-search-input")?.focus());
  }

  function renderGlobalSearchResults(query) {
    const region = document.getElementById("global-search-results");
    if (!region) return;
    const needle = String(query || "").trim().toLowerCase();
    const match = (values) => !needle || values.join(" ").toLowerCase().includes(needle);
    const results = [];
    if (match([state.decision.id, state.decision.title, "certification approval evidence Sentinel Mesh Node"])) results.push({ type: "document", id: "doc-certification-path", title: `${state.decision.id} · ${state.decision.title}`, meta: `${state.decision.approved ? "Approved" : "Awaiting approval"} · Sentinel Mesh Node`, icon: state.decision.approved ? "check" : "alert" });
    state.issues.filter((issue) => match([issue.id, issue.title, issue.component, issue.milestone, ...(issue.tags || [])])).slice(0, needle ? 8 : 3).forEach((issue) => results.push({ type: "issue", id: issue.id, title: `${issue.id} · ${issue.title}`, meta: `${projectById(issue.project).short} · ${statusDefinitions[statusForIssue(issue)].label}`, icon: "tracker" }));
    state.documents.filter((page) => match([page.title, page.teamspace, page.raw])).slice(0, needle ? 6 : 2).forEach((page) => results.push({ type: "document", id: page.id, title: page.title, meta: `${page.teamspace} · version ${page.version}`, icon: "file" }));
    state.files.filter((file) => match([file.name, file.type, personById(file.owner).name])).slice(0, 5).forEach((file) => results.push({ type: "file", id: file.id, title: file.name, meta: `${file.type} · ${file.size}`, icon: "drive" }));
    people.filter((member) => match([member.name, member.role, member.department])).slice(0, 5).forEach((member) => results.push({ type: "person", id: member.id, title: member.name, meta: `${member.role} · ${member.department}`, icon: "users" }));
    state.channels.filter((channel) => match([channel.name, channel.description])).slice(0, 4).forEach((channel) => results.push({ type: "channel", id: channel.id, title: `# ${channel.name}`, meta: channel.description, icon: "chat" }));
    state.projects.filter((project) => match([project.id, project.name, project.milestone])).slice(0, 4).forEach((project) => results.push({ type: "project", id: project.id, title: project.name, meta: `${project.id} · ${project.milestone}`, icon: "component" }));
    region.innerHTML = results.length ? results.slice(0, 18).map((result) => `<button class="search-result" type="button" data-action="search-result" data-type="${result.type}" data-id="${escapeHtml(result.id)}"><span class="result-icon">${icon(result.icon)}</span><span class="result-copy"><strong>${escapeHtml(result.title)}</strong><span>${escapeHtml(result.meta)}</span></span><span class="result-type">${escapeHtml(result.type)}</span></button>`).join("") : `<div class="empty-state"><div><strong>No workspace matches</strong><p>Try a project key, decision, teammate, or file type.</p></div></div>`;
  }

  function openQuickCreate() {
    openModal("Create in this workspace", `<div class="quick-create-grid"><button class="quick-create-card" type="button" data-action="new-issue"><span>${icon("tracker")}</span><strong>Issue</strong><small>Track accountable work, status, and dependencies.</small></button><button class="quick-create-card" type="button" data-action="new-document"><span>${icon("file")}</span><strong>Document</strong><small>Create living knowledge linked to delivery.</small></button><button class="quick-create-card" type="button" data-action="new-project"><span>${icon("component")}</span><strong>Project</strong><small>Start a project with governed work and knowledge.</small></button><button class="quick-create-card" type="button" data-action="new-channel"><span>${icon("chat")}</span><strong>Channel</strong><small>Open a focused team conversation.</small></button></div><p class="demo-note">Everything created here stays only in this browser and can be cleared with Reset.</p>`);
  }

  function openNewIssueModal() {
    const defaultProject = projectById(state.ui.currentProject);
    openModal("Create issue", `<form id="new-issue-form" data-form="new-issue"><div class="field"><label for="new-issue-title">Summary</label><input id="new-issue-title" name="title" type="text" placeholder="Describe the outcome or work" required autofocus></div><div class="field-row"><div class="field"><label for="new-issue-project">Project</label><select id="new-issue-project" name="project">${state.projects.map((project) => `<option value="${project.id}" ${project.id === defaultProject.id ? "selected" : ""}>${escapeHtml(project.name)}</option>`).join("")}</select></div><div class="field"><label for="new-issue-status">Status</label><select id="new-issue-status" name="status"><option value="backlog">Backlog</option><option value="todo" selected>Todo</option><option value="in-progress">In progress</option></select></div></div><div class="field-row"><div class="field"><label for="new-issue-owner">Owner</label><select id="new-issue-owner" name="assignee">${people.map((member) => `<option value="${member.id}" ${member.id === "maya" ? "selected" : ""}>${escapeHtml(member.name)}</option>`).join("")}</select></div><div class="field"><label for="new-issue-priority">Priority</label><select id="new-issue-priority" name="priority"><option value="medium">Medium</option><option value="high">High</option><option value="urgent">Urgent</option><option value="low">Low</option></select></div></div><div class="field-row"><div class="field"><label for="new-issue-due">Due</label><input id="new-issue-due" name="due" type="text" value="Sep 12" required></div><div class="field"><label for="new-issue-estimate">Estimate</label><input id="new-issue-estimate" name="estimate" type="text" value="5h" required></div></div><div class="field"><label for="new-issue-description">Description</label><textarea id="new-issue-description" name="description" placeholder="Add acceptance context, constraints, or notes"></textarea></div></form>`, `<button class="ghost-button" type="button" data-action="close-modal">Cancel</button><button class="button" type="submit" form="new-issue-form">${icon("plus")}Create issue</button>`);
  }

  function openNewDocumentModal() {
    const currentProject = projectById(state.ui.currentProject);
    openModal("Create document", `<form id="new-document-form" data-form="new-document"><div class="field"><label for="new-page-title">Page title</label><input id="new-page-title" name="title" type="text" placeholder="Give the page a clear title" required autofocus></div><div class="field"><label for="new-page-teamspace">Teamspace</label><select id="new-page-teamspace" name="teamspace">${state.projects.map((project) => `<option value="${escapeHtml(project.name)}" ${project.id === currentProject.id ? "selected" : ""}>${escapeHtml(project.name)}</option>`).join("")}</select></div><div class="field"><label for="new-page-body">Starting content</label><textarea id="new-page-body" name="body" required>Purpose\nDescribe why this page exists and the outcome it supports.\n\nNext steps\nAdd owners, linked work, evidence, and review decisions.</textarea></div></form>`, `<button class="ghost-button" type="button" data-action="close-modal">Cancel</button><button class="button" type="submit" form="new-document-form">${icon("plus")}Create page</button>`);
  }

  function openNewProjectModal() {
    openModal("Create project", `<form id="new-project-form" data-form="new-project"><div class="field"><label for="new-project-name">Project name</label><input id="new-project-name" name="name" type="text" placeholder="Example: Network Modernization" required autofocus></div><div class="field-row"><div class="field"><label for="new-project-code">Key</label><input id="new-project-code" name="code" type="text" maxlength="5" placeholder="NET" required></div><div class="field"><label for="new-project-due">Target date</label><input id="new-project-due" name="due" type="text" value="Oct 30" required></div></div><div class="field"><label for="new-project-milestone">First milestone</label><input id="new-project-milestone" name="milestone" type="text" value="Delivery kickoff" required></div><p class="demo-note">The static demo creates a project, a kickoff issue, and a starter overview page together.</p></form>`, `<button class="ghost-button" type="button" data-action="close-modal">Cancel</button><button class="button" type="submit" form="new-project-form">${icon("plus")}Create project</button>`);
  }

  function openNewChannelModal() {
    openModal("Create channel", `<form id="new-channel-form" data-form="new-channel"><div class="field"><label for="new-channel-name">Channel name</label><input id="new-channel-name" name="name" type="text" placeholder="project-coordination" required autofocus></div><div class="field"><label for="new-channel-description">Purpose</label><input id="new-channel-description" name="description" type="text" placeholder="What will the team coordinate here?" required></div></form>`, `<button class="ghost-button" type="button" data-action="close-modal">Cancel</button><button class="button" type="submit" form="new-channel-form">${icon("plus")}Create channel</button>`);
  }

  function openAddFileModal() {
    const drive = state.drives.find((item) => item.id === state.ui.selectedDrive) || state.drives[0];
    openModal("Add sample file", `<form id="add-file-form" data-form="add-file"><div class="field"><label for="sample-file-name">File name</label><input id="sample-file-name" name="name" type="text" value="certification-follow-up-log.xlsx" required autofocus></div><div class="field-row"><div class="field"><label for="sample-file-type">Type</label><select id="sample-file-type" name="type"><option>XLSX</option><option>PDF</option><option>DOCX</option><option>JSON</option></select></div><div class="field"><label for="sample-file-size">Display size</label><input id="sample-file-size" name="size" type="text" value="84 KB" required></div></div><div class="field"><label>Drive</label><input type="text" value="${escapeHtml(drive.name)}" disabled></div><p class="demo-note">No file is uploaded. This adds synthetic metadata so coworkers can test the workflow safely.</p></form>`, `<button class="ghost-button" type="button" data-action="close-modal">Cancel</button><button class="button" type="submit" form="add-file-form">${icon("plus")}Add sample</button>`);
  }

  function openInviteModal() {
    openModal("Invite sample teammate", `<form id="invite-form" data-form="invite"><div class="field"><label for="invite-name">Name</label><input id="invite-name" name="name" type="text" value="Riley Morgan" required autofocus></div><div class="field"><label for="invite-email">Email</label><input id="invite-email" name="email" type="email" value="riley.morgan@example.test" required></div><div class="field"><label for="invite-role">Workspace role</label><select id="invite-role" name="role"><option>Member</option><option>Guest</option><option>Workspace administrator</option></select></div><p class="demo-note">This records a synthetic invitation event. It does not send email or contact a server.</p></form>`, `<button class="ghost-button" type="button" data-action="close-modal">Cancel</button><button class="button" type="submit" form="invite-form">${icon("send")}Simulate invite</button>`);
  }

  function openProfile(personId) {
    const member = personById(personId);
    const assigned = state.issues.filter((issue) => issue.assignee === member.id && issue.status !== "done");
    const authored = state.documents.filter((page) => page.author === member.id);
    openModal(member.name, `<div class="profile-hero">${avatar(member.id)}<span><h3>${escapeHtml(member.role)}</h3><p>${escapeHtml(member.department)} · active in Main workspace</p></span><span class="status-pill status-green">Online</span></div><div class="cascade-grid"><div><strong>${assigned.length}</strong><span>Open work</span></div><div><strong>${member.capacity}%</strong><span>Capacity used</span></div><div><strong>${authored.length}</strong><span>Pages owned</span></div><div><strong>${state.issues.filter((issue) => issue.assignee === member.id && issue.status === "done").length}</strong><span>Completed</span></div></div><h3 class="modal-section-title">Assigned work</h3><div class="modal-list">${assigned.slice(0, 5).map((issue) => `<button class="linked-record" type="button" data-action="open-issue" data-issue="${escapeHtml(issue.id)}"><span class="doc-icon">${icon("tracker")}</span><span class="row-primary"><strong>${escapeHtml(issue.id)}</strong><span>${escapeHtml(issue.title)}</span></span>${statusPill(statusForIssue(issue))}</button>`).join("") || `<p class="tiny muted">No open work.</p>`}</div>`, `<button class="ghost-button" type="button" data-action="start-direct-message" data-person="${member.id}">${icon("chat")}Message</button><button class="button" type="button" data-action="close-modal">Done</button>`);
  }

  function openFilePreview(fileId) {
    const file = state.files.find((item) => item.id === fileId);
    if (!file) return;
    const drive = state.drives.find((item) => item.id === file.drive);
    openModal(file.name, `<div class="file-preview-hero"><span class="file-preview-type">${escapeHtml(file.type)}</span><span><h3>Sample file metadata</h3><p>${escapeHtml(drive?.name || "Drive")} · ${escapeHtml(file.size)}</p></span></div><div class="property-grid"><div class="property"><label>Owner</label><strong>${escapeHtml(personById(file.owner).name)}</strong></div><div class="property"><label>Updated</label><strong>${escapeHtml(file.updated)}</strong></div><div class="property"><label>Classification</label><strong>Synthetic demo record</strong></div><div class="property"><label>Storage</label><strong>Browser state only</strong></div></div><div class="synthetic-preview"><span>${icon("file")}</span><strong>Preview intentionally simulated</strong><p>This concept stores no binary file and makes no upload or network request.</p></div>`, `<button class="ghost-button ${file.starred ? "is-active" : ""}" type="button" data-action="toggle-file-star" data-file="${escapeHtml(file.id)}">${icon("star")}${file.starred ? "Starred" : "Star"}</button><button class="button" type="button" data-action="close-modal">Done</button>`);
  }

  function openDocumentHistory() {
    const page = documentById(state.ui.selectedDoc);
    if (!page) return;
    const history = page.history || [];
    const defaults = [{ version: page.version, actor: personById(page.author).name, time: page.updated, detail: "Current published version" }, { version: Math.max(1, page.version - 1), actor: "Lena Ortiz", time: "Yesterday", detail: "Reconciled reviewer comments and linked work" }, { version: Math.max(1, page.version - 2), actor: "Maya Chen", time: "Monday", detail: "Added recommendation and approval conditions" }];
    const entries = [...history, ...defaults].filter((entry, index, list) => list.findIndex((candidate) => candidate.version === entry.version) === index).sort((a, b) => b.version - a.version);
    openModal(`Version history · ${page.title}`, `<div class="version-list">${entries.map((entry, index) => `<div class="version-row ${index === 0 ? "is-current" : ""}"><span class="version-number">v${entry.version}</span><span><strong>${escapeHtml(entry.detail)}</strong><small>${escapeHtml(entry.actor)} · ${escapeHtml(entry.time)}</small></span>${index === 0 ? `<span class="status-pill status-green">Current</span>` : `<button class="ghost-button" type="button" data-action="preview-version" data-version="${entry.version}">Preview</button>`}</div>`).join("")}</div>`, `<button class="button" type="button" data-action="close-modal">Done</button>`);
  }

  function openTrackerFacet(kind) {
    const project = projectById(state.ui.currentProject);
    const issues = state.issues.filter((issue) => issue.project === project.id);
    if (kind === "components") {
      const groups = [...new Set(issues.map((issue) => issue.component))].map((component) => ({ component, issues: issues.filter((issue) => issue.component === component) }));
      openModal(`${project.name} components`, `<div class="facet-grid">${groups.map((group) => `<button class="facet-card" type="button" data-action="apply-tracker-search" data-query="${escapeHtml(group.component)}"><span class="notification-icon">${icon("component")}</span><span><strong>${escapeHtml(group.component)}</strong><small>${group.issues.length} issues · ${group.issues.filter((issue) => issue.status !== "done").length} open</small></span></button>`).join("")}</div>`);
      return;
    }
    if (kind === "milestones") {
      openModal(`${project.name} milestones`, `<div class="milestone-card"><span class="milestone-flag">${icon("milestone")}</span><span><strong>${escapeHtml(project.milestone)}</strong><small>Target ${escapeHtml(project.due)} · ${project.progress}% complete</small><span class="progress-track" style="--progress:${project.progress}%;--progress-color:${currentProjectHealth(project) === "amber" ? "#e09a3a" : "#4db878"}"><span></span></span></span>${healthPill(currentProjectHealth(project))}</div><div class="property-grid"><div class="property"><label>Open work</label><strong>${issues.filter((issue) => issue.status !== "done").length}</strong></div><div class="property"><label>Blocked</label><strong>${issues.filter((issue) => issue.blocked).length}</strong></div></div>`);
      return;
    }
    openModal("Issue templates", `<div class="quick-create-grid"><button class="quick-create-card" type="button" data-action="new-issue"><span>${icon("template")}</span><strong>Delivery task</strong><small>Owner, estimate, due date, and acceptance checklist.</small></button><button class="quick-create-card" type="button" data-action="new-issue"><span>${icon("alert")}</span><strong>Risk action</strong><small>Mitigation work linked to an intervention or decision.</small></button><button class="quick-create-card" type="button" data-action="new-issue"><span>${icon("check")}</span><strong>Approval gate</strong><small>Controlled review with evidence and accountable approver.</small></button></div>`);
  }

  function openBlockedWork() {
    const blocked = state.issues.filter((issue) => issue.blocked);
    openModal("Blocked work", blocked.length ? `<p class="modal-intro">${blocked.length} items are waiting on ${escapeHtml(state.decision.id)}. Open any item to inspect the dependency.</p><div class="modal-list">${blocked.map((issue) => `<button class="linked-record" type="button" data-action="open-issue" data-issue="${escapeHtml(issue.id)}"><span class="doc-icon danger-icon">${icon("alert")}</span><span class="row-primary"><strong>${escapeHtml(issue.id)} · ${escapeHtml(issue.title)}</strong><span>${escapeHtml(personById(issue.assignee).name)} · due ${escapeHtml(issue.due)}</span></span>${statusPill("blocked")}</button>`).join("")}</div>` : `<div class="empty-state"><div><strong>No work is blocked</strong><p>DEC-014 released all six dependent items.</p></div></div>`, blocked.length ? `<button class="ghost-button" type="button" data-action="open-decision">Open decision</button><button class="button" type="button" data-action="approve-path">Simulate approval</button>` : `<button class="button" type="button" data-action="close-modal">Done</button>`);
  }

  function openPlannerList(mode) {
    const scheduled = new Set(state.plannerEvents.map((event) => event.issueId));
    const issues = mode === "today" ? state.plannerEvents.filter((event) => event.day === 0).map((event) => issueById(event.issueId)).filter(Boolean) : state.issues.filter((issue) => issue.assignee === "maya" && issue.status !== "done" && !scheduled.has(issue.id));
    openModal(mode === "today" ? "Today's planned work" : "Unscheduled work", `<div class="modal-list">${issues.length ? issues.map((issue) => `<button class="linked-record" type="button" data-action="open-issue" data-issue="${escapeHtml(issue.id)}"><span class="doc-icon">${icon("calendar")}</span><span class="row-primary"><strong>${escapeHtml(issue.id)} · ${escapeHtml(issue.title)}</strong><span>${escapeHtml(issue.due)} · ${escapeHtml(personById(issue.assignee).name)}</span></span>${statusPill(statusForIssue(issue))}</button>`).join("") : `<div class="empty-state"><div><strong>Everything is scheduled</strong><p>No items need a planning block.</p></div></div>`}</div>`, `<button class="button" type="button" data-action="close-modal">Done</button>`);
  }

  function openHelp() {
    openModal("Coworker demo guide", `<div class="help-callout"><strong>Static evaluation · synthetic data</strong><p>This is a front-end concept. It has no Docker, backend, accounts, uploads, telemetry, integrations, or real company data.</p></div><ol class="help-steps"><li><strong>Start in Office.</strong><span>Show the amber Sentinel milestone and DEC-014 intervention.</span></li><li><strong>Open SMN-184.</strong><span>Trace owner, checklist, dependency, evidence, and linked knowledge.</span></li><li><strong>Open the decision page.</strong><span>Show the living record, comments, and version history.</span></li><li><strong>Simulate approval.</strong><span>Six items unblock and schedule, risk, history, inbox, chat, and briefing facts update.</span></li><li><strong>Explore the workspace.</strong><span>Use Tracker, Planner, Chat, Drive, Team, or Ctrl+K search.</span></li></ol><div class="shortcut-list"><span><kbd>Ctrl K</kbd> Search workspace</span><span><kbd>C</kbd> Create</span><span><kbd>Esc</kbd> Close</span></div>`, `<button class="ghost-button" type="button" data-action="reset-demo">Reset story</button><button class="button" type="button" data-action="close-modal">Start demo</button>`);
  }

  function openResetConfirmation() {
    openModal("Reset demonstration?", `<div class="help-callout warning"><strong>Return to the original coworker story</strong><p>This clears browser-only edits, new issues, comments, messages, file metadata, and the simulated decision approval.</p></div>`, `<button class="ghost-button" type="button" data-action="close-modal">Cancel</button><button class="danger-button" type="button" data-action="confirm-reset">${icon("reset")}Reset demo</button>`);
  }

  function resetDemo() {
    state = deepClone(seedState);
    try { localStorage.removeItem(STORAGE_KEY); } catch (error) { /* Local state is optional. */ }
    closeModal(false);
    closeDrawer(false);
    document.body.classList.remove("panel-open", "panel-collapsed", "overlay-open");
    renderApp();
    showToast("Demo reset", "The original synthetic scenario is ready.", "reset");
  }

  function nextIssueId(projectId) {
    const largest = state.issues.filter((issue) => issue.project === projectId).map((issue) => Number.parseInt(issue.id.split("-").pop(), 10)).filter(Number.isFinite).reduce((max, value) => Math.max(max, value), 0);
    return `${projectId}-${largest + 1}`;
  }

  function slugify(value) {
    return String(value || "item").toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 44) || "item";
  }

  function handleFormSubmit(form) {
    const data = new FormData(form);
    const formName = form.dataset.form;
    if (formName === "new-issue") {
      const projectId = String(data.get("project"));
      const project = projectById(projectId);
      const issue = {
        id: nextIssueId(projectId), project: projectId, title: String(data.get("title") || "Untitled issue").trim(), status: String(data.get("status") || "todo"), priority: String(data.get("priority") || "medium"), assignee: String(data.get("assignee") || "maya"), due: String(data.get("due") || "TBD"), estimate: String(data.get("estimate") || "5h"), spent: "0h", tags: ["NEW"], component: "General", milestone: project.milestone, description: String(data.get("description") || "New work created in the static evaluation."), checklist: [{ text: "Confirm acceptance criteria", done: false }], comments: []
      };
      state.issues.unshift(issue);
      addActivity("tracker", "Maya Chen", "created", `${issue.id} · ${issue.title}`);
      state.notifications.unshift({ id: `notice-${Date.now()}`, type: "issue", title: `${issue.id} created`, detail: `${personById(issue.assignee).name} owns the new work in ${project.name}.`, time: "Just now", unread: true, targetType: "issue", targetId: issue.id });
      saveState();
      closeModal(false);
      selectProject(projectId);
      showToast("Issue created", `${issue.id} is ready in ${project.short}.`, "tracker");
      window.setTimeout(() => openIssueDrawer(issue.id), 80);
      return;
    }
    if (formName === "new-document") {
      const title = String(data.get("title") || "Untitled page").trim();
      const teamspace = String(data.get("teamspace") || "General");
      const raw = String(data.get("body") || "").trim();
      const page = { id: `doc-${slugify(title)}-${Date.now().toString().slice(-4)}`, teamspace, title, author: "maya", updated: "Just now", starred: false, version: 1, linkedIssues: [], raw, body: formatDocumentBody(raw), comments: [], history: [{ version: 1, actor: "Maya Chen", time: "Just now", detail: "Created the first published version." }] };
      state.documents.unshift(page);
      addActivity("file", "Maya Chen", "created page", title);
      saveState();
      closeModal(false);
      selectDocument(page.id);
      showToast("Page created", `${title} is published in ${teamspace}.`, "file");
      return;
    }
    if (formName === "new-project") {
      const name = String(data.get("name") || "New project").trim();
      let code = String(data.get("code") || "NEW").toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 5) || "NEW";
      if (state.projects.some((project) => project.id === code)) code = `${code.slice(0, 4)}${state.projects.length + 1}`;
      const milestone = String(data.get("milestone") || "Delivery kickoff").trim();
      const due = String(data.get("due") || "Oct 30").trim();
      const palette = ["#4c7ce0", "#3fae7c", "#8b6ce0", "#e08b4c", "#3e9fc0"];
      const project = { id: code, name, short: name.length > 21 ? `${name.slice(0, 19)}…` : name, color: palette[state.projects.length % palette.length], health: "green", progress: 8, owner: "maya", milestone, due };
      state.projects.push(project);
      const issue = { id: `${code}-1`, project: code, title: "Confirm project outcomes and working agreement", status: "todo", priority: "high", assignee: "maya", due, estimate: "4h", spent: "0h", tags: ["KICKOFF"], component: "Program", milestone, description: "Align the team on outcomes, working practices, decision rights, and initial delivery milestones.", checklist: [{ text: "Confirm accountable owner", done: true }, { text: "Publish kickoff page", done: false }], comments: [] };
      state.issues.push(issue);
      const raw = `Project outcome\nDefine the measurable outcome for ${name}.\n\nWorking agreement\nRecord owners, milestones, decision rights, and the team communication path.`;
      const page = { id: `doc-${slugify(name)}-overview`, teamspace: name, title: `${name} overview`, author: "maya", updated: "Just now", starred: true, version: 1, linkedIssues: [issue.id], raw, body: formatDocumentBody(raw), comments: [], history: [{ version: 1, actor: "Maya Chen", time: "Just now", detail: "Created with the project starter." }] };
      state.documents.push(page);
      issue.linkedDoc = page.id;
      addActivity("component", "Maya Chen", "created project", name);
      saveState();
      closeModal(false);
      selectProject(code);
      showToast("Project created", `${name} includes starter work and an overview page.`, "component");
      return;
    }
    if (formName === "new-channel") {
      const name = slugify(data.get("name"));
      if (state.channels.some((channel) => channel.id === name)) {
        showToast("Channel already exists", `#${name} is already in this workspace.`, "alert");
        return;
      }
      state.channels.push({ id: name, name, description: String(data.get("description") || "Team coordination"), unread: 0 });
      state.messages[name] = [{ id: `m-${Date.now()}`, author: "maya", time: "Just now", text: `Channel created for ${String(data.get("description") || "team coordination").toLowerCase()}.` }];
      state.ui.selectedChannel = name;
      addActivity("chat", "Maya Chen", "created channel", `#${name}`);
      saveState();
      closeModal(false);
      setModule("chat");
      showToast("Channel created", `#${name} is ready.`, "chat");
      return;
    }
    if (formName === "add-file") {
      const file = { id: `f-${Date.now()}`, drive: state.ui.selectedDrive, name: String(data.get("name") || "sample-file.pdf"), type: String(data.get("type") || "PDF"), owner: "maya", updated: "Just now", size: String(data.get("size") || "84 KB"), starred: false };
      state.files.unshift(file);
      addActivity("file", "Maya Chen", "added sample metadata", file.name);
      saveState();
      closeModal(false);
      renderApp();
      showToast("Sample file added", "No binary data was uploaded.", "drive");
      return;
    }
    if (formName === "invite") {
      const name = String(data.get("name") || "Sample teammate");
      state.invites = state.invites || [];
      state.invites.push({ name, email: String(data.get("email") || ""), role: String(data.get("role") || "Member"), time: "Just now" });
      state.notifications.unshift({ id: `notice-${Date.now()}`, type: "mention", title: `Sample invite recorded for ${name}`, detail: "No message was sent; the invitation exists only in this browser.", time: "Just now", unread: true, targetType: "person", targetId: "maya" });
      addActivity("users", "Maya Chen", "simulated an invitation", name);
      saveState();
      closeModal(false);
      renderApp();
      showToast("Invitation simulated", `No email was sent to ${name}.`, "users");
      return;
    }
    if (formName === "document-comment") {
      const page = documentById(state.ui.selectedDoc);
      const text = String(data.get("comment") || "").trim();
      if (!page || !text) return;
      page.comments = page.comments || [];
      page.comments.push({ id: `c-${Date.now()}`, author: "maya", time: "Just now", text });
      addActivity("chat", "Maya Chen", "commented on", page.title);
      saveState();
      renderModuleContent();
      showToast("Comment added", "The page discussion is updated.", "chat");
      return;
    }
    if (formName === "issue-comment") {
      const issue = issueById(activeDrawerIssue);
      const text = String(data.get("comment") || "").trim();
      if (!issue || !text) return;
      issue.comments = issue.comments || [];
      issue.comments.push({ id: `ic-${Date.now()}`, author: "maya", time: "Just now", text });
      addActivity("chat", "Maya Chen", "commented on", issue.id);
      saveState();
      refreshIssueDrawer();
      showToast("Comment added", `${issue.id} discussion is updated.`, "chat");
      return;
    }
    if (formName === "chat-message") {
      const text = String(data.get("message") || "").trim();
      if (!text) return;
      const channelId = state.ui.selectedChannel;
      state.messages[channelId] = state.messages[channelId] || [];
      state.messages[channelId].push({ id: `m-${Date.now()}`, author: "maya", time: "Just now", text });
      const channel = state.channels.find((item) => item.id === channelId);
      if (channel) channel.unread = 0;
      saveState();
      renderModuleContent();
      window.requestAnimationFrame(() => { const stream = document.getElementById("message-stream"); if (stream) stream.scrollTop = stream.scrollHeight; });
      showToast("Message posted", `Shared in #${channel?.name || channelId}.`, "chat");
    }
  }

  function openDocumentList(filter) {
    const pages = filter === "starred" ? state.documents.filter((page) => page.starred) : state.documents;
    openModal(filter === "starred" ? "Starred documents" : "All documents", `<div class="modal-list">${pages.map((page) => `<button class="linked-record" type="button" data-action="select-document" data-document="${escapeHtml(page.id)}"><span class="doc-icon">${icon("file")}</span><span class="row-primary"><strong>${escapeHtml(page.title)}</strong><span>${escapeHtml(page.teamspace)} · version ${page.version}</span></span>${page.starred ? icon("star") : icon("chevron")}</button>`).join("") || `<p class="tiny muted">No pages in this view.</p>`}</div>`, `<button class="button" type="button" data-action="new-document">${icon("plus")}New page</button>`);
  }

  function openTrackerFilter() {
    openModal("Tracker view", `<div class="quick-create-grid"><button class="quick-create-card" type="button" data-action="tracker-tab" data-tab="active"><span>${icon("tracker")}</span><strong>Active</strong><small>Work underway or ready to start.</small></button><button class="quick-create-card" type="button" data-action="tracker-tab" data-tab="backlog"><span>${icon("list")}</span><strong>Backlog</strong><small>Work not yet committed.</small></button><button class="quick-create-card" type="button" data-action="tracker-view" data-view="board"><span>${icon("grid")}</span><strong>Board</strong><small>Move cards through the workflow.</small></button><button class="quick-create-card" type="button" data-action="tracker-view" data-view="list"><span>${icon("list")}</span><strong>List</strong><small>Scan grouped work and details.</small></button></div>`);
  }

  function toggleIssueComplete(issueId) {
    const issue = issueById(issueId);
    if (!issue) return;
    if (issue.blocked) {
      showToast("Decision required", `${issue.id} remains blocked by DEC-014.`, "alert");
      return;
    }
    issue.status = issue.status === "done" ? "todo" : "done";
    addActivity("tracker", "Maya Chen", issue.status === "done" ? "completed" : "reopened", issue.id);
    saveState();
    renderApp();
    refreshIssueDrawer();
    showToast(issue.status === "done" ? "Issue completed" : "Issue reopened", `${issue.id} is ${statusDefinitions[issue.status].label}.`, "tracker");
  }

  function handleAction(button, event) {
    const action = button.dataset.action;
    const closeOverlaysForNavigation = () => { closeModal(false); closeDrawer(false); };
    switch (action) {
      case "go-office": closeOverlaysForNavigation(); setModule("office"); break;
      case "toggle-panel":
        if (window.matchMedia("(max-width: 900px)").matches) document.body.classList.toggle("panel-open");
        else { state.ui.panelCollapsed = !state.ui.panelCollapsed; saveState(); renderApp(); }
        { const toggle = document.querySelector("[data-action='toggle-panel']"); if (toggle) toggle.setAttribute("aria-expanded", String(window.matchMedia("(max-width: 900px)").matches ? document.body.classList.contains("panel-open") : !state.ui.panelCollapsed)); }
        break;
      case "global-search": openGlobalSearch(); break;
      case "quick-create": openQuickCreate(); break;
      case "reset-demo": openResetConfirmation(); break;
      case "confirm-reset": resetDemo(); break;
      case "show-help": openHelp(); break;
      case "close-modal": closeModal(); break;
      case "close-drawer": closeDrawer(); break;
      case "open-my-work": state.ui.trackerScope = "mine"; state.ui.trackerTab = "active"; closeOverlaysForNavigation(); setModule("tracker"); break;
      case "open-decision": closeModal(false); openDecisionModal(); break;
      case "show-blocked-work": openBlockedWork(); break;
      case "approve-path": approveDecision(); break;
      case "show-decision-result": showDecisionResult(); break;
      case "select-project": closeOverlaysForNavigation(); selectProject(button.dataset.project); break;
      case "tracker-mine": state.ui.trackerScope = "mine"; state.ui.trackerTab = "active"; saveState(); renderApp(); break;
      case "tracker-all": state.ui.trackerScope = "all"; state.ui.trackerTab = "active"; saveState(); renderApp(); break;
      case "tracker-tab": state.ui.trackerTab = button.dataset.tab || "active"; saveState(); closeModal(false); renderApp(); break;
      case "tracker-view": state.ui.trackerView = button.dataset.view || "list"; saveState(); closeModal(false); setModule("tracker"); break;
      case "tracker-filter": openTrackerFilter(); break;
      case "new-issue": closeModal(false); openNewIssueModal(); break;
      case "new-project": closeModal(false); openNewProjectModal(); break;
      case "show-components": openTrackerFacet("components"); break;
      case "show-milestones": openTrackerFacet("milestones"); break;
      case "show-templates": openTrackerFacet("templates"); break;
      case "show-project-summary": openProjectSummary(); break;
      case "open-issue": closeModal(false); openIssueDrawer(button.dataset.issue); break;
      case "toggle-issue-complete": event?.stopPropagation(); toggleIssueComplete(button.dataset.issue); break;
      case "toggle-checklist": {
        const issue = issueById(button.dataset.issue); const item = issue?.checklist?.[Number(button.dataset.index)];
        if (item) { item.done = !item.done; addActivity("check", "Maya Chen", item.done ? "completed checklist item" : "reopened checklist item", `${issue.id} · ${item.text}`); saveState(); renderApp(); refreshIssueDrawer(); }
        break;
      }
      case "select-document": closeOverlaysForNavigation(); selectDocument(button.dataset.document); break;
      case "new-document": closeModal(false); openNewDocumentModal(); break;
      case "documents-all": openDocumentList("all"); break;
      case "documents-starred": openDocumentList("starred"); break;
      case "toggle-document-star": {
        const page = documentById(state.ui.selectedDoc); if (page) { page.starred = !page.starred; saveState(); renderApp(); showToast(page.starred ? "Page starred" : "Page unstarred", page.title, "star"); }
        break;
      }
      case "document-history": openDocumentHistory(); break;
      case "edit-document": state.ui.documentEditing = true; renderModuleContent(); window.requestAnimationFrame(() => document.getElementById("document-editor")?.focus()); break;
      case "cancel-document-edit": state.ui.documentEditing = false; renderModuleContent(); break;
      case "publish-document": {
        const page = documentById(state.ui.selectedDoc); const editor = document.getElementById("document-editor"); const raw = editor?.value.trim();
        if (!page || !raw) { showToast("Add page content", "A published page cannot be empty.", "alert"); break; }
        page.raw = raw; page.body = formatDocumentBody(raw); page.version += 1; page.updated = "Just now"; page.history = page.history || []; page.history.unshift({ version: page.version, actor: "Maya Chen", time: "Just now", detail: "Published edited page content." }); state.ui.documentEditing = false; addActivity("file", "Maya Chen", `published version ${page.version}`, page.title); saveState(); renderApp(); showToast("Page published", `${page.title} is now version ${page.version}.`, "file"); break;
      }
      case "editor-format": showToast("Formatting control", "The static editor demonstrates the toolbar; content remains plain text in this concept.", "edit"); break;
      case "copy-page-link": {
        const page = documentById(state.ui.selectedDoc); const link = `${location.href.split("#")[0]}#page=${page?.id || ""}`;
        if (navigator.clipboard?.writeText) navigator.clipboard.writeText(link).then(() => showToast("Demo link copied", "The page reference is on your clipboard.", "link")).catch(() => showToast("Page reference ready", link, "link"));
        else showToast("Page reference", link, "link");
        break;
      }
      case "mark-all-read": state.notifications.forEach((notice) => { notice.unread = false; }); saveState(); renderApp(); showToast("Inbox cleared", "All updates are marked read.", "check"); break;
      case "inbox-filter": state.ui.inboxFilter = button.dataset.filter || "all"; saveState(); renderApp(); break;
      case "select-notification": {
        const notice = state.notifications.find((item) => item.id === button.dataset.notification); if (!notice) break; notice.unread = false; state.ui.selectedNotification = notice.id; saveState();
        if (window.matchMedia("(max-width: 900px)").matches) navigateToTarget(notice.targetType, notice.targetId); else renderApp();
        break;
      }
      case "open-notification-target": { const notice = state.notifications.find((item) => item.id === button.dataset.notification); if (notice) navigateToTarget(notice.targetType, notice.targetId); break; }
      case "toggle-notification-read": { const notice = state.notifications.find((item) => item.id === button.dataset.notification); if (notice) { notice.unread = !notice.unread; saveState(); renderApp(); } break; }
      case "planner-today": openPlannerList("today"); break;
      case "planner-unscheduled": openPlannerList("unscheduled"); break;
      case "select-channel": state.ui.selectedChannel = button.dataset.channel; { const channel = state.channels.find((item) => item.id === state.ui.selectedChannel); if (channel) channel.unread = 0; } saveState(); renderApp(); break;
      case "focus-message": setModule("chat"); window.requestAnimationFrame(() => document.querySelector("[data-form='chat-message'] textarea")?.focus()); break;
      case "new-channel": closeModal(false); openNewChannelModal(); break;
      case "open-profile": openProfile(button.dataset.person); break;
      case "start-direct-message": closeModal(false); setModule("chat"); showToast("Direct message ready", `Use #delivery-room to coordinate with ${personById(button.dataset.person).name} in this static concept.`, "chat"); break;
      case "channel-details": { const channel = state.channels.find((item) => item.id === state.ui.selectedChannel); openModal(`#${channel?.name || "channel"}`, `<div class="property-grid"><div class="property"><label>Purpose</label><strong>${escapeHtml(channel?.description || "Team coordination")}</strong></div><div class="property"><label>Members</label><strong>${people.length} teammates</strong></div></div><p class="modal-intro">Messages, issues, pages, and files can be linked directly in the conversation. This demo stores new messages only in your browser.</p>`, `<button class="button" type="button" data-action="close-modal">Done</button>`); break; }
      case "attach-demo-file": showToast("Attachment picker", "Choose a sample from Drive in a production-connected version.", "paperclip"); break;
      case "open-attachment": closeModal(false); navigateToTarget(button.dataset.type, button.dataset.id); break;
      case "select-drive": state.ui.selectedDrive = button.dataset.drive; state.ui.driveFilter = "all"; saveState(); renderApp(); break;
      case "add-sample-file": openAddFileModal(); break;
      case "drive-recent": state.ui.driveFilter = "recent"; saveState(); renderApp(); break;
      case "drive-starred": state.ui.driveFilter = state.ui.driveFilter === "starred" ? "all" : "starred"; saveState(); renderApp(); break;
      case "drive-sort": state.ui.driveSortReverse = !state.ui.driveSortReverse; saveState(); renderApp(); showToast("File order changed", "Files are sorted by the sample update order.", "filter"); break;
      case "open-file": openFilePreview(button.dataset.file); break;
      case "toggle-file-star": { const file = state.files.find((item) => item.id === button.dataset.file); if (file) { file.starred = !file.starred; saveState(); if (document.getElementById("modal-overlay")?.hidden) renderApp(); else openFilePreview(file.id); showToast(file.starred ? "File starred" : "File unstarred", file.name, "star"); } break; }
      case "select-department": state.ui.selectedDepartment = button.dataset.department || "All"; saveState(); renderApp(); break;
      case "invite-teammate": openInviteModal(); break;
      case "team-capacity": {
        const members = [...people].sort((a, b) => b.capacity - a.capacity); openModal("Team capacity", `<div class="capacity-list">${members.map((member) => `<button class="capacity-row" type="button" data-action="open-profile" data-person="${member.id}">${avatar(member.id)}<span><strong>${escapeHtml(member.name)}</strong><small>${escapeHtml(member.department)} · ${state.issues.filter((issue) => issue.assignee === member.id && issue.status !== "done").length} open items</small><span class="progress-track" style="--progress:${member.capacity}%;--progress-color:${member.capacity > 90 ? "#f07a6a" : "#5683da"}"><span></span></span></span><strong>${member.capacity}%</strong></button>`).join("")}</div>`); break;
      }
      case "team-org": {
        const departments = [...new Set(people.map((member) => member.department))]; openModal("Workspace organization", `<div class="facet-grid">${departments.map((department) => `<button class="facet-card" type="button" data-action="select-department" data-department="${escapeHtml(department)}"><span class="notification-icon">${icon("users")}</span><span><strong>${escapeHtml(department)}</strong><small>${people.filter((member) => member.department === department).length} teammates</small></span></button>`).join("")}</div>`); break;
      }
      case "search-result": {
        const type = button.dataset.type; const id = button.dataset.id; closeModal(false);
        if (type === "issue" || type === "document" || type === "channel") navigateToTarget(type, id);
        else if (type === "file") openFilePreview(id);
        else if (type === "person") openProfile(id);
        else if (type === "project") selectProject(id);
        break;
      }
      case "apply-tracker-search": state.ui.trackerSearch = button.dataset.query || ""; closeModal(false); setModule("tracker"); break;
      case "preview-version": showToast("Version preview", `Version ${button.dataset.version} is represented in this static history.`, "history"); break;
      default: break;
    }
  }

  function isTextEntry(target) {
    return target instanceof HTMLElement && (target.matches("input, textarea, select, [contenteditable='true']") || Boolean(target.closest("input, textarea, select, [contenteditable='true']")));
  }

  function trapOverlayFocus(event) {
    if (event.key !== "Tab") return;
    const modal = document.getElementById("modal-overlay");
    const drawer = document.getElementById("drawer-overlay");
    const container = modal && !modal.hidden ? document.getElementById("modal-card") : drawer && !drawer.hidden ? document.getElementById("detail-drawer") : null;
    if (!container) return;
    const focusable = [...container.querySelectorAll("button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [href], [tabindex]:not([tabindex='-1'])")].filter((element) => element.getClientRects().length);
    if (!focusable.length) return;
    const first = focusable[0]; const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }

  document.addEventListener("click", (event) => {
    const actionButton = event.target.closest("[data-action]");
    if (actionButton) { handleAction(actionButton, event); return; }
    const moduleButton = event.target.closest("[data-module]");
    if (moduleButton) { closeModal(false); closeDrawer(false); setModule(moduleButton.dataset.module); }
  });

  document.addEventListener("submit", (event) => {
    const form = event.target.closest("form[data-form]");
    if (!form) return;
    event.preventDefault();
    handleFormSubmit(form);
  });

  document.addEventListener("input", (event) => {
    if (event.target.id === "global-search-input") renderGlobalSearchResults(event.target.value);
    if (event.target.id === "tracker-search") {
      state.ui.trackerSearch = event.target.value;
      saveState();
      renderModuleContent();
      const input = document.getElementById("tracker-search");
      if (input) { input.focus(); input.setSelectionRange(input.value.length, input.value.length); }
    }
  });

  document.addEventListener("change", (event) => {
    const control = event.target.closest("[data-change]");
    if (!control) return;
    if (control.dataset.change === "issue-status") {
      const issue = issueById(control.dataset.issue);
      if (!issue || issue.blocked) return;
      issue.status = control.value;
      addActivity("tracker", "Maya Chen", "changed status", `${issue.id} to ${statusDefinitions[issue.status].label}`);
      saveState();
      renderApp();
      refreshIssueDrawer();
      showToast("Status updated", `${issue.id} is now ${statusDefinitions[issue.status].label}.`, "tracker");
    }
  });

  document.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") { event.preventDefault(); openGlobalSearch(); return; }
    if (event.key === "Escape") {
      const modal = document.getElementById("modal-overlay"); const drawer = document.getElementById("drawer-overlay");
      if (modal && !modal.hidden) closeModal(); else if (drawer && !drawer.hidden) closeDrawer(); else document.body.classList.remove("panel-open");
      return;
    }
    trapOverlayFocus(event);
    const roleButton = event.target.closest("[role='button'][data-action]");
    if (roleButton && (event.key === "Enter" || event.key === " ")) { event.preventDefault(); roleButton.click(); return; }
    if (!event.ctrlKey && !event.metaKey && !event.altKey && event.key.toLowerCase() === "c" && !isTextEntry(event.target)) { event.preventDefault(); openQuickCreate(); }
  });

  window.addEventListener("resize", () => {
    if (!window.matchMedia("(max-width: 900px)").matches) document.body.classList.remove("panel-open");
  });

  renderApp();
  updateClock();
  window.setInterval(updateClock, 30000);
})();
