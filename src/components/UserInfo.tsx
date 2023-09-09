import {
  CircleCheck,
  CircleLetterX,
  Dots,
  FilePencil,
  Trash,
} from "tabler-icons-react";
import userdata from "../data/Userdata";
import { Userdata } from "../data/Userdata";
import { Divider } from "@mantine/core";




function UserInfo(props: Userdata) {
  const Admin = () => (
    <div className="bg-green-400 h-6 w-6 flex items-center justify-center rounded-lg">
      <CircleCheck size={20} strokeWidth={2} color={"#FFFFFF"} />
    </div>
  );

  const Normal = () => (
    <div className="bg-red-400 h-6 w-6 flex items-center justify-center rounded-lg">
      <CircleLetterX size={20} strokeWidth={2} color={"#FFFFFF"} />
    </div>
  );

  return (
    <div>
      <Divider />
      <div className="bg-slate-50 flex items-center p-3 justify-between font-light">
        <div className="flex w-64 ">
          <h1 className="w-9">{props.id}</h1>
          <h1>
            {props.firstName} {props.lastName}
          </h1>
        </div>
        <div className="flex justify-end">
          <div className="flex items-center w-40 ">
            <h1>{props.deparment}</h1>
          </div>
          <div className="flex items-center w-40 pl-2">
            {props.status ? <Admin /> : <Normal />}
          </div>
          <div className="flex items-center w-40 ">
            <h1>{props.date}</h1>
          </div>
          <div className="flex w-44 justify-between">
            <div className="flex">
              <div className="mr-2 bg-slate-200 h-8 w-8 flex items-center justify-center rounded-md">
                <FilePencil size={20} strokeWidth={2} color={"#79a1d2"} />
              </div>
              <div className="bg-slate-200 h-8 w-8 flex items-center justify-center rounded-md">
                <Trash size={20} strokeWidth={2} color={"#79a1d2"} />
              </div>
            </div>

            <div className="h-8 w-8 flex items-center justify-center ">
              <Dots size={20} strokeWidth={2} color={"#79a1d2"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



const UserList = (props: { value: string; }) => {
  const { value } = props;
  const lower = value.toLowerCase();
  const filterList = userdata.filter((user) => {
    return user.firstName.toLowerCase().includes(lower);
  });
  return (
    <div>
      {filterList.map((user) => (
          <UserInfo
            key={user.id}
            id={user.id}
            firstName={user.firstName}
            lastName={user.lastName}
            status={user.status}
            deparment={user.deparment}
            date={user.date}
          />
      ))}
    </div>
  );
};

export default UserList;
