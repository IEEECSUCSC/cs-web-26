import type { SanityImageSource } from "@sanity/image-url";

export type EventStatusOverride = "auto" | "upcoming" | "past";

export interface Event {
  _id: string;
  title: string;
  date?: string | null;
  location?: string | null;
  summary?: string | null;
  image?: SanityImageSource | null;
  ctaLabel?: string | null;
  ctaUrl?: string | null;
  statusOverride?: EventStatusOverride | null;
}

export interface TeamSocials {
  website?: string | null;
  email?: string | null;
}

export interface TeamMember {
  _id: string;
  name: string;
  role: string;
  bio?: string | null;
  photo?: SanityImageSource | null;
  socials?: TeamSocials | null;
}

export interface TimelineItem {
  _id: string;
  year: string;
  title: string;
  description?: string | null;
  image?: SanityImageSource | null;
}
