
function Navbar() {
    return (
        <div className="navbar ">
            <div className="flex justify-between gradient w-full">
                <div className="flex px-10 mx-6">
                    <img src="/icon.png " alt="" className="h-8 mt-4 mr-2" />
                    <h1 className="font-bold text-xl pt-4">Fast track</h1>
                </div>
                <div className="flex text-base space-x-4 h-full mx-10">
                    <a href="Dashboard.tsx"><h1 className="bg-transparent h-full pt-5 px-2 hover:bg-gradient-to-b from-green-pro to-green-c">Dashboard</h1></a>
                    <h1 className="bg-transparent h-full pt-5 px-2 hover:bg-gradient-to-b from-green-pro to-green-c">
                        Users
                    </h1>
                    <div className=" px-5">
                        <a href="https://www.youtube.com/watch?v=hJeEOzEZstU&list=RDMD_GRqxhASs&index=27">
                        <img src="/profile.png" alt="" className="mt-2 w-11 h-11 rounded-full mx-auto object-cover" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Navbar