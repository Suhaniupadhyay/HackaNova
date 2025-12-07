import { useState } from "react";
import SplashScreen from "./components/SplashScreen.jsx";
import AuthPage from "./components/AuthPage.jsx";
import HomeView from "./components/HomeView.jsx";
import BoardView from "./components/BoardView.jsx";
import defaultBoard from "./defaultBoard.js";

export default function App() {

  // NEW: splash screen state  
  const [showSplash, setShowSplash] = useState(true);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [screen, setScreen] = useState("auth");
  const [activeMeetingId, setActiveMeetingId] = useState(null);

  const [meetings, setMeetings] = useState([
    {
      id: 1,
      title: "Angel Grove Defense Briefing",
      plannedAt: "2024-12-03",
      board: JSON.parse(JSON.stringify(defaultBoard)),
    },
    {
      id: 2,
      title: "Megazord Systems Check",
      plannedAt: "2024-11-29",
      board: JSON.parse(JSON.stringify(defaultBoard)),
    },
    {
      id: 3,
      title: "Ranger Academy Training Plan",
      plannedAt: "2024-11-23",
      board: JSON.parse(JSON.stringify(defaultBoard)),
    },
  ]);

  // LOGIN SUCCESS
  const handleAuthSuccess = () => {
    setIsLoggedIn(true);
    setScreen("home");
  };

  // OPEN BOARD VIEW
  const handleOpenMeeting = (id) => {
    setActiveMeetingId(id);
    setScreen("board");
  };

  // CREATE NEW MEETING
  const handleCreateMeeting = () => {
    const newMeeting = {
      id: Date.now(),
      title: "New Mission",
      plannedAt: new Date().toISOString().split("T")[0],
      board: JSON.parse(JSON.stringify(defaultBoard)),
    };
    setMeetings([...meetings, newMeeting]);
  };

  // UPDATE BOARD FROM BOARDVIEW
  const handleUpdateBoard = (updatedBoard) => {
    setMeetings((prev) =>
      prev.map((m) =>
        m.id === activeMeetingId ? { ...m, board: updatedBoard } : m
      )
    );
  };

  const handleBackToHome = () => setScreen("home");

  const activeMeeting = meetings.find((m) => m.id === activeMeetingId);

  // 🔥 NEW: Show splash first
  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  // ROUTING BELOW

  if (!isLoggedIn || screen === "auth") {
    return <AuthPage onAuthSuccess={handleAuthSuccess} />;
  }

  if (screen === "home") {
    return (
      <HomeView
        meetings={meetings}
        onOpenMeeting={handleOpenMeeting}
        onCreateMeeting={handleCreateMeeting}
      />
    );
  }

  return (
    <BoardView
      meeting={activeMeeting}
      onUpdateBoard={handleUpdateBoard}
      onBackHome={handleBackToHome}
    />
  );
}
