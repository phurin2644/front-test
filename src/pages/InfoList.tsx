"use client";
import InfoCard, { ActiveBtn, SuccessBtn } from "../components/InfoCards";
import { ScrollArea, Button, Modal } from "@mantine/core";
import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbar";
import { useDisclosure } from "@mantine/hooks";
import NewPatientList from "../components/NewPatientList";
import { X } from "tabler-icons-react";
import axios from "axios";
import { InfoCardProps } from "../data/Patient";

function InfoList() {
  const [searchText, setSearchText] = useState("");
  const [opened, { open, close }] = useDisclosure(false);
  const [, setSelectedStatus] = useState<null | boolean>(null);
  const [infoCard, setInfoCard] = useState<InfoCardProps[]>([]);

  useEffect(() => {
    axios
      .get("/api/patients")
      .then((res) => {
        const fetchedInfoCard = res.data;
        const sortedInfoCard = sortCardsByTimestamp(fetchedInfoCard);
        setInfoCard(sortedInfoCard);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const lower = searchText.toLowerCase();
  const filterList = infoCard.filter((Patient) => {
    return (
      Patient.firstName.toLowerCase().includes(lower) ||
      Patient.hospitalNumber.toLowerCase().includes(lower)
      // &&(selectedStatus === null || Patient.Status === selectedStatus)
    );
  });

  function sortCardsByTimestamp(cards: InfoCardProps[]): InfoCardProps[] {
    const sortedCards = cards.slice().sort((a, b) => {
      const timestampA = new Date(a.createdAt).getTime();
      const timestampB = new Date(b.createdAt).getTime();
      return timestampB - timestampA;
    });

    return sortedCards;
  }
  console.log(infoCard);

  return (
    <>
      <Navbar></Navbar>
      <div className="bg-slate-50 p-7 h-screen">
        <div className="flex items-center justify-center py-7">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Search Input */}

            <SearchBar value={searchText} onChange={setSearchText} />

            {/* Create Button */}
            <div className="flex justify-center lg:justify-end mt-3 lg:mt-0 lg:ml-10">
              <div className="flex border-2 border-dashed rounded-md border-zinc-400 px-2 gap-3 items-center justify-center">
                <Button
                  className="p-0 hover:bg-transparent"
                  onClick={() => setSelectedStatus(true)}
                >
                  <SuccessBtn />
                </Button>
                <Button
                  className="p-0 hover:bg-transparent"
                  onClick={() => setSelectedStatus(false)}
                >
                  <ActiveBtn />
                </Button>
                <Button
                  size="0.8"
                  className="bg-stone-400 h-5 w-5 flex  rounded-full m-0 pl-0.5 "
                  onClick={() => setSelectedStatus(null)}
                >
                  <X size={15} strokeWidth={2} color={"#FFFFFF"} />
                </Button>
              </div>

              <Modal
                style={{ width: "80%" }}
                opened={opened}
                onClose={close}
                withCloseButton={false}
                centered
                overlayProps={{
                  color: "#dee2e6",
                  opacity: 0.2,
                  blur: 1,
                }}
              >
                <NewPatientList close={close} setInfoCard={setInfoCard} />
                {/* ref */}
              </Modal>
              <Button
                className="bg-green-pro  hover:bg-green-c p-1 rounded-md ml-7 sm:w-32 md:w-48 lg:w-64"
                onClick={open}
              >
                Create
              </Button>
            </div>
          </div>
        </div>
        <ScrollArea className="w-full h-550 mt-7 px-20" type="scroll">
          {/* Default */}

          <div className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-y-6 gap-x-16">
            {filterList.map((card) => (
              <div className="sm:col-span-full md:col-span-1 lg:col-span-1">
                <InfoCard
                  key={card.id}
                  id={card.id}
                  firstName={card.firstName}
                  lastName={card.lastName}
                  hospitalNumber={card.hospitalNumber}
                  createdAt={card.createdAt}
                  Status={card.Status}
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
