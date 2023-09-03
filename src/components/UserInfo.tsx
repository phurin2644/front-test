import { CircleCheck, CircleLetterX } from 'tabler-icons-react';

const Admin = () => (
    <div className='bg-green-400 h-6 w-6 flex items-center justify-center rounded-lg'>
      <CircleCheck
        size={20}
        strokeWidth={2}
        color={'#FFFFFF'}
      />
    </div>
  );

  const Normal = () => (
    <div className='bg-red-400 h-6 w-6 flex items-center justify-center rounded-lg'>
      <CircleLetterX
        size={20}
        strokeWidth={2}
        color={'#FFFFFF'}
      />
    </div>
  );
  

function UserInfo() {
    return (
        <div>
            <div className='bg-slate-100 flex p-3 justify-between'>
                <div className='flex w-64 '>
                    <h1 className='w-9'>1</h1>
                    <h1>phurin</h1>
                </div>
                <div className='flex w-48 '>
                    <h1>Cell Text</h1>
                </div>
                <div className='flex w-48 ' >
                    <Admin />
                    <Normal />
                </div>
                <div className='flex w-48 '>
                    <h1>วว/ดด/ปป</h1>
                </div>
                <div className='flex w-48 '>
                    <h1>Title</h1>
                </div>
            </div>
        </div>
    );
}
export default UserInfo