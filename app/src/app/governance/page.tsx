import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const secretaries = [
  { name: "Colin", role: "Country Secretary", city: "San Francisco", termStart: "Jan 2026", termEnd: "Jul 2026", level: "country" },
  { name: "Georgy A.", role: "Country Secretary", city: "San Francisco", termStart: "Jan 2026", termEnd: "Jul 2026", level: "country" },
  { name: "TBD", role: "Regional Secretary", city: "North America", termStart: "—", termEnd: "—", level: "regional" },
  { name: "TBD", role: "Ecosystem Secretary", city: "Global", termStart: "—", termEnd: "—", level: "ecosystem" },
];

const activities = [
  {
    title: "Cartography",
    description:
      "Mapping supporters, programs, and resources across the ecosystem. Building a living directory of who is doing what and where.",
    badge: "warm" as const,
  },
  {
    title: "Communication",
    description:
      "Running an efficient information network with triage. Ensuring the right signal reaches the right people without noise.",
    badge: "alt" as const,
  },
  {
    title: "Coordination",
    description:
      "Creating unity across groups through meetups, demo days, and cross-community collaboration. Reducing duplication, amplifying impact.",
    badge: "default" as const,
  },
];

const tiers = [
  {
    level: "Ecosystem Coordination Secretariat",
    tag: "ecosystem",
    term: "Ongoing",
    summary:
      "Coordination and support for the entire secretariats.eth network. Sets standards, resolves disputes, and ensures the model scales across cities and regions.",
    variant: "accent" as const,
  },
  {
    level: "Regional Secretariat",
    tag: "regional",
    term: "12–18 months",
    summary:
      "Coordinates activities within a specific region. Mentors incoming country secretaries, bridges local efforts to the global layer, and ensures continuity across rotations.",
    variant: "alt" as const,
  },
  {
    level: "Country Secretariat",
    tag: "country",
    term: "6–12 months",
    summary:
      "Ground-level coordination for a single city or country. Selected for reliability and initiative. Runs local events, maintains the calendar, and serves as the first point of contact for newcomers.",
    variant: "warm" as const,
  },
];

function getTermProgress(termStart: string, termEnd: string): number | null {
  if (termStart === "—" || termEnd === "—") return null;

  const parseMonth = (s: string): Date => {
    const [month, year] = s.split(" ");
    return new Date(`${month} 1, ${year}`);
  };

  const start = parseMonth(termStart).getTime();
  const end = parseMonth(termEnd).getTime();
  const now = Date.now();

  if (now < start) return 0;
  if (now > end) return 100;
  return Math.round(((now - start) / (end - start)) * 100);
}

function badgeVariantForLevel(level: string): "accent" | "alt" | "warm" | "outline" {
  if (level === "ecosystem") return "accent";
  if (level === "regional") return "alt";
  if (level === "country") return "warm";
  return "outline";
}

