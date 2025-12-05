import { useState } from "react";
import AuthPage from "./components/AuthPage.jsx";
import HomeView from "./components/HomeView.jsx";
import BoardView from "./components/BoardView.jsx"; // tumhara purana board (lists + cards)

// App component
export default function App() {
  // login hua ya nahi
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // kaunsa screen dikhana hai: "auth" | "home" | "board"
  const [screen, setScreen] = useState("auth");

  // konsa meeting open hua hai (future me useful hoga)
  const [activeMeetingId, setActiveMeetingId] = useState(null);

  // ---- Home page ke missions (titles + dates) ----
  const meetings = [
    {
      id: 1,
      title: "Angel Grove Defense Briefing",
      plannedAt: "2024-12-03",
    },
    {
      id: 2,
      title: "Megazord Systems Check",
      plannedAt: "2024-11-29",
    },
    {
      id: 3,
      title: "Ranger Academy Training Plan",
      plannedAt: "2024-11-23",
    },
  ];

  // Auth (sign in / otp) complete hone par
  const handleAuthSuccess = () => {
    setIsLoggedIn(true);
    setScreen("home"); // login ke turant baad home
  };

  // HomeView ke card pe click
  const handleOpenMeeting = (meetingId) => {
    console.log("Opening meeting:", meetingId);
    setActiveMeetingId(meetingId);
    setScreen("board"); // ab board dikhao
  };

  // Board se back aana ho to
  const handleBackToHome = () => {
    setScreen("home");
  };

  // ----------------- RENDER LOGIC -----------------

  // 1) agar login nahi hua, ya humne screen "auth" rakha hai
  if (!isLoggedIn || screen === "auth") {
    return <AuthPage onAuthSuccess={handleAuthSuccess} />;
  }

  // 2) login ho chuka hai aur home chahiye
  if (screen === "home") {
    return (
      <HomeView
        meetings={meetings}
        onOpenMeeting={handleOpenMeeting}
      />
    );
  }

  // 3) board screen: yahan tumhara purana BoardView chalega
  // props doge to bhi koi problem nahi, agar BoardView unhe ignore kar raha ho.
  return <BoardView activeMeetingId={activeMeetingId} onBack={handleBackToHome} />;
}











