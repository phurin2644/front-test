import { Button, TextInput } from "@mantine/core";
import { useState } from "react";
import { InfoCardProps } from "./InfoCards";
import { initialInfoCardsData } from "../data/Patient";

function NewPatientList(props: { close: () => void }) {
  const { close } = props;
  const [fullNameInput, setFullNameInput] = useState("");
  const [HnInput, setHnInput] = useState("");

  function convertToDate(dateString: string) {
    const [datePart, timePart] = dateString.split(" ");
    const [day, month, year] = datePart.split("/");
    const [hours, minutes, seconds] = timePart.split(":");

    // Month in JavaScript Date is 0-indexed, so we subtract 1 from the month
    return new Date(
      Number(`20${year}`),
      Number(month) - 1,
      Number(day),
      Number(hours),
      Number(minutes),
      Number(seconds)
    );
  }

  const Add = () => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

    const newPatient: InfoCardProps = {
      id: initialInfoCardsData.length + 1,
      title: HnInput,
      name: fullNameInput,
      timestamp: convertToDate(formattedDate),
      Status: false,
    };
    addOrUpdateCard(newPatient);
    console.log(currentDate);
    close();
  };

  function addOrUpdateCard(card: InfoCardProps) {
    const index = initialInfoCardsData.findIndex((item) => item.id === card.id);

    if (index !== -1) {
      initialInfoCardsData[index] = card;
    } else {
      initialInfoCardsData.push(card);
    }

    // Sort the array based on the timestamp in descending order
    initialInfoCardsData.sort((a, b) => {
      const timestampA = new Date(a.timestamp);
      const timestampB = new Date(b.timestamp);
      return timestampB.getTime() - timestampA.getTime();
    });
  }

  return (
    <div className="mx-4">
      <TextInput
        placeholder="HN"
        label="HN"
        withAsterisk
        onChange={(event) => {
          const text = event.target.value;
          setHnInput(text);
          console.log(text);
        }}
        value={HnInput}
      />
      <TextInput
        placeholder="First name"
        label="First name"
        withAsterisk
        onChange={(event) => {
          const text = event.target.value;
          setFullNameInput(text);
          console.log(text);
        }}
        value={fullNameInput}
      />
      <div className="flex justify-center">
        <Button
          className="bg-green-pro rounded-lg px-4 text-base text-white flex items-center hover:bg-green-c my-4 w-80 justify-center"
          onClick={Add}
          disabled={!fullNameInput || !HnInput}
        >
          Create
        </Button>
      </div>
    </div>
  );
}

export default NewPatientList;
