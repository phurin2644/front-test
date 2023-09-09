
import { ScrollArea, Button, Input } from "@mantine/core";
import { UserPlus } from "tabler-icons-react";
import UserList from "../components/UserInfo";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import { IconSearch } from "@tabler/icons-react";


function Users() {
  const [searchText, setSearchText] = useState('');
  return (
    <>
      <div className="bg-slate-50 h-screen p-7">
        <div className="bg-white h-screen  mx-10 rounded-lg shadow-md px-10">
          <div className="flex justify-between p-4 pt-10">
            <div>
              <h1 className="text-xl">User</h1>
              <h1 className="text-xs text-slate-500">x users</h1>
            </div>
            <SearchBar value={searchText} onChange={setSearchText} />
            <Button className="bg-green-c rounded-lg px-4 text-sm text-white flex items-center hover:bg-green-pro" >
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
          <div className="bg-green-light-1 mt-7 flex p-3 justify-between font-medium rounded-t-lg">
            <div className="flex w-64 ">
              <h1 className="w-9 ">No</h1>
              <h1>Username</h1>
            </div>
            <div className="flex justify-end">
              <div className="flex w-40 ">
                <h1>Department</h1>
              </div>
              <div className="flex w-40">
                <h1>Admin</h1>
              </div>
              <div className="flex w-40 ">
                <h1>Created</h1>
              </div>
              <div className="flex w-44 ">
                <h1>Title</h1>
              </div>
            </div>
          </div>
          <ScrollArea h={500} type="scroll">
            <div className="divide-y ">
             <UserList value={searchText}/>
            </div>
          </ScrollArea>

        </div>
      </div>
    </>
  );
}

export default Users;
