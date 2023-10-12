import React, { memo, useState } from "react";
import {
  Handle,
  Position,
} from "reactflow";
import { Click, ClockEdit, SquarePlus } from "tabler-icons-react";
import { Button, Menu } from "@mantine/core";
import axios from "axios"; // Import Axios

export interface NodeData {
  name: string;
  title: string;
  createdAt: string;
  status: string;
  setFlow: React.Dispatch<React.SetStateAction<{
    nodes: never[];
    edges: never[];
}>>;
taskGroupId: any;
  id: string;
  Addtask: string;
  fn1: () => void;
  fn2: Function;
}

function CustomNode(props: { data: NodeData }) {
  const { data } = props;

  const formattedDate = new Date(data.createdAt).toLocaleDateString("en-US", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });
  const hours = String(new Date(data.createdAt).getHours()).padStart(2, "0");
  const minutes = String(new Date(data.createdAt).getMinutes()).padStart(2, "0");
  const seconds = String(new Date(data.createdAt).getSeconds()).padStart(2, "0");
  const formattedTime = `${hours}:${minutes}:${seconds}`;
  const fullFormattedDate = `${formattedDate} ${formattedTime}`;
  const [newDate,setNewDate] = useState(fullFormattedDate);

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

  const handleTrackClick = () => {
    const newDate = new Date().toLocaleDateString("en-US", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });
    const hours = String(new Date().getHours()).padStart(2, "0");
    const minutes = String(new Date().getMinutes()).padStart(2, "0");
    const seconds = String(new Date().getSeconds()).padStart(2, "0");
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    const fullFormattednewDate = `${newDate} ${formattedTime}`;


    // Make an Axios PATCH request to update the node's status to "SUCCESS"
    axios
      .patch(`/api/tasks`, {
        id: data.id,
        status: "SUCCESS",
      })
      .then(async () => {
        
        const res = await axios.post("/api/graph/tasks", {
        taskGroupId: data.taskGroupId,
      });

      const dataRes = res.data;
      const nodes = dataRes.nodes.map((node: any) => ({
        ...node,
        id: node.elementId,
        type: "custom",
        data: {
          setFlow: data.setFlow,
          id: node.id,
          title: node.title,
          createdAt: node.createdAt,
          status: node.status,
          taskGroupId:data.taskGroupId
        },
      }));

      const edges = dataRes.edges.map((edge: any) => ({
        ...edge,
        id: edge.elementId,
        type: "BezierEdge",
        markerEnd: { type: "arrow" },
        animated: edge.required,
        style: { stroke: edge.required ? "red" : "gray" },
      }));
      data.setFlow({ nodes, edges });
        // Check the response and update the status if needed
        // if (response.status === 200) {
        // }
      })
      .catch((error) => {
        console.error("Error updating node status:", error);
      });
      setNewDate(fullFormattednewDate);
  };

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
        {data.status === 'SUCCESS' ? <Seccess /> : <InProcess />}
        <div className="px-4 py-3">
          <h1 className="flex justify-center">{data.title}</h1>
          <div className="flex items-center justify-center ">
            <ClockEdit
              size={20}
              strokeWidth={2}
              color={"#008C8C"}
              className="mr-2 "
            />
            <h1 className="text-xs py-4">{newDate}</h1>
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
              onClick={handleTrackClick} // Add onClick handler to trigger the update
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
    </div>
  );
}

export default memo(CustomNode);
