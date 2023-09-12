import { Button, TextInput } from "@mantine/core";
import { useState } from "react";
import { InfoCardProps } from "./InfoCards";
import { initialInfoCardsData } from "../data/Patient";

function NewPatientList(props: { close: () => void }) {
  const { close } = props;
  const [fullNameInput, setFullNameInput] = useState("");
  const [HnInput, sethnInput] = useState("");

  const Add = () => {
    var currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const Sec = currentDate.getSeconds();
    const day = currentDate.getDate();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const fullYear = currentDate.getFullYear();
    const year = String(fullYear).slice(-2);
    const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${Sec}`;
    const newPatient: InfoCardProps = {
      id: initialInfoCardsData.length + 1,
      title: HnInput,
      name: fullNameInput,
      timestamp: formattedDate,
      Status: false,
    };
    console.log(currentDate);
    initialInfoCardsData.push(newPatient);
    close();
  };

  return (
    <div className="mx-4">
      <TextInput
        placeholder="HN"
        label="HN"
        withAsterisk
        onChange={(event) => {
          const text = event.target.value;
          sethnInput(text);
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
