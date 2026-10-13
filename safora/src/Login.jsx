import { useState } from "react";
import "./Login.css";

function Login({ onBack, onSignup }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password) {
      alert("Please fill all fields.");
      return;
    }

    alert("Login successful! 🚀");
  };

  return (
    <div className="login-page">

      {/* BACK BUTTON */}
      <button
        className="back-btn"
        onClick={onBack}
      >
        ← Back to Safora
      </button>

      <div className="login-container">

        {/* ================= LEFT SIDE ================= */}

        <div className="login-info">

          <div className="login-logo">
            SAFORA
          </div>

          <h1>
            Travel Smart.
            <br />
            <span>Stay Safe.</span>
          </h1>

          <p>
            Your smart personal travel safety platform
            for safer walking and riding experiences.
          </p>

          <div className="login-features">

            <div>
              <span>🛡️</span>
              <p>Smart Safety Routes</p>
            </div>

            <div>
              <span>🚶</span>
              <p>SafeWalk</p>
            </div>

            <div>
              <span>🚗</span>
              <p>SafeRide</p>
            </div>

            <div>
              <span>🚨</span>
              <p>Emergency Support</p>
            </div>

          </div>

        </div>


        {/* ================= LOGIN CARD ================= */}

        <div className="login-card">

          <div className="login-heading">

            <h2>
              Welcome Back 👋
            </h2>

            <p>
              Login to continue your safe journey.
            </p>

          </div>


          <form onSubmit={handleSubmit}>

            {/* EMAIL */}

            <div className="input-group">

              <label>
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />

            </div>


            {/* PASSWORD */}

            <div className="input-group">

              <label>
                Password
              </label>

              <div className="password-box">

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  placeholder="Enter your password"
                  required
                />

                <button
                  type="button"
                  className="show-password"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>

              </div>

            </div>


            {/* OPTIONS */}

            <div className="login-options">

              <label>
                <input
                  type="checkbox"
                />
                Remember me
              </label>

              <button
                type="button"
                className="forgot-btn"
                onClick={() =>
                  alert(
                    "Password recovery will be available soon."
                  )
                }
              >
                Forgot Password?
              </button>

            </div>


            {/* LOGIN BUTTON */}

            <button
              type="submit"
              className="login-submit"
            >
              Login →
            </button>

          </form>


          {/* DIVIDER */}

          <div className="divider">
            <span>or</span>
          </div>


          {/* SIGNUP */}

          <p className="signup-text">

            Don't have an account?

            <button
              type="button"
              className="signup-btn"
              onClick={onSignup}
            >
              Create Account
            </button>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;