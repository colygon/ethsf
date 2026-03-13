import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const people = [
  { name: "Colin", handle: "colin.eth", role: "steward", skills: ["community", "events"], city: "San Francisco", status: "active" },
  { name: "Georgy A.", handle: "georgy.eth", role: "steward", skills: ["privacy", "censorship-resistance"], city: "San Francisco", status: "active" },
  { name: "Alice Chen", handle: "alice.eth", role: "verified", skills: ["defi", "agents"], city: "San Francisco", status: "active" },
  { name: "Bob Rivera", handle: "bob.eth", role: "verified", skills: ["zk", "cryptography"], city: "San Francisco", status: "active" },
  { name: "Priya S.", handle: "priya.eth", role: "member", skills: ["frontend", "design"], city: "San Francisco", status: "active" },
  { name: "Marcus T.", handle: "marcus.eth", role: "verified", skills: ["solidity", "security"], city: "San Francisco", status: "active" },
];

const programs = [
  { name: "Decentralized Demo Day", description: "Monthly showcase for builders to demo projects and get feedback from the community.", frequency: "Monthly", type: "demo-day" },
  { name: "Vibe Coding Night", description: "Casual hacking sessions with AI tools, open source projects, and good music.", frequency: "Bi-weekly", type: "coding" },
  { name: "ZK Privacy Series", description: "Deep-dive technical talks on zero-knowledge proofs and privacy technology.", frequency: "Monthly", type: "talks" },
  { name: "Newcomer Onboarding", description: "Welcoming sessions for people new to the SF Ethereum community.", frequency: "Monthly", type: "onboarding" },
  { name: "Builder Bounties", description: "Open tasks from alliance companies for community members to pick up.", frequency: "Ongoing", type: "bounties" },
];

const roleBadgeVariant: Record<string, "accent" | "alt" | "outline"> = {
  steward: "accent",
  verified: "alt",
  member: "outline",
};

const typeLabels: Record<string, string> = {
  "demo-day": "Demo Day",
  coding: "Coding",
  talks: "Talks",
  onboarding: "Onboarding",
  bounties: "Bounties",
};

export default function DirectoryPage() {
  const cities = new Set(people.map((p) => p.city));

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-primary">
          Community Directory
        </h1>
        <p className="text-secondary text-lg mt-2 max-w-2xl">
          Mapping the San Francisco Ethereum ecosystem &mdash; the people who
          build it, the companies that support it, and the programs that keep it
          running.
        </p>
      </div>

      {/* Tab-like filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        <Badge variant="accent" className="cursor-pointer text-sm px-3 py-1">
          People
        </Badge>
        <Link href="/companies">
          <Badge variant="outline" className="cursor-pointer text-sm px-3 py-1 hover:opacity-80">
            Companies
          </Badge>
        </Link>
        <Badge variant="accent" className="cursor-pointer text-sm px-3 py-1">
          Programs
        </Badge>
      </div>

      {/* Stats bar */}
      <div className="flex flex-wrap gap-6 mb-10 py-4 px-5 rounded-card"
        style={{ backgroundColor: "var(--th-surface)", border: "1px solid var(--th-border)" }}>
        <div>
          <span className="font-[family-name:var(--font-heading)] text-2xl font-bold text-primary">
            {people.length}
          </span>
          <span className="text-secondary text-sm ml-2">contributors</span>
        </div>
        <div
          className="w-px self-stretch"
          style={{ backgroundColor: "var(--th-border)" }}
        />
        <div>
          <span className="font-[family-name:var(--font-heading)] text-2xl font-bold text-primary">
            {programs.length}
          </span>
          <span className="text-secondary text-sm ml-2">programs</span>
        </div>
        <div
          className="w-px self-stretch"
          style={{ backgroundColor: "var(--th-border)" }}
        />
        <div>
          <span className="font-[family-name:var(--font-heading)] text-2xl font-bold text-primary">
            {cities.size}
          </span>
          <span className="text-secondary text-sm ml-2">
            {cities.size === 1 ? "city" : "cities"}
          </span>
        </div>
      </div>

      {/* People section */}
      <section className="mb-14">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-primary mb-6">
          People
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {people.map((person) => (
            <Card key={person.handle}>
              <div className="flex items-start gap-3">
                {/* Avatar placeholder */}
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: "var(--th-accent)",
                    opacity: 0.15,
                  }}
                >
                  <span
                    className="font-[family-name:var(--font-heading)] text-sm font-bold"
                    style={{ color: "var(--th-accent)", opacity: 1 }}
                  >
                    {person.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()}
                  </span>
                </div>
                <div className="min-w-0">
                  <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-primary truncate">
                    {person.name}
                  </h3>
                  <p className="font-[family-name:var(--font-mono)] text-xs text-secondary truncate">
                    {person.handle}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-3">
                <Badge variant={roleBadgeVariant[person.role]}>
                  {person.role}
                </Badge>
                <span className="text-xs text-secondary">{person.city}</span>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-3">
                {person.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-[family-name:var(--font-mono)] text-[11px] px-2 py-0.5 rounded-tag"
                    style={{
                      backgroundColor: "var(--th-border)",
                      color: "var(--th-text-secondary)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Programs section */}
      <section className="mb-14">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-primary mb-6">
          Programs
        </h2>
        <div className="flex flex-col gap-4">
          {programs.map((program) => (
            <Card key={program.name}>
              <div className="flex flex-col sm:flex-row justify-between items-start gap-3">
                <div className="flex-1">
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-primary">
                    {program.name}
                  </h3>
                  <p className="text-sm text-secondary mt-1">
                    {program.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Badge variant="alt">{program.frequency}</Badge>
                  <Badge variant="outline">
                    {typeLabels[program.type] ?? program.type}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
