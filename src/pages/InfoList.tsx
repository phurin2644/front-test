"use client";
import InfoCard from "../components/InfoCards";
import { ScrollArea, Button, Modal } from "@mantine/core";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbar";

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
  const [searchText, setSearchText] = useState('');
  const [infoCards, setInfoCards] = useState(initialInfoCardsData);

  const handleCreateCard = () => {
    const newCard = {
      id: infoCards.length + 1,
      title: "New Card " + `${infoCards.length + 1}`,
      content: "Content for New Card",
      timestamp: "2023-09-10 00:00:00",
    };

    setInfoCards([...infoCards, newCard]);
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="bg-slate-50 p-7 h-screen">
        <div className="flex justify-center py-7">
          <div className="flex ">
            {/* Search Input */}
            <SearchBar value={searchText} onChange={setSearchText} />
            {/* Create Button */}
            <div className="flex justify-end ">
              <Button
                style={{ width: 100 }}
                onClick={handleCreateCard}
                className="bg-green-pro  hover:bg-green-c p-1 rounded-md ml-7"
              >
                Create
              </Button>
            </div>
          </div>
        </div>
        <ScrollArea className="w-full h-550 mt-7" type="scroll">
          <div className="grid justify-items-center grid-cols-5  gap-y-8">
            {infoCards.map((card) => (
              <div className="col-span-1">
                <InfoCard
                  id={card.id}
                  title={card.title}
                  content={card.content}
                  timestamp={card.timestamp}
                />
              </div>
            ))}
          </div>
        </ScrollArea>

      </div>
    </>


  );
}

export default InfoList;
