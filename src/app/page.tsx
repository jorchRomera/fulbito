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

interface Players {
  name: string;
  pts: number;
  pj: number;
  g: number;
  e: number;
  p: number;
  gf: number;
  gc: number;
  dg: number;
}

const Page = async () => {
  // const data = await fetch("http://localhost:3000/api/players", {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   cache: "no-store",
  // });
  // const { players } = await data.json();

  const players: Players[] = [
    {
      name: "Jorge Romera",
      pts: 0,
      pj: 0,
      g: 0,
      e: 0,
      p: 0,
      gf: 0,
      gc: 0,
      dg: 0,
    },
    {
      name: "Fernando Di Benedetto",
      pts: 0,
      pj: 0,
      g: 0,
      e: 0,
      p: 0,
      gf: 0,
      gc: 0,
      dg: 0,
    },
  ];

  return (
    <div className="h-full w-full py-[30px] flex justify-center items-center flex-col">
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
          </TableRow>
        </TableHeader>
        <TableBody>
          {players.length &&
            players.map((player) => (
              <TableRow key={player.name}>
                <TableCell>{player.name}</TableCell>
                <TableCell>{player.pts}</TableCell>
                <TableCell>{player.pj}</TableCell>
                <TableCell>{player.g}</TableCell>
                <TableCell>{player.e}</TableCell>
                <TableCell>{player.p}</TableCell>
                <TableCell>{player.gf}</TableCell>
                <TableCell>{player.gc}</TableCell>
                <TableCell>{player.dg}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <div className="flex justify-end gap-5 w-full py-4 pr-10">
        <Button>Add Player</Button>
        <Button>Edit Player</Button>
        <Button variant="destructive">Remove Player</Button>
      </div>
    </div>
  );
};

export default Page;
