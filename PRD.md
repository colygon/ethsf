# Ethereum SF — Product Requirements Document

## Overview

A web application serving as the community operating system for the Ethereum ecosystem, starting in San Francisco and expanding to Singapore, New York, and beyond. Inspired by Engineers.SG and WeBuild.SG, built for the Ethereum community's specific needs.

**Primary URL:** ethsf.xyz (or similar)

---

## Users

| User Type | Description |
|---|---|
| **Community Member** | Anyone interested in the SF Ethereum scene. Can browse events, watch recordings, RSVP |
| **Verified Member** | Trusted contributor. Can post events, pick up bounties, appear on "In Town" board, access member directory |
| **Event Organizer** | Hosts events. Submits to calendar, coordinates recording, manages RSVPs |
| **Member Company** | Annual alliance member ($10K/year). Featured across all events, can post bounties, share weekly updates |
| **Community Steward** | Reviews event submissions, verifies members, maintains quality standards |

---

## Core Features

### 1. Decentralized Event Calendar

The central product. An open calendar of Ethereum community events.

**Requirements:**
- Anyone can submit an event for review
- Events display: title, date/time, venue, host, description, topics, RSVP link
- Community stewards approve/reject submissions based on published guidelines
- Filter by: topic (DeFi, ZK, privacy, AI agents, etc.), venue, date, organizer
- Calendar view (month/week) and list view
- iCal/Google Calendar subscribe feed
- Events automatically tagged with relevant topics
- Past events link to their recording (if available)

**Event types to support:**
- Meetups and talks
- Decentralized Demo Day (DDD)
- Vibe coding nights
- Hackathons
- Workshops
- Social gatherings

### 2. Video Archive

Searchable library of all recorded community events. The Engineers.SG model.

**Requirements:**
- Each recording linked to its calendar event
- Browse/search by: speaker, topic, organization, date, event
- Embed from YouTube/Vimeo or self-hosted
- Livestream links for upcoming events
- Speaker profiles with links to all their talks
- Shareable links to individual talks (with timestamps if possible)
- Total view counts and engagement metrics (lightweight, not gamified)

### 3. "In Town" Board

Low-pressure way for community members to signal they're visiting a city.

**Requirements:**
- Verified members can post: "I'll be in [city] from [date] to [date]"
- Optional: short note on what they're interested in (coffee, co-working, specific topic)
- Browse who's currently in town or arriving soon
- No obligation, no scheduling — just visibility
- Multi-city: SF, Singapore, New York (expandable)
- Posts auto-expire after departure date

### 4. Member Company Directory

The local Ethereum business alliance.

**Requirements:**
- Company profile: name, logo, what they do, team size in city, website
- Membership tier and status visible
- Link to their events, bounties, and weekly updates
- "Founded in SF" / "Office in SF" / "Team in SF" badge
- Featured placement at all event pages for active members
- Simple onboarding: LOI submission → steward approval → payment → active

### 5. Bounty Board

Member companies post tasks, verified community members complete them.

**Requirements:**
- Post a bounty: title, description, reward amount, deadline, required skills
- Categories: testing, content, events/AV, outreach, development, design
- Only verified members can claim bounties
- Status tracking: open → claimed → in review → completed → paid
- Bounty history visible on member profiles (reputation building)
- Payment via crypto (ETH, stablecoins) or fiat
- Member companies can fund bounties directly

### 6. Weekly Company Updates

A feed where member companies share news with the community.

**Requirements:**
- Each member company can post one update per week
- Format: short text + optional link/image
- Displayed as a feed on the homepage or dedicated section
- Email digest option (weekly roundup of all company updates)
- Archive of past updates searchable by company

### 7. Verified Member Profiles

Lightweight reputation and identity layer.

**Requirements:**
- Profile: name, bio, skills, city, links (GitHub, Twitter, ENS)
- Verification status (verified by community stewards)
- Activity: events attended, bounties completed, events organized
- "In Town" status (current city)
- Cross-city: verified in SF = trusted in Singapore and NY
- ENS integration (optional — link profile to .eth name)
- No token gating — verification is contribution-based

---

## Pages

### Homepage
- Upcoming events (next 7 days prominent)
- Who's in town right now
- Latest video recordings
- Recent company updates
- Featured member companies (rotating)
- Quick links: submit event, join community, become a member company

