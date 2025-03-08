import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css"; // Add CSS styling separately

function LandingPage() {
  console.log("lol");
  return (
    <div className="landing-container">
      {/* <header className="landing-header">
        <h1>Welcome to Online Auction</h1>
        <nav>
          <Link to="/signin" className="nav-link">Sign In</Link>
          <Link to="/signup" className="nav-link">Sign Up</Link>
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
          <Link to="/post-auction" className="nav-link">Post Auction</Link>
        </nav>
      </header> */}

      <section className="hero">
        <h2>Bid, Win, and Sell with Ease</h2>
        <p>Join the best online auction platform where you can bid on exclusive items or sell your own!</p>
        <Link to="/signup" className="cta-button">Get Started</Link>
      </section>

      <section className="features">
        <div className="feature">
          <h3>Easy Bidding</h3>
          <p>Place bids effortlessly and compete with others to win amazing items.</p>
        </div>
        <div className="feature">
          <h3>Secure Transactions</h3>
          <p>Our platform ensures secure transactions and safe user experience.</p>
        </div>
        {/* <div className="feature">
          <h3>Sell Your Items</h3>
          <p>Post your own items for auction and reach potential buyers worldwide.</p>
        </div> */}
      </section>

      {/* <footer>
        <p>&copy; 2025 Online Auction Platform. All rights reserved.</p>
      </footer> */}
    </div>
  );
}

export default LandingPage;