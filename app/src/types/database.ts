export type EventType = "meetup" | "ddd" | "vibe_coding" | "hackathon" | "workshop" | "social";
export type EventStatus = "pending" | "approved" | "rejected";
export type UserRole = "member" | "verified" | "steward" | "admin";
export type PresenceType = "office" | "founder" | "team";
export type MembershipStatus = "loi" | "active" | "expired";
export type BountyCategory = "testing" | "content" | "events_av" | "outreach" | "development" | "design";
export type BountyStatus = "open" | "claimed" | "in_review" | "completed" | "paid";
export type SecretariatLevel = "country" | "regional" | "ecosystem";
export type ActionType = "approve_event" | "reject_event" | "verify_member" | "onboard_company";

export interface Database {
  public: {
    Tables: {
      cities: {
        Row: {
          id: string;
          name: string;
          slug: string;
          timezone: string;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["cities"]["Row"], "id" | "created_at">;
        Update: Partial<Database["public"]["Tables"]["cities"]["Insert"]>;
      };
      users: {
        Row: {
          id: string;
          email: string | null;
          wallet_address: string | null;
          ens_name: string | null;
          display_name: string;
          bio: string | null;
          avatar_url: string | null;
          city_id: string | null;
          role: UserRole;
          skills: string[];
          links: Record<string, string> | null;
          secretariat_level: SecretariatLevel | null;
          term_start: string | null;
          term_end: string | null;
          nominated_by: string | null;
          mentoring: string[];
          verified_at: string | null;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["users"]["Row"], "id" | "created_at" | "role"> & { role?: UserRole };
        Update: Partial<Database["public"]["Tables"]["users"]["Insert"]>;
      };
      events: {
        Row: {
          id: string;
          title: string;
          description: string | null;
          event_type: EventType;
          topics: string[];
          city_id: string;
          venue_name: string;
          venue_address: string | null;
          start_time: string;
          end_time: string | null;
          luma_url: string | null;
          luma_event_id: string | null;
          submitted_by: string;
          reviewed_by: string | null;
          status: EventStatus;
          review_note: string | null;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["events"]["Row"], "id" | "created_at" | "status"> & { status?: EventStatus };
        Update: Partial<Database["public"]["Tables"]["events"]["Insert"]>;
      };
      recordings: {
        Row: {
          id: string;
          event_id: string | null;
          youtube_id: string | null;
          streamyard_embed_id: string | null;
          title: string;
          description: string | null;
          speaker_id: string | null;
          speaker_name: string | null;
          duration: string | null;
          thumbnail_url: string | null;
          view_count: number;
          published_at: string | null;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["recordings"]["Row"], "id" | "created_at" | "view_count"> & { view_count?: number };
        Update: Partial<Database["public"]["Tables"]["recordings"]["Insert"]>;
      };
      companies: {
        Row: {
          id: string;
          name: string;
          slug: string;
          logo_url: string | null;
          description: string | null;
          website: string | null;
          city_id: string;
          presence_type: PresenceType;
          team_size: number | null;
          membership_status: MembershipStatus;
          membership_start: string | null;
          membership_end: string | null;
          onboarded_by: string | null;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["companies"]["Row"], "id" | "created_at">;
        Update: Partial<Database["public"]["Tables"]["companies"]["Insert"]>;
      };
      company_members: {
        Row: {
          company_id: string;
          user_id: string;
          role: string;
        };
        Insert: Database["public"]["Tables"]["company_members"]["Row"];
        Update: Partial<Database["public"]["Tables"]["company_members"]["Insert"]>;
      };
      company_updates: {
        Row: {
          id: string;
          company_id: string;
          author_id: string;
          body: string;
          link_url: string | null;
          image_url: string | null;
          published_at: string | null;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["company_updates"]["Row"], "id" | "created_at">;
        Update: Partial<Database["public"]["Tables"]["company_updates"]["Insert"]>;
      };
      in_town: {
        Row: {
          id: string;
          user_id: string;
          city_id: string;
          arriving: string;
          departing: string;
          note: string | null;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["in_town"]["Row"], "id" | "created_at">;
        Update: Partial<Database["public"]["Tables"]["in_town"]["Insert"]>;
      };
      bounties: {
        Row: {
          id: string;
          company_id: string;
          posted_by: string;
          title: string;
          description: string | null;
          category: BountyCategory;
          reward_amount: number;
          reward_currency: string;
          deadline: string | null;
          required_skills: string[];
          status: BountyStatus;
          claimed_by: string | null;
          claimed_at: string | null;
          completed_at: string | null;
          city_id: string;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["bounties"]["Row"], "id" | "created_at" | "status"> & { status?: BountyStatus };
        Update: Partial<Database["public"]["Tables"]["bounties"]["Insert"]>;
      };
      programs: {
        Row: {
          id: string;
          name: string;
          slug: string;
          description: string | null;
          frequency: string | null;
          program_type: string | null;
          city_id: string;
          lead_user_id: string | null;
          active: boolean;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["programs"]["Row"], "id" | "created_at" | "active"> & { active?: boolean };
        Update: Partial<Database["public"]["Tables"]["programs"]["Insert"]>;
      };
      steward_actions: {
        Row: {
          id: string;
          steward_id: string;
          action_type: ActionType;
          target_type: string;
          target_id: string;
          note: string | null;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["steward_actions"]["Row"], "id" | "created_at">;
        Update: Partial<Database["public"]["Tables"]["steward_actions"]["Insert"]>;
      };
    };
  };
}
