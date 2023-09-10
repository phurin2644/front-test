import { NavLink } from 'react-router-dom';
import { Menu } from '@mantine/core';
import { IconLogout, IconSettings } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    const handleClick = () => {
        // Use navigate to navigate to the '/App' route
        navigate('/');
    };

    return (
        <div className="navbar ">
            <div className="flex justify-between gradient w-full">
                <NavLink to='/card'>
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

                        <Menu.Dropdown onClick={handleClick}>
                            <Menu.Label>User Profile</Menu.Label>
                            <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
                            <Menu.Divider />
                            <Menu.Item color="red" icon={<IconLogout size={14} />}>log out</Menu.Item>
                        </Menu.Dropdown>
                    </Menu>


                </div>
            </div>
        </div>
    );
}
export default Navbar