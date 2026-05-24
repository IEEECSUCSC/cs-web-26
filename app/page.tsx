import About from "@/components/About";
import Contact from "@/components/Contact";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Team from "@/components/Team";
import Timeline from "@/components/Timeline";
import WhatWeDo from "@/components/WhatWeDo";
import { client } from "@/sanity/lib/client";
import { eventsQuery, teamQuery, timelineQuery } from "@/sanity/lib/queries";
import type { Event, TeamMember, TimelineItem } from "@/sanity/lib/types";

export const dynamic = "force-static";

async function getHomeData() {
  const [events, team, timeline] = await Promise.all([
    client.fetch<Event[]>(eventsQuery),
    client.fetch<TeamMember[]>(teamQuery),
    client.fetch<TimelineItem[]>(timelineQuery),
  ]);

  return { events, team, timeline };
}

export default async function Page() {
  const { events, team, timeline } = await getHomeData();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatWeDo />
        <Timeline items={timeline} />
        <Events events={events} />
        <Team members={team} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
