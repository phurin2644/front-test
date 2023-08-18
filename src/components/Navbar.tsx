
function Navbar() {
    return (
        <div className="navbar ">
            <div className="flex justify-between gradient w-full">
                <div className="flex px-10 mx-6">
                    <img src="src\img\icon.png " alt="" className="h-8 mt-4 mr-2" />
                    <h1 className="font-bold text-xl pt-4">Fast track</h1>
                </div>
                <div className="flex text-base space-x-4 h-full mx-10">
                    <h1 className="bg-transparent h-full pt-5 px-2 hover:bg-gradient-to-b from-green-pro to-green-c">Dashboard</h1>
                    <h1 className="bg-transparent h-full pt-5 px-2 hover:bg-gradient-to-b from-green-pro to-green-c">
                        Users
                    </h1>
                    <div className=" px-5">
                        <img src="src\img\profile.png" alt="" className="mt-2 w-11 h-11 rounded-full mx-auto object-cover" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Navbar