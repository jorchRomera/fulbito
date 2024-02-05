"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import { Button } from "@/app/components/ui/button";
import { addPlayer } from "@/db/addPlayer";
import { getPlayers } from "@/db/getPlayers";

const PlayersTable = async () => {
  const players = await getPlayers();

  return (
    <>
      <Table className="justify-center items-center">
        <TableCaption>Fulbito Championship</TableCaption>
        <TableHeader>
          <TableRow className="">
            <TableHead className="w-[20%]">Players</TableHead>
            <TableHead>Pts</TableHead>
            <TableHead>PJ</TableHead>
            <TableHead>G</TableHead>
            <TableHead>E</TableHead>
            <TableHead>P</TableHead>
            <TableHead>GF</TableHead>
            <TableHead>GC</TableHead>
            <TableHead>DG</TableHead>
            <TableHead>AVG</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {players?.length &&
            players.map((player) => (
              <TableRow key={player.id}>
                <TableCell>{player.name}</TableCell>
                <TableCell>{player.pts}</TableCell>
                <TableCell>{player.pj}</TableCell>
                <TableCell>{player.g}</TableCell>
                <TableCell>{player.e}</TableCell>
                <TableCell>{player.p}</TableCell>
                <TableCell>{player.gf}</TableCell>
                <TableCell>{player.gc}</TableCell>
                <TableCell>{player.dg}</TableCell>
                <TableCell>{player.avg}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <div className="flex justify-end gap-5 w-full py-4 pr-10">
        <Button onClick={addPlayer}>Add Player</Button>
        <Button>Edit Player</Button>
        <Button variant="destructive">Remove Player</Button>
      </div>
    </>
  );
};

export default PlayersTable;
