import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const sampleEvents = [
  {
    id: "1",
    title: "ZK Privacy Night",
    date: "Thu, Mar 14",
    time: "6:30 PM",
    venue: "Homebrew",
    type: "meetup" as const,
    topics: ["zk", "privacy"],
  },
  {
    id: "2",
    title: "Decentralized Demo Day",
    date: "Sat, Mar 16",
    time: "2:00 PM",
    venue: "Frontier Tower",
    type: "ddd" as const,
    topics: ["builders", "demo"],
  },
  {
    id: "3",
    title: "Vibe Coding Night",
    date: "Tue, Mar 19",
    time: "6:00 PM",
    venue: "Frontier Tower",
    type: "vibe" as const,
    topics: ["ai", "coding"],
  },
  {
    id: "4",
    title: "Agent Commerce Workshop",
    date: "Thu, Mar 21",
    time: "6:30 PM",
    venue: "House of Web3",
    type: "workshop" as const,
    topics: ["agents", "defi"],
  },
];

const sampleInTown = [
  { name: "alice.eth", note: "here for the week, down for coffee", dates: "Mar 12–15" },
  { name: "greg.eth", note: "moved back to SF!", dates: "local" },
  { name: "vitalik.eth", note: "passing through", dates: "Mar 14–16" },
];

const sampleRecordings = [
  { title: "DeFi Security Panel", speaker: "Panel", views: "1.2k" },
  { title: "Agent-to-Agent Commerce", speaker: "Alice", views: "890" },
  { title: "ZK Proofs Deep Dive", speaker: "Bob", views: "2.1k" },
  { title: "Vibe Coding Live", speaker: "Colin", views: "450" },
];

const sampleCompanies = [
  "Frontier Tower",
  "Homebrew",
  "House of Web3",
  "OpenRouter",
  "Cline",
  "Nebius",
];

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Hero */}
      <section className="ethsf-hero">
        <p className="text-accent font-[family-name:var(--font-mono)] text-sm font-medium mb-4 tracking-wide uppercase">
          San Francisco&apos;s Ethereum Community
        </p>
        <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl font-bold text-primary mb-5 leading-[1.1]">
          Ethereum SF
        </h1>
        <p className="text-secondary text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
          Decentralized community calendar. Events, recordings, builders.
          Dogs welcome.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" size="lg">Browse Events</Button>
          <Button variant="outline" size="lg">Submit Event</Button>
        </div>
      </section>

      {/* Stats bar */}
      <div className="flex flex-wrap gap-8 mb-12 px-1">
        <div>
          <p className="font-[family-name:var(--font-heading)] text-2xl font-bold text-primary">24</p>
          <p className="text-xs text-secondary mt-0.5">events this month</p>
        </div>
        <div>
          <p className="font-[family-name:var(--font-heading)] text-2xl font-bold text-primary">89</p>
          <p className="text-xs text-secondary mt-0.5">recordings</p>
        </div>
        <div>
          <p className="font-[family-name:var(--font-heading)] text-2xl font-bold text-primary">6</p>
          <p className="text-xs text-secondary mt-0.5">alliance members</p>
        </div>
        <div>
          <p className="font-[family-name:var(--font-heading)] text-2xl font-bold text-primary">142</p>
          <p className="text-xs text-secondary mt-0.5">verified members</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Events column */}
        <div className="lg:col-span-2">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-primary mb-6">
            Upcoming Events
          </h2>
          <div className="flex flex-col gap-4">
            {sampleEvents.map((event) => (
              <Card key={event.id} accent={event.type}>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-primary">
                      {event.title}
                    </h3>
                    <p className="text-sm text-secondary mt-1.5">
                      {event.date} &middot; {event.venue} &middot; {event.time}
                    </p>
                    <div className="flex gap-2 mt-3">
                      {event.topics.map((topic) => (
                        <Badge key={topic} variant={event.type === "ddd" ? "alt" : event.type === "vibe" ? "warm" : "default"}>
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="shrink-0 mt-1">
                    RSVP &rarr;
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* In Town sidebar */}
        <div>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-primary mb-6">
            Who&apos;s Around
          </h2>
          <div className="flex flex-col gap-4">
            {sampleInTown.map((person) => (
              <Card key={person.name}>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: 'var(--th-accent)', opacity: 0.15 }}>
                    <span className="font-[family-name:var(--font-mono)] text-xs font-bold"
                      style={{ color: 'var(--th-accent)' }}>
                      {person.name.slice(0, 2)}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-[family-name:var(--font-mono)] text-sm font-semibold text-primary">
                        {person.name}
                      </p>
                      <span className="w-2 h-2 rounded-full bg-status-ok" />
                    </div>
                    <p className="text-sm text-secondary mt-1">
                      {person.note}
                    </p>
                    <p className="text-xs text-secondary/60 mt-1">
                      {person.dates}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Recordings */}
      <section className="mt-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-primary">
            Latest Recordings
          </h2>
          <Button variant="ghost" size="sm">View all &rarr;</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {sampleRecordings.map((rec) => (
            <Card key={rec.title}>
              <div className="aspect-video rounded-[6px] mb-4 flex items-center justify-center cursor-pointer group relative overflow-hidden"
                style={{ backgroundColor: 'var(--th-bg)' }}>
                <span className="text-4xl text-secondary/30 group-hover:text-accent group-hover:scale-110 transition-all duration-200">
                  &#9654;
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold text-primary leading-snug">
                {rec.title}
              </h3>
              <p className="text-xs text-secondary mt-2">
                {rec.speaker} &middot; {rec.views} views
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Alliance Members */}
      <section className="mt-16 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-primary">
            Alliance Members
          </h2>
          <Button variant="ghost" size="sm">Join &rarr;</Button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {sampleCompanies.map((company) => (
            <div
              key={company}
              className="ethsf-card text-center cursor-pointer"
            >
              <div className="w-10 h-10 mx-auto mb-2 rounded-card flex items-center justify-center"
                style={{ backgroundColor: 'var(--th-accent)', opacity: 0.12 }}>
                <span className="font-[family-name:var(--font-heading)] text-sm font-bold"
                  style={{ color: 'var(--th-accent)' }}>
                  {company[0]}
                </span>
              </div>
              <p className="text-sm font-medium text-primary font-[family-name:var(--font-mono)]">
                {company}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
