import React, { useState } from "react";
import bgRangers from "../assets/bg-rangers.jpg";


export default function AuthPage({ onAuthSuccess }) {
  // choice | signin | signup
  const [mode, setMode] = useState("choice");

  const rangerFaces = [
    "/faces/red.png",
    "/faces/blue.png",
    "/faces/yellow.png",
    "/faces/black.png",
    "/faces/pink.png",
  ];


  return (
    <div
      className="min-h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${bgRangers})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
  
      {/* yahi pe tumhara chhota Spectrum Strategy box hai */}
  
    
      <div
        className="w-[420px] rounded-[32px] shadow-2xl overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #0f2741 0%, #09172a 100%)",
          border: "1px solid rgba(255,255,255,0.35)",
          backdropFilter: "blur(14px)",
        }}
      >
        {/* TITLE */}
        <div className="px-10 pt-10 pb-4 text-center">
          <h1
            className="text-2xl md:text-3xl font-semibold tracking-[0.30em]"
            style={{ textShadow: "0 0 10px rgba(0,0,0,0.6)" }}
          >
            SPECTRUM
            <br />
            STRATEGY
          </h1>
        </div>

        {/* ============ CHOICE SCREEN ============ */}
        {mode === "choice" && (
          <>
            <div className="border-t border-white/25" />

            <button
              onClick={() => setMode("signin")}
              className="w-full py-3 text-sm font-semibold tracking-wide
                         bg-white/5 hover:bg.white/15 text-white
                         border-t border-white/20 transition"
            >
              SIGN IN
            </button>

            <div className="border-t border-white/20" />

            <button
              onClick={() => setMode("signup")}
              className="w-full py-3 text-sm font-semibold tracking-wide
                         bg-white/5 hover:bg-white/15 text-white transition"
            >
              SIGN UP
            </button>
          </>
        )}

        {/* ============ SIGN IN FORM ============ */}
        {mode === "signin" && (
          <div className="px-8 pb-8 pt-4">
            <p
              className="text-xs text-white/60 mb-3 cursor-pointer"
              onClick={() => setMode("choice")}
            >
              ← Back
            </p>

            {/* Heading hata diya – sirf fields */}
            <input
              type="text"
              placeholder="Ranger name"
              className="w-full mb-3 px-4 py-3 rounded-lg bg-black/30 border border-white/20 focus:bg-black/40 outline-none text-sm"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-5 px-4 py-3 rounded-lg bg-black/30 border border-white/20 focus:bg-black/40 outline-none text-sm"
            />

            <button
              className="w-full py-3 rounded-xl bg-white text-black font-semibold text-sm tracking-wide hover:bg-gray-200 transition"
              onClick={() => onAuthSuccess && onAuthSuccess()}
            >
              CONTINUE
            </button>
          </div>
        )}

        {/* ============ SIGN UP FORM ============ */}

{/* ============ SIGN UP FORM ============ */}
{mode === "signup" && (
  <div className="px-8 pb-8 pt-4">
    <p
      className="text-xs text-white/60 mb-3 cursor-pointer"
      onClick={() => setMode("choice")}
    >
      ← Back
    </p>

    <h2 className="text-center text-xl font-semibold mb-4">
      Create Ranger ID
    </h2>

    <input
      type="text"
      placeholder="Ranger name"
      className="w-full mb-3 px-4 py-3 rounded-lg bg-black/30 border border-white/20 outline-none text-sm focus:bg-black/40"
    />

    <p className="mb-2 text-xs text-white/70">Choose Ranger avatar</p>
    <div className="flex gap-3 mb-4 justify-center">
      {rangerFaces.map((f) => (
        <img
          key={f}
          src={f}
          className="w-10 h-10 rounded-full border-2 border-white/40 hover:border-blue-400 transition cursor-pointer"
        />
      ))}
    </div>

    <input
      type="email"
      placeholder="Email"
      className="w-full mb-3 px-4 py-3 rounded-lg bg-black/30 border border-white/20 outline-none text-sm focus:bg-black/40"
    />
    <input
      type="password"
      placeholder="Password"
      className="w-full mb-5 px-4 py-3 rounded-lg bg-black/30 border border-white/20 outline-none text-sm focus:bg-black/40"
    />

    <button
      className="w-full py-3 rounded-xl bg-white text-black font-semibold text-sm tracking-wide hover:bg-gray-200 transition"
      onClick={() => setMode("otp")}
    >
      GET OTP
    </button>
  </div>
)}


      </div>
    </div>
  );
}










