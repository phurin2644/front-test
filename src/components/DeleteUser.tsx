import { Button } from "@mantine/core";
import axios from "axios";
import { AlertOctagon, CircleLetterX, Trash } from "tabler-icons-react";

function DeleteUser(props: {close: () => void, id: string}){
    const {close,id} = props;

    console.log('ID:', id); // Add this line to check the value of 'id'
    const  handleDelete = async () => {
      await axios
        .delete('/api/users',{
          data: {id:id}
        })
        .then(() => {
          window.location.reload();
          close();
        })
        .catch((error) => {
          console.error('Error deleting user:', error);
          // Handle error as needed
        });
    };
    return (
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-2">
            <div className="flex items-center justify-center">
              <AlertOctagon size={115} strokeWidth={2} color="#D80032" />
            </div>
            <div className="flex flex-col">
              <h1 className="pt-8 mb-3 text-2xl font-extrabold">Are you sure?</h1>
              <h2 className="mb-12 text-sm font-semibold text-slate-400">
                This user will be deleted.
              </h2>
            </div>
          </div>
          <div className="flex space-x-8">
            <Button
              className="bg-red-600 rounded-lg px-4 text-base text-white hover:bg-red-200 w-40 hover:text-red-600 "
              onClick={handleDelete}
            >
              <Trash size={22} strokeWidth={2} className="mr-1" />
              Delete
            </Button>
            <Button
              className="bg-slate-500 rounded-lg px-4 text-base text-white hover:bg-slate-300 w-40 hover:text-slate-500"
              onClick={close}
            >
              <CircleLetterX size={22} strokeWidth={2} className="mr-1" />
              Cancel
            </Button>
          </div>
        </div>
      );
      }
    
    export default DeleteUser;