import React, { useState } from "react";

export default function RangerSignup({ onBack, onSignupSuccess }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("Please fill all fields!");
      return;
    }
    onSignupSuccess(); // Go back to Sign In page
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/bg-rangers.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Neon Red Glow Box */}
      <div
        style={{
          width: "480px",
          padding: "35px 40px",
          background: "rgba(0,0,0,0.65)",
          borderRadius: "25px",
          boxShadow: "0 0 25px rgba(255, 0, 0, 0.8)",
          border: "2px solid rgba(255,0,0,0.5)",
          color: "white",
          backdropFilter: "blur(6px)",
        }}
      >
        {/* Back Button */}
        <button
          onClick={onBack}
          style={{
            color: "#ccc",
            marginBottom: "10px",
            fontSize: "15px",
            cursor: "pointer",
          }}
        >
          ← Back
        </button>

        {/* Heading */}
        <h1
          style={{
            textAlign: "center",
            fontSize: "32px",
            letterSpacing: "4px",
            marginBottom: "25px",
          }}
        >
          RANGER SIGN UP
        </h1>

        {/* FORM */}
        <form onSubmit={handleSignup}>
          {/* Ranger Name */}
          <div style={{ marginBottom: "18px" }}>
            <label>Ranger Name</label>
            <input
              type="text"
              placeholder="Choose your Ranger designation"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle}
            />
          </div>

          {/* Email */}
          <div style={{ marginBottom: "18px" }}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Your Zordon Communication Channel"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
            />
          </div>

          {/* Password */}
          <div style={{ marginBottom: "25px" }}>
            <label>Password</label>
            <input
              type="password"
              placeholder="Morphin' Security Code"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
            />
          </div>

          {/* SIGN UP BUTTON */}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px 0",
              borderRadius: "10px",
              background: "linear-gradient(to right, #ff3b3b, #ff6b6b)",
              border: "none",
              fontSize: "18px",
              fontWeight: "bold",
              color: "white",
              cursor: "pointer",
            }}
          >
            SIGN UP
          </button>
        </form>

        {/* LINKS BELOW */}
        <div
          style={{
            marginTop: "15px",
            textAlign: "center",
            fontSize: "14px",
            opacity: 0.8,
          }}
        >
          Already have an account?{" "}
          <span
            style={{
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={onBack}
          >
            Sign In
          </span>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  marginTop: "5px",
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #4da6ff",
  background: "rgba(0,0,0,0.4)",
  color: "white",
};

