import { ScrollArea, Button, Modal } from "@mantine/core";
import { UserPlus } from "tabler-icons-react";
import UserList from "../components/UserList";
import SearchBar from "../components/SearchBar";
import { useEffect, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import NewMember from "../components/NewMember";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Userdata } from "../data/Userdata";
import useAuth from "../utils/auth/useAuth";

function Users() {
  const [searchText, setSearchText] = useState("");
  const [opened, { open, close }] = useDisclosure(false);
  const [userData, setUserData] = useState<Userdata[]>([]);
  const numUser = userData.length;
  const { user } = useAuth();

  useEffect(() => {
    axios
      .get("api/users")
      .then((res) => {
        setUserData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div className="bg-slate-50  p-7">
        <div className="bg-white h-screen  mx-10 rounded-lg shadow-md px-10">
          <div className="flex justify-between p-4 pt-10">
            <div>
              <h1 className="text-xl">User</h1>
              <h1 className="text-xs text-slate-500">{numUser} users</h1>
            </div>
            <SearchBar value={searchText} onChange={setSearchText} />
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
              <NewMember close={close} />
            </Modal>
            <Button
              className="bg-green-pro rounded-lg px-4 text-sm text-white flex items-center hover:bg-green-c"
              onClick={open}
              disabled={user?.role !== "SUPER_ADMIN"}
            >
              <div className="mr-2">
                <UserPlus size={20} strokeWidth={2} color={"white"} />
              </div>
              New Member
            </Button>
          </div>
          <div className="bg-green-light-1 mt-7 flex p-3 justify-between font-medium rounded-t-lg">
            <div className="flex w-56 ">
              <h1>Username</h1>
            </div>
            <div className="flex justify-end">
              <div className="flex w-40 ">
                <h1>Department</h1>
              </div>
              <div className="flex w-52">
                <h1>Role</h1>
              </div>
              <div className="flex w-40 ">
                <h1>Created</h1>
              </div>
              <div className="flex w-44 ">
                <h1>Edit</h1>
              </div>
            </div>
          </div>
          <ScrollArea h={500} type="scroll">
            <div className="divide-y ">
              <UserList value={searchText} />
            </div>
          </ScrollArea>
        </div>
      </div>
    </>
  );
}

export default Users;
