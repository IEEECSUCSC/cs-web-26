"use client";

import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";

import { urlFor } from "@/sanity/lib/image";
import type { Event } from "@/sanity/lib/types";

type EventsProps = {
  events: Event[];
};

type EventStatus = "upcoming" | "past";

const fallbackImage = "https://placehold.co/600x400/0A192F/FFFFFF?text=Event";

const formatEventDate = (dateValue?: string | null) => {
  if (!dateValue) {
    return "TBA";
  }

  const parsed = new Date(dateValue);
  if (Number.isNaN(parsed.getTime())) {
    return "TBA";
  }

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(parsed);
};

const getEventTime = (dateValue?: string | null) => {
  if (!dateValue) {
    return Number.POSITIVE_INFINITY;
  }

  const parsed = new Date(dateValue);
  const time = parsed.getTime();
  return Number.isNaN(time) ? Number.POSITIVE_INFINITY : time;
};

const getEventStatus = (event: Event, startOfToday: number): EventStatus => {
  if (event.statusOverride === "upcoming" || event.statusOverride === "past") {
    return event.statusOverride;
  }

  const time = getEventTime(event.date);
  return time >= startOfToday ? "upcoming" : "past";
};

export default function Events({ events }: EventsProps) {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");
  const { upcomingEvents, pastEvents } = useMemo(() => {
    const now = new Date();
    const startOfToday = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
    ).getTime();

    const upcoming: Event[] = [];
    const past: Event[] = [];

    for (const event of events) {
      const status = getEventStatus(event, startOfToday);
      if (status === "upcoming") {
        upcoming.push(event);
      } else {
        past.push(event);
      }
    }

    upcoming.sort((a, b) => getEventTime(a.date) - getEventTime(b.date));
    past.sort((a, b) => getEventTime(b.date) - getEventTime(a.date));

    return { upcomingEvents: upcoming, pastEvents: past };
  }, [events]);

  const filteredEvents = activeTab === "upcoming" ? upcomingEvents : pastEvents;

  return (
    <section id="events" className="bg-light-gray relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-4 flex flex-col">
              <h2 className="section-label mb-2">Engage With Us</h2>
              <div className="blue-divider" />
            </div>
            <h3 className="font-display text-navy text-3xl font-bold md:text-4xl">
              Upcoming Events
            </h3>
          </div>

          <div className="border-border-gray flex rounded-xl border bg-white p-1 shadow-sm">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`rounded-lg px-6 py-2.5 font-sans text-sm font-semibold transition-all ${
                activeTab === "upcoming"
                  ? "bg-ieee-blue text-white shadow-md"
                  : "text-text-gray hover:text-navy"
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setActiveTab("past")}
              className={`rounded-lg px-6 py-2.5 font-sans text-sm font-semibold transition-all ${
                activeTab === "past"
                  ? "bg-ieee-blue text-white shadow-md"
                  : "text-text-gray hover:text-navy"
              }`}
            >
              Past Events
            </button>
          </div>
        </div>

        <div className="min-h-100">
          {filteredEvents.length === 0 ? (
            <div className="text-text-gray text-center font-sans text-sm">
              No events to show yet.
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              >
                {filteredEvents.map((event) => (
                  <div
                    key={event._id}
                    className="border-border-gray/50 group flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(10,25,47,0.05)]"
                  >
                    <div className="relative aspect-3/2 overflow-hidden">
                      <img
                        src={
                          event.image
                            ? urlFor(event.image)
                                .width(600)
                                .height(400)
                                .fit("crop")
                                .url()
                            : fallbackImage
                        }
                        alt={event.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 flex items-center gap-2 rounded-lg border border-white/20 bg-white/90 px-3 py-1.5 shadow-sm backdrop-blur-sm">
                        <Calendar size={14} className="text-ieee-blue" />
                        <span className="text-navy font-sans text-xs font-bold">
                          {formatEventDate(event.date)}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      {event.location ? (
                        <div className="text-text-gray mb-3 flex items-center gap-2">
                          <MapPin size={16} />
                          <span className="font-sans text-sm font-medium">
                            {event.location}
                          </span>
                        </div>
                      ) : null}
                      <h4 className="font-display text-navy mb-6 text-xl font-bold">
                        {event.title}
                      </h4>
                      {event.summary ? (
                        <p className="text-text-gray mb-6 font-sans text-sm">
                          {event.summary}
                        </p>
                      ) : null}

                      <div className="mt-auto">
                        {event.ctaUrl ? (
                          <a
                            href={event.ctaUrl}
                            className={`bg-light-gray flex w-full items-center justify-center gap-2 rounded-xl py-3 font-sans font-semibold transition-colors duration-300 ${
                              activeTab === "upcoming"
                                ? "text-navy hover:bg-ieee-blue hover:text-white"
                                : "text-text-gray hover:text-navy"
                            }`}
                          >
                            {event.ctaLabel ??
                              (activeTab === "upcoming"
                                ? "Register Now"
                                : "View Details")}
                            {activeTab === "past" ? (
                              <ArrowRight size={16} />
                            ) : null}
                          </a>
                        ) : (
                          <button
                            type="button"
                            className={`bg-light-gray flex w-full items-center justify-center gap-2 rounded-xl py-3 font-sans font-semibold transition-colors duration-300 ${
                              activeTab === "upcoming"
                                ? "text-navy hover:bg-ieee-blue hover:text-white"
                                : "text-text-gray hover:text-navy"
                            }`}
                          >
                            {event.ctaLabel ??
                              (activeTab === "upcoming"
                                ? "Register Now"
                                : "View Details")}
                            {activeTab === "past" ? (
                              <ArrowRight size={16} />
                            ) : null}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </section>
  );
}
