import React from "react";
import bgRangers from "../assets/bg-rangers.jpg";  

// Helper for "n days ago"
function daysAgoLabel(dateString) {
  const diff = Date.now() - new Date(dateString).getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (Number.isNaN(days) || days < 0) return "";
  if (days === 0) return "Today";
  if (days === 1) return "1 day ago";
  return days + " days ago";
}

function HomeView({ meetings, onOpenMeeting, onCreateMeeting }) {

  // When user clicks "+ New Mission"
  const handleCreateMission = () => {
    const name = prompt("Enter New Mission Name:");
    if (!name) return;

    onCreateMeeting(name);
  };

  return (
    <div
      className="min-h-screen text-white relative"
      style={{
        backgroundImage: `url(${bgRangers})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* TITLE */}
      <h1
        className="text-4xl md:text-5xl font-bold tracking-[0.20em] text-center pt-0"
        style={{
          color: "#4da6ff",
          textShadow: "0 0 12px rgba(0, 136, 255, 0.7)",
        }}
      >
        RANGER OPS PLANNER
      </h1>

      {/* Spacer for rangers */}
      <div className="h-[400px] w-full"></div>

      {/* PREVIOUS MISSIONS */}
      <div className="w-full flex flex-col items-center pb-16">

        <h2
          className="text-3xl font-semibold tracking-[0.18em] mb-10 text-center"
          style={{ textShadow: "0 0 10px rgba(243, 183, 183, 0.7)" }}
        >
          PREVIOUS MISSIONS
        </h2>

        {/* New mission button */}
        <button
          onClick={handleCreateMission}
          className="mb-8 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold"
        >
          + New Mission
        </button>
        {/* MISSION CARDS */}
<div className="w-full flex flex-wrap justify-center gap-20 px-10">

  {meetings.map((meeting) => (
    <button
      key={meeting.id}
      onClick={() => onOpenMeeting(meeting.id)}
      className="
        w-[320px]
        h-auto
        relative
        overflow-hidden
        rounded-[35px]
        px-7
        py-7
        mb-10
        text-white
        transition-all
        duration-300
        shadow-[0_0_35px_rgba(0,200,255,0.55)]
        hover:shadow-[0_0_65px_rgba(0,220,255,1)]
        hover:-translate-y-4
        hover:scale-[1.07]
        backdrop-blur-xl
        group
      "
      style={{
        background:
          "linear-gradient(135deg, rgba(146, 190, 248, 0.95) 0%, rgba(99, 151, 240, 0.95) 100%)",
        border: "3px solid rgba(0,200,255,0.5)",
      }}
    >

      {/* Animated Shine */}
      <span
        className="
          absolute inset-0 
          bg-gradient-to-r 
          from-transparent 
          via-white/20 
          to-transparent 
          opacity-0 
          group-hover:opacity-100 
          translate-x-[-100%] 
          group-hover:translate-x-[200%] 
          transition-all 
          duration-700
        "
        style={{ filter: "blur(6px)" }}
      ></span>

      {/* Neon Pulse Ring */}
      <span
        className="
          absolute inset-0 
          rounded-[35px] 
          border-2 border-cyan-300 
          opacity-40 
          group-hover:animate-pulse 
        "
      ></span>

      {/* TEXT */}
      <div className="relative z-10">
        <div className="text-xl font-bold tracking-wide">
          {meeting.title}
        </div>

        <div className="text-sm mt-2 opacity-90 text-blue-200">
          {daysAgoLabel(meeting.plannedAt)}
        </div>
      </div>

    </button>
  ))}

</div>
      </div>
    </div>
  );
}

export default HomeView;




















