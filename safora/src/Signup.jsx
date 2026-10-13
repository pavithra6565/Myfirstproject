import { useState } from "react";
import "./Signup.css";

function Signup({ onBack, onLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      alert("Passwords do not match! ❌");
      return;
    }

    alert("Account created successfully! 🎉");
    onLogin();
  };

  return (
    <div className="signup-page">

      {/* BACK BUTTON */}
      <button className="signup-back" onClick={onBack}>
        ← Back
      </button>

      <div className="signup-container">

        {/* LEFT SECTION */}
        <div className="signup-info">

          <div className="signup-logo">
            SAFORA
          </div>

          <div className="signup-badge">
            ✨ JOIN SAFORA
          </div>

          <h1>
            Start Your
            <br />
            <span>Safe Journey.</span>
          </h1>

          <p>
            Create your Safora account and make smarter
            travel decisions wherever you go.
          </p>

          <div className="signup-points">

            <div>
              <span>🛡️</span>
              <p>Smart Travel Safety</p>
            </div>

            <div>
              <span>🗺️</span>
              <p>Safer Route Suggestions</p>
            </div>

            <div>
              <span>🚨</span>
              <p>Emergency Support</p>
            </div>

          </div>

        </div>


        {/* SIGNUP CARD */}
        <div className="signup-card">

          <div className="signup-heading">
            <h2>Create Account 🚀</h2>
            <p>Join Safora and travel smarter.</p>
          </div>

          <form onSubmit={handleSubmit}>

            {/* NAME */}
            <div className="signup-input">
              <label>Full Name</label>

              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                required
              />
            </div>


            {/* EMAIL */}
            <div className="signup-input">
              <label>Email Address</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>


            {/* PHONE */}
            <div className="signup-input">
              <label>Mobile Number</label>

              <input
                type="tel"
                name="phone"
                placeholder="Enter your mobile number"
                pattern="[0-9]{10}"
                title="Enter a valid 10-digit mobile number"
                required
              />
            </div>


            {/* PASSWORD */}
            <div className="signup-input">
              <label>Password</label>

              <div className="signup-password">

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create a password"
                  minLength="6"
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>

              </div>
            </div>


            {/* CONFIRM PASSWORD */}
            <div className="signup-input">
              <label>Confirm Password</label>

              <div className="signup-password">

                <input
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  minLength="6"
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                >
                  {showConfirmPassword ? "🙈" : "👁️"}
                </button>

              </div>
            </div>


            {/* TERMS */}
            <label className="terms">

              <input
                type="checkbox"
                required
              />

              <span>
                I agree to Safora's Terms & Privacy Policy
              </span>

            </label>


            {/* BUTTON */}
            <button
              type="submit"
              className="create-account-btn"
            >
              Create Account →
            </button>

          </form>


          {/* LOGIN LINK */}
          <div className="already-account">

            <span>
              Already have an account?
            </span>

            <button
              onClick={onLogin}
            >
              Login
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Signup;