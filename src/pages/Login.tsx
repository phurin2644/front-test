import { Divider, PasswordInput, TextInput } from '@mantine/core';


type Props = {};

export default function Login({ }: Props) {


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
                            <TextInput label="Your email"
                                placeholder="Your email"
                                description="Please enter your email"
                                size='md'
                                withAsterisk
                                inputWrapperOrder={['label', 'error', 'input', 'description']} />
                        </div>
                        <div className="py-2">
                            <div className="relative">
                                <PasswordInput
                                    placeholder="Password"
                                    label="Password"
                                    description="It must be a combination of minimum 8 letters, numbers, and symbols."
                                    size="md"
                                    withAsterisk
                                    inputWrapperOrder={['label', 'error', 'input', 'description']}
                                />
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <label className="block text-gray-500 font-bold my-4">
                                <input type="checkbox" className="leading-loose text-pink-600" />
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
                        <button
                            type="button"
                            className="mt-3 text-lg font-semibold bg-green-pro w-full text-white rounded-lg px-6 py-3 block shadow-md hover:text-white hover:bg-green-c"
                        >
                            Login
                        </button>
                        <Divider my="sm" className='mt-10 mb-7'/>
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