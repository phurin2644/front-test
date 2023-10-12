import { Button, Select, TextInput } from "@mantine/core";
import { useEffect, useState } from "react";
import { TaskGroup, InfoCardProps } from "../data/Patient";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function NewPatientList(props: {
  close: () => void;
  setInfoCard: React.Dispatch<React.SetStateAction<InfoCardProps[]>>;
}) {
  const { close } = props;
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [HnInput, setHnInput] = useState("");
  const [blueprintInput, setBlueprintInput] = useState("");
  //add by Thian
  const [titleInput, setTitleInput] = useState("");
  const titleOptions = ["Dr", "Mr", "Mrs", "Ms"];

  useEffect(() => {}, []);

  const Add = async () => {
    const newPatient: TaskGroup = {
      title: titleInput,
      hospitalNumber: HnInput,
      firstName: firstNameInput,
      lastName: lastNameInput,
      blueprintType: blueprintInput,
      entry: "WALKIN",
      destination: "",
      status: "PENDING",
    };

    try {
      await axios.put("/api/taskgroups", {
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
          if (/[^0-9]/.test(text)) {
            toast.error("HN can be only numbers", {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 1000,
              style: {
                backgroundColor: "#FFE4D6",
                color: "#CD1818",
                border: "3px solid #F78CA2",
              },
              progressStyle: {
                background: "#F78CA2",
              },
            });
          } else {
            if (text.length <= 7) {
              setHnInput(text);
            } else {
              toast.error("HN can't exceed 7 characters", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1000,
                style: {
                  backgroundColor: "#FFE4D6",
                  color: "#CD1818",
                  border: "3px solid #F78CA2",
                },
                progressStyle: {
                  background: "#F78CA2",
                },
              });
            }
          }
          console.log(text);
        }}
        value={HnInput}
      />
      <Select // Added
        data={titleOptions}
        label="Title"
        placeholder="Select Title"
        withAsterisk
        onChange={(event) => {
          const text = event??"";
          setTitleInput(text);
        }}
        value={titleInput}
      />
      <TextInput
        placeholder="First name"
        label="First name"
        withAsterisk
        onChange={(event) => {
          const text = event.target.value;
          setFirstNameInput(text);
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
        }}
        value={lastNameInput}
      />
      <Select
        label="Blueprint"
        placeholder="Blueprint"
        withAsterisk
        data={["suandok1", "suandok2"]}
        onChange={(event) => {
          const text = event??"";
          setBlueprintInput(text);
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
