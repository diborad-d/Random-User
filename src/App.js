import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import LandingPage from "./components/LandingPage";
import UserProfile from "./components/UserProfile";
import { UserContext } from "./UserContext";

// export const UserContext = React.createContext();
function App() {
  // fetch data
  const [users, setUsers] = useState([
    {
      id: 1,
      img: "img/img1.jpeg",
    },
    {
      id: 2,
      img: "img/img2.jpeg",
    },
    {
      id: 3,
      img: "img/img3.jpeg",
    },
    {
      id: 4,
      img: "img/img4.jpeg",
    },
    {
      id: 5,
      img: "img/img5.jpeg",
    },
    {
      id: 6,
      img: "img/img6.jpeg",
    },
    {
      id: 7,
      img: "img/img7.jpeg",
    },
    {
      id: 8,
      img: "img/img8.jpeg",
    },
  ]);
  return (
    <div className="App">
      {/* <LandingPage title="Hello from Landing Page" /> */}
      <Dashboard title="Hello from Dashboard" />
      <UserContext.Provider value={{ users, setUsers }}>
        <Navbar/>
        <Dashboard />
      </UserContext.Provider>
      ;{/* <LandingPage title="Hello from Landing Page" /> */}
    </div>
  );
}

export default App;
