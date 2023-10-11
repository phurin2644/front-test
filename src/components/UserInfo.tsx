import {
  CircleCheck,
  CircleLetterX,
  Crown,
  Dots,
  FilePencil,
  Trash,
} from "tabler-icons-react";
import { Userdata } from "../data/Userdata";
import { Divider } from "@mantine/core";

function UserInfo(props: Userdata) {
  const formattedDate = new Date(props.createdAt).toLocaleDateString("en-US", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });
  const fullFormattedDate = `${formattedDate}`;
  const SuperAdmin = () => (
    <div className="flex">
      <div className="bg-yellow-400 h-6 w-6 flex items-center justify-center rounded-lg">
        <Crown size={20} strokeWidth={2} color={"#FFFFFF"} />
      </div>
      <h1 className="ml-2">{props.role}</h1>
    </div>
  );

  const Admin = () => (
    <div className="flex">
      <div className="bg-green-400 h-6 w-6 flex items-center justify-center rounded-lg">
        <CircleCheck size={20} strokeWidth={2} color={"#FFFFFF"} />
      </div>
      <h1 className="ml-2">{props.role}</h1>
    </div>
  );

  const Normal = () => (
    <div className="flex">
      <div className="bg-red-400 h-6 w-6 flex items-center justify-center rounded-lg">
        <CircleLetterX size={20} strokeWidth={2} color={"#FFFFFF"} />
      </div>
      <h1 className="ml-2">{props.role}</h1>
    </div>
  );

  return (
    <div>
      <Divider />
      <div className="bg-slate-50 flex items-center p-3 justify-between font-light">
        <div className="flex w-56 ">
          {/* <h1 className="w-9">{props.id}</h1> */}
          <h1>
            {props.firstName} {props.lastName}
          </h1>
        </div>
        <div className="flex justify-end">
          <div className="flex items-center w-40 ">
            <h1>{props.department}</h1>
          </div>
          <div className="flex items-center w-52">
            {props.role === "SUPER_ADMIN" ? (
              <SuperAdmin />
            ) : props.role === "ADMIN" ? (
              <Admin />
            ) : (
              <Normal />
            )}
          </div>
          <div className="flex items-center w-40  ">
            <h1>{fullFormattedDate}</h1>
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
export default UserInfo;
