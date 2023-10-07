import { NavLink } from "react-router-dom";
import { Badge, Button, Menu } from "@mantine/core";
import { FC, useEffect } from "react";
import useAuth from "../utils/auth/useAuth";
import { User } from "lucide-react";

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

  console.log(state);
  if (state === "none") {
    return (
      <>
      </>
    );
  } else if (state === "signedIn") {
    return (
      <>
        <Badge variant={"secondary"} className="flex gap-1 items-center">
          <User size={15} />
          <span>{user?.username.toUpperCase() || ""}</span>
        </Badge>
        <Button variant={"secondary"} onClick={() => logOut()}>
          Log Out
        </Button>
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
