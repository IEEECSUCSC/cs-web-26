import { defineField, defineType } from "sanity";

export const event = defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "ctaLabel",
      title: "CTA Label",
      type: "string",
    }),
    defineField({
      name: "ctaUrl",
      title: "CTA URL",
      type: "url",
      validation: (Rule) =>
        Rule.uri({ allowRelative: true, scheme: ["http", "https", "mailto"] }),
    }),
    defineField({
      name: "statusOverride",
      title: "Status Override",
      type: "string",
      initialValue: "auto",
      options: {
        list: [
          { title: "Auto (based on date)", value: "auto" },
          { title: "Upcoming", value: "upcoming" },
          { title: "Past", value: "past" },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
      date: "date",
      location: "location",
      media: "image",
    },
    prepare: ({ title, date, location, media }) => {
      const formattedDate = date
        ? new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })
        : "No date";
      const subtitle = location
        ? `${formattedDate} | ${location}`
        : formattedDate;
      return { title, subtitle, media };
    },
  },
});
