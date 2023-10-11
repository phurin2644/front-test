import { NavLink } from "react-router-dom";
import { Button, Menu } from "@mantine/core";
import { FC } from "react";
import useAuth from "../utils/auth/useAuth";
import { IconLogout } from "@tabler/icons-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Navbar() {
  const { user } = useAuth();
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
          {(user?.role === "SUPER_ADMIN" || user?.role === "ADMIN") && (
            <NavLink
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

  console.log(state);
  if (state === "none") {
    return <></>;
  } else if (state === "signedIn") {
    return (
      <>
        <Menu shadow="md" width={250} position="top-end">
          <Menu.Target>
            <div className=" px-5">
              <div className="mt-2 w-11 h-11 rounded-full mx-auto bg-slate-300 items-center flex justify-center">
                <h1>
                  {user?.firstName[0].toUpperCase()}
                  {user?.lastName[0].toUpperCase()}
                </h1>
              </div>
            </div>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Label className="text-sm">User Profile</Menu.Label>
            <Menu.Label>
              <div className="flex p-1">
                <div>
                  <div className="mt-2 w-11 h-11 rounded-full mx-auto bg-slate-200 items-center flex justify-center">
                    <h1>
                      {user?.firstName[0].toUpperCase()}
                      {user?.lastName[0].toUpperCase()}
                    </h1>
                  </div>
                </div>
                <div className="ml-4 pt-1">
                  <h1>
                    {user?.firstName || ""} {user?.lastName || ""}
                  </h1>
                  <h1>{user?.department}</h1>
                  <h1
                    className={
                      user?.role === "ADMIN"
                        ? "text-green-500"
                        : user?.role === "SUPER_ADMIN"
                        ? "text-red-500"
                        : ""
                    }
                  >
                    {user?.role}
                  </h1>
                </div>
              </div>
            </Menu.Label>
            <Menu.Divider />

            <Menu.Item
              color="red"
              icon={<IconLogout size={14} />}
              onClick={() => {
                // แสดง Notification ก่อน log out
                toast.info("Successfully logged out", {
                  position: toast.POSITION.BOTTOM_RIGHT,
                  autoClose: 600,
                  style: {
                    backgroundColor: "#DAFFFB",
                    color: "#04364A",
                    border: "3px solid #64CCC5",
                  },
                  progressStyle: {
                    background: "#64CCC5", // กำหนดสีของ progress bar ที่นี่
                  },
                });

                // ทำการ log out หลังจากแสดง Notification
                setTimeout(() => {
                  logOut();
                }, 1500);
              }}
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
