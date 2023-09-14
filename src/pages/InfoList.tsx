"use client";
import InfoCard, { ActiveBtn, SuccessBtn } from "../components/InfoCards";
import { ScrollArea, Button, Modal } from "@mantine/core";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbar";
import { useDisclosure } from "@mantine/hooks";
import NewPatientList from "../components/NewPatientList";
import { initialInfoCardsData } from "../data/Patient";
import { X } from "tabler-icons-react";

function InfoList() {
  const [searchText, setSearchText] = useState("");
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedStatus, setSelectedStatus] = useState<null | boolean>(null);

  const lower = searchText.toLowerCase();
  const filterList = initialInfoCardsData.filter((Patient) => {
    return (
      (Patient.name.toLowerCase().includes(lower) ||
        Patient.title.toLowerCase().includes(lower)) &&
      (selectedStatus === null || Patient.Status === selectedStatus)
    );
  });

  return (
    <>
      <Navbar></Navbar>
      <div className="bg-slate-50 p-7 h-screen">
        <div className="flex items-center justify-center py-7">
          <div className="flex  ">
            {/* Search Input */}
            <SearchBar value={searchText} onChange={setSearchText} />
            {/* Create Button */}
            <div className="flex justify-end ml-10">
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
                <NewPatientList close={close} />
              </Modal>
              <Button
                style={{ width: 100 }}
                className="bg-green-pro  hover:bg-green-c p-1 rounded-md ml-7"
                onClick={open}
              >
                Create
              </Button>
            </div>
          </div>
        </div>
        <ScrollArea className="w-full h-550 mt-7" type="scroll">
          {/* Default */}
          <div className="grid justify-items-center grid-cols-5  gap-y-8">
            {filterList.map((card) => (
              <div className="col-span-1">
                <InfoCard
                  id={card.id}
                  title={card.title}
                  name={card.name}
                  timestamp={card.timestamp}
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