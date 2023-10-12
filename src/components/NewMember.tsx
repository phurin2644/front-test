import { Button, Select, TextInput } from "@mantine/core";
import { useState } from "react";
import { UserPlus } from "tabler-icons-react";
import { newUser } from "../data/Userdata";
import axios from "axios";

function NewMember(props: { close: () => void }) {
  const { close } = props;
  const [titleInput, setTitleInput] = useState("");
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [departmentInput, setDepartmentInput] = useState("");
  const roleOptions = ["ADMIN", "SUPER_ADMIN", "USER"];
  const titleOptions = ["Dr", "Mr", "Mrs", "Ms"];
  const [roleInput, setRoleInput] = useState("");
  const [usernameInput, setUserNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const Add = async () => {

    const newMem: newUser = {
      title: titleInput,
      firstName: firstNameInput,
      lastName: lastNameInput,
      role: roleInput,
      department: departmentInput,
      username: usernameInput,
      password: passwordInput,
    };
    
    try {
      await axios.put("/api/users",{
        ...newMem,
      });
    }catch(error){
      console.error("Error creating memeber:", error);
    }
    window.location.reload();
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
          const text = event ?? "";
          setTitleInput(text);
        }}
        value={titleInput}
      />
      <TextInput
        placeholder="username"
        label="username"
        withAsterisk
        onChange={(event) => {
          const text = event.target.value;
          setUserNameInput(text);
        }}
        value={usernameInput}
      />
      <TextInput
        placeholder="password"
        label="password"
        withAsterisk
        onChange={(event) => {
          const text = event.target.value;
          setPasswordInput(text);
        }}
        value={passwordInput}
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
        label="Department"
        placeholder="Department"
        withAsterisk
        data={["ER", "OR", "LAB", "ANY"]}
        onChange={(event) => {
          const text = event?? "";
          setDepartmentInput(text);
        }}
        value={departmentInput}
      />
      <Select // Added
        data={roleOptions}
        label="Role"
        placeholder="Select Role"
        withAsterisk
        onChange={(event) => {
          const text = event?? "";
          setRoleInput(text);
        }}
        value={roleInput}
      />
      <Button
        className="bg-green-pro rounded-lg px-4 text-base text-white flex items-center hover:bg-green-c my-4"
        onClick={Add}
        disabled={!firstNameInput || !lastNameInput || !departmentInput}
      >
        <div className="mr-2">
          <UserPlus size={20} strokeWidth={2} color={"white"} />
        </div>
        New Member
      </Button>
    </div>
  );
}

export default NewMember;
