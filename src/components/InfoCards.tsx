// import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mantine/core";

interface InfoCardProps {
  id: number;
  title: string;
  name: string;
  timestamp: string;
  Status: string;
}

function InfoCard({ title, name, timestamp, Status }: InfoCardProps) {
  return (
    <>
      <div className="bg-green-Suscess-1 mt-7 flex p-3 justify-between font-medium rounded-t-lg">
        <h1>{title}</h1>
        <h1>{Status}</h1>
      </div>
      <div className="bg-white shadow-sm h-35 w-52 p-4 rounded-md">
        <p>{name}</p>
        <p>{timestamp}</p>
        <Link to="/flow">
          <Button className="bg-green-pro  hover:bg-green-c p-1 rounded-md">
            Fast track!!
          </Button>
        </Link>
      </div>
    </>
  );
}

export default InfoCard;
