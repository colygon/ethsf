import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const tiers = [
  {
    level: 1,
    title: "Community Member",
    requirement: "No login required",
    tagline: "Start here.",
    abilities: [
      "Browse the event calendar",
      "Watch recorded talks",
      "Attend community events",
    ],
    badge: "outline" as const,
  },
  {
    level: 2,
    title: "Verified Member",
    requirement: "SIWE login",
    tagline: "Earn trust through contribution.",
    abilities: [
      "Post on the \"In Town\" board",
      "Claim bounties",
      "Appear in the member directory",
      "Cross-city trust and reputation",
    ],
    badge: "default" as const,
  },
  {
    level: 3,
    title: "Community Steward",
    requirement: "Nominated by existing stewards",
    tagline: "Serve before you lead.",
    abilities: [
      "Review event submissions",
      "Verify new members",
      "Onboard companies to the alliance",
      "Moderate community content",
    ],
    term: "6\u201312 month terms",
    badge: "alt" as const,
  },
  {
    level: 4,
    title: "Secretary",
    requirement: "Elected or appointed",
    tagline: "Coordinate and support the ecosystem.",
    abilities: [
      "Country / Regional / Ecosystem coordination",
      "Mentor stewards and community members",
      "Term-limited governance participation",
    ],
    term: "Term-limited",
    badge: "warm" as const,
  },
];

const contributions = [
  {
    action: "Organize an event",
    description:
      "Host a meetup, workshop, or demo day. We help with logistics and promotion.",
  },
  {
    action: "Record and archive community talks",
    description:
      "Capture talks on video so the community can learn asynchronously.",
  },
  {
    action: "Pick up a bounty",
    description:
      "Tackle open tasks posted by the community \u2014 from code to design to outreach.",
  },
  {
    action: "Help with A/V at events",
    description:
      "Run cameras, microphones, or streaming setups at community gatherings.",
  },
  {
    action: "Write content / documentation",
    description:
      "Document processes, write recaps, or create guides for newcomers.",
  },
  {
    action: "Mentor newcomers",
    description:
      "Welcome new members, answer questions, and help people find their footing.",
  },
];

const principles = [
  {
    title: "Serve before you lead",
    description:
      "Start by contributing. Earn trust through consistent, humble service \u2014 not self-promotion.",
  },
  {
    title: "No single point of failure",
    description:
      "Term limits and shared responsibility prevent burnout and concentration of power.",
  },
  {
    title: "Easy in, easy out",
    description:
      "Low barrier to start contributing. Graceful offboarding when life changes.",
  },
];

export default function GetInvolvedPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
      <section className="mb-14">
        <p className="text-accent font-[family-name:var(--font-mono)] text-sm font-medium mb-4 tracking-wide uppercase">
          Join Us
        </p>
        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-primary mb-4 leading-[1.1]">
          Get Involved
        </h1>
        <p className="text-secondary text-lg md:text-xl max-w-2xl leading-relaxed">
          Ethereum SF is built by its members. Whether you&apos;re brand new to
          the ecosystem or a long-time builder, there&apos;s a place for you
          here. Every contribution matters.
        </p>
      </section>

      {/* Contribution Tiers */}
      <section className="mb-16">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-primary mb-2">
          Contribution Tiers
        </h2>
        <p className="text-secondary text-sm mb-8 max-w-xl">
          A clear progression path from first visit to active leadership. No
          shortcuts &mdash; trust is earned through contribution.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {tiers.map((tier) => (
            <Card key={tier.title}>
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: "var(--th-accent)",
                    opacity: 0.15,
                  }}
                >
                  <span
                    className="font-[family-name:var(--font-mono)] text-xs font-bold"
                    style={{ color: "var(--th-accent)" }}
                  >
                    {tier.level}
                  </span>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-primary">
                    {tier.title}
                  </h3>
                  <Badge variant={tier.badge} className="text-xs">
                    {tier.requirement}
                  </Badge>
                </div>
              </div>

              <p
                className="font-[family-name:var(--font-mono)] text-sm font-medium mb-3"
                style={{ color: "var(--th-accent)" }}
              >
                &ldquo;{tier.tagline}&rdquo;
              </p>

              <ul className="text-sm text-secondary space-y-1.5">
                {tier.abilities.map((ability) => (
                  <li key={ability} className="flex items-start gap-2">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: "var(--th-accent)" }}
                    />
                    {ability}
                  </li>
                ))}
              </ul>

              {tier.term && (
                <p className="text-xs text-secondary/60 mt-3 font-[family-name:var(--font-mono)]">
                  {tier.term}
                </p>
              )}
            </Card>
          ))}
        </div>

        {/* Progression arrow hint */}
        <div className="flex items-center justify-center mt-6 gap-2">
          <span className="text-xs text-secondary/50 font-[family-name:var(--font-mono)]">
            Member
          </span>
          <span className="text-secondary/30">&rarr;</span>
          <span className="text-xs text-secondary/50 font-[family-name:var(--font-mono)]">
            Verified
          </span>
          <span className="text-secondary/30">&rarr;</span>
          <span className="text-xs text-secondary/50 font-[family-name:var(--font-mono)]">
            Steward
          </span>
          <span className="text-secondary/30">&rarr;</span>
          <span className="text-xs text-secondary/50 font-[family-name:var(--font-mono)]">
            Secretary
          </span>
        </div>
      </section>

      {/* Ways to Contribute */}
      <section className="mb-16">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-primary mb-2">
          Ways to Contribute
        </h2>
        <p className="text-secondary text-sm mb-8 max-w-xl">
          Concrete actions you can take today to help the community grow.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {contributions.map((item) => (
            <Card key={item.action}>
              <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold text-primary mb-1.5">
                {item.action}
              </h3>
              <p className="text-sm text-secondary">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Principles */}
      <section className="mb-16">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-primary mb-2">
          Principles
        </h2>
        <p className="text-secondary text-sm mb-8 max-w-xl">
          The values that guide how we grow and govern the community.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {principles.map((principle) => (
            <Card key={principle.title}>
              <h3
                className="font-[family-name:var(--font-mono)] text-sm font-semibold mb-2"
                style={{ color: "var(--th-accent)" }}
              >
                &ldquo;{principle.title}&rdquo;
              </h3>
              <p className="text-sm text-secondary">{principle.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-10">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-primary mb-3">
          Ready to contribute?
        </h2>
        <p className="text-secondary text-sm mb-6 max-w-md mx-auto">
          Start by showing up. Attend an event, introduce yourself, and find
          your way in. The community is waiting for you.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/events">
            <Button variant="primary" size="lg">
              Join the community
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="outline" size="lg">
              Learn more &rarr;
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