### Event Page
- Event details, RSVP, map/directions
- Host organization info
- Member company sponsors (all alliance members featured)
- After event: recording embed, speaker links, related events

### Archive / Library
- Searchable video library
- Filter by topic, speaker, organization, date
- Featured/popular talks

### City Pages
- Each city (SF, Singapore, NY) has its own landing page
- Local calendar, local companies, local verified members
- "In Town" board filtered to that city

### About / Mission
- Mission statement
- Event guidelines
- How to get verified
- How to join the alliance
- The secretariat structure

### Dashboard (authenticated)
- My events (upcoming, past)
- My bounties (posted, claimed, completed)
- "In Town" status toggle
- Company update composer (for member companies)
- Event submission form (for organizers)

---

## Technical Specification

### Stack

| Layer | Technology | Why |
|---|---|---|
| **Framework** | Next.js 14+ (App Router) | SSR for SEO on event/video pages, API routes for backend, React ecosystem |
| **Database** | Supabase (PostgreSQL) | Managed Postgres + built-in auth + storage + realtime + Row Level Security |
| **Auth** | SIWE (Sign-In with Ethereum) + Supabase Auth (email/magic link) | Web3-native for verified members, email fallback for non-crypto users |
| **Hosting** | Vercel | Edge network, instant deploys, preview deployments for PRs |
| **RSVP** | Luma API integration | Don't rebuild RSVPs — embed Luma event links and pull attendance data |
| **Video** | YouTube Data API v3 | Host recordings on YouTube, pull metadata/embeds into archive via API |
| **Calendar Sync** | Google Calendar API | Two-way sync — approved events push to a public Google Calendar, users subscribe via iCal |
| **Notifications** | Telegram Bot API | Bot posts to community channels: new events, "in town" updates, bounty alerts |
| **Search** | Supabase full-text search (pg_trgm + tsvector) | Search across events, videos, speakers, companies. No extra service needed at MVP scale |
| **File Storage** | Supabase Storage | Company logos, speaker photos, event images |
| **Styling** | Tailwind CSS | Fast to build, consistent, mobile-first |
| **Domain** | ethsf.xyz or similar | TBD |

### Authentication Flow

```
┌─────────────────────────────────────────────────────┐
│                   No login required                  │
│  Browse events, watch videos, view companies,        │
│  read updates, search archive                        │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│              Email / Magic Link login                │
│  Submit events for review, basic profile,            │
│  RSVP tracking                                       │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│           SIWE (Sign-In with Ethereum)               │
│  Verified member features: "In Town" board,          │
│  bounty claims, ENS profile, cross-city trust        │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│              Steward / Admin login                   │
│  Event approval queue, member verification,          │
│  company onboarding, content moderation              │
└─────────────────────────────────────────────────────┘
```

- All public content is accessible without any login
- Email login for basic participation (submitting events)
- SIWE unlocks verified member features and links ENS identity
- Users can connect both email and wallet to the same account

### Database Schema

