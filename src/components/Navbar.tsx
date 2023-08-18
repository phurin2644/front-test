
function Navbar() {
    return (
        <div className="navbar ">
            <div className="flex justify-between gradient w-full">
                <div className="flex px-10 ">
                    <img src="src\img\icon.png " alt="" className="h-8 mt-4 mr-2" />
                    <h1 className="font-bold text-xl pt-4">Fast track</h1>
                </div>
                <div className="flex text-base space-x-4 h-full">
                    <h1 className=" bg-red-300 h-full pt-5 px-2 ">Dashboard</h1>
                    <h1 className="bg-blue-300 h-full pt-5 px-2 hover:bg-gradient-to-b from-blue-300 to-slate-300">
                        Users
                    </h1>
                    <div className=" px-10">
                        <img src="src\img\profile.png" alt="" className="mt-2 w-12 h-12 rounded-full mx-auto object-cover" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Navbar