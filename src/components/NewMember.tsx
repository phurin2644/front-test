import { Autocomplete, Button, Select, TextInput } from "@mantine/core";
import { useState } from "react";
import { UserPlus } from "tabler-icons-react";
import userdata, { Userdata } from "../data/Userdata";

function NewMember(props: { close: () => void }) {
  const { close } = props;
  const [titleInput,setTitleInput] = useState("");
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [departmentInput, setDepartmentInput] = useState("");
  const roleOptions = ["ADMIN", "SUPER_ADMIN","USER"];
  const titleOptions = ["Dr", "Mr", "Mrs", "Ms"];
  const [roleInput, setRoleInput] = useState("");

  const Add = () => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const fullYear = currentDate.getFullYear();
    const year = String(fullYear).slice(-2);
    const formattedDate = `${day}/${month}/${year}`;
    const newMem: Userdata = {
      id: `${userdata.length + 1}`,
      title: titleInput,
      firstName: firstNameInput,
      lastName: lastNameInput,
      role: roleInput,
      department: departmentInput,
      createdAt: formattedDate,
    };
    console.log(currentDate);
    userdata.push(newMem);
    close();
  };

    return (
        <div className="mx-4">
            <Select // Added
                data={titleOptions}
                label="Title"
                placeholder="Select Title"
                withAsterisk
                onChange={(event) => {
                const text = event;
                setTitleInput(text);
                console.log(text);
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
                label="Department"
                placeholder="Department"
                withAsterisk
                data={['ER', 'OR', 'LAB','ANY']}
                onChange={(event) => {
                    const text = event;
                    setDepartmentInput(text);
                    console.log(text);
                }}
                value={departmentInput}
            />
            <Select // Added
                data={roleOptions}
                label="Role"
                placeholder="Select Role"
                withAsterisk
                onChange={(event) => {
                const text = event;
                setRoleInput(text);
                console.log(text);
                }}
                value={roleInput}
            />
            <Button className="bg-green-pro rounded-lg px-4 text-base text-white flex items-center hover:bg-green-c my-4"
                onClick={Add}
                disabled={!firstNameInput || !lastNameInput || !departmentInput}>
                <div className="mr-2">
                    <UserPlus
                        size={20}
                        strokeWidth={2}
                        color={'white'}
                    />
                </div>
                New Member
            </Button>
        </div>
    );
}

export default NewMember;
