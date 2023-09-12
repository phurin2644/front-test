// import React from "react";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";
import { Bolt, ClockEdit, Edit } from "tabler-icons-react";

interface InfoCardProps {
  id: number;
  title: string;
  content: string;
  timestamp: string;
}

export const Active = () => {
  return (
    <div className="flex items-center justify-center bg-green-pro p-0.5 px-3 text-sm rounded-2xl text-white">
      <div className="bg-green-c h-1.5 w-1.5 rounded mr-2"></div>
      <h1>Active</h1>
    </div>
  );
};

export const InfoCardEd = () => {
  return (
    <div className="bg-white shadow-sm h-44 w-64 rounded-md">
      <div className="flex justify-between bg-green-bar px-4 py-2 pr-2 rounded-t-md">
        <h1>630610753</h1>
        <Active />
      </div>
      <div className="px-4 py-3">
        <h1>Phurin Prasit</h1>
        <div className="flex items-center ">
          <ClockEdit
            size={20}
            strokeWidth={2}
            color={"#008C8C"}
            className="mr-2 "
          />
          <h1 className="text-xs py-4">DD/MM/YYYY 12.00</h1>
        </div>
        <div className="flex justify-center">
          <Button className="bg-green-light-1 hover:bg-green-g text-slate-400 rounded-r-none px-3 pr-5">
            <div className="flex items-center justify-center ">
              <Edit size={20} strokeWidth={2} className="mr-2" />
              <h1>Edit</h1>
            </div>
          </Button>
          <Link to="/flow">
            <Button className="bg-green-pro hover:bg-green-c text-white rounded-l-none px-3 pl-5">
              <div className="flex items-center justify-center ">
                <h1>Fast Track</h1>
                <Bolt size={20} strokeWidth={2} className="ml-2" />
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

function InfoCard({ title, content, timestamp }: InfoCardProps) {
  return (
    <div className="bg-white shadow-sm h-35 w-52 p-4 rounded-md">
      <h1>{title}</h1>
      <p>{content}</p>
      <p>{timestamp}</p>
      <Link to="/flow">
        <button className="bg-slate-200 p-1 rounded-md">Fast track!!</button>
      </Link>
    </div>
  );
}

export default InfoCard;
