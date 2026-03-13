import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const pendingEvents = [
  {
    id: "1",
    title: "DeFi Security Workshop",
    submittedBy: "alice.eth",
    date: "Mar 20, 2026",
    venue: "Homebrew",
    topics: ["defi", "security"],
    submittedAt: "2 hours ago",
  },
  {
    id: "2",
    title: "Solidity Beginner Night",
    submittedBy: "marcus.eth",
    date: "Mar 22, 2026",
    venue: "Frontier Tower",
    topics: ["solidity", "education"],
    submittedAt: "5 hours ago",
  },
  {
    id: "3",
    title: "AI Agents Meetup",
    submittedBy: "priya.eth",
    date: "Mar 25, 2026",
    venue: "The House by Edge & Node",
    topics: ["agents", "ai"],
    submittedAt: "1 day ago",
  },
];

const pendingVerifications = [
  {
    name: "Jordan K.",
    handle: "jordan.eth",
    reason: "Organized 3 meetups, active contributor",
    requestedAt: "3 days ago",
  },
  {
    name: "Sam W.",
    handle: "sam.eth",
    reason: "ZK researcher, regular attendee",
    requestedAt: "1 week ago",
  },
];

const pendingCompanies = [
  {
    name: "Paradigm Labs",
    contact: "ops@paradigm.xyz",
    type: "team",
    requestedAt: "2 days ago",
  },
];

const recentActivity = [
  {
    text: "Event 'ZK Privacy Night' approved by Colin",
    time: "2 days ago",
  },
  {
    text: "alice.eth verified by Georgy A.",
    time: "3 days ago",
  },
  {
    text: "Frontier Tower onboarded",
    time: "1 week ago",
  },
];

const stats = [
  { label: "Pending Events", value: 3, status: "warn" as const },
  { label: "Pending Verifications", value: 2, status: "warn" as const },
  { label: "Pending Company", value: 1, status: "warn" as const },
  { label: "Events This Month", value: 24, status: "ok" as const },
  { label: "Verified Members", value: 142, status: "ok" as const },
];

const statusColors: Record<string, string> = {
  warn: "var(--th-status-warn)",
  ok: "var(--th-status-ok)",
  error: "var(--th-status-error)",
};

export default function DashboardPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Auth notice */}
      <div
        className="rounded-card px-4 py-3 mb-8 text-sm font-[family-name:var(--font-mono)]"
        style={{
          backgroundColor: "var(--th-status-warn, #f59e0b)",
          opacity: 0.85,
          color: "var(--th-bg, #000)",
        }}
      >
        Steward Dashboard — requires authentication (coming soon)
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-primary">
            Steward Dashboard
          </h1>
          <p className="text-secondary text-sm mt-1">
            Logged in as{" "}
            <span className="font-[family-name:var(--font-mono)] text-accent">
              steward.eth
            </span>
          </p>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
        {stats.map((stat) => (
          <Card key={stat.label} hover={false}>
            <p
              className="font-[family-name:var(--font-heading)] text-2xl font-bold"
              style={{ color: statusColors[stat.status] }}
            >
              {stat.value}
            </p>
            <p className="text-secondary text-xs mt-1">{stat.label}</p>
          </Card>
        ))}
      </div>

      {/* Event Approval Queue */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-primary mb-4">
          Event Approval Queue
        </h2>
        <div className="flex flex-col gap-4">
          {pendingEvents.map((event) => (
            <Card key={event.id}>
              <div className="flex flex-col sm:flex-row justify-between items-start gap-3">
                <div className="flex-1">
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-primary">
                    {event.title}
                  </h3>
                  <p className="text-sm text-secondary mt-1">
                    Submitted by{" "}
                    <span className="font-[family-name:var(--font-mono)] text-accent">
                      {event.submittedBy}
                    </span>
                    {" "}&middot; {event.submittedAt}
                  </p>
                  <p className="text-sm text-secondary mt-1">
                    {event.date} &middot; {event.venue}
                  </p>
                  <div className="flex gap-1.5 mt-3">
                    {event.topics.map((topic) => (
                      <Badge key={topic}>{topic}</Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 shrink-0">
                  <Button variant="primary" size="sm">
                    Approve
                  </Button>
                  <Button variant="ghost" size="sm">
                    Reject
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Member Verification Queue */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-primary mb-4">
          Member Verification Queue
        </h2>
        <div className="flex flex-col gap-4">
          {pendingVerifications.map((member) => (
            <Card key={member.handle}>
              <div className="flex flex-col sm:flex-row justify-between items-start gap-3">
                <div className="flex-1">
                  <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-primary">
                    {member.name}
                  </h3>
                  <p className="font-[family-name:var(--font-mono)] text-sm text-accent">
                    {member.handle}
                  </p>
                  <p className="text-sm text-secondary mt-1">
                    {member.reason}
                  </p>
                  <p className="text-xs text-secondary mt-1">
                    Requested {member.requestedAt}
                  </p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <Button variant="primary" size="sm">
                    Verify
                  </Button>
                  <Button variant="ghost" size="sm">
                    Decline
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Company Onboarding */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-primary mb-4">
          Company Onboarding
        </h2>
        <div className="flex flex-col gap-4">
          {pendingCompanies.map((company) => (
            <Card key={company.name}>
              <div className="flex flex-col sm:flex-row justify-between items-start gap-3">
                <div className="flex-1">
                  <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-primary">
                    {company.name}
                  </h3>
                  <p className="text-sm text-secondary mt-1">
                    <span className="font-[family-name:var(--font-mono)] text-accent">
                      {company.contact}
                    </span>
                    {" "}&middot;{" "}
                    <Badge variant="alt">{company.type}</Badge>
                  </p>
                  <p className="text-xs text-secondary mt-1">
                    Requested {company.requestedAt}
                  </p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <Button variant="primary" size="sm">
                    Approve LOI
                  </Button>
                  <Button variant="ghost" size="sm">
                    Reject
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Recent Activity Feed */}
      <section>
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-primary mb-4">
          Recent Activity
        </h2>
        <Card hover={false}>
          <ul className="divide-y" style={{ borderColor: "var(--th-border)" }}>
            {recentActivity.map((activity, i) => (
              <li
                key={i}
                className="flex flex-col sm:flex-row justify-between gap-1 py-3 first:pt-0 last:pb-0"
              >
                <span className="text-sm text-primary">{activity.text}</span>
                <span className="text-xs text-secondary font-[family-name:var(--font-mono)] shrink-0">
                  {activity.time}
                </span>
              </li>
            ))}
          </ul>
        </Card>
      </section>
    </div>
  );
}
