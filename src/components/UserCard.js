// import Card from "react-bootstrap/Card";
import { useContext } from "react";
import { UserContext } from "../UserContext";

function UserCard({ user }) {
  // const { user, setUser } = useContext(UserContext);
  // const users = userData.map((user) => user.img);
  return <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
    {user.img}
  </div>;
}

export default UserCard;
