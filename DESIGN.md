# Ethereum SF — Design Themes

Four distinct directions. Each has a different personality, palette, and feel.

---

## Theme 1: "The Terminal"

**Vibe:** Hacker energy. Dark, minimal, monospace. Feels like you're looking at a community dashboard, not a marketing site. Respects the builder audience. No fluff.

**Personality:** Serious builders. Open source. Cypherpunk roots.

### Palette
| Role | Color | Hex |
|---|---|---|
| Background | Near black | `#0a0a0a` |
| Surface | Dark gray | `#141414` |
| Border | Charcoal | `#2a2a2a` |
| Primary text | Off white | `#e0e0e0` |
| Secondary text | Medium gray | `#888888` |
| Accent | Ethereum violet | `#8b5cf6` |
| Accent alt | Electric green | `#22c55e` |
| Status: approved | Green | `#22c55e` |
| Status: pending | Amber | `#f59e0b` |
| Status: rejected | Red | `#ef4444` |

### Typography
- **Headings:** `JetBrains Mono` or `IBM Plex Mono` — bold
- **Body:** `Inter` — clean sans-serif for readability
- **Code/tags:** `JetBrains Mono` — monospace for topic tags, dates, stats

### UI Elements
- Event cards have a left border accent stripe (violet for meetups, green for demo days, etc.)
- Topic tags look like terminal badges: `[zk]` `[defi]` `[privacy]`
- Navigation is a top bar with monospace labels
- "In Town" board feels like a status feed with green dots for "here now"
- Video archive grid with dark thumbnails, hover reveals play button
- Steward dashboard feels like a CLI admin panel

### Sample Homepage Layout
```
┌──────────────────────────────────────────────────────┐
│  ethsf                    events  archive  companies │
│  ══════                   in-town  bounties  about   │
├──────────────────────────────────────────────────────┤
│                                                      │
│  UPCOMING                              IN TOWN (4)   │
│  ─────────                             ──────────    │
│  ┌─ MAR 14 ─────────────────────┐     ● alice.eth    │
│  │▎ ZK Privacy Night            │       "here for    │
│  │▎ Homebrew · 6:30pm           │        devcon"     │
│  │▎ [zk] [privacy]             │                     │
│  │▎ RSVP →                      │     ● vitalik.eth  │
│  └──────────────────────────────┘       "coffee?"    │
│                                                      │
│  ┌─ MAR 16 ─────────────────────┐     ● greg.eth     │
│  │▎ Decentralized Demo Day      │       "back in sf" │
│  │▎ Frontier Tower · 2:00pm     │                    │
│  │▎ [ddd] [builders]            │                    │
│  │▎ RSVP →                      │                    │
│  └──────────────────────────────┘                    │
│                                                      │
│  LATEST RECORDINGS                                   │
│  ─────────────────                                   │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐               │
│  │ ▶ ░░ │ │ ▶ ░░ │ │ ▶ ░░ │ │ ▶ ░░ │               │
│  │      │ │      │ │      │ │      │               │
│  └──────┘ └──────┘ └──────┘ └──────┘               │
│  DeFi     Agent    ZK Proofs  Vibe                   │
│  Panel    Commerce Deep Dive  Coding                 │
│                                                      │
│  ALLIANCE MEMBERS                                    │
│  ════════════════                                    │
│  [logo] [logo] [logo] [logo] [logo] [logo]          │
│                                                      │
└──────────────────────────────────────────────────────┘
```

---

## Theme 2: "The Neighborhood"

**Vibe:** Warm, approachable, SF community board. Feels like a local bulletin board at your favorite coffee shop. Designed to NOT scare off non-crypto people. Friendly enough that a traditional tech person visiting SF would feel welcome.

**Personality:** Welcoming. Local. Your neighborhood Ethereum community.

### Palette
| Role | Color | Hex |
|---|---|---|
| Background | Warm white | `#faf8f5` |
| Surface | Cream | `#f5f0e8` |
| Border | Warm gray | `#d4cdc4` |
| Primary text | Dark brown | `#2c2420` |
| Secondary text | Medium brown | `#8a7e74` |
| Accent | Burnt orange | `#e06830` |
| Accent alt | Teal | `#1a8a7a` |
| Accent warm | Golden | `#d4a030` |
| Status: approved | Teal | `#1a8a7a` |
| Status: pending | Golden | `#d4a030` |
| Status: rejected | Muted red | `#c44040` |

