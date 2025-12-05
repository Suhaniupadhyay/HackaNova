import React, { useState } from "react";

const avatars = [
  { id: "red", label: "Red Ranger", src: "/avatars/ranger-red.png" },
  { id: "blue", label: "Blue Ranger", src: "/avatars/ranger-blue.png" },
  { id: "yellow", label: "Yellow Ranger", src: "/avatars/ranger-yellow.png" },
  { id: "pink", label: "Pink Ranger", src: "/avatars/ranger-pink.png" },
  { id: "black", label: "Black Ranger", src: "/avatars/ranger-black.png" },
];

// NOTE: Agar ye images abhi nahi hain, to bhi code chalega,
// sirf image broken icon dikhega. Baad me tum un paths pe photos rakh sakti ho.

function AuthPage({ onSignup, onSignin }) {
  const [mode, setMode] = useState("signup"); // "signup" | "signin"

  // Sign Up state
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState(avatars[0].id);

  // Sign In state
  const [signinName, setSigninName] = useState("");
  const [signinPassword, setSigninPassword] = useState("");

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (!signupName || !signupEmail || !signupPassword) {
      alert("Please fill all fields in Sign Up.");
      return;
    }
    onSignup({
      name: signupName,
      email: signupEmail,
      password: signupPassword,
      avatar: selectedAvatar,
    });
  };

  const handleSigninSubmit = (e) => {
    e.preventDefault();
    onSignin({
      name: signinName,
      password: signinPassword,
    });
  };

  return (
    <div className="w-full max-w-xl bg-black border border-white/10 rounded-ranger p-6 shadow-[0_0_40px_rgba(0,0,0,0.9)]">
      {/* Title */}
      <div className="mb-6 text-center">
        <div className="ranger-title mb-2">Ranger Ops Planner</div>
        <div className="ranger-subtitle">Command Center Access</div>
      </div>

      {/* Tabs */}
      <div className="flex mb-6 border-b border-white/15">
        <button
          className={`flex-1 py-2 text-sm uppercase tracking-widest ${
            mode === "signup"
              ? "border-b-2 border-white font-semibold"
              : "text-gray-400"
          }`}
          onClick={() => setMode("signup")}
          type="button"
        >
          Sign Up
        </button>
        <button
          className={`flex-1 py-2 text-sm uppercase tracking-widest ${
            mode === "signin"
              ? "border-b-2 border-white font-semibold"
              : "text-gray-400"
          }`}
          onClick={() => setMode("signin")}
          type="button"
        >
          Sign In
        </button>
      </div>

      {/* SIGN UP FORM */}
      {mode === "signup" && (
        <form onSubmit={handleSignupSubmit} className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-wide mb-1">
              Ranger Name
            </label>
            <input
              type="text"
              className="w-full p-2 rounded bg-black border border-white/20 text-sm outline-none"
              placeholder="e.g. Red Ranger"
              value={signupName}
              onChange={(e) => setSignupName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wide mb-1">
              Choose Your Ranger
            </label>
            <div className="flex gap-3 flex-wrap">
              {avatars.map((a) => (
                <button
                  key={a.id}
                  type="button"
                  onClick={() => setSelectedAvatar(a.id)}
                  className={`w-12 h-12 rounded-full overflow-hidden border-2 flex items-center justify-center ${
                    selectedAvatar === a.id
                      ? "border-white shadow-[0_0_15px_rgba(255,255,255,0.7)]"
                      : "border-white/30"
                  }`}
                  title={a.label}
                >
                  <img
                    src={a.src}
                    alt={a.label}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Agar image na mile to coloured circle dikha do
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  {false && a.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wide mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full p-2 rounded bg-black border border-white/20 text-sm outline-none"
              placeholder="you@example.com"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wide mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full p-2 rounded bg-black border border-white/20 text-sm outline-none"
              placeholder="Create a strong password"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 bg-white text-black font-semibold py-2 rounded-ranger text-sm uppercase tracking-widest hover:bg-gray-200 transition"
          >
            Continue to OTP
          </button>
        </form>
      )}

      {/* SIGN IN FORM */}
      {mode === "signin" && (
        <form onSubmit={handleSigninSubmit} className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-wide mb-1">
              Ranger Name
            </label>
            <input
              type="text"
              className="w-full p-2 rounded bg-black border border-white/20 text-sm outline-none"
              placeholder="Registered Ranger name"
              value={signinName}
              onChange={(e) => setSigninName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wide mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full p-2 rounded bg-black border border-white/20 text-sm outline-none"
              placeholder="Your password"
              value={signinPassword}
              onChange={(e) => setSigninPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 bg-white text-black font-semibold py-2 rounded-ranger text-sm uppercase tracking-widest hover:bg-gray-200 transition"
          >
            Enter Command Center
          </button>
        </form>
      )}
    </div>
  );
}

export default AuthPage;




