"use client";

import { Globe, Mail } from "lucide-react";
import { motion } from "motion/react";

import { urlFor } from "@/sanity/lib/image";
import type { TeamMember } from "@/sanity/lib/types";

type TeamProps = {
  members: TeamMember[];
};

const getInitials = (name: string) => {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) {
    return "?";
  }

  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? (parts[parts.length - 1]?.[0] ?? "") : "";
  return (first + last).toUpperCase() || "?";
};

const getFallbackImage = (name: string) =>
  `https://placehold.co/400x400/0A192F/FFFFFF?text=${encodeURIComponent(
    getInitials(name),
  )}`;

export default function Team({ members }: TeamProps) {
  return (
    <section id="team" className="relative bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-4 flex flex-col items-center justify-center">
            <h2 className="section-label mb-2">Our People</h2>
            <div className="blue-divider" />
          </div>
          <h3 className="font-display text-navy mb-4 text-3xl font-bold md:text-4xl">
            Meet Our Team
          </h3>
          <p className="text-text-gray font-sans text-lg">
            Dedicated student leaders driving the IEEE Computer Society mission
            forward.
          </p>
        </div>

        {members.length === 0 ? (
          <div className="text-text-gray text-center font-sans text-sm">
            Team details will be announced soon.
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {members.map((member, idx) => {
              const photoUrl = member.photo
                ? urlFor(member.photo).width(240).height(240).fit("crop").url()
                : getFallbackImage(member.name);
              return (
                <motion.div
                  key={member._id}
                  className="group relative h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="bg-light-gray/50 border-border-gray/50 hover:border-ieee-blue/40 flex h-full flex-col rounded-2xl border p-6 text-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_20px_50px_rgba(10,25,47,0.05)]">
                    <div className="relative mx-auto mb-5 h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                      <img
                        src={photoUrl}
                        alt={member.name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <h4 className="font-display text-navy mb-1 text-lg leading-tight font-bold">
                      {member.name}
                    </h4>
                    <p className="text-ieee-blue mb-3 font-sans text-xs font-semibold tracking-wider uppercase">
                      {member.role}
                    </p>
                    {member.bio ? (
                      <p className="text-text-gray mb-4 font-sans text-xs">
                        {member.bio}
                      </p>
                    ) : null}

                    {(member.socials?.website || member.socials?.email) && (
                      <div className="mt-auto flex items-center justify-center gap-3">
                        {member.socials?.website ? (
                          <a
                            href={member.socials.website}
                            className="bg-light-gray border-border-gray text-text-gray hover:text-ieee-blue hover:border-ieee-blue flex h-8 w-8 items-center justify-center rounded-full border transition-colors"
                          >
                            <Globe size={14} />
                          </a>
                        ) : null}
                        {member.socials?.email ? (
                          <a
                            href={`mailto:${member.socials.email}`}
                            className="bg-light-gray border-border-gray text-text-gray hover:text-navy hover:border-navy flex h-8 w-8 items-center justify-center rounded-full border transition-colors"
                          >
                            <Mail size={14} />
                          </a>
                        ) : null}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
