
import ReactFlow, { Controls, Background } from 'reactflow';

import 'reactflow/dist/style.css';

function Flow(){
    return(
        <>
        <div className='bg-slate-100 h-96'>
        <ReactFlow>
            <Background></Background>
            <Controls></Controls>
        </ReactFlow>
        </div>
        </>
    );
}
export default Flow