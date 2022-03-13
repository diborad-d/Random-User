import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import UserProfile from "./UserProfile";
function LandingPage() {
  return (
    <>
      <div className=" container container-fluid">
        <Navbar />
        <Dashboard title="Hello from Dashboard" />
        <UserProfile title="Hello from User Profile" />
      </div>
    </>
  );
}

export default LandingPage;
