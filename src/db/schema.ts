import { integer, pgTable, smallint, text } from "drizzle-orm/pg-core";

export const players = pgTable("players", {
  id: text("id").notNull().primaryKey(),
  name: text("name").notNull(),
  pts: smallint("pts").notNull(),
  pj: smallint("pj").notNull(),
  g: smallint("g").notNull(),
  e: smallint("e").notNull(),
  p: smallint("p").notNull(),
  gf: smallint("gf").notNull(),
  gc: smallint("gc").notNull(),
  dg: smallint("dg").notNull(),
  avg: integer("avg").notNull(),
});
