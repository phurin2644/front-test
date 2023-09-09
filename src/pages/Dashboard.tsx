
function Dashboard() {
  return (
    <>
      <div className='bg-slate-50 p-7 '>
        <div className=" flex justify-center mx-10">
          <div className=" h-670 w-screen mr-10" >
            <div className="bg-white shadow-md h-320 rounded-lg ">
              <div className="bg-green-bar  flex p-4 justify-between font-medium rounded-t-lg text-white">
                <h1 className="pl-7">Admit</h1>
              </div>
            </div>
            <div className="bg-white shadow-md h-320 rounded-lg mt-8">
              <div className="bg-green-bar  flex p-4 justify-between font-medium rounded-t-lg text-white">
                <h1 className="pl-7">Method</h1>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg h-670 w-screen ml-10" >
            <div className="bg-green-bar  flex p-4 justify-between font-medium rounded-t-lg text-white">
              <h1 className="pl-7">Activity</h1>
            </div>
          </div>
        </div>
        <div className="flex justify-center ">
          <div className="bg-white shadow-md rounded-lg h-450 w-screen mx-10 mt-10">
            <div className="bg-green-bar  flex p-4 justify-between font-medium rounded-t-lg text-white">
              <h1  className="pl-7">Activity</h1>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Dashboard