export default function GovernancePage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
      <section className="mb-14">
        <p className="text-accent font-[family-name:var(--font-mono)] text-sm font-medium mb-4 tracking-wide uppercase">
          secretariats.eth
        </p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold text-primary mb-4 leading-[1.1]">
          Governance
        </h1>
        <p className="text-secondary text-lg max-w-2xl leading-relaxed">
          Ethereum SF is coordinated through the secretariat model &mdash; a
          lightweight, rotating governance structure designed for credible
          neutrality, term-limited service, and decentralized leadership across
          cities, regions, and the global ecosystem.
        </p>
      </section>

      {/* Secretariat Hierarchy Visualization */}
      <section className="mb-16">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-primary mb-6">
          The Three-Tier Structure
        </h2>

        <div className="flex flex-col gap-5">
          {tiers.map((tier, index) => (
            <div key={tier.tag} className="relative">
              {/* Connector line */}
              {index < tiers.length - 1 && (
                <div
                  className="absolute left-8 top-full w-px h-5 z-10"
                  style={{ backgroundColor: "var(--th-border)" }}
                />
              )}

              <Card hover={false}>
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  {/* Tier indicator */}
                  <div
                    className="w-16 h-16 rounded-card flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor:
                        tier.tag === "ecosystem"
                          ? "var(--th-accent)"
                          : tier.tag === "regional"
                            ? "var(--th-accent-alt)"
                            : "var(--th-accent-warm)",
                      opacity: 0.15,
                    }}
                  >
                    <span
                      className="font-[family-name:var(--font-heading)] text-xl font-bold"
                      style={{
                        color:
                          tier.tag === "ecosystem"
                            ? "var(--th-accent)"
                            : tier.tag === "regional"
                              ? "var(--th-accent-alt)"
                              : "var(--th-accent-warm)",
                      }}
                    >
                      {index === 0 ? "E" : index === 1 ? "R" : "C"}
                    </span>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-primary">
                        {tier.level}
                      </h3>
                      <Badge variant={tier.variant}>{tier.term}</Badge>
                    </div>
                    <p className="text-sm text-secondary leading-relaxed">
                      {tier.summary}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Current Secretaries */}
      <section className="mb-16">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-primary mb-6">
          Current Secretaries
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {secretaries.map((sec) => {
            const progress = getTermProgress(sec.termStart, sec.termEnd);

            return (
              <Card key={`${sec.name}-${sec.role}-${sec.city}`}>
                <div className="flex items-start gap-3">
                  {/* Avatar */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor:
                        sec.level === "ecosystem"
                          ? "var(--th-accent)"
                          : sec.level === "regional"
                            ? "var(--th-accent-alt)"
                            : "var(--th-accent-warm)",
                      opacity: 0.15,
                    }}
                  >
                    <span
                      className="font-[family-name:var(--font-mono)] text-xs font-bold"
                      style={{
                        color:
                          sec.level === "ecosystem"
                            ? "var(--th-accent)"
                            : sec.level === "regional"
                              ? "var(--th-accent-alt)"
                              : "var(--th-accent-warm)",
                      }}
                    >
                      {sec.name.slice(0, 2)}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-[family-name:var(--font-mono)] text-sm font-semibold text-primary">
                        {sec.name}
                      </p>
                      <Badge variant={badgeVariantForLevel(sec.level)}>
                        {sec.level}
                      </Badge>
                    </div>
                    <p className="text-sm text-secondary mt-1">
                      {sec.role} &middot; {sec.city}
                    </p>
                    <p className="text-xs text-secondary/60 mt-1">
                      {sec.termStart} &ndash; {sec.termEnd}
                    </p>

                    {/* Term progress bar */}
                    {progress !== null && (
                      <div className="mt-3">
                        <div className="flex justify-between text-xs text-secondary/60 mb-1">
                          <span>{sec.termStart}</span>
                          <span>{progress}% through term</span>
                          <span>{sec.termEnd}</span>
                        </div>
                        <div
                          className="h-1.5 rounded-full overflow-hidden"
                          style={{ backgroundColor: "var(--th-border)" }}
                        >
                          <div
                            className="h-full rounded-full transition-all"
                            style={{
                              width: `${progress}%`,
                              backgroundColor:
                                sec.level === "ecosystem"
                                  ? "var(--th-accent)"
                                  : sec.level === "regional"
                                    ? "var(--th-accent-alt)"
                                    : "var(--th-accent-warm)",
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Key Activities */}
      <section className="mb-16">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-primary mb-6">
          Key Activities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {activities.map((activity) => (
            <Card key={activity.title}>
              <div className="flex items-center gap-2 mb-3">
                <Badge variant={activity.badge}>{activity.title}</Badge>
              </div>
              <p className="text-sm text-secondary leading-relaxed">
                {activity.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-16">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-primary mb-6">
          How It Works
        </h2>
        <Card hover={false}>
          <div className="space-y-4">
            <div>
              <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold text-primary mb-1">
                Term Limits &amp; Rotation
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                Every secretary serves a fixed term &mdash; 6&ndash;12 months
                at the country level, 12&ndash;18 months regionally. Terms are
                staggered so institutional knowledge transfers smoothly. No one
                holds a seat indefinitely; the structure is designed to prevent
                capture.
              </p>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold text-primary mb-1">
                Selection
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                Country secretaries are selected by the outgoing secretary and
                the regional layer based on demonstrated reliability, initiative,
                and community trust. You earn the role by showing up and serving
                first &mdash; not by campaigning. Regional and ecosystem
                secretaries are chosen from proven country-level veterans.
              </p>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold text-primary mb-1">
                Credible Neutrality
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                Secretaries coordinate &mdash; they don&apos;t govern.
                They maintain calendars, connect people, and resolve conflicts,
                but they don&apos;t set agendas or pick winners. The role is
                designed for service, not authority.
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* Get Involved CTA */}
      <section className="mb-8">
        <Card hover={false}>
          <div className="text-center py-4">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-primary mb-2">
              Want to Get Involved?
            </h2>
            <p className="text-sm text-secondary mb-6 max-w-lg mx-auto">
              The best way to become a secretary is to start contributing.
              Attend events, help organize, and build trust within the
              community. When a seat opens, proven contributors are the first
              to be considered.
            </p>
            <Link href="/about">
              <Button variant="primary" size="lg">
                Learn More &rarr;
              </Button>
            </Link>
          </div>
        </Card>
      </section>
    </div>
  );
}
