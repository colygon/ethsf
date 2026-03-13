-- Ethereum SF — Initial Database Schema
-- Run this in your Supabase SQL Editor or via CLI

-- ============================================================
-- ENUMS
-- ============================================================

CREATE TYPE event_type AS ENUM ('meetup', 'ddd', 'vibe_coding', 'hackathon', 'workshop', 'social');
CREATE TYPE event_status AS ENUM ('pending', 'approved', 'rejected');
CREATE TYPE user_role AS ENUM ('member', 'verified', 'steward', 'admin');
CREATE TYPE presence_type AS ENUM ('office', 'founder', 'team');
CREATE TYPE membership_status AS ENUM ('loi', 'active', 'expired');
CREATE TYPE bounty_category AS ENUM ('testing', 'content', 'events_av', 'outreach', 'development', 'design');
CREATE TYPE bounty_status AS ENUM ('open', 'claimed', 'in_review', 'completed', 'paid');

-- ============================================================
-- TABLES
-- ============================================================

-- Cities (multi-tenant)
CREATE TABLE cities (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name            text NOT NULL,
  slug            text UNIQUE NOT NULL,
  timezone        text NOT NULL DEFAULT 'America/Los_Angeles',
  created_at      timestamptz NOT NULL DEFAULT now()
);

-- Users (extends Supabase auth.users)
CREATE TABLE users (
  id              uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email           text,
  wallet_address  text,
  ens_name        text,
  display_name    text NOT NULL,
  bio             text,
  avatar_url      text,
  city_id         uuid REFERENCES cities(id),
  role            user_role NOT NULL DEFAULT 'member',
  skills          text[] NOT NULL DEFAULT '{}',
  links           jsonb,
  verified_at     timestamptz,
  created_at      timestamptz NOT NULL DEFAULT now()
);

-- Events
CREATE TABLE events (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title           text NOT NULL,
  description     text,
  event_type      event_type NOT NULL,
  topics          text[] NOT NULL DEFAULT '{}',
  city_id         uuid NOT NULL REFERENCES cities(id),
  venue_name      text NOT NULL,
  venue_address   text,
  start_time      timestamptz NOT NULL,
  end_time        timestamptz,
  luma_url        text,
  luma_event_id   text,
  submitted_by    uuid NOT NULL REFERENCES users(id),
  reviewed_by     uuid REFERENCES users(id),
  status          event_status NOT NULL DEFAULT 'pending',
  review_note     text,
  created_at      timestamptz NOT NULL DEFAULT now()
);

-- Recordings
CREATE TABLE recordings (
  id                  uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id            uuid REFERENCES events(id) ON DELETE SET NULL,
  youtube_id          text,
  streamyard_embed_id text,
  title               text NOT NULL,
  description         text,
  speaker_id          uuid REFERENCES users(id) ON DELETE SET NULL,
  speaker_name        text,
  duration            interval,
  thumbnail_url       text,
  view_count          integer NOT NULL DEFAULT 0,
  published_at        timestamptz,
  created_at          timestamptz NOT NULL DEFAULT now()
);

-- Companies (alliance members)
CREATE TABLE companies (
  id                uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name              text NOT NULL,
  slug              text UNIQUE NOT NULL,
  logo_url          text,
  description       text,
  website           text,
  twitter           text,
  city_id           uuid NOT NULL REFERENCES cities(id),
  presence_type     presence_type NOT NULL,
  team_size         integer,
  membership_status membership_status NOT NULL DEFAULT 'loi',
  membership_start  date,
  membership_end    date,
  onboarded_by      uuid REFERENCES users(id),
  created_at        timestamptz NOT NULL DEFAULT now()
);

-- Company <-> User relationship
CREATE TABLE company_members (
  company_id  uuid NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  user_id     uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  role        text NOT NULL DEFAULT 'member',
  PRIMARY KEY (company_id, user_id)
);

-- Weekly company updates
CREATE TABLE company_updates (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id    uuid NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  author_id     uuid NOT NULL REFERENCES users(id),
  body          text NOT NULL,
  link_url      text,
  image_url     text,
  published_at  timestamptz,
  created_at    timestamptz NOT NULL DEFAULT now()
);

-- "In Town" posts
CREATE TABLE in_town (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  city_id     uuid NOT NULL REFERENCES cities(id),
  arriving    date NOT NULL,
  departing   date NOT NULL,
  note        text,
  created_at  timestamptz NOT NULL DEFAULT now()
);

-- Bounties
CREATE TABLE bounties (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id      uuid NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  posted_by       uuid NOT NULL REFERENCES users(id),
  title           text NOT NULL,
  description     text,
  category        bounty_category NOT NULL,
  reward_amount   numeric NOT NULL,
  reward_currency text NOT NULL DEFAULT 'USDC',
  deadline        date,
  required_skills text[] NOT NULL DEFAULT '{}',
  status          bounty_status NOT NULL DEFAULT 'open',
  claimed_by      uuid REFERENCES users(id),
  claimed_at      timestamptz,
  completed_at    timestamptz,
  city_id         uuid NOT NULL REFERENCES cities(id),
  created_at      timestamptz NOT NULL DEFAULT now()
);

