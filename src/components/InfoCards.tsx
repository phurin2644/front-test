// import React from "react";
import { Link } from "react-router-dom";

interface InfoCardProps {
  id: number;
  title: string;
  content: string;
  timestamp: string;
}

function InfoCard({ title, content, timestamp }: InfoCardProps) {
  return (
    <div className="bg-slate-400 h-35 w-52 p-4 m-5 rounded-md">
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