### Typography
- **Headings:** `Fraunces` or `Playfair Display` — warm serif with character
- **Body:** `Source Sans 3` — friendly, highly readable
- **Accents:** `DM Sans` — clean labels and navigation

### UI Elements
- Event cards are cream-colored with rounded corners and subtle shadow — like index cards pinned to a board
- Topic tags are pill-shaped in soft muted colors
- "In Town" board literally looks like a corkboard with pinned notes
- Photos and avatars are circular with warm borders
- Navigation has a hand-lettered quality
- Video thumbnails have a polaroid-style frame
- Illustrations: simple line drawings of SF landmarks (Golden Gate, Transamerica, Victorian houses)

### Sample Homepage Layout
```
┌──────────────────────────────────────────────────────┐
│                                                      │
│   ☀ Ethereum SF                                      │
│   Your neighborhood Ethereum community               │
│                                                      │
│   Events   Watch   Companies   In Town   About       │
│                                                      │
├──────────────────────────────────────────────────────┤
│                                                      │
│   This Week in SF                                    │
│                                                      │
│   ┌─────────────────────────┐  ┌──────────────────┐  │
│   │  ☕ ZK Privacy Night    │  │                  │  │
│   │                         │  │  Who's In Town   │  │
│   │  Thursday, Mar 14       │  │                  │  │
│   │  Homebrew               │  │  📌 Alice        │  │
│   │  6:30 PM                │  │  "here for the   │  │
│   │                         │  │   week, let's    │  │
│   │  ZK · Privacy           │  │   grab coffee"   │  │
│   │                         │  │                  │  │
│   │  RSVP on Luma →         │  │  📌 Greg         │  │
│   └─────────────────────────┘  │  "moved back!"   │  │
│                                │                  │  │
│   ┌─────────────────────────┐  │  📌 Vitalik      │  │
│   │  🔧 Demo Day           │  │  "passing thru"  │  │
│   │                         │  │                  │  │
│   │  Saturday, Mar 16       │  └──────────────────┘  │
│   │  Frontier Tower         │                        │
│   │  2:00 PM                │                        │
│   │                         │                        │
│   │  Builders · DDD         │                        │
│   │                         │                        │
│   │  RSVP on Luma →         │                        │
│   └─────────────────────────┘                        │
│                                                      │
│   ─── Recent Talks ───                               │
│                                                      │
│   ┌────────┐  ┌────────┐  ┌────────┐                │
│   │ 📷     │  │ 📷     │  │ 📷     │                │
│   │        │  │        │  │        │                │
│   │ title  │  │ title  │  │ title  │                │
│   │ speaker│  │ speaker│  │ speaker│                │
│   └────────┘  └────────┘  └────────┘                │
│                                                      │
│   ─── Community Partners ───                         │
│   [logo] [logo] [logo] [logo] [logo]                │
│                                                      │
└──────────────────────────────────────────────────────┘
```

---

## Theme 3: "The Protocol"

**Vibe:** Clean, structured, ethereum.org-inspired. Feels institutional but not corporate — like a well-designed public utility. The Ethereum diamond geometry subtly woven into the design system. Credible enough for institutional visitors, native enough for builders.

**Personality:** Trustworthy. Systematic. The official community resource.

### Palette
| Role | Color | Hex |
|---|---|---|
| Background | White | `#ffffff` |
| Surface | Cool gray 50 | `#f8fafc` |
| Border | Cool gray 200 | `#e2e8f0` |
| Primary text | Slate 900 | `#0f172a` |
| Secondary text | Slate 500 | `#64748b` |
| Accent | Ethereum blue | `#1c6ef0` |
| Accent alt | Ethereum purple | `#8b5cf6` |
| Gradient | Blue → Purple | `#1c6ef0 → #8b5cf6` |
| Status: approved | Green 600 | `#16a34a` |
| Status: pending | Yellow 600 | `#ca8a04` |
| Status: rejected | Red 600 | `#dc2626` |

### Typography
- **Headings:** `Inter` — tight, geometric, professional
- **Body:** `Inter` — consistent system
- **Mono:** `Fira Code` — for technical content, addresses, tags

### UI Elements
- Diamond-shaped accent elements (subtle nods to the Ethereum logo)
- Cards with clean borders and generous whitespace
- Topic tags are small, rounded, color-coded pills
- Navigation is a clean top bar with a blue → purple gradient underline on active state
- "In Town" board is a clean list with avatar + city + dates
- Video archive is a grid with large thumbnails, topic badge overlays
- Stats displayed prominently: "247 events · 89 recordings · 32 companies"
- Gradient accents (blue→purple) used sparingly on CTAs and section dividers
- Light mode default, dark mode toggle available

