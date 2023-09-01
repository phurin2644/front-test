import { NavLink } from 'react-router-dom';
import { Menu, Text } from '@mantine/core';
import { IconSettings, IconSearch, IconPhoto, IconMessageCircle, IconTrash, IconArrowsLeftRight } from '@tabler/icons-react';

function Navbar() {
    return (
        <div className="navbar ">
            <div className="flex justify-between gradient w-full">
                <NavLink to='/'>
                    <div className="flex px-10 mx-6">
                        <img src="/icon.png " alt="" className="h-8 mt-4 mr-2" />
                        <h1 className="font-bold text-xl pt-4">Fast track</h1>
                    </div>
                </NavLink>
                <div className="flex text-base space-x-4 h-full mx-10">
                    <NavLink to='/dashboard' className={({ isActive }) => isActive ? 'nav-active' : 'nav-hover'}><h1>Dashboard</h1></NavLink>
                    <NavLink to='/user' className={({ isActive }) => isActive ? 'nav-active' : 'nav-hover'}><h1>
                        Users
                    </h1></NavLink>
                    <Menu shadow="md" width={250} position='top-end'>
                        <Menu.Target>
                            <div className=" px-5">
                                <img src="/profile.png" alt="" className="mt-2 w-11 h-11 rounded-full mx-auto object-cover" />
                            </div>
                        </Menu.Target>

                        <Menu.Dropdown>
                            <Menu.Label>Application</Menu.Label>
                            <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
                            <Menu.Item icon={<IconMessageCircle size={14} />}>Messages</Menu.Item>
                            <Menu.Item icon={<IconPhoto size={14} />}>Gallery</Menu.Item>
                            <Menu.Item
                                icon={<IconSearch size={14} />}
                                rightSection={<Text size="xs" color="dimmed">⌘K</Text>}
                            >
                                Search
                            </Menu.Item>

                            <Menu.Divider />

                            <Menu.Label>Danger zone</Menu.Label>
                            <Menu.Item icon={<IconArrowsLeftRight size={14} />}>Transfer my data</Menu.Item>
                            <Menu.Item color="red" icon={<IconTrash size={14} />}>Delete my account</Menu.Item>
                        </Menu.Dropdown>
                    </Menu>


                </div>
            </div>
        </div>
    );
}
export default Navbar