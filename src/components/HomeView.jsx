import React from "react";
import bgRangers from "../assets/bg-rangers.jpg";  // 👈 yaha import

// "n days ago" text ke liye helper
function daysAgoLabel(dateString) {
  const diff = Date.now() - new Date(dateString).getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (Number.isNaN(days) || days < 0) return "";
  if (days === 0) return "Today";
  if (days === 1) return "1 day ago";
  return days + " days ago";
}

function HomeView({ meetings, onOpenMeeting }) {
  return (
    <div
      className="min-h-screen text-white relative"
      style={{
        backgroundImage: `url(${bgRangers})`,   // 👈 yaha change
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* TOP TITLE */}
      <h1
        className="text-4xl md:text-5xl font-bold tracking-[0.20em] text-center pt-8"
        style={{
          color: "#4da6ff",
          textShadow: "0 0 12px rgba(0, 136, 255, 0.7)",
        }}
      >
        RANGER OPS PLANNER
      </h1>

      {/* RANGERS KO PLACE DENE KE LIYE SPACER */}
      <div className="h-[360px] w-full" />

      {/* PREVIOUS MISSIONS SECTION */}
      <div className="w-full flex flex-col items-center pb-16">
        {/* Heading – exactly centre mein */}
        <h2
          className="text-3xl font-semibold tracking-[0.18em] mb-10 text-center"
          style={{ textShadow: "0 0 10px rgba(0,0,0,0.7)" }}
        >
          PREVIOUS MISSIONS
        </h2>

        {/* Mission cards row – 3 rectangles jaise screenshot me */}
        <div className="flex justify-center gap-8 flex-wrap max-w-5xl px-4">
          {meetings.map((meeting) => (
            <button
              key={meeting.id}
              onClick={() => onOpenMeeting(meeting.id)}
              className="w-[320px] rounded-2xl py-6 px-6 text-left
                         shadow-[0_12px_28px_rgba(0,0,0,0.75)]
                         hover:-translate-y-2 hover:shadow-[0_18px_36px_rgba(0,0,0,0.9)]
                         transition-all duration-300 backdrop-blur-sm"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,59,152,0.9) 0%, rgba(0,21,61,0.95) 100%)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <div className="text-white text-lg font-bold">
                {meeting.title}
              </div>
              <div className="text-white text-sm mt-1 opacity-90">
                {daysAgoLabel(meeting.plannedAt)}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeView;




