### Sample Homepage Layout
```
┌──────────────────────────────────────────────────────┐
│                                                      │
│  ◆ Ethereum SF           Events  Archive  Companies  │
│                          In Town  Bounties  About    │
│                                                      │
│  ┌──────────────────────────────────────────────┐    │
│  │                                              │    │
│  │   San Francisco's Ethereum Community          │    │
│  │   ─────────────────────────────────           │    │
│  │   247 events · 89 recordings · 32 companies  │    │
│  │                                              │    │
│  │   [ Browse Events ]   [ Submit Event ]        │    │
│  │                                              │    │
│  └──────────────────────────────────────────────┘    │
│                                                      │
│   Upcoming Events                    In Town         │
│                                                      │
│   ┌────────────────────────────┐    ┌────────────┐   │
│   │ ZK Privacy Night           │    │ 🟢 alice   │   │
│   │ Mar 14 · Homebrew · 6:30pm │    │ Mar 12-15  │   │
│   │ ┌────┐ ┌───────┐          │    │            │   │
│   │ │ ZK │ │Privacy│          │    │ 🟢 greg    │   │
│   │ └────┘ └───────┘          │    │ relocated  │   │
│   │ RSVP on Luma →            │    │            │   │
│   └────────────────────────────┘    │ 🟡 vitalik │   │
│                                     │ Mar 14-16  │   │
│   ┌────────────────────────────┐    └────────────┘   │
│   │ Decentralized Demo Day     │                     │
│   │ Mar 16 · Tower · 2:00pm   │                     │
│   │ ┌─────┐ ┌────────┐        │                     │
│   │ │ DDD │ │Builders│        │                     │
│   │ └─────┘ └────────┘        │                     │
│   │ RSVP on Luma →            │                     │
│   └────────────────────────────┘                     │
│                                                      │
│   Latest Recordings              Alliance Members    │
│   ┌──────┐┌──────┐┌──────┐     ┌────────────────┐   │
│   │  ▶   ││  ▶   ││  ▶   │     │ [logo] [logo]  │   │
│   │      ││      ││      │     │ [logo] [logo]  │   │
│   └──────┘└──────┘└──────┘     │ [logo] [logo]  │   │
│                                 └────────────────┘   │
│                                                      │
└──────────────────────────────────────────────────────┘
```

---

## Theme 4: "The Block Party"

**Vibe:** Bold, energetic, poster art. Feels like a flyer for the best event in the city. Strong colors, big type, unapologetic. This is the version that gets non-crypto people curious — it looks like a culture thing, not a finance thing. The Nerd Compliments energy.

**Personality:** Fun. Bold. Come hang out. Bring your dog.

### Palette
| Role | Color | Hex |
|---|---|---|
| Background | Off black | `#121212` |
| Surface | Dark charcoal | `#1e1e1e` |
| Border | Medium gray | `#333333` |
| Primary text | White | `#ffffff` |
| Secondary text | Light gray | `#aaaaaa` |
| Accent 1 | Hot coral | `#ff5252` |
| Accent 2 | Electric yellow | `#ffe135` |
| Accent 3 | Neon mint | `#00e5a0` |
| Accent 4 | Bright violet | `#b366ff` |
| Highlight | White on accent | varies |

### Typography
- **Headings:** `Space Grotesk` or `Syne` — bold, slightly quirky geometric sans
- **Body:** `DM Sans` — clean and modern
- **Display:** `Space Grotesk` at 900 weight — huge for hero sections and event titles
- **Tags:** `Space Mono` — monospace for contrast

### UI Elements
- Large, bold event cards with color-coded accent backgrounds
- Each event type gets its own accent color (coral for meetups, yellow for demo days, mint for vibe coding, violet for hackathons)
- Topic tags are bold outlined chips on dark backgrounds
- "In Town" board has neon green presence dots — feels like a live status dashboard
- Video thumbnails are large, full-bleed, with bold overlaid text
- Homepage hero is a rotating event spotlight with huge type
- Animated elements: subtle hover effects, cards that slightly rotate on hover
- "Submit Event" button is impossible to miss — big, bright, centered
- Alliance member logos displayed in a marquee/ticker strip
- Playful copy: "Who's around?" instead of "In Town Board"

