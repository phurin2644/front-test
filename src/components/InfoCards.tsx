// import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mantine/core";
import { Bolt, ClockEdit, Edit } from "tabler-icons-react";

export interface InfoCardProps {
  id: number;
  title: string;
  name: string;
  timestamp: Date;
  Status: boolean;
}

export const InProcessBtn = () => {
  return (
    <div
      className="flex items-center justify-center p-0.5 px-3 text-sm rounded-2xl text-white"
      style={{ backgroundColor: "#cc413d" }}
    >
      <div
        style={{ backgroundColor: "#7a2725" }}
        className="h-1.5 w-1.5 rounded mr-2"
      ></div>
      <h1>In Process</h1>
    </div>
  );
};

export const SuccessBtn = () => {
  return (
    <div className="flex items-center justify-center bg-green-Suscess-2 p-0.5 px-3 text-sm rounded-2xl text-white">
      <div className="bg-green-Suscess-3 h-1.5 w-1.5 rounded mr-2"></div>

      <h1>Success</h1>
    </div>
  );
};

export const Success = (prop: { title: string }) => {
  const { title } = prop;
  return (
    <div className="flex justify-between bg-green-Suscess-1 px-4 py-2 pr-2 rounded-t-md">
      <h1>{title}</h1>
      <SuccessBtn />
    </div>
  );
};
export const ActiveBtn = () => {
  return (
    <div className="flex items-center justify-center bg-purple-Active-2 p-0.5 px-3 text-sm rounded-2xl text-white">
      <div className="bg-purple-Active-3 h-1.5 w-1.5 rounded mr-2"></div>
      <h1>Active</h1>
    </div>
  );
};

export const Active = (prop: { title: string }) => {
  const { title } = prop;
  return (
    <div className="flex justify-between bg-purple-Active-1 px-4 py-2 pr-2 rounded-t-md">
      <h1>{title}</h1>
      <ActiveBtn />
    </div>
  );
};

function InfoCard({ title, name, timestamp, Status }: InfoCardProps) {
  const formattedTimestamp = timestamp.toLocaleString();
  return (
    <>
      <div className="bg-white shadow-sm h-44 w-64 rounded-md">
        {Status ? <Success title={title} /> : <Active title={title} />}
        <div className="px-4 py-3">
          <h1>{name}</h1>
          <div className="flex items-center ">
            <ClockEdit
              size={20}
              strokeWidth={2}
              color={"#008C8C"}
              className="mr-2 "
            />
            <h1 className="text-xs py-4">{formattedTimestamp}</h1>
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
    </>
  );
}

export default InfoCard;
