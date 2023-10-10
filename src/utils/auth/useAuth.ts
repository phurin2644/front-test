import axios from "../../api/axios";

import useAuthStore from "./store";
import { useNavigate } from "react-router-dom";

function useAuth() {
  const navigate = useNavigate();
  const [user, setUser, state, setState] = useAuthStore((state) => [
    state.user,
    state.setUser,
    state.state,
    state.setState,
  ]);

  const getAuth = async (delay: boolean) => {
    setState("loading");
    try {
      const res = await axios.get("/auth/me", { withCredentials: true });
      setUser(res.data);
      setTimeout(
        () => {
          setState("signedIn");
        },
        delay ? 1500 : 0
      );
    } catch (err) {
      console.log(err);
      setState("loggedOut");
    }
  };

  async function logOut() {
    axios
      .get("/auth/logout", { withCredentials: true })
      .then(() => {
        setUser(null);
        setState("loggedOut");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // console.log({ user, state });

  return { user, state, logOut, getAuth };
}

export default useAuth;
