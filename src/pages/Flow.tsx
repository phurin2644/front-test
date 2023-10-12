import { useCallback, useEffect, useRef, useState } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
} from "reactflow";

import "reactflow/dist/base.css";
// import TextUpdaterNode from './TextUpdaterNode';
// import './text-updater-node.css';
import { useDisclosure } from "@mantine/hooks";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { Drawer } from "@mantine/core";
import Navbar from "../components/Navbar";
import CustomDrawer from "../components/customdrawer";
import CustomNode from "../components/CustomNode 2";
import useWorkingStore from "../utils/stores/working";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CaseInfo } from "../data/Patient";

// const nodeTypes = { textUpdater: TextUpdaterNode };
const nodeTypes = {
  custom: CustomNode,
};

// const getNodeId = () => `randomnode_${+new Date()}`;
// const newIdNode = () => `randomnode_${+useRef(0)}`;

function Flow() {
  const navigate = useNavigate();
  const [patient, setPatient] = useState<CaseInfo>();
  const [flow, setFlow] = useState({ nodes: [], edges: [] });

  const [currentTaskGroupId] = useWorkingStore((state) => [
    state.currentTaskGroupId,
  ]);

  useEffect(() => {
    if (currentTaskGroupId === null) {
      navigate("/card");
    }
    const fetchTaskgroup = async () => {
      const tasks = await axios.post("api/patients/taskgroups", {
        id: currentTaskGroupId,
      });
      const res = await axios.post("api/graph/tasks", {
        taskGroupId: tasks.data[0].id,
      });

      console.log(res.data);
      const data = res.data;
      setPatient(tasks.data[0].patient);
      const nodes = data.nodes.map((node: any) => ({
        ...node,
        id: node.elementId,
        type: "custom",
        data: {
          setFlow: setFlow,
          id: node.id,
          title: node.title,
          createdAt: node.createdAt,
          status: node.status,
          taskGroupId: tasks.data[0].id,
        },
      }));

      const edges = data.edges.map((edge: any) => ({
        ...edge,
        id: edge.elementId,
        type: "BezierEdge",
        markerEnd: { type: "arrow" },
        animated: edge.required,
        style: { stroke: edge.required ? "red" : "gray" },
      }));
      setFlow({ nodes, edges });
    };
    fetchTaskgroup();
  }, []);
  console.log(flow);

  const onAddFirstClick = () => {
    onAdd();
  };
  const updateNodeStatus = (nodeId: string, newStatus: any) => {
    setNodes((prevNodes) =>
      prevNodes.map((node) =>
        node.id === nodeId
          ? { ...node, data: { ...node.data, Status: newStatus } }
          : node
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
  const [, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [, setEdges, onEdgesChange] = useEdgesState(initialEdges);

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
        <CustomDrawer patient={patient} />
      </Drawer>
      <Navbar></Navbar>
      <div className="bg-slate-50 h-screen flex">
        <section className="flex bg-green-light-3  h-14 w-17 ml-6 mt-8 p-1 py-9 rounded-md justify-center items-center">
          <div
            className="flex justify-center w-12 h-12 p-1 mx-2 bg-white rounded-xl border-spacing-1.5 border-black hover:bg-slate-200"
            onClick={open}
          >
            <button>
              <AiOutlineExclamationCircle style={{ fontSize: "1.6em" }} />
            </button>
          </div>
        </section>
        <ReactFlow
          nodes={flow.nodes}
          edges={flow.edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
        ></ReactFlow>
      </div>
    </>
  );
}

export default Flow;
