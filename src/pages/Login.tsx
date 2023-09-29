import { Button, Divider, PasswordInput, TextInput } from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// type Props = {};

export default function Login(props: { login: () => void }) {
  const { login } = props;
  const navigate = useNavigate();
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [check, setCheck] = useState(false);

  const handleClick = async () => {
    try {
      const response = await axios.post('http://localhost:5000/auth/signin',{
        username: emailInput,
        password: passwordInput,
      });

      if(response.status === 200){
        const userData = response.data;
        console.log('Login succesful',userData);
        login();
        navigate("/card");
      }else{
        console.error("Login failed");
      }

    } catch (error) {
      console.error('Login error',error)
      
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
                label="Your email"
                placeholder="Your email"
                description="Please enter your email"
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
                  description="It must be a combination of minimum 8 letters, numbers, and symbols."
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
                    setCheck(event.currentTarget.checked);
                    console.log(event.currentTarget.checked);
                  }}
                />
                <span className="py-2 ml-2 text-sm text-gray-600 leading-snug">
                  Remember Me
                </span>
              </label>
              <label className="block text-gray-500  my-4">
                <a
                  href="#"
                  className="cursor-pointer tracking-tighter text-black border-b-2 border-gray-200 hover:border-gray-400"
                >
                  <span>Forgot Password?</span>
                </a>
              </label>
            </div>
            <Button
              size="md"
              type="button"
              className="mt-3 text-lg font-semibold bg-green-pro w-full text-white rounded-lg px-6  shadow-md hover:text-white hover:bg-green-c"
              onClick={handleClick}
              disabled={!emailInput || !passwordInput }
            >
              Login
            </Button>
            <Divider my="sm" className="mt-10 mb-7" />
            <a
              href="#"
              className="cursor-pointer tracking-tighter text-black border-b-2 border-gray-200 hover:border-gray-400"
            >
              <span>No account yet? Sign Up</span>
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
