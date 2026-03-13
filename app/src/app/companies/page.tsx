import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const companies = [
  {
    slug: "frontier-tower",
    name: "Frontier Tower",
    description: "Community space and event venue in the heart of SF's crypto district. Home to builders, hackers, and dreamers.",
    presence: "office",
    teamSize: 12,
    website: "#",
    status: "active",
  },
  {
    slug: "homebrew",
    name: "Homebrew",
    description: "Newly opened community workspace. Great for intimate technical meetups and workshops.",
    presence: "office",
    teamSize: 8,
    website: "#",
    status: "active",
  },
  {
    slug: "house-of-web3",
    name: "House of Web3",
    description: "Coworking and event space for the Web3 community in SF. Regular hackathons and demo days.",
    presence: "office",
    teamSize: 6,
    website: "#",
    status: "active",
  },
  {
    slug: "openrouter",
    name: "OpenRouter",
    description: "Unified API for LLMs. Open source AI infrastructure powering the next generation of applications.",
    presence: "team",
    teamSize: 15,
    website: "#",
    status: "active",
  },
  {
    slug: "cline",
    name: "Cline",
    description: "AI-powered developer tools. Making vibe coding a reality for Ethereum builders.",
    presence: "team",
    teamSize: 10,
    website: "#",
    status: "active",
  },
  {
    slug: "nebius",
    name: "Nebius",
    description: "Open source AI inference infrastructure. Providing credits and compute for the builder community.",
    presence: "team",
    teamSize: 20,
    website: "#",
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
              <span className="text-xs text-secondary">
                {company.teamSize} people
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
