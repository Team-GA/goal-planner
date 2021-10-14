import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <header className="landing-header">
        <div className="button">
          <Link to="/login">
            <button id="landing-btn">login</button>
          </Link>
          <Link to="/register">
            <button id="landing-btn">register</button>
          </Link>
        </div>
        {/* <h2>Passion Planner!</h2>
        <div>
          <h3>avatar</h3>
        </div> */}
      </header>
      <h2>Welcome to Passion Planner, this is the landing page</h2>
    </div>
  );
}

export default Landing;
