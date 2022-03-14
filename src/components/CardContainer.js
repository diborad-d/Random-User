import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import UserCard from "./UserCard";
import { Grid } from "react-bootstrap";

function CardContainer() {
  const { users } = useContext(UserContext);
  return (
    <div className="container container-fluid">
      {users.map((user) => (
        <UserCard key={user.id} user={user.img} />
      ))}
    </div>
  );
}

export default CardContainer;