```sql
-- Cities (multi-tenant)
cities
  id              uuid PK
  name            text        -- "San Francisco"
  slug            text UNIQUE -- "sf"
  timezone        text        -- "America/Los_Angeles"
  created_at      timestamptz

-- Users
users
  id              uuid PK (Supabase auth.users)
  email           text
  wallet_address  text        -- ETH address (nullable)
  ens_name        text        -- resolved ENS (nullable)
  display_name    text
  bio             text
  avatar_url      text
  city_id         uuid FK → cities
  role            enum        -- 'member', 'verified', 'steward', 'admin'
  skills          text[]      -- tags: ['solidity', 'frontend', 'zk', ...]
  links           jsonb       -- { github, twitter, website, telegram }
  verified_at     timestamptz
  created_at      timestamptz

-- Events
events
  id              uuid PK
  title           text
  description     text
  event_type      enum        -- 'meetup', 'ddd', 'vibe_coding', 'hackathon', 'workshop', 'social'
  topics          text[]      -- ['defi', 'zk', 'privacy', 'ai_agents', ...]
  city_id         uuid FK → cities
  venue_name      text
  venue_address   text
  venue_geo       point       -- lat/lng for map
  start_time      timestamptz
  end_time        timestamptz
  luma_url        text        -- link to Luma event for RSVP
  luma_event_id   text        -- Luma API event ID
  submitted_by    uuid FK → users
  reviewed_by     uuid FK → users (nullable)
  status          enum        -- 'pending', 'approved', 'rejected'
  review_note     text        -- steward's reason for rejection (if any)
  created_at      timestamptz

-- Recordings (linked to events)
recordings
  id              uuid PK
  event_id        uuid FK → events
  youtube_id      text        -- YouTube video ID
  title           text        -- talk title (event may have multiple talks)
  description     text
  speaker_id      uuid FK → users (nullable)
  speaker_name    text        -- fallback if speaker isn't a registered user
  duration        interval
  thumbnail_url   text        -- pulled from YouTube API
  view_count      integer     -- synced periodically from YouTube
  published_at    timestamptz
  created_at      timestamptz

-- Companies (alliance members)
companies
  id              uuid PK
  name            text
  slug            text UNIQUE
  logo_url        text
  description     text
  website         text
  city_id         uuid FK → cities
  presence_type   enum        -- 'office', 'founder', 'team'
  team_size       integer
  membership_status enum      -- 'loi', 'active', 'expired'
  membership_start date
  membership_end   date
  onboarded_by    uuid FK → users (steward who approved)
  created_at      timestamptz

-- Company ↔ User relationship
company_members
  company_id      uuid FK → companies
  user_id         uuid FK → users
  role            text        -- 'admin', 'member'
  PRIMARY KEY (company_id, user_id)

-- Weekly company updates
company_updates
  id              uuid PK
  company_id      uuid FK → companies
  author_id       uuid FK → users
  body            text
  link_url        text
  image_url       text
  published_at    timestamptz
  created_at      timestamptz

-- "In Town" posts
in_town
  id              uuid PK
  user_id         uuid FK → users
  city_id         uuid FK → cities
  arriving        date
  departing       date
  note            text        -- "down for coffee, interested in ZK"
  created_at      timestamptz
  -- auto-expire: WHERE departing >= CURRENT_DATE

-- Bounties
bounties
  id              uuid PK
  company_id      uuid FK → companies
  posted_by       uuid FK → users
  title           text
  description     text
  category        enum        -- 'testing', 'content', 'events_av', 'outreach', 'development', 'design'
  reward_amount   numeric
  reward_currency text        -- 'ETH', 'USDC', 'USD'
  deadline        date
  required_skills text[]
  status          enum        -- 'open', 'claimed', 'in_review', 'completed', 'paid'
  claimed_by      uuid FK → users (nullable)
  claimed_at      timestamptz
  completed_at    timestamptz
  city_id         uuid FK → cities
  created_at      timestamptz
```

### Third-Party Integrations

#### Luma (RSVP)
- Event organizers paste their Luma event URL when submitting
- We store the `luma_url` and optionally the `luma_event_id`
- Event pages embed Luma RSVP button / link directly
- Optional: pull attendance count via Luma API for post-event stats
- We do NOT rebuild RSVP — Luma handles it, we link to it

#### YouTube (Video Archive)
- Recordings uploaded to an Ethereum SF YouTube channel
- YouTube Data API v3 pulls video metadata: title, description, thumbnail, duration, view count
- Stewards link recordings to events and tag speakers
- Periodic sync job updates view counts
- Embed player on event pages and archive pages

#### Google Calendar (Sync)
- Approved events automatically pushed to a public Google Calendar via Calendar API
- Users subscribe to the calendar via iCal URL (works with Apple Calendar, Outlook, etc.)
- Filter-specific calendars possible (e.g., "DeFi events only" feed)
- Two-way: if an event is updated or cancelled on the site, calendar updates too

#### Telegram Bot (Notifications)
- Bot posts to Ethereum SF Telegram channel(s):
  - New event approved: title, date, venue, RSVP link
  - "In Town" alerts: "[Name] is in SF this week — interested in ZK, coffee"
  - New bounty posted: title, reward, deadline
  - Weekly digest: upcoming events for the week
- City-specific channels (SF, Singapore, NY)
- Bot commands for members:
  - `/events` — list upcoming events
  - `/intown` — who's visiting this week
  - `/bounties` — open bounties
  - `/submit` — link to event submission form

