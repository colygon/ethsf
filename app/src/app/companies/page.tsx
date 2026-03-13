import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const companies = [
  {
    slug: "ethereum-house",
    name: "Ethereum House",
    description: "A home for the Ethereum community in San Francisco. Events, gatherings, and builder culture.",
    presence: "office",
    teamSize: null,
    website: "#",
    twitter: "ethereumhousesf",
    status: "active",
  },
  {
    slug: "frontier-tower",
    name: "Frontier Tower",
    description: "Community space and event venue in the heart of SF's crypto district. Home to builders, hackers, and dreamers.",
    presence: "office",
    teamSize: 12,
    website: "#",
    twitter: "frontiertower",
    status: "active",
  },
  {
    slug: "homebrew",
    name: "Homebrew",
    description: "Newly opened community workspace. Great for intimate technical meetups and workshops.",
    presence: "office",
    teamSize: 8,
    website: "#",
    twitter: "club_homebrew",
    status: "active",
  },
  {
    slug: "the-house",
    name: "The House by Edge & Node",
    description: "Coworking and event space for the Web3 community in SF. Regular hackathons and demo days.",
    presence: "office",
    teamSize: 6,
    website: "#",
    twitter: "thehousesf",
    status: "active",
  },
  {
    slug: "ethereum-foundation",
    name: "Ethereum Foundation",
    description: "Supporting the Ethereum ecosystem through funding, research, and community development worldwide.",
    presence: "team",
    teamSize: null,
    website: "https://ethereum.org",
    twitter: "ethereumfndn",
    status: "active",
  },
  {
    slug: "kleidi-wallet",
    name: "Kleidi Wallet",
    description: "Secure and intuitive Ethereum wallet for the next generation of users.",
    presence: "team",
    teamSize: null,
    website: "#",
    twitter: "kleidiwallet",
    status: "active",
  },
  {
    slug: "cookbook",
    name: "Cookbook",
    description: "Open source smart contract registry and developer tools for Web3 builders.",
    presence: "team",
    teamSize: null,
    website: "#",
    twitter: "cookbook_dev",
    status: "active",
  },
];

const presenceLabels: Record<string, string> = {
  office: "Office in SF",
  founder: "Founder in SF",
  team: "Team in SF",
};

export default function CompaniesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-primary">
            Alliance Members
          </h1>
          <p className="text-secondary text-sm mt-1">
            {companies.length} companies supporting the SF Ethereum community
          </p>
        </div>
        <Button variant="secondary">Join the Alliance</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {companies.map((company) => (
          <Card key={company.slug}>
            {/* Logo placeholder */}
            <div className="w-12 h-12 bg-border/30 rounded-card flex items-center justify-center mb-3">
              <span className="font-[family-name:var(--font-heading)] text-lg font-bold text-secondary">
                {company.name[0]}
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-heading)] text-base font-semibold text-primary">
              {company.name}
            </h2>
            <p className="text-sm text-secondary mt-1 line-clamp-2">
              {company.description}
            </p>
            <div className="flex items-center gap-2 mt-3">
              <Badge variant="alt">{presenceLabels[company.presence]}</Badge>
              {company.teamSize && (
                <span className="text-xs text-secondary">
                  {company.teamSize} people
                </span>
              )}
            </div>
            {company.twitter && (
              <a
                href={`https://x.com/${company.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-accent hover:underline mt-2 inline-block"
              >
                @{company.twitter}
              </a>
            )}
          </Card>
        ))}
      </div>

      {/* Community & Alliance Twitter Feed */}
      <section className="mt-14">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-primary mb-6">
          From the Community
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Ethereum SF — pinned first */}
          <Card className="md:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: "var(--th-accent)", opacity: 0.15 }}>
                <span className="font-[family-name:var(--font-mono)] text-xs font-bold"
                  style={{ color: "var(--th-accent)" }}>
                  E
                </span>
              </div>
              <div>
                <p className="font-[family-name:var(--font-heading)] text-sm font-semibold text-primary">
                  Ethereum SF
                </p>
                <a
                  href="https://x.com/ethereumsf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-secondary hover:text-accent transition-colors"
                >
                  @ethereumsf
                </a>
              </div>
            </div>
            <a
              href="https://x.com/ethereumsf"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-secondary hover:text-primary transition-colors"
            >
              View latest posts &rarr;
            </a>
          </Card>

          {/* Alliance member feeds */}
          {companies
            .filter((c) => c.twitter)
            .map((company) => (
              <Card key={company.slug + "-feed"}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "var(--th-accent)", opacity: 0.15 }}>
                    <span className="font-[family-name:var(--font-mono)] text-xs font-bold"
                      style={{ color: "var(--th-accent)" }}>
                      {company.name[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-heading)] text-sm font-semibold text-primary">
                      {company.name}
                    </p>
                    <a
                      href={`https://x.com/${company.twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-secondary hover:text-accent transition-colors"
                    >
                      @{company.twitter}
                    </a>
                  </div>
                </div>
                <a
                  href={`https://x.com/${company.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-secondary hover:text-primary transition-colors"
                >
                  View latest posts &rarr;
                </a>
              </Card>
            ))}
        </div>
      </section>
    </div>
  );
}
