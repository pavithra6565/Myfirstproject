import { useState } from "react";
import "./Dashboard.css";
import SafetyReports from "./SafetyReports";

function Dashboard({ onLogout }) {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [showJourney, setShowJourney] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: "⌂" },
    { name: "My Journeys", icon: "🧭" },
    { name: "Safety Reports", icon: "🚨" },
    { name: "Travel Alerts", icon: "🔔" },
    { name: "Emergency Contacts", icon: "📞" },
  ];

  const handleMenuClick = (name) => {
    setActiveMenu(name);

    if (name === "Dashboard") {
      setShowJourney(false);
    }
  };

  /* SAFETY REPORTS PAGE */

  if (activeMenu === "Safety Reports") {
    return (
      <SafetyReports
        onBack={() => setActiveMenu("Dashboard")}
      />
    );
  }

  return (
    <div className="dashboard">

      {/* SIDEBAR */}

      <aside className="sidebar">

        <div className="dashboard-logo">
          SAFORA
        </div>

        <div className="sidebar-label">
          MAIN MENU
        </div>

        <div className="menu-list">

          {menuItems.map((item) => (
            <button
              key={item.name}
              className={`menu-item ${
                activeMenu === item.name ? "active" : ""
              }`}
              onClick={() => handleMenuClick(item.name)}
            >
              <span className="menu-icon">
                {item.icon}
              </span>

              <span>
                {item.name}
              </span>
            </button>
          ))}

        </div>

        {/* SAFETY STATUS */}

        <div className="sidebar-safety">

          <div className="shield-icon">
            🛡️
          </div>

          <h4>
            Safety Status
          </h4>

          <p>
            Your account is protected
          </p>

          <div className="status-online">
            <span></span>
            Active
          </div>

        </div>

        {/* LOGOUT */}

        <button
          className="logout-btn"
          onClick={onLogout}
        >
          <span>
            ↪
          </span>

          Logout
        </button>

      </aside>

      {/* MAIN CONTENT */}

      <main className="dashboard-main">

        {/* HEADER */}

        <header className="dashboard-header">

          <div>

            <p className="dashboard-small-title">
              PERSONAL SAFETY CENTER
            </p>

            <h1>
              Welcome back, Traveler 👋
            </h1>

            <p className="dashboard-subtitle">
              Plan smarter. Travel safer.
            </p>

          </div>

          <div className="profile-area">

            <div className="notification">
              🔔
              <span>
                2
              </span>
            </div>

            <div className="profile-avatar">
              T
            </div>

            <div className="profile-name">

              <strong>
                Traveler
              </strong>

              <small>
                User
              </small>

            </div>

          </div>

        </header>

        {/* QUICK ACTIONS */}

        <section className="quick-section">

          <div className="quick-title">

            <div>

              <h2>
                Quick Actions
              </h2>

              <p>
                Start your next journey
              </p>

            </div>

          </div>

          <div className="quick-grid">

            {/* SAFEWALK */}

            <button
              className="quick-card walk-card"
              onClick={() => {
                setShowJourney(true);
                setActiveMenu("Dashboard");
              }}
            >

              <div className="quick-icon">
                🚶
              </div>

              <div>

                <h3>
                  SafeWalk
                </h3>

                <p>
                  Find a smarter walking route
                </p>

              </div>

              <span className="quick-arrow">
                →
              </span>

            </button>

            {/* SAFERIDE */}

            <button
              className="quick-card ride-card"
              onClick={() => {
                setShowJourney(true);
                setActiveMenu("Dashboard");
              }}
            >

              <div className="quick-icon">
                🚗
              </div>

              <div>

                <h3>
                  SafeRide
                </h3>

                <p>
                  Plan a safer ride journey
                </p>

              </div>

              <span className="quick-arrow">
                →
              </span>

            </button>

            {/* REPORT */}

            <button
              className="quick-card report-card"
              onClick={() =>
                setActiveMenu("Safety Reports")
              }
            >

              <div className="quick-icon">
                🚨
              </div>

              <div>

                <h3>
                  Report Issue
                </h3>

                <p>
                  Report a safety concern
                </p>

              </div>

              <span className="quick-arrow">
                →
              </span>

            </button>

          </div>

        </section>

        {/* NEW JOURNEY */}

        {showJourney && (

          <section className="journey-panel">

            <div className="panel-header">

              <div>

                <span>
                  NEW JOURNEY
                </span>

                <h2>
                  Where are you going?
                </h2>

              </div>

              <button
                onClick={() => setShowJourney(false)}
              >
                ✕
              </button>

            </div>

            <div className="journey-form">

              <div className="dashboard-input">

                <label>
                  📍 Starting Point
                </label>

                <input
                  type="text"
                  placeholder="Enter starting location"
                />

              </div>

              <div className="dashboard-input">

                <label>
                  🎯 Destination
                </label>

                <input
                  type="text"
                  placeholder="Where do you want to go?"
                />

              </div>

              <button
                className="find-route-dashboard"
                onClick={() =>
                  alert(
                    "Route analysis will be connected with the backend soon! 🚀"
                  )
                }
              >
                Analyze Safer Route →
              </button>

            </div>

          </section>

        )}

        {/* SAFETY OVERVIEW */}

        <section className="overview-section">

          <div className="section-title">

            <div>

              <h2>
                Safety Overview
              </h2>

              <p>
                Your current travel safety indicators
              </p>

            </div>

            <span className="updated">
              Updated just now
            </span>

          </div>

          <div className="overview-grid">

            {/* SAFETY SCORE */}

            <div className="overview-card score-card">

              <div className="overview-top">

                <span>
                  🛡️
                </span>

                <small>
                  GOOD
                </small>

              </div>

              <h3>
                92
                <span>
                  /100
                </span>
              </h3>

              <p>
                Overall Safety Score
              </p>

              <div className="progress">

                <div
                  className="progress-fill"
                  style={{ width: "92%" }}
                ></div>

              </div>

            </div>

            {/* JOURNEYS */}

            <div className="overview-card">

              <div className="overview-icon">
                🧭
              </div>

              <h3>
                12
              </h3>

              <p>
                Journeys Completed
              </p>

              <span className="positive">
                +3 this month
              </span>

            </div>

            {/* REPORTS */}

            <div className="overview-card">

              <div className="overview-icon">
                🚨
              </div>

              <h3>
                4
              </h3>

              <p>
                Reports Submitted
              </p>

              <span className="positive">
                Community Impact
              </span>

            </div>

            {/* ALERTS */}

            <div className="overview-card">

              <div className="overview-icon">
                🔔
              </div>

              <h3>
                2
              </h3>

              <p>
                Active Alerts
              </p>

              <span className="alert-text">
                Review recommended
              </span>

            </div>

          </div>

        </section>

        {/* RECENT JOURNEYS */}

        <section className="recent-section">

          <div className="section-title">

            <div>

              <h2>
                Recent Journeys
              </h2>

              <p>
                Your latest travel activity
              </p>

            </div>

            <button
              className="view-all"
              onClick={() =>
                setActiveMenu("My Journeys")
              }
            >
              View All →
            </button>

          </div>

          <div className="journey-table">

            <div className="table-head">

              <span>
                JOURNEY
              </span>

              <span>
                MODE
              </span>

              <span>
                SAFETY
              </span>

              <span>
                STATUS
              </span>

            </div>

            {/* JOURNEY 1 */}

            <div className="journey-row">

              <div className="route-info">

                <strong>
                  Home → College
                </strong>

                <small>
                  Today • 8:30 AM
                </small>

              </div>

              <span className="mode-badge">
                🚶 Walk
              </span>

              <span className="safety-good">
                94/100
              </span>

              <span className="completed">
                Completed
              </span>

            </div>

            {/* JOURNEY 2 */}

            <div className="journey-row">

              <div className="route-info">

                <strong>
                  College → City Center
                </strong>

                <small>
                  Yesterday • 5:15 PM
                </small>

              </div>

              <span className="mode-badge ride">
                🚗 Ride
              </span>

              <span className="safety-good">
                89/100
              </span>

              <span className="completed">
                Completed
              </span>

            </div>

            {/* JOURNEY 3 */}

            <div className="journey-row">

              <div className="route-info">

                <strong>
                  Railway Station → Home
                </strong>

                <small>
                  Aug 30 • 7:20 PM
                </small>

              </div>

              <span className="mode-badge">
                🚶 Walk
              </span>

              <span className="safety-medium">
                76/100
              </span>

              <span className="completed">
                Completed
              </span>

            </div>

          </div>

        </section>

        {/* SAFETY TIP */}

        <section className="safety-tip">

          <div className="tip-icon">
            💡
          </div>

          <div>

            <span>
              SAFORA SAFETY TIP
            </span>

            <h3>
              Stay aware of your surroundings.
            </h3>

            <p>
              Always review route information and travel
              alerts before starting a journey.
            </p>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;