### Steward Dashboard

The approval workflow for community stewards:

```
┌─────────────────────────────────────────┐
│           STEWARD DASHBOARD             │
├─────────────────────────────────────────┤
│                                         │
│  📋 Event Queue (3 pending)             │
│  ┌─────────────────────────────────┐    │
│  │ "ZK Privacy Night"              │    │
│  │ Submitted by: @alice.eth        │    │
│  │ Date: Mar 20 · Homebrew         │    │
│  │ Topics: ZK, Privacy             │    │
│  │ Luma: lu.ma/zk-privacy-sf      │    │
│  │                                 │    │
│  │ [✅ Approve]  [❌ Reject]       │    │
│  │ Rejection reason: ________      │    │
│  └─────────────────────────────────┘    │
│                                         │
│  👤 Member Verification (2 pending)     │
│  🏢 Company Onboarding (1 pending)      │
│  📊 Stats: 45 events this month         │
│                                         │
└─────────────────────────────────────────┘
```

**Steward capabilities:**
- Review and approve/reject event submissions (with optional rejection note)
- Verify community members (upgrade from member → verified)
- Onboard member companies (LOI → active)
- Link recordings to events
- Moderate content (hide/remove inappropriate updates)
- View community stats (events/month, active members, recordings)

### Multi-City Architecture

- Single Next.js app, city context determined by URL path: `/sf/events`, `/singapore/events`, `/ny/events`
- Homepage defaults to user's city (detected or selected)
- Shared database — all cities in one Supabase instance, scoped by `city_id`
- Row Level Security policies scope data access by city where needed
- "In Town" board is global — shows all cities, filterable
- Verified members are global — verified in one city, trusted in all
- New city onboarding: insert a row into `cities` table, assign initial stewards, done

### Web3 Integration

- **SIWE:** Uses `siwe` npm package + wagmi/viem for wallet connection. Generates nonce server-side, verifies signature, creates Supabase session.
- **ENS:** Resolve wallet address → ENS name via ethers.js or viem. Display ENS as primary identity where available.
- **Payments (Phase 2+):** Bounty payouts and membership payments via ETH/USDC on Ethereum mainnet or Base L2 for lower fees. Smart contract optional — can start with simple wallet-to-wallet transfers tracked in the app.
- **No token gating:** Core features never require holding a token. Wallet is for identity and payments only.

### API Routes (Next.js App Router)

```
# Public (no auth)
GET    /api/events              — list events (filterable by city, topic, date)
GET    /api/events/[id]         — single event with recordings
GET    /api/recordings          — search video archive
GET    /api/companies           — list member companies
GET    /api/intown              — who's visiting (by city)

# Authenticated (email or SIWE)
POST   /api/events              — submit event for review
PUT    /api/users/me            — update profile
POST   /api/intown              — post "in town" status
DELETE /api/intown/[id]         — remove "in town" post

# Verified members only
POST   /api/bounties/[id]/claim — claim a bounty

# Company admins only
POST   /api/companies/[id]/updates — post weekly update
POST   /api/bounties            — create a bounty

# Stewards only
PUT    /api/events/[id]/review  — approve/reject event
PUT    /api/users/[id]/verify   — verify a member
PUT    /api/companies/[id]/status — update company membership status
POST   /api/recordings          — link recording to event

# Sync jobs (cron)
POST   /api/cron/youtube-sync   — update view counts from YouTube
POST   /api/cron/calendar-sync  — push approved events to Google Calendar
POST   /api/cron/intown-cleanup — expire old "in town" posts
```

### Theming System

All four design themes (Terminal, Neighborhood, Protocol, Block Party) ship in the app with a user-selectable theme switcher.

**Architecture:**
- Themes defined as CSS custom property sets on `:root`
- Tailwind configured with `theme()` references to CSS variables — all utility classes automatically respect the active theme
- Theme switch is instant (no page reload) — just swaps a `data-theme` attribute on `<html>`
- Fonts loaded for all themes on first visit (4 font families, ~200KB total with subsetting)

