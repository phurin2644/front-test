import { useCallback, useRef, } from 'react';
import ReactFlow, {
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
    Connection,
    Edge,
    Panel,
} from 'reactflow';

import 'reactflow/dist/style.css';
// import TextUpdaterNode from './TextUpdaterNode';
// import './text-updater-node.css';
import { useDisclosure } from '@mantine/hooks';
import { Drawer} from '@mantine/core';

// const nodeTypes = { textUpdater: TextUpdaterNode };

const initialNodes = [
    {
        id: '1', position: { x: 550, y: 70 }, data: {
            label: (<div className='h-20 w-24 ml-4'>
                <p className='pl-3 font-medium text-sm'>Node1</p>
                <div className=' bg-green-pro rounded-lg '>
                    <div className='w-24 p-0 m-0 bg-white inline-block rounded-lg border-2 border-transparent hover:border-green-pro text-sm'>
                        <div className='flex'>
                            <img src="/addicon.png"></img>
                            <button className='text-sm' >Add Task</button>
                        </div>

                    </div>
                    <div className='bg-green-pro w-24 pl-4 m-0 inline-block rounded-lg border-2 border-transparent hover:border-green-pro text-sm'>
                        <div className='flex'>
                            <button className='text-sm'>Track</button>
                            <img src="/Vector.png"></img>
                        </div>

                    </div>

                </div>

            </div>),

        },
        //type: 'textUpdater',
    },

];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2', animated: true }];

// const getNodeId = () => `randomnode_${+new Date()}`;
// const newIdNode = () => `randomnode_${+useRef(0)}`;

function Flow() {
    const [opened, { open, close }] = useDisclosure(false);
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback((params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

    // var currentTime = new Date();
    // var hours = currentTime.getHours();
    // var minutes = currentTime.getMinutes();
    // var seconds = currentTime.getSeconds(); time
    const yPos = useRef(70);
    const idNode = useRef(1);

    const onAdd = useCallback(() => {
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
            data: {
                label: <div className='h-20 w-24 ml-4'>
                    <p className='pl-3 font-medium text-sm'>Node{idNode.current}</p>
                    <div className=' bg-green-pro rounded-lg '>
                        <div className='w-24 p-0 m-0 bg-white inline-block rounded-lg border-2 border-transparent hover:border-green-pro text-sm'>
                            <div className='flex' onClick={onAdd}>
                                <img src="/addicon.png"></img>
                                <button className='text-sm' >Add Task</button>
                            </div>

                        </div>
                        <div className='bg-green-pro w-24 pl-4 m-0 inline-block rounded-lg border-2 border-transparent hover:border-green-pro text-sm'>
                            <div className='flex'>
                                <button className='text-sm'>Track</button>
                                <img src="/Vector.png"></img>
                            </div>

                        </div>

                    </div>

                </div>
            },
            position: {
                x: 550,
                y: yPos.current,
            },
        };
        const newEdge = {
            id: 'f',
            source: `${idNode.current - 1}`,
            target: `${idNode.current}`,
        };
        setNodes((nds) => nds.concat(newNode));
        setEdges((nes) => nes.concat(newEdge));
    }, [setNodes]);


    return (
        <>
            <Drawer opened={opened} onClose={close} title="Authentication">
                {/* Drawer content */}
            </Drawer>
            <div className='bg-slate-50 h-screen flex'>
                <div className=' inline-block bg-green-light-3 h-11 w-32 ml-6 mt-8 p-1 rounded-md space-y-5'>

                    <div className='w-24 p-1 mx-2 bg-white inline-block rounded-lg border-2 border-transparent hover:border-green-pro' onClick={open}>
                        <button >ข้อมูล</button>
                    </div>
                </div>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}


                >
                    <Panel position="top-right">
                        <button onClick={onAdd}>add node</button>
                    </Panel>
                    <Background></Background>
                    <Controls></Controls>

                </ReactFlow>
            </div>
        </>
    );
}
export default Flow

