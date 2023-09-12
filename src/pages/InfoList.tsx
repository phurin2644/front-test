"use client";
// import InfoCard from "../components/InfoCards";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import { useDisclosure } from "@mantine/hooks";
import { Button, Modal } from "@mantine/core";

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
  // const [infoCards, setInfoCards] = useState(initialInfoCardsData);
  const [searchText, setSearchText] = useState("");
  const [opened, { open, close }] = useDisclosure(false);

  // const handleCreateCard = () => {
  //   const newCard = {
  //     id: infoCards.length + 1,
  //     title: "New Card",
  //     content: "Content for New Card",
  //     timestamp: "2023-09-10 00:00:00",
  //   };

  //   setInfoCards([...infoCards, newCard]);
  // };

  // เอาไปใส่ใน modal

  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-center items-center p-4">
        {/* Search Input */}
        <SearchBar value={searchText} onChange={setSearchText} />

        {/* content Input */}
        <Modal opened={opened} onClose={close} title="Authentication" centered>
          {/* Modal content */}
        </Modal>

        <div className="flex justify-end p-4">
          <Button
            style={{ width: 100 }}
            // onClick={handleCreateCard}
            className="bg-green-pro hover:bg-green-c p-1 rounded-md"
            onClick={open}
          >
            Create
          </Button>
        </div>
      </div>

      <div className="bg p-1">
        <div className="grid grid-cols-5 gap-4">
          {/* {infoCards.map((card) => (
            <div className="col-span-1 ml-4 mr-4">
              <InfoCard
                id={card.id}
                title={card.title}
                content={card.content}
                timestamp={card.timestamp}
              />
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default InfoList;
