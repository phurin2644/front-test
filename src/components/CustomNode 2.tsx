import React, { memo, useState } from "react";
import {
  Handle,
  Position,
  useNodeId,
  useNodes,
  useNodesInitialized,
  useNodesState,
} from "reactflow";
import { Click, ClockEdit, SquarePlus } from "tabler-icons-react";
import { Button, Menu } from "@mantine/core";
import InfoCard from "./InfoCards";
import Flow from "../pages/Flow";
import { IconLogout, IconSettings } from "@tabler/icons-react";

export interface NodeData {
  name: string;
  title: string;
  createdAt: string;
  status: string;
  id: string;
  Addtask: string;
  fn1: () => void;
  fn2: Function;
}

function CustomNode(props: { data: NodeData }) {
  const { data } = props;
  const [status, setStatus] = useState(data.status);
  const nodeId = useNodeId();
  const xI = useNodes();
  const c = useNodesInitialized();

  const InProcess = () => {
    return (
      <div className="flex justify-center bg-red-process-3 px-4 py-2 pr-2 rounded-t-md">
        <div className="flex items-center justify-center bg-red-process-2 p-0.5 px-3 text-sm rounded-2xl text-white">
          <div className="bg-red-process-1 h-1.5 w-1.5 rounded mr-2"></div>
          <h1>In Process</h1>
        </div>
      </div>
    );
  };
  const Seccess = () => {
    return (
      <div className="flex justify-center bg-green-Suscess-1 px-4 py-2 pr-2 rounded-t-md">
        <div className="flex items-center justify-center bg-green-Suscess-2 p-0.5 px-3 text-sm rounded-2xl text-white">
          <div className="bg-green-Suscess-3 h-1.5 w-1.5 rounded mr-2"></div>
          <h1>Success</h1>
        </div>
      </div>
    );
  };
  // function handleClick(event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
  //   throw new Error("Function not implemented.");
  // }

  return (
    <div>
      <Handle
        type="target"
        position={Position.Top}
        className="w-16 !bg-teal-500"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-16 !bg-teal-500"
      />
      <div className="bg-white shadow-sm h-44 w-64 rounded-md">
        {data.status ==='SUCCESS' ? <Seccess /> : <InProcess />}
        <div className="px-4 py-3">
          <h1 className="flex justify-center">
            {data.title} 
          </h1>
          <div className="flex items-center justify-center ">
            <ClockEdit
              size={20}
              strokeWidth={2}
              color={"#008C8C"}
              className="mr-2 "
            />
            <h1 className="text-xs py-4">{data.createdAt}</h1>
          </div>
          <div className="flex justify-center">
            <Menu shadow="md" width={130} position="bottom-end">
              <Menu.Target>
                <Button className="bg-white border-solid border-2 border-green-pro  hover:bg-transparent text-slate-500 rounded-r-none px-3 pr-5">
                  <div className="flex items-center justify-center ">
                    <SquarePlus size={20} strokeWidth={2} />
                    <h1 className="ml-2">Add Task</h1>
                  </div>
                </Button>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item onClick={data.fn1}>Task1</Menu.Item>
                <Menu.Divider />
                <Menu.Item onClick={data.fn1}>Task1</Menu.Item>
                <Menu.Divider />
                <Menu.Item onClick={data.fn1}>Task1</Menu.Item>
              </Menu.Dropdown>
            </Menu>

            <Button
              
              className="bg-green-pro hover:bg-green-c text-white rounded-l-none px-3 pl-5"
            >
              <div className="flex items-center justify-center ">
                <h1 className="mr-2">Track</h1>
                <Click size={20} strokeWidth={2} />
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* <InfoCard Status={true} id={1} name='phu rin' timestamp='12' title='630610753' /> */}
    </div>
  );
}

export default memo(CustomNode);
