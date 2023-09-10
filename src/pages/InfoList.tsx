"use client";
import InfoCard from "../components/InfoCards";
import { IconSearch } from "@tabler/icons-react";
import { Input } from "@mantine/core";
import { useState } from "react";

const initialInfoCardsData = [
  {
    id: 1,
    title: "Card 1",
    content: "Content for Card 1",
    timestamp: "2023-09-10 10:00:00",
  },
  {
    id: 2,
    title: "Card 2",
    content: "Content for Card 2",
    timestamp: "2023-09-10 11:00:00",
  },
];

function InfoList() {
  const [infoCards, setInfoCards] = useState(initialInfoCardsData);

  const handleCreateCard = () => {
    const newCard = {
      id: infoCards.length + 1,
      title: "New Card",
      content: "Content for New Card",
      timestamp: "2023-09-10 00:00:00",
    };

    setInfoCards([...infoCards, newCard]);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-center items-center p-4">
        {/* Search Input */}
        <Input
          style={{ width: 600 }}
          icon={<IconSearch className="h-5" />}
          variant="filled"
          placeholder="Search"
          radius="lg"
        />
        {/* Create Button */}
        <div className="flex justify-end p-4">
          <button
            style={{ width: 100 }}
            onClick={handleCreateCard}
            className="bg-slate-200 p-1 rounded-md"
          >
            Create
          </button>
        </div>
      </div>

      <div className="bg-slate-50 p-1">
        <div className="grid grid-cols-5 gap-4">
          {infoCards.map((card) => (
            <div className="col-span-1 ml-4 mr-4">
              <InfoCard
                id={card.id}
                title={card.title}
                content={card.content}
                timestamp={card.timestamp}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InfoList;
