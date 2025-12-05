import React, { useState } from "react";

function LoginPage({ onLogin }) {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Abhi sirf frontend demo: koi bhi naam + code chalega
    if (!name.trim()) {
      alert("Please enter your Ranger name.");
      return;
    }
    onLogin();
  };

  return (
    <div className="w-full max-w-md bg-black/70 border border-white/10 rounded-ranger p-6 shadow-ranger-glow">
      <div className="mb-4 text-center">
        <h1 className="text-3xl font-extrabold tracking-wide mb-1">
          Ranger Ops Planner
        </h1>
        <p className="text-sm text-gray-300">
          Join your squad and plan the next mission.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Ranger Name</label>
          <input
            type="text"
            className="w-full p-2 rounded bg-black/50 border border-white/20 text-sm outline-none"
            placeholder="e.g. Red Ranger"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm mb-1">
            Mission Code (Invite Code)
          </label>
          <input
            type="text"
            className="w-full p-2 rounded bg-black/50 border border-white/20 text-sm outline-none"
            placeholder="Enter code or leave blank for demo"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full mt-2 bg-ranger-blue hover:bg-blue-500 text-white font-semibold py-2 rounded-ranger transition"
        >
          Enter Command Center
        </button>
      </form>

      <div className="mt-4 text-xs text-gray-400 text-center">
        This is a frontend-only login. Real auth and access control will connect
        to backend later.
      </div>
    </div>
  );
}

export default LoginPage;
