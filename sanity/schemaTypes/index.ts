import type { SchemaTypeDefinition } from "sanity";

import { event } from "./event";
import { teamMember } from "./teamMember";
import { timelineItem } from "./timelineItem";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [event, teamMember, timelineItem],
};
