import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <p className="font-[family-name:var(--font-heading)] text-sm font-bold text-primary">
              ethsf
            </p>
            <p className="text-xs text-secondary mt-1">
              San Francisco&apos;s Ethereum community
            </p>
          </div>
          <nav className="flex gap-4 text-xs text-secondary">
            <Link href="/events" className="hover:text-primary transition-colors">
              Events
            </Link>
            <Link href="/archive" className="hover:text-primary transition-colors">
              Archive
            </Link>
            <Link href="/companies" className="hover:text-primary transition-colors">
              Companies
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors">
              About
            </Link>
          </nav>
        </div>
        <p className="text-xs text-secondary mt-6">
          Inspired by{" "}
          <a
            href="https://engineers.sg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Engineers.SG
          </a>
          . Open source. Community first.
        </p>
      </div>
    </footer>
  );
}
