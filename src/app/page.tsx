import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const Page = () => {
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
          <TableRow>
            <TableCell>Jorch</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
          </TableRow>
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
