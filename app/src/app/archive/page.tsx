import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";
import { StreamYardEmbed } from "@/components/recordings/StreamYardEmbed";

const featuredRecordings = [
  {
    id: "sy-1",
    title: "Ethereum SF Stream #1",
    embedId: "pkpdanajic9b",
    event: "Ethereum SF",
    topics: ["ethereum", "community"],
  },
  {
    id: "sy-2",
    title: "Ethereum SF Stream #2",
    embedId: "kmumd34egdkb",
    event: "Ethereum SF",
    topics: ["ethereum", "community"],
  },
  {
    id: "sy-3",
    title: "Ethereum SF Stream #3",
    embedId: "nhh9sv9ns9ef",
    event: "Ethereum SF",
    topics: ["ethereum", "community"],
  },
];

const recordings = [
  {
    id: "1",
    title: "DeFi Security Panel",
    speaker: "Panel Discussion",
    event: "Ethereum SF Meetup #42",
    date: "Mar 7, 2026",
    duration: "58:30",
    views: "1.2k",
    topics: ["defi", "security"],
  },
  {
    id: "2",
    title: "Agent-to-Agent Commerce on Ethereum",
    speaker: "Alice Chen",
    event: "Demo Day #8",
    date: "Mar 1, 2026",
    duration: "22:15",
    views: "890",
    topics: ["agents", "defi"],
  },
  {
    id: "3",
    title: "ZK Proofs Deep Dive",
    speaker: "Bob Rivera",
    event: "ZK Privacy Night",
    date: "Feb 27, 2026",
    duration: "45:00",
    views: "2.1k",
    topics: ["zk", "privacy"],
  },
  {
    id: "4",
    title: "Vibe Coding Live: Building a DAO in 30 min",
    speaker: "Colin",
    event: "Vibe Coding Night #3",
    date: "Feb 20, 2026",
    duration: "34:12",
    views: "450",
    topics: ["ai", "coding"],
  },
  {
    id: "5",
    title: "Censorship Resistance in 2026",
    speaker: "Georgy A.",
    event: "Ethereum SF Meetup #41",
    date: "Feb 14, 2026",
    duration: "38:45",
    views: "1.8k",
    topics: ["censorship-resistance", "privacy"],
  },
  {
    id: "6",
    title: "Open Source AI for Ethereum Builders",
    speaker: "Panel Discussion",
    event: "Vibe Coding Night #2",
    date: "Feb 7, 2026",
    duration: "52:10",
    views: "670",
    topics: ["ai", "open-source"],
  },
];

export default function ArchivePage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-8">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-primary">
          Archive
        </h1>
        <p className="text-secondary text-sm mt-1">
          {featuredRecordings.length + recordings.length} recordings from the SF Ethereum community
        </p>
      </div>

      {/* Search */}
      <div className="mb-10">
        <Input
          type="text"
          placeholder="Search talks, speakers, topics..."
          className="max-w-md"
        />
      </div>

      {/* Featured — StreamYard embeds */}
      <section className="mb-14">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-primary mb-6">
          Featured Recordings
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* First video large */}
          <Card className="lg:col-span-2">
            <StreamYardEmbed
              embedId={featuredRecordings[0].embedId}
              title={featuredRecordings[0].title}
            />
            <div className="mt-4">
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-primary">
                {featuredRecordings[0].title}
              </h3>
              <p className="text-sm text-secondary mt-1">{featuredRecordings[0].event}</p>
              <div className="flex gap-2 mt-2">
                {featuredRecordings[0].topics.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </div>
          </Card>

          {/* Other two side by side */}
          {featuredRecordings.slice(1).map((rec) => (
            <Card key={rec.id}>
              <StreamYardEmbed embedId={rec.embedId} title={rec.title} />
              <div className="mt-4">
                <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-primary">
                  {rec.title}
                </h3>
                <p className="text-sm text-secondary mt-1">{rec.event}</p>
                <div className="flex gap-2 mt-2">
                  {rec.topics.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* All recordings grid */}
      <section>
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-primary mb-6">
          All Recordings
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {recordings.map((rec) => (
            <Card key={rec.id}>
              <div className="aspect-video rounded-lg mb-4 flex items-center justify-center relative group cursor-pointer"
                style={{ backgroundColor: "var(--th-bg)" }}>
                <span className="text-3xl text-secondary/30 group-hover:text-accent transition-colors">
                  &#9654;
                </span>
                <span className="absolute bottom-2 right-2 text-xs px-1.5 py-0.5 rounded font-[family-name:var(--font-mono)]"
                  style={{ backgroundColor: "var(--th-surface)", color: "var(--th-text-primary)" }}>
                  {rec.duration}
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold text-primary leading-tight">
                {rec.title}
              </h3>
              <p className="text-xs text-secondary mt-1">
                {rec.speaker}
              </p>
              <p className="text-xs text-secondary/60 mt-0.5">
                {rec.event} &middot; {rec.date}
              </p>
              <div className="flex items-center justify-between mt-3">
                <div className="flex gap-1.5">
                  {rec.topics.slice(0, 2).map((topic) => (
                    <Badge key={topic}>{topic}</Badge>
                  ))}
                </div>
                <span className="text-xs text-secondary">{rec.views} views</span>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
