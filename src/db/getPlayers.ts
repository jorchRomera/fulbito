import { players as playersSchema } from "@/db/schema";
import { Player } from "@/app/page";
import { db } from "@/db/index";

const mapPlayer = (player: Player) => {
  return {
    id: player.id,
    name: player.name,
    pts: player.pts,
    pj: player.pj,
    g: player.g,
    e: player.e,
    p: player.p,
    gf: player.gf,
    gc: player.gc,
    dg: player.dg,
    avg: player.avg,
  };
};

export const getPlayers = async (): Promise<Player[]> => {
  const players = await db.select().from(playersSchema);
  return players.map(mapPlayer);
};
