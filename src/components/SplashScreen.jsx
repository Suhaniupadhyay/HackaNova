import { useEffect } from "react";

export default function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-container">
      <div className="splash-content">
        <img
          src="/spectrum_logo.jpg"
          alt="Spectrum Strategy Logo"
          className="splash-logo"
        />
        <h1 className="splash-title">SPECTRUM STRATEGY</h1>
      </div>
    </div>
  );
}
