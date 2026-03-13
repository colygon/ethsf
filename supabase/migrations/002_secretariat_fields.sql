-- Secretariat governance fields
-- Adds term tracking and secretariat levels to support the governance structure

-- Secretariat level enum
CREATE TYPE secretariat_level AS ENUM ('country', 'regional', 'ecosystem');

-- Add governance fields to users
ALTER TABLE users
  ADD COLUMN secretariat_level secretariat_level,
  ADD COLUMN term_start date,
  ADD COLUMN term_end date,
  ADD COLUMN nominated_by uuid REFERENCES users(id),
  ADD COLUMN mentoring text[];  -- list of user IDs this person mentors

-- Programs table — recurring community initiatives
CREATE TABLE programs (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name            text NOT NULL,
  slug            text UNIQUE NOT NULL,
  description     text,
  frequency       text,  -- 'weekly', 'bi-weekly', 'monthly', 'ongoing'
  program_type    text,  -- 'demo-day', 'coding', 'talks', 'onboarding', 'bounties'
  city_id         uuid NOT NULL REFERENCES cities(id),
  lead_user_id    uuid REFERENCES users(id),
  active          boolean NOT NULL DEFAULT true,
  created_at      timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_programs_city ON programs(city_id);
CREATE INDEX idx_programs_active ON programs(active);

ALTER TABLE programs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read active programs" ON programs FOR SELECT USING (active = true);

-- Steward actions audit log
CREATE TABLE steward_actions (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  steward_id      uuid NOT NULL REFERENCES users(id),
  action_type     text NOT NULL,  -- 'approve_event', 'reject_event', 'verify_member', 'onboard_company'
  target_type     text NOT NULL,  -- 'event', 'user', 'company'
  target_id       uuid NOT NULL,
  note            text,
  created_at      timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_steward_actions_steward ON steward_actions(steward_id);
CREATE INDEX idx_steward_actions_created ON steward_actions(created_at DESC);

ALTER TABLE steward_actions ENABLE ROW LEVEL SECURITY;

-- Only stewards can read the audit log
CREATE POLICY "Stewards read actions" ON steward_actions FOR SELECT USING (
  EXISTS (SELECT 1 FROM users WHERE users.id = auth.uid() AND users.role IN ('steward', 'admin'))
);

-- Only stewards can insert actions
CREATE POLICY "Stewards insert actions" ON steward_actions FOR INSERT WITH CHECK (
  EXISTS (SELECT 1 FROM users WHERE users.id = auth.uid() AND users.role IN ('steward', 'admin'))
);

-- View: active secretaries
CREATE VIEW active_secretaries AS
SELECT
  u.id,
  u.display_name,
  u.ens_name,
  u.avatar_url,
  u.secretariat_level,
  u.term_start,
  u.term_end,
  u.role,
  c.name AS city_name,
  c.slug AS city_slug
FROM users u
LEFT JOIN cities c ON u.city_id = c.id
WHERE u.secretariat_level IS NOT NULL
  AND u.term_end >= current_date;
