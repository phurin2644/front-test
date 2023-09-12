import { Divider, ScrollArea } from "@mantine/core";
import Navbar from "../components/Navbar";
import { DatePickerInput } from '@mantine/dates';
import { useState } from "react";
import { IconCalendar } from "@tabler/icons-react";

const ActivityCard = (props: { title: string, detail: string, pic: string }) => {
  const { title, detail, pic } = props;

  return (
    <div className="bg-slate-100 h-88 rounded-2xl mb-8 flex">
      <div className=" h-88 w-36 rounded-l-2xl bg-cover bg-center"
        style={{ backgroundImage: `url("${pic}")` }}>
      </div>
      <div className="p-4 pl-8">
        <h1 className="text-base">{title}</h1>
        <h1 className="text-xl">{detail}</h1>
      </div>
    </div>
  );
}

function Dashboard() {
  const [dateStart, setDateStart] = useState<Date | null>(null);
  const [dateEnd, setDateEnd] = useState<Date | null>(null);
  return (
    <>
      <Navbar />
      <div className="bg-slate-50 p-7 pt-4 ">
        <div className=" flex justify-center mx-10">
          <div className=" h-966 w-screen mr-10">
            <div className="h-24 rounded-lg ">
              <DatePickerInput
                className="w-550 mt-2"
                icon={<IconCalendar size="1.1rem" stroke={1.5} />}
                valueFormat="DD MM YYYY"
                label="เริ่มต้น"
                placeholder="Pick date"
                value={dateStart}
                onChange={setDateStart}
                maw={400}
                size="md"
                radius="md"
              />
            </div>
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
          <div className="h-966 w-screen ml-10">
            <div className="h-24 rounded-lg ">
              <DatePickerInput
                className="w-550 mt-2"
                icon={<IconCalendar size="1.1rem" stroke={1.5} />}
                valueFormat="DD MM YYYY"
                label="สิ้นสุด"
                placeholder="Pick date"
                value={dateEnd}
                onChange={setDateEnd}
                maw={400}
                size="md"
                radius="md"
              />
            </div>
            <div className="bg-white shadow-md rounded-lg h-670">
              <div className="bg-green-bar  flex p-4 justify-between font-medium rounded-t-lg text-white">
                <h1 className="pl-7">Activity</h1>
              </div>
              <div className="flex flex-col h-screen mx-16 m-5 mt-12">
                <ActivityCard title="เคสทั้งหมด" detail="2 เคส" pic="/c-2.png" />
                <ActivityCard title="เคสส่งตัวกลับ" detail="1 เคส" pic="/c-1.png" />
                <ActivityCard title="เคสเสียชีวิต" detail="0 เคส" pic="/c-3.png" />
                <ActivityCard title="เคสผ่าตัด" detail="1 เคส" pic="/c-4.png" />
                <ActivityCard title="เคสไม่ต้องผ่าตัด" detail="0 เคส" pic="/c-5.png" />
                <ActivityCard title="เคสตรงเวลา" detail="1 เคส" pic="/c-6.png" />
              </div>
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
  );
}

const ActivityInfo = () => (
  <div>
    <Divider />
    <div className="bg-slate-50 flex items-center p-4 justify-between font-light">
      <div className="flex w-64 ">
        <h1 className="w-9">1</h1>
        <h1>Jane Doe</h1>
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

export default Dashboard;
