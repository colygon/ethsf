import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const events = [
  {
    id: "1",
    title: "ZK Privacy Night",
    description: "Deep dive into zero-knowledge proofs and privacy tech. Technical talks followed by open discussion.",
    date: "Thu, Mar 14",
    time: "6:30 PM",
    venue: "Homebrew",
    type: "meetup" as const,
    topics: ["zk", "privacy"],
    status: "approved",
  },
  {
    id: "2",
    title: "Decentralized Demo Day",
    description: "Show what you've been building. 5-minute demos, feedback, and pizza.",
    date: "Sat, Mar 16",
    time: "2:00 PM",
    venue: "Frontier Tower",
    type: "ddd" as const,
    topics: ["builders", "demo"],
    status: "approved",
  },
  {
    id: "3",
    title: "Vibe Coding Night",
    description: "Open source AI + coffee + credits. Bring your laptop, build something. Free Nebius and OpenRouter credits for all attendees.",
    date: "Tue, Mar 19",
    time: "6:00 PM",
    venue: "Frontier Tower",
    type: "vibe" as const,
    topics: ["ai", "open-source", "coding"],
    status: "approved",
  },
  {
    id: "4",
    title: "Agent Commerce Workshop",
    description: "Hands-on workshop on building agent-to-agent commerce protocols on Ethereum.",
    date: "Thu, Mar 21",
    time: "6:30 PM",
    venue: "House of Web3",
    type: "workshop" as const,
    topics: ["agents", "defi"],
    status: "approved",
  },
  {
    id: "5",
    title: "Ethereum SF Social",
    description: "Casual hangout for the SF Ethereum community. No agenda, just good people. Dogs welcome.",
    date: "Fri, Mar 22",
    time: "5:00 PM",
    venue: "Frontier Tower",
    type: "social" as const,
    topics: ["community", "social"],
    status: "approved",
  },
  {
    id: "6",
    title: "DeFi Security Panel",
    description: "Auditors and builders discuss common vulnerabilities, recent exploits, and best practices.",
    date: "Tue, Mar 25",
    time: "6:30 PM",
    venue: "Homebrew",
    type: "meetup" as const,
    topics: ["defi", "security"],
    status: "approved",
  },
];

const topicOptions = ["zk", "privacy", "defi", "security", "agents", "ai", "builders", "community"];

export default function EventsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-primary">
            Events
          </h1>
          <p className="text-secondary text-sm mt-1">
            {events.length} upcoming events in San Francisco
          </p>
        </div>
        <Button variant="primary">Submit Event</Button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        <Badge variant="accent" className="cursor-pointer opacity-60 hover:opacity-100">
          all
        </Badge>
        {topicOptions.map((topic) => (
          <Badge key={topic} variant="default" className="cursor-pointer opacity-60 hover:opacity-100">
            {topic}
          </Badge>
        ))}
      </div>

      {/* Event list */}
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <Card key={event.id} accent={event.type}>
            <div className="flex flex-col sm:flex-row justify-between items-start gap-3">
              <div className="flex-1">
                <h2 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-primary">
                  {event.title}
                </h2>
                <p className="text-sm text-secondary mt-1">
                  {event.date} &middot; {event.venue} &middot; {event.time}
                </p>
                <p className="text-sm text-secondary mt-2">{event.description}</p>
                <div className="flex gap-1.5 mt-3">
                  {event.topics.map((topic) => (
                    <Badge key={topic}>{topic}</Badge>
                  ))}
                </div>
              </div>
              <Button variant="secondary" className="shrink-0">
                RSVP on Luma &rarr;
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
