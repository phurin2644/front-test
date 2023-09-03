import { CircleCheck } from 'tabler-icons-react';

const Admin = () => (
    <div className='bg-red'>
      <CircleCheck
        size={32}
        strokeWidth={2}
        color={'#e6b3b3'}
      />
    </div>
  );
  

function UserInfo() {
    return (
        <div>
            <div className='bg-slate-100 flex p-3 justify-between'>
                <div className='flex w-64 bg-green-pro'>
                    <h1 className='w-9'>1</h1>
                    <h1>phurin</h1>
                </div>
                <div className='flex w-48 bg-green-pro'>
                    <h1>Cell Text</h1>
                </div>
                <div className='flex w-48 bg-green-pro' >
                    <h1>Admin</h1>
                    <Admin />
                </div>
                <div className='flex w-48 bg-green-pro'>
                    <h1>วว/ดด/ปป</h1>
                </div>
                <div className='flex w-48 bg-green-pro'>
                    <h1>Title</h1>
                </div>
            </div>
        </div>
    );
}
export default UserInfo