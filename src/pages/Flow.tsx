import { useCallback, useEffect, useRef, useState } from "react";

import "reactflow/dist/style.css";
//import library
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  // Panel,
} from "reactflow";

import { useDisclosure } from "@mantine/hooks";
import { Button, Drawer } from "@mantine/core";
import { Input, Tooltip, Select } from "@mantine/core";
import { Edit } from "tabler-icons-react";
import { IconInfoOctagon } from "@tabler/icons-react";
import { Menu } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { SuccessBtn } from "../components/InfoCards";
import { InProcessBtn } from "../components/InfoCards";
//import components
import Navbar from "../components/Navbar";
import CaseInfo from "../components/CaseInfo";
import { Icon } from "@iconify/react";
import useWorkingStore from "../utils/stores/working";
import axios from "axios";

// import TextUpdaterNode from './TextUpdaterNode';
// import './text-updater-node.css';

// const nodeTypes = { textUpdater: TextUpdaterNode };

function Flow() {
  // var currentTime = new Date();
  // var hours = currentTime.getHours();
  // var minutes = currentTime.getMinutes();
  // var seconds = currentTime.getSeconds(); time
  

  const [currentTaskGroupId] = useWorkingStore((state) => [
    state.currentTaskGroupId,
  ]);

  useEffect(() => {
    const fetchTaskgroup = async () => {
    await axios
      .post("/api/patients/taskgroups", {
        id: currentTaskGroupId,
      })
      .then((res) => console.log(res.data));
    }
    fetchTaskgroup();
  },[]);
  var currentDate = new Date();
  
  var DayOfMonth = currentDate.getDate();
  var Month = currentDate.getMonth() + 1; //
  var Year = currentDate.getFullYear();
  var Hour = currentDate.getHours();
  var Minute = currentDate.getMinutes();
  var Second = currentDate.getSeconds();

  const xPos: any = useRef(550);
  const yPos: any = useRef(50);

  const idNode = useRef(1);
  var IdNodePointer: any = useRef(1);

  const [count, setCount] = useState(0);

  const [nodesState, setNodesState] = useState<boolean[]>([
    true,
    false,
    false,
    false,
  ]);

  const nodeOnAdd = () => {
    onAdd();
    const newNodesState = [...nodesState, false];
    setNodesState(newNodesState);
  };

  const handleTrack: any = (nodeId: number) => {
    IdNodePointer += 1;
    if (nodesState[nodeId - 1] === false) {
      const updatedNodesState = [...nodesState];
      updatedNodesState[nodeId - 1] = true;
      setNodesState(updatedNodesState);
    }
  };

  const navigate = useNavigate();

  // const handleClick = () => {
  //   // Use navigate to navigate to the '/App' route
  //   navigate("/");
  // };

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
      position: { x: xPos.current, y: yPos.current },
      type: "input",
      style: {
        width: 308,
        height: 230,
        boxShadow: "1px 2px 9px rgba(0, 0, 0, 0.05)",
        padding: 0,
        margin: 0,
        border: "none",
        borderRadius: "5px",
      },
      data: {
        label: (
          <main
            className="flex flex-col justify-center"
            style={{ width: "230px" }}
          >
            <div
              className="flex justify-center pl-4 py-2"
              style={{
                borderRadius: "5px 5px 0px 0px",
                backgroundColor: "#A2ECC2",
                width: "308px",
                height: "49px",
              }}
            >
              <SuccessBtn />
            </div>

            <div
              className="flex justify-center items-center mt-4"
              style={{ width: "308px" }}
            >
              <span className="text-xl font-semibold font-Mitr w-98 h-31 mt-2">
                จุดคัดกรอง
              </span>
            </div>
            <div className="flex justify-start items-center pt-3 pl-4 mb-5 ml-1 mt-2">
              <Icon
                icon="basil:user-clock-solid"
                color="#008c8c"
                className="w-6 h-6 ml-3 mr-4"
                style={{ width: "24px", height: "24px" }}
              />
              <span className="text-lg font-medium">วว/ดด/ปป 12.00</span>
            </div>

            <section
              className="flex flex-row justify-center border-2 border-green-pro bg-slate-500 ml-6"
              style={{ borderRadius: "5px", width: "260px", height: "40px" }}
            >
              <Menu shadow="md" width={138} position="bottom-end">
                <Menu.Target>
                  <div
                    className="flex flex-row items-center bg-white pl-2"
                    style={{ width: "138px", borderRadius: "4px 0px 0px 4px" }}
                  >
                    <button
                      className="flex flex-row justify-start w-24 inline-block border-2 border-transparent text-sm bg-white aboslute"
                      style={{ borderRadius: "5px" }}
                    >
                      <div>
                        <Icon
                          icon="basil:add-outline"
                          style={{ width: "25px", height: "25px" }}
                        />
                      </div>

                      <div className="flex justify-center items-center">
                        <p className="text-sm font-semibold flex justify-center items-center ml-1 pl-1.5">
                          Add Task
                        </p>
                      </div>
                    </button>
                  </div>
                </Menu.Target>

                <Menu.Dropdown>
                  {options.map((x) => (
                    <Menu.Item>
                      <p>{x.label}</p>
                    </Menu.Item>
                  ))}
                </Menu.Dropdown>
              </Menu>
              <Menu shadow="md" width={94} position="top-end">
                <Menu.Target>
                  <div
                    className="flex flex-row justify-center items-center bg-green-pro"
                    style={{ width: "122px" }}
                  >
                    <button
                      className="flex flex-row w-24 inline-block border--2 border-transparent gap-x-4 pl-5"
                      style={{ borderRadius: "5px" }}
                    >
                      <div className="flex items-center">
                        <p className="text-sm text-white font-semibold my-auto">
                          Track
                        </p>
                      </div>

                      <div className="ml-2">
                        <Icon
                          icon="fluent:cursor-click-24-filled"
                          color="white"
                          width="24"
                          height="24"
                        />
                      </div>
                    </button>
                  </div>
                </Menu.Target>
              </Menu>
            </section>
          </main>
        ),
      },
      //type: 'textUpdater',
    },
  ];
  const initialEdges = [
    { id: "e-1", source: "1", target: "2", animated: true },
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
    yPos.current += 250;

    idNode.current += 1;

    const newNode = {
      id: `${idNode.current}`,

      style: {
        width: 308,
        height: 230,
        boxShadow: "1px 2px 9px rgba(0, 0, 0, 0.05)",
        padding: 0,
        margin: 0,
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
              style={{
                borderRadius: "5px 5px 0px 0px",
                backgroundColor: "var(--info-3, #E08D8B)",
                width: "308px",
                height: "49px",
              }}
            >
              {nodesState[IdNodePointer] === true ? (
                <SuccessBtn />
              ) : (
                <InProcessBtn />
              )}
            </div>

            <div
              className="flex justify-center items-center mt-4"
              style={{ width: "308px" }}
            >
              <span className="text-xl font-semibold font-Mitr w-98 h-31 mt-2">
                จุดคัดกรอง
              </span>
            </div>
            <div className="flex justify-start items-center pt-3 pl-4 mb-5 ml-1 mt-2">
              <Icon
                icon="basil:user-clock-solid"
                color="#008c8c"
                className="w-6 h-6 ml-3 mr-4"
                style={{ width: "24px", height: "24px" }}
              />

              <span className="text-lg font-medium">วว/ดด/ปป 12.00</span>
            </div>

            <section
              className="flex flex-row justify-center border-2 border-green-pro bg-slate-500 ml-6"
              style={{ borderRadius: "5px", width: "260px", height: "40px" }}
            >
              <Menu shadow="md" width={138} position="bottom-end">
                <Menu.Target>
                  <div
                    className="flex flex-row items-center bg-white pl-2"
                    style={{ width: "138px", borderRadius: "4px 0px 0px 4px" }}
                  >
                    <button
                      className="flex flex-row justify-start w-24 inline-block border-2 border-transparent text-sm bg-white aboslute"
                      style={{ borderRadius: "5px" }}
                    >
                      <div>
                        <Icon
                          icon="basil:add-outline"
                          style={{ width: "25px", height: "25px" }}
                        />
                      </div>

                      <div className="flex justify-center items-center">
                        <p className="text-sm font-semibold flex justify-center items-center ml-1 pl-1.5">
                          Add Task
                        </p>
                      </div>
                    </button>
                  </div>
                </Menu.Target>

                <Menu.Dropdown onClick={nodeOnAdd}>
                  {options.map((x) => (
                    <Menu.Item>
                      <p>{x.label}</p>
                    </Menu.Item>
                  ))}
                </Menu.Dropdown>
              </Menu>
              <Menu shadow="md" width={94} position="top-end">
                <Menu.Target>
                  <div
                    className="flex flex-row justify-center items-center bg-green-pro"
                    style={{ width: "122px" }}
                  >
                    <button
                      className="flex flex-row w-24 inline-block border--2 border-transparent gap-x-4 pl-5"
                      style={{ borderRadius: "5px" }}
                      onClick={handleTrack(IdNodePointer.current)}
                    >
                      <div className="flex items-center">
                        <p className="text-sm text-white font-semibold my-auto">
                          Track
                        </p>
                      </div>

                      <div className="ml-2">
                        <Icon
                          icon="fluent:cursor-click-24-filled"
                          color="white"
                          width="24"
                          height="24"
                        />
                      </div>
                    </button>
                  </div>
                </Menu.Target>
              </Menu>
            </section>
          </main>
        ),
      },
      position: {
        x: xPos.current,
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
      {useEffect(() => {
        if (count < 2) {
          setCount(count + 1);
          nodeOnAdd();
        }
      }, [count])}

      <Navbar></Navbar>
      <main className="flex h-screen">
        <section className="flex bg-green-pro  h-14 w-17 ml-6 mt-8 p-1 rounded-md">
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
            <CaseInfo />
          </div>
        </Drawer>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
        ></ReactFlow>
      </main>
    </>
  );
}
export default Flow;
