import { Divider, RingProgress, ScrollArea, Text } from "@mantine/core";
import Navbar from "../components/Navbar";
import { DatePickerInput } from '@mantine/dates';
import { useState } from "react";
import { IconCalendar } from "@tabler/icons-react";
import { FaBedPulse, FaSkull, FaUserGroup, FaPersonWalking, FaClock } from "react-icons/fa6";
import { TbReload } from "react-icons/tb";
import { IconType } from "react-icons";
import React from "react";

const ActivityCard = (props: { title: string, detail: string, icon: IconType, bg: string}) => {
  const { title, detail, icon, bg } = props;

  return (
    <div className="bg-slate-100 h-88 rounded-2xl mb-4 flex">
      <div className=" h-88 w-32 rounded-l-2xl flex justify-center items-center"
        style={{ backgroundColor: bg}}>
           {icon && React.createElement(icon, { size: 40,style: { color: "white" }})} {/* Render the icon */}
      </div>
      <div className="p-4 pl-8">
        <h1 className="text-base">{title}</h1>
        <h1 className="text-xl">{detail}</h1>
      </div>
    </div>
  );
}

const Ad = () => {
  return (
    <div className="flex items-center">
      <div className="bg-green-pro h-4 w-4 rounded-full flex justify-center items-center mr-2" >
        <div className="bg-white h-2 w-2 rounded-full"></div>
      </div>
      <h1>sicu (35%)</h1>
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
              <div className=" pl-14 flex">
                <RingProgress
                  size={250}
                  thickness={40}
                  label={
                    <Text size="xs" ta="center">
                      Application data usage
                    </Text>
                  }
                  sections={[
                    { value: 60, color: 'cyan' },
                    { value: 15, color: 'orange' },
                    { value: 15, color: 'grape' },
                  ]}
                  rootColor="yellow"
                />
                <div className="p-10 mt-10 flex space-x-5">
                  <div className="space-y-4">
                    <Ad></Ad>
                    <Ad></Ad>
                  </div>
                  <div className="space-y-4">
                    <Ad></Ad>
                    <Ad></Ad>
                  </div>
                </div>
              </div>
            </div>
            {/* //card2 Method */}
            <div className="bg-white shadow-md h-320 rounded-lg mt-8">
              <div className="bg-green-bar  flex p-4 justify-between font-medium rounded-t-lg text-white">
                <h1 className="pl-7">Method</h1>
              </div>
              <div className=" pl-14 flex">
                <RingProgress
                  size={250}
                  thickness={40}
                  label={
                    <Text size="xs" ta="center">
                      Application data usage
                    </Text>
                  }
                  sections={[
                    { value: 35, color: 'cyan' },
                    { value: 15, color: 'orange' },
                    { value: 15, color: 'grape' },
                  ]}
                  rootColor="yellow"
                />
                <div className="p-10 mt-10 flex space-x-5">
                  <div className="space-y-4">
                    <Ad></Ad>
                    <Ad></Ad>
                  </div>
                  <div className="space-y-4">
                    <Ad></Ad>
                    <Ad></Ad>
                  </div>
                </div>
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
              <div className="flex flex-col h-screen mx-16 m-5 mt-4">
              <ActivityCard title="เคสทั้งหมด" detail="2 เคส" icon={FaUserGroup} bg="#9573e8" />
                <ActivityCard title="เคสส่งตัวกลับ" detail="1 เคส" icon={TbReload} bg="#73cbe8" />
                <ActivityCard title="เคสเสียชีวิต" detail="0 เคส" icon={FaSkull} bg="#95969b" />
                <ActivityCard title="เคสผ่าตัด" detail="1 เคส" icon={FaBedPulse} bg="#cc657c" />
                <ActivityCard title="เคสไม่ต้องผ่าตัด" detail="0 เคส" icon={FaPersonWalking}bg="#66cbb8" />
                <ActivityCard title="เคสตรงเวลา" detail="1 เคส" icon={FaClock} bg="#e7c974" />
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
