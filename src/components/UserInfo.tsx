import { CircleCheck, CircleLetterX, Dots, FilePencil, Trash } from "tabler-icons-react";

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

function UserInfo() {
  return (
    <div>
      <div className="bg-slate-50 flex p-3 justify-between font-light">
        <div className="flex w-64 ">
          <h1 className="w-9">1</h1>
          <h1>phurin</h1>
        </div>
        <div className="flex justify-end">
          <div className="flex w-40 ">
            <h1>Cell Text</h1>
          </div>
          <div className="flex w-40 ">
            <Admin />
            <Normal />
          </div>
          <div className="flex w-40 ">
            <h1>วว/ดด/ปป</h1>
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
