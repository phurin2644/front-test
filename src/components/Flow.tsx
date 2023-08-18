
import ReactFlow, { Controls, Background } from 'reactflow';

import 'reactflow/dist/style.css';

function Flow() {
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
                <ReactFlow>
                    <Background></Background>
                    <Controls></Controls>
                </ReactFlow>
            </div>
        </>
    );
}
export default Flow