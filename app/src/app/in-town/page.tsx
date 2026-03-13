import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const visitors = [
  {
    id: "1",
    name: "alice.eth",
    note: "Here for the week. Down for coffee, interested in ZK projects.",
    arriving: "Mar 12",
    departing: "Mar 15",
    isHere: true,
  },
  {
    id: "2",
    name: "greg.eth",
    note: "Moved back to SF! Happy to reconnect with the community.",
    arriving: null,
    departing: null,
    isHere: true,
  },
  {
    id: "3",
    name: "vitalik.eth",
    note: "Passing through. Would love to check out a demo day.",
    arriving: "Mar 14",
    departing: "Mar 16",
    isHere: false,
  },
  {
    id: "4",
    name: "sara.eth",
    note: "In town for ETH Denver afterparty planning. Let's grab lunch.",
    arriving: "Mar 10",
    departing: "Mar 14",
    isHere: true,
  },
  {
    id: "5",
    name: "james.eth",
    note: "Coming from Singapore. First time at Frontier Tower!",
    arriving: "Mar 18",
    departing: "Mar 22",
    isHere: false,
  },
];

export default function InTownPage() {
  const hereNow = visitors.filter((v) => v.isHere);
  const arrivingSoon = visitors.filter((v) => !v.isHere);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-primary">
            Who&apos;s Around
          </h1>
          <p className="text-secondary text-sm mt-1">
            Visiting SF or want to connect? Drop a note.
          </p>
        </div>
        <Button variant="primary">Post Your Status</Button>
      </div>

      {/* Here now */}
      <section className="mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold text-primary mb-4 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-status-ok" />
          Here Now
        </h2>
        <div className="flex flex-col gap-3">
          {hereNow.map((person) => (
            <Card key={person.id}>
              <div className="flex items-start gap-3">
                {/* Avatar placeholder */}
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center shrink-0">
                  <span className="font-[family-name:var(--font-mono)] text-xs text-accent font-bold">
                    {person.name.slice(0, 2)}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-[family-name:var(--font-mono)] text-sm font-medium text-primary">
                      {person.name}
                    </p>
                    <span className="w-2 h-2 rounded-full bg-status-ok" />
                  </div>
                  <p className="text-sm text-secondary mt-0.5">{person.note}</p>
                  {person.arriving && person.departing && (
                    <p className="text-xs text-secondary opacity-60 mt-1">
                      {person.arriving} &ndash; {person.departing}
                    </p>
                  )}
                  {!person.arriving && (
                    <p className="text-xs text-secondary opacity-60 mt-1">
                      Local
                    </p>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Arriving soon */}
      <section>
        <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold text-primary mb-4 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-status-warn" />
          Arriving Soon
        </h2>
        <div className="flex flex-col gap-3">
          {arrivingSoon.map((person) => (
            <Card key={person.id}>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-accent-alt/20 rounded-full flex items-center justify-center shrink-0">
                  <span className="font-[family-name:var(--font-mono)] text-xs text-accent-alt font-bold">
                    {person.name.slice(0, 2)}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-[family-name:var(--font-mono)] text-sm font-medium text-primary">
                      {person.name}
                    </p>
                  </div>
                  <p className="text-sm text-secondary mt-0.5">{person.note}</p>
                  <p className="text-xs text-secondary opacity-60 mt-1">
                    {person.arriving} &ndash; {person.departing}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
