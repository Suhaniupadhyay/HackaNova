import React, { useState } from "react";
import SignInPage from "./SignInPage";   // apne actual file नाम के हिसाब se
import SignUpPage from "./SignUpPage";   // same yahan

export default function AuthPage() {
  const [mode, setMode] = useState("choice"); 
  // "choice" = spectrum screen, "signin" = login page, "signup" = signup page

  // 1) SIGN IN स्क्रीन
  if (mode === "signin") {
    return <SignInPage />;
  }

  // 2) SIGN UP स्क्रीन
  if (mode === "signup") {
    return <SignUpPage />;
  }

  // 3) Default: Spectrum Strategy / SIGN IN–SIGN UP choice
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-black"
      style={{
        backgroundImage: "url('/bg-rangers.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="
          w-[90%] max-w-md
          rounded-[32px]
          px-10 pt-8 pb-10
          flex flex-col items-center
          shadow-[0_18px_45px_rgba(0,0,0,0.9)]
          bg-gradient-to-b from-[#07192fdd] to-[#02101fdd]
          border border-white/15
        "
      >
        <h1
          className="
            text-center
            text-3xl
            tracking-[0.38em]
            font-semibold
            text-white
            mb-7
            leading-snug
          "
          style={{ textShadow: "0 0 16px rgba(0,0,0,0.9)" }}
        >
          <span className="block">SPECTRUM</span>
          <span className="block mt-1">STRATEGY</span>
        </h1>

        {/* SIGN IN */}
        <button
          type="button"
          onClick={() => setMode("signin")}
          className="
            w-full
            py-3.5
            mb-4
            rounded-full
            border border-[#63e0ff]
            bg-[#001b33]/90
            text-white
            font-semibold
            tracking-[0.16em]
            text-sm
            shadow-[0_0_20px_rgba(99,224,255,0.55)]
            hover:bg-[#003552]
            hover:shadow-[0_0_28px_rgba(99,224,255,0.95)]
            hover:-translate-y-[1px]
            transition
          "
        >
          SIGN IN
        </button>

        {/* SIGN UP */}
        <button
          type="button"
          onClick={() => setMode("signup")}
          className="
            w-full
            py-3.5
            rounded-full
            bg-[#63d7ff]
            text-[#00131f]
            font-semibold
            tracking-[0.16em]
            text-sm
            shadow-[0_16px_36px_rgba(0,0,0,0.75)]
            hover:bg-[#82e6ff]
            hover:-translate-y-[1px]
            transition
          "
        >
          SIGN UP
        </button>
      </div>
    </div>
  );
}
















