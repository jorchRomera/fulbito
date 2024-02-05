import { players as playersSchema } from "@/db/schema";
import { db } from "@/db/index";
import { v4 as uuidv4 } from "uuid";

export const addPlayer = async () => {
  await db.insert(playersSchema).values({
    id: uuidv4(),
    name: "Jorge Romera",
    pts: 0,
    pj: 0,
    g: 0,
    e: 0,
    p: 0,
    gf: 0,
    gc: 0,
    dg: 0,
    avg: 0,
  });
};
