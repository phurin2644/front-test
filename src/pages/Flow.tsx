import { useCallback, useRef, useState } from "react";
import "reactflow/dist/style.css";
//import library
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  // Panel,
} from "reactflow";
import { useDisclosure } from "@mantine/hooks";
import { Button, Drawer } from "@mantine/core";

import { Edit } from "tabler-icons-react";
import { IconInfoOctagon } from "@tabler/icons-react";
import { Menu } from "@mantine/core";

import { useNavigate } from "react-router-dom";

import {ActiveBtn} from "../components/InfoCards";
//import components
import Navbar from "../components/Navbar";
import CaseInfo from "../components/CaseInfo";

// import TextUpdaterNode from './TextUpdaterNode';
// import './text-updater-node.css';

// const nodeTypes = { textUpdater: TextUpdaterNode };

function Flow() {
  // var currentTime = new Date();
  // var hours = currentTime.getHours();
  // var minutes = currentTime.getMinutes();
  // var seconds = currentTime.getSeconds(); time

  const yPos = useRef(70);
  const idNode = useRef(1);

  const handleChange = () => {};

  const [ages, setAges] = useState("0");

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const handleOpen = () => {
    setIsDropDownOpen(!isDropDownOpen);
    // onAdd();
  };

  const firstClickAddNode = () => {
    onAdd();
  };

  const navigate = useNavigate();

  const handleClick = () => {
    // Use navigate to navigate to the '/App' route
    navigate("/");
  };

  const options = [
    {
      label: "task1",
      value: "t1",
    },
    {
      label: "task2",
      value: "t2",
    },
    {
      label: "task3",
      value: "t3",
    },
  ];

  const initialNodes = [
    {
      id: "1",
      position: { x: 550, y: 70 },
      type: "input",
      style: {
        width: 270,
        height: 190,
        boxShadow: "1px 2px 9px #F4AAB9",
        padding: 0,
        border: "none",
        borderRadius: "5px",
      },
      data: {
        label: (
          <main
            className="flex flex-col justify-center"
            style={{ width: "270px" }}
          >
            <div
              className="flex justify-center pl-4 py-2"
              style={{ borderRadius: "5px 5px 0px 0px", backgroundColor:"#A2ECC2"}}
            >
               <ActiveBtn/>
            </div>

            <div className="flex justify-center mt-3  pl-4">
              <span className="text-xl font-semibold font-Mitr">
                จุดคัดกรอง
              </span>
            </div>
            <div className="flex justi-start pt-3  pl-4 mb-6">
              <img className="mr-3" src="src/img/unify.png" />
              <span className="text-base">วว/ดด/ปป 12.00</span>
            </div>

            <section
              className="flex flex-row border-2 border-green-pro bg-slate-500 mx-auto"
              style={{ borderRadius: "5px", width: "250px" }}
            >
              <Menu shadow="md" width={123.4} position="bottom-end">
                <Menu.Target>
                  <article className="flex flex-col items-center flex-1 justify-start bg-white w-7/12">
                    <button
                      className="flex flex-row w-24 inline-block border-2 border-transparent text-sm bg-white aboslute"
                      style={{ borderRadius: "5px" }}
                      onClick={handleOpen}
                    >
                      <img className="mr-2" src="/addicon.png"></img>
                      <p className="text-sm font-semibold">Add Task</p>
                    </button>
                  </article>
                </Menu.Target>

                <Menu.Dropdown onClick={firstClickAddNode}>
                  {options.map((x) => (
                    <Menu.Item>
                      <p>{x.label}</p>
                    </Menu.Item>
                  ))}
                </Menu.Dropdown>
              </Menu>
              <Menu shadow="md" width={250} position="top-end">
                <Menu.Target>
                  <article className="flex flex-row items-center flex-1 justify-end bg-green-pro w-5/12">
                    <button
                      className="flex flex-row w-24 inline-block border--2 border-transparent gap-x-4 pl-1"
                      style={{ borderRadius: "5px" }}
                    >
                      <p className="text-sm text-white font-semibold">Track</p>
                      <img src="/Vector.png"></img>
                    </button>
                  </article>
                </Menu.Target>

                {/* <Menu.Dropdown>
                
                  
                </Menu.Dropdown> */}
              </Menu>
            </section>
          </main>
        ),
      },
      //type: 'textUpdater',
    },
  ];
  const initialEdges = [
    { id: "e-1", source: "1", target: "node-2", animated: true },
    // { id: "e2-3," source: "2" target: "3", animated: true}
  ];

  const [opened, { open, close }] = useDisclosure(false);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  // const getNodeId = () => `randomnode_${+new Date()}`;
  // const newIdNode = () => `randomnode_${+useRef(0)}`;

  const onAdd = () => {
    yPos.current += 120;
    idNode.current += 1;
    // console.log(yPos)
    // console.log(yPos.current)
    // console.log(getNodeId())
    // console.log(getNodeId)
    // console.log(idNode)
    // console.log(newIdNode)
    const newNode = {
      id: `${idNode.current}`,
      style: {
        width: 270,
        height: 190,
        boxShadow: "1px 2px 9px #F4AAB9",
        padding: 0,
        border: "none",
        borderRadius: "5px",
      },
      data: {
        label: (
          <main
            className="flex flex-col justify-center"
            style={{ width: "270px" }}
          >
            <div
              className="flex justify-center pl-4 py-2"
              style={{ borderRadius: "5px 5px 0px 0px",backgroundColor:"var(--info-3, #E08D8B)" }}
            >
              <ActiveBtn/>
            </div>

            <div className="flex justify-center mt-3  pl-4">
              <span className="text-xl font-semibold">จุดคัดกรอง</span>
            </div>
            <div className="flex justi-start pt-3 pl-4 mb-6">
              <img className="mr-3" src="src/img/unify.png" />
              <span className="text-base font-base">วว/ดด/ปป 12.00</span>
            </div>
            {/* <div className="flex justify-end">
              <span className="pl-3 font-semibold text-sm">
                Node{idNode.current}
              </span>
            </div> */}

            <section
              className="flex flex-row border-2 border-green-pro bg-slate-500 mx-auto"
              style={{ borderRadius: "5px", width: "250px" }}
            >
              <Menu shadow="md" width={123.4} position="bottom-end">
                <Menu.Target>
                  <article className="flex flex-col items-center flex-1 justify-start bg-white w-7/12">
                    <button
                      className="flex flex-row w-24 inline-block border-2 border-transparent text-sm bg-white aboslute"
                      style={{ borderRadius: "5px" }}
                      onClick={handleOpen}
                    >
                      <img className="mr-2" src="/addicon.png"></img>
                      <p className="text-sm font-semibold">Add Task</p>
                    </button>
                  </article>
                </Menu.Target>

                <Menu.Dropdown onClick={firstClickAddNode}>
                  {options.map((x) => (
                    <Menu.Item>
                      <p>{x.label}</p>
                    </Menu.Item>
                  ))}
                </Menu.Dropdown>
              </Menu>
              <Menu shadow="md" width={250} position="top-end">
                <Menu.Target>
                  <article className="flex flex-row items-center flex-1 justify-end bg-green-pro w-5/12">
                    <button
                      className="flex flex-row w-24 inline-block border--2 border-transparent gap-x-4 pl-1"
                      style={{ borderRadius: "5px" }}
                    >
                      <p className="text-sm text-white font-semibold">Track</p>
                      <img src="/Vector.png"></img>
                    </button>
                  </article>
                </Menu.Target>

                {/* <Menu.Dropdown>
                
                  
                </Menu.Dropdown> */}
              </Menu>
            </section>
            <div></div>
          </main>
        ),
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
  };

  return (
    <>
      <Navbar></Navbar>
      <main className="flex h-screen">
        <section className="flex bg-zinc-200  h-14 w-17 ml-6 mt-8 p-1 rounded-md">
          <div
            className="flex justify-center w-12 h-12 p-1 mx-2 bg-white inline-block rounded-lg border-2 border-black hover:bg-zinc-300"
            onClick={open}
          >
            <button>
              <IconInfoOctagon />
            </button>
          </div>
        </section>
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
          <div className="px-4">
            <div className="flex justify-end">
              <Button className="bg-stone-200 p-0 m-0 px-2 hover:bg-stone-300">
                <Edit size={20} strokeWidth={2} className="p-0 m-0" />
              </Button>
            </div>

            {/* Drawer content */}
            <CaseInfo />
            {/* {Drawer content end} */}
          </div>
        </Drawer>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
        >
          <Background></Background>
          <Controls></Controls>
        </ReactFlow>
      </main>
    </>
  );
}
export default Flow;
