import React, { useCallback, } from 'react';
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

const initialNodes = [
    { id: '1', position: { x: 200, y: 40 }, data: { label: '1' } },
    { id: '2', position: { x: 200, y: 140 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2', animated: true }];

const getNodeId = () => `randomnode_${+new Date()}`;

function Flow() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback((params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    const onAdd = useCallback(() => {
        const newNode = {
            id: getNodeId(),
            data: { label: 'Added node' },
            position: {
                x: Math.random() * window.innerWidth - 100,
                y: Math.random() * window.innerHeight,
            },
        };
        setNodes((nds) => nds.concat(newNode));
    }, [setNodes]);


    return (
        <>
            <div className='bg-slate-50 h-screen flex'>
                <div className=' inline-block bg-green-light-3 h-32 w-32 ml-6 mt-8 p-1 rounded-md space-y-5'>
                    <div className='w-24 p-1 mx-2 mt-4 bg-white inline-block rounded-lg border-2 border-transparent hover:border-green-pro'>
                        <button>เพิ่ม Task</button>
                    </div>
                    <div className='w-24 p-1 mx-2 bg-white inline-block rounded-lg border-2 border-transparent hover:border-green-pro'>
                        <button>ข้อมูล</button>
                    </div>
                </div>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    fitView
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