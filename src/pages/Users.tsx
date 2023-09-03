import { IconSearch } from '@tabler/icons-react';
import { Input } from '@mantine/core';
import UserInfo from '../components/UserInfo';


function Users() {
  return (
    <>
      <div className='bg-slate-50 h-screen p-7'>
        <div className='bg-white h-screen  mx-10 rounded-lg shadow-md px-10'>
          <div className='flex justify-between p-4 pt-10'>
            <div>
              <h1 className='text-xl'>User</h1>
              <h1 className='text-xs text-slate-500'>x55 users</h1>
            </div>
            <div className='justify-center'>
              <Input
                className='w-96 '
                icon={<IconSearch className='h-5' />}
                variant="filled"
                placeholder="Search"
                radius="lg"
              />
            </div>

            <button className='bg-green-pro rounded-lg p-2 text-sm text-white'>New Member</button>
          </div>
          <div className='bg-slate-300 mt-7 flex p-3 justify-between'>
            <div className='flex w-64 bg-green-pro'>
              <h1 className='w-9'>No</h1>
              <h1>Username</h1>
            </div>
            <div className='flex w-48 bg-green-pro'>
              <h1>Department</h1>
            </div>
            <div className='flex w-48 bg-green-pro' >
              <h1>Admin</h1>
            </div>
            <div className='flex w-48 bg-green-pro'>
              <h1>Created</h1>
            </div>
            <div className='flex w-48 bg-green-pro'>
              <h1>Title</h1>
            </div>
          </div>
          <UserInfo />

        </div>

      </div>

    </>
  )
}

export default Users
