import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const values = [
  {
    title: "Community over commerce",
    description: "Sponsors are appreciated, never the headline. Events exist to serve attendees, not logos.",
  },
  {
    title: "Builders get the mic",
    description: "Every event carves out time for people to demo projects, share works-in-progress, and get real feedback.",
  },
  {
    title: "Decentralized by default",
    description: "No single organizer owns the calendar. Communities, companies, and individuals all contribute.",
  },
  {
    title: "Open doors",
    description: "Events should be accessible and welcoming to newcomers, not just insiders.",
  },
  {
    title: "Protect the culture",
    description: "Set boundaries that keep the community healthy through bull and bear cycles.",
  },
  {
    title: "Serve before you lead",
    description: "If you're new, start by contributing. Earn trust through service, not self-promotion.",
  },
];

const topics = [
  "Ethereum core",
  "DeFi",
  "Privacy",
  "Censorship resistance",
  "Zero-knowledge proofs",
  "Security",
  "AI agents",
  "Open source AI",
  "Decentralized compute",
  "Stablecoins",
  "Governance",
  "DAOs",
  "Public goods",
];

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-primary mb-3">
        About Ethereum SF
      </h1>
      <p className="text-secondary text-lg max-w-2xl mb-8">
        A decentralized calendar and community hub for San Francisco&apos;s
        Ethereum ecosystem. We connect builders, OGs, newcomers, and curious
        minds through open events. Dogs welcome.
      </p>

      {/* Values */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-primary mb-4">
          Core Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {values.map((value) => (
            <Card key={value.title}>
              <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold text-primary">
                {value.title}
              </h3>
              <p className="text-sm text-secondary mt-1">{value.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Topics */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-primary mb-4">
          What We Cover
        </h2>
        <div className="flex flex-wrap gap-2">
          {topics.map((topic) => (
            <Badge key={topic} variant="default" className="text-sm px-3 py-1">
              {topic}
            </Badge>
          ))}
        </div>
      </section>

      {/* Event Guidelines */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-primary mb-4">
          Event Guidelines
        </h2>
        <Card>
          <p className="text-sm text-secondary mb-3">
            To be listed on the Ethereum SF calendar, your event should:
          </p>
          <ol className="text-sm text-secondary space-y-2 list-decimal list-inside">
            <li>
              <strong className="text-primary">Be relevant</strong> &mdash; Cover
              Ethereum or adjacent decentralized ecosystem topics.
            </li>
            <li>
              <strong className="text-primary">Be community-first</strong> &mdash;
              Education, building, or connection — not a product launch.
            </li>
            <li>
              <strong className="text-primary">Give builders stage time</strong>{" "}
              &mdash; Include demos, lightning talks, or open mic.
            </li>
            <li>
              <strong className="text-primary">
                Keep sponsorship in its place
              </strong>{" "}
              &mdash; Sponsors acknowledged, never dominant.
            </li>
            <li>
              <strong className="text-primary">Be open</strong> &mdash; Free or
              low-cost. No invite-only corporate events.
            </li>
          </ol>
        </Card>
      </section>

      {/* Inspiration */}
      <section className="mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-primary mb-4">
          Inspired By
        </h2>
        <Card>
          <p className="text-sm text-secondary">
            <a
              href="https://engineers.sg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-medium"
            >
              Engineers.SG
            </a>{" "}
            has documented Singapore&apos;s tech community for 12+ years —
            recording meetups, maintaining a decentralized calendar, and hosting
            casual gatherings. They proved this model works through consistent,
            humble service. Ethereum SF builds on their blueprint with
            sustainable funding, cultural boundaries, and a cross-city network.
          </p>
        </Card>
      </section>
    </div>
  );
}