**CSS Variable Structure:**
```css
[data-theme="terminal"] {
  --color-bg:           #0a0a0a;
  --color-surface:      #141414;
  --color-border:       #2a2a2a;
  --color-text-primary: #e0e0e0;
  --color-text-secondary: #888888;
  --color-accent:       #8b5cf6;
  --color-accent-alt:   #22c55e;
  --color-status-ok:    #22c55e;
  --color-status-warn:  #f59e0b;
  --color-status-error: #ef4444;
  --font-heading:       'JetBrains Mono', monospace;
  --font-body:          'Inter', sans-serif;
  --font-mono:          'JetBrains Mono', monospace;
  --radius-card:        4px;
  --radius-tag:         2px;
  --shadow-card:        none;
  --border-card:        1px solid var(--color-border);
}

[data-theme="neighborhood"] {
  --color-bg:           #faf8f5;
  --color-surface:      #f5f0e8;
  --color-border:       #d4cdc4;
  --color-text-primary: #2c2420;
  --color-text-secondary: #8a7e74;
  --color-accent:       #e06830;
  --color-accent-alt:   #1a8a7a;
  --color-status-ok:    #1a8a7a;
  --color-status-warn:  #d4a030;
  --color-status-error: #c44040;
  --font-heading:       'Fraunces', serif;
  --font-body:          'Source Sans 3', sans-serif;
  --font-mono:          'DM Sans', sans-serif;
  --radius-card:        12px;
  --radius-tag:         999px;
  --shadow-card:        0 2px 8px rgba(0,0,0,0.06);
  --border-card:        none;
}

[data-theme="protocol"] {
  --color-bg:           #ffffff;
  --color-surface:      #f8fafc;
  --color-border:       #e2e8f0;
  --color-text-primary: #0f172a;
  --color-text-secondary: #64748b;
  --color-accent:       #1c6ef0;
  --color-accent-alt:   #8b5cf6;
  --color-status-ok:    #16a34a;
  --color-status-warn:  #ca8a04;
  --color-status-error: #dc2626;
  --font-heading:       'Inter', sans-serif;
  --font-body:          'Inter', sans-serif;
  --font-mono:          'Fira Code', monospace;
  --radius-card:        8px;
  --radius-tag:         6px;
  --shadow-card:        0 1px 3px rgba(0,0,0,0.04);
  --border-card:        1px solid var(--color-border);
}

[data-theme="blockparty"] {
  --color-bg:           #121212;
  --color-surface:      #1e1e1e;
  --color-border:       #333333;
  --color-text-primary: #ffffff;
  --color-text-secondary: #aaaaaa;
  --color-accent:       #ff5252;
  --color-accent-alt:   #ffe135;
  --color-status-ok:    #00e5a0;
  --color-status-warn:  #ffe135;
  --color-status-error: #ff5252;
  --font-heading:       'Space Grotesk', sans-serif;
  --font-body:          'DM Sans', sans-serif;
  --font-mono:          'Space Mono', monospace;
  --radius-card:        8px;
  --radius-tag:         4px;
  --shadow-card:        none;
  --border-card:        1px solid var(--color-border);
}
```

**Tailwind Config Integration:**
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        bg:         'var(--color-bg)',
        surface:    'var(--color-surface)',
        border:     'var(--color-border)',
        primary:    'var(--color-text-primary)',
        secondary:  'var(--color-text-secondary)',
        accent:     'var(--color-accent)',
        'accent-alt': 'var(--color-accent-alt)',
      },
      fontFamily: {
        heading: 'var(--font-heading)',
        body:    'var(--font-body)',
        mono:    'var(--font-mono)',
      },
      borderRadius: {
        card: 'var(--radius-card)',
        tag:  'var(--radius-tag)',
      },
    },
  },
}
```

**Usage in components — theme-agnostic by default:**
```tsx
// This card looks correct in ALL four themes automatically
<div className="bg-surface border-border rounded-card p-4">
  <h3 className="font-heading text-primary">ZK Privacy Night</h3>
  <p className="font-body text-secondary">Homebrew · 6:30pm</p>
  <span className="bg-accent/10 text-accent rounded-tag px-2 py-1 font-mono text-sm">
    zk
  </span>
</div>
```

**Theme Provider (React Context):**
```tsx
// providers/ThemeProvider.tsx
'use client'
import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'terminal' | 'neighborhood' | 'protocol' | 'blockparty'

