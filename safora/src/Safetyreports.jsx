import { useState } from "react";
import "./SafetyReports.css";

function SafetyReports({ onBack }) {
  const [issueType, setIssueType] = useState("");
  const [severity, setSeverity] = useState("Medium");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [reports, setReports] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!issueType || !location || !description) {
      alert("Please fill all required fields.");
      return;
    }

    const newReport = {
      id: Date.now(),
      issueType,
      severity,
      location,
      description,
      status: "Pending",
      date: new Date().toLocaleDateString(),
    };

    setReports([newReport, ...reports]);

    setIssueType("");
    setSeverity("Medium");
    setLocation("");
    setDescription("");

    alert("Safety report submitted successfully! 🚨");
  };

  return (
    <div className="reports-page">

      <header className="reports-header">
        <div>
          <span className="reports-label">
            COMMUNITY SAFETY
          </span>

          <h1>Safety Reports 🚨</h1>

          <p>
            Report safety concerns and help make travel
            safer for everyone.
          </p>
        </div>

        <button
          className="reports-back"
          onClick={onBack}
        >
          ← Dashboard
        </button>
      </header>

      <div className="reports-grid">

        {/* REPORT FORM */}

        <section className="report-form-card">

          <div className="form-title">
            <div className="form-icon">🚨</div>

            <div>
              <h2>Report a Safety Issue</h2>
              <p>
                Tell us about a safety concern.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="report-input">
              <label>
                Issue Type *
              </label>

              <select
                value={issueType}
                onChange={(e) =>
                  setIssueType(e.target.value)
                }
              >
                <option value="">
                  Select issue type
                </option>

                <option value="Poor Lighting">
                  💡 Poor Lighting
                </option>

                <option value="Unsafe Area">
                  ⚠️ Unsafe Area
                </option>

                <option value="Road Damage">
                  🛣️ Road Damage
                </option>

                <option value="Traffic Problem">
                  🚦 Traffic Problem
                </option>

                <option value="Suspicious Activity">
                  👁️ Suspicious Activity
                </option>

                <option value="Other">
                  📌 Other
                </option>
              </select>
            </div>

            <div className="report-input">
              <label>
                Location *
              </label>

              <div className="location-input">

                <span>📍</span>

                <input
                  type="text"
                  value={location}
                  onChange={(e) =>
                    setLocation(e.target.value)
                  }
                  placeholder="Enter the location"
                />

              </div>
            </div>

            <div className="report-input">
              <label>
                Severity
              </label>

              <div className="severity-options">

                {["Low", "Medium", "High"].map(
                  (level) => (
                    <button
                      type="button"
                      key={level}
                      className={
                        severity === level
                          ? `severity-btn selected ${level.toLowerCase()}`
                          : "severity-btn"
                      }
                      onClick={() =>
                        setSeverity(level)
                      }
                    >
                      {level}
                    </button>
                  )
                )}

              </div>
            </div>

            <div className="report-input">
              <label>
                Description *
              </label>

              <textarea
                value={description}
                onChange={(e) =>
                  setDescription(e.target.value)
                }
                placeholder="Describe the safety concern..."
                rows="5"
              />
            </div>

            <button
              type="submit"
              className="submit-report"
            >
              🚨 Submit Safety Report →
            </button>

          </form>
        </section>

        {/* INFORMATION CARD */}

        <section className="report-info-card">

          <div className="info-shield">
            🛡️
          </div>

          <h2>
            Help Make Routes Safer
          </h2>

          <p>
            Your reports help Safora identify safety
            concerns and improve travel awareness.
          </p>

          <div className="info-points">

            <div>
              <span>📍</span>
              <div>
                <strong>Report Location</strong>
                <small>
                  Tell us where the issue happened.
                </small>
              </div>
            </div>

            <div>
              <span>⚠️</span>
              <div>
                <strong>Choose Severity</strong>
                <small>
                  Help prioritize important issues.
                </small>
              </div>
            </div>

            <div>
              <span>🤝</span>
              <div>
                <strong>Support Community</strong>
                <small>
                  Help other travelers stay aware.
                </small>
              </div>
            </div>

          </div>

        </section>

      </div>

      {/* SUBMITTED REPORTS */}

      <section className="submitted-section">

        <div className="submitted-header">
          <div>
            <span>YOUR ACTIVITY</span>
            <h2>Submitted Reports</h2>
          </div>

          <strong>
            {reports.length} Reports
          </strong>
        </div>

        {reports.length === 0 ? (
          <div className="empty-reports">

            <div>📋</div>

            <h3>No reports yet</h3>

            <p>
              Your submitted safety reports will appear here.
            </p>

          </div>
        ) : (
          <div className="reports-list">

            {reports.map((report) => (
              <div
                className="report-item"
                key={report.id}
              >

                <div className="report-item-icon">
                  🚨
                </div>

                <div className="report-item-content">

                  <div className="report-item-top">

                    <h3>
                      {report.issueType}
                    </h3>

                    <span
                      className={`status-badge ${report.status.toLowerCase()}`}
                    >
                      {report.status}
                    </span>

                  </div>

                  <p>
                    📍 {report.location}
                  </p>

                  <small>
                    {report.description}
                  </small>

                  <div className="report-meta">
                    <span>
                      {report.severity} Severity
                    </span>

                    <span>
                      {report.date}
                    </span>
                  </div>

                </div>

              </div>
            ))}

          </div>
        )}

      </section>

    </div>
  );
}

export default SafetyReports;