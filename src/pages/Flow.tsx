import { useCallback, useEffect, useRef } from "react";
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Panel,
  useNodeId,
} from "reactflow";

import "reactflow/dist/base.css";
// import TextUpdaterNode from './TextUpdaterNode';
// import './text-updater-node.css';
import { useDisclosure } from "@mantine/hooks";
import { Drawer } from "@mantine/core";
import Navbar from "../components/Navbar";
import CustomDrawer from "../components/customdrawer";
import { flowdata, FlowData } from "../data/Flowdata 2";
import CustomNode, { NodeData } from "../components/CustomNode 2";
import useWorkingStore from "../utils/stores/working";
import axios from "axios";

// const nodeTypes = { textUpdater: TextUpdaterNode };
const nodeTypes = {
  custom: CustomNode,
};

// const getNodeId = () => `randomnode_${+new Date()}`;
// const newIdNode = () => `randomnode_${+useRef(0)}`;

function Flow() {


  const [currentTaskGroupId] = useWorkingStore((state) => [
    state.currentTaskGroupId,
  ]);

  useEffect(() => {
    const fetchTaskgroup = async () => {
    await axios
      .post("http://localhost:5000/patients/taskgroups", {
        id: currentTaskGroupId,
      })
      .then((res) => console.log(res.data));
    }
    fetchTaskgroup();
  },[]);

  const onAddFirstClick = () => {
    onAdd();
  };
  const onTrack = (props: { id: string}) => {
    const {id} = props;
    console.log("Clicked node id:", id);
  }
  const updateNodeStatus = (nodeId: string, newStatus: any) => {
    setNodes((prevNodes) =>
      prevNodes.map((node) =>
        node.id === nodeId ? { ...node, data: { ...node.data, Status: newStatus } } : node
      )
    );
  };
  const initialNodes = [
    {
      id: "1",
      type: "custom",
      position: { x: 550, y: 70 },
      data: {
        id: "1",
        title: "รับคนไข้",
        name: "Phurin Prasit",
        timestamp: "วว/ดด/ปป 12.00",
        Status: true,
        Addtask: 0,
        fn1: onAddFirstClick,
        fn2: updateNodeStatus,
      },
      //type: 'textUpdater',
    },
  ];
  const initialEdges = [
    { id: "e1-2", source: "1", target: "2", animated: true },
  ];

  const [opened, { open, close }] = useDisclosure(false);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  // var currentTime = new Date();
  // var hours = currentTime.getHours();
  // var minutes = currentTime.getMinutes();
  // var seconds = currentTime.getSeconds(); time
  const yPos = useRef(70);
  const idNode = useRef(1);


  const onAdd = useCallback(() => {
    
    yPos.current += 200;
    idNode.current += 1;
    var currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes().toString().padStart(2, "0");
    const Sec = currentDate.getSeconds().toString().padStart(2, "0");
    const day = currentDate.getDate();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const fullYear = currentDate.getFullYear();
    const year = String(fullYear).slice(-2);
    const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${Sec}`;
    const newNode = {
      id: `${idNode.current}`,
      type: "custom",
      data: {
        id: `${idNode.current}`,
        title: "จุดคัดกรอง",
        name: "Phurin Prasit",
        timestamp: formattedDate,
        Status: false,
        Addtask: 0,
        fn1: onAddFirstClick,
        fn2: updateNodeStatus,
      },

      position: {
        x: 550,
        y: yPos.current,
      },
    };
    const newEdge = {
      id: "f",
      source: `${idNode.current - 1}`,
      target: `${idNode.current}`,
    };
    setNodes((nds) => nds.concat(newNode));
    setEdges((nes) => nes.concat(newEdge));
  }, [setNodes]);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        withCloseButton={false}
        overlayProps={{
          color: "#dee2e6",
          opacity: 0.2,
          blur: 1,
        }}
      >
        <CustomDrawer />
      </Drawer>
      <Navbar></Navbar>
      <div className="bg-slate-50 h-screen flex">
        <div className=" inline-block bg-green-light-3 h-11 w-32 ml-6 mt-8 p-1 rounded-md space-y-5">
          <div
            className="w-24 p-1 mx-2 bg-white inline-block rounded-lg border-2 border-transparent hover:border-green-pro"
            onClick={open}
          >
            <button>ข้อมูล</button>
          </div>
        </div>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
        >
        </ReactFlow>
      </div>
    </>
  );
}

export default Flow;