const ThemeContext = createContext<{
  theme: Theme
  setTheme: (t: Theme) => void
}>({ theme: 'blockparty', setTheme: () => {} })

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('blockparty')

  useEffect(() => {
    const saved = localStorage.getItem('ethsf-theme') as Theme | null
    if (saved) setTheme(saved)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('ethsf-theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
```

**Theme Switcher Component:**
```tsx
// components/ThemeSwitcher.tsx
'use client'
import { useTheme } from '@/providers/ThemeProvider'

const themes = [
  { id: 'terminal',      label: 'Terminal',      icon: '▸' },
  { id: 'neighborhood',  label: 'Neighborhood',  icon: '☀' },
  { id: 'protocol',      label: 'Protocol',      icon: '◆' },
  { id: 'blockparty',    label: 'Block Party',   icon: '█' },
] as const

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex gap-1">
      {themes.map((t) => (
        <button
          key={t.id}
          onClick={() => setTheme(t.id)}
          className={`w-8 h-8 rounded flex items-center justify-center text-sm
            ${theme === t.id
              ? 'bg-accent text-bg'
              : 'bg-surface text-secondary hover:text-primary'
            }`}
          title={t.label}
        >
          {t.icon}
        </button>
      ))}
    </div>
  )
}
```

### Performance & Infrastructure

- **Edge rendering:** Vercel edge network for fast global page loads
- **ISR (Incremental Static Regeneration):** Event pages and archive pages regenerate every 60 seconds — static speed with fresh data
- **Database connection pooling:** Supabase built-in connection pooler (PgBouncer)
- **Image optimization:** Next.js Image component + Supabase Storage CDN for logos/avatars
- **Rate limiting:** API routes rate-limited to prevent abuse (Vercel built-in or upstash/ratelimit)
- **Monitoring:** Vercel Analytics + Supabase Dashboard for DB metrics

### Security

- Supabase Row Level Security on all tables — users can only modify their own data
- Steward actions gated by role check in RLS policies and API middleware
- SIWE nonce rotation prevents replay attacks
- Event submission sanitized (no XSS in descriptions)
- Company logos/images validated on upload (type, size)
- API routes validate all input with zod schemas
- No secrets in client bundle — all sensitive keys server-side only

### Open Source

- MIT licensed, public GitHub repo
- Other cities can fork and self-host with their own Supabase instance
- Or join the shared multi-city instance
- Contributing guide for community developers
- The app itself can be a bounty target — community members build features

---

## MVP Scope (Phase 1)

Ship the minimum to be useful. Everything else comes later.

1. **Event calendar** — submit, approve, browse, RSVP links
2. **Video archive** — link recordings to past events, search/browse
3. **Member company directory** — profiles, featured placement
4. **Verified member profiles** — basic profiles with SIWE login
5. **"In Town" board** — post/browse who's visiting
6. **Theme switcher** — all four themes (Terminal, Neighborhood, Protocol, Block Party) with instant switching

### Not in MVP
- Bounty board (Phase 2)
- Weekly company update feed (Phase 2)
- Multi-city support (Phase 2 — start SF only)
- Email digests (Phase 2)
- On-chain membership receipts (Phase 3)
- Mobile app (Phase 3 — responsive web first)

---

## Success Metrics

| Metric | Target (6 months) |
|---|---|
| Events listed per month | 20+ |
| Recordings archived | 50+ |
| Member companies | 25+ (LOIs signed) |
| Verified members | 100+ |
| Weekly active visitors | 500+ |

---

## Design Principles

- **Simple over clever** — If it takes more than 10 seconds to figure out, it's too complicated
- **Fast** — Pages load instantly. No web3 wallet required to browse.
- **Open** — Everything public by default. No login required to see events, videos, or companies.
- **Engineers.SG energy** — Humble, reliable, consistent. Not flashy. Just works.
- **Mobile-first** — Most people will check events on their phone

---

## Reference

- [Engineers.SG](https://engineers.sg) — video archive model
- [WeBuild.SG](https://webuild.sg) — decentralized calendar model
- [Luma](https://lu.ma) — event RSVP UX reference
- [Ethereum.org](https://ethereum.org) — design language reference
