import React, { useState } from "react";
import RangerSignup from "./components/RangerSignup";
import SplashScreen from "./components/SplashScreen";
import HomeView from "./components/HomeView";





export default function App() {
  const [showSplash, setShowSplash] = useState(true); // sabse pehle splash
  const [page, setPage] = useState("choice"); // "choice" | "signin" | "signup" | "home"

  // 1) Splash screen sabse pehle
  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  // Common background for sabhi auth / home screens
  const bgStyle = {
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: "url('/bg-rangers.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={bgStyle}>
      {/* ===============  MAIN CHOICE SCREEN (Spectrum Strategy)  ================= */}
      {page === "choice" && (
        <div
          style={{
            width: "360px",
            borderRadius: "34px",
            padding: "28px 24px 30px",
            background:
              "linear-gradient(180deg, #10345a 0%, #061628 45%, #05101f 100%)",
            boxShadow: "0 22px 50px rgba(0, 0, 0, 0.95)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "18px",
          }}
        >
          {/* SPECTRUM STRATEGY TITLE */}
          <div
            style={{
              width: "100%",
              paddingBottom: "14px",
              borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "24px",
                letterSpacing: "0.35em",
                color: "#ffffff",
                textShadow: "0 0 18px rgba(0, 0, 0, 0.9)",
                lineHeight: 1.4,
              }}
            >
              <div>SPECTRUM</div>
              <div>STRATEGY</div>
            </div>
          </div>

          {/* SIGN IN BUTTON */}
          <button
            type="button"
            onClick={() => setPage("signin")}
            style={{
              width: "320px",
              height: "60px",
              borderRadius: "999px",
              marginTop: "6px",
              border: "3px solid #7ff4ff",
              background:
                "linear-gradient(180deg, #00223f 0%, #00152b 60%, #001020 100%)",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: "16px",
              letterSpacing: "0.18em",
              boxShadow: "0 0 22px rgba(127, 244, 255, 0.7)",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            SIGN IN
          </button>

          {/* SIGN UP BUTTON */}
          <button
            type="button"
            onClick={() => setPage("signup")}
            style={{
              width: "320px",
              height: "60px",
              borderRadius: "999px",
              marginTop: "6px",
              border: "3px solid #7fe5ff",
              background:
                "linear-gradient(180deg, #7fe5ff 0%, #5fd5ff 40%, #33bfff 100%)",
              color: "#002033",
              fontWeight: 700,
              fontSize: "16px",
              letterSpacing: "0.18em",
              boxShadow: "0 16px 40px rgba(0, 0, 0, 0.8)",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            SIGN UP
          </button>
        </div>
      )}

      {/* ===============  RANGER LOGIN SCREEN (SIGN IN)  ================= */}
      {page === "signin" && (
        <div
          style={{
            width: "420px",
            borderRadius: "32px",
            padding: "26px 28px 22px",
            background:
              "linear-gradient(180deg, #0f304f 0%, #071628 40%, #040f1e 100%)",
            boxShadow: "0 22px 50px rgba(0, 0, 0, 0.95)",
            border: "1px solid rgba(255, 255, 255, 0.28)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "white",
          }}
        >

{page === "signup" && (
  <RangerSignup
    onBack={() => setPage("signin")}
    onSignupSuccess={() => setPage("signin")}
  />
)}


          {/* Back link */}
          <button
            onClick={() => setPage("choice")}
            style={{
              alignSelf: "flex-start",
              marginBottom: "4px",
              background: "transparent",
              border: "none",
              color: "rgba(255,255,255,0.65)",
              fontSize: "12px",
              cursor: "pointer",
            }}
          >
            ← Back
          </button>

          {/* Heading */}
          <div
            style={{
              fontSize: "22px",
              letterSpacing: "0.32em",
              textAlign: "center",
              marginBottom: "18px",
              textTransform: "uppercase",
              textShadow: "0 0 16px rgba(0,0,0,0.9)",
            }}
          >
            RANGER LOGIN
          </div>

          {/* Form container */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // yahan normal validation / backend call hoga
              setPage("home"); // abhi ke liye directly HomeView pe
            }}
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px",
            }}
          >
            {/* Ranger Name */}
            <input
              type="text"
              placeholder="Ranger Name"
              style={{
                width: "100%",
                height: "44px",
                borderRadius: "4px",
                border: "1px solid rgba(255,255,255,0.8)",
                padding: "0 10px",
                backgroundColor: "rgba(4, 26, 46, 0.9)",
                color: "#ffffff",
                outline: "none",
              }}
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Password"
              style={{
                width: "100%",
                height: "44px",
                borderRadius: "4px",
                border: "1px solid rgba(255,255,255,0.8)",
                padding: "0 10px",
                backgroundColor: "rgba(4, 26, 46, 0.9)",
                color: "#ffffff",
                outline: "none",
              }}
            />

            {/* SIGN IN button */}
            <button
              type="submit"
              style={{
                marginTop: "10px",
                width: "180px",
                height: "42px",
                borderRadius: "999px",
                border: "none",
                background:
                  "linear-gradient(180deg, #63d7ff 0%, #3ec4ff 80%, #2bb3ff 100%)",
                color: "#002033",
                fontWeight: 700,
                fontSize: "14px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                boxShadow: "0 14px 32px rgba(0,0,0,0.85)",
                cursor: "pointer",
              }}
            >
              SIGN IN
            </button>
          </form>

          {/* Bottom links row */}
          <div
            style={{
              marginTop: "14px",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              fontSize: "11px",
              color: "rgba(255,255,255,0.75)",
            }}
          >
            <button
              style={{
                background: "transparent",
                border: "none",
                color: "inherit",
                cursor: "pointer",
              }}
            >
              Forgot Password?
            </button>
            <span>
              Don&apos;t have account?{" "}
              <button
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#7fe5ff",
                  cursor: "pointer",
                }}
                onClick={() => setPage("signup")}
              >
                Sign Up
              </button>
            </span>
          </div>
        </div>
      )}

      {/* ===============  SIGN UP SCREEN (simple placeholder)  ================= */}
   
  {/* ===============  SIGN UP SCREEN (RANGER SIGN UP)  ================= */}
{page === "signup" && (
  <div
    style={{
      width: "520px",
      borderRadius: "28px",
      padding: "26px 34px 20px",
      background:
        "radial-gradient(circle at top, #1b2436 0%, #05070f 60%, #02040a 100%)",
      boxShadow: "0 0 30px rgba(255, 60, 60, 0.85)",
      border: "2px solid rgba(255, 70, 70, 0.9)",
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      color: "white",
      position: "relative",
    }}
  >
    {/* Back button */}
    <button
      onClick={() => setPage("signin")}
      style={{
        position: "absolute",
        top: "10px",
        left: "14px",
        background: "transparent",
        border: "none",
        color: "rgba(255,255,255,0.7)",
        fontSize: "12px",
        cursor: "pointer",
      }}
    >
      ← Back
    </button>

    {/* Heading */}
    <div
      style={{
        textAlign: "center",
        fontSize: "24px",
        letterSpacing: "0.32em",
        marginBottom: "22px",
        marginTop: "6px",
        textTransform: "uppercase",
        textShadow: "0 0 20px rgba(0,0,0,0.9)",
      }}
    >
      RANGER SIGN UP
    </div>

    {/* FORM */}
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // SIGN-UP ke baad direct HOME PAGE jao
        setPage("home");
      }}
    >
      {/* Ranger Name */}
      <div style={{ marginBottom: "12px" }}>
        <label
          style={{
            display: "block",
            fontSize: "14px",
            marginBottom: "4px",
          }}
        >
          Ranger Name
        </label>
        <input
          type="text"
          placeholder="Choose your Ranger designation"
          style={{
            width: "100%",
            height: "44px",
            borderRadius: "6px",
            border: "1px solid #3fb4ff",
            padding: "0 12px",
            backgroundColor: "rgba(5, 16, 32, 0.96)",
            color: "#ffffff",
            outline: "none",
            fontSize: "13px",
          }}
        />
      </div>

      {/* Email */}
      <div style={{ marginBottom: "12px" }}>
        <label
          style={{
            display: "block",
            fontSize: "14px",
            marginBottom: "4px",
          }}
        >
          Email
        </label>
          <input
            type="email"
            placeholder="Your Zordon Communication Channel"
            style={{
              width: "100%",
              height: "44px",
              borderRadius: "6px",
              border: "1px solid #3fb4ff",
              padding: "0 12px",
              backgroundColor: "rgba(5, 16, 32, 0.96)",
              color: "#ffffff",
              outline: "none",
              fontSize: "13px",
            }}
          />
      </div>

      {/* Password */}
      <div style={{ marginBottom: "18px" }}>
        <label
          style={{
            display: "block",
            fontSize: "14px",
            marginBottom: "4px",
          }}
        >
          Password
        </label>
        <input
          type="password"
          placeholder="Morphin' Security Code"
          style={{
            width: "100%",
            height: "44px",
            borderRadius: "6px",
            border: "1px solid #3fb4ff",
            padding: "0 12px",
            backgroundColor: "rgba(5, 16, 32, 0.96)",
            color: "#ffffff",
            outline: "none",
            fontSize: "13px",
          }}
        />
      </div>

      {/* SIGN UP BUTTON */}
      <div style={{ textAlign: "center", marginBottom: "8px" }}>
        <button
          type="submit"
          style={{
            width: "210px",
            height: "46px",
            borderRadius: "999px",
            border: "none",
            background:
              "linear-gradient(180deg, #ff4b4b 0%, #ff2f2f 60%, #e02121 100%)",
            color: "#ffffff",
            fontWeight: 700,
            fontSize: "14px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            boxShadow: "0 18px 40px rgba(0,0,0,0.9)",
            cursor: "pointer",
          }}
        >
          SIGN UP
        </button>
      </div>
    </form>

    {/* Bottom links */}
    <div
      style={{
        marginTop: "6px",
        fontSize: "11px",
        color: "rgba(255,255,255,0.8)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span>
        Already have an account?{" "}
        <button
          onClick={() => setPage("signin")}
          style={{
            background: "transparent",
            border: "none",
            color: "#53c8ff",
            cursor: "pointer",
            padding: 0,
          }}
        >
          Sign In
        </button>
      </span>

      <button
        style={{
          background: "transparent",
          border: "none",
          color: "#53c8ff",
          cursor: "pointer",
          padding: 0,
        }}
      >
        Forgot Password?
      </button>
    </div>
  </div>
)}


      {/* ===============  HOME VIEW (after successful sign in)  ================= */}
{/* ================= HOME PAGE (RANGER OPS PLANNER) ================= */}
{page === "home" && (
  <HomeView />
)}


    </div>
  );
}








