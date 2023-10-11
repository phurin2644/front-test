import { Autocomplete, Button, TextInput } from "@mantine/core";
import { useEffect, useState } from "react";
import { TaskGroup, InfoCardProps } from "../data/Patient";
import axios from "axios";

function NewPatientList(props: {
  close: () => void;
  setInfoCard: React.Dispatch<React.SetStateAction<InfoCardProps[]>>;
}) {
  const { close, setInfoCard } = props;
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [HnInput, sethnInput] = useState("");
  const [blueprintInput, setBlueprintInput] = useState("");

  useEffect(() => {}, []);

  const Add = async () => {
    const newPatient: TaskGroup = {
      title: "Mr.",
      hospitalNumber: HnInput,
      firstName: firstNameInput,
      lastName: lastNameInput,
      blueprintType: blueprintInput,
      entry: "WALKIN",
      destination: "",
      status: "PENDING",
    };

    try {
      await axios.put("http://localhost:5000/taskgroups", {
        ...newPatient,
      });
      // await axios
      //   .get("http://localhost:5000/patients")
      //   .then((res) => {
      //     const fetchedInfoCard = res.data;
      //     const sortedInfoCard = sortCardsByTimestamp(fetchedInfoCard);
      //     setInfoCard(sortedInfoCard);
      //   })
      //   .catch((error) => {
      //     console.error("Error fetching user data:", error);
      //   });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }

    window.location.reload();
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
        placeholder="Last name"
        label="Last name"
        withAsterisk
        onChange={(event) => {
          const text = event.target.value;
          setLastNameInput(text);
          console.log(text);
        }}
        value={lastNameInput}
      />
      <Autocomplete
        label="Blueprint"
        placeholder="Blueprint"
        withAsterisk
        data={["suandok1", "suandok2"]}
        onChange={(event) => {
          const text = event;
          setBlueprintInput(text);
          console.log(text);
        }}
        value={blueprintInput}
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
