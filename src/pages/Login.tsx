import { Button, PasswordInput, TextInput } from "@mantine/core";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import useAuth from "../utils/auth/useAuth";

// type Props = {};

export default function Login() {
  const navigate = useNavigate();
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const { getAuth } = useAuth();

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    const savedRememberMe = localStorage.getItem("rememberMe");

    if (savedRememberMe === "true" && savedEmail) {
      setRememberMe(true);
      setEmailInput(savedEmail);
    }
  }, []);

  const handleClick = async () => {
    try {
      const response = await axios.post(
        "/auth/signin",
        {
          username: emailInput,
          password: passwordInput,
        },
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        const userData = response.data;
        console.log("Login successful", userData);

        if (rememberMe) {
          // Save email and "Remember Me" state to local storage
          localStorage.setItem("email", emailInput);
          localStorage.setItem("rememberMe", "true");
        } else {
          // Clear local storage if "Remember Me" is not checked
          localStorage.removeItem("email");
          localStorage.removeItem("rememberMe");
        }

        await getAuth();
        navigate("/card");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Login error", error);
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
                  setEmailInput(text);
                  console.log(text);
                }}
                value={emailInput}
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
                    console.log(text);
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
              disabled={!emailInput || !passwordInput}
            >
              Login
            </Button>
      
          </div>
        </form>
      </div>
    </section>
  );
}
