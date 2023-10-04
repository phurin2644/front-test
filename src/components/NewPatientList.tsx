import { Button, TextInput } from "@mantine/core";
import { useEffect, useState } from "react";
import { InfoCard, InfoCardProps } from "../data/Patient";
import axios from "axios";

function NewPatientList(props: { close: () => void }) {
  const { close } = props;
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [HnInput, sethnInput] = useState("");
  const [infoCard, setInfoCard] = useState<InfoCardProps[]>([]);

  useEffect(() => {}, []);

  const Add = async () => {
    // var currentDate = new Date();
    // const hours = currentDate.getHours();
    // const minutes = currentDate.getMinutes();
    // const Sec = currentDate.getSeconds();
    // const day = currentDate.getDate();
    // const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    // const fullYear = currentDate.getFullYear();
    // const year = String(fullYear).slice(-2);
    // const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${Sec}`;
    const newPatient: InfoCard = {
      title: "Mr.",
      hospitalNumber: HnInput,
      firstName: firstNameInput,
      lastName: lastNameInput,
      entry: "WALKIN",
      destination: "",
    };
    try {
      const response = await axios.put("http://localhost:5000/taskgroups", {
        ...newPatient,
      });

      // Update the infoCard state with the new data
      setInfoCard([...infoCard, response.data]);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }

    close();
  };

  // function addOrUpdateCard(card: InfoCardProps) {
  //   const index = initialInfoCardsData.findIndex((item) => item.id === card.id);

  //   if (index !== -1) {
  //     initialInfoCardsData[index] = card;
  //   } else {
  //     initialInfoCardsData.push(card);
  //   }

  //   // Sort the array based on the timestamp in descending order
  //   initialInfoCardsData.sort((a, b) => {
  //     const timestampA = new Date(a.timestamp);
  //     const timestampB = new Date(b.timestamp);
  //     return timestampB.getTime() - timestampA.getTime();
  //   });
  // }

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
          setFirstNameInput(text);
          console.log(text);
        }}
        value={firstNameInput}
      />
      <TextInput
        placeholder="First name"
        label="First name"
        withAsterisk
        onChange={(event) => {
          const text = event.target.value;
          setLastNameInput(text);
          console.log(text);
        }}
        value={lastNameInput}
      />
      <div className="flex justify-center">
        <Button
          className="bg-green-pro rounded-lg px-4 text-base text-white flex items-center hover:bg-green-c my-4 w-80 justify-center"
          onClick={Add}
          disabled={!firstNameInput || !HnInput || !lastNameInput}
        >
          Create
        </Button>
      </div>
    </div>
  );
}

export default NewPatientList;
