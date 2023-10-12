import { Userdata } from "../data/Userdata";
import { useEffect, useState } from "react";
import axios from "axios";
import UserInfo from "./UserInfo";


const UserList = (props: { value: string; }) => {

  const [userData, setUserData] = useState<Userdata[]>([]);
  
  
  useEffect (()=>{axios.get("/api/users")
    .then((res)=>{
      setUserData(res.data);
      
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    });
      },[])

  const { value } = props;
  const lower = value.toLowerCase();
  const filterList = userData.filter((user) => {
    return user.firstName.toLowerCase().includes(lower);
  });

 
  
  return (
    <div>
      {filterList.map((user) => (
          <UserInfo
          title={user.title}
          key={user.id}
          id={user.id}
          firstName={user.firstName}
          lastName={user.lastName}
          role={user.role}
          department={user.department}
          createdAt={user.createdAt} 
          username={""} password={""}          />
      ))}
    </div>
  );
};



export default UserList;