-- ============================================================
-- INDEXES
-- ============================================================

CREATE INDEX idx_events_city ON events(city_id);
CREATE INDEX idx_events_status ON events(status);
CREATE INDEX idx_events_start ON events(start_time);
CREATE INDEX idx_events_type ON events(event_type);
CREATE INDEX idx_events_topics ON events USING gin(topics);
CREATE INDEX idx_recordings_event ON recordings(event_id);
CREATE INDEX idx_companies_city ON companies(city_id);
CREATE INDEX idx_companies_status ON companies(membership_status);
CREATE INDEX idx_in_town_city ON in_town(city_id);
CREATE INDEX idx_in_town_dates ON in_town(arriving, departing);
CREATE INDEX idx_bounties_city ON bounties(city_id);
CREATE INDEX idx_bounties_status ON bounties(status);
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_users_wallet ON users(wallet_address);

-- Full-text search on events
CREATE INDEX idx_events_fts ON events USING gin(
  to_tsvector('english', coalesce(title, '') || ' ' || coalesce(description, ''))
);

-- Full-text search on recordings
CREATE INDEX idx_recordings_fts ON recordings USING gin(
  to_tsvector('english', coalesce(title, '') || ' ' || coalesce(description, ''))
);

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================

ALTER TABLE cities ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE recordings ENABLE ROW LEVEL SECURITY;
ALTER TABLE companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE company_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE company_updates ENABLE ROW LEVEL SECURITY;
ALTER TABLE in_town ENABLE ROW LEVEL SECURITY;
ALTER TABLE bounties ENABLE ROW LEVEL SECURITY;

-- Public read for most tables
CREATE POLICY "Public read cities" ON cities FOR SELECT USING (true);
CREATE POLICY "Public read approved events" ON events FOR SELECT USING (status = 'approved');
CREATE POLICY "Public read recordings" ON recordings FOR SELECT USING (true);
CREATE POLICY "Public read active companies" ON companies FOR SELECT USING (membership_status = 'active');
CREATE POLICY "Public read company updates" ON company_updates FOR SELECT USING (true);
CREATE POLICY "Public read in_town" ON in_town FOR SELECT USING (departing >= current_date);
CREATE POLICY "Public read open bounties" ON bounties FOR SELECT USING (true);

-- Users can read all profiles
CREATE POLICY "Public read users" ON users FOR SELECT USING (true);

-- Users can update their own profile
CREATE POLICY "Users update own profile" ON users FOR UPDATE USING (auth.uid() = id);

-- Authenticated users can submit events
CREATE POLICY "Auth users submit events" ON events FOR INSERT WITH CHECK (auth.uid() = submitted_by);

-- Users can see their own pending events
CREATE POLICY "Users see own events" ON events FOR SELECT USING (auth.uid() = submitted_by);

-- Stewards can see and update all events
CREATE POLICY "Stewards manage events" ON events FOR ALL USING (
  EXISTS (SELECT 1 FROM users WHERE users.id = auth.uid() AND users.role IN ('steward', 'admin'))
);

-- Verified users can post in_town
CREATE POLICY "Verified users post in_town" ON in_town FOR INSERT WITH CHECK (
  auth.uid() = user_id AND
  EXISTS (SELECT 1 FROM users WHERE users.id = auth.uid() AND users.role IN ('verified', 'steward', 'admin'))
);

-- Users can delete their own in_town posts
CREATE POLICY "Users delete own in_town" ON in_town FOR DELETE USING (auth.uid() = user_id);

-- Company admins can post updates
CREATE POLICY "Company admins post updates" ON company_updates FOR INSERT WITH CHECK (
  EXISTS (
    SELECT 1 FROM company_members
    WHERE company_members.company_id = company_updates.company_id
    AND company_members.user_id = auth.uid()
    AND company_members.role = 'admin'
  )
);

-- Company admins can create bounties
CREATE POLICY "Company admins create bounties" ON bounties FOR INSERT WITH CHECK (
  EXISTS (
    SELECT 1 FROM company_members
    WHERE company_members.company_id = bounties.company_id
    AND company_members.user_id = auth.uid()
    AND company_members.role = 'admin'
  )
);

-- Verified users can claim bounties
CREATE POLICY "Verified users claim bounties" ON bounties FOR UPDATE USING (
  EXISTS (SELECT 1 FROM users WHERE users.id = auth.uid() AND users.role IN ('verified', 'steward', 'admin'))
);

-- ============================================================
-- SEED DATA
-- ============================================================

INSERT INTO cities (name, slug, timezone) VALUES
  ('San Francisco', 'sf', 'America/Los_Angeles');
