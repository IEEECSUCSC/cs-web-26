import { groq } from "next-sanity";

export const eventsQuery = groq`*[_type == "event"]{
  _id,
  title,
  date,
  location,
  summary,
  image,
  ctaLabel,
  ctaUrl,
  statusOverride
} | order(date asc)`;

export const teamQuery = groq`*[_type == "teamMember"]{
  _id,
  name,
  role,
  bio,
  photo,
  socials
} | order(name asc)`;

export const timelineQuery = groq`*[_type == "timelineItem"]{
  _id,
  year,
  title,
  description,
  image
} | order(year asc)`;
