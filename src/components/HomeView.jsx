import React from "react";

// Helper – "x days ago"
function daysAgoLabel(dateString) {
  if (!dateString) return "";
  const diff = Date.now() - new Date(dateString).getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (Number.isNaN(days) || days < 0) return "";
  if (days === 0) return "Today";
  if (days === 1) return "1 day ago";
  return `${days} days ago`;
}

// Agar App se meetings na aayen to demo data
const FALLBACK_MEETINGS = [
  { id: "m1", title: "Angel Grove Defense Briefing", plannedAt: "2025-12-08" },
  { id: "m2", title: "Megazord Systems Check", plannedAt: "2025-12-04" },
  { id: "m3", title: "Ranger Academy Training Plan", plannedAt: "2025-11-25" },
];

export default function HomeView({ meetings, onOpenMeeting, onCreateMeeting }) {
  const list = meetings && meetings.length ? meetings : FALLBACK_MEETINGS;

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage: "url('/bg-rangers.jpg')", // public folder wali image
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        color: "#ffffff",
      }}
    >
      {/* DARK OVERLAY taaki text clearly dikhe */}
      <div
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.9) 100%)",
        }}
      >
        {/* ================= TOP NAVBAR ================= */}
        <header
          style={{
            height: "72px",
            padding: "0 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background:
              "linear-gradient(to right, rgba(0,0,0,0.95), rgba(2,12,29,0.95))",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* Left – Logo + Title */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {/* Circular neon logo */}
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "999px",
                background:
                  "radial-gradient(circle at 30% 20%, #4df4ff 0%, #008cff 35%, #00142b 100%)",
                boxShadow: "0 0 18px rgba(79, 244, 255, 0.9)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                fontSize: "18px",
              }}
            >
              S
            </div>

            <div
              style={{
                fontSize: "22px",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#5bf4ff",
                textShadow:
                  "0 0 10px rgba(91,244,255,0.9), 0 0 24px rgba(0,175,255,0.9)",
                fontWeight: 700,
              }}
            >
              Spectrum Strategy
            </div>
          </div>

          {/* Right – search, create, join, profile */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            {/* Search icon */}
            <button
              type="button"
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.4)",
                background: "rgba(6,20,40,0.9)",
                color: "white",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              🔍
            </button>

            {/* Create Arena */}
            <button
              type="button"
              onClick={() => onCreateMeeting && onCreateMeeting()}
              style={{
                padding: "8px 22px",
                borderRadius: "999px",
                border: "1px solid #41e0ff",
                background:
                  "linear-gradient(135deg, rgba(0,167,255,0.1), rgba(0,255,255,0.02))",
                color: "#e8fbff",
                fontSize: "13px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                cursor: "pointer",
                boxShadow: "0 0 16px rgba(0, 232, 255, 0.6)",
              }}
            >
              Create Arena
            </button>

            {/* Join Arena */}
            <button
              type="button"
              style={{
                padding: "8px 18px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.4)",
                background: "transparent",
                color: "#ffffff",
                fontSize: "13px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              Join Arena
            </button>

            {/* Profile circle */}
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "999px",
                border: "2px solid rgba(255,255,255,0.7)",
                background:
                  "radial-gradient(circle at 30% 20%, #ffffff 0%, #8fd3ff 45%, #004b75 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                fontWeight: 700,
                color: "#021017",
              }}
            >
              R
            </div>
          </div>
        </header>

        {/* ================ MAIN CONTENT ================= */}
        <main
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "110px 32px 48px",
          }}
        >
          {/* Heading */}
          <h2
            style={{
              fontSize: "28px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              marginBottom: "26px",
              textShadow:
                "0 0 16px rgba(0,0,0,0.9), 0 0 28px rgba(0,0,0,0.9)",
            }}
          >
            Previous Missions
          </h2>

          {/* Missions row */}
          <div
            style={{
              display: "flex",
              gap: "24px",
              flexWrap: "nowrap",
            }}
          >
            {list.map((meeting) => (
              <button
                key={meeting.id}
                type="button"
                onClick={() => onOpenMeeting && onOpenMeeting(meeting.id)}
                style={{
                  flex: "1 1 0",
                  minWidth: "0",
                  padding: "18px 20px",
                  borderRadius: "18px",
                  border: "1px solid rgba(0, 252, 255, 0.9)",
                  background:
                    "radial-gradient(circle at top, rgba(0,120,255,0.22) 0%, rgba(0,40,120,0.96) 40%, rgba(0,18,60,0.98) 100%)",
                  boxShadow:
                    "0 0 18px rgba(0, 252, 255, 0.7), 0 18px 40px rgba(0,0,0,0.9)",
                  cursor: "pointer",
                  textAlign: "left",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* inner subtle gradient overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "radial-gradient(circle at 10% 0%, rgba(0,255,255,0.35), transparent 55%)",
                    opacity: 0.55,
                    pointerEvents: "none",
                  }}
                />
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div
                    style={{
                      fontSize: "15px",
                      fontWeight: 600,
                      marginBottom: "6px",
                    }}
                  >
                    {meeting.title}
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      opacity: 0.9,
                    }}
                  >
                    {daysAgoLabel(meeting.plannedAt)}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}






















