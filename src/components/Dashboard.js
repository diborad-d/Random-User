import React,{ useContext } from "react";
import { UserContext } from "../UserContext";

function Dashboard() {
  const { users } = useContext(UserContext);
  return (
    <div className="container container-fluid">
      {users.map((user) => (
        <img key={user.id} alt="user" className="card-grid" src={user.img} />
      ))}
    </div>
  );
}

export default Dashboard;
