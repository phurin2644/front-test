import { NavLink } from "react-router-dom";
import { Badge, Button, Menu } from "@mantine/core";
import { FC, useEffect } from "react";
import useAuth from "../utils/auth/useAuth";
import { User } from "lucide-react";
import { IconLogout, IconSettings } from "@tabler/icons-react";

function Navbar() {
const {user} = useAuth();
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
          {user?.role === "SUPER_ADMIN" &&
          (<NavLink
            to="/user"
            className={({ isActive }) =>
              isActive ? "nav-active" : "nav-hover"
            }
          >
            <h1>Users</h1>
          </NavLink>
          )}
          <NavProfile />
        </div>
      </div>
    </div>
  );
}
export default Navbar;

const NavProfile: FC = () => {
  const { logOut, user, state } = useAuth(); 
  const name = user?.username;
  

  console.log(state);
  if (state === "none") {
    return (
      <>
      </>
    );
  } else if (state === "signedIn") {
    return (
      
      <>
        {/* <Badge variant={"secondary"} className="flex gap-1 items-center">
          <User size={15} />
          <span>{user?.username.toUpperCase() || ""}</span>
        </Badge>
        <Button variant={"secondary"} onClick={() => logOut()}>
          Log Out
        </Button> */}
        <Menu shadow="md" width={250} position="top-end">
            <Menu.Target>
              <div className=" px-5">
                <div className="mt-2 w-11 h-11 rounded-full mx-auto bg-slate-300 items-center flex justify-center">
                  <h1>{user?.username[0]}</h1>
                </div>
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
                    <h1>{user?.username.toUpperCase() || ""}</h1>
                    <h1>{user?.department}</h1>
                  </div>
                </div>
              </Menu.Label>
              <Menu.Divider />
              <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
              <Menu.Divider />
              <Menu.Item
                color="red"
                icon={<IconLogout size={14} />}
                onClick={() => logOut()}
              >
                log out
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
      </>
    );
  } else if (state === "loggedOut") {
    return (
      <NavLink to="/">
        <Button variant={"secondary"}>Sign in</Button>
      </NavLink>
    );
  } else {
    return <></>;
  }
};
