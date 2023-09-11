import { NavLink } from "react-router-dom";
import { Menu } from "@mantine/core";
import { IconLogout, IconSettings } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { MenuItem } from "@mantine/core/lib/Menu/MenuItem/MenuItem";

function Navbar() {
  const navigate = useNavigate();

  const handleClick = () => {
    // Use navigate to navigate to the '/App' route
    navigate("/");
  };

  return (
    <div className="navbar ">
      <div className="flex justify-between gradient w-full">
        <NavLink to="/card">
          <div className="flex px-10 mx-6">
            <img src="/icon.png " alt="" className="h-8 mt-4 mr-2" />
            <h1 className="font-bold text-xl pt-4">Fast track</h1>
          </div>
        </NavLink>
        <div className="flex text-base space-x-4 h-full mx-10">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "nav-active" : "nav-hover"
            }
          >
            <h1>Dashboard</h1>
          </NavLink>
          <NavLink
            to="/user"
            className={({ isActive }) =>
              isActive ? "nav-active" : "nav-hover"
            }
          >
            <h1>Users</h1>
          </NavLink>
          <Menu shadow="md" width={250} position="top-end">
            <Menu.Target>
              <div className=" px-5">
                <img
                  src="/profile.png"
                  alt=""
                  className="mt-2 w-11 h-11 rounded-full mx-auto object-cover"
                />
              </div>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Label className="text-sm">User Profile</Menu.Label>
              <Menu.Label>
                <div className="flex p-1">
                  <div>
                    <img
                      src="/profile.png"
                      alt=""
                      className=" w-11 h-11 rounded-full mx-auto object-cover"
                    />
                  </div>
                  <div className="ml-4 pt-1">
                    <h1>Phurin Prasit</h1>
                    <h1>front-end</h1>
                  </div>
                </div>
              </Menu.Label>
              <Menu.Divider />
              <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
              <Menu.Divider />
              <Menu.Item
                color="red"
                icon={<IconLogout size={14} />}
                onClick={handleClick}
              >
                log out
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
