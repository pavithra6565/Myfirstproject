import { useState } from "react";
import "./App.css";

import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  const [mode, setMode] = useState("walk");

  // -----------------------------
  // DASHBOARD
  // -----------------------------
  if (showDashboard) {
    return (
      <Dashboard
        onLogout={() => {
          setShowDashboard(false);
          setShowLogin(false);
          setShowSignup(false);
        }}
      />
    );
  }

  // -----------------------------
  // LOGIN PAGE
  // -----------------------------
  if (showLogin) {
    return (
      <Login
        onBack={() => setShowLogin(false)}
        onSignup={() => {
          setShowLogin(false);
          setShowSignup(true);
        }}
        onSuccess={() => {
          setShowLogin(false);
          setShowDashboard(true);
        }}
      />
    );
  }

  // -----------------------------
  // SIGNUP PAGE
  // -----------------------------
  if (showSignup) {
    return (
      <Signup
        onBack={() => setShowSignup(false)}
        onLogin={() => {
          setShowSignup(false);
          setShowLogin(true);
        }}
        onSuccess={() => {
          setShowSignup(false);
          setShowDashboard(true);
        }}
      />
    );
  }

  // -----------------------------
  // LANDING PAGE
  // -----------------------------
  const scrollToJourney = () => {
    const section = document.getElementById("journey");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const scrollToFeatures = () => {
    const section = document.getElementById("features");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleRouteSearch = () => {
    alert(
      `Safora is analyzing the safest ${mode === "walk" ? "walking" : "riding"} route...`
    );
  };

  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <div className="logo">
          <span className="logo-shield">🛡️</span>
          <span>SAFORA</span>
        </div>

        <div className="nav-links">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Home
          </button>

          <button onClick={scrollToJourney}>
            Journey
          </button>

          <button onClick={scrollToFeatures}>
            Features
          </button>

          <button onClick={() => setShowLogin(true)}>
            Login
          </button>
        </div>

        <button
          className="nav-login"
          onClick={() => setShowLogin(true)}
        >
          Get Started →
        </button>
      </nav>

      {/* ================= HERO ================= */}

      <section className="hero">
        <div className="hero-content">

          <div className="hero-badge">
            <span>●</span>
            SMART PERSONAL TRAVEL SAFETY
          </div>

          <h1>
            Travel Smart.
            <br />
            <span>Stay Safe.</span>
          </h1>

          <p>
            Safora helps you choose safer routes, monitor your
            journey, and travel with confidence — whether you're
            walking or riding.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={scrollToJourney}
            >
              Start Your Journey
              <span>→</span>
            </button>

            <button
              className="secondary-btn"
              onClick={scrollToFeatures}
            >
              Explore Safora
            </button>

          </div>

          <div className="hero-stats">

            <div className="stat">
              <strong>92%</strong>
              <span>Safety Accuracy</span>
            </div>

            <div className="stat">
              <strong>24/7</strong>
              <span>Safety Monitoring</span>
            </div>

            <div className="stat">
              <strong>2</strong>
              <span>Travel Modes</span>
            </div>

          </div>
        </div>

        {/* ================= HERO VISUAL ================= */}

        <div className="hero-visual">

          <div className="map-card">

            <div className="map-top">
              <div>
                <span className="live-dot"></span>
                LIVE SAFETY MAP
              </div>

              <span className="map-status">
                ● ACTIVE
              </span>
            </div>

            <div className="map-area">

              <div className="map-road road-one"></div>

              <div className="map-road road-two"></div>

              <div className="map-road road-three"></div>

              <div className="map-point point-one">
                <span>●</span>
              </div>

              <div className="map-point point-two">
                <span>●</span>
              </div>

              <div className="map-point point-three">
                <span>●</span>
              </div>

              <div className="route-line"></div>

              <div className="location-icon">
                📍
              </div>

              <div className="destination">
                🎯
              </div>

              <div className="safety-card">

                <div className="score-circle">
                  <strong>94</strong>
                  <span>/100</span>
                </div>

                <div>
                  <small>ROUTE SAFETY</small>
                  <strong>Excellent</strong>
                </div>

              </div>

              <div className="time-card">
                <span>🕐</span>
                <div>
                  <small>EST. TIME</small>
                  <strong>18 min</strong>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= JOURNEY ================= */}

      <section
        className="journey-section"
        id="journey"
      >

        <div className="section-heading">

          <div className="section-tag">
            PLAN YOUR JOURNEY
          </div>

          <h2>
            Find a <span>Safer Route.</span>
          </h2>

          <p>
            Tell Safora where you're going and we'll help you
            make a smarter travel decision.
          </p>

        </div>

        <div className="journey-box">

          <div className="destination-input">

            <div className="input-icon">
              📍
            </div>

            <div>
              <label>STARTING POINT</label>

              <input
                type="text"
                placeholder="Enter your starting location"
              />
            </div>

          </div>

          <div className="destination-input">

            <div className="input-icon">
              🎯
            </div>

            <div>
              <label>DESTINATION</label>

              <input
                type="text"
                placeholder="Where do you want to go?"
              />
            </div>

          </div>

          <div className="mode-section">

            <label className="mode-title">
              TRAVEL MODE
            </label>

            <div className="mode-options">

              <button
                className={`mode-card ${
                  mode === "walk" ? "selected" : ""
                }`}
                onClick={() => setMode("walk")}
              >
                <span className="mode-icon">
                  🚶
                </span>

                <div>
                  <strong>SafeWalk</strong>
                  <small>Walking route</small>
                </div>

                {mode === "walk" && (
                  <span className="mode-check">
                    ✓
                  </span>
                )}
              </button>

              <button
                className={`mode-card ${
                  mode === "ride" ? "selected" : ""
                }`}
                onClick={() => setMode("ride")}
              >
                <span className="mode-icon">
                  🚗
                </span>

                <div>
                  <strong>SafeRide</strong>
                  <small>Riding route</small>
                </div>

                {mode === "ride" && (
                  <span className="mode-check">
                    ✓
                  </span>
                )}
              </button>

            </div>

          </div>

          <button
            className="route-btn"
            onClick={handleRouteSearch}
          >
            <span>🛡️</span>
            Analyze Safer Route
            <span>→</span>
          </button>

        </div>
      </section>

      {/* ================= FEATURES ================= */}

      <section
        className="features-section"
        id="features"
      >

        <div className="section-heading">

          <div className="section-tag">
            WHY SAFORA?
          </div>

          <h2>
            Safety That Travels
            <span> With You.</span>
          </h2>

          <p>
            Everything you need for a smarter and safer
            travel experience.
          </p>

        </div>

        <div className="feature-grid">

          <div className="feature-card">

            <div className="feature-icon">
              🛡️
            </div>

            <h3>
              Safety Score
            </h3>

            <p>
              Understand how safe your route is with an
              easy-to-read safety score.
            </p>

            <span className="feature-arrow">
              →
            </span>

          </div>

          <div className="feature-card">

            <div className="feature-icon">
              🗺️
            </div>

            <h3>
              Smart Routes
            </h3>

            <p>
              Compare routes and choose a safer option
              based on travel conditions.
            </p>

            <span className="feature-arrow">
              →
            </span>

          </div>

          <div className="feature-card">

            <div className="feature-icon">
              🚨
            </div>

            <h3>
              Safety Reports
            </h3>

            <p>
              Report safety concerns and help create
              safer routes for the community.
            </p>

            <span className="feature-arrow">
              →
            </span>

          </div>

          <div className="feature-card">

            <div className="feature-icon">
              🔔
            </div>

            <h3>
              Travel Alerts
            </h3>

            <p>
              Stay informed about important safety
              alerts around your journey.
            </p>

            <span className="feature-arrow">
              →
            </span>

          </div>

        </div>
      </section>

      {/* ================= SAFETY BANNER ================= */}

      <section className="safety-banner">

        <div className="big-score">
          <strong>92</strong>
          <span>/100</span>
        </div>

        <div className="banner-content">

          <span>
            SAFORA SAFETY INDEX
          </span>

          <h2>
            Your journey deserves
            <br />
            a smarter safety decision.
          </h2>

          <p>
            Safora combines travel information and safety
            indicators to help you make better decisions.
          </p>

        </div>

        <button
          onClick={() => setShowLogin(true)}
        >
          Join Safora →
        </button>

      </section>

      {/* ================= ABOUT ================= */}

      <section className="about-section">

        <div className="about-content">

          <div className="section-tag">
            ABOUT SAFORA
          </div>

          <h2>
            Move Freely.
            <br />
            <span>Travel Confidently.</span>
          </h2>

          <p>
            Safora is a smart personal travel safety platform
            designed to make everyday journeys safer and
            more informed.
          </p>

          <p>
            From walking to riding, Safora gives you the
            information you need to understand your route
            and make smarter travel choices.
          </p>

          <button
            className="primary-btn"
            onClick={() => setShowLogin(true)}
          >
            Get Started →
          </button>

        </div>

        <div className="about-visual">

          <div className="about-card">

            <div className="about-shield">
              🛡️
            </div>

            <h3>
              Travel Safety
            </h3>

            <p>
              Smart decisions.
              Safer journeys.
            </p>

            <div className="about-line"></div>

            <div className="about-mini-stats">

              <div>
                <strong>24/7</strong>
                <span>Monitoring</span>
              </div>

              <div>
                <strong>2</strong>
                <span>Modes</span>
              </div>

              <div>
                <strong>92</strong>
                <span>Safety</span>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-logo">
          <span>🛡️</span>
          SAFORA
        </div>

        <p>
          Smart travel. Safer journeys.
        </p>

        <div className="footer-links">

          <button onClick={scrollToJourney}>
            Journey
          </button>

          <button onClick={scrollToFeatures}>
            Features
          </button>

          <button onClick={() => setShowLogin(true)}>
            Login
          </button>

        </div>

        <div className="footer-bottom">
          © 2026 Safora. Smart Personal Travel Safety Platform.
        </div>

      </footer>

    </div>
  );
}

export default App;