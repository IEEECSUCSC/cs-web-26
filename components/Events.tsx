"use client";

import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const events = [
  {
    id: 1,
    title: "AI Bootcamp 2026",
    date: "June 12, 2026",
    location: "Main Auditorium",
    image: "https://placehold.co/600x400/00629b/FFFFFF?text=AI+Bootcamp",
    type: "upcoming",
  },
  {
    id: 2,
    title: "Cloud Computing Workshop",
    date: "June 20, 2026",
    location: "Computer Lab 1",
    image: "https://placehold.co/600x400/0A192F/FFFFFF?text=Cloud+Workshop",
    type: "upcoming",
  },
  {
    id: 3,
    title: "Hack the Future Hackathon",
    date: "July 5, 2026",
    location: "Innovation Hub",
    image: "https://placehold.co/600x400/00b5e2/FFFFFF?text=Hackathon",
    type: "upcoming",
  },
  {
    id: 4,
    title: "Web Dev 101",
    date: "Jan 15, 2026",
    location: "Online",
    image: "https://placehold.co/600x400/475569/FFFFFF?text=Web+Dev",
    type: "past",
  },
  {
    id: 5,
    title: "Cybersecurity Seminar",
    date: "Feb 10, 2026",
    location: "Main Auditorium",
    image: "https://placehold.co/600x400/00629b/FFFFFF?text=Cyber+Seminar",
    type: "past",
  },
];

export default function Events() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");

  const filteredEvents = events.filter((e) => e.type === activeTab);

  return (
    <section id="events" className="py-24 bg-light-gray relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex flex-col mb-4">
              <h2 className="section-label mb-2">Engage With Us</h2>
              <div className="blue-divider" />
            </div>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-navy">
              Upcoming Events
            </h3>
          </div>

          <div className="flex p-1 bg-white border border-border-gray rounded-xl shadow-sm">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold font-sans transition-all ${
                activeTab === "upcoming"
                  ? "bg-ieee-blue text-white shadow-md"
                  : "text-text-gray hover:text-navy"
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setActiveTab("past")}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold font-sans transition-all ${
                activeTab === "past"
                  ? "bg-ieee-blue text-white shadow-md"
                  : "text-text-gray hover:text-navy"
              }`}
            >
              Past Events
            </button>
          </div>
        </div>

        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-2xl border border-border-gray/50 overflow-hidden group shadow-sm hover:shadow-[0_20px_50px_rgba(10,25,47,0.05)] hover:-translate-y-1.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col"
                >
                  <div className="relative overflow-hidden aspect-[3/2]">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/20 shadow-sm flex items-center gap-2">
                      <Calendar size={14} className="text-ieee-blue" />
                      <span className="font-sans text-xs font-bold text-navy">
                        {event.date}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-text-gray mb-3">
                      <MapPin size={16} />
                      <span className="font-sans text-sm font-medium">
                        {event.location}
                      </span>
                    </div>
                    <h4 className="font-display font-bold text-xl text-navy mb-6">
                      {event.title}
                    </h4>

                    <div className="mt-auto">
                      {activeTab === "upcoming" ? (
                        <button className="w-full bg-light-gray text-navy hover:bg-ieee-blue hover:text-white font-sans font-semibold py-3 rounded-xl transition-colors duration-300">
                          Register Now
                        </button>
                      ) : (
                        <button className="w-full bg-light-gray text-text-gray hover:text-navy font-sans font-semibold py-3 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2">
                          View Details <ArrowRight size={16} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
