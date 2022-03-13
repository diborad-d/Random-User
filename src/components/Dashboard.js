import Navbar from "./Navbar";
import UserCard from "./UserCard";
function Dashboard() {
  return (
    <>
      <div className=" container container-fluid">
        <Navbar />
        {/* make an api req: display 100 user cards */}
        <UserCard />
      </div>
    </>
  );
}

export default Dashboard;
