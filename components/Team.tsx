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
          <>
            {/* Mobile: horizontal scroll */}
            <div className="flex gap-4 overflow-x-auto pb-4 sm:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {members.map((member, idx) => {
                const photoUrl = member.photo
                  ? urlFor(member.photo).width(400).height(520).fit("crop").url()
                  : getFallbackImage(member.name);
                return (
                  <motion.div
                    key={member._id}
                    className="group relative w-44 shrink-0"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                  >
                    <div className="border-border-gray/70 flex h-full flex-col rounded-xl border bg-white shadow-sm transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
                      <div className="aspect-3/4 overflow-hidden rounded-xl">
                        <img
                          src={photoUrl}
                          alt={member.name}
                          className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                        />
                      </div>
                      <div className="px-3 pt-3 pb-3 text-left">
                        <h4 className="font-display text-navy text-sm font-semibold leading-tight">
                          {member.name}
                        </h4>
                        <p className="text-text-gray font-sans text-xs mt-0.5">
                          {member.role}
                        </p>
                        {(member.socials?.website || member.socials?.email) && (
                          <div className="mt-2 flex items-center gap-3">
                            {member.socials?.website ? (
                              <a
                                href={member.socials.website}
                                aria-label={`${member.name} website`}
                                className="text-text-gray hover:text-navy transition-colors"
                              >
                                <Globe size={14} />
                              </a>
                            ) : null}
                            {member.socials?.email ? (
                              <a
                                href={`mailto:${member.socials.email}`}
                                aria-label={`Email ${member.name}`}
                                className="text-text-gray hover:text-navy transition-colors"
                              >
                                <Mail size={14} />
                              </a>
                            ) : null}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Tablet and above: grid */}
            <div className="hidden gap-8 sm:grid sm:grid-cols-2 lg:grid-cols-4">
              {members.map((member, idx) => {
                const photoUrl = member.photo
                  ? urlFor(member.photo).width(520).height(680).fit("crop").url()
                  : getFallbackImage(member.name);
                return (
                  <motion.div
                    key={member._id}
                    className="group relative h-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                  >
                    <div className="border-border-gray/70 flex h-full flex-col rounded-2xl border bg-white shadow-sm transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
                      <div className="aspect-3/4 overflow-hidden rounded-2xl">
                        <img
                          src={photoUrl}
                          alt={member.name}
                          className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                        />
                      </div>
                      <div className="px-4 pt-5 pb-4 text-left">
                        <h4 className="font-display text-navy text-base font-semibold">
                          {member.name}
                        </h4>
                        <p className="text-text-gray font-sans text-sm">
                          {member.role}
                        </p>
                        {(member.socials?.website || member.socials?.email) && (
                          <div className="mt-3 flex items-center gap-4">
                            {member.socials?.website ? (
                              <a
                                href={member.socials.website}
                                aria-label={`${member.name} website`}
                                className="text-text-gray hover:text-navy transition-colors"
                              >
                                <Globe size={16} />
                              </a>
                            ) : null}
                            {member.socials?.email ? (
                              <a
                                href={`mailto:${member.socials.email}`}
                                aria-label={`Email ${member.name}`}
                                className="text-text-gray hover:text-navy transition-colors"
                              >
                                <Mail size={16} />
                              </a>
                            ) : null}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
