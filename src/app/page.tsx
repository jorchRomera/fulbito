import React from "react";
import PlayersTable from "@/app/components/PlayersTable";

export interface Player {
  id: string;
  name: string;
  pts: number;
  pj: number;
  g: number;
  e: number;
  p: number;
  gf: number;
  gc: number;
  dg: number;
  avg: number;
}

const Page = async () => {
  return (
    <div className="h-full w-full py-[30px] flex justify-center items-center flex-col">
      <PlayersTable />
    </div>
  );
};

export default Page;
