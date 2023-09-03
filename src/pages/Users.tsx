import { IconSearch } from '@tabler/icons-react';
import { Input } from '@mantine/core';


function Users() {
  return (
    <>
      <div className='bg-slate-50 h-screen p-7'>
        <div className='bg-white h-screen  mx-10 rounded-lg shadow-md px-10'>
          <div className='flex justify-between p-4 pt-10'>
            <div>
              <h1 className='text-xl'>User</h1>
              <h1 className='text-xs text-slate-500'>x users</h1>
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
          <div className='bg-slate-300 mt-7'>
            <h1>ggggggg</h1>
          </div>

        </div>

      </div>

    </>
  )
}

export default Users
