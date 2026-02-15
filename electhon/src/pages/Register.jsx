import { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import "../styles/register.css";

export default function Register() {
  const [formData, setFormData] = useState({
    teamName: "",
    leadName: "",
    leadRoll: "",
    leadEmail: "",
    leadPhone: "",
    member2Name: "",
    member2Roll: "",
    member2Phone: "",
    member3Name: "",
    member3Roll: "",
    member3Phone: "",
    problemStatement: "",
    abstract: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <PageWrapper>
      <section className="register">
        <h2>Join The Hackathon</h2>

        {/* 🔴 CLOSED BANNER */}
        <div className="closed-banner">
          REGISTRATION CLOSED
        </div>

        <p className="closed-text">
          We sincerely appreciate your interest in participating. 
          We sincerely appreciate your interest. <br></br>
          Registrations are now closed as the deadline for submission has been reached.
        </p>

        {/* Form (Disabled for display purpose)*/}
        <form className="register-form disabled-form">
          
          <div className="form-card">
            <h3>TEAM INFORMATION</h3>
            <input placeholder="Team Name" disabled />
          </div>

          <div className="form-card">
            <h3>TEAM LEAD (MEMBER 1)</h3>
            <input placeholder="Name" disabled />
            <input placeholder="Roll No" disabled />
            <input placeholder="Email ID" disabled />
            <input placeholder="Mobile Number" disabled />
          </div>

          <div className="member-grid">
            <div className="form-card">
              <h3>TEAM MATE 2</h3>
              <input placeholder="Name" disabled />
              <input placeholder="Roll No" disabled />
              <input placeholder="Mobile Number" disabled />
            </div>

            <div className="form-card">
              <h3>TEAM MATE 3</h3>
              <input placeholder="Name" disabled />
              <input placeholder="Roll No" disabled />
              <input placeholder="Mobile Number" disabled />
            </div>
          </div>

          <div className="form-card">
            <h3>IDEA DETAILS</h3>
            <select disabled>
              <option>Select Problem Statement</option>
            </select>
            <textarea placeholder="Abstract" rows="4" disabled />
          </div>

          {/* Disabled Button */}
          <button type="button" className="register-btn" disabled>
            REGISTRATION CLOSED
          </button>

        </form>
      </section>
    </PageWrapper>
  );
}