### Sample Homepage Layout
```
┌──────────────────────────────────────────────────────┐
│                                                      │
│  ETHEREUM SF         events · watch · who's around   │
│  ███████████                                         │
│                                                      │
│  ┌──────────────────────────────────────────────┐    │
│  │                                              │    │
│  │   DEMO DAY                                    │    │
│  │   THIS SATURDAY                               │    │
│  │   ══════════════════                          │    │
│  │   Frontier Tower · 2pm                        │    │
│  │   Bring something you built.                  │    │
│  │   Bring your dog.                             │    │
│  │                                              │    │
│  │   ┌──────────────────┐                        │    │
│  │   │   RSVP ON LUMA   │                        │    │
│  │   └──────────────────┘                        │    │
│  │                                              │    │
│  └──────────────────────────────────────────────┘    │
│                                                      │
│  ┌─ COMING UP ──────────────────────────────────┐    │
│  │                                              │    │
│  │  ██ ZK Privacy Night    Thu Mar 14  Homebrew  │    │
│  │  ██ Vibe Coding         Tue Mar 19  Tower     │    │
│  │  ██ Agent Commerce      Thu Mar 21  HoW3      │    │
│  │  ██ Demo Day            Sat Mar 23  Tower     │    │
│  │                                              │    │
│  └──────────────────────────────────────────────┘    │
│                                                      │
│  WHO'S AROUND                                        │
│  ─────────────                                       │
│  🟢 alice      "zk + coffee"     Mar 12-15           │
│  🟢 greg       "i'm back"        local               │
│  🟢 vitalik    "passing thru"    Mar 14-16           │
│                                                      │
│  WATCH ──────────────────────────────────────────    │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐             │
│  │ ████████ │ │ ████████ │ │ ████████ │             │
│  │ ████████ │ │ ████████ │ │ ████████ │             │
│  │ ▶ DeFi   │ │ ▶ Agents │ │ ▶ ZK 101 │             │
│  │   Panel  │ │   Talk   │ │   Deep   │             │
│  └──────────┘ └──────────┘ └──────────┘             │
│                                                      │
│  ═══ POWERED BY ═══════════════════════════════════  │
│  [logo] [logo] [logo] [logo] [logo] [logo] →→→      │
│                                                      │
└──────────────────────────────────────────────────────┘
```

---

## Theme Comparison

| Attribute | The Terminal | The Neighborhood | The Protocol | The Block Party |
|---|---|---|---|---|
| **Audience** | Builders, devs | Everyone, newcomers | Institutional + builders | Culture-curious, non-crypto |
| **Tone** | Hacker, serious | Warm, local | Professional, credible | Bold, fun |
| **Background** | Dark | Light warm | Light cool | Dark |
| **Typography** | Monospace + sans | Serif + sans | Geometric sans | Bold geometric |
| **Closest to** | GitHub | Neighborhood blog | ethereum.org | Event flyer / poster |
| **Best for** | Technical credibility | Approachability | Institutional trust | Viral appeal |
| **Risk** | Too nerdy for newcomers | Too casual for builders | Too corporate | Too loud for some |

---

## All Themes Ship — User-Selectable Theme Switcher

All four themes are available to every user via a theme switcher in the navigation bar. Users pick the vibe that fits them.

### Default Theme
- **The Block Party** is the default for first-time visitors (most eye-catching, best first impression)
- User's selection is persisted in `localStorage` (no login required to save preference)
- If logged in, preference syncs to their profile (persists across devices)

### Theme Switcher UI
- Small toggle in the top nav bar — four icons or swatches representing each theme
- Instant switch, no page reload (CSS variables swap)
- Keyboard shortcut: `T` cycles through themes (when not focused on an input)

```
  ┌──────────────────────────────────────────────┐
  │  ◆ ethsf          events  archive  companies │
  │                    in-town  bounties   ■ ■ ■ ■│
  │                                     └themes─┘│
  └──────────────────────────────────────────────┘
```

### Why Support All Four

Each theme serves a different audience and context:

| Theme | When it shines |
|---|---|
| **The Terminal** | Sharing with devs, builder credibility, hackathon settings |
| **The Neighborhood** | Sharing with non-crypto friends, newcomer onboarding, institutional demos |
| **The Protocol** | Formal contexts, company pitches, alliance member presentations |
| **The Block Party** | Social media, event promotion, first impressions, viral moments |

The same content, four different costumes. The community gets to express its range.
