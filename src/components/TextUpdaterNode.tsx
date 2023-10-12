import React from 'react';
import { Handle, Position } from 'reactflow';
import onAdd from '../pages/Flow';

interface TextUpdaterNodeProps {
    data: any; // Replace 'any' with the actual type of 'data'
    isConnectable: boolean;
}

const TextUpdaterNode: React.FC<TextUpdaterNodeProps> = ({ isConnectable }) => {
    // const onChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    //     console.log(evt.target.value);
    // }, []);

    return (
        <div className="text-updater-node">
            <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
            <div className='h-36 w-52'>
                <p>Node1</p>
                <div className='flex bg-green-pro rounded-lg '>
                    <div className='w-24 p-0 mx-2 bg-white inline-block rounded-lg border-2 border-transparent hover:border-green-pro text-sm'>
                        <div className='flex'>
                            <img src="src\img\addicon.png"></img>
                            <button className='text-sm' onClick={onAdd}>Add Task</button>
                        </div>

                    </div>
                    <div className='bg-green-pro w-24 p-0 mx-2 inline-block rounded-lg border-2 border-transparent hover:border-white text-sm'>
                        <div className='flex'>
                            <button className='text-sm'>Track</button>
                            <img src="src\img\Vector.png"></img>
                        </div>
                    </div>
                </div>
            </div>
            
            <Handle type="source" position={Position.Bottom} id="b" isConnectable={isConnectable} />
        </div>
    );
}

export default TextUpdaterNode;
