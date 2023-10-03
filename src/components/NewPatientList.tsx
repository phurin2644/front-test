import { Button, TextInput } from "@mantine/core";
import { useEffect, useState } from "react";
import { Entry, InfoCard, InfoCardProps } from "../data/Patient";
import axios from "axios";

function NewPatientList(props: { close: () => void }) {
  const { close } = props;
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [HnInput, sethnInput] = useState("");
  const [infoCard, setInfoCard] = useState<InfoCardProps[]>([]);

  useEffect(() => {
    
  }, []);

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
      title:"Mr.",
      hospitalNumber: HnInput,
      firstName: firstNameInput,
      lastName: lastNameInput,
      entry: "WALKIN",
      destination:""
    };
    await axios
      .put("http://localhost:5000/taskgroups",{
        ...newPatient
      })
      .then((res) => {
        setInfoCard(res.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
    // console.log(currentDate);
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
