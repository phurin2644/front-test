import { Divider, ScrollArea } from "@mantine/core";
import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <>
    <Navbar />
      <div className='bg-slate-50 p-7 '>
        <div className=" flex justify-center mx-10">
          <div className=" h-670 w-screen mr-10" >
            {/* //card1 Amit */}
            <div className="bg-white shadow-md h-320 rounded-lg ">
              <div className="bg-green-bar  flex p-4 justify-between font-medium rounded-t-lg text-white">
                <h1 className="pl-7">Admit</h1>
              </div>
            </div>
            {/* //card2 Method */}
            <div className="bg-white shadow-md h-320 rounded-lg mt-8">
              <div className="bg-green-bar  flex p-4 justify-between font-medium rounded-t-lg text-white">
                <h1 className="pl-7">Method</h1>
              </div>
            </div>
          </div>
          {/* //card3 Activity */}
          <div className="bg-white shadow-md rounded-lg h-670 w-screen ml-10" >
            <div className="bg-green-bar  flex p-4 justify-between font-medium rounded-t-lg text-white">
              <h1 className="pl-7">Activity</h1>
            </div>
          </div>
        </div>
        <div className="flex justify-center ">
          <div className="bg-white shadow-md rounded-lg h-450 w-screen mx-10 mt-10">
            {/* //card4 Activity* */}
            <div className="bg-green-bar  flex p-4 justify-between font-medium rounded-t-lg text-white">
              <h1 className="pl-7">Activity*</h1>
            </div>
            <div className="bg-green-light-1 mt-14 mx-10 flex p-3 justify-between font-medium rounded-t-lg">
              <div className="flex w-64 ">
                <h1 className="w-9 ">No</h1>
                <h1>Activity</h1>
              </div>
              <div className="flex justify-end">
                <div className="flex w-44 ">
                  <h1>Standard time</h1>
                </div>
                <div className="flex w-44">
                  <h1>เคสที่ตรงเวลา</h1>
                </div>
                <div className="flex w-44 ">
                  <h1>เคสทั้งหมด</h1>
                </div>
                <div className="flex w-44 ">
                  <h1>เปอร์เซ็น</h1>
                </div>
              </div>
            </div>
            <ScrollArea h={235} type="scroll" className="mx-10">
              <div className="divide-y">
                <ActivityInfo />
                <ActivityInfo />
                <ActivityInfo />
                <ActivityInfo />
                <ActivityInfo />
                <ActivityInfo />
              </div>
            </ScrollArea>

          </div>
        </div>
      </div>

    </>
  )
}

const ActivityInfo = () => (
  <div>
    <Divider />
    <div className="bg-slate-50 flex items-center p-4 justify-between font-light">
      <div className="flex w-64 ">
        <h1 className="w-9">1</h1>
        <h1>
          Jane Doe
        </h1>
      </div>
      <div className="flex justify-end">
        <div className="flex items-center w-44 ">
          <h1>Cell Text</h1>
        </div>
        <div className="flex items-center w-44 pl-2">
          <h1>Cell Text</h1>
        </div>
        <div className="flex items-center w-44 ">
          <h1>Cell Text</h1>
        </div>
        <div className="flex w-44 justify-between">
          <div className="flex">
            <h1>Cell Text</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard
