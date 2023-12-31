import {
  Button,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import { useState,useEffect } from "react";
import axios from "../api/axios";
import useAuth from "../utils/auth/useAuth";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

// type Props = {};

export default function Login() {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const { getAuth } = useAuth();

  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    const savedRememberMe = localStorage.getItem("rememberMe");

    if (savedRememberMe === "true" && savedUsername) {
      setRememberMe(true);
      setUsernameInput(savedUsername);
    }
  }, []);

  const handleClick = async () => {
    try {
      const response = await axios.post(
        "/auth/signin",
        {
          username: usernameInput,
          password: passwordInput,
        },
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        const userData = response.data;
        console.log("Login successsful", userData);

        if (rememberMe) {
          // Save username and "Remember Me" state to local storage
          localStorage.setItem("username", usernameInput);
          localStorage.setItem("rememberMe", "true");
        } else {
          // Clear local storage if "Remember Me" is not checked
          localStorage.removeItem("username");
          localStorage.removeItem("rememberMe");
        }

        await getAuth(true);

        // แสดง Notification สำเร็จ
        toast.success("Login successful", {
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
      } else {
        console.error("Login failed");
        // แสดง Notification ข้อผิดพลาด
        toast.error("Login failed", {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 1000,
          style: {
            backgroundColor: "#FFE4D6",
            color: "#CD1818",
            border: "3px solid #F78CA2",
          },
          progressStyle: {
            background: "#F78CA2", // กำหนดสีของ progress bar ที่นี่
          },
        });
      }
    } catch (error) {
      console.error("Login error", error);
      // แสดง Notification ข้อผิดพลาด
      toast.error("Incorrect username / password combination.", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
        style: {
          backgroundColor: "#FFE4D6",
          color: "#CD1818",
          border: "3px solid #F78CA2",
        },
        progressStyle: {
          background: "#F78CA2", // กำหนดสีของ progress bar ที่นี่
        },
      });
    }
  };

  return (
    <section className="w-screen h-screen flex">
      <div
        className="flex-1 bg-cover bg-center"
        style={{ backgroundImage: 'url("/picture.png")' }}
      ></div>
      <div className="flex-1 bg-white p-20">
        <form className="mt-8">
          <div className="mx-auto max-w-lg">
            <div className="mb-6 font-bold text-3xl text-green-pro">Login</div>
            <div className="py-2">
              <TextInput
                label="Username"
                placeholder="Username"
                description="Please enter your username."
                size="md"
                withAsterisk
                inputWrapperOrder={["label", "error", "input", "description"]}
                onChange={(event) => {
                  const text = event.target.value;
                  setUsernameInput(text);
                }}
                value={usernameInput}
              />
            </div>
            <div className="py-2">
              <div className="relative">
                <PasswordInput
                  placeholder="Password"
                  label="Password"
                  description="Please enter your password."
                  size="md"
                  withAsterisk
                  inputWrapperOrder={["label", "error", "input", "description"]}
                  onChange={(event) => {
                    const text = event.target.value;
                    setPasswordInput(text);
                  }}
                  value={passwordInput}
                />
              </div>
            </div>
            <div className="flex justify-between">
              <label className="block text-gray-500 font-bold my-4">
                <input
                  type="checkbox"
                  className="leading-loose text-pink-600"
                  onChange={(event) => {
                    setRememberMe(event.currentTarget.checked);
                    console.log(event.currentTarget.checked);
                  }}
                  checked={rememberMe}
                />
                <span className="py-2 ml-2 text-sm text-gray-600 leading-snug">
                  Remember Me
                </span>
              </label>
            </div>
            <Button
              size="md"
              type="button"
              className="mt-3 text-lg font-semibold bg-green-pro w-full text-white rounded-lg px-6  shadow-md hover:text-white hover:bg-green-c"
              onClick={handleClick}
              disabled={!usernameInput || !passwordInput}
            >
              Login
            </Button>
      
          </div>
        </form>
      </div>
    </section>
  );
